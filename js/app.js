/* Главный модуль приложения. Ванильный JS, без сборки. */
(function (global) {
  "use strict";

  var DATA = global.QUIZ_DATA || {};
  var SUBJECT_TITLE = {
    algo: "Алгоритмы и структуры данных", db: "Базы данных", english: "Английский язык",
    programming: "Программирование", informatika: "Информатика (методика оқыту)",
    fundamentals: "Тест на готовность к обучению",
    itbasics: "ИТ-тест (сети, БД, Excel, Python, логика)"
  };
  var SUBJECT_SHORT = {
    algo: "Алгоритмы", db: "Базы данных", english: "Английский язык",
    programming: "Программирование", informatika: "Информатика",
    fundamentals: "Готовность к обучению",
    itbasics: "ИТ-тест"
  };
  // Находит все наборы данных варианта v (v{v}-<любой предмет>), а не только
  // фиксированную тройку algo/db/english — так новые предметы (напр. вариант 8:
  // programming/informatika) подхватываются без правок этой функции.
  function subjectsForVariant(v) {
    var prefix = "v" + v + "-";
    return Object.keys(DATA)
      .filter(function (k) { return k.indexOf(prefix) === 0; })
      .map(function (k) { return { set: DATA[k], subject: k.slice(prefix.length) }; });
  }
  // Все предметы, встречающиеся хоть в одном варианте, со списком наборов данных
  // (по одному на вариант, где этот предмет есть) — нужно для конструктора экзамена.
  function allSubjectsInfo() {
    var m = {};
    Object.keys(DATA).forEach(function (k) {
      var set = DATA[k];
      (m[set.subject] = m[set.subject] || []).push(set);
    });
    return Object.keys(m).sort().map(function (subject) {
      return { subject: subject, sets: m[subject].sort(function (a, b) { return a.variant - b.variant; }) };
    });
  }

  // ---------- Состояние ----------
  var S = {
    route: "home",
    mode: "practice",           // practice | exam
    shuffleQ: false,
    shuffleOpts: false,
    test: null,                 // {scopeKey, title, subject, questions, maxScore, mode}
    answers: {},                // qid -> [letters]
    confidence: {},             // qid -> уверен | сомневаюсь | наугад
    reasons: {},                // qid -> причина ошибки
    flags: {},                  // qid -> true
    checked: {},                // qid -> true (в практике объяснение раскрыто)
    index: 0,
    startedAt: 0,
    timerId: null,
    remaining: 0,               // сек (экзамен)
    reviewFilter: "all",
    subjectFilter: null         // null = ещё не инициализирован (см. renderHome)
  };

  var elScreen = document.getElementById("screen");
  var elTimer = document.getElementById("timer");

  // ---------- Утилиты ----------
  function h(html) { return html; }
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function allSets() {
    return Object.keys(DATA).map(function (k) { return DATA[k]; });
  }
  function allQuestions() {
    var out = [];
    allSets().forEach(function (set) {
      (set.questions || []).forEach(function (q) { out.push(q); });
    });
    return out;
  }
  function topicsList() {
    var m = {};
    allQuestions().forEach(function (q) {
      if (q.topic && !q.missing) m[q.topic] = (m[q.topic] || 0) + 1;
    });
    return Object.keys(m).sort().map(function (t) { return { topic: t, n: m[t] }; });
  }
  function fmtTime(sec) {
    sec = Math.max(0, Math.round(sec));
    var m = Math.floor(sec / 60), s = sec % 60;
    return m + ":" + (s < 10 ? "0" : "") + s;
  }

  // ---------- Тема ----------
  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    document.getElementById("btnTheme").textContent = t === "dark" ? "☀️" : "🌙";
  }
  document.getElementById("btnTheme").addEventListener("click", function () {
    var cur = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(cur); Store.setSetting("theme", cur);
  });
  document.getElementById("btnHome").addEventListener("click", function () { goHome(); });

  // ---------- Сборка теста ----------
  function prepareQuestions(list) {
    var qs = S.shuffleQ ? shuffle(list) : list.slice();
    return qs.map(function (q) {
      var opts = S.shuffleOpts && !q.missing ? shuffle(q.options) : q.options;
      return Object.assign({}, q, { _options: opts });
    });
  }

  function startTest(scopeKey, title, subjectResolver, questions) {
    if (!questions.length) { alert("Нет вопросов для этого выбора."); return; }
    S.test = {
      scopeKey: scopeKey, title: title, subject: subjectResolver,
      questions: prepareQuestions(questions),
      mode: S.mode
    };
    // попытка восстановить сессию
    var saved = Store.getSession(scopeKey + "|" + S.mode);
    if (saved && confirmResume(saved)) {
      S.answers = saved.answers || {};
      S.confidence = saved.confidence || {};
      S.reasons = saved.reasons || {};
      S.flags = saved.flags || {};
      S.checked = S.mode === "practice" ? (saved.checked || {}) : {};
      S.index = saved.index || 0;
      S.remaining = saved.remaining || 0;
      S.startedAt = saved.startedAt || Date.now();
    } else {
      S.answers = {}; S.confidence = {}; S.reasons = {}; S.flags = {}; S.checked = {}; S.index = 0;
      S.startedAt = Date.now();
      S.remaining = S.mode === "exam" ? Math.round(S.test.questions.length * 72) : 0; // ~1.2 мин/вопрос
    }
    S.route = "quiz";
    startTimer();
    render();
  }
  function confirmResume(saved) {
    var answered = Object.keys(saved.answers || {}).length;
    if (!answered) return false;
    return global.confirm("Найден незавершённый прогресс (" + answered + " отвечено). Продолжить?");
  }

  function subjectOfSet(subject) { return function () { return subject; }; }

  function launchScope(variant, subject) {
    if (subject === "both") {
      var qs = [];
      subjectsForVariant(variant).forEach(function (d) { qs = qs.concat(d.set.questions); });
      startTest("v" + variant + "-both", "Вариант " + variant + " · Комплекс целиком",
        function (q) { return q.subject; }, qs);
    } else {
      var set = DATA["v" + variant + "-" + subject];
      if (!set) { alert("Данные варианта пока не загружены."); return; }
      startTest(set.key, "Вариант " + variant + " · " + SUBJECT_SHORT[subject],
        function (q) { return q.subject; }, set.questions);
    }
  }
  function launchMistakes() {
    var ids = {}; Store.getWrongIds().forEach(function (id) { ids[id] = true; });
    var qs = allQuestions().filter(function (q) { return ids[q.id] && !q.missing; });
    if (!qs.length) { alert("Список ошибок пуст. Сначала пройдите тесты."); return; }
    startTest("mistakes", "Работа над ошибками (" + qs.length + ")", function (q) { return q.subject; }, qs);
  }
  function launchTopic(topic) {
    var qs = allQuestions().filter(function (q) { return q.topic === topic && !q.missing; });
    startTest("topic:" + topic, "Тема: " + topic, function (q) { return q.subject; }, qs);
  }
  // Сдача экзамена: для каждого выбранного предмета независимо (без привязки
  // к номеру варианта у других предметов) берём случайный вариант этого предмета.
  function launchExam(subjects) {
    if (!subjects.length) { alert("Выберите хотя бы один предмет."); return; }
    var info = {}; allSubjectsInfo().forEach(function (d) { info[d.subject] = d.sets; });
    var qs = [], picked = [];
    subjects.forEach(function (subject) {
      var sets = info[subject];
      if (!sets || !sets.length) return;
      var set = sets[Math.floor(Math.random() * sets.length)];
      picked.push((SUBJECT_SHORT[subject] || subject) + " (вариант " + set.variant + ")");
      qs = qs.concat(set.questions);
    });
    if (!qs.length) { alert("Нет вопросов для выбранных предметов."); return; }
    S.mode = "exam";
    startTest("exam:" + subjects.slice().sort().join(",") + ":" + Date.now(),
      "Экзамен · " + picked.join(" · "),
      function (q) { return q.subject; }, qs);
  }
  function launchAdaptive(kind) {
    var all = allQuestions().filter(function (q) { return !q.missing; });
    var due = {}; Store.getDueIds().forEach(function (id) { due[id] = true; });
    var weak = {}; Store.getTopicStats(all).slice(0, 4).forEach(function (t) { weak[t.topic] = true; });
    var qs = all.filter(function (q) { return kind === "due" ? due[q.id] : due[q.id] || weak[q.topic]; });
    qs.sort(function (a, b) { return (due[b.id] ? 1 : 0) - (due[a.id] ? 1 : 0); });
    if (!qs.length) { alert("Пока недостаточно истории. Пройдите один вариант, чтобы получить персональную подборку."); return; }
    startTest("adaptive:" + kind, kind === "due" ? "Повторение по интервалам" : "Персональная тренировка слабых тем", function (q) { return q.subject; }, qs.slice(0, 20));
  }

  // ---------- Таймер ----------
  function startTimer() {
    stopTimer();
    if (S.mode === "exam") {
      elTimer.classList.remove("hidden");
      tick();
      S.timerId = setInterval(tick, 1000);
    } else {
      elTimer.classList.remove("hidden");
      tickUp();
      S.timerId = setInterval(tickUp, 1000);
    }
  }
  function tick() {
    S.remaining--;
    elTimer.textContent = "⏳ " + fmtTime(S.remaining);
    elTimer.classList.toggle("warn", S.remaining <= 60);
    persist();
    if (S.remaining <= 0) { stopTimer(); finishTest(true); }
  }
  function tickUp() {
    var el = Math.floor((Date.now() - S.startedAt) / 1000);
    elTimer.textContent = "⏱ " + fmtTime(el);
  }
  function stopTimer() { if (S.timerId) { clearInterval(S.timerId); S.timerId = null; } elTimer.classList.remove("warn"); }

  // ---------- Сохранение сессии ----------
  function persist() {
    if (!S.test) return;
    Store.saveSession(S.test.scopeKey + "|" + S.mode, {
      answers: S.answers, confidence: S.confidence, reasons: S.reasons, flags: S.flags, checked: S.checked,
      index: S.index, remaining: S.remaining, startedAt: S.startedAt
    });
  }

  // ---------- Навигация ----------
  function goHome() { stopTimer(); elTimer.classList.add("hidden"); S.route = "home"; S.test = null; render(); }
  function gotoIndex(i) {
    var n = S.test.questions.length;
    S.index = Math.max(0, Math.min(n - 1, i));
    // При навигации перерисовываем только карточку вопроса и навигатор,
    // а не весь экран — тогда анимация появления играет лишь у нового вопроса.
    if (S.route === "quiz" && document.getElementById("qwrap")) {
      renderNavigator();
      renderQuestion(S.test.questions[S.index]);
      updateLiveScore();
    } else {
      render();
    }
  }

  // ---------- Ответы ----------
  function selectOption(q, letter) {
    if (S.mode === "practice" && S.checked[q.id]) return; // после проверки нельзя менять
    var cur = S.answers[q.id] ? S.answers[q.id].slice() : [];
    if (q.multi) {
      var idx = cur.indexOf(letter);
      if (idx >= 0) cur.splice(idx, 1); else cur.push(letter);
    } else {
      cur = [letter];
    }
    S.answers[q.id] = cur;
    persist();
    // Точечное обновление без перерисовки всей карточки (иначе повторяются анимации)
    updateOptionsUI(q);
    updateLiveScore();
    renderNavigator();
  }

  // Обновить отметки вариантов на месте, не пересобирая карточку вопроса
  function updateOptionsUI(q) {
    var sel = S.answers[q.id] || [];
    var opts = document.getElementById("opts");
    if (opts) {
      opts.querySelectorAll(".option").forEach(function (b) {
        var isSel = sel.indexOf(b.getAttribute("data-letter")) >= 0;
        b.classList.toggle("selected", isSel);
        var mark = b.querySelector(".option__mark");
        if (mark) mark.textContent = q.multi ? (isSel ? "✓" : "") : (isSel ? "●" : "");
      });
    }
    var bch = document.getElementById("btnCheck");
    if (bch) bch.disabled = !sel.length;
  }
  function updateLiveScore() {
    var el = document.getElementById("liveScoreWrap");
    if (el) el.innerHTML = liveScoreHTML();
  }
  function toggleFlag(q) {
    S.flags[q.id] = !S.flags[q.id]; persist();
    var fb = document.getElementById("btnFlag");
    if (fb) fb.textContent = S.flags[q.id] ? "★ Снять отметку" : "☆ Отметить";
    renderNavigator();
  }
  function checkPractice(q) {
    if (!S.answers[q.id] || !S.answers[q.id].length) return;
    S.checked[q.id] = true;
    var r = Scoring.scoreQuestion(q, S.answers[q.id]);
    Store.markWrong(q.id, r.state !== "correct");
    Store.recordLearning(q, r, S.confidence[q.id], S.reasons[q.id]);
    persist();
    if (S.route === "quiz" && document.getElementById("qwrap")) {
      renderNavigator();
      renderQuestion(q);
      updateLiveScore();
    } else {
      render();
    }
  }

  // ---------- Рендер ----------
  function render() {
    if (S.route === "home") return renderHome();
    if (S.route === "quiz") return renderQuiz();
    if (S.route === "result") return renderResult();
  }

  function renderHome() {
    if (!allSets().length) {
      elScreen.innerHTML = '<div class="empty">Файлы с вопросами (data/*.js) не найдены или пусты.</div>';
      return;
    }
    var subjectsInfo = allSubjectsInfo();
    var allSubjectKeys = subjectsInfo.map(function (d) { return d.subject; });
    if (!S.subjectFilter) {
      var def = allSubjectKeys.filter(function (s) { return s === "algo" || s === "db"; });
      S.subjectFilter = def.length ? def : allSubjectKeys.slice();
    }
    var variants = [];
    Object.keys(DATA).forEach(function (k) {
      var m = k.match(/^v(\d+)-/);
      if (m && variants.indexOf(+m[1]) < 0) variants.push(+m[1]);
    });
    variants.sort(function (a, b) { return a - b; });
    variants = variants.filter(function (v) {
      return subjectsForVariant(v).some(function (d) { return S.subjectFilter.indexOf(d.subject) >= 0; });
    });
    var cards = variants.map(function (v) {
      return subjectCard(v);
    }).join("");
    var subjectFilterHTML = subjectsInfo.map(function (d) {
      var checked = S.subjectFilter.indexOf(d.subject) >= 0;
      return '<label class="toggle"><input type="checkbox" class="subjFilterBox" value="' + esc(d.subject) + '" ' +
        (checked ? "checked" : "") + '> ' + esc(SUBJECT_SHORT[d.subject] || d.subject) +
        ' <span class="card__meta">(' + d.sets.length + ')</span></label>';
    }).join("");

    var topics = topicsList();
    var topicOptions = topics.map(function (t) {
      return '<option value="' + esc(t.topic) + '">' + esc(t.topic) + " (" + t.n + ")</option>";
    }).join("");
    var wrongCount = Store.getWrongIds().length;
    var topicStats = Store.getTopicStats(allQuestions());
    var dueCount = Store.getDueIds().length;
    var diagnostics = topicStats.length ? topicStats.slice(0, 6).map(function (t) {
      var cls = t.pct >= 80 ? "cov--high" : t.pct >= 50 ? "cov--mid" : "cov--low";
      return '<div class="diag-row"><span>' + esc(t.topic) + '</span><span class="cov ' + cls + '"><span class="cov__track"><span class="cov__fill" style="width:' + t.pct + '%"></span></span><span class="cov__pct">' + t.correct + '/' + t.attempts + '</span></span><small>' + t.pct + '%' + (t.confidentWrong ? ' · увер. ошибки: ' + t.confidentWrong : '') + '</small></div>';
    }).join("") : '<div class="card__meta">Пройдите тест — здесь появится профиль тем.</div>';

    elScreen.innerHTML =
      '<div class="hero"><h1>Подготовка к магистратуре</h1>' +
      '<p>Алгоритмы · Базы данных · Английский — варианты с разбором и объяснениями</p></div>' +

      '<div class="controlbar">' +
        '<span class="field-label">Режим:</span>' +
        '<div class="seg" id="segMode">' +
          '<button data-mode="practice" class="' + (S.mode === "practice" ? "active" : "") + '">🎯 Практика</button>' +
          '<button data-mode="exam" class="' + (S.mode === "exam" ? "active" : "") + '">⏳ Экзамен</button>' +
        '</div>' +
        '<label class="toggle"><input type="checkbox" id="shQ" ' + (S.shuffleQ ? "checked" : "") + '> Перемешать вопросы</label>' +
        '<label class="toggle"><input type="checkbox" id="shO" ' + (S.shuffleOpts ? "checked" : "") + '> Перемешать варианты</label>' +
        '<span class="card__meta" style="margin-left:auto">' + (S.mode === "practice" ? "Проверка и объяснение после каждого вопроса" : "Таймер, разбор в конце") + '</span>' +
      '</div>' +

      '<div class="section-title">Экзамен</div>' +
      '<div class="cards">' +
        '<div class="card"><div class="card__title">📝 Сдать экзамен</div>' +
        '<div class="card__meta">Выберите предметы — для каждого случайно возьмётся один из вариантов, независимо от того, какой вариант выпал остальным предметам.</div>' +
        '<div class="card__subjects"><button class="btn btn--primary" id="btnExam">Настроить и начать</button></div></div>' +
      '</div>' +

      '<div class="section-title">Варианты' +
        '<span class="card__meta" style="font-weight:normal;margin-left:10px">Показано: ' + variants.length + '</span>' +
      '</div>' +
      '<div class="controlbar" id="subjFilterBar">' +
        '<span class="field-label">Предметы:</span>' + subjectFilterHTML +
        '<button class="btn btn--ghost" id="btnFilterAll" style="margin-left:auto">Показать все</button>' +
        '<button class="btn btn--ghost" id="btnFilterDefault">Только алгоритмы/БД</button>' +
      '</div>' +
      '<div class="cards">' + (cards || '<div class="card__meta">Под выбранные предметы вариантов не найдено.</div>') + '</div>' +

      '<div class="section-title">Дополнительно</div>' +
      '<div class="cards">' +
        '<div class="card"><div class="card__title">🗂️ Карточки для запоминания</div>' +
          '<div class="card__meta">Короткие факты по алгоритмам и базам данных — переворачивайте, оценивайте себя.</div>' +
          '<div class="card__subjects"><a class="btn btn--primary" href="flashcards.html">Открыть карточки</a></div></div>' +
        '<div class="card"><div class="card__title">🧠 Персональная практика</div><div class="card__meta">Слабые темы и вопросы, которые пора повторить.</div><div class="card__subjects"><button class="btn btn--primary" id="btnAdaptive">Собрать до 20 вопросов</button><button class="btn btn--ghost" id="btnDue" ' + (dueCount ? '' : 'disabled') + '>🔁 Повторить: ' + dueCount + '</button></div></div>' +
        '<div class="card"><div class="card__title">🔁 Работа над ошибками</div>' +
          '<div class="card__meta">Прорешать заново вопросы, где вы ошибались. В списке: <b>' + wrongCount + '</b>.</div>' +
          '<div class="card__subjects"><button class="btn btn--primary" id="btnMistakes" ' + (wrongCount ? "" : "disabled") + '>Начать</button>' +
          (wrongCount ? '<button class="btn btn--ghost" id="btnClearWrong">Очистить список</button>' : "") + '</div></div>' +
        '<div class="card"><div class="card__title">📚 Практика по темам</div>' +
          '<div class="card__meta">Соберите вопросы одной темы из всех вариантов.</div>' +
          '<div class="card__subjects"><select class="searchbox" id="topicSel" style="flex:1">' +
          '<option value="">— выберите тему —</option>' + topicOptions + '</select>' +
          '<button class="btn btn--primary" id="btnTopic">Начать</button></div></div>' +
      '</div>' +
      '<div class="section-title">Профиль знаний</div><div class="diagnostics">' + diagnostics + '</div>';

    // события
    document.getElementById("segMode").addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      S.mode = b.getAttribute("data-mode"); renderHome();
    });
    document.getElementById("shQ").addEventListener("change", function (e) { S.shuffleQ = e.target.checked; });
    document.getElementById("shO").addEventListener("change", function (e) { S.shuffleOpts = e.target.checked; });
    elScreen.querySelectorAll(".subjFilterBox").forEach(function (box) {
      box.addEventListener("change", function () {
        var v = box.value;
        var idx = S.subjectFilter.indexOf(v);
        if (box.checked && idx < 0) S.subjectFilter.push(v);
        else if (!box.checked && idx >= 0) S.subjectFilter.splice(idx, 1);
        renderHome();
      });
    });
    document.getElementById("btnFilterAll").addEventListener("click", function () {
      S.subjectFilter = allSubjectKeys.slice(); renderHome();
    });
    document.getElementById("btnFilterDefault").addEventListener("click", function () {
      var def = allSubjectKeys.filter(function (s) { return s === "algo" || s === "db"; });
      S.subjectFilter = def.length ? def : allSubjectKeys.slice();
      renderHome();
    });
    elScreen.querySelectorAll("[data-launch]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var p = btn.getAttribute("data-launch").split(":");
        launchScope(p[0], p[1]);
      });
    });
    document.getElementById("btnExam").addEventListener("click", openExamModal);
    var bm = document.getElementById("btnMistakes"); if (bm) bm.addEventListener("click", launchMistakes);
    document.getElementById("btnAdaptive").addEventListener("click", function () { launchAdaptive("weak"); });
    var bd = document.getElementById("btnDue"); if (bd) bd.addEventListener("click", function () { launchAdaptive("due"); });
    var bc = document.getElementById("btnClearWrong"); if (bc) bc.addEventListener("click", function () { Store.clearWrong(); renderHome(); });
    document.getElementById("btnTopic").addEventListener("click", function () {
      var t = document.getElementById("topicSel").value; if (t) launchTopic(t);
    });
  }

  function subjectCard(v) {
    var allDefs = subjectsForVariant(v);
    var defs = allDefs.filter(function (d) { return S.subjectFilter.indexOf(d.subject) >= 0; });
    function subBtn(d) {
      var set = d.set, subject = d.subject;
      var best = Store.getBest(set.key);
      var count = set.questions.length;
      var maxScore = set.questions.reduce(function (sum, q) { return sum + Scoring.maxPointsFor(q); }, 0);
      var pct = best ? Math.round(best.got / best.max * 100) : 0;
      var covCls = !best ? "cov--empty" : pct >= 80 ? "cov--high" : pct >= 50 ? "cov--mid" : "cov--low";
      var bestText = best ? ("рекорд " + best.got + "/" + best.max) : "ещё не проходили";
      return '<button class="subject-btn" data-launch="' + v + ":" + subject + '">' +
        '<strong>' + SUBJECT_SHORT[subject] + '</strong>' +
        '<span class="subject-btn__meta">' + count + ' вопр. · ' + maxScore + ' баллов</span>' +
        '<span class="cov ' + covCls + '">' +
          '<span class="cov__track"><span class="cov__fill" style="width:' + pct + '%"></span></span>' +
          '<span class="cov__pct">' + (best ? pct + "%" : "—") + '</span>' +
        '</span>' +
        '<span class="subject-btn__best">' + bestText + '</span>' +
        '</button>';
    }
    var badge = defs.map(function (d) { return d.set.questions.length; }).join("+");
    return '<div class="card">' +
      '<div class="card__head"><div class="card__title">📦 Вариант ' + v + '</div>' +
      '<span class="card__badge">' + badge + ' вопр.</span></div>' +
      '<div class="card__subjects">' + defs.map(subBtn).join("") + '</div>' +
      '<button class="subject-btn" data-launch="' + v + ':both" style="text-align:center">' +
      '<strong>🧩 Комплекс целиком</strong><span>все вопросы варианта подряд</span></button>' +
      '</div>';
  }

  // ---------- Экран теста ----------
  function liveScoreHTML() {
    var test = S.test;
    var sc = Scoring.scoreTest(test.questions, S.answers);
    return S.mode === "practice"
      ? '<span class="live-score">Балл: ' + sc.got + " / " + sc.max + "</span>"
      : '<span class="card__meta">Отвечено: ' + (test.questions.length - sc.unanswered) + " / " + test.questions.length + "</span>";
  }

  function renderQuiz() {
    var test = S.test;
    var q = test.questions[S.index];

    elScreen.innerHTML =
      '<div class="quiz-head">' +
        '<div><h2>' + esc(test.title) + '</h2>' +
        '<div class="sub">' + (S.mode === "practice" ? "Режим практики" : "Режим экзамена") + '</div></div>' +
        '<div id="liveScoreWrap">' + liveScoreHTML() + '</div>' +
      '</div>' +
      '<div class="navigator" id="nav"></div>' +
      '<div id="qwrap"></div>';

    renderNavigator();
    renderQuestion(q);
  }

  function navStateOf(q) {
    var answered = S.answers[q.id] && S.answers[q.id].length;
    var flagged = S.flags[q.id];
    var cls = [];
    if (flagged) cls.push("flagged");
    if (S.mode === "practice" && S.checked[q.id]) {
      var r = Scoring.scoreQuestion(q, S.answers[q.id]);
      cls.push(r.state === "correct" ? "correct" : r.state === "partial" ? "partial" : "wrong");
    } else if (answered) {
      cls.push("answered");
    }
    return cls.join(" ");
  }

  function renderNavigator() {
    var nav = document.getElementById("nav");
    nav.innerHTML = S.test.questions.map(function (q, i) {
      var cls = navStateOf(q) + (i === S.index ? " current" : "");
      return '<button class="nav-cell ' + cls + '" data-i="' + i + '">' + (i + 1) + '</button>';
    }).join("");
    nav.querySelectorAll(".nav-cell").forEach(function (c) {
      c.addEventListener("click", function () { gotoIndex(+c.getAttribute("data-i")); });
    });
  }

  function codeHTML(code) { return code ? '<div class="codeblock">' + esc(code) + '</div>' : ""; }
  function passageHTML(p) {
    if (!p) return "";
    return '<div class="passage"><div class="passage__label">📄 Дополнительный материал к заданию</div>' +
      '<div class="passage__text">' + MathFormat.html(p).replace(/\n/g, "<br>") + '</div></div>';
  }
  function audioHTML(a) {
    if (!a) return "";
    return '<div class="qaudio"><div class="qaudio__label">🎧 Аудиозапись к вопросу</div>' +
      '<audio controls preload="none" src="' + encodeURI(a) + '"></audio>' +
      '<div class="qaudio__hint">Ответ определяется по записи — прослушайте её.</div></div>';
  }

  function renderQuestion(q) {
    var wrap = document.getElementById("qwrap");
    if (q.missing) {
      wrap.innerHTML = '<div class="qcard"><div class="qcard__no">Вопрос № ' + q.number + '</div>' +
        '<div class="qtext">Вопрос недоступен</div>' +
        '<div class="qhint">Скриншот этого вопроса отсутствует в исходных данных. ' +
        'Официальный ответ по ключу: <b>' + esc((q.correct || []).join(", ") || "—") + '</b>. ' +
        'Добавьте текст в data-файл, чтобы прорешивать его.</div>' + navButtons() + '</div>';
      bindNavButtons();
      return;
    }
    var sel = S.answers[q.id] || [];
    var isChecked = S.mode === "practice" && S.checked[q.id];
    var showCheck = isChecked; // раскрыть правильность

    var tags = '<span class="tag tag--topic">' + esc(q.topic || SUBJECT_SHORT[q.subject]) + '</span>' +
      (q.multi ? '<span class="tag tag--multi">множественный выбор</span>' : '<span class="tag">один ответ</span>') +
      (q.authored ? '<span class="tag tag--authored">🆕 доп.</span>' : "") +
      (q.disputed && isChecked ? '<span class="tag tag--disputed">⚠ спорный ответ</span>' : "");

    var opts = q._options.map(function (o) {
      var isSel = sel.indexOf(o.letter) >= 0;
      var cls = ["option"];
      if (isSel) cls.push("selected");
      if (showCheck) {
        var isCorrect = (q.correct || []).indexOf(o.letter) >= 0;
        if (isSel && isCorrect) cls.push("is-correct");
        else if (isSel && !isCorrect) cls.push("is-wrong");
        else if (!isSel && isCorrect) cls.push("is-missed");
      }
      var mark = q.multi ? (isSel ? "✓" : "") : (isSel ? "●" : "");
      return '<button class="' + cls.join(" ") + '" data-letter="' + o.letter + '">' +
        '<span class="option__mark">' + mark + '</span>' +
        '<span class="option__text"><span class="option__letter">' + o.letter + ')</span>' +
        MathFormat.html(o.text) + codeHTML(o.code) + '</span></button>';
    }).join("");

    var hint = q.multi ? "Выберите один или несколько верных вариантов (не более трёх)." : "Выберите один вариант.";
    var confidence = '<label class="confidence">Насколько уверены? <select id="confidence"><option value="">— не отмечено —</option><option value="уверен" ' + (S.confidence[q.id] === "уверен" ? "selected" : "") + '>Уверен</option><option value="сомневаюсь" ' + (S.confidence[q.id] === "сомневаюсь" ? "selected" : "") + '>Сомневаюсь</option><option value="наугад" ' + (S.confidence[q.id] === "наугад" ? "selected" : "") + '>Наугад</option></select></label>';

    var flagLabel = S.flags[q.id] ? "★ Снять отметку" : "☆ Отметить";
    var actionBtn = "";
    if (S.mode === "practice" && !isChecked) {
      actionBtn = '<button class="btn btn--primary" id="btnCheck" ' + (sel.length ? "" : "disabled") + '>Проверить</button>';
    }

    wrap.innerHTML =
      '<div class="qcard">' +
        '<div class="qcard__top"><div class="qcard__no">Вопрос № ' + q.number +
          (q.variant ? " · вариант " + q.variant : "") + " · " + SUBJECT_SHORT[q.subject] + '</div>' +
          '<div class="qtags">' + tags + '</div></div>' +
        passageHTML(q.passage) + audioHTML(q.audio) +
        '<div class="qtext">' + MathFormat.html(q.question) + '</div>' + codeHTML(q.questionCode) +
        '<div class="qhint">' + hint + '</div>' +
        confidence +
        '<div class="options options--' + (q.multi ? "multi" : "single") + (isChecked ? " locked" : "") + '" id="opts">' + opts + '</div>' +
        (showCheck ? explainHTML(q) : "") +
        '<div class="qcard__nav">' +
          '<button class="btn btn--ghost" id="btnPrev">← Назад</button>' +
          '<button class="btn btn--ghost" id="btnFlag">' + flagLabel + '</button>' +
          '<div class="spacer"></div>' +
          actionBtn +
          '<button class="btn" id="btnNext">Далее →</button>' +
          (S.index === S.test.questions.length - 1 ? '<button class="btn btn--primary" id="btnFinish">Завершить</button>' : "") +
        '</div>' +
      '</div>';

    document.getElementById("opts").querySelectorAll(".option").forEach(function (b) {
      b.addEventListener("click", function () { selectOption(q, b.getAttribute("data-letter")); });
    });
    var bch = document.getElementById("btnCheck"); if (bch) bch.addEventListener("click", function () { checkPractice(q); });
    var conf = document.getElementById("confidence"); if (conf) conf.addEventListener("change", function () { S.confidence[q.id] = conf.value; persist(); });
    bindNavButtons();
    bindAI(q);
  }

  function explainHTML(q) {
    var r = Scoring.scoreQuestion(q, S.answers[q.id] || []);
    var cls = r.state === "correct" ? "correct" : r.state === "partial" ? "partial" : "incorrect";
    var head = r.state === "correct" ? "✅ Верно" : r.state === "partial" ? "🟡 Частично верно (" + r.points + "/2)" : "❌ Неверно";
    var correctStr = (q.correct || []).join(", ");
    var disputed = q.disputed ? '<div class="disputed-note">⚠ <b>Спорный ответ.</b> ' + esc(q.disputedNote || "Официальный ключ засчитывает этот вариант, но академически он может быть неверным.") + '</div>' : "";
    var reason = r.state === "correct" ? "" : '<div class="reason"><span>Причина:</span><button data-reason="не знал">не знал</button><button data-reason="перепутал">перепутал</button><button data-reason="невнимательность">невнимательность</button></div>';
    var aiBtn = r.state === "correct" ? "" : '<div class="ai-block"><button class="btn btn--ghost" data-ai="1">🤖 Разобрать слабое место</button><div class="ai-answer hidden" data-ai-out></div></div>';
    return '<div class="explain ' + cls + '">' +
      '<div class="explain__head">' + head + '</div>' +
      '<div class="explain__body">' + MathFormat.html(q.explanation || "Объяснение появится позже.") + '</div>' +
      '<div class="explain__answer">Правильный ответ: <b>' + esc(correctStr) + '</b></div>' +
      disputed + reason + aiBtn + '</div>';
  }

  function bindAI(q) {
    var btn = elScreen.querySelector("[data-ai]");
    if (!btn) return;
    btn.addEventListener("click", function () {
      if (!AI.hasKey()) { openAIKeyModal(); return; }
      var out = elScreen.querySelector("[data-ai-out]");
      out.classList.remove("hidden"); out.textContent = "Думаю…"; btn.disabled = true;
      AI.explain(q, SUBJECT_TITLE[q.subject], "Сфокусируйся на правиле, типичной ловушке и добавь один короткий контрольный вопрос без ответа.").then(function (txt) {
        MathFormat.setText(out, txt);
      }).catch(function (e) {
        out.textContent = "Не удалось получить ответ: " + e.message;
      }).finally(function () { btn.disabled = false; });
    });
    elScreen.querySelectorAll("[data-reason]").forEach(function (b) { b.addEventListener("click", function () { S.reasons[q.id] = b.getAttribute("data-reason"); Store.updateLearningMeta(q.id, S.confidence[q.id], S.reasons[q.id]); elScreen.querySelectorAll("[data-reason]").forEach(function (x) { x.classList.toggle("active", x === b); }); }); });
  }

  function navButtons() {
    return '<div class="qcard__nav">' +
      '<button class="btn btn--ghost" id="btnPrev">← Назад</button>' +
      '<div class="spacer"></div>' +
      '<button class="btn" id="btnNext">Далее →</button>' +
      (S.index === S.test.questions.length - 1 ? '<button class="btn btn--primary" id="btnFinish">Завершить</button>' : "") +
      '</div>';
  }
  function bindNavButtons() {
    var p = document.getElementById("btnPrev"); if (p) p.addEventListener("click", function () { gotoIndex(S.index - 1); });
    var n = document.getElementById("btnNext"); if (n) n.addEventListener("click", function () { gotoIndex(S.index + 1); });
    var f = document.getElementById("btnFinish"); if (f) f.addEventListener("click", function () { confirmFinish(); });
    var fl = document.getElementById("btnFlag"); if (fl) fl.addEventListener("click", function () {
      toggleFlag(S.test.questions[S.index]);
    });
  }

  function confirmFinish() {
    var sc = Scoring.scoreTest(S.test.questions, S.answers);
    if (sc.unanswered > 0 && !global.confirm("Без ответа: " + sc.unanswered + ". Завершить тест?")) return;
    finishTest(false);
  }
  function finishTest(auto) {
    stopTimer(); elTimer.classList.add("hidden");
    var sc = Scoring.scoreTest(S.test.questions, S.answers);
    Store.recordBest(S.test.scopeKey, sc.got, sc.max);
    // фиксируем ошибки для «работы над ошибками»
    S.test.questions.forEach(function (q) {
      if (q.missing) return;
      var r = Scoring.scoreQuestion(q, S.answers[q.id] || []);
      Store.markWrong(q.id, r.state !== "correct");
      if (!(S.mode === "practice" && S.checked[q.id])) Store.recordLearning(q, r, S.confidence[q.id], S.reasons[q.id]);
    });
    Store.clearSession(S.test.scopeKey + "|" + S.mode);
    S.route = "result"; S.autoFinished = auto; render();
  }

  // ---------- Экран результата ----------
  function renderResult() {
    var test = S.test;
    var sc = Scoring.scoreTest(test.questions, S.answers);
    var pct = sc.max ? Math.round(sc.got / sc.max * 100) : 0;

    var items = test.questions.map(function (q, i) { return reviewItem(q, i); });
    var totalQ = sc.correct + sc.partial + sc.wrong + sc.unanswered;
    function segPct(n) { return totalQ ? (n / totalQ * 100) : 0; }
    var segsHTML =
      '<span class="cov-report__seg cov-report__seg--ok" style="width:' + segPct(sc.correct) + '%"></span>' +
      '<span class="cov-report__seg cov-report__seg--pt" style="width:' + segPct(sc.partial) + '%"></span>' +
      '<span class="cov-report__seg cov-report__seg--no" style="width:' + segPct(sc.wrong) + '%"></span>' +
      '<span class="cov-report__seg cov-report__seg--un" style="width:' + segPct(sc.unanswered) + '%"></span>';

    elScreen.innerHTML =
      '<div class="result-hero">' +
        (S.autoFinished ? '<div class="card__meta">⏳ Время вышло</div>' : "") +
        '<div class="cov-report">' +
          '<div class="cov-report__pct">' + pct + '<i>%</i></div>' +
          '<div class="cov-report__bar">' + segsHTML + '</div>' +
          '<div class="cov-report__score">' + sc.got + ' / ' + sc.max + ' баллов</div>' +
        '</div>' +
        '<div class="score-sub">' + esc(test.title) + '</div>' +
        '<div class="card__meta">✅ ' + sc.correct + ' верно · 🟡 ' + sc.partial + ' частично · ❌ ' + sc.wrong + ' неверно · — ' + sc.unanswered + ' без ответа</div>' +
        '<div class="result-actions">' +
          '<button class="btn btn--primary" id="btnRetry">Пройти снова</button>' +
          '<button class="btn" id="btnRetryWrong" ' + (sc.wrong + sc.partial + sc.unanswered ? "" : "disabled") + '>Только ошибки</button>' +
          '<button class="btn btn--ghost" id="btnHome2">На главную</button>' +
        '</div>' +
      '</div>' +

      '<div class="filters">' +
        '<span class="field-label">Показать:</span>' +
        filterBtn("all", "Все") + filterBtn("wrong", "Ошибки") + filterBtn("correct", "Верные") + filterBtn("flagged", "★ Отмеченные") +
        '<input class="searchbox" id="rsearch" placeholder="Поиск по тексту…" style="flex:1;min-width:180px">' +
      '</div>' +
      '<div id="reviewList">' + items.join("") + '</div>';

    document.getElementById("btnRetry").addEventListener("click", function () {
      startTest(test.scopeKey, test.title, test.subject, test.questions.map(stripPrepared));
    });
    document.getElementById("btnRetryWrong").addEventListener("click", function () {
      var qs = test.questions.filter(function (q) {
        var r = Scoring.scoreQuestion(q, S.answers[q.id] || []); return r.state !== "correct" && !q.missing;
      }).map(stripPrepared);
      startTest(test.scopeKey + ":wrong", test.title + " · ошибки", test.subject, qs);
    });
    document.getElementById("btnHome2").addEventListener("click", goHome);
    elScreen.querySelectorAll("[data-filter]").forEach(function (b) {
      b.addEventListener("click", function () { S.reviewFilter = b.getAttribute("data-filter"); applyReviewFilter(); });
    });
    document.getElementById("rsearch").addEventListener("input", applyReviewFilter);
    bindReviewAI(); bindReviewReasons();
    applyReviewFilter();
  }
  function stripPrepared(q) { var c = Object.assign({}, q); delete c._options; return c; }

  function filterBtn(key, label) {
    return '<button class="btn btn--ghost" data-filter="' + key + '" style="' +
      (S.reviewFilter === key ? "border-color:var(--primary);color:var(--primary)" : "") + '">' + label + '</button>';
  }
  function applyReviewFilter() {
    var q = (document.getElementById("rsearch").value || "").toLowerCase();
    elScreen.querySelectorAll(".review-item").forEach(function (el) {
      var st = el.getAttribute("data-state");
      var fl = el.getAttribute("data-flag") === "1";
      var text = el.getAttribute("data-text");
      var okFilter =
        S.reviewFilter === "all" ? true :
        S.reviewFilter === "wrong" ? (st !== "correct") :
        S.reviewFilter === "correct" ? (st === "correct") :
        S.reviewFilter === "flagged" ? fl : true;
      var okSearch = !q || (text && text.indexOf(q) >= 0);
      el.style.display = okFilter && okSearch ? "" : "none";
    });
  }

  function reviewItem(q, i) {
    var sel = S.answers[q.id] || [];
    var r = Scoring.scoreQuestion(q, sel);
    var cls = r.state === "correct" ? "ok" : r.state === "partial" ? "pt" : "no";
    var correctStr = (q.correct || []).join(", ");
    var yourStr = sel.length ? sel.join(", ") : "—";
    if (q.missing) {
      return '<div class="review-item pt" data-state="wrong" data-flag="0" data-text="">' +
        '<div class="review-item__q">№' + q.number + '. Вопрос недоступен</div>' +
        '<div class="mini-answer">Ответ по ключу: <span class="ok">' + esc(correctStr) + '</span></div></div>';
    }
    var opts = q.options.map(function (o) {
      var isCorrect = (q.correct || []).indexOf(o.letter) >= 0;
      var isSel = sel.indexOf(o.letter) >= 0;
      var mark = isCorrect ? "✔" : (isSel ? "✗" : "·");
      var color = isCorrect ? "var(--green)" : (isSel ? "var(--red)" : "var(--text-soft)");
      return '<div style="color:' + color + ';font-size:13px">' + mark + " " + o.letter + ") " + MathFormat.html(o.text) + '</div>';
    }).join("");
    var disputed = q.disputed ? '<div class="disputed-note">⚠ Спорный ответ. ' + esc(q.disputedNote || "") + '</div>' : "";
    var meta = r.state === "correct" ? "" : '<div class="reason"><span>Причина:</span><button data-rreason="' + q.id + ':не знал">не знал</button><button data-rreason="' + q.id + ':перепутал">перепутал</button><button data-rreason="' + q.id + ':невнимательность">невнимательность</button></div>';
    var aiBtn = r.state === "correct" ? "" : '<button class="btn btn--ghost" data-rai="' + q.id + '" style="margin-top:8px">🤖 Разобрать слабое место</button><div class="ai-answer hidden" data-rai-out="' + q.id + '"></div>';
    return '<div class="review-item ' + cls + '" data-state="' + r.state + '" data-flag="' + (S.flags[q.id] ? "1" : "0") + '" data-text="' + esc((q.question + " " + q.options.map(function(o){return o.text;}).join(" ")).toLowerCase()) + '">' +
      '<div class="review-item__q">№' + q.number + ". " + MathFormat.html(q.question) + (q.disputed ? ' <span class="tag tag--disputed">⚠</span>' : "") + '</div>' +
      codeHTML(q.questionCode) + audioHTML(q.audio) +
      '<div class="review-item__meta"><span>Ваш ответ: <b class="' + (r.state === "correct" ? "ok" : "no") + '">' + esc(yourStr) + '</b></span>' +
      '<span>Правильно: <b class="ok">' + esc(correctStr) + '</b></span><span>' + r.points + "/" + r.max + ' б.</span></div>' +
      '<div>' + opts + '</div>' +
      '<div class="explain__body" style="margin-top:8px">' + MathFormat.html(q.explanation || "") + '</div>' +
      disputed + meta + aiBtn + '</div>';
  }
  function bindReviewAI() {
    elScreen.querySelectorAll("[data-rai]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (!AI.hasKey()) { openAIKeyModal(); return; }
        var id = btn.getAttribute("data-rai");
        var q = S.test.questions.filter(function (x) { return x.id === id; })[0];
        var out = elScreen.querySelector('[data-rai-out="' + id + '"]');
        out.classList.remove("hidden"); out.textContent = "Думаю…"; btn.disabled = true;
        AI.explain(q, SUBJECT_TITLE[q.subject]).then(function (t) { MathFormat.setText(out, t); })
          .catch(function (e) { out.textContent = "Ошибка: " + e.message; })
          .finally(function () { btn.disabled = false; });
      });
    });
  }
  function bindReviewReasons() {
    elScreen.querySelectorAll("[data-rreason]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var p = btn.getAttribute("data-rreason").split(":"), id = p[0], reason = p.slice(1).join(":");
        S.reasons[id] = reason; Store.updateLearningMeta(id, S.confidence[id], reason);
        elScreen.querySelectorAll('[data-rreason^="' + id + ':"]').forEach(function (x) { x.classList.toggle("active", x === btn); });
      });
    });
  }

  // ---------- Модальное окно ----------
  var modal = document.getElementById("modal");
  var modalBody = document.getElementById("modalBody");
  modal.querySelectorAll("[data-close]").forEach(function (el) { el.addEventListener("click", closeModal); });
  function openModal(html) { modalBody.innerHTML = html; modal.classList.remove("hidden"); }
  function closeModal() { modal.classList.add("hidden"); }
  function openExamModal() {
    var subjects = allSubjectsInfo();
    var rows = subjects.map(function (d) {
      var qCounts = d.sets.map(function (s) { return s.questions.length; });
      var qRange = Math.min.apply(null, qCounts) === Math.max.apply(null, qCounts)
        ? String(qCounts[0]) : Math.min.apply(null, qCounts) + "–" + Math.max.apply(null, qCounts);
      return '<label class="toggle" style="display:flex;align-items:center;gap:8px;padding:6px 0">' +
        '<input type="checkbox" class="examSubj" value="' + esc(d.subject) + '" checked> ' +
        '<span>' + esc(SUBJECT_SHORT[d.subject] || d.subject) + '</span>' +
        '<span class="card__meta" style="margin-left:auto">' + d.sets.length + ' вариант(ов) · ' + qRange + ' вопр.</span>' +
        '</label>';
    }).join("");
    openModal(
      '<h3>📝 Сдать экзамен</h3>' +
      '<p class="hint">Выберите предметы. Для каждого выбранного предмета случайно возьмётся один из его вариантов —' +
      ' независимо от того, какие варианты выпали остальным предметам. Экзамен идёт с таймером и разбором в конце.</p>' +
      '<div id="examSubjectsList">' + rows + '</div>' +
      '<div style="margin-top:14px;display:flex;gap:10px"><button class="btn btn--primary" id="examStart">Начать экзамен</button><button class="btn btn--ghost" data-close>Отмена</button></div>'
    );
    modalBody.querySelector("[data-close]").addEventListener("click", closeModal);
    document.getElementById("examStart").addEventListener("click", function () {
      var chosen = Array.prototype.slice.call(modalBody.querySelectorAll(".examSubj:checked"))
        .map(function (c) { return c.value; });
      if (!chosen.length) { alert("Выберите хотя бы один предмет."); return; }
      closeModal();
      launchExam(chosen);
    });
  }
  function openAIKeyModal() {
    openModal(
      '<h3>🤖 Подключить ИИ (по желанию)</h3>' +
      '<p class="hint">У каждого вопроса уже есть встроенное объяснение. ИИ даёт дополнительный, более развёрнутый разбор. Нужен бесплатный ключ <a href="https://openrouter.ai/keys" target="_blank" rel="noopener">OpenRouter</a>. Ключ хранится только в вашем браузере.</p>' +
      '<label>API-ключ OpenRouter</label><input id="aiKey" type="password" placeholder="sk-or-..." value="' + esc(Store.settings.aiKey || "") + '">' +
      '<label>Модель</label><input id="aiModel" value="' + esc(Store.settings.aiModel || "meta-llama/llama-3.3-70b-instruct:free") + '">' +
      '<p class="hint">Совет: модели с суффиксом <code>:free</code> бесплатны. Если запрос блокируется при открытии файла напрямую, запустите папку простым локальным сервером.</p>' +
      '<div style="margin-top:14px;display:flex;gap:10px"><button class="btn btn--primary" id="aiSave">Сохранить</button><button class="btn btn--ghost" data-close>Отмена</button></div>'
    );
    modalBody.querySelector("[data-close]").addEventListener("click", closeModal);
    document.getElementById("aiSave").addEventListener("click", function () {
      Store.setSetting("aiKey", document.getElementById("aiKey").value.trim());
      Store.setSetting("aiModel", document.getElementById("aiModel").value.trim());
      closeModal();
    });
  }

  // ---------- Горячие клавиши ----------
  document.addEventListener("keydown", function (e) {
    if (S.route !== "quiz") return;
    if (/input|select|textarea/i.test((e.target.tagName || ""))) return;
    var q = S.test.questions[S.index];
    var key = e.key.toUpperCase();
    if (/^[A-H]$/.test(key) && !q.missing) {
      var has = q._options.some(function (o) { return o.letter === key; });
      if (has) { selectOption(q, key); e.preventDefault(); }
    } else if (e.key === "ArrowRight") { gotoIndex(S.index + 1); }
    else if (e.key === "ArrowLeft") { gotoIndex(S.index - 1); }
    else if (e.key === "Enter") {
      if (S.mode === "practice" && !S.checked[q.id] && (S.answers[q.id] || []).length) checkPractice(q);
      else gotoIndex(S.index + 1);
    }
    else if (key === "F" && !q.missing) { toggleFlag(q); }
  });

  // ---------- Инициализация ----------
  applyTheme(Store.settings.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
  render();

  global.__QUIZ_APP = S; // для отладки
})(window);
