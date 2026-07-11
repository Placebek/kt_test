window.QUIZ_DATA = window.QUIZ_DATA || {};
/* Вариант 16 · ИТ-тест (веб, безопасность, SQL, Python-файлы, кодирование) —
   questions/infor-programming (оставшиеся нумерованные скриншотами блоки
   вопросов из Пробный тест2/3.docx). Одиночный выбор A-D, 1 балл за вопрос.
   Источник — скриншоты с подсвеченным правильным вариантом. В паре мест
   документ содержит собственную явную сноску-исправление ("Дұрыс жауап — …")
   рядом со скриншотом — она использована как более надёжный источник, чем
   сама подсветка на картинке (обе пометки — из документа, не моя догадка).
   В одном месте (вопрос про HTML style/border) подсветка противоречит
   содержанию самого CSS-правила — там ответ исправлен на основе разбора кода,
   disputed:true, keyConfidence "derived". Объяснения — на казахском языке.
   userAnswer пустой. */
window.QUIZ_DATA["v16-itbasics"] = {
  key: "v16-itbasics", variant: 16, subject: "itbasics", lang: "kz",
  title: "Вариант 16 · ИТ-тест (веб, SQL, файлы Python)",
  questions: [
    {
      id: "v16-itbasics-1", variant: 16, subject: "itbasics", number: 1, topic: "ПО для видео",
      question: "Microsoft стандартты пакетінің құрамына кіретін видео файлдармен жұмыс істеуге арналған программа",
      options: [
        { letter: "A", text: "ВидеоМОНТАЖ" }, { letter: "B", text: "AVS Video Editor" },
        { letter: "C", text: "Windows Movie Maker" }, { letter: "D", text: "Movavi Video Editor" }
      ],
      correct: ["C"], userAnswer: [], keyConfidence: "official",
      explanation: "Windows Movie Maker (C) — Microsoft-тың стандартты пакетіне кіретін, видеомен жұмыс істеуге арналған бағдарлама. Қалғандары — үшінші тарап өнімдері."
    },
    {
      id: "v16-itbasics-2", variant: 16, subject: "itbasics", number: 2, topic: "Веб-технологии: CSS",
      question: "Үлгідегі класс атауы",
      questionCode: "/* style.css */\np .tags {\n    color: white;\n    font-size: 20px;\n}\np #favorite {\n    color: blue;\n    font-size: 24px;\n}",
      options: [
        { letter: "A", text: "tags" }, { letter: "B", text: "p" },
        { letter: "C", text: "favorite" }, { letter: "D", text: "color" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "official",
      explanation: "CSS-те класс селекторы нүктемен «.» басталады: «.tags» — «tags» атты класс (A). «#favorite» — идентификатор (id), «p» — тег селекторы, «color» — қасиет атауы."
    },
    {
      id: "v16-itbasics-3", variant: 16, subject: "itbasics", number: 3, topic: "Логика: схемы",
      question: "Логикалық схемаға сәйкес келетін өрнек (A, B кірістері; OR→NOT→AND→NOT тізбегі)",
      options: [
        { letter: "A", text: "NOT((A AND B) OR NOT B)" }, { letter: "B", text: "(NOT A AND NOT B) OR NOT B" },
        { letter: "C", text: "NOT((A OR B) AND NOT B)" }, { letter: "D", text: "(A OR B) NOT AND NOT NOT B" }
      ],
      correct: ["C"], userAnswer: [], keyConfidence: "official",
      explanation: "Схемадағы элементтер тізбегі — алдымен A мен B-нің дизъюнкциясы (OR), содан кейін B-нің инверсиясымен конъюнкция (AND), соңында жалпы нәтиженің инверсиясы (NOT) — дәл NOT((A OR B) AND NOT B) өрнегіне сәйкес келеді (C)."
    },
    {
      id: "v16-itbasics-4", variant: 16, subject: "itbasics", number: 4, topic: "Компьютерная графика",
      question: "Windows операциялық жүйесінің стандартты программасына кіретін графикалық редактор",
      options: [
        { letter: "A", text: "Paint" }, { letter: "B", text: "Inkscape" },
        { letter: "C", text: "Photoshop" }, { letter: "D", text: "Point" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "official",
      explanation: "Paint (A) — Windows операциялық жүйесінің стандартты жиынтығына кіретін ең қарапайым графикалық редактор."
    },
    {
      id: "v16-itbasics-5", variant: 16, subject: "itbasics", number: 5, topic: "Безопасность",
      question: "Компьютерге жүйеге рұқсатсыз кіруден ақпаратты қорғауға, маңызды компьютерлік жүйелерге қолдау көрсетуге бағытталған шаралар",
      options: [
        { letter: "A", text: "ұйымдастыру" }, { letter: "B", text: "техникалық" },
        { letter: "C", text: "программалық" }, { letter: "D", text: "желілік" }
      ],
      correct: ["C"], userAnswer: [], keyConfidence: "official",
      explanation: "Рұқсатсыз кіруден бағдарламалық құралдармен (парольдер, антивирус, брандмауэр) қорғау — программалық қорғау шарасы (C)."
    },
    {
      id: "v16-itbasics-6", variant: 16, subject: "itbasics", number: 6, topic: "История информатики",
      question: "Әлемдегі алғашқы программалаушы",
      options: [
        { letter: "A", text: "Алан Тьюринг" }, { letter: "B", text: "Ада Лавлейс" },
        { letter: "C", text: "Блез Паскаль" }, { letter: "D", text: "Чарльз Бэббидж" }
      ],
      correct: ["B"], userAnswer: [], keyConfidence: "official",
      explanation: "Ада Лавлейс (B) Бэббидждің аналитикалық машинасына арналған алғашқы алгоритмдерді жазып, әлемдегі бірінші программалаушы деп танылады."
    },
    {
      id: "v16-itbasics-7", variant: 16, subject: "itbasics", number: 7, topic: "Excel: форматирование",
      question: "Мысал бойынша В2:В6 ұяшық диапазонының форматы (баған ішінде түрлі ұзындықтағы түсті жолақтар көрінеді)",
      options: [
        { letter: "A", text: "гистограмма" }, { letter: "B", text: "бірінші және соңғы мәндерді іріктеу ережесі" },
        { letter: "C", text: "ұяшықтар ережесі" }, { letter: "D", text: "таңбалар жиынтығы" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "official",
      explanation: "Ұяшық ішінде мәнге пропорционал ұзындықтағы түсті жолақ көрсету — шартты форматтаудың «гистограмма» түрі (A)."
    },
    {
      id: "v16-itbasics-8", variant: 16, subject: "itbasics", number: 8, topic: "Excel: форматирование",
      question: "Терезенің атауы (тізімде: Больше…, Меньше…, Между…, Равно…, Текст содержит…, Дата…, Повторяющиеся значения…)",
      options: [
        { letter: "A", text: "Бірінші және соңғы мәндерді іріктеу" }, { letter: "B", text: "Ұяшықтарды ерекшелеу ережесі" },
        { letter: "C", text: "Ережелерді басқару" }, { letter: "D", text: "Ереже құру" }
      ],
      correct: ["B"], userAnswer: [], keyConfidence: "official",
      explanation: "«Больше/Меньше/Между/Равно» сияқты шарттар тізімі — «Ұяшықтарды ерекшелеу ережесі» (B, «Правила выделения ячеек») мәзірінің құрамы."
    },
    {
      id: "v16-itbasics-9", variant: 16, subject: "itbasics", number: 9, topic: "Сети",
      question: "Интернеттің иерархиялық жүйесінде бірегей атаулар кеңістігінің белгілі бір аумағы",
      options: [
        { letter: "A", text: "хост" }, { letter: "B", text: "домен" },
        { letter: "C", text: "ipv6" }, { letter: "D", text: "ipv4" }
      ],
      correct: ["B"], userAnswer: [], keyConfidence: "official",
      explanation: "Интернеттің иерархиялық атаулар жүйесінде (DNS) бірегей атаулар кеңістігінің бір аумағы — домен (B)."
    },
    {
      id: "v16-itbasics-10", variant: 16, subject: "itbasics", number: 10, topic: "Архитектура ЭВМ",
      question: "Командалар мен процессорда өнделген ақпараттарды сақтайды және процессор ішінде орналасқан жад ұяшығы",
      options: [
        { letter: "A", text: "процессор интерфейсі" }, { letter: "B", text: "регистрлер" },
        { letter: "C", text: "басқару құрылғысы" }, { letter: "D", text: "жүйелік шина" }
      ],
      correct: ["B"], userAnswer: [], keyConfidence: "official",
      explanation: "Процессордың ішінде орналасқан, өнделіп жатқан деректер мен командаларды уақытша сақтайтын жад ұяшықтары — регистрлер (B)."
    },
    {
      id: "v16-itbasics-11", variant: 16, subject: "itbasics", number: 11, topic: "История ЭВМ",
      question: "1946–1954 жылдар арасында қолданылған компьютерлер буыны",
      options: [
        { letter: "A", text: "I" }, { letter: "B", text: "IV" },
        { letter: "C", text: "III" }, { letter: "D", text: "V" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "official",
      explanation: "1946–1954 жылдар аралығы — электронды шамдарға негізделген компьютерлердің бірінші буыны (A, электронные лампы)."
    },
    {
      id: "v16-itbasics-12", variant: 16, subject: "itbasics", number: 12, topic: "Python: циклы",
      question: "Белгілі бір қойылған шарт орындалуымен ағымдағы цикл жұмысын бірден тоқтатып, программа жұмысын циклден шығарып, әрі қарай жалғастыратын цикл нұсқаулығы",
      options: [
        { letter: "A", text: "next" }, { letter: "B", text: "case" },
        { letter: "C", text: "break" }, { letter: "D", text: "continue" }
      ],
      correct: ["C"], userAnswer: [], keyConfidence: "official",
      explanation: "Циклді толығымен тоқтатып, одан шығатын нұсқаулық — break (C). continue (D) тек ағымдағы қайталанымды өткізіп жібереді, циклден шықпайды."
    },
    {
      id: "v16-itbasics-13", variant: 16, subject: "itbasics", number: 13, topic: "Архитектура ЭВМ",
      question: "Процессор бір секундта орындай алатын операциялардың санын есептейді",
      options: [
        { letter: "A", text: "секундпен" }, { letter: "B", text: "килобитпен" },
        { letter: "C", text: "разрядпен" }, { letter: "D", text: "мегагерцпен" }
      ],
      correct: ["D"], userAnswer: [], keyConfidence: "official",
      explanation: "Процессордың операциялар жиілігі мегагерцпен (D, МГц) өлшенеді."
    },
    {
      id: "v16-itbasics-14", variant: 16, subject: "itbasics", number: 14, topic: "Компьютерная графика",
      question: "Photo-Brush графикалық редакторда сурет салу және өңдеу құралдары",
      options: [
        { letter: "A", text: "негізгі құралдар, суретті өңдеу құралдары, әсерлер, ерекшелеу тақтасы" },
        { letter: "B", text: "суреттер салу, редакциялау, құралдар тақтасы, командалар тақтасы" },
        { letter: "C", text: "басқару элементтері, мәзір қатары, біріктіру панелі, жылжыту жолақтары" },
        { letter: "D", text: "түстер палитрасы, тақырып атауы, жұмыс алаңы, қалып күй-жолағы" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "official",
      explanation: "Photo-Brush редакторының негізгі құрал топтары — негізгі құралдар, суретті өңдеу құралдары, әсерлер (эффекттер) және ерекшелеу тақтасы (A)."
    },
    {
      id: "v16-itbasics-15", variant: 16, subject: "itbasics", number: 15, topic: "Python: списки",
      question: "Программа нәтижесі",
      questionCode: "s = 1\nnumbers = []\nfor i in range(1, 15, 2):\n    numbers.append(i)\nprint(numbers[-2])",
      options: [
        { letter: "A", text: "11" }, { letter: "B", text: "9" },
        { letter: "C", text: "13" }, { letter: "D", text: "15" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "official",
      explanation: "range(1,15,2) — 1,3,5,7,9,11,13 (7 элемент). numbers[-2] — соңынан екінші элемент, яғни 11 (A)."
    },
    {
      id: "v16-itbasics-16", variant: 16, subject: "itbasics", number: 16, topic: "SQL",
      question: "WHERE ұсынысының міндеті",
      options: [
        { letter: "A", text: "select ұсынысында көрсетілген өрістері бар кестені жою" },
        { letter: "B", text: "нәтижелерді сұрыптауды орындау" },
        { letter: "C", text: "қажетті деректерден тұратын өрістер құру" },
        { letter: "D", text: "өрістерді іріктеу шарттарына сай сүзіп, соған сәйкес жазбаларды шығару" }
      ],
      correct: ["D"], userAnswer: [], keyConfidence: "official",
      explanation: "WHERE ұсынысы көрсетілген шартқа сай келетін жазбаларды ғана іріктеп шығарады (D). Кестені жою (A) — DROP, сұрыптау (B) — ORDER BY, өріс құру (C) — SELECT-тің өз міндеті."
    },
    {
      id: "v16-itbasics-17", variant: 16, subject: "itbasics", number: 17, topic: "Логика: таблицы истинности",
      question: "Ақиқат кестесіне сәйкес логикалық өрнек",
      questionCode: "A B C  Ā  B∧C  F\n0 0 0  1   0   1\n0 0 1  1   0   1\n0 1 0  1   0   1\n0 1 1  1   1   1\n1 0 0  0   0   0\n1 0 1  0   0   0\n1 1 0  0   0   0\n1 1 1  0   1   1",
      options: [
        { letter: "A", text: "F = A∧B∧C" }, { letter: "B", text: "F = Ā∨(B∧C)" },
        { letter: "C", text: "F = Ā∧B∧C" }, { letter: "D", text: "F = A∨(B∧C)" }
      ],
      correct: ["B"], userAnswer: [], keyConfidence: "official",
      explanation: "Кестеде A=0 болатын барлық жолдарда F=1, ал A=1 болғанда F тек B∧C=1 кезінде ғана 1 — бұл дәл F=Ā∨(B∧C) өрнегінің (B) мінез-құлқы."
    },
    {
      id: "v16-itbasics-18", variant: 16, subject: "itbasics", number: 18, topic: "Нейронные сети",
      question: "Нейропакеттерде нейрондық желілерді оқытуды жүзеге асыру алгоритмі",
      options: [
        { letter: "A", text: "стохастикалық" }, { letter: "B", text: "генетикалық" },
        { letter: "C", text: "градиенттік" }, { letter: "D", text: "сигмоидалық" }
      ],
      correct: ["D"], userAnswer: [], keyConfidence: "official",
      explanation: "«Нейропакеттер» ортасында оқыту сигмоидалық (D) алгоритммен жүзеге асырылады."
    },
    {
      id: "v16-itbasics-19", variant: 16, subject: "itbasics", number: 19, topic: "Python: условия",
      question: "Оқушының жинақтық бағалаудан алған дұрыс баллын шығаратын программа коды: ball engiz 10 → нәтижесі 5; ball engiz 7 → нәтижесі 4; ball engiz 5 → нәтижесі 3",
      options: [
        { letter: "A", text: "", code: "k = int(input(\"ball engiz\"))\nif k == 14 or k == 8:\n    print(\"5\")\nelif k == 65 or k == 11:\n    print(\"4\")\nelif k == 0 or k == 13:\n    print(\"0\")\nelse:\n    print(\"1\")" },
        { letter: "B", text: "", code: "k = int(input(\"ball engiz\"))\nif k == 12 or k == 8:\n    print(\"5\")\nelif k == 85 or k == 11:\n    print(\"4\")\nelif k == 16 or k == 13:\n    print(\"0\")\nelse:\n    print(\"1\")" },
        { letter: "C", text: "", code: "k = int(input(\"ball engiz\"))\nif k == 12 or k == 8:\n    print(\"5\")\nelif k == 85 or k == 7:\n    print(\"4\")\nelif k == 16 or k == 5:\n    print(\"1\")\nelse:\n    print(\"3\")" },
        { letter: "D", text: "", code: "k = int(input(\"ball engiz\"))\nif k == 10 or k == 9:\n    print(\"5\")\nelif k == 8 or k == 7:\n    print(\"4\")\nelif k == 6 or k == 5:\n    print(\"3\")\nelse:\n    print(\"2\")" }
      ],
      correct: ["D"], userAnswer: [], keyConfidence: "official",
      explanation: "Нұсқа D барлық үш талапты дәл орындайды: k=10 → «5» (10==10 шарты), k=7 → «4» (7==7 шарты), k=5 → «3» (5==5 шарты). Қалған нұсқаларда шарттардағы сандар мақсатты нәтижеге сәйкес келмейді."
    },
    {
      id: "v16-itbasics-20", variant: 16, subject: "itbasics", number: 20, topic: "SQL",
      question: "«Students» кестесіне жаңа ақпарат қосу үшін жазылған дұрыс өрнек",
      options: [
        { letter: "A", text: "", code: "UPDATE STUDENTS(FIRST_NAME, LAST_NAME, BIRTH_DAY, HOBBY)\nVALUES ('Ali', 'Marat', '20051214', 'singing')" },
        { letter: "B", text: "", code: "ADD STUDENTS(FIRST_NAME, LAST_NAME, BIRTH_DAY, HOBBY)\nVALUES ('Ali', 'Marat', '20051214', 'singing')" },
        { letter: "C", text: "", code: "INSERT INTO STUDENTS(FIRST_NAME, LAST_NAME, BIRTH_DAY, HOBBY)\nVALUES ('Ali', 'Marat', '20051214', 'singing')" },
        { letter: "D", text: "", code: "SELECT STUDENTS(FIRST_NAME, LAST_NAME, BIRTH_DAY, HOBBY)\nVALUES ('Ali', 'Marat', '20051214', 'singing')" }
      ],
      correct: ["C"], userAnswer: [], keyConfidence: "official",
      explanation: "Кестеге жаңа жазба қосу үшін SQL-де INSERT INTO командасы қолданылады (C). UPDATE — өзгерту, SELECT — таңдау үшін, «ADD» — SQL-де мұндай синтаксис жоқ."
    },
    {
      id: "v16-itbasics-21", variant: 16, subject: "itbasics", number: 21, topic: "Веб-технологии: CSS", disputed: true,
      disputedNote: "Скриншотта белгіленген «дұрыс» жауап («мәтін кегелі 10, жиек түсі жасыл») border:10px мәнін қаріп өлшемі (кегель) деп қате түсіндіреді. Іс жүзінде border:10px solid green — 10px қалыңдықтағы жасыл жиек, қаріп өлшеміне қатысы жоқ. Сондықтан дұрысы — В.",
      question: "Берілген HTML тегтерінде мәтін түсі: <p style=\"color: blue; border: 10px solid green\">Hello world</p>",
      options: [
        { letter: "A", text: "көк түсті мәтін, жанында өлшемі 10, жасыл жиекті сурет берілген" },
        { letter: "B", text: "мәтін түсі көк, жасыл түспен салынған жиек қалыңдығы 10 (пиксель)" },
        { letter: "C", text: "мәтін түсі көк, мәтін кегелі 10, жиек түсі жасыл" },
        { letter: "D", text: "бірінші абзац мәтін түсі көк, екінші абзац 10 кегелді гиперсілтемелер" }
      ],
      correct: ["B"], userAnswer: [], keyConfidence: "derived",
      explanation: "color: blue — мәтін түсі көк. border: 10px solid green — 10 пиксель қалыңдықтағы, тұтас сызылған, жасыл түсті жиек. border қасиеті қаріп өлшеміне (кегель, font-size) ешқандай қатысы жоқ, сондықтан дәл сипаттама — В нұсқасы."
    },
    {
      id: "v16-itbasics-22", variant: 16, subject: "itbasics", number: 22, topic: "Веб-технологии: HTML",
      question: "HTML құжатта пайдаланылған аттрибуттар саны",
      questionCode: "<html>\n<head></head>\n<body>\n<div><img src=\"myphoto.jpg\"></div>\n<div><h1>This is web site about myself</h1><a href=\"mysite.com\">Click here</a></div>\n</body>\n</html>",
      options: [
        { letter: "A", text: "1" }, { letter: "B", text: "2" },
        { letter: "C", text: "4" }, { letter: "D", text: "0" }
      ],
      correct: ["B"], userAnswer: [], keyConfidence: "official",
      explanation: "Құжатта екі атрибут бар: <img> тегіндегі src=«myphoto.jpg» және <a> тегіндегі href=«mysite.com» (B). Басқа тегтерде (html, head, body, div, h1) атрибут көрсетілмеген."
    },
    {
      id: "v16-itbasics-23", variant: 16, subject: "itbasics", number: 23, topic: "SQL",
      question: "«students» кестесіндегі мәліметтерді жаңарту үшін жазылған дұрыс SQL өрнек",
      options: [
        { letter: "A", text: "", code: "ADD students\nPUT age = 23, grade = 90\nWHERE name = \"Damir\";" },
        { letter: "B", text: "", code: "SELECT students\nINTO age = 23, grade = 90\nWHERE name = \"Damir\";" },
        { letter: "C", text: "", code: "INSERT students\nIN age = 23, grade = 90\nWHERE name = \"Damir\";" },
        { letter: "D", text: "", code: "UPDATE students\nSET age = 23, grade = 90\nWHERE name = \"Damir\";" }
      ],
      correct: ["D"], userAnswer: [], keyConfidence: "official",
      explanation: "Кестедегі бар жазбаны жаңарту үшін SQL-де UPDATE … SET … WHERE … синтаксисі қолданылады (D)."
    },
    {
      id: "v16-itbasics-24", variant: 16, subject: "itbasics", number: 24, topic: "Кодирование",
      question: "Екілік кодта қолданылатын цифрлар",
      options: [
        { letter: "A", text: "2, 8" }, { letter: "B", text: "0, 1" },
        { letter: "C", text: "1, 2" }, { letter: "D", text: "2, 8, 10" }
      ],
      correct: ["B"], userAnswer: [], keyConfidence: "official",
      explanation: "Екілік (2-лік) санау жүйесінде тек екі цифр қолданылады: 0 және 1 (B)."
    },
    {
      id: "v16-itbasics-25", variant: 16, subject: "itbasics", number: 25, topic: "Кодирование",
      question: "ASCII кодтар кестесіне сәйкес «system» сөзінің компьютер жадындағы көлемі",
      options: [
        { letter: "A", text: "12 бит" }, { letter: "B", text: "6 байт" },
        { letter: "C", text: "6 бит" }, { letter: "D", text: "12 байт" }
      ],
      correct: ["B"], userAnswer: [], keyConfidence: "official",
      explanation: "«system» сөзінде 6 әріп бар, ASCII-де әр символ 1 байт алады, сондықтан жалпы көлемі 6 байт (B)."
    },
    {
      id: "v16-itbasics-26", variant: 16, subject: "itbasics", number: 26, topic: "Сети: кабели",
      question: "Кабельдің бұл түрі есулі қосақталған кабельдерге қарағанда әртүрлі кедергіге төзімді, екі өткізгіштен тұрады",
      options: [
        { letter: "A", text: "коаксиалды" }, { letter: "B", text: "оптикалық талшық" },
        { letter: "C", text: "есулі қосақталған" }, { letter: "D", text: "кабельдік арналар" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "official",
      explanation: "Орталық өткізгіш пен оны қоршаған қалқанды екінші өткізгіштен тұратын, кедергіге төзімді кабель түрі — коаксиалды кабель (A)."
    },
    {
      id: "v16-itbasics-27", variant: 16, subject: "itbasics", number: 27, topic: "Единицы измерения",
      question: "Ақпараттың байт өлшем бірлігінен бит өлшем бірлігіне айналдыратын математикалық амал",
      options: [
        { letter: "A", text: "бөлу" }, { letter: "B", text: "қосу" },
        { letter: "C", text: "азайту" }, { letter: "D", text: "көбейту" }
      ],
      correct: ["D"], userAnswer: [], keyConfidence: "official",
      explanation: "1 байт = 8 бит, сондықтан байтты битке айналдыру үшін 8-ге көбейту (D) керек."
    },
    {
      id: "v16-itbasics-28", variant: 16, subject: "itbasics", number: 28, topic: "Безопасность",
      question: "Бейнебақылау мен дабыл жүйелері құралдарын қолдану арқылы ақпаратты қорғау шарасы",
      options: [
        { letter: "A", text: "техникалық" }, { letter: "B", text: "ұйымдастырушылық" },
        { letter: "C", text: "программалық" }, { letter: "D", text: "резервтік" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "official",
      explanation: "Бейнебақылау камералары мен дабыл жүйелері физикалық жабдықтар болғандықтан, бұл техникалық қорғау шарасына (A) жатады."
    },
    {
      id: "v16-itbasics-29", variant: 16, subject: "itbasics", number: 29, topic: "Excel: фильтры",
      question: "Белгілі бір шартқа немесе шарттар жиынына сәйкес келетін жазбалардың таңдауы",
      options: [
        { letter: "A", text: "сүзгі" }, { letter: "B", text: "функция" },
        { letter: "C", text: "есеп" }, { letter: "D", text: "форма" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "official",
      explanation: "Шартқа сай жазбаларды таңдау — сүзгінің (A, фильтр) анықтамасы."
    },
    {
      id: "v16-itbasics-30", variant: 16, subject: "itbasics", number: 30, topic: "Сети: технологии",
      question: "Алыс қашықтықтағы сымсыз байланыс орнатады, ал іс жүзінде 10 км аумақты қамтиды",
      options: [
        { letter: "A", text: "wimax" }, { letter: "B", text: "wimax және wi-fi" },
        { letter: "C", text: "wi-fi" }, { letter: "D", text: "bluetooth" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "official",
      explanation: "WiMAX (A) — алыс қашықтыққа (қала ауқымына дейін) сымсыз байланыс орнататын технология, ал Wi-Fi мен Bluetooth әлдеқайда қысқа қашықтыққа арналған."
    },
    {
      id: "v16-itbasics-31", variant: 16, subject: "itbasics", number: 31, topic: "Python: рекурсия",
      question: "Программа кодын іске қосқанда экранда пайда болады",
      questionCode: "def fibonacci(n):\n    if n <= 1:\n        return n\n    else:\n        return fibonacci(n-1) + fibonacci(n-2)\n\nresult = fibonacci(4)\nprint(result)",
      options: [
        { letter: "A", text: "3" }, { letter: "B", text: "2" },
        { letter: "C", text: "6" }, { letter: "D", text: "8" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "official",
      explanation: "fibonacci(4)=fibonacci(3)+fibonacci(2)=2+1=3 (A)."
    },
    {
      id: "v16-itbasics-32", variant: 16, subject: "itbasics", number: 32, topic: "Python: арифметика",
      question: "a=25, b=50 болғанда, программаның нәтижесі",
      questionCode: "a, b = map(int, input().split(' '))\nt = (a + b) % 10\nprint(t)",
      options: [
        { letter: "A", text: "7" }, { letter: "B", text: "5" },
        { letter: "C", text: "25" }, { letter: "D", text: "50" }
      ],
      correct: ["B"], userAnswer: [], keyConfidence: "official",
      explanation: "(25+50)%10 = 75%10 = 5 (B)."
    },
    {
      id: "v16-itbasics-33", variant: 16, subject: "itbasics", number: 33, topic: "Python: функции",
      question: "Кіріс мәндері -9, -4, -1 болғанда алынатын нәтиже",
      questionCode: "def F(a, b, c):\n    if a > b and a > c:\n        return a\n    elif b > a and b > c:\n        return b\n    else:\n        return c\n\nx, y, z = map(int, input().split())\nprint(F(x, y, z))",
      options: [
        { letter: "A", text: "-1" }, { letter: "B", text: "-9" },
        { letter: "C", text: "0" }, { letter: "D", text: "-4" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "official",
      explanation: "a=-9,b=-4,c=-1: бірінші де, екінші де шарт орындалмайды (-9 ешбір мәннен үлкен емес; -4>-9 рас, бірақ -4>-1 жалған), сондықтан else арқылы c=-1 қайтарылады (A)."
    },
    {
      id: "v16-itbasics-34", variant: 16, subject: "itbasics", number: 34, topic: "Python: строки",
      question: "Программаның нәтижесі",
      questionCode: "s1 = \"Hello world\"\nprint(s1.islower())",
      options: [
        { letter: "A", text: "False" }, { letter: "B", text: "10" },
        { letter: "C", text: "True" }, { letter: "D", text: "11" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "official",
      explanation: "«Hello world» жолында бас әріп «H» бар, ал islower() барлық әріптер шағын болғанда ғана True қайтарады, сондықтан нәтиже — False (A)."
    },
    {
      id: "v16-itbasics-35", variant: 16, subject: "itbasics", number: 35, topic: "Python: строки",
      question: "Жолдың тек әріптерден тұратынын тексеретін әдіс",
      options: [
        { letter: "A", text: "isalpha()" }, { letter: "B", text: "isupper()" },
        { letter: "C", text: "islower()" }, { letter: "D", text: "isdigit()" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "official",
      explanation: "Жолдың тек әріптерден тұратынын тексеретін әдіс — isalpha() (A). isupper()/islower() әріптің регистрін, isdigit() тек сандардан тұруын тексереді."
    },
    {
      id: "v16-itbasics-36", variant: 16, subject: "itbasics", number: 36, topic: "Python: строки",
      question: "ASCII код символын анықтау әдісі",
      options: [
        { letter: "A", text: "str()" }, { letter: "B", text: "ord()" },
        { letter: "C", text: "chr()" }, { letter: "D", text: "code()" }
      ],
      correct: ["B"], userAnswer: [], keyConfidence: "official",
      explanation: "ord(символ) — символдың ASCII (немесе Unicode) кодын қайтарады (B) — бұл құжатта да «Дұрыс жауап — ord()» деп нақты көрсетілген. chr(код) — керісінше, кодтан символ шығарады; str() кез келген мәнді жолға айналдырады; code() Python-да стандартты функция емес."
    },
    {
      id: "v16-itbasics-37", variant: 16, subject: "itbasics", number: 37, topic: "Python: строки",
      question: "Екі жол үшін қосу амалы",
      options: [
        { letter: "A", text: "индексация" }, { letter: "B", text: "декремент" },
        { letter: "C", text: "инкремент" }, { letter: "D", text: "конкатенация" }
      ],
      correct: ["D"], userAnswer: [], keyConfidence: "official",
      explanation: "Екі жолды біріктіру («қосу») амалы — конкатенация (D)."
    },
    {
      id: "v16-itbasics-38", variant: 16, subject: "itbasics", number: 38, topic: "Python: строки",
      question: "Программаның орындалу нәтижесінде анықталған мән",
      questionCode: "my_text = 'String'\nArr = []\ncounter = 0\nfor i in range(len(my_text)):\n    Arr.append(ord(my_text[i]))\nfor i in range(len(Arr)):\n    counter += Arr[i]\nprint(counter)",
      options: [
        { letter: "A", text: "жолдың құрамындағы символдардың ASCII кодтау жүйесіне сәйкес реттік нөмерлерінің қосындысы" },
        { letter: "B", text: "жолдың құрамындағы символдардың ASCII кодтау жүйесіне сәйкес реттік нөмерлерінің цифрларының қосындысы" },
        { letter: "C", text: "жолдың құрамындағы символдардың ASCII кодтау жүйесіне сәйкес жоғарғы реттік номерге сәйкес санның квадраты" },
        { letter: "D", text: "жолдың құрамындағы символдар санының қосындысының факториалы" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "official",
      explanation: "Код алдымен әр символдың ASCII кодын Arr тізіміне жинайды, содан кейін осы кодтардың барлығын қосады — яғни counter symbol-дардың ASCII кодтарының қосындысы (A)."
    },
    {
      id: "v16-itbasics-39", variant: 16, subject: "itbasics", number: 39, topic: "Python: файлы",
      question: "Берілген кодта қолданылған h.close() жолының қызметі",
      options: [
        { letter: "A", text: "input.txt, output.txt файлдарын ашу" }, { letter: "B", text: "f, n, s, h, a, t айнымалыларын анықтау" },
        { letter: "C", text: "жолды бөліктерге бөлу" }, { letter: "D", text: "файлды жабу" }
      ],
      correct: ["D"], userAnswer: [], keyConfidence: "official",
      explanation: "h.close() — файлмен жұмысты аяқтап, оны жабу үшін қолданылады, жүйе ресурстарын босатады (D) — бұл құжатта да «Дұрыс жауап — файлды жабу» деп нақты көрсетілген."
    },
    {
      id: "v16-itbasics-40", variant: 16, subject: "itbasics", number: 40, topic: "Python: файлы",
      question: "Берілген кодтағы <r,w> параметрінің мағынасы",
      options: [
        { letter: "A", text: "оқу, жаңа файлға жазу" }, { letter: "B", text: "файл атауы" },
        { letter: "C", text: "айнымалы" }, { letter: "D", text: "нәтижені шығару" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "official",
      explanation: "open() функциясында «r» режимі — оқу (read), «w» режимі — жаңа файлға жазу (write) режимін білдіреді (A)."
    },
    {
      id: "v16-itbasics-41", variant: 16, subject: "itbasics", number: 41, topic: "Python: файлы",
      question: "Берілген кодта t=f.readline().split() қолданылған мақсаты",
      options: [
        { letter: "A", text: "мәтін файлынан бір жолды оқып, жолды бос орындар бойынша өшіреді" },
        { letter: "B", text: "мәтін файлынан бір жолды оқып, жолды бос орындар бойынша бөліп құрастырады" },
        { letter: "C", text: "мәтін файлынан бір жолды оқып, жолды жаңа жолдан жазады" },
        { letter: "D", text: "мәтін файлынан бір жолды басқа жолмен алмастырады, жолды бос орындар бойынша бөліп құрастырады" }
      ],
      correct: ["B"], userAnswer: [], keyConfidence: "official",
      explanation: "readline() файлдан бір жолды оқиды, ал split() сол жолды бос орындар бойынша бөлшектерге бөліп, тізім етіп құрастырады (B)."
    },
    {
      id: "v16-itbasics-42", variant: 16, subject: "itbasics", number: 42, topic: "Python: файлы",
      question: "Кіру файлынан бос орынмен ажыратылған екі қатар тұрған сандарды оқу үшін қолданылатын функция/әдіс",
      options: [
        { letter: "A", text: "map, read" }, { letter: "B", text: "map(), split()" },
        { letter: "C", text: "close(), split()" }, { letter: "D", text: "read, write" }
      ],
      correct: ["B"], userAnswer: [], keyConfidence: "official",
      explanation: "Жолды бос орын бойынша бөлу үшін split(), ал бөлінген жолдарды сандарға айналдыру үшін map() қолданылады (B)."
    },
    {
      id: "v16-itbasics-43", variant: 16, subject: "itbasics", number: 43, topic: "Python: файлы",
      question: "Нәтижелерді жеке-жеке қатарға жазуда қолданатын әдіс",
      options: [
        { letter: "A", text: "'\\n'" }, { letter: "B", text: "close()" },
        { letter: "C", text: "map()" }, { letter: "D", text: "split()" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "official",
      explanation: "«\\n» — жаңа жол таңбасы, оны әр нәтиженің соңына қосу арқылы нәтижелер жеке-жеке қатарларға жазылады (A)."
    }
  ]
};
