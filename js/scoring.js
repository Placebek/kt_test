/* Логика подсчёта баллов. Схема определяется полем q.multi, а не названием
   предмета — так любой новый предмет с множественным выбором (напр. "informatika")
   автоматически считается по той же схеме, что и "db", без правок этого файла.
   Одиночный выбор: 1 балл за точное совпадение.
   Множественный выбор: до 2 баллов:
     2 — выбранное множество точно равно верному;
     1 — выбраны только верные варианты, но не все (непустое собственное подмножество);
     0 — есть неверный выбор либо пусто.
*/
(function (global) {
  "use strict";

  function maxPointsFor(q) {
    return q.multi ? 2 : 1;
  }

  function setsEqual(a, b) {
    if (a.length !== b.length) return false;
    var s = new Set(b);
    return a.every(function (x) { return s.has(x); });
  }

  // selected: массив букв, выбранных пользователем
  function scoreQuestion(q, selected) {
    selected = (selected || []).slice();
    var correct = q.correct || [];
    var max = maxPointsFor(q);

    if (q.missing) return { points: 0, max: 0, state: "missing" };

    if (q.multi) {
      if (selected.length === 0) return { points: 0, max: 2, state: "empty" };
      // 2 балла — только за точное совпадение множества
      if (setsEqual(selected, correct)) return { points: 2, max: 2, state: "correct" };
      // иначе частичный балл, если верных выборов не меньше, чем ошибочных
      var correctSet = new Set(correct);
      var hits = selected.filter(function (x) { return correctSet.has(x); }).length;
      var wrong = selected.length - hits;
      if (hits >= 1 && hits >= wrong) return { points: 1, max: 2, state: "partial" };
      return { points: 0, max: 2, state: "wrong" };
    }

    // алгоритмы — одиночный выбор
    if (selected.length === 0) return { points: 0, max: 1, state: "empty" };
    if (setsEqual(selected, correct)) return { points: 1, max: 1, state: "correct" };
    return { points: 0, max: 1, state: "wrong" };
  }

  // Итог по набору вопросов и ответам {qid: [letters]}
  function scoreTest(questions, answers) {
    var got = 0, max = 0, correct = 0, partial = 0, wrong = 0, unanswered = 0;
    questions.forEach(function (q) {
      if (q.missing) return; // информационные заглушки не участвуют в счёте
      var sel = answers[q.id] || [];
      var r = scoreQuestion(q, sel);
      got += r.points;
      max += r.max;
      if (sel.length === 0) unanswered++;
      else if (r.state === "correct") correct++;
      else if (r.state === "partial") partial++;
      else wrong++;
    });
    return { got: got, max: max, correct: correct, partial: partial, wrong: wrong, unanswered: unanswered };
  }

  global.Scoring = {
    maxPointsFor: maxPointsFor,
    scoreQuestion: scoreQuestion,
    scoreTest: scoreTest,
    setsEqual: setsEqual
  };
})(window);
