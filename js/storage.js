/* Хранилище прогресса в localStorage. */
(function (global) {
  "use strict";
  var KEY = "quiz_trainer_v1";

  function load() {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || {};
    } catch (e) { return {}; }
  }
  function saveAll(state) {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
  }

  var state = load();
  state.sessions = state.sessions || {};   // ключ теста -> сохранённая сессия
  state.best = state.best || {};           // ключ теста -> {got,max}
  state.wrongIds = state.wrongIds || {};    // qid -> true (для «работы над ошибками»)
  state.settings = state.settings || {};   // тема, apiKey и т.п.
  state.learning = state.learning || {};   // qid -> история и интервальное повторение
  state.cards = state.cards || {};         // id карточки -> "know" | "unknown"

  var API = {
    get settings() { return state.settings; },
    setSetting: function (k, v) { state.settings[k] = v; saveAll(state); },

    getSession: function (key) { return state.sessions[key] || null; },
    saveSession: function (key, session) { state.sessions[key] = session; saveAll(state); },
    clearSession: function (key) { delete state.sessions[key]; saveAll(state); },

    getBest: function (key) { return state.best[key] || null; },
    recordBest: function (key, got, max) {
      var b = state.best[key];
      if (!b || got > b.got) state.best[key] = { got: got, max: max, at: Date.now() };
      saveAll(state);
    },

    markWrong: function (qid, isWrong) {
      if (isWrong) state.wrongIds[qid] = true;
      else delete state.wrongIds[qid];
      saveAll(state);
    },
    getWrongIds: function () { return Object.keys(state.wrongIds); },
    clearWrong: function () { state.wrongIds = {}; saveAll(state); },

    recordLearning: function (q, result, confidence, reason) {
      if (!q || q.missing) return;
      var x = state.learning[q.id] || { attempts: 0, correct: 0, topic: q.topic || "Без темы", subject: q.subject };
      x.attempts++; x.topic = q.topic || "Без темы"; x.subject = q.subject;
      x.lastState = result.state; x.lastAt = Date.now(); x.confidence = confidence || ""; x.reason = reason || x.reason || "";
      if (result.state === "correct") { x.correct++; x.streak = (x.streak || 0) + 1; } else x.streak = 0;
      var hours = result.state === "correct" ? (x.streak === 1 ? 72 : x.streak === 2 ? 168 : 504) : result.state === "partial" ? 12 : 0;
      x.dueAt = Date.now() + hours * 3600000; state.learning[q.id] = x; saveAll(state);
    },
    getDueIds: function () { var now = Date.now(); return Object.keys(state.learning).filter(function (id) { return state.learning[id].dueAt <= now; }); },

    getCardStatus: function (id) { return state.cards[id] || null; },
    setCardStatus: function (id, status) { state.cards[id] = status; saveAll(state); },
    clearCardStatuses: function (ids) { (ids || []).forEach(function (id) { delete state.cards[id]; }); saveAll(state); },
    updateLearningMeta: function (qid, confidence, reason) { if (state.learning[qid]) { if (confidence) state.learning[qid].confidence = confidence; if (reason) state.learning[qid].reason = reason; saveAll(state); } },
    getTopicStats: function (questions) {
      var out = {};
      (questions || []).forEach(function (q) {
        if (q.missing || !state.learning[q.id]) return;
        var x = state.learning[q.id], k = q.topic || "Без темы", t = out[k] || (out[k] = { topic:k, attempts:0, correct:0, weak:0, confidentWrong:0, due:0 });
        t.attempts++; if (x.lastState === "correct") t.correct++; else t.weak++;
        if (x.lastState !== "correct" && x.confidence === "уверен") t.confidentWrong++;
        if (x.dueAt <= Date.now()) t.due++;
      });
      return Object.keys(out).map(function (k) { var t = out[k]; t.pct = Math.round(t.correct / t.attempts * 100); return t; }).sort(function (a,b) { return a.pct - b.pct || b.attempts - a.attempts; });
    }
  };

  global.Store = API;
})(window);
