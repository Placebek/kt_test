window.QUIZ_DATA = window.QUIZ_DATA || {};
/* Вариант 15 · ИТ-тест (нейросети, безопасность, алгоритмы, Excel, логика,
   SQL) — questions/infor-programming (нумерованный блок "Бөлім: Информатика,
   Сұрақ № 1..50" внутри одного из файлов Пробный тест2/3.docx). Одиночный
   выбор A-D, 1 балл за вопрос. Источник — скриншоты с подсвеченным (галочка)
   правильным вариантом, ключ считан прямо с картинок. Объяснения — на
   казахском языке. userAnswer пустой — это не транскрипт чьей-то попытки. */
window.QUIZ_DATA["v15-itbasics"] = {
  key: "v15-itbasics", variant: 15, subject: "itbasics", lang: "kz",
  title: "Вариант 15 · ИТ-тест (сети, безопасность, логика, SQL)",
  questions: [
    {
      id: "v15-itbasics-1", variant: 15, subject: "itbasics", number: 1, topic: "Нейронные сети",
      question: "Нейропакеттерде нейрондық желілерді оқытуды жүзеге асыру алгоритмі",
      options: [
        { letter: "A", text: "генетикалық" }, { letter: "B", text: "сигмоидалық" },
        { letter: "C", text: "стохастикалық" }, { letter: "D", text: "градиенттік" }
      ],
      correct: ["B"], userAnswer: [], keyConfidence: "official",
      explanation: "«Нейропакеттер» атты бағдарламалық ортада нейрондық желілерді оқыту сигмоидалық алгоритммен (B) жүзеге асырылады — сигмоида функциясы активтендіру функциясы ретінде қолданылады."
    },
    {
      id: "v15-itbasics-2", variant: 15, subject: "itbasics", number: 2, topic: "Форматы изображений",
      question: "Түстер тереңдігі, үлкен бейнелерді сақтау үшін қолданылатын танымал форматтардың бірі",
      options: [
        { letter: "A", text: "bmp" }, { letter: "B", text: "gif" },
        { letter: "C", text: "tiff" }, { letter: "D", text: "jpeg" }
      ],
      correct: ["C"], userAnswer: [], keyConfidence: "official",
      explanation: "TIFF (C) — терең түс режимдерін және сапаны жоғалтпайтын сығымдауды қолдайтын, үлкен әрі сапалы бейнелерді сақтауға арналған танымал формат."
    },
    {
      id: "v15-itbasics-3", variant: 15, subject: "itbasics", number: 3, topic: "Кодирование Unicode",
      question: "Unicode халықаралық стандартына сәйкес бір символдың салмағы",
      options: [
        { letter: "A", text: "16 бит" }, { letter: "B", text: "1 бит" },
        { letter: "C", text: "1 байт" }, { letter: "D", text: "8 бит" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "official",
      explanation: "Unicode стандартында әр символ 16 битпен (2 байт) кодталады (A), бұл ASCII-дің 8 битіне (D) қарағанда әлдеқайда көп символды сыйдыруға мүмкіндік береді."
    },
    {
      id: "v15-itbasics-4", variant: 15, subject: "itbasics", number: 4, topic: "Безопасность",
      question: "Ақпарат қолжетімділігінің негізгі қауіптеріне жатады",
      options: [
        { letter: "A", text: "желіге заңсыз қосылу мүмкіндігі" }, { letter: "B", text: "жүйенің істен шығуы" },
        { letter: "C", text: "қосымша хабарлар енгізу" }, { letter: "D", text: "деректерді өзгерту" }
      ],
      correct: ["B"], userAnswer: [], keyConfidence: "official",
      explanation: "Ақпараттың қолжетімділігі (доступность) — қажет кезде оған қол жеткізу мүмкіндігі; бұған ең тікелей қауіп — жүйенің істен шығуы (B), себебі бұл кезде ақпарат мүлдем қолжетімсіз болады. Қалған нұсқалар (A, C, D) құпиялылық пен тұтастыққа қатысты қауіптер."
    },
    {
      id: "v15-itbasics-5", variant: 15, subject: "itbasics", number: 5, topic: "Виды алгоритмов",
      question: "Бір шартты орындау немесе орындамау",
      options: [
        { letter: "A", text: "қайталану алгоритм" }, { letter: "B", text: "тармақталған алгоритм" },
        { letter: "C", text: "циклдық алгоритм" }, { letter: "D", text: "сызықтық алгоритм" }
      ],
      correct: ["B"], userAnswer: [], keyConfidence: "official",
      explanation: "Шартқа байланысты бір әрекетті орындау немесе орындамау — тармақталған алгоритмнің (B) анықтамасы (if/else құрылымы)."
    },
    {
      id: "v15-itbasics-6", variant: 15, subject: "itbasics", number: 6, topic: "Моделирование",
      question: "Нақты объектінің, құбылыстың немесе процестің қарапайым түрде берілуі",
      options: [
        { letter: "A", text: "есеп" }, { letter: "B", text: "функция" },
        { letter: "C", text: "модель" }, { letter: "D", text: "формула" }
      ],
      correct: ["C"], userAnswer: [], keyConfidence: "official",
      explanation: "Нақты объектінің немесе процестің қарапайымдатылған, маңызды қасиеттерін сақтаған бейнесі — модель (C) деп аталады."
    },
    {
      id: "v15-itbasics-7", variant: 15, subject: "itbasics", number: 7, topic: "Python: циклы",
      question: "Циклден шығу үшін көрсетілген команда қай жолда орналасқан",
      questionCode: "def add_number():\n    List = []\n    while True:\n        number = input(\"Enter:\")\n        var = lst.count(5)\n        print(var)\n        if number == \"exit\":\n            break\n        lst.append(int(number))\n    return List()\nadd_number()",
      options: [
        { letter: "A", text: "6" }, { letter: "B", text: "3" },
        { letter: "C", text: "8" }, { letter: "D", text: "12" }
      ],
      correct: ["C"], userAnswer: [], keyConfidence: "official",
      explanation: "break командасы (циклден шығатын команда) кодтың 8-ші жолында орналасқан (C) — жоғарыдағы фрагментте жолдарды санап көрсек, «if number == \"exit\":» шартынан кейінгі жол."
    },
    {
      id: "v15-itbasics-8", variant: 15, subject: "itbasics", number: 8, topic: "Сети",
      question: "Жергілікті және ғаламдық желілер байланысы (суретте VPN арқылы қосылған екі жергілікті желі көрсетілген)",
      options: [
        { letter: "A", text: "жергілікті желілер" }, { letter: "B", text: "арнайы желілік құрылғылар" },
        { letter: "C", text: "пайдаланушылық желі құрылғылары" }, { letter: "D", text: "виртуалды жеке желі" }
      ],
      correct: ["D"], userAnswer: [], keyConfidence: "official",
      explanation: "Суретте жергілікті желілерді ғаламдық желі (интернет) арқылы қауіпсіз байланыстыратын технология — виртуалды жеке желі (D, VPN)."
    },
    {
      id: "v15-itbasics-9", variant: 15, subject: "itbasics", number: 9, topic: "История ЭВМ",
      question: "ENIAC, EDVAC компьютерлері пайда болған буын",
      options: [
        { letter: "A", text: "I" }, { letter: "B", text: "IV" },
        { letter: "C", text: "III" }, { letter: "D", text: "II" }
      ],
      correct: ["D"], userAnswer: [], keyConfidence: "official",
      explanation: "ENIAC пен EDVAC екінші буынға емес, әдетте бірінші буынға жататыны белгілі, дегенмен бұл тапсырмада II буын (D) дұрыс деп белгіленген — ескерту: ENIAC/EDVAC туралы кейбір оқулықтарда электронды шамдардан транзисторға көшу кезеңі II буынға жатқызылады."
    },
    {
      id: "v15-itbasics-10", variant: 15, subject: "itbasics", number: 10, topic: "ПО для графики",
      question: "Фотоларды салуға және өндеуге, логотип жасауға арналған әмбебап қосымша",
      options: [
        { letter: "A", text: "the gimp" }, { letter: "B", text: "smoothdraw" },
        { letter: "C", text: "pixbuilder" }, { letter: "D", text: "nvpaint" }
      ],
      correct: ["C"], userAnswer: [], keyConfidence: "official",
      explanation: "PixBuilder Studio (C) — суреттерді салуға, өңдеуге және логотип жасауға арналған әмбебап графикалық редактор ретінде көрсетілген."
    },
    {
      id: "v15-itbasics-11", variant: 15, subject: "itbasics", number: 11, topic: "Архитектура ЭВМ",
      question: "Процессор бір секундта орындай алатын операциялардың санын есептейді",
      options: [
        { letter: "A", text: "мегагерцпен" }, { letter: "B", text: "килобайтпен" },
        { letter: "C", text: "разрядпен" }, { letter: "D", text: "секундпен" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "official",
      explanation: "Процессордың бір секундта орындай алатын операциялар санын сипаттайтын жиілік мегагерцпен (A, МГц) өлшенеді."
    },
    {
      id: "v15-itbasics-12", variant: 15, subject: "itbasics", number: 12, topic: "Python: рекурсия",
      question: "Программа кодын іске қосқанда экранда пайда болады",
      questionCode: "def fibonacci(n):\n    if n <= 1:\n        return n\n    else:\n        return fibonacci(n-1) + fibonacci(n-2)\n\nresult = fibonacci(4)\nprint(result)",
      options: [
        { letter: "A", text: "2" }, { letter: "B", text: "3" },
        { letter: "C", text: "8" }, { letter: "D", text: "6" }
      ],
      correct: ["B"], userAnswer: [], keyConfidence: "official",
      explanation: "fibonacci(0)=0, fibonacci(1)=1, fibonacci(2)=1, fibonacci(3)=2, fibonacci(4)=fibonacci(3)+fibonacci(2)=2+1=3 (B)."
    },
    {
      id: "v15-itbasics-13", variant: 15, subject: "itbasics", number: 13, topic: "Безопасность",
      question: "Бейнебақылау мен дабыл жүйелері құралдарын қолдану арқылы ақпаратты қорғау шарасы",
      options: [
        { letter: "A", text: "резервтік" }, { letter: "B", text: "ұйымдастырушылық" },
        { letter: "C", text: "программалық" }, { letter: "D", text: "техникалық" }
      ],
      correct: ["D"], userAnswer: [], keyConfidence: "official",
      explanation: "Бейнебақылау камералары мен дабыл жүйелері — физикалық жабдықтар, сондықтан бұл техникалық қорғау шарасына (D) жатады."
    },
    {
      id: "v15-itbasics-14", variant: 15, subject: "itbasics", number: 14, topic: "История информатики",
      question: "Чарльз Бэббидждің алғашқы нұсқасы саналатын программалық басқару машинасы",
      options: [
        { letter: "A", text: "аналитикалық машина" }, { letter: "B", text: "тьюринг машинасы" },
        { letter: "C", text: "пузе машинасы" }, { letter: "D", text: "паскаль дөңгелегі" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "official",
      explanation: "Чарльз Бэббидждің программамен басқарылатын алғашқы машинасы — аналитикалық машина (A)."
    },
    {
      id: "v15-itbasics-15", variant: 15, subject: "itbasics", number: 15, topic: "Веб-технологии: CSS",
      question: "CSS тіліндегі байланысқан (сыртқы) стиль қалай қосылады",
      options: [
        { letter: "A", text: "html құжаттың ішінде орналасқан" }, { letter: "B", text: "style атрибутын қолдану арқылы" },
        { letter: "C", text: "құжат пен link элементтері арқылы" }, { letter: "D", text: "браузер параметрін өзгерту арқылы" }
      ],
      correct: ["C"], userAnswer: [], keyConfidence: "official",
      explanation: "Сыртқы (байланысқан, external) стиль html құжатқа <link> элементі арқылы қосылады (C). Ішкі (A) және инлайн-style (B) — өзге тәсілдер, браузер параметрі (D) стильге қатысы жоқ."
    },
    {
      id: "v15-itbasics-16", variant: 15, subject: "itbasics", number: 16, topic: "Видео: разрешение",
      question: "8K UHD (Ultra High Definition) буынының тіктестігі (ажыратымдылығы)",
      options: [
        { letter: "A", text: "720x576" }, { letter: "B", text: "1920x1080" },
        { letter: "C", text: "1280x720" }, { letter: "D", text: "7680x4320" }
      ],
      correct: ["D"], userAnswer: [], keyConfidence: "official",
      explanation: "8K UHD стандартты ажыратымдылығы — 7680×4320 пиксель (D)."
    },
    {
      id: "v15-itbasics-17", variant: 15, subject: "itbasics", number: 17, topic: "Веб-технологии: каскад CSS",
      question: "HTML құжаттағы мәтіннің түсі",
      questionCode: "<style>\n  html {color: black}\n  body {color: red}\n  p {color: green}\n</style>\n<body>\n  <p style=\"color: blue;\">text</p>\n  <span style=\"color: olive;\">text1</span>\n</body>",
      options: [
        { letter: "A", text: "қызыл" }, { letter: "B", text: "көк" },
        { letter: "C", text: "қара" }, { letter: "D", text: "жасыл" }
      ],
      correct: ["B"], userAnswer: [], keyConfidence: "official",
      explanation: "<p> тегінің ішіндегі инлайн style=\"color: blue\" атрибуты ең жоғары приоритетке ие (селектордың ерекшелігі — specificity — бойынша ол html/body/p ережелерінен басым), сондықтан мәтін көк (B) түсте көрінеді."
    },
    {
      id: "v15-itbasics-18", variant: 15, subject: "itbasics", number: 18, topic: "Веб-технологии: HTML таблицы",
      question: "«rowspan» атрибутының қызметі",
      options: [
        { letter: "A", text: "жол жақтауларының түсін белгілеу" }, { letter: "B", text: "мәтінді горизонталды бағытта туралау" },
        { letter: "C", text: "бірнеше жолды біріктіріп жазуға арналған жолдар саны" }, { letter: "D", text: "бір бағанға біріктірілетін бағандар саны" }
      ],
      correct: ["C"], userAnswer: [], keyConfidence: "official",
      explanation: "rowspan атрибуты кестеде бір ұяшықтың неше ЖОЛды (тік бағыт бойынша) біріктіретінін көрсетеді (C). Бағандарды біріктіру (D) — colspan атрибутының қызметі."
    },
    {
      id: "v15-itbasics-19", variant: 15, subject: "itbasics", number: 19, topic: "Python: циклы",
      question: "Программа нәтижесінде экранға пайда болады",
      questionCode: "for i in range(2):\n    for j in range(2):\n        for k in range(2):\n            print(i, j, k)",
      options: [
        { letter: "A", text: "101 000 100 101 010 000 111 010" }, { letter: "B", text: "110 111 010 001 100 001 000 001" },
        { letter: "C", text: "010 101 011 001 100 111 101 101" }, { letter: "D", text: "000 001 010 011 100 101 110 111" }
      ],
      correct: ["D"], userAnswer: [], keyConfidence: "official",
      explanation: "Үш цикл де 0-ден 1-ге дейін жүреді, барлық комбинация саны 2×2×2=8. Реті бойынша: 000,001,010,011,100,101,110,111 — дәл D нұсқасы (әр таңба тобы i,j,k мәндерін білдіреді)."
    },
    {
      id: "v15-itbasics-20", variant: 15, subject: "itbasics", number: 20, topic: "Единицы измерения",
      question: "1 Кбит/с",
      options: [
        { letter: "A", text: "2¹⁰ Кбит/с" }, { letter: "B", text: "2¹⁰ бит/с" },
        { letter: "C", text: "2¹⁰ байт/с" }, { letter: "D", text: "2¹⁰ Мбит/с" }
      ],
      correct: ["B"], userAnswer: [], keyConfidence: "official",
      explanation: "1 Кбит = 2¹⁰ бит (1024 бит), сондықтан 1 Кбит/с = 2¹⁰ бит/с (B) — компьютерлік өлшем бірліктерінде «кило» префиксі 1000 емес, 1024-ті білдіреді."
    },
    {
      id: "v15-itbasics-21", variant: 15, subject: "itbasics", number: 21, topic: "Базы данных",
      question: "Әртүрлі ақпарат бөліктері түрлі компьютерлерде сақталатын мәліметтер қоры",
      options: [
        { letter: "A", text: "орталықтандырылған" }, { letter: "B", text: "бірегей" },
        { letter: "C", text: "жекешелендірілген" }, { letter: "D", text: "үлестірілген" }
      ],
      correct: ["D"], userAnswer: [], keyConfidence: "official",
      explanation: "Деректері бірнеше түрлі компьютерге бөлініп сақталатын дерекқор — үлестірілген (D, распределённая) дерекқор деп аталады."
    },
    {
      id: "v15-itbasics-22", variant: 15, subject: "itbasics", number: 22, topic: "Python: арифметика",
      question: "a=25, b=50 болғанда, программаның нәтижесі",
      questionCode: "a, b = map(int, input().split(' '))\nt = (a + b) % 10\nprint(t)",
      options: [
        { letter: "A", text: "25" }, { letter: "B", text: "5" },
        { letter: "C", text: "7" }, { letter: "D", text: "50" }
      ],
      correct: ["B"], userAnswer: [], keyConfidence: "official",
      explanation: "(25+50) % 10 = 75 % 10 = 5 (B) — 75-ті 10-ға бөлгендегі қалдық."
    },
    {
      id: "v15-itbasics-23", variant: 15, subject: "itbasics", number: 23, topic: "Python: функции",
      question: "Кіріс мәндері -9, -4, -1 болғанда алынатын нәтиже",
      questionCode: "def F(a, b, c):\n    if a > b and a > c:\n        return a\n    elif b > a and b > c:\n        return b\n    else:\n        return c\n\nx, y, z = map(int, input().split())\nprint(F(x, y, z))",
      options: [
        { letter: "A", text: "-1" }, { letter: "B", text: "-4" },
        { letter: "C", text: "0" }, { letter: "D", text: "-9" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "official",
      explanation: "a=-9,b=-4,c=-1. a>b және a>c? -9>-4 жалған → бірінші шарт жалған. b>a және b>c? -4>-9 ақиқат, бірақ -4>-1 жалған → екінші шарт та жалған. Сондықтан else бөлімі орындалып, c=-1 қайтарылады (A)."
    },
    {
      id: "v15-itbasics-24", variant: 15, subject: "itbasics", number: 24, topic: "Excel: формулы",
      question: "F2 ұяшығына жазылатын, кестедегі X=4, Y=10 мәндері бойынша F=116 нәтижесін беретін формула",
      options: [
        { letter: "A", text: "=((C2^2)+(D2^2))" }, { letter: "B", text: "=((C2^2)+(D2^4))" },
        { letter: "C", text: "=((C2^3)+(D2^3))" }, { letter: "D", text: "=((C1^2)+(D1^2))" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "official",
      explanation: "X²+Y² = 4²+10² = 16+100 = 116, дәл F2 ұяшығындағы нәтижемен сәйкес келеді. Бұл — =((C2^2)+(D2^2)) формуласы (A), мұндағы C2=X=4, D2=Y=10."
    },
    {
      id: "v15-itbasics-25", variant: 15, subject: "itbasics", number: 25, topic: "Логика: схемы",
      question: "F = A∨¬B логикалық өрнегіне сәйкес сызба",
      options: [
        { letter: "A", text: "1-сызба (OR, кірісі A және НЕ-В)" }, { letter: "B", text: "2-сызба" },
        { letter: "C", text: "3-сызба" }, { letter: "D", text: "4-сызба" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "official",
      explanation: "F=A∨¬B өрнегі бір НЕМЕСЕ (OR) элементінен тұрады, оның бір кірісі — A, екінші кірісі — B-нің инверсиясы (НЕ). Дәл осы құрылымға сәйкес келетін сызба — A."
    },
    {
      id: "v15-itbasics-26", variant: 15, subject: "itbasics", number: 26, topic: "Кодирование ASCII",
      question: "ASCII кодтау кестесінде көрінетіндей, әрбір символға сәйкес келетін код неше биттен тұрады",
      options: [
        { letter: "A", text: "он алты" }, { letter: "B", text: "екі" },
        { letter: "C", text: "сегіз" }, { letter: "D", text: "он" }
      ],
      correct: ["C"], userAnswer: [], keyConfidence: "official",
      explanation: "ASCII кестесінде әрбір символ 8 битпен (C, 1 байт) кодталады."
    },
    {
      id: "v15-itbasics-27", variant: 15, subject: "itbasics", number: 27, topic: "Кодирование ASCII",
      question: "ASCII кодтау кестесінің бөліктер саны",
      options: [
        { letter: "A", text: "2" }, { letter: "B", text: "5" },
        { letter: "C", text: "12" }, { letter: "D", text: "7" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "official",
      explanation: "ASCII кестесі екі бөліктен тұрады (A): стандартты (0–127) және кеңейтілген/қосымша (128–255)."
    },
    {
      id: "v15-itbasics-28", variant: 15, subject: "itbasics", number: 28, topic: "Авторское право",
      question: "Авторлық құқық және сыбайлас құқықтар институтының субъектісі",
      options: [
        { letter: "A", text: "ғылым" }, { letter: "B", text: "автор" },
        { letter: "C", text: "әдебиет" }, { letter: "D", text: "өнер туындылары" }
      ],
      correct: ["B"], userAnswer: [], keyConfidence: "official",
      explanation: "Авторлық құқық институтының субъектісі — құқық иесі болатын нақты тұлға, яғни автор (B). Ғылым, әдебиет, өнер туындылары (A, C, D) — құқықтың объектілері, субъектісі емес."
    },
    {
      id: "v15-itbasics-29", variant: 15, subject: "itbasics", number: 29, topic: "Кодирование",
      question: "Ақпаратты екілік кодпен көрсету үшін құрылғыда ток бары көрсететін күй",
      options: [
        { letter: "A", text: "0" }, { letter: "B", text: "2" },
        { letter: "C", text: "1" }, { letter: "D", text: "-1" }
      ],
      correct: ["C"], userAnswer: [], keyConfidence: "official",
      explanation: "Екілік кодтауда ток бар күй — логикалық «1» (C) деп белгіленеді, ток жоқ күй — «0»."
    },
    {
      id: "v15-itbasics-30", variant: 15, subject: "itbasics", number: 30, topic: "Алгоритмы: сортировки",
      question: "[5, 13, 3, 2, 7] тізімі берілген. Көпіршікті сұрыптауда қолданғанда, бірінші өткеннен кейінгі нәтиже",
      options: [
        { letter: "A", text: "[2, 5, 13, 3, 7]" }, { letter: "B", text: "[5, 3, 2, 7, 13]" },
        { letter: "C", text: "[5, 3, 2, 3, 7, 1]" }, { letter: "D", text: "[5, 3, 2, 3, 7, 3]" }
      ],
      correct: ["B"], userAnswer: [], keyConfidence: "official",
      explanation: "Көпіршікті сұрыптаудың бірінші өтуінде көрші элементтер салыстырылып, үлкені соңына қарай «көтеріледі»: 13-тен кейінгі әр кіші элементпен (3,2,7) алмасады, нәтижесінде 13 тізімнің соңына жетеді: [5,3,2,7,13] (B)."
    },
    {
      id: "v15-itbasics-31", variant: 15, subject: "itbasics", number: 31, topic: "Excel: форматирование",
      question: "Ұяшықтағы деректерді оңға, солға, ортаға, енге, жоғары және төмен қарай туралайды",
      options: [
        { letter: "A", text: "защита (қорғау)" }, { letter: "B", text: "выравнивание (теңестіру)" },
        { letter: "C", text: "граница (жиек)" }, { letter: "D", text: "шрифт (қаріп)" }
      ],
      correct: ["B"], userAnswer: [], keyConfidence: "official",
      explanation: "Ұяшық ішіндегі мәтінді әр түрлі бағытта орналастыру — «выравнивание» (B, туралау) қызметінің міндеті."
    },
    {
      id: "v15-itbasics-32", variant: 15, subject: "itbasics", number: 32, topic: "Excel: ссылки",
      question: "C1 ұяшығында жазылған =A1*$B$1+B1 формуласын C2 ұяшығына көшіргенде алынатын мән",
      questionCode: "A1=5   B1=-1   C1=A1*$B$1+B1\nA2=7   B2=3",
      options: [
        { letter: "A", text: "-6" }, { letter: "B", text: "-4" },
        { letter: "C", text: "-1" }, { letter: "D", text: "-2" }
      ],
      correct: ["B"], userAnswer: [], keyConfidence: "official",
      explanation: "C1-ден C2-ге көшіргенде салыстырмалы сілтемелер (A1, соңғы B1) бір жол төмен ауысады (A2, B2), ал абсолютті $B$1 өзгеріссіз қалады: C2=A2*$B$1+B2=7*(-1)+3=-7+3=-4 (B)."
    },
    {
      id: "v15-itbasics-33", variant: 15, subject: "itbasics", number: 33, topic: "Архитектура ЭВМ",
      question: "Процессордың командаларды тізбекпен орындауын қамтамасыз ететін құрылғы",
      options: [
        { letter: "A", text: "басқару құрылғысы" }, { letter: "B", text: "сопроцессор" },
        { letter: "C", text: "арифметикалық-логикалық құрылғы" }, { letter: "D", text: "регистрлер" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "official",
      explanation: "Командалардың дұрыз тізбекпен орындалуын басқарады — басқару құрылғысы (A, устройство управления)."
    },
    {
      id: "v15-itbasics-34", variant: 15, subject: "itbasics", number: 34, topic: "SQL",
      question: "Аты «B» әрпінен басталатын оқушыларды шығару үшін жазылған дұрыс SQL сұранысы",
      options: [
        { letter: "A", text: "", code: "SELECT name\nFROM students\nWHERE name LIKE \"%_%\";" },
        { letter: "B", text: "", code: "SELECT name\nFROM students\nWHERE name LIKE \"_B%\";" },
        { letter: "C", text: "", code: "SELECT name\nFROM students\nWHERE name LIKE \"_%\";" },
        { letter: "D", text: "", code: "SELECT name\nFROM students\nWHERE name LIKE \"B%\";" }
      ],
      correct: ["D"], userAnswer: [], keyConfidence: "official",
      explanation: "«B» әрпінен басталатын аттарды табу үшін LIKE «B%» (D) қолданылады: «B» — бірінші таңба нақты, «%» — одан кейін кез келген саны таңба. «_B%» (B) керісінше «B» алдында бір таңба болуын талап етеді — бұл дұрыс емес."
    },
    {
      id: "v15-itbasics-35", variant: 15, subject: "itbasics", number: 35, topic: "Python: циклы",
      question: "Программа нәтижесінде экранға шығатын үлгі",
      questionCode: "N = 5\nfor i in range(5):\n    for j in range(N):\n        print(i, end=\" \")\n    N -= 1\n    print()",
      options: [
        { letter: "A", text: "", code: "1 1 1 1 1\n2 2 2 2 2\n3 3 3 3 3\n4 4 4 4 4\n5 5 5 5 5" },
        { letter: "B", text: "", code: "1 2 3 4 5\n1 2 3 4 5\n1 2 3 4 5\n1 2 3 4 5\n1 2 3 4 5" },
        { letter: "C", text: "", code: "0 0 0 0 0\n1 1 1 1\n2 2 2\n3 3\n4" }
      ],
      correct: ["C"], userAnswer: [], keyConfidence: "official",
      explanation: "N әр сыртқы қайталанымнан кейін 1-ге кемиді: i=0 кезінде N=5 (5 рет 0), i=1 кезінде N=4 (4 рет 1), i=2 → 3 рет 2, i=3 → 2 рет 3, i=4 → 1 рет 4. Нәтиже — кему ретімен қысқарып отыратын жолдар (C)."
    },
    {
      id: "v15-itbasics-36", variant: 15, subject: "itbasics", number: 36, topic: "Сети",
      question: "«Сервер» ұғымының анықтамасы",
      options: [
        { letter: "A", text: "қабылданған деректерді өңдейтін және өңдеу нәтижелерін пайдаланушыға ұсынатын компьютер" },
        { letter: "B", text: "компьютерлерді байланыс арналарына жалғау үшін қолданылатын жабдық" },
        { letter: "C", text: "деректерді қалтамасыз етеді және деректерге қол жеткізуді ұйымдастыратын компьютер" },
        { letter: "D", text: "деректерді тасымалдау жабдықтарының ақпараттық, сигналдарды тасымалдайтын физикалық орта" }
      ],
      correct: ["C"], userAnswer: [], keyConfidence: "official",
      explanation: "Сервер — желідегі деректерді сақтайды және басқа компьютерлерге (клиенттерге) сол деректерге қол жеткізуді ұйымдастырады (C)."
    },
    {
      id: "v15-itbasics-37", variant: 15, subject: "itbasics", number: 37, topic: "Python: рекурсия",
      question: "Программа орындалу барысында экранға шығады",
      questionCode: "def multiply_list(lst):\n    if len(lst) == 1:\n        return lst[0]\n    else:\n        return lst[0] * multiply_list(lst[1:])\n\nresult = multiply_list([2, 3, 4])\nprint(result)",
      options: [
        { letter: "A", text: "17" }, { letter: "B", text: "24" },
        { letter: "C", text: "30" }, { letter: "D", text: "29" }
      ],
      correct: ["B"], userAnswer: [], keyConfidence: "official",
      explanation: "Функция тізімнің барлық элементтерін көбейтеді: 2*3*4=24 (B)."
    },
    {
      id: "v15-itbasics-38", variant: 15, subject: "itbasics", number: 38, topic: "Логика",
      question: "F = Ā∧B логикалық өрнегінің ақиқат кестесі",
      options: [
        { letter: "A", text: "1, 0, 1, 1" }, { letter: "B", text: "0, 1, 0, 0" },
        { letter: "C", text: "1, 1, 1, 0" }, { letter: "D", text: "0, 0, 1, 1" }
      ],
      correct: ["B"], userAnswer: [], keyConfidence: "official",
      explanation: "F=Ā∧B тек A=0 және B=1 болғанда ғана ақиқат (1): төрт комбинацияда (A,B)=(0,0),(0,1),(1,0),(1,1) сәйкесінше F=0,1,0,0 (B)."
    },
    {
      id: "v15-itbasics-39", variant: 15, subject: "itbasics", number: 39, topic: "Теория информации",
      question: "Хартли теңдеуіндегі (I=K•X) «К» символы",
      options: [
        { letter: "A", text: "ақпарат көлемі" }, { letter: "B", text: "ақпараттағы символ саны" },
        { letter: "C", text: "символдық ақпараттың салмағы" }, { letter: "D", text: "алфавиттің қуаттылығы" }
      ],
      correct: ["B"], userAnswer: [], keyConfidence: "official",
      explanation: "Хартли формуласында I — жалпы ақпарат көлемі, X — бір символдың салмағы (ақпараттық сыйымдылығы), ал К — хабардағы символдар саны (B)."
    },
    {
      id: "v15-itbasics-40", variant: 15, subject: "itbasics", number: 40, topic: "Алгоритмы: сортировки",
      question: "Деректерді өсу немесе кему ретімен орналастыру тәртібі",
      options: [
        { letter: "A", text: "сұрыптау" }, { letter: "B", text: "іздеу" },
        { letter: "C", text: "тазалау" }, { letter: "D", text: "сүзгілеу" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "official",
      explanation: "Деректерді белгілі бір ретпен (өсу/кему) орналастыру — сұрыптау (A)."
    },
    {
      id: "v15-itbasics-41", variant: 15, subject: "itbasics", number: 41, topic: "Логические элементы",
      question: "Логикалық көбейту операциясын орындайтын логикалық элемент",
      options: [
        { letter: "A", text: "инвертор" }, { letter: "B", text: "имплекатор" },
        { letter: "C", text: "конъюнктор" }, { letter: "D", text: "дизъюнктор" }
      ],
      correct: ["C"], userAnswer: [], keyConfidence: "official",
      explanation: "Логикалық көбейту (ЖӘНЕ, AND) операциясын орындайтын элемент — конъюнктор (C)."
    },
    {
      id: "v15-itbasics-42", variant: 15, subject: "itbasics", number: 42, topic: "Логические элементы",
      question: "Бір кіріс және бір шығысы болатын, терістеу операциясын орындайтын логикалық элемент",
      options: [
        { letter: "A", text: "импликация" }, { letter: "B", text: "дизъюнктор" },
        { letter: "C", text: "инвертор" }, { letter: "D", text: "конъюнктор" }
      ],
      correct: ["C"], userAnswer: [], keyConfidence: "official",
      explanation: "Бір кіріс/бір шығысы бар, терістеу (НЕ, NOT) операциясын орындайтын элемент — инвертор (C)."
    },
    {
      id: "v15-itbasics-43", variant: 15, subject: "itbasics", number: 43, topic: "Логика: схемы",
      question: "Сұлбаның логикалық өрнегі (конъюнктор, дизъюнктор, инвертордан құралған)",
      options: [
        { letter: "A", text: "F = (Ā∧B̄)∨B" }, { letter: "B", text: "F = (Ā∨B)∨B" },
        { letter: "C", text: "F = (Ā∧B̄)∧B" }, { letter: "D", text: "F = (Ā∨B̄)∧B" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "official",
      explanation: "Сұлбадағы элементтердің тізбегі (A мен B инверсияланып, конъюнктормен көбейтіліп, содан кейін B-мен дизъюнкцияланады) дәл F=(Ā∧B̄)∨B өрнегіне сәйкес келеді (A)."
    },
    {
      id: "v15-itbasics-44", variant: 15, subject: "itbasics", number: 44, topic: "Логические элементы",
      question: "ANSI стандартына сәйкес логикалық көбейту элементінің белгіленуі",
      options: [
        { letter: "A", text: "тіктөртбұрышты буфер элемент белгісі" }, { letter: "B", text: "үшбұрышты инвертор белгісі" },
        { letter: "C", text: "доғал (AND) пішінді элемент белгісі" }
      ],
      correct: ["C"], userAnswer: [], keyConfidence: "official",
      explanation: "ANSI стандарты бойынша логикалық көбейту (AND) элементі жалпақ, бір жағы жалпы, екінші жағы дөңес (доғал) пішінмен белгіленеді (C)."
    },
    {
      id: "v15-itbasics-45", variant: 15, subject: "itbasics", number: 45, topic: "Логика: выражения",
      question: "Кестеде берілген I, II, III логикалық өрнектердің нәтижесі",
      questionCode: "I:   A=0,B=1  F=(Ā&B)∨(A&B̄)\nII:  A=1,B=1  F=Ā∨(A&B̄)\nIII: A=0,B=1  F=((A∨B)∨(A&B̄))∨B",
      options: [
        { letter: "A", text: "I) 0; II) 0; III) 1" }, { letter: "B", text: "I) 1; II) 1; III) 0" },
        { letter: "C", text: "I) 0; II) 1; III) 0" }, { letter: "D", text: "I) 1; II) 0; III) 1" }
      ],
      correct: ["D"], userAnswer: [], keyConfidence: "official",
      explanation: "Әр өрнекті сәйкес A, B мәндерімен санағанда: I)1, II)0, III)1 — дәл D нұсқасы."
    },
    {
      id: "v15-itbasics-46", variant: 15, subject: "itbasics", number: 46, topic: "Логика",
      question: "ЖӘНЕ жалғауының көмегімен қарапайым екі А және В айтылымдарын бір құрамдасқа біріктіру",
      options: [
        { letter: "A", text: "дизъюнкция" }, { letter: "B", text: "конъюнкция" },
        { letter: "C", text: "импликация" }, { letter: "D", text: "инверсия" }
      ],
      correct: ["B"], userAnswer: [], keyConfidence: "official",
      explanation: "«ЖӘНЕ» жалғауымен екі айтылымды біріктіру — конъюнкция (B) операциясы."
    },
    {
      id: "v15-itbasics-47", variant: 15, subject: "itbasics", number: 47, topic: "Логика",
      question: "Дизъюнкция үшін қолданылатын шартты белгілердің бірі",
      options: [
        { letter: "A", text: "+" }, { letter: "B", text: "*" },
        { letter: "C", text: "^" }, { letter: "D", text: "&" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "official",
      explanation: "Дизъюнкцияны (НЕМЕСЕ, OR) көбіне «+» белгісімен жазады (A) — алгебралық қосуға ұқсас көрнекілік үшін. «*» мен «&» көбіне конъюнкцияны білдіреді."
    },
    {
      id: "v15-itbasics-48", variant: 15, subject: "itbasics", number: 48, topic: "Логика: таблицы истинности",
      question: "Ақиқат кестесіне сәйкес логикалық өрнек (A,B,C,F: 0,0,1,1 / 0,1,0,0 / 1,0,0,1)",
      options: [
        { letter: "A", text: "F = A∨B̄∨C" }, { letter: "B", text: "F = A∨B∨C" },
        { letter: "C", text: "F = A∧B∧C" }, { letter: "D", text: "F = Ā∧B∨C̄" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "official",
      explanation: "Берілген үш жолды тексергенде дәл сәйкес келетін өрнек — F=A∨B̄∨C (A): мысалы A=0,B=0,C=1 болғанда F=0∨1∨1=1 — кестедегі мәнмен сәйкес келеді."
    },
    {
      id: "v15-itbasics-49", variant: 15, subject: "itbasics", number: 49, topic: "Логика: таблицы истинности",
      question: "F = Ā∨(A∧B̄)∧C логикалық өрнегінің ақиқат кестесі",
      options: [
        { letter: "A", text: "1-нұсқа кестесі" }, { letter: "B", text: "2-нұсқа кестесі" },
        { letter: "C", text: "3-нұсқа кестесі" }, { letter: "D", text: "4-нұсқа кестесі" }
      ],
      correct: ["D"], userAnswer: [], keyConfidence: "official",
      explanation: "Өрнекті A, B, C-нің барлық 8 комбинациясы үшін есептегенде алынатын ақиқат кестесі — D нұсқасында көрсетілген кестеге сәйкес келеді."
    },
    {
      id: "v15-itbasics-50", variant: 15, subject: "itbasics", number: 50, topic: "Тестирование ПО",
      question: "Кездейсоқ параметрлермен жасалатын сынақтың бірінші сервиске қолдануға негізделген логика",
      options: [
        { letter: "A", text: "формалды" }, { letter: "B", text: "функционалдық" },
        { letter: "C", text: "ықтималдық" }, { letter: "D", text: "математикалық" }
      ],
      correct: ["C"], userAnswer: [], keyConfidence: "official",
      explanation: "Кездейсоқ параметрлермен сынау — ықтималдық (C, вероятностная) тестілеу логикасына негізделеді: параметрлер кездейсоқ таңдалып, нәтиже статистикалық тұрғыдан бағаланады."
    }
  ]
};
