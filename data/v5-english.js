window.QUIZ_DATA = window.QUIZ_DATA || {};

/* Вариант 5 · Английский язык (probtest.testcenter.kz).
   Раздел из 50 вопросов:
     • №1–8   — аудирование, 1-я запись (диалог о поездке в Австралию, Сидней);
     • №9–16  — аудирование, 2-я запись (разговор о дне рождения Элис);
     • №17–34 — грамматика (артикли, времена, степени сравнения, каузатив и т.д.);
     • №35–42 — чтение, текст «The London Underground»;
     • №43–50 — чтение, текст «My First English Class».

   Важно про ключ. На этот раздел НЕТ таблицы официальных результатов
   (в папке results/ лежат только алгоритмы и базы). Поэтому:
     • грамматика и чтение (№17–50) — ответы выведены академически,
       keyConfidence: "derived" (высокая уверенность, дано объяснение);
     • аудирование (№1–16) — ответ ЗАВИСИТ ОТ ЗАПИСИ. Аудиофайлы подключены
       ниже (плеер прямо в вопросе), keyConfidence: "listening". Указанный
       correct — это предварительная догадка (по логике диалога / общим знаниям),
       её нужно проверить на слух. В объяснении стоит пометка 🎧.
   userAnswer пуст: своих ответов по этому разделу в results/ нет. */

var V5EN_AUDIO_1 = "questions/вариант-5/english/Аудио для вопросов 1-8.m4a";
var V5EN_AUDIO_2 = "questions/вариант-5/english/аудио для вопросов 9-16.m4a";

var V5EN_TUBE =
  "The London Underground is the world's oldest and largest and covers most of London. Its 55% of the network is above ground. It has 275 stations and 12 interconnecting lines. Each line has a name and a colour to represent it on the underground map, for example the Victoria line is blue. The London Underground is the longest in the world, with over 408 km of track. Three million passengers travel every day.\n" +
  "Londoners call the Underground the Tube (tube-shaped tunnels). The first trains started in 1863 on the Central line. During the Blitz, the aerial bombing of London in World War II, Londoners used to hide from the bombs by using the underground stations during air raids and sleeping on platforms. Air raid sirens were a signal for Londoners of approaching planes.\n" +
  "The Underground doesn't run 24 hours. Track maintenance is done at night, after the system closes. The first trains start after 5 a.m., until 1 a.m. Rush hour is from 7.30 a.m. to 9.30 a.m. and from 4.30 p.m. to 6.30 p.m. London has six travel zones. Zone one is the most central and zone six is the outer which includes Heathrow Airport. The more zones you cross the more you pay. To travel you can buy a daily ticket, a daily travel card or an Oyster card. This is a smart card with an electronic chip that you can charge with credit, and use to pay for the Underground and buses. It is the cheapest way of travelling in central London. Most underground stations have escalators and stairs. The longest escalator in Europe is at Angel station on the Northern line. It is 60m in length, with a vertical rise of 27.5m. People using the escalators stand on the right-hand side, those in a hurry walk on the left.\n" +
  "There are several safety announcements, when the doors of the trains are about to close you hear 'stand clear of the doors please'. When the train stops in a station where there is a gap between the train and the platform you can hear, 'Mind the Gap!'";

var V5EN_CLASS =
  "My First English Class\n" +
  "Hello, everyone. Welcome to the English Language course. I am your teacher. My name is Lindsay Black. That's L-I-N-D-S-A-Y Black. Before we begin, some information about the course. It'll be held in the British Council building, in Room 13, on the first floor. When you go upstairs, turn left to find the room. We have our classes twice a week, on Monday and Wednesday. The class begins at 4.30 p.m. and lasts 90 minutes, so we finish at 6 p.m. Also, I have an office hour if you have questions. I'm in Office 7B on the second floor. My office hour is Friday 6 p.m. So, if you have any questions or problems or want to talk to me, welcome. We begin next week, on March the 13th. The course ends on May the 20th. Oh, one more thing. For this course you need the book. Here it is: British Life and Language Level 1 Student's Book. So please go to the library and get a copy of the book. I don't want to see any photocopies of the book! I think that's all. I look forward to working with you. See you next Monday!";

window.QUIZ_DATA["v5-english"] = {
  key: "v5-english", variant: 5, subject: "english", lang: "en",
  title: "Вариант 5 · Английский язык",
  questions: [
    /* ---------- Аудирование, запись 1 (№1–8) ---------- */
    {
      id: "v5-english-1", variant: 5, subject: "english", number: 1, topic: "Аудирование", lang: "en",
      audio: V5EN_AUDIO_1,
      question: "Robin is from ______.",
      options: [
        { letter: "A", text: "Austria" },
        { letter: "B", text: "Australia" },
        { letter: "C", text: "the States" },
        { letter: "D", text: "Argentine" }
      ],
      multi: false, correct: ["B"], userAnswer: [], officialResult: null, keyConfidence: "listening",
      explanation: "🎧 Аудирование (запись «для вопросов 1-8», плеер выше). Ответ нужно проверить на слух. По логике диалога Джерри собирается в Австралию навестить Робина, поэтому предварительно — Australia (B). Обязательно прослушайте запись и при необходимости исправьте."
    },
    {
      id: "v5-english-2", variant: 5, subject: "english", number: 2, topic: "Аудирование", lang: "en",
      audio: V5EN_AUDIO_1,
      question: "The cafés and __________ keep very busy.",
      options: [
        { letter: "A", text: "hotels" },
        { letter: "B", text: "museums" },
        { letter: "C", text: "galleries" },
        { letter: "D", text: "restaurants" }
      ],
      multi: false, correct: ["C"], userAnswer: [], officialResult: null, keyConfidence: "listening",
      explanation: "🎧 Аудирование. Ответ зависит от записи. В районе The Rocks обычно упоминают «cafés and galleries», поэтому предварительно — galleries (C). Проверьте на слух."
    },
    {
      id: "v5-english-3", variant: 5, subject: "english", number: 3, topic: "Аудирование", lang: "en",
      audio: V5EN_AUDIO_1,
      question: "Jerry is going to Australia ________.",
      options: [
        { letter: "A", text: "next weekend" },
        { letter: "B", text: "next summer" },
        { letter: "C", text: "next week" },
        { letter: "D", text: "next month" }
      ],
      multi: false, correct: ["D"], userAnswer: [], officialResult: null, keyConfidence: "listening",
      explanation: "🎧 Аудирование. Этот вопрос — про тот же факт, что и №8 («in the upcoming month»). «next month» (D) = «in the upcoming month», поэтому предварительно D. Проверьте на слух."
    },
    {
      id: "v5-english-4", variant: 5, subject: "english", number: 4, topic: "Аудирование", lang: "en",
      audio: V5EN_AUDIO_1,
      question: "Jerry needs a morning exploring ___________.",
      options: [
        { letter: "A", text: "the art gallery" },
        { letter: "B", text: "the bus station" },
        { letter: "C", text: "the harbor area" },
        { letter: "D", text: "the museum" }
      ],
      multi: false, correct: ["C"], userAnswer: [], officialResult: null, keyConfidence: "listening",
      explanation: "🎧 Аудирование. Ответ зависит от записи. Сидней славится гаванью (Harbour Bridge, The Rocks у воды), поэтому предварительно — the harbor area (C). Проверьте на слух."
    },
    {
      id: "v5-english-5", variant: 5, subject: "english", number: 5, topic: "Аудирование", lang: "en",
      audio: V5EN_AUDIO_1,
      question: "The Rocks is ________ part of the city.",
      options: [
        { letter: "A", text: "the oldest" },
        { letter: "B", text: "the biggest" },
        { letter: "C", text: "the youngest" },
        { letter: "D", text: "the smallest" }
      ],
      multi: false, correct: ["A"], userAnswer: [], officialResult: null, keyConfidence: "listening",
      explanation: "🎧 Аудирование. The Rocks — исторически самый старый район Сиднея, поэтому «the oldest» (A). Это подкреплено общими знаниями, но всё же сверьтесь с записью."
    },
    {
      id: "v5-english-6", variant: 5, subject: "english", number: 6, topic: "Аудирование", lang: "en",
      audio: V5EN_AUDIO_1,
      question: "The entrance to the Pylon Lookout is _____________________.",
      options: [
        { letter: "A", text: "round the corner" },
        { letter: "B", text: "on the bridge" },
        { letter: "C", text: "to the right" },
        { letter: "D", text: "to the left" }
      ],
      multi: false, correct: ["B"], userAnswer: [], officialResult: null, keyConfidence: "listening",
      explanation: "🎧 Аудирование. Pylon Lookout находится на Сиднейском Харбор-Бридж, вход — с моста, поэтому предварительно «on the bridge» (B). Возможно, в записи звучит конкретное направление — проверьте на слух."
    },
    {
      id: "v5-english-7", variant: 5, subject: "english", number: 7, topic: "Аудирование", lang: "en",
      audio: V5EN_AUDIO_1,
      question: "____________________ is a country where Robin is from.",
      options: [
        { letter: "A", text: "Argentine" },
        { letter: "B", text: "France" },
        { letter: "C", text: "the States" },
        { letter: "D", text: "Australia" }
      ],
      multi: false, correct: ["D"], userAnswer: [], officialResult: null, keyConfidence: "listening",
      explanation: "🎧 Аудирование. Тот же факт, что и в №1 (родина Робина). Предварительно — Australia (D), согласованно с №1. Проверьте на слух."
    },
    {
      id: "v5-english-8", variant: 5, subject: "english", number: 8, topic: "Аудирование", lang: "en",
      audio: V5EN_AUDIO_1,
      question: "Jerry is travelling to Australia ______________________.",
      options: [
        { letter: "A", text: "next year" },
        { letter: "B", text: "in the upcoming month" },
        { letter: "C", text: "this week" },
        { letter: "D", text: "in the spring" }
      ],
      multi: false, correct: ["B"], userAnswer: [], officialResult: null, keyConfidence: "listening",
      explanation: "🎧 Аудирование. Тот же факт, что и в №3. «in the upcoming month» (B) = «next month», поэтому предварительно B. Проверьте на слух."
    },

    /* ---------- Аудирование, запись 2 (№9–16) ---------- */
    {
      id: "v5-english-9", variant: 5, subject: "english", number: 9, topic: "Аудирование", lang: "en",
      audio: V5EN_AUDIO_2,
      question: "What date is Alice's birthday?",
      options: [
        { letter: "A", text: "16th July" },
        { letter: "B", text: "12th July" },
        { letter: "C", text: "13th July" },
        { letter: "D", text: "14th July" }
      ],
      multi: false, correct: ["A"], userAnswer: [], officialResult: null, keyConfidence: "listening",
      explanation: "🎧 Аудирование (запись «для вопросов 9-16», плеер выше). Точная дата называется только в записи — прослушайте её. Указанный вариант — предварительная догадка, её нужно проверить."
    },
    {
      id: "v5-english-10", variant: 5, subject: "english", number: 10, topic: "Аудирование", lang: "en",
      audio: V5EN_AUDIO_2,
      question: "What place to eat did Jack suggest?",
      options: [
        { letter: "A", text: "a new burger restaurant." },
        { letter: "B", text: "Freddie's Pizza House." },
        { letter: "C", text: "Penny Road restaurant." },
        { letter: "D", text: "Tom's house" }
      ],
      multi: false, correct: ["A"], userAnswer: [], officialResult: null, keyConfidence: "listening",
      explanation: "🎧 Аудирование. Ответ полностью зависит от записи — прослушайте её. Указанный вариант — предварительная догадка."
    },
    {
      id: "v5-english-11", variant: 5, subject: "english", number: 11, topic: "Аудирование", lang: "en",
      audio: V5EN_AUDIO_2,
      question: "Who is having a birthday soon?",
      options: [
        { letter: "A", text: "Alice" },
        { letter: "B", text: "Penny" },
        { letter: "C", text: "Arthur" },
        { letter: "D", text: "Jack" }
      ],
      multi: false, correct: ["A"], userAnswer: [], officialResult: null, keyConfidence: "listening",
      explanation: "🎧 Аудирование. Весь разговор — про день рождения Элис, поэтому предварительно A (Alice). Сверьтесь с записью."
    },
    {
      id: "v5-english-12", variant: 5, subject: "english", number: 12, topic: "Аудирование", lang: "en",
      audio: V5EN_AUDIO_2,
      question: "What is “Arthur's”?",
      options: [
        { letter: "A", text: "it is a book shop." },
        { letter: "B", text: "a new pizza place." },
        { letter: "C", text: "a new burger restaurant." },
        { letter: "D", text: "a restaurant on Hill Street." }
      ],
      multi: false, correct: ["C"], userAnswer: [], officialResult: null, keyConfidence: "listening",
      explanation: "🎧 Аудирование. Ответ зависит от записи. Предварительно — «a new burger restaurant» (C). Прослушайте и проверьте."
    },
    {
      id: "v5-english-13", variant: 5, subject: "english", number: 13, topic: "Аудирование", lang: "en",
      audio: V5EN_AUDIO_2,
      question: "What did Alice's flat mate eat in Freddie's Pizza House?",
      options: [
        { letter: "A", text: "pizza." },
        { letter: "B", text: "pasta." },
        { letter: "C", text: "burgers." },
        { letter: "D", text: "sushi" }
      ],
      multi: false, correct: ["B"], userAnswer: [], officialResult: null, keyConfidence: "listening",
      explanation: "🎧 Аудирование. Ответ зависит от записи (в пиццерии соседка могла заказать не пиццу — это типичная «ловушка» на внимательность). Предварительно — pasta (B). Проверьте на слух."
    },
    {
      id: "v5-english-14", variant: 5, subject: "english", number: 14, topic: "Аудирование", lang: "en",
      audio: V5EN_AUDIO_2,
      question: "What did Alice's flat mate say about the waiters in Freddie's Pizza House?",
      options: [
        { letter: "A", text: "they are unfriendly." },
        { letter: "B", text: "they are friendly." },
        { letter: "C", text: "they are clumsy." },
        { letter: "D", text: "they are terrible." }
      ],
      multi: false, correct: ["A"], userAnswer: [], officialResult: null, keyConfidence: "listening",
      explanation: "🎧 Аудирование. Ответ зависит от записи. Предварительно — unfriendly (A). Прослушайте и проверьте."
    },
    {
      id: "v5-english-15", variant: 5, subject: "english", number: 15, topic: "Аудирование", lang: "en",
      audio: V5EN_AUDIO_2,
      question: "Who did not like food at Freddie's Pizza House?",
      options: [
        { letter: "A", text: "Jack" },
        { letter: "B", text: "Alice's girlfriend." },
        { letter: "C", text: "Alice's boyfriend." },
        { letter: "D", text: "Alice's flat mate." }
      ],
      multi: false, correct: ["D"], userAnswer: [], officialResult: null, keyConfidence: "listening",
      explanation: "🎧 Аудирование. Ответ зависит от записи. Предварительно — Alice's flat mate (D). Прослушайте и проверьте."
    },
    {
      id: "v5-english-16", variant: 5, subject: "english", number: 16, topic: "Аудирование", lang: "en",
      audio: V5EN_AUDIO_2,
      question: "Who will Alice invite to her birthday this year?",
      options: [
        { letter: "A", text: "only her flat mate." },
        { letter: "B", text: "some close friends." },
        { letter: "C", text: "only Jack" },
        { letter: "D", text: "all her groupmates" }
      ],
      multi: false, correct: ["B"], userAnswer: [], officialResult: null, keyConfidence: "listening",
      explanation: "🎧 Аудирование. Ответ зависит от записи. Предварительно — some close friends (B). Прослушайте и проверьте."
    },

    /* ---------- Грамматика (№17–34) ---------- */
    {
      id: "v5-english-17", variant: 5, subject: "english", number: 17, topic: "Грамматика", lang: "en",
      question: "My favourite ____________ is Beethoven.",
      options: [
        { letter: "A", text: "a composers" },
        { letter: "B", text: "a composer" },
        { letter: "C", text: "composers" },
        { letter: "D", text: "composer" }
      ],
      multi: false, correct: ["D"], userAnswer: [], officialResult: null, keyConfidence: "derived",
      explanation: "После «my favourite» стоит исчисляемое существительное в единственном числе без артикля — определителем уже служит «my» → composer (D). «a composer/a composers» лишний артикль (нельзя «my a…»), «composers» — множественное число противоречит «is Beethoven»."
    },
    {
      id: "v5-english-18", variant: 5, subject: "english", number: 18, topic: "Грамматика", lang: "en",
      question: "I want to sleep. Please, turn off ___________.",
      options: [
        { letter: "A", text: "light" },
        { letter: "B", text: "a light" },
        { letter: "C", text: "a lights" },
        { letter: "D", text: "the light" }
      ],
      multi: false, correct: ["D"], userAnswer: [], officialResult: null, keyConfidence: "derived",
      explanation: "Речь о конкретном свете в комнате → определённый артикль: turn off the light (D). «light» без артикля не годится (существительное исчисляемое и конкретное), «a light» — неопределённый (какой-то один из многих), «a lights» грамматически невозможно (a + множественное число)."
    },
    {
      id: "v5-english-19", variant: 5, subject: "english", number: 19, topic: "Грамматика", lang: "en",
      question: "This book is ______ which I have ever read in my life.",
      options: [
        { letter: "A", text: "more interesting" },
        { letter: "B", text: "the most interesting" },
        { letter: "C", text: "the more interesting" },
        { letter: "D", text: "most interesting" }
      ],
      multi: false, correct: ["B"], userAnswer: [], officialResult: null, keyConfidence: "derived",
      explanation: "Конструкция «the …-est … I have ever …» требует превосходной степени с артиклем the → the most interesting (B). «more interesting» — сравнительная (для двух объектов), «the more interesting» — тоже сравнительная, «most interesting» без the не образует нужную превосходную форму."
    },
    {
      id: "v5-english-20", variant: 5, subject: "english", number: 20, topic: "Грамматика", lang: "en",
      question: "I can do it ________.",
      options: [
        { letter: "A", text: "himself" },
        { letter: "B", text: "herself" },
        { letter: "C", text: "myself" },
        { letter: "D", text: "meself" }
      ],
      multi: false, correct: ["C"], userAnswer: [], officialResult: null, keyConfidence: "derived",
      explanation: "Возвратное местоимение должно согласовываться с подлежащим «I» → myself (C). «himself/herself» относятся к he/she, «meself» — несуществующая форма."
    },
    {
      id: "v5-english-21", variant: 5, subject: "english", number: 21, topic: "Грамматика", lang: "en",
      question: "My sister had five apples and then she gave two for me. How many apples does my sister have now?",
      options: [
        { letter: "A", text: "three" },
        { letter: "B", text: "five" },
        { letter: "C", text: "two" },
        { letter: "D", text: "four" }
      ],
      multi: false, correct: ["A"], userAnswer: [], officialResult: null, keyConfidence: "derived",
      explanation: "Вопрос на внимательность: было 5 яблок, отдала 2 → осталось 5 − 2 = 3 → three (A). «five» и «two» — числа прямо из условия (отвлекающие), «four» — просто неверный подсчёт."
    },
    {
      id: "v5-english-22", variant: 5, subject: "english", number: 22, topic: "Грамматика", lang: "en",
      question: "Put adverb “definitely” into correct place:",
      options: [
        { letter: "A", text: "you are going away definitely next month?" },
        { letter: "B", text: "you are going away next month definitely?" },
        { letter: "C", text: "are you going away definitely next month?" },
        { letter: "D", text: "are you definitely going away next month?" }
      ],
      multi: false, correct: ["D"], userAnswer: [], officialResult: null, keyConfidence: "derived",
      explanation: "Это вопрос, значит нужна инверсия «Are you…», а наречие частоты/уверенности «definitely» ставится после подлежащего перед смысловым глаголом → «Are you definitely going away next month?» (D). В A и B нет инверсии (это порядок утверждения), в C «definitely» стоит не на месте."
    },
    {
      id: "v5-english-23", variant: 5, subject: "english", number: 23, topic: "Грамматика", lang: "en",
      question: "Johanna was born ______ 1997, wasn't she?",
      options: [
        { letter: "A", text: "in" },
        { letter: "B", text: "for" },
        { letter: "C", text: "on" },
        { letter: "D", text: "at" }
      ],
      multi: false, correct: ["A"], userAnswer: [], officialResult: null, keyConfidence: "derived",
      explanation: "С годами используется предлог in → in 1997 (A). «on» — с датами и днями (on Monday, on 5th May), «at» — со временем суток/точками времени (at 5 o'clock), «for» — с промежутком (for 3 years)."
    },
    {
      id: "v5-english-24", variant: 5, subject: "english", number: 24, topic: "Грамматика", lang: "en",
      question: "He ______ taking early retirement.",
      options: [
        { letter: "A", text: "to consider" },
        { letter: "B", text: "is considering" },
        { letter: "C", text: "consideres" },
        { letter: "D", text: "consider" }
      ],
      multi: false, correct: ["B"], userAnswer: [], officialResult: null, keyConfidence: "derived",
      explanation: "Нужна личная форма глагола, согласованная с «He», + герундий «taking» → Present Continuous «is considering» (B). «to consider» (инфинитив) и «consider» (без -s) не согласуются с he, «consideres» — неверное написание (правильно considers)."
    },
    {
      id: "v5-english-25", variant: 5, subject: "english", number: 25, topic: "Грамматика", lang: "en",
      question: "When I came home, somebody ______ flowers for me.",
      options: [
        { letter: "A", text: "was left" },
        { letter: "B", text: "had left" },
        { letter: "C", text: "have leaved" },
        { letter: "D", text: "left" }
      ],
      multi: false, correct: ["B"], userAnswer: [], officialResult: null, keyConfidence: "derived",
      explanation: "Действие «оставил цветы» произошло раньше, чем «я пришёл домой» → Past Perfect: had left (B). «was left» — пассив (не по смыслу: someone left something сам), «have leaved» — двойная ошибка (leave→left, и время не то), «left» (Past Simple) не передаёт предшествование."
    },
    {
      id: "v5-english-26", variant: 5, subject: "english", number: 26, topic: "Грамматика", lang: "en",
      question: "______________ any of Shakespeare's plays?",
      options: [
        { letter: "A", text: "Do you read" },
        { letter: "B", text: "Had you read" },
        { letter: "C", text: "Did you read" },
        { letter: "D", text: "Have you read" }
      ],
      multi: false, correct: ["D"], userAnswer: [], officialResult: null, keyConfidence: "derived",
      explanation: "Вопрос о жизненном опыте («доводилось ли когда-нибудь читать») → Present Perfect: Have you read (D). «Do you read» — о привычке, «Had you read» требует второго прошедшего действия, «Did you read» возможно в разговоре о конкретном моменте, но классический вопрос об опыте — Have you read."
    },
    {
      id: "v5-english-27", variant: 5, subject: "english", number: 27, topic: "Грамматика", lang: "en",
      question: "I _____ her yesterday.",
      options: [
        { letter: "A", text: "had seen" },
        { letter: "B", text: "have seen" },
        { letter: "C", text: "see" },
        { letter: "D", text: "saw" }
      ],
      multi: false, correct: ["D"], userAnswer: [], officialResult: null, keyConfidence: "derived",
      explanation: "«yesterday» — точный момент в прошлом → Past Simple: saw (D). «had seen» (Past Perfect) и «have seen» (Present Perfect) несовместимы с «yesterday», «see» — настоящее время."
    },
    {
      id: "v5-english-28", variant: 5, subject: "english", number: 28, topic: "Грамматика", lang: "en",
      question: "Look, I __________________ by my nail master. Do you like them?",
      options: [
        { letter: "A", text: "am done my nails" },
        { letter: "B", text: "have done my nails" },
        { letter: "C", text: "do my nails" },
        { letter: "D", text: "have my nails done" }
      ],
      multi: false, correct: ["D"], userAnswer: [], officialResult: null, keyConfidence: "derived",
      explanation: "Каузативная конструкция «сделать что-то чужими руками»: have + something + Past Participle → «I have my nails done by my nail master» — «мне делают/сделали маникюр» (D). «do my nails» значит «делаю сам», «have done my nails» — сам сделал, «am done my nails» грамматически неверно."
    },
    {
      id: "v5-english-29", variant: 5, subject: "english", number: 29, topic: "Грамматика", lang: "en",
      question: "___________ you swim when you were seven?",
      options: [
        { letter: "A", text: "Could" },
        { letter: "B", text: "Were able" },
        { letter: "C", text: "Can" },
        { letter: "D", text: "Did can" }
      ],
      multi: false, correct: ["A"], userAnswer: [], officialResult: null, keyConfidence: "derived",
      explanation: "Способность в прошлом → Could (A): «Could you swim when you were seven?». «Can» — настоящее, «Were able» потребовало бы «Were you able to swim», «Did can» невозможно (после did — инфинитив без can)."
    },
    {
      id: "v5-english-30", variant: 5, subject: "english", number: 30, topic: "Грамматика", lang: "en",
      question: "I know we locked the door. I clearly remember ________ it.",
      options: [
        { letter: "A", text: "to lock" },
        { letter: "B", text: "locking" },
        { letter: "C", text: "to locking" },
        { letter: "D", text: "lock" }
      ],
      multi: false, correct: ["B"], userAnswer: [], officialResult: null, keyConfidence: "derived",
      explanation: "«remember doing» — помнить о ранее совершённом действии → locking (B). «remember to do» (to lock) значит «не забыть сделать» (действие ещё впереди) — другой смысл; «to locking» и «lock» грамматически неверны."
    },
    {
      id: "v5-english-31", variant: 5, subject: "english", number: 31, topic: "Грамматика", lang: "en",
      question: "Yesterday I heard someone _________.",
      options: [
        { letter: "A", text: "screams" },
        { letter: "B", text: "scream" },
        { letter: "C", text: "screaming" },
        { letter: "D", text: "to screamed" }
      ],
      multi: false, correct: ["B"], userAnswer: [], officialResult: null, keyConfidence: "derived",
      disputed: true,
      disputedNote: "После глаголов восприятия (hear/see) допустимы обе формы: «hear someone scream» (полное, законченное действие) и «hear someone screaming» (действие в процессе). Для однократного услышанного крика обычно берут инфинитив без to — scream (B), но screaming (C) тоже грамматически верно.",
      explanation: "После «heard someone» ставится либо инфинитив без to (полное действие), либо -ing (действие в процессе). Для однократного крика чаще выбирают «scream» (B). Вариант C (screaming) тоже допустим — см. пометку. «screams» (наст. время) и «to screamed» — неверны."
    },
    {
      id: "v5-english-32", variant: 5, subject: "english", number: 32, topic: "Грамматика", lang: "en",
      question: "We don't leave food on the table. If we ______, the cat ______ it.",
      options: [
        { letter: "A", text: "had done / would eat" },
        { letter: "B", text: "do / will eat" },
        { letter: "C", text: "did / would have eaten" },
        { letter: "D", text: "did / will eat" }
      ],
      multi: false, correct: ["B"], userAnswer: [], officialResult: null, keyConfidence: "derived",
      explanation: "Реальное условие (первый тип): If + Present Simple, главная часть — will + инфинитив → «If we do, the cat will eat it» (B). A — смешанное нереальное, C и D нарушают согласование времён в условном предложении."
    },
    {
      id: "v5-english-33", variant: 5, subject: "english", number: 33, topic: "Грамматика", lang: "en",
      question: "Look at Tom! He ____ with scissors",
      options: [
        { letter: "A", text: "has been playing" },
        { letter: "B", text: "was playing" },
        { letter: "C", text: "plays" },
        { letter: "D", text: "is playing" }
      ],
      multi: false, correct: ["D"], userAnswer: [], officialResult: null, keyConfidence: "derived",
      explanation: "«Look at Tom!» — действие происходит прямо сейчас → Present Continuous: is playing (D). «has been playing» (Present Perfect Continuous) — про длительность к настоящему, «was playing» — прошедшее, «plays» — привычка/факт, а не «сейчас»."
    },
    {
      id: "v5-english-34", variant: 5, subject: "english", number: 34, topic: "Грамматика", lang: "en",
      question: "The correct sentence with subjunctive mood is ________________.",
      options: [
        { letter: "A", text: "It is essential that everyone be here on time" },
        { letter: "B", text: "It is essential that everyone been here on time" },
        { letter: "C", text: "It is essential that everyone has here on time" },
        { letter: "D", text: "It is essential that everyone here on time" }
      ],
      multi: false, correct: ["A"], userAnswer: [], officialResult: null, keyConfidence: "derived",
      explanation: "После «It is essential that…» используется сослагательное наклонение — глагол в форме инфинитива без to (base form): «everyone be here» (A). «been» и «has» разрушают конструкцию, в D глагол вообще пропущен."
    },

    /* ---------- Чтение: The London Underground (№35–42) ---------- */
    {
      id: "v5-english-35", variant: 5, subject: "english", number: 35, topic: "Чтение", lang: "en",
      passage: V5EN_TUBE,
      question: "The busiest period for London Underground ____________________.",
      options: [
        { letter: "A", text: "24 hours" },
        { letter: "B", text: "4.30 p.m. to 6.30 p.m." },
        { letter: "C", text: "5 a.m. to 7 a.m." },
        { letter: "D", text: "7.30 p.m. to 9.30 p.m." }
      ],
      multi: false, correct: ["B"], userAnswer: [], officialResult: null, keyConfidence: "derived",
      explanation: "В тексте: «Rush hour is from 7.30 a.m. to 9.30 a.m. and from 4.30 p.m. to 6.30 p.m.». Из вариантов совпадает только B (4.30 p.m. to 6.30 p.m.). D (7.30 p.m.) — вечер, а в тексте 7.30 a.m."
    },
    {
      id: "v5-english-36", variant: 5, subject: "english", number: 36, topic: "Чтение", lang: "en",
      passage: V5EN_TUBE,
      question: "The London Underground is the world's ________ underground.",
      options: [
        { letter: "A", text: "most state- of –the art" },
        { letter: "B", text: "most sophisticated" },
        { letter: "C", text: "biggest" },
        { letter: "D", text: "simplest" }
      ],
      multi: false, correct: ["C"], userAnswer: [], officialResult: null, keyConfidence: "derived",
      explanation: "В тексте: «the world's oldest and largest». «largest» = biggest → C. Остальные определения (most state-of-the-art, most sophisticated, simplest) в тексте не упоминаются."
    },
    {
      id: "v5-english-37", variant: 5, subject: "english", number: 37, topic: "Чтение", lang: "en",
      passage: V5EN_TUBE,
      question: "The longest escalator in Europe is on the _____________",
      options: [
        { letter: "A", text: "Southern line" },
        { letter: "B", text: "Central line" },
        { letter: "C", text: "Northern line" },
        { letter: "D", text: "Victoria line" }
      ],
      multi: false, correct: ["C"], userAnswer: [], officialResult: null, keyConfidence: "derived",
      explanation: "В тексте: «The longest escalator in Europe is at Angel station on the Northern line» → C. Central line упомянут как линия первых поездов (1863), Victoria line — как пример синей линии; к самому длинному эскалатору они не относятся."
    },
    {
      id: "v5-english-38", variant: 5, subject: "english", number: 38, topic: "Чтение", lang: "en",
      passage: V5EN_TUBE,
      question: "If a person using an escalator for short of time they__________________.",
      options: [
        { letter: "A", text: "should walk on the left side" },
        { letter: "B", text: "should use a lift" },
        { letter: "C", text: "should walk on the right side" },
        { letter: "D", text: "shouldn't use underground" }
      ],
      multi: false, correct: ["A"], userAnswer: [], officialResult: null, keyConfidence: "derived",
      explanation: "В тексте: «People using the escalators stand on the right-hand side, those in a hurry walk on the left». Тот, у кого мало времени (спешит), идёт по левой стороне → A. По правой стороне (C) стоят, а не идут."
    },
    {
      id: "v5-english-39", variant: 5, subject: "english", number: 39, topic: "Чтение", lang: "en",
      passage: V5EN_TUBE,
      question: "The Blitz was ______________________.",
      options: [
        { letter: "A", text: "a stadium" },
        { letter: "B", text: "a period in World War II" },
        { letter: "C", text: "a city" },
        { letter: "D", text: "a station in World War II" }
      ],
      multi: false, correct: ["B"], userAnswer: [], officialResult: null, keyConfidence: "derived",
      explanation: "В тексте: «During the Blitz, the aerial bombing of London in World War II…». Blitz — период воздушных бомбардировок во время Второй мировой → B (a period in World War II)."
    },
    {
      id: "v5-english-40", variant: 5, subject: "english", number: 40, topic: "Чтение", lang: "en",
      passage: V5EN_TUBE,
      question: "During the war time underground was used ____________________.",
      options: [
        { letter: "A", text: "to commute to safe zones" },
        { letter: "B", text: "to hide from bad weather" },
        { letter: "C", text: "to travel from dangerous places to safe" },
        { letter: "D", text: "to seek safety from aerial attacks" }
      ],
      multi: false, correct: ["D"], userAnswer: [], officialResult: null, keyConfidence: "derived",
      explanation: "В тексте: «Londoners used to hide from the bombs by using the underground stations during air raids». Метро использовали, чтобы укрыться от воздушных налётов → D. B (from bad weather) искажает смысл — прятались от бомб, а не от погоды."
    },
    {
      id: "v5-english-41", variant: 5, subject: "english", number: 41, topic: "Чтение", lang: "en",
      passage: V5EN_TUBE,
      question: "Londoners use name “The Tube” for their Underground because of its__________.",
      options: [
        { letter: "A", text: "shape" },
        { letter: "B", text: "passengers" },
        { letter: "C", text: "line name" },
        { letter: "D", text: "color" }
      ],
      multi: false, correct: ["A"], userAnswer: [], officialResult: null, keyConfidence: "derived",
      explanation: "В тексте: «the Tube (tube-shaped tunnels)» — название из-за формы тоннелей (в виде трубы) → A (shape)."
    },
    {
      id: "v5-english-42", variant: 5, subject: "english", number: 42, topic: "Чтение", lang: "en",
      passage: V5EN_TUBE,
      question: "Underground covers __________ zones.",
      options: [
        { letter: "A", text: "outer zones only" },
        { letter: "B", text: "all six zones" },
        { letter: "C", text: "central zones only" },
        { letter: "D", text: "Heathrow Airport only" }
      ],
      multi: false, correct: ["B"], userAnswer: [], officialResult: null, keyConfidence: "derived",
      explanation: "В тексте: «London has six travel zones. Zone one is the most central and zone six is the outer…». Сеть охватывает все шесть зон → B. Хитроу — это лишь часть шестой зоны, а не отдельная граница охвата."
    },

    /* ---------- Чтение: My First English Class (№43–50) ---------- */
    {
      id: "v5-english-43", variant: 5, subject: "english", number: 43, topic: "Чтение", lang: "en",
      passage: V5EN_CLASS,
      question: "For this course you need ____________.",
      options: [
        { letter: "A", text: "a laptop" },
        { letter: "B", text: "a copybook" },
        { letter: "C", text: "a booknote" },
        { letter: "D", text: "a copy of the book" }
      ],
      multi: false, correct: ["D"], userAnswer: [], officialResult: null, keyConfidence: "derived",
      explanation: "В тексте: «For this course you need the book… go to the library and get a copy of the book» → D. Ноутбук, тетрадь и «booknote» в тексте не упоминаются."
    },
    {
      id: "v5-english-44", variant: 5, subject: "english", number: 44, topic: "Чтение", lang: "en",
      passage: V5EN_CLASS,
      question: "The teacher doesn't want to see any ____________.",
      options: [
        { letter: "A", text: "photocopies of the book" },
        { letter: "B", text: "laptops" },
        { letter: "C", text: "photos with friends" },
        { letter: "D", text: "notebooks" }
      ],
      multi: false, correct: ["A"], userAnswer: [], officialResult: null, keyConfidence: "derived",
      explanation: "В тексте прямо: «I don't want to see any photocopies of the book!» → A (photocopies of the book)."
    },
    {
      id: "v5-english-45", variant: 5, subject: "english", number: 45, topic: "Чтение", lang: "en",
      passage: V5EN_CLASS,
      question: "For this course you need a ______________.",
      options: [
        { letter: "A", text: "British Life and Language Level 2 Teacher's Book" },
        { letter: "B", text: "British Life and Language Level 2 Student's Book" },
        { letter: "C", text: "British Life and Language Level 1 Student's Book" },
        { letter: "D", text: "British Life and Language Level 1 Teacher's Book" }
      ],
      multi: false, correct: ["C"], userAnswer: [], officialResult: null, keyConfidence: "derived",
      explanation: "В тексте точное название: «British Life and Language Level 1 Student's Book» → C. Нужно быть внимательным к деталям: Level 1 (не 2) и Student's (не Teacher's)."
    },
    {
      id: "v5-english-46", variant: 5, subject: "english", number: 46, topic: "Чтение", lang: "en",
      passage: V5EN_CLASS,
      question: "The course starts __________________.",
      options: [
        { letter: "A", text: "on March the 30th." },
        { letter: "B", text: "on May the 20th." },
        { letter: "C", text: "on May the 12" },
        { letter: "D", text: "on March the 13th." }
      ],
      multi: false, correct: ["D"], userAnswer: [], officialResult: null, keyConfidence: "derived",
      explanation: "В тексте: «We begin next week, on March the 13th» → D. May the 20th (B) — это дата окончания курса («The course ends on May the 20th»), отвлекающий вариант."
    },
    {
      id: "v5-english-47", variant: 5, subject: "english", number: 47, topic: "Чтение", lang: "en",
      passage: V5EN_CLASS,
      question: "Classes will be conducted on _________________.",
      options: [
        { letter: "A", text: "Monday and Friday" },
        { letter: "B", text: "Monday and Tuesday" },
        { letter: "C", text: "Monday and Thursday" },
        { letter: "D", text: "Monday and Wednesday" }
      ],
      multi: false, correct: ["D"], userAnswer: [], officialResult: null, keyConfidence: "derived",
      explanation: "В тексте: «We have our classes twice a week, on Monday and Wednesday» → D. Friday упомянут только как день приёмных часов преподавателя (office hour), а не как день занятий."
    },
    {
      id: "v5-english-48", variant: 5, subject: "english", number: 48, topic: "Чтение", lang: "en",
      passage: V5EN_CLASS,
      question: "The class is in Room 13 on the _______________.",
      options: [
        { letter: "A", text: "high floor" },
        { letter: "B", text: "second floor" },
        { letter: "C", text: "first floor" },
        { letter: "D", text: "third floor" }
      ],
      multi: false, correct: ["C"], userAnswer: [], officialResult: null, keyConfidence: "derived",
      explanation: "В тексте: «in Room 13, on the first floor» → C. Second floor (B) — это этаж кабинета преподавателя (Office 7B), отвлекающий вариант."
    },
    {
      id: "v5-english-49", variant: 5, subject: "english", number: 49, topic: "Чтение", lang: "en",
      passage: V5EN_CLASS,
      question: "You may come to the teacher's office if you have _________________.",
      options: [
        { letter: "A", text: "notes and problems" },
        { letter: "B", text: "books and problems" },
        { letter: "C", text: "friends and questions" },
        { letter: "D", text: "problems and questions" }
      ],
      multi: false, correct: ["D"], userAnswer: [], officialResult: null, keyConfidence: "derived",
      explanation: "В тексте: «if you have any questions or problems… welcome» → D (problems and questions). Остальные пары (notes, books, friends) в тексте с приёмными часами не связаны."
    },
    {
      id: "v5-english-50", variant: 5, subject: "english", number: 50, topic: "Чтение", lang: "en",
      passage: V5EN_CLASS,
      question: "In Office 7 B you can find ________________.",
      options: [
        { letter: "A", text: "the manager's office" },
        { letter: "B", text: "the classroom" },
        { letter: "C", text: "a conference room" },
        { letter: "D", text: "the teacher's office" }
      ],
      multi: false, correct: ["D"], userAnswer: [], officialResult: null, keyConfidence: "derived",
      explanation: "В тексте: «I'm in Office 7B on the second floor. My office hour is Friday 6 p.m.» Office 7B — это кабинет преподавателя → D. Классная комната — это Room 13 (первый этаж), а не 7B."
    }
  ]
};
