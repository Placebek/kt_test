window.QUIZ_DATA = window.QUIZ_DATA || {};

/* Вариант 9 · Английский язык (папка questions/вариант-9/english) — реальные вопросы
   с пробного тестирования. 50 вопросов:
     • №1–8   — аудирование, запись 1 (новость о ценах на жильё в Великобритании);
     • №9–16  — аудирование, запись 2 (два профессиональных само-представления:
                 Мария-архитектор и Эмили-менеджер по продажам);
     • №17–34 — грамматика;
     • №35–42 — чтение, текст «The pet store»;
     • №43–50 — чтение, текст «The superstar DJ David Guetta».
   Ключ выведен по results/вариант-9/english/results.txt: если пользователь ответил
   верно — keyConfidence "official"; если неверно — верный вариант выведен
   самостоятельно (keyConfidence "derived") на основе аудиозаписи/текста/грамматики.
   Аудиозаписи 1-8.mp3 и 9-16.mp3 подключены как плеер прямо в вопросе. */

var V9EN_AUDIO1 = "questions/вариант-9/english/audio/1-8.mp3";
var V9EN_AUDIO2 = "questions/вариант-9/english/audio/9-16.mp3";

var V9EN_PETSTORE =
  "The pet store\n" +
  "George is at the pet store, looking at what kind of pet he might want to get for his birthday. George asked if he could have a horse, but his parents said no because horses are too big.\n" +
  "First, he sees dogs and cats. Baby dogs are called puppies. Baby cats are called kittens. George likes them because they are easy to take care of and can play a lot, but they will get bigger. George wants a small pet.\n" +
  "Then George sees animals that have to live in a cage. He sees rabbits, guinea pigs, and mice. Mice are what you call more than one mouse. He likes these animals because they are small. Birds live in cages too. George sees a parrot and a canary. He likes them all, but he doesn't want to clean the cage.\n" +
  "George sees the animals in tanks. The tanks full of water have fish and turtles in them. He thinks about a goldfish but decides he likes the turtles more. There are also tanks with rocks and sand that have snakes, spiders, and scorpions, but George is afraid of them. George likes the turtles best, but they won't fit in the little fishbowls. Turtles need bigger tanks, so they can swim sometimes and hide sometimes.\n" +
  "George decides he wants to get a turtle for his birthday. He buys a book on how to take care of a turtle and a list of what types of turtles the store has.";

var V9EN_GUETTA =
  "The superstar DJ David Guetta\n" +
  "I wake up at about 1.00 p.m., and the first thing I do is going outside. I live in Ibiza and I like having breakfast in the sun. I usually have fruit juice, eggs, fruit, and tea. I never drink coffee. After breakfast, I answer my emails for an hour, then I go to the gym, I never listen to music in the house, or even in the car, because music is my job. On a typical day I spend two or three hours in my studio, then another four hours at a nightclub. My work starts in the evening. I usually have dinner in a restaurant, and then I go to the club. I try to have a normal life, but my job isn't normal. I arrive at a club like a secret agent - I go in through the back door and Security takes me to the stage. I finish work at 4.00 in the morning. Security takes me out, and then I go home. After about four hours playing music I'm very excited. My manager says: 'Go home and sleep\", but that's impossible. First I need to calm down. When I get home I have a cup of tea, brush my teeth and say: 'Thank you for this wonderful life'. I am 47 now, but I want to do this when I'm 60 or 80. I want to do this forever.";

window.QUIZ_DATA["v9-english"] = {
  key: "v9-english", variant: 9, subject: "english", lang: "en",
  title: "Вариант 9 · Английский язык",
  questions: [
    {
      id: "v9-english-1", variant: 9, subject: "english", number: 1, topic: "Аудирование", lang: "en",
      audio: V9EN_AUDIO1,
      question: "U.K. house prices went by 10.5% …",
      options: [
        { letter: "A", text: "every year" }, { letter: "B", text: "last year" },
        { letter: "C", text: "this year" }, { letter: "D", text: "the following year" }
      ],
      multi: false, correct: ["B"], userAnswer: ["B"], officialResult: 1, keyConfidence: "official",
      explanation: "В записи говорится, что цены на жильё в Великобритании выросли на 10,5% именно за прошлый год (last year). Верный ответ B."
    },
    {
      id: "v9-english-2", variant: 9, subject: "english", number: 2, topic: "Аудирование", lang: "en",
      audio: V9EN_AUDIO1,
      question: "As Britain's Office for National Statistics claimed U.K. house prices … last year",
      options: [
        { letter: "A", text: "stayed the same" }, { letter: "B", text: "increased" },
        { letter: "C", text: "decreased" }, { letter: "D", text: "doubled" }
      ],
      multi: false, correct: ["B"], userAnswer: ["D"], officialResult: 0, keyConfidence: "derived",
      explanation: "По данным статистического ведомства цены выросли на 10,5% — это увеличение (increased), а не удвоение (doubled: означало бы рост на 100%). Верный ответ B."
    },
    {
      id: "v9-english-3", variant: 9, subject: "english", number: 3, topic: "Аудирование", lang: "en",
      audio: V9EN_AUDIO1,
      question: "Last year UK house prices went up by …, according to Britain's Office for National Statistics",
      options: [
        { letter: "A", text: "11.5%" }, { letter: "B", text: "105%" },
        { letter: "C", text: "10.5%" }, { letter: "D", text: "1.5%" }
      ],
      multi: false, correct: ["C"], userAnswer: ["C"], officialResult: 1, keyConfidence: "official",
      explanation: "Точная цифра, названная в записи, — 10,5%. Верный ответ C."
    },
    {
      id: "v9-english-4", variant: 9, subject: "english", number: 4, topic: "Аудирование", lang: "en",
      audio: V9EN_AUDIO1,
      question: "… of Britons are not going to buy their own house",
      options: [
        { letter: "A", text: "a third" }, { letter: "B", text: "two thirds" },
        { letter: "C", text: "one thirds" }, { letter: "D", text: "three" }
      ],
      multi: false, correct: ["A"], userAnswer: ["A"], officialResult: 1, keyConfidence: "official",
      explanation: "В записи говорится, что треть (a third) британцев никогда не купит собственное жильё. Верный ответ A."
    },
    {
      id: "v9-english-5", variant: 9, subject: "english", number: 5, topic: "Аудирование", lang: "en",
      audio: V9EN_AUDIO1,
      question: "According to the context, \"runaway train\" means …",
      options: [
        { letter: "A", text: "are to be under control" }, { letter: "B", text: "prices were under control" },
        { letter: "C", text: "prices are under control" }, { letter: "D", text: "prices are not under control" }
      ],
      multi: false, correct: ["D"], userAnswer: ["D"], officialResult: 1, keyConfidence: "official",
      explanation: "Идиома «runaway train» (несущийся без управления поезд) в контексте цен на жильё означает, что цены вышли из-под контроля. Верный ответ D."
    },
    {
      id: "v9-english-6", variant: 9, subject: "english", number: 6, topic: "Аудирование", lang: "en",
      audio: V9EN_AUDIO1,
      question: "As report says people in Britain are OK with …",
      options: [
        { letter: "A", text: "a lifetime of buying" }, { letter: "B", text: "a lifetime of renting" },
        { letter: "C", text: "a present lifetime" }, { letter: "D", text: "a difficult lifetime" }
      ],
      multi: false, correct: ["B"], userAnswer: ["B"], officialResult: 1, keyConfidence: "official",
      explanation: "В отчёте говорится, что британцы готовы смириться с арендой жилья всю жизнь (a lifetime of renting). Верный ответ B."
    },
    {
      id: "v9-english-7", variant: 9, subject: "english", number: 7, topic: "Аудирование", lang: "en",
      audio: V9EN_AUDIO1,
      question: "The highest prices boom on houses takes place in",
      options: [
        { letter: "A", text: "London" }, { letter: "B", text: "UK" },
        { letter: "C", text: "Britain" }, { letter: "D", text: "Britain's Office for National Statistics" }
      ],
      multi: false, correct: ["A"], userAnswer: ["A"], officialResult: 1, keyConfidence: "official",
      explanation: "Наибольший рост цен отмечен именно в Лондоне (18% за год), тогда как по стране в целом рост меньше. Верный ответ A."
    },
    {
      id: "v9-english-8", variant: 9, subject: "english", number: 8, topic: "Аудирование", lang: "en",
      audio: V9EN_AUDIO1,
      question: "The price for an average house around the UK was at …",
      options: [
        { letter: "A", text: "$42.5,000" }, { letter: "B", text: "$4,250,000" },
        { letter: "C", text: "$425,000" }, { letter: "D", text: "$4.25,000" }
      ],
      multi: false, correct: ["C"], userAnswer: ["C"], officialResult: 1, keyConfidence: "official",
      explanation: "Средняя цена дома по стране в записи названа как $425,000. Верный ответ C."
    },

    {
      id: "v9-english-9", variant: 9, subject: "english", number: 9, topic: "Аудирование", lang: "en",
      audio: V9EN_AUDIO2,
      question: "Which statement is correct about Emily?",
      options: [
        { letter: "A", text: "she speaks three other languages" }, { letter: "B", text: "she manages to work with a large team of people" },
        { letter: "C", text: "she isn't a partner of a company" }, { letter: "D", text: "she has worked in many different countries" }
      ],
      multi: false, correct: ["B"], userAnswer: ["B"], officialResult: 1, keyConfidence: "official",
      explanation: "Эмили руководит большой командой (около 120 человек) — верно утверждение B. Владение тремя языками и работа в разных странах — это про Марию, а не про Эмили."
    },
    {
      id: "v9-english-10", variant: 9, subject: "english", number: 10, topic: "Аудирование", lang: "en",
      audio: V9EN_AUDIO2,
      question: "Which statement is not correct about Maria?",
      options: [
        { letter: "A", text: "she speaks two other languages." }, { letter: "B", text: "she is a partner of a company" },
        { letter: "C", text: "she manages a large team of people" }, { letter: "D", text: "she likes outdoor sports." }
      ],
      multi: false, correct: ["C"], userAnswer: ["A"], officialResult: 0, keyConfidence: "derived",
      explanation: "Мария — партнёр архитектурной компании, говорит на двух дополнительных языках и увлекается активным отдыхом на природе — всё это о ней верно. А вот управление большой командой людей — это про Эмили, а не про Марию, поэтому неверное утверждение именно C. Пользователь выбрал A, но это утверждение как раз верно про Марию, поэтому ответ засчитан неверным."
    },
    {
      id: "v9-english-11", variant: 9, subject: "english", number: 11, topic: "Аудирование", lang: "en",
      audio: V9EN_AUDIO2,
      question: "Which statement is not correct about Emily?",
      options: [
        { letter: "A", text: "her last job was in a bank" }, { letter: "B", text: "she has worked in many different countries" },
        { letter: "C", text: "she is a sales manager at the moment" }, { letter: "D", text: "she is skilled in negotiation" }
      ],
      multi: false, correct: ["B"], userAnswer: ["C"], officialResult: 0, keyConfidence: "derived",
      explanation: "Эмили упоминает прошлую работу в банке, текущую должность менеджера по продажам и навык переговоров — все эти утверждения о ней верны. А вот работа в разных странах мира — это снова про Марию (Италия, Греция, Таиланд, Австралия, Бразилия), а не про Эмили, поэтому неверное утверждение — B. Пользователь выбрал C, но это утверждение верно, поэтому ответ засчитан неверным."
    },
    {
      id: "v9-english-12", variant: 9, subject: "english", number: 12, topic: "Аудирование", lang: "en",
      audio: V9EN_AUDIO2,
      question: "Which statement is correct about Maria?",
      options: [
        { letter: "A", text: "she is a sales manager at the moment" }, { letter: "B", text: "she doesn't like outdoor sports" },
        { letter: "C", text: "her last job was in a bank" }, { letter: "D", text: "she has worked with people from many different countries" }
      ],
      multi: false, correct: ["D"], userAnswer: ["D"], officialResult: 1, keyConfidence: "official",
      explanation: "Мария рассказывает о международном опыте работы с людьми из разных стран — верно утверждение D. Остальные пункты (менеджер по продажам, работа в банке, нелюбовь к активному отдыху) относятся к Эмили или прямо противоречат словам Марии."
    },
    {
      id: "v9-english-13", variant: 9, subject: "english", number: 13, topic: "Аудирование", lang: "en",
      audio: V9EN_AUDIO2,
      question: "How many years of experience does Maria have?",
      options: [
        { letter: "A", text: "20" }, { letter: "B", text: "2" },
        { letter: "C", text: "12" }, { letter: "D", text: "22" }
      ],
      multi: false, correct: ["A"], userAnswer: ["A"], officialResult: 1, keyConfidence: "official",
      explanation: "Мария называет свой стаж — 20 лет опыта в архитектуре. Верный ответ A (12 лет — это стаж Эмили)."
    },
    {
      id: "v9-english-14", variant: 9, subject: "english", number: 14, topic: "Аудирование", lang: "en",
      audio: V9EN_AUDIO2,
      question: "What is Maria specialized in?",
      options: [
        { letter: "A", text: "architecture and design" }, { letter: "B", text: "accounting" },
        { letter: "C", text: "managing big teams" }, { letter: "D", text: "sales" }
      ],
      multi: false, correct: ["A"], userAnswer: ["A"], officialResult: 1, keyConfidence: "official",
      explanation: "Мария — архитектор, её специализация — архитектура и дизайн. Верный ответ A."
    },
    {
      id: "v9-english-15", variant: 9, subject: "english", number: 15, topic: "Аудирование", lang: "en",
      audio: V9EN_AUDIO2,
      question: "What did Maria's company win?",
      options: [
        { letter: "A", text: "a new building" }, { letter: "B", text: "a lottery" },
        { letter: "C", text: "a report" }, { letter: "D", text: "an award" }
      ],
      multi: false, correct: ["D"], userAnswer: ["A"], officialResult: 0, keyConfidence: "derived",
      explanation: "Мария называет свою компанию «award-winning» — то есть удостоенной награды/премии (an award), а известна она именно зданием галереи, которое сама галерея — не «выигрыш», а повод для награды. Верный ответ D."
    },
    {
      id: "v9-english-16", variant: 9, subject: "english", number: 16, topic: "Аудирование", lang: "en",
      audio: V9EN_AUDIO2,
      question: "What is the name of Maria's company?",
      options: [
        { letter: "A", text: "STG" }, { letter: "B", text: "STG Architects Ltd" },
        { letter: "C", text: "Architects Ltd" }, { letter: "D", text: "Galroy Building" }
      ],
      multi: false, correct: ["B"], userAnswer: ["B"], officialResult: 1, keyConfidence: "official",
      explanation: "Полное название компании Марии, названное в записи, — «STG Architects Ltd» (сокращение STG само по себе — неполный ответ). Верный ответ B."
    },

    {
      id: "v9-english-17", variant: 9, subject: "english", number: 17, topic: "Притяжательные местоимения", lang: "en",
      question: "Is this ____ book?",
      options: [
        { letter: "A", text: "ours" }, { letter: "B", text: "yours" },
        { letter: "C", text: "your" }, { letter: "D", text: "hers" }
      ],
      multi: false, correct: ["C"], userAnswer: ["C"], officialResult: 1, keyConfidence: "official",
      explanation: "Перед существительным (book) нужно притяжательное прилагательное your, а не самостоятельное местоимение yours/ours/hers (они заменяют существительное целиком, а не стоят перед ним). Верный ответ C."
    },
    {
      id: "v9-english-18", variant: 9, subject: "english", number: 18, topic: "Предлоги времени", lang: "en",
      question: "I first visited Germany ___ 2012",
      options: [
        { letter: "A", text: "out" }, { letter: "B", text: "in" },
        { letter: "C", text: "on" }, { letter: "D", text: "at" }
      ],
      multi: false, correct: ["B"], userAnswer: ["B"], officialResult: 1, keyConfidence: "official",
      explanation: "С годами используется предлог in (in 2012). Верный ответ B."
    },
    {
      id: "v9-english-19", variant: 9, subject: "english", number: 19, topic: "Времена", lang: "en",
      question: "I work at university now, but before I _______ in laboratory as a specialist of science.",
      options: [
        { letter: "A", text: "has worked" }, { letter: "B", text: "worked" },
        { letter: "C", text: "am working" }, { letter: "D", text: "have been worked" }
      ],
      multi: false, correct: ["B"], userAnswer: ["D"], officialResult: 0, keyConfidence: "derived",
      explanation: "Слово «before» здесь противопоставляет прошлое (уже законченное) настоящему («now»), поэтому нужен простой прошедший результат — worked. Форма «have been worked» грамматически некорректна (пассив с have been + Ved так не строится для этого смысла). Верный ответ B."
    },
    {
      id: "v9-english-20", variant: 9, subject: "english", number: 20, topic: "Времена", lang: "en",
      question: "My friends ___ all summer",
      options: [
        { letter: "A", text: "have travelling" }, { letter: "B", text: "were travel" },
        { letter: "C", text: "are travel" }, { letter: "D", text: "have been travelling" }
      ],
      multi: false, correct: ["D"], userAnswer: ["A"], officialResult: 0, keyConfidence: "derived",
      explanation: "Действие, которое длится весь период («all summer») и продолжается до сих пор, оформляется временем Present Perfect Continuous — have been travelling. Остальные варианты грамматически некорректны. Верный ответ D."
    },
    {
      id: "v9-english-21", variant: 9, subject: "english", number: 21, topic: "Артикли", lang: "en",
      question: "Yesterday I got a letter. ____ letter was from my friend",
      options: [
        { letter: "A", text: "The" }, { letter: "B", text: "A" },
        { letter: "C", text: "An" }, { letter: "D", text: "-" }
      ],
      multi: false, correct: ["A"], userAnswer: ["B"], officialResult: 0, keyConfidence: "derived",
      explanation: "При первом упоминании предмет вводится с неопределённым артиклем (a letter), а при повторном упоминании того же предмета используется определённый артикль — the letter. Верный ответ A."
    },
    {
      id: "v9-english-22", variant: 9, subject: "english", number: 22, topic: "Артикли", lang: "en",
      question: "It's been a month since I quitted my last job. I had much _______ to do and lots of responsibilities.",
      options: [
        { letter: "A", text: "a work" }, { letter: "B", text: "work" },
        { letter: "C", text: "some work" }, { letter: "D", text: "the works" }
      ],
      multi: false, correct: ["B"], userAnswer: ["A"], officialResult: 0, keyConfidence: "derived",
      explanation: "Work в значении «работа/дела» — неисчисляемое существительное, оно не употребляется с неопределённым артиклем (a work — ошибка) и не имеет формы множественного числа в этом значении. После much используется просто work. Верный ответ B."
    },
    {
      id: "v9-english-23", variant: 9, subject: "english", number: 23, topic: "Составные прилагательные", lang: "en",
      question: "He is the longest –___ worker in that factory.",
      options: [
        { letter: "A", text: "serves" }, { letter: "B", text: "to be served" },
        { letter: "C", text: "served" }, { letter: "D", text: "serving" }
      ],
      multi: false, correct: ["D"], userAnswer: ["C"], officialResult: 0, keyConfidence: "derived",
      explanation: "Устойчивое составное прилагательное «longest-serving» (дольше всех работающий/служащий) образуется с причастием настоящего времени (-ing), а не прошедшего. Верный ответ D."
    },
    {
      id: "v9-english-24", variant: 9, subject: "english", number: 24, topic: "Наклонение", lang: "en",
      question: "Which mood is used in the following sentence: \"Say it!\"",
      options: [
        { letter: "A", text: "subjunctive" }, { letter: "B", text: "indicative" },
        { letter: "C", text: "imperative" }, { letter: "D", text: "interrogative" }
      ],
      multi: false, correct: ["C"], userAnswer: ["C"], officialResult: 1, keyConfidence: "official",
      explanation: "«Say it!» — прямой приказ/просьба, то есть повелительное наклонение (imperative). Верный ответ C."
    },
    {
      id: "v9-english-25", variant: 9, subject: "english", number: 25, topic: "Наклонение", lang: "en",
      question: "Define the mood of the sentence: Mozart was born in Salzburg in 1756.",
      options: [
        { letter: "A", text: "Interrogative" }, { letter: "B", text: "Subjunctive" },
        { letter: "C", text: "Imperative" }, { letter: "D", text: "Indicative" }
      ],
      multi: false, correct: ["D"], userAnswer: ["B"], officialResult: 0, keyConfidence: "derived",
      explanation: "Предложение просто утверждает факт («Моцарт родился в Зальцбурге в 1756 году») — это изъявительное наклонение (indicative). Subjunctive используется для гипотез, пожеланий и нереальных условий, а не для констатации факта. Верный ответ D."
    },
    {
      id: "v9-english-26", variant: 9, subject: "english", number: 26, topic: "Наречия", lang: "en",
      question: "I'm worried about Sally. She _____________ eats anything. I think I should talk to her.",
      options: [
        { letter: "A", text: "completely" }, { letter: "B", text: "hardly" },
        { letter: "C", text: "quietly" }, { letter: "D", text: "easily" }
      ],
      multi: false, correct: ["B"], userAnswer: ["D"], officialResult: 0, keyConfidence: "derived",
      explanation: "Беспокойство за Салли логично связано с тем, что она почти ничего не ест — «hardly eats anything» (едва/почти не ест). Верный ответ B."
    },
    {
      id: "v9-english-27", variant: 9, subject: "english", number: 27, topic: "Наклонение", lang: "en",
      question: "One of the sentences is in the subjunctive mood:",
      options: [
        { letter: "A", text: "If only I could rely on people around me." }, { letter: "B", text: "Do you mind closing the door?" },
        { letter: "C", text: "Stop causing problems, please." }, { letter: "D", text: "How many children has Angela got?" }
      ],
      multi: false, correct: ["A"], userAnswer: ["C"], officialResult: 0, keyConfidence: "derived",
      explanation: "«If only I could…» — классическая конструкция сослагательного наклонения (subjunctive), выражающая нереальное желание. B и D — вопросительные предложения, C — повелительное наклонение (imperative), а не subjunctive. Верный ответ A."
    },
    {
      id: "v9-english-28", variant: 9, subject: "english", number: 28, topic: "Предлоги времени", lang: "en",
      question: "They say electricity prices are going up ___ November. Have you heard about it?",
      options: [
        { letter: "A", text: "on" }, { letter: "B", text: "to" },
        { letter: "C", text: "of" }, { letter: "D", text: "in" }
      ],
      multi: false, correct: ["D"], userAnswer: ["D"], officialResult: 1, keyConfidence: "official",
      explanation: "С названиями месяцев используется предлог in (in November). Верный ответ D."
    },
    {
      id: "v9-english-29", variant: 9, subject: "english", number: 29, topic: "Числительные", lang: "en",
      question: "We bought five kilos of apples, then we bought two kilos more, how many kilos of apples do we have now?",
      options: [
        { letter: "A", text: "eight" }, { letter: "B", text: "three" },
        { letter: "C", text: "seven" }, { letter: "D", text: "six" }
      ],
      multi: false, correct: ["C"], userAnswer: ["C"], officialResult: 1, keyConfidence: "official",
      explanation: "5 + 2 = 7 килограммов. Верный ответ C."
    },
    {
      id: "v9-english-30", variant: 9, subject: "english", number: 30, topic: "Предлоги времени", lang: "en",
      question: "They married ___ 2023 ___ 17th of June.",
      options: [
        { letter: "A", text: "on/on" }, { letter: "B", text: "in/in" },
        { letter: "C", text: "on/in" }, { letter: "D", text: "in/on" }
      ],
      multi: false, correct: ["D"], userAnswer: ["D"], officialResult: 1, keyConfidence: "official",
      explanation: "С годом используется in (in 2023), а с конкретной календарной датой — on (on the 17th of June). Верный ответ D."
    },
    {
      id: "v9-english-31", variant: 9, subject: "english", number: 31, topic: "Степени сравнения", lang: "en",
      question: "How is your head? Is it better? No, it's _____.",
      options: [
        { letter: "A", text: "worse" }, { letter: "B", text: "badder" },
        { letter: "C", text: "bader" }, { letter: "D", text: "worst" }
      ],
      multi: false, correct: ["A"], userAnswer: ["A"], officialResult: 1, keyConfidence: "official",
      explanation: "Сравнительная степень от bad — неправильная форма worse (а не badder/bader); worst — превосходная степень, здесь она не подходит по смыслу («хуже», а не «наихудший»). Верный ответ A."
    },
    {
      id: "v9-english-32", variant: 9, subject: "english", number: 32, topic: "Времена", lang: "en",
      question: "At 7 o'clock tomorrow morning, Mary will be in her office. She ___________.",
      options: [
        { letter: "A", text: "is working" }, { letter: "B", text: "would be working" },
        { letter: "C", text: "will be working" }, { letter: "D", text: "works" }
      ],
      multi: false, correct: ["C"], userAnswer: ["C"], officialResult: 1, keyConfidence: "official",
      explanation: "Действие, происходящее в конкретный момент в будущем, выражается будущим длительным временем (Future Continuous) — will be working. Верный ответ C."
    },
    {
      id: "v9-english-33", variant: 9, subject: "english", number: 33, topic: "Времена", lang: "en",
      question: "Look at the sky. It's gone really dark. It ___________ rain.",
      options: [
        { letter: "A", text: "is going to" }, { letter: "B", text: "will be" },
        { letter: "C", text: "will" }, { letter: "D", text: "going" }
      ],
      multi: false, correct: ["A"], userAnswer: ["A"], officialResult: 1, keyConfidence: "official",
      explanation: "Прогноз на основании явной приметы в настоящем (тёмное небо прямо сейчас) выражается конструкцией be going to. Верный ответ A."
    },
    {
      id: "v9-english-34", variant: 9, subject: "english", number: 34, topic: "Порядок наречий", lang: "en",
      question: "Find the sentence with the correct position of adverb:",
      options: [
        { letter: "A", text: "You always have been very kind to me." }, { letter: "B", text: "I cleaned the house and cooked also dinner." },
        { letter: "C", text: "He can never remember his name." }, { letter: "D", text: "The traffic usually isn't as bad as today." }
      ],
      multi: false, correct: ["C"], userAnswer: ["A"], officialResult: 0, keyConfidence: "derived",
      explanation: "Наречия неопределённого времени (always, never и т.п.) ставятся между вспомогательным/модальным глаголом и смысловым глаголом: «He can never remember...» — верный порядок. В A правильно было бы «You have always been…» (always после have, а не перед ним). Верный ответ C."
    },

    {
      id: "v9-english-35", variant: 9, subject: "english", number: 35, topic: "Чтение · The pet store", lang: "en",
      passage: V9EN_PETSTORE,
      question: "Initially George wanted to have a",
      options: [
        { letter: "A", text: "dog" }, { letter: "B", text: "cat" },
        { letter: "C", text: "horse" }, { letter: "D", text: "rabbit" }
      ],
      multi: false, correct: ["C"], userAnswer: ["C"], officialResult: 1, keyConfidence: "official",
      explanation: "По тексту Джордж сначала попросил лошадь, но родители отказали, так как лошади слишком большие. Верный ответ C."
    },
    {
      id: "v9-english-36", variant: 9, subject: "english", number: 36, topic: "Чтение · The pet store", lang: "en",
      passage: V9EN_PETSTORE,
      question: "Animals that live in a tank are",
      options: [
        { letter: "A", text: "dogs and cats" }, { letter: "B", text: "turtles and snakes" },
        { letter: "C", text: "rabbits, guinea pigs" }, { letter: "D", text: "puppies and kittens" }
      ],
      multi: false, correct: ["B"], userAnswer: ["B"], officialResult: 1, keyConfidence: "official",
      explanation: "В тексте описаны два вида «баков» (tanks) — с водой (рыбы, черепахи) и с песком/камнями (змеи, пауки, скорпионы). Черепахи и змеи — оба вида относятся именно к обитателям баков, в отличие от собак/кошек и кроликов/морских свинок, которые живут иначе. Верный ответ B."
    },
    {
      id: "v9-english-37", variant: 9, subject: "english", number: 37, topic: "Чтение · The pet store", lang: "en",
      passage: V9EN_PETSTORE,
      question: "Enormous animal is a",
      options: [
        { letter: "A", text: "turtle" }, { letter: "B", text: "guinea pig" },
        { letter: "C", text: "dog" }, { letter: "D", text: "horse" }
      ],
      multi: false, correct: ["D"], userAnswer: ["B"], officialResult: 0, keyConfidence: "derived",
      explanation: "В тексте прямо сказано, что лошади слишком большие («horses are too big») — именно лошадь называна огромным животным. Морская свинка (guinea pig), наоборот, описана как маленькое животное. Верный ответ D."
    },
    {
      id: "v9-english-38", variant: 9, subject: "english", number: 38, topic: "Чтение · The pet store", lang: "en",
      passage: V9EN_PETSTORE,
      question: "Tanks filled with water are inhabited by",
      options: [
        { letter: "A", text: "snake" }, { letter: "B", text: "cats" },
        { letter: "C", text: "fish" }, { letter: "D", text: "scorpions" }
      ],
      multi: false, correct: ["C"], userAnswer: ["B"], officialResult: 0, keyConfidence: "derived",
      explanation: "По тексту баки с водой населены рыбами и черепахами («The tanks full of water have fish and turtles in them»); змеи и скорпионы живут в баках с песком и камнями, а кошки вообще не живут в баках. Из предложенных вариантов верный — fish. Верный ответ C."
    },
    {
      id: "v9-english-39", variant: 9, subject: "english", number: 39, topic: "Чтение · The pet store", lang: "en",
      passage: V9EN_PETSTORE,
      question: "Finally George chose a turtle",
      options: [
        { letter: "A", text: "after weighing pros and cons of each animal" }, { letter: "B", text: "his parents' advice and recommendation" },
        { letter: "C", text: "getting acquainted with animals" }, { letter: "D", text: "looking at animals at the pet store" }
      ],
      multi: false, correct: ["A"], userAnswer: ["D"], officialResult: 0, keyConfidence: "derived",
      explanation: "По тексту Джордж последовательно рассматривает и взвешивает плюсы и минусы разных животных (собаки/кошки, кролики/морские свинки/мыши, птицы, рыбы/черепахи, змеи/пауки/скорпионы) и лишь затем останавливается на черепахе — то есть после взвешивания всех вариантов, а не просто «разглядывая животных в зоомагазине» (это слишком общее описание всего процесса, а не причина итогового выбора). Верный ответ A."
    },
    {
      id: "v9-english-40", variant: 9, subject: "english", number: 40, topic: "Чтение · The pet store", lang: "en",
      passage: V9EN_PETSTORE,
      question: "Finally, he decided to buy a",
      options: [
        { letter: "A", text: "snake" }, { letter: "B", text: "cat" },
        { letter: "C", text: "turtle" }, { letter: "D", text: "horse" }
      ],
      multi: false, correct: ["C"], userAnswer: ["C"], officialResult: 1, keyConfidence: "official",
      explanation: "В финале текста Джордж решает завести черепаху на день рождения. Верный ответ C."
    },
    {
      id: "v9-english-41", variant: 9, subject: "english", number: 41, topic: "Чтение · The pet store", lang: "en",
      passage: V9EN_PETSTORE,
      question: "Finally he bought a book in order to",
      options: [
        { letter: "A", text: "know better about turtles' care and their types that the shop has" }, { letter: "B", text: "find out the best tank for a turtle" },
        { letter: "C", text: "get acquainted with life of turtles" }, { letter: "D", text: "discover interesting facts about turtles" }
      ],
      multi: false, correct: ["A"], userAnswer: ["A"], officialResult: 1, keyConfidence: "official",
      explanation: "Книга нужна была, чтобы узнать, как ухаживать за черепахой, и какие виды черепах есть в магазине — это точно совпадает с вариантом A. Верный ответ A."
    },
    {
      id: "v9-english-42", variant: 9, subject: "english", number: 42, topic: "Чтение · The pet store", lang: "en",
      passage: V9EN_PETSTORE,
      question: "The text is mainly about George's",
      options: [
        { letter: "A", text: "parrot and canary" }, { letter: "B", text: "baby dogs called puppies" },
        { letter: "C", text: "his favorite animals" }, { letter: "D", text: "choice of birthday gift" }
      ],
      multi: false, correct: ["D"], userAnswer: ["D"], officialResult: 1, keyConfidence: "official",
      explanation: "Весь текст — о том, как Джордж выбирает питомца себе на день рождения. Верный ответ D."
    },

    {
      id: "v9-english-43", variant: 9, subject: "english", number: 43, topic: "Чтение · David Guetta", lang: "en",
      passage: V9EN_GUETTA,
      question: "He trains:",
      options: [
        { letter: "A", text: "after lunch" }, { letter: "B", text: "after dinner" },
        { letter: "C", text: "after breakfast" }, { letter: "D", text: "after work" }
      ],
      multi: false, correct: ["C"], userAnswer: ["C"], officialResult: 1, keyConfidence: "official",
      explanation: "По тексту после завтрака он отвечает на письма, а затем идёт в спортзал — то есть тренируется после завтрака. Верный ответ C."
    },
    {
      id: "v9-english-44", variant: 9, subject: "english", number: 44, topic: "Чтение · David Guetta", lang: "en",
      passage: V9EN_GUETTA,
      question: "He lives in",
      options: [
        { letter: "A", text: "Paris" }, { letter: "B", text: "London" },
        { letter: "C", text: "Edinburgh" }, { letter: "D", text: "Ibiza" }
      ],
      multi: false, correct: ["D"], userAnswer: ["D"], officialResult: 1, keyConfidence: "official",
      explanation: "В тексте прямо сказано, что он живёт на Ибице. Верный ответ D."
    },
    {
      id: "v9-english-45", variant: 9, subject: "english", number: 45, topic: "Чтение · David Guetta", lang: "en",
      passage: V9EN_GUETTA,
      question: "He doesn't listen to music at home because",
      options: [
        { letter: "A", text: "he doesn't have time" }, { letter: "B", text: "he is a musician" },
        { letter: "C", text: "he doesn't like music" }, { letter: "D", text: "he likes sleeping" }
      ],
      multi: false, correct: ["B"], userAnswer: ["B"], officialResult: 1, keyConfidence: "official",
      explanation: "По тексту он не слушает музыку дома и в машине, потому что музыка — это его работа, ведь он профессиональный музыкант/диджей. Верный ответ B."
    },
    {
      id: "v9-english-46", variant: 9, subject: "english", number: 46, topic: "Чтение · David Guetta", lang: "en",
      passage: V9EN_GUETTA,
      question: "He goes to the nightclub because he is",
      options: [
        { letter: "A", text: "secret agent" }, { letter: "B", text: "security guard" },
        { letter: "C", text: "a superstar DJ" }, { letter: "D", text: "club manager" }
      ],
      multi: false, correct: ["C"], userAnswer: ["C"], officialResult: 1, keyConfidence: "official",
      explanation: "Заголовок и весь текст описывают его как звёздного диджея, который выступает в ночном клубе. Верный ответ C."
    },
    {
      id: "v9-english-47", variant: 9, subject: "english", number: 47, topic: "Чтение · David Guetta", lang: "en",
      passage: V9EN_GUETTA,
      question: "He usually spends two hours",
      options: [
        { letter: "A", text: "at home" }, { letter: "B", text: "at a nightclub" },
        { letter: "C", text: "in his studio" }, { letter: "D", text: "in a restaurant" }
      ],
      multi: false, correct: ["C"], userAnswer: ["C"], officialResult: 1, keyConfidence: "official",
      explanation: "По тексту он проводит два-три часа именно в своей студии (студия — до ночного клуба, где он проводит уже четыре часа). Верный ответ C."
    },
    {
      id: "v9-english-48", variant: 9, subject: "english", number: 48, topic: "Чтение · David Guetta", lang: "en",
      passage: V9EN_GUETTA,
      question: "He comes to a club as",
      options: [
        { letter: "A", text: "a security" }, { letter: "B", text: "a manager" },
        { letter: "C", text: "a secret agent" }, { letter: "D", text: "a trainer" }
      ],
      multi: false, correct: ["C"], userAnswer: ["C"], officialResult: 1, keyConfidence: "official",
      explanation: "Он сравнивает свой приход в клуб через чёрный ход с тайным агентом («like a secret agent»). Верный ответ C."
    },
    {
      id: "v9-english-49", variant: 9, subject: "english", number: 49, topic: "Чтение · David Guetta", lang: "en",
      passage: V9EN_GUETTA,
      question: "When he comes home after work he",
      options: [
        { letter: "A", text: "has a cup of tea and cleans his teeth" }, { letter: "B", text: "eats pizza and fruit" },
        { letter: "C", text: "drinks tea and eats eggs" }, { letter: "D", text: "drinks coffee and fruit juice" }
      ],
      multi: false, correct: ["A"], userAnswer: ["A"], officialResult: 1, keyConfidence: "official",
      explanation: "По тексту, вернувшись домой, он пьёт чай и чистит зубы. Верный ответ A."
    },
    {
      id: "v9-english-50", variant: 9, subject: "english", number: 50, topic: "Чтение · David Guetta", lang: "en",
      passage: V9EN_GUETTA,
      question: "His feeling after playing music for four hours",
      options: [
        { letter: "A", text: "he is surprised" }, { letter: "B", text: "he is excited" },
        { letter: "C", text: "he is unhappy" }, { letter: "D", text: "he is sad" }
      ],
      multi: false, correct: ["B"], userAnswer: ["B"], officialResult: 1, keyConfidence: "official",
      explanation: "После четырёх часов игры музыки он описывает себя как очень взволнованного/возбуждённого (very excited). Верный ответ B."
    }
  ]
};
