/* Страница карточек для запоминания. Ванильный JS, без сборки — как и
   остальная часть тренажёра. Прогресс (знаю/не знаю по каждой карточке)
   хранится через общий модуль Store (localStorage), поэтому переживает
   перезагрузку страницы. */
(function (global) {
  "use strict";

  var CARDS = global.FLASHCARDS || [];
  var elScreen = document.getElementById("screen");

  // Подписи предметов для этой страницы. Новые предметы (когда появятся
  // карточки для них) подхватятся автоматически — просто с "сырым" ключом
  // вместо красивого названия, если он не добавлен сюда.
  var SUBJECT_LABEL = { algo: "Алгоритмы", db: "Базы данных", programming: "Программирование", informatika: "Информатика" };
  function subjectLabel(s) { return SUBJECT_LABEL[s] || s; }

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
  function uniqueSubjects() {
    var seen = {}, out = [];
    CARDS.forEach(function (c) { if (!seen[c.subject]) { seen[c.subject] = true; out.push(c.subject); } });
    return out;
  }

  var ALL_SUBJECTS = uniqueSubjects();

  var S = {
    subjectFilter: ALL_SUBJECTS.slice(), // по умолчанию показываем все имеющиеся предметы
    topicFilter: "",
    onlyUnknown: false,
    shuffleOn: false,
    deck: [],
    pos: 0,
    flipped: false
  };

  function topicsForFilter() {
    var seen = {}, out = [];
    CARDS.forEach(function (c) {
      if (S.subjectFilter.indexOf(c.subject) < 0) return;
      if (!seen[c.topic]) { seen[c.topic] = true; out.push(c.topic); }
    });
    return out.sort();
  }

  function buildDeck(keepPos) {
    var list = CARDS.filter(function (c) {
      if (S.subjectFilter.indexOf(c.subject) < 0) return false;
      if (S.topicFilter && c.topic !== S.topicFilter) return false;
      if (S.onlyUnknown && Store.getCardStatus(c.id) === "know") return false;
      return true;
    });
    S.deck = S.shuffleOn ? shuffle(list) : list;
    if (!keepPos || S.pos >= S.deck.length) S.pos = 0;
    S.flipped = false;
  }

  function deckStats() {
    var pool = CARDS.filter(function (c) { return S.subjectFilter.indexOf(c.subject) >= 0; });
    var know = 0;
    pool.forEach(function (c) { if (Store.getCardStatus(c.id) === "know") know++; });
    return { total: pool.length, know: know, rest: pool.length - know };
  }

  function currentCard() { return S.deck[S.pos]; }

  function goTo(pos) {
    if (!S.deck.length) return;
    S.pos = (pos + S.deck.length) % S.deck.length;
    S.flipped = false;
    render();
  }
  function next() { goTo(S.pos + 1); }
  function prev() { goTo(S.pos - 1); }
  function flip() {
    if (!S.deck.length) return;
    S.flipped = !S.flipped;
    // Переключаем класс прямо на существующем узле, а не через render() —
    // иначе элемент пересоздаётся заново уже в конечном состоянии, и CSS-
    // переход (transition) на transform не успевает сыграть анимацию.
    var cardEl = document.getElementById("fcCard");
    if (cardEl) cardEl.classList.toggle("flipped", S.flipped);
  }
  function judge(status) {
    var c = currentCard();
    if (!c) return;
    Store.setCardStatus(c.id, status);
    if (S.pos < S.deck.length - 1) { goTo(S.pos + 1); } else { render(); }
  }

  function statusIcon(id) {
    var st = Store.getCardStatus(id);
    if (st === "know") return "✅";
    if (st === "unknown") return "❔";
    return "";
  }

  function render() {
    if (!CARDS.length) {
      elScreen.innerHTML = '<div class="empty">Файлы с карточками (data/flashcards-*.js) не найдены или пусты.</div>';
      return;
    }
    var stats = deckStats();
    var pct = stats.total ? Math.round(stats.know / stats.total * 100) : 0;

    var subjectBoxes = ALL_SUBJECTS.map(function (s) {
      var checked = S.subjectFilter.indexOf(s) >= 0;
      var n = CARDS.filter(function (c) { return c.subject === s; }).length;
      return '<label class="toggle"><input type="checkbox" class="fcSubjBox" value="' + esc(s) + '" ' +
        (checked ? "checked" : "") + '> ' + esc(subjectLabel(s)) + ' <span class="card__meta">(' + n + ')</span></label>';
    }).join("");

    var topics = topicsForFilter();
    var topicOptions = '<option value="">— все темы —</option>' + topics.map(function (t) {
      return '<option value="' + esc(t) + '" ' + (S.topicFilter === t ? "selected" : "") + '>' + esc(t) + '</option>';
    }).join("");

    var controlsHTML =
      '<div class="controlbar">' +
        '<span class="field-label">Предметы:</span>' + subjectBoxes +
        '<select class="searchbox" id="fcTopicSel" style="max-width:220px">' + topicOptions + '</select>' +
        '<label class="toggle"><input type="checkbox" id="fcOnlyUnknown" ' + (S.onlyUnknown ? "checked" : "") + '> Только незнакомые</label>' +
        '<label class="toggle"><input type="checkbox" id="fcShuffle" ' + (S.shuffleOn ? "checked" : "") + '> Перемешать</label>' +
        '<button class="btn btn--ghost" id="fcReset" style="margin-left:auto">Сбросить прогресс</button>' +
      '</div>';

    var statsHTML =
      '<div class="deck-stats">' +
        '<span class="deck-stats__item">Всего: <b>' + stats.total + '</b></span>' +
        '<span class="deck-stats__item know">Знаю: <b>' + stats.know + '</b></span>' +
        '<span class="deck-stats__item unknown">Осталось: <b>' + stats.rest + '</b></span>' +
        '<div class="deck-progress"><div class="deck-progress__fill" style="width:' + pct + '%"></div></div>' +
        '<span class="deck-stats__item">' + pct + '%</span>' +
      '</div>';

    var stageHTML;
    if (!S.deck.length) {
      stageHTML = '<div class="empty-deck">Под выбранные фильтры карточек не найдено.<br>Снимите часть фильтров или отключите «Только незнакомые».</div>';
    } else {
      var c = currentCard();
      var icon = statusIcon(c.id);
      stageHTML =
        '<div class="flashcard-stage">' +
          '<div class="card__meta">Карточка ' + (S.pos + 1) + ' / ' + S.deck.length + ' · <span class="fc-topic-chip">' + esc(c.topic) + '</span></div>' +
          '<div class="flashcard' + (S.flipped ? " flipped" : "") + '" id="fcCard" tabindex="0">' +
            '<div class="flashcard__inner">' +
              '<div class="flashcard__face flashcard__face--front">' +
                (icon ? '<div class="flashcard__status">' + icon + '</div>' : "") +
                '<div class="flashcard__label">' + esc(subjectLabel(c.subject)) + '</div>' +
                '<div class="flashcard__text">' + esc(c.front) + '</div>' +
                '<div class="flashcard__hint">нажмите или Space, чтобы перевернуть</div>' +
              '</div>' +
              '<div class="flashcard__face flashcard__face--back">' +
                '<div class="flashcard__label">Ответ</div>' +
                '<div class="flashcard__text">' + esc(c.back) + '</div>' +
                '<div class="flashcard__hint">нажмите, чтобы вернуться к вопросу</div>' +
              '</div>' +
            '</div>' +
          '</div>' +
          '<div class="flashcard-judge">' +
            '<button class="btn btn--dontknow" id="fcDontKnow">❔ Не знаю</button>' +
            '<button class="btn btn--know" id="fcKnow">✅ Знаю</button>' +
          '</div>' +
          '<div class="flashcard-controls">' +
            '<button class="btn btn--ghost" id="fcPrev">◀ Пред.</button>' +
            '<button class="btn btn--ghost" id="fcShuffleNow">🔀 Перемешать</button>' +
            '<button class="btn btn--ghost" id="fcNext">След. ▶</button>' +
          '</div>' +
          '<div class="card__meta">Клавиши: Space — перевернуть, ← / → — навигация, 1 — не знаю, 2 — знаю</div>' +
        '</div>';
    }

    elScreen.innerHTML =
      '<div class="hero"><h1>Карточки для запоминания</h1>' +
      '<p>Короткие факты по темам — переворачивайте карточку, оценивайте себя, тренируйтесь до зелёного прогресса</p></div>' +
      controlsHTML + statsHTML + stageHTML;

    // события
    elScreen.querySelectorAll(".fcSubjBox").forEach(function (box) {
      box.addEventListener("change", function () {
        var v = box.value, idx = S.subjectFilter.indexOf(v);
        if (box.checked && idx < 0) S.subjectFilter.push(v);
        else if (!box.checked && idx >= 0) S.subjectFilter.splice(idx, 1);
        if (S.topicFilter && topicsForFilter().indexOf(S.topicFilter) < 0) S.topicFilter = "";
        buildDeck(); render();
      });
    });
    var topicSel = document.getElementById("fcTopicSel");
    if (topicSel) topicSel.addEventListener("change", function () { S.topicFilter = topicSel.value; buildDeck(); render(); });
    var onlyUnknownBox = document.getElementById("fcOnlyUnknown");
    if (onlyUnknownBox) onlyUnknownBox.addEventListener("change", function () { S.onlyUnknown = onlyUnknownBox.checked; buildDeck(); render(); });
    var shuffleBox = document.getElementById("fcShuffle");
    if (shuffleBox) shuffleBox.addEventListener("change", function () { S.shuffleOn = shuffleBox.checked; buildDeck(); render(); });
    var resetBtn = document.getElementById("fcReset");
    if (resetBtn) resetBtn.addEventListener("click", function () {
      var ids = CARDS.filter(function (c) { return S.subjectFilter.indexOf(c.subject) >= 0; }).map(function (c) { return c.id; });
      if (!confirm("Сбросить прогресс (знаю/не знаю) для выбранных предметов — " + ids.length + " карточек?")) return;
      Store.clearCardStatuses(ids);
      buildDeck(true); render();
    });

    var cardEl = document.getElementById("fcCard");
    if (cardEl) cardEl.addEventListener("click", flip);
    var dk = document.getElementById("fcDontKnow"); if (dk) dk.addEventListener("click", function () { judge("unknown"); });
    var kn = document.getElementById("fcKnow"); if (kn) kn.addEventListener("click", function () { judge("know"); });
    var pv = document.getElementById("fcPrev"); if (pv) pv.addEventListener("click", prev);
    var nx = document.getElementById("fcNext"); if (nx) nx.addEventListener("click", next);
    var sh = document.getElementById("fcShuffleNow"); if (sh) sh.addEventListener("click", function () { S.deck = shuffle(S.deck); S.pos = 0; S.flipped = false; render(); });
  }

  document.addEventListener("keydown", function (e) {
    if (e.target && (e.target.tagName === "SELECT" || e.target.tagName === "INPUT")) return;
    if (e.code === "Space") { e.preventDefault(); flip(); }
    else if (e.key === "ArrowRight") next();
    else if (e.key === "ArrowLeft") prev();
    else if (e.key === "1") judge("unknown");
    else if (e.key === "2") judge("know");
  });

  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    var btn = document.getElementById("btnTheme");
    if (btn) btn.textContent = t === "dark" ? "☀️" : "🌙";
  }
  var themeBtn = document.getElementById("btnTheme");
  if (themeBtn) themeBtn.addEventListener("click", function () {
    var cur = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(cur); Store.setSetting("theme", cur);
  });
  applyTheme(Store.settings.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));

  buildDeck();
  render();
})(window);
