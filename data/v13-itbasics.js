window.QUIZ_DATA = window.QUIZ_DATA || {};
/* Вариант 13 · ИТ-тест (базы данных, Excel, Python, системы счисления) —
   questions/infor-programming/7 ТЕСТ.doc. Одиночный выбор A-D, 1 балл за
   вопрос (multi не задан => одиночный выбор по умолчанию). Источник — экспорт
   вопросного банка Google Forms; исходное выделение "правильного" варианта
   (жирный шрифт/цвет) не сохранилось при конвертации .doc → .pdf → текст,
   поэтому все ответы определены заново по предметным знаниям (БД, Excel,
   Python, системы счисления) — keyConfidence везде "derived". Несколько
   вопросов банка повторялись как параметризованные "Вариант N" (один и тот
   же код с разными числами) — они объединены в один вопрос, где сами
   варианты кода/результата стали вариантами ответа A-D. Объяснения — на
   казахском языке. userAnswer пустой — реальной попытки пользователя нет. */
window.QUIZ_DATA["v13-itbasics"] = {
  key: "v13-itbasics", variant: 13, subject: "itbasics", lang: "kz",
  title: "Вариант 13 · ИТ-тест (БД, Excel, Python)",
  questions: [
    {
      id: "v13-itbasics-1", variant: 13, subject: "itbasics", number: 1, topic: "Базы данных: основы",
      question: "Кең ауқымды деректерді сақтауға, өзгертуге және өңдеуге арналған деректердің ұйымдастырылған жиынтығы",
      options: [
        { letter: "A", text: "кесте" }, { letter: "B", text: "индекс" },
        { letter: "C", text: "мәліметтер қоры" }, { letter: "D", text: "нысан" }
      ],
      correct: ["C"], userAnswer: [], keyConfidence: "derived",
      explanation: "Бұл — «мәліметтер қоры» (дерекқор/база данных) ұғымының тікелей анықтамасы: үлкен көлемдегі деректерді сақтауға, өзгертуге және өңдеуге арналған ұйымдастырылған жиынтық. Кесте (A) — дерекқордың бір бөлігі ғана, индекс (B) — іздеуді жылдамдататын қосымша құрылым, нысан (D) — дерекқордағы жеке жазба, толық жиынтық емес."
    },
    {
      id: "v13-itbasics-2", variant: 13, subject: "itbasics", number: 2, topic: "Модели баз данных",
      question: "Кестелік мәліметтер қоры",
      options: [
        { letter: "A", text: "желілік" }, { letter: "B", text: "кестелік" },
        { letter: "C", text: "реляциялық" }, { letter: "D", text: "иерархиялық" }
      ],
      correct: ["C"], userAnswer: [], keyConfidence: "derived",
      explanation: "Деректері кестелер түрінде сақталатын дерекқор моделі — реляциялық (C) деп аталады (латын reslatio — қатынас). Желілік (A) модельде деректер граф түрінде, иерархиялық (D) модельде ағаш түрінде сақталады, ал «кестелік» (B) — терминнің өзі, жауап бола алмайды."
    },
    {
      id: "v13-itbasics-3", variant: 13, subject: "itbasics", number: 3, topic: "Классификация БД",
      question: "Сипаты бойынша сақталатын ақпараттың мәліметтер қоры",
      options: [
        { letter: "A", text: "фактографиялық, құжаттық" }, { letter: "B", text: "иерархиялық, ағаштық" },
        { letter: "C", text: "реляциялық, желілік" }, { letter: "D", text: "орталықтандырылған, таратылған" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "derived",
      explanation: "Сақталатын ақпараттың сипаты (табиғаты) бойынша дерекқорлар фактографиялық (нақты деректер, мысалы кестедегі сандар) және құжаттық (толық мәтіндер, суреттер) болып бөлінеді (A). Иерархиялық/желілік/реляциялық (B, C) — деректер моделі бойынша жіктеу, орталықтандырылған/таратылған (D) — орналасуы бойынша жіктеу, сипаты бойынша емес."
    },
    {
      id: "v13-itbasics-4", variant: 13, subject: "itbasics", number: 4, topic: "Модели баз данных",
      question: "Суретте бірнеше өзара байланысқан торап (Г, А, Б, В) және олардың арасындағы бірнеше бағыттас байланыс көрсетілген (ағаш емес, жалпы граф). Суретке сәйкес келетін мәліметтер қоры",
      options: [
        { letter: "A", text: "кестелік" }, { letter: "B", text: "иерархиялық" },
        { letter: "C", text: "желілік" }, { letter: "D", text: "реляциялық" }
      ],
      correct: ["C"], userAnswer: [], keyConfidence: "derived",
      explanation: "Суреттегі байланыс — жалпы граф (бір торапта бірнеше «ата-ана» болуы мүмкін), бұл нақ желілік модельдің (C) белгісі. Иерархиялық модельде (B) әр торапта тек біреуден ата-ана болады (қатаң ағаш), реляциялық (D) деректерді кесте түрінде, ал «кестелік» (A) термин ретінде осында жауап емес."
    },
    {
      id: "v13-itbasics-5", variant: 13, subject: "itbasics", number: 5, topic: "Базы данных: основы",
      question: "Мағлұматтары деректер базасында сақталатын ақпараттық жүйенің элементі",
      options: [
        { letter: "A", text: "деректер" }, { letter: "B", text: "нысан" },
        { letter: "C", text: "sql" }, { letter: "D", text: "мәлімет" }
      ],
      correct: ["B"], userAnswer: [], keyConfidence: "derived",
      explanation: "Ақпараттық жүйеде дерекқорда сақталатын жазба — белгілі бір нақты нысанды (объектіні, мысалы: адам, тауар, тапсырыс) сипаттайды. Сондықтан жүйенің элементі — нысан (B). Деректер мен мәлімет (A, D) — нысанның өзі емес, оның қасиеттерінің мәні; SQL (C) — сұраныс тілі, элемент емес."
    },
    {
      id: "v13-itbasics-6", variant: 13, subject: "itbasics", number: 6, topic: "Excel",
      question: "Форма пернесін қосу алгоритмі (Excel)",
      options: [
        { letter: "A", text: "файл – панель быстрого доступа – другие команды" },
        { letter: "B", text: "файл – параметры – панель быстрого доступа – другие команды" },
        { letter: "C", text: "файл – параметры – панель быстрого доступа – формы" },
        { letter: "D", text: "файл – параметры – формы" }
      ],
      correct: ["B"], userAnswer: [], keyConfidence: "derived",
      explanation: "Excel-де «Форма» түймесі стандартты таспада жоқ, оны қосу үшін: Файл → Параметры → Панель быстрого доступа → «Барлық командалар» тізімінен «Форма»-ны тауып қосу керек (B). Басқа нұсқалар осы дұрыс тізбектің қатесі — не «Параметры» қадамы жоқ (A), не «формы» тармағы дұрыс емес атаумен көрсетілген (C, D)."
    },
    {
      id: "v13-itbasics-7", variant: 13, subject: "itbasics", number: 7, topic: "Базы данных: основы",
      question: "«Ток күші / Кернеу / Кедергі» атты 3 бағаннан және 12 жолдан тұратын кесте берілген. Мәліметтер қорының жазба мен өріс саны",
      options: [
        { letter: "A", text: "12, 3" }, { letter: "B", text: "3, 13" },
        { letter: "C", text: "13, 3" }, { letter: "D", text: "3, 12" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "derived",
      explanation: "Кестеде дәл 12 деректер жолы (жазба) және 3 баған (өріс: Ток күші, Кернеу, Кедергі) бар. Дерекқор терминологиясында жазба саны әрқашан бірінші, өріс саны екінші аталады, сондықтан дұрыс жауап «12, 3» (A)."
    },
    {
      id: "v13-itbasics-8", variant: 13, subject: "itbasics", number: 8, topic: "Excel: интерфейс",
      question: "Excel-дегі форма терезесінде (Ток күші/Кернеу/Кедергі өрістері, Добавить/Удалить/Вернуть/Назад/Далее түймелері) терезеден терезеге, яғни бір өрістен екінші өріске жылжуға мүмкіндік беретін перне",
      options: [
        { letter: "A", text: "Shift" }, { letter: "B", text: "Enter" },
        { letter: "C", text: "Tab" }, { letter: "D", text: "Alt" }
      ],
      correct: ["C"], userAnswer: [], keyConfidence: "derived",
      explanation: "Windows формаларында (Excel формасы да солай) бір өрістен екінші өріске ауысу үшін стандартты перне — Tab (C). Shift (A) көбіне тізімде кері бағытта таңдау үшін Tab-пен бірге қолданылады, Enter (B) — растау, Alt (D) — таспадағы командаларға қатынау үшін пайдаланылады."
    },
    {
      id: "v13-itbasics-9", variant: 13, subject: "itbasics", number: 9, topic: "Excel: интерфейс",
      question: "Excel формасындағы «Кері қайтару әрекеті» (жаңа жазба енгізу кезінде мәнді бастапқы қалпына қайтару) қай түймемен орындалады: Добавить / Удалить / Вернуть / Назад / Далее / Критерии / Закрыть ішінен",
      options: [
        { letter: "A", text: "назад" }, { letter: "B", text: "далее" },
        { letter: "C", text: "вернуть" }, { letter: "D", text: "критерии" }
      ],
      correct: ["C"], userAnswer: [], keyConfidence: "derived",
      explanation: "«Кері қайтару» тікелей «Вернуть» (C) түймесіне сәйкес келеді — ол енгізіліп жатқан жазбадағы өзгерістерді бастапқы қалпына қайтарады. «Назад/Далее» (A, B) жазбалар арасында жылжу үшін, «Критерии» (D) іздеу шарттарын орнату үшін қолданылады."
    },
    {
      id: "v13-itbasics-10", variant: 13, subject: "itbasics", number: 10, topic: "Excel: интерфейс",
      question: "Сырттан мәліметтер қорын импорттау үшін командалар",
      options: [
        { letter: "A", text: "главная – получение данных" }, { letter: "B", text: "данные – получение данных" },
        { letter: "C", text: "главная – получение внешних данных" }, { letter: "D", text: "данные – получение внешних данных" }
      ],
      correct: ["D"], userAnswer: [], keyConfidence: "derived",
      explanation: "Excel таспасында сыртқы дерекқорды импорттау командалары «Данные» қойындысындағы «Получение внешних данных» тобында орналасқан (D). «Главная» (A, C) қойындысында мұндай топ жоқ, ал жай «получение данных» (B) атауы толық емес."
    },
    {
      id: "v13-itbasics-11", variant: 13, subject: "itbasics", number: 11, topic: "Базы данных: ключи",
      question: "Кестедегі жазбаны бірегей түрде анықтайтын өріс",
      options: [
        { letter: "A", text: "бастапқы жазба" }, { letter: "B", text: "бірегей" },
        { letter: "C", text: "бастапқы өріс" }, { letter: "D", text: "кілттік" }
      ],
      correct: ["D"], userAnswer: [], keyConfidence: "derived",
      explanation: "Кестедегі әрбір жазбаны бірегей анықтайтын өріс — кілттік өріс (первичный ключ, D). «Бірегей» (B) — қасиет атауы ғана, нақты термин емес; «бастапқы жазба/өріс» (A, C) дерекқор теориясында қолданылмайтын атаулар."
    },
    {
      id: "v13-itbasics-12", variant: 13, subject: "itbasics", number: 12, topic: "Excel: горячие клавиши",
      question: "Іздеу қызметін пайдалануға болатын пернелер комбинациясы",
      options: [
        { letter: "A", text: "Ctrl+K" }, { letter: "B", text: "Ctrl+H" },
        { letter: "C", text: "Ctrl+F" }, { letter: "D", text: "Ctrl+Z" }
      ],
      correct: ["C"], userAnswer: [], keyConfidence: "derived",
      explanation: "Ctrl+F (Find) — іздеу үшін әмбебап пернелер комбинациясы (C). Ctrl+H (B) — ауыстыру (Replace), Ctrl+K (A) — гиперсілтеме қою, Ctrl+Z (D) — соңғы әрекетті болдырмау (Undo)."
    },
    {
      id: "v13-itbasics-13", variant: 13, subject: "itbasics", number: 13, topic: "Excel: горячие клавиши",
      question: "Ауыстыру қызметін пайдалануға болатын пернелер комбинациясы",
      options: [
        { letter: "A", text: "Ctrl+F" }, { letter: "B", text: "Ctrl+K" },
        { letter: "C", text: "Ctrl+H" }, { letter: "D", text: "Ctrl+Z" }
      ],
      correct: ["C"], userAnswer: [], keyConfidence: "derived",
      explanation: "Ctrl+H (Replace) — мәтінді ауыстыру үшін пернелер комбинациясы (C). Ctrl+F (A) — іздеу, Ctrl+K (B) — гиперсілтеме, Ctrl+Z (D) — соңғы әрекетті болдырмау."
    },
    {
      id: "v13-itbasics-14", variant: 13, subject: "itbasics", number: 14, topic: "Excel: поиск и замена",
      question: "Табу мен ауыстыру диалогтік терезесі арқылы қолдануға болатын ауыстырмалы таңбалар (wildcards)",
      options: [
        { letter: "A", text: "*, !" }, { letter: "B", text: "?, *" },
        { letter: "C", text: "*, _" }, { letter: "D", text: "?, _" }
      ],
      correct: ["B"], userAnswer: [], keyConfidence: "derived",
      explanation: "Excel-дің «Найти и заменить» терезесінде екі ауыстырмалы таңба қолданылады: «?» — бір ғана таңбаны алмастырады, «*» — кез келген санды таңбаны алмастырады (B). «!», «_» таңбалары бұл контексте ауыстырмалы таңба ретінде қолданылмайды."
    },
    {
      id: "v13-itbasics-15", variant: 13, subject: "itbasics", number: 15, topic: "Excel: интерфейс",
      question: "Сұрыптау мен сүзгі командасы орналасқан таспа қойындысы мен тобы",
      options: [
        { letter: "A", text: "главная, данные" }, { letter: "B", text: "данные, редактирование" },
        { letter: "C", text: "главная, вставка" }, { letter: "D", text: "главная, сортировка и фильтр" }
      ],
      correct: ["D"], userAnswer: [], keyConfidence: "derived",
      explanation: "«Сортировка и фильтр» түймесі «Главная» қойындысында, «Редактирование» тобында орналасқан және өз алдына «Сортировка и фильтр» деп аталады (D дәл осы жолды көрсетеді). Басқа нұсқалар не қойындысын, не топ атауын дұрыс көрсетпейді."
    },
    {
      id: "v13-itbasics-16", variant: 13, subject: "itbasics", number: 16, topic: "Excel: фильтры",
      question: "Нәтижені басқа жерге көшіре алатын сүзгі",
      options: [
        { letter: "A", text: "кез келген сүзгі" }, { letter: "B", text: "көшіру сүзгісі" },
        { letter: "C", text: "қарапайым" }, { letter: "D", text: "кеңейтілген" }
      ],
      correct: ["D"], userAnswer: [], keyConfidence: "derived",
      explanation: "Тек кеңейтілген сүзгіде (Расширенный фильтр, D) нәтижені парақтың басқа орнына көшіру мүмкіндігі бар («скопировать результат в другое место»). Қарапайым (автосүзгі, C) мұндай мүмкіндік бермейді."
    },
    {
      id: "v13-itbasics-17", variant: 13, subject: "itbasics", number: 17, topic: "Python: циклы",
      question: "Экранға дәл «0 1 2 3 end» деп шығатын Python бағдарламасын анықтаңыз:",
      options: [
        { letter: "A", text: "", code: "for k in range(4):\n    print(k)\nelse:\n    print('end')" },
        { letter: "B", text: "", code: "for k in range(4):\n    print(k)\n    print('end')\nelse:\n    print('end')" },
        { letter: "C", text: "", code: "for k in range(4):\n    print('end')\nelse:\n    print(k)" },
        { letter: "D", text: "", code: "for k in range(4):\n    print(k)\n    print('end')" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "derived",
      explanation: "Нұсқа A: цикл 0,1,2,3-ті басып шығарады, break болмағандықтан for-дың «else» бөлігі де орындалып, «end» шығады — дәл сұралған нәтиже. B нұсқасында «end» әр қайталанымда қосымша шығады, C-де «end» 4 рет басылып, тек соңында k (=3) шығады, D-де else жоқ, бірақ «end» әр қайталанымда шығады — үшеуі де сұралған нәтижеге сәйкес келмейді."
    },
    {
      id: "v13-itbasics-18", variant: 13, subject: "itbasics", number: 18, topic: "Python: циклы",
      question: "Төмендегі бағдарлама орындалғанда экранға шығатын нәтиже:",
      questionCode: "var = 10\nwhile var > 0:\n    print('current variable value:', var)\n    var = var - 1\n    if var == 5:\n        break\nprint('end')",
      options: [
        { letter: "A", text: "", code: "current variable value: 9\ncurrent variable value: 8\ncurrent variable value: 7\ncurrent variable value: 6\nend" },
        { letter: "B", text: "", code: "current variable value: 10\ncurrent variable value: 9\ncurrent variable value: 8\ncurrent variable value: 7\ncurrent variable value: 6" },
        { letter: "C", text: "", code: "current variable value: 10\ncurrent variable value: 9\ncurrent variable value: 8\ncurrent variable value: 7\nend" },
        { letter: "D", text: "", code: "current variable value: 10\ncurrent variable value: 9\ncurrent variable value: 8\ncurrent variable value: 7\ncurrent variable value: 6\nend" }
      ],
      correct: ["D"], userAnswer: [], keyConfidence: "derived",
      explanation: "var 10-нан бастап әр қайталанымда бір басылып, содан кейін 1-ге кемиді: басылады 10,9,8,7,6 (5 мән), сосын var 5-ке тең болғанда break іске қосылады. break тек while циклінен ғана шығады, ал одан кейінгі print('end') циклден тыс тұрғандықтан бәрібір орындалады. Сондықтан толық нәтиже — 10,9,8,7,6 және «end» (D). B нұсқасында «end» жоқ, A мен C-де мәндер саны аз (алғашқы 10 немесе соңғы 6 жіберіп алынған)."
    },
    {
      id: "v13-itbasics-19", variant: 13, subject: "itbasics", number: 19, topic: "Python: циклы",
      question: "Төмендегі бағдарлама орындалғанда экранға шығатын нәтиже:",
      questionCode: "i = 0\nwhile i < 9:\n    i += 1\n    if i == 3:\n        continue\n    print(i)",
      options: [
        { letter: "A", text: "", code: "1\n2\n5\n6\n7\n8\n9" },
        { letter: "B", text: "", code: "1\n2\n4\n5\n7\n8\n9" },
        { letter: "C", text: "", code: "1\n2\n4\n5\n6\n7\n8" },
        { letter: "D", text: "", code: "1\n2\n4\n5\n6\n7\n8\n9" }
      ],
      correct: ["D"], userAnswer: [], keyConfidence: "derived",
      explanation: "i алдымен өседі, содан кейін тексеріледі: i=1→print(1); i=2→print(2); i=3→continue (print аттап кетіледі, тек «3» ғана жоқ); i=4..9 әрқайсысы басылады. Сонда нәтиже: 1,2,4,5,6,7,8,9 — дәл D нұсқасы. Басқа нұсқаларда бір мән (5, 3 немесе 9) жаңылыс жоқ немесе бар болып кетеді."
    },
    {
      id: "v13-itbasics-20", variant: 13, subject: "itbasics", number: 20, topic: "Python: массивы",
      question: "Массив элементінің индексі белгіленеді",
      options: [
        { letter: "A", text: "A{4}" }, { letter: "B", text: "A(4)" },
        { letter: "C", text: "[4]" }, { letter: "D", text: "A[4]" }
      ],
      correct: ["D"], userAnswer: [], keyConfidence: "derived",
      explanation: "Python-да (сол сияқты көптеген тілдерде) тізім/массив элементінің индексі шаршы жақшамен белгіленеді: A[4] (D). Дөңгелек жақша (B) функция шақыруға, фигуралы жақша (A) жиынға (set) арналған, ал тек «[4]» (C) массив атауынсыз толымсыз жазба."
    },
    {
      id: "v13-itbasics-21", variant: 13, subject: "itbasics", number: 21, topic: "Python: списки",
      question: "Программаның нәтижесі:",
      questionCode: "names = ['Adilhan', 'Sabit', 'Mereke', 'Askar', 'Majit']\nprint(names[3])",
      options: [
        { letter: "A", text: "Majit" }, { letter: "B", text: "Mereke" },
        { letter: "C", text: "Sabit" }, { letter: "D", text: "Askar" }
      ],
      correct: ["D"], userAnswer: [], keyConfidence: "derived",
      explanation: "Python-да индекстеу нөлден басталады: names[0]='Adilhan', names[1]='Sabit', names[2]='Mereke', names[3]='Askar' (D). names[4] ғана 'Majit' (A) болар еді."
    },
    {
      id: "v13-itbasics-22", variant: 13, subject: "itbasics", number: 22, topic: "Python: модули",
      question: "Кездейсоқ сандар генерациясының модулі",
      options: [
        { letter: "A", text: "Rand" }, { letter: "B", text: "Randomize" },
        { letter: "C", text: "Randomer" }, { letter: "D", text: "Random" }
      ],
      correct: ["D"], userAnswer: [], keyConfidence: "derived",
      explanation: "Python-дың стандартты кітапханасында кездейсоқ сандар генерациясы үшін «random» модулі қолданылады (D). Қалған атаулар (A, B, C) — Python-да жоқ ойдан шығарылған атаулар."
    },
    {
      id: "v13-itbasics-23", variant: 13, subject: "itbasics", number: 23, topic: "Python: массивы",
      question: "Программаға 5 сан: 10; 2; -6; 5; -3 енгізгендегі нәтиже:",
      questionCode: "from array import array\nA = array('i')\nN = int(input())\nS = 0\nA = [0] * N\nfor i in range(0, N):\n    A[i] = int(input())\nfor i in range(0, N):\n    if A[i] > 0:\n        S += A[i]\nprint(S)",
      options: [
        { letter: "A", text: "17" }, { letter: "B", text: "-9" },
        { letter: "C", text: "8" }, { letter: "D", text: "18" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "derived",
      explanation: "Бағдарлама тек оң сандардың қосындысын есептейді: 10+2+5 = 17 (A). Теріс сандар (-6, -3) қосындыға кірмейді, себебі шарт «A[i] > 0»."
    },
    {
      id: "v13-itbasics-24", variant: 13, subject: "itbasics", number: 24, topic: "Python: списки",
      question: "a = [3, -3, 8, 6, 7, 1, 4] тізімі берілген. Экранға дәл [27, -27, 512, 216, 343, 1, 64] нәтижесін шығаратын бағдарлама коды:",
      options: [
        { letter: "A", text: "", code: "a = [3,-3,8,6,7,1,4]\nb = [i**3 for i in a]\nprint(a)" },
        { letter: "B", text: "", code: "a = [3,-3,8,6,7,1,4]\nb = [i**3 for i in a]\nprint(b)" },
        { letter: "C", text: "", code: "a = [3,-3,8,6,7,1,4]\nb = [i*3 for i in a]\nprint(b)" },
        { letter: "D", text: "", code: "a = [3,-3,8,6,7,1,4]\nb = [i**3 for i in b]\nprint(b)" }
      ],
      correct: ["B"], userAnswer: [], keyConfidence: "derived",
      explanation: "b = [i**3 for i in a] тізімі a-ның әр элементінің кубын есептейді: 3³=27, (-3)³=-27, 8³=512, 6³=216, 7³=343, 1³=1, 4³=64 — дәл сұралған нәтиже, оны print(b) шығарады (B). Нұсқа A дұрыс b-ны есептейді, бірақ print(a) (өзгермеген тізім) шығарады; C кубтың орнына көбейтуді қолданады (i*3); D анықталмаған «b»-ны пайдаланып қатеге әкеледі."
    },
    {
      id: "v13-itbasics-25", variant: 13, subject: "itbasics", number: 25, topic: "Python: списки",
      question: "Тізімнің соңына x элементін қосатын функция",
      options: [
        { letter: "A", text: "append(x)" }, { letter: "B", text: "insert(x)" },
        { letter: "C", text: "apend(x)" }, { letter: "D", text: "inserted(x)" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "derived",
      explanation: "Python тізіміне соңына бір элемент қосу үшін append(x) әдісі қолданылады (A). insert(x) (B) толымсыз жазылған (нақты insert екі аргумент — позиция мен мән — талап етеді), C және D — қате жазылған/жоқ атаулар."
    },
    {
      id: "v13-itbasics-26", variant: 13, subject: "itbasics", number: 26, topic: "Python: списки",
      question: "Тізімдерге арналған кірістірілген reverse() функциясының қызметі",
      options: [
        { letter: "A", text: "тізімдегі элементтерді кері ретпен орналастырады" },
        { letter: "B", text: "тізімдегі элементтерді кему ретімен орналастырады" },
        { letter: "C", text: "тізімдегі элементтерді өсу ретімен орналастырады" },
        { letter: "D", text: "тізімдегі элементтерді әдепкі ретпен орналастырады" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "derived",
      explanation: "reverse() тізімдегі элементтердің орналасу ретін тек керісінше (соңынан басына) ауыстырады (A) — ол сұрыптамайды, тек ретін керіге бұрады. Кему/өсу ретімен сұрыптау (B, C) — sort() функциясының қызметі."
    },
    {
      id: "v13-itbasics-27", variant: 13, subject: "itbasics", number: 27, topic: "Python: списки",
      question: "Append функциясы пайдаланылған есептің нәтижесі:",
      questionCode: "numbers = [1, 2, 45, 3, 6, 4]\nnumbers.append(5)\nprint(numbers)",
      options: [
        { letter: "A", text: "(1, 2, 45, 3, 6, 5)" }, { letter: "B", text: "[1, 2, 45, 3, 6, 4, 5]" },
        { letter: "C", text: "[1, 2, 45, 3, 6, 5]" }, { letter: "D", text: "(1, 2, 45, 3, 6, 4, 5)" }
      ],
      correct: ["B"], userAnswer: [], keyConfidence: "derived",
      explanation: "append(5) тізімнің соңына 5 санын қосады, бар элементтер өзгеріссіз қалады: [1, 2, 45, 3, 6, 4, 5] (B). Нәтиже әрқашан тізім (шаршы жақша), кортеж (дөңгелек жақша, A және D) емес, әрі бұрынғы 4 саны жоғалмайды (C-де қате жоғалып кеткен)."
    },
    {
      id: "v13-itbasics-28", variant: 13, subject: "itbasics", number: 28, topic: "Python: списки",
      question: "B = sorted(A, reverse=True) программалық кодына түсініктеме",
      options: [
        { letter: "A", text: "өсу ретімен В массивін сұрыптап, А массивіне жүктейді" },
        { letter: "B", text: "өсу ретімен А массивін сұрыптап, В массивіне жүктейді" },
        { letter: "C", text: "кему ретімен В массивін сұрыптап, А массивіне жүктейді" },
        { letter: "D", text: "кему ретімен А массивін сұрыптап, В массивіне жүктейді" }
      ],
      correct: ["D"], userAnswer: [], keyConfidence: "derived",
      explanation: "sorted(A, reverse=True) — А массивін кему ретімен сұрыптап, нәтижесін жаңа В массивіне жазады, ал А өзгеріссіз қалады (D). reverse=True параметрі кему ретін білдіреді, өсу ретін емес (A, B қате), әрі sorted() әрқашан А-ны емес, А-дан алынған нәтижені В-ға жазады (C қате: В емес, А сұрыпталады)."
    },
    {
      id: "v13-itbasics-29", variant: 13, subject: "itbasics", number: 29, topic: "Excel: формулы",
      question: "D18 ұяшығында орташа баға сақталады, D19 ұяшығына «Емтиханнан босатылды ма?» деген сұраққа D18=14 болса «Иә», болмаса «Жоқ» деп жауап беретін формула",
      options: [
        { letter: "A", text: "=ЕСЛИ(14; \"Жоқ\"; \"Иә\")" },
        { letter: "B", text: "ЕСЛИ(D18=14;\"Иә\"; \"Жоқ\")" },
        { letter: "C", text: "=ЕСЛИ(D18=14;\"Иә\"; \"Жоқ\")" },
        { letter: "D", text: "=ЕСЛИ(D18=14; \"Жоқ\"; \"Иә\")" }
      ],
      correct: ["C"], userAnswer: [], keyConfidence: "derived",
      explanation: "Дұрыс формула үш шартты орындауы керек: «=» таңбасынан басталуы (формула екенін білдіреді), D18=14 шартын дұрыс тексеруі, шарт ақиқат болғанда «Иә» қайтаруы. Тек C нұсқасы осының бәріне сай келеді. B нұсқасында «=» жоқ (мәтін ретінде қабылданады), A нұсқасында D18 мүлдем салыстырылмайды, D нұсқасында «Иә»/«Жоқ» орындары ауыстырылып кеткен."
    },
    {
      id: "v13-itbasics-30", variant: 13, subject: "itbasics", number: 30, topic: "Системы счисления",
      question: "111100110(2) — x(10)",
      options: [
        { letter: "A", text: "486" }, { letter: "B", text: "484" },
        { letter: "C", text: "482" }, { letter: "D", text: "480" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "derived",
      explanation: "111100110₂ = 256+128+64+32+0+0+4+2+0 = 486₁₀ (A). Әр разрядты 2-нің дәрежесіне көбейтіп қосу арқылы тексеруге болады."
    },
    {
      id: "v13-itbasics-31", variant: 13, subject: "itbasics", number: 31, topic: "Системы счисления",
      question: "74(10) — x(2)",
      options: [
        { letter: "A", text: "1001010" }, { letter: "B", text: "1101010" },
        { letter: "C", text: "1101011" }, { letter: "D", text: "1001011" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "derived",
      explanation: "74 = 64+8+2 = 2⁶+2³+2¹, яғни екілік жүйеде 1001010 (A). Тексеру: 1001010₂ = 64+8+2 = 74."
    },
    {
      id: "v13-itbasics-32", variant: 13, subject: "itbasics", number: 32, topic: "Системы счисления",
      question: "2011(8) — x(10), x(16)",
      options: [
        { letter: "A", text: "1033, 409" }, { letter: "B", text: "1033, 419" },
        { letter: "C", text: "1073, 419" }, { letter: "D", text: "1073, 409" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "derived",
      explanation: "2011₈ = 2·512+0·64+1·8+1·1 = 1024+8+1 = 1033₁₀. 1033-ті 16-лық жүйеге түрлендірсек: 1033 = 4·256+0·16+9 = 409₁₆. Сонда жауап «1033, 409» (A)."
    },
    {
      id: "v13-itbasics-33", variant: 13, subject: "itbasics", number: 33, topic: "Системы счисления",
      question: "101100110(2) — x(8), x(16)",
      options: [
        { letter: "A", text: "540, 160" }, { letter: "B", text: "540, 166" },
        { letter: "C", text: "546.266" }, { letter: "D", text: "546, 166" }
      ],
      correct: ["D"], userAnswer: [], keyConfidence: "derived",
      explanation: "101100110₂ = 256+64+32+4+2 = 358₁₀. 358-ді 8-ге бөлу арқылы 8-лік жүйеге түрлендірсек: 546₈. 358-ді 16-лық жүйеге түрлендірсек: 166₁₆. Сонда жауап «546, 166» (D)."
    },
    {
      id: "v13-itbasics-34", variant: 13, subject: "itbasics", number: 34, topic: "Системы счисления",
      question: "127(8) — x(2), x(10), x(16)",
      options: [
        { letter: "A", text: "1011011, 57, 85" }, { letter: "B", text: "1010101, 85, 57" },
        { letter: "C", text: "1111011, 87, 57" }, { letter: "D", text: "1010111, 87, 57" }
      ],
      correct: ["D"], userAnswer: [], keyConfidence: "derived",
      explanation: "127₈ = 1·64+2·8+7·1 = 64+16+7 = 87₁₀. 87-ні екілік жүйеге түрлендірсек: 64+16+4+2+1 = 1010111₂. 87-ні 16-лық жүйеге түрлендірсек: 5·16+7 = 57₁₆. Сонда жауап «1010111, 87, 57» (D)."
    },
    {
      id: "v13-itbasics-35", variant: 13, subject: "itbasics", number: 35, topic: "Python: строки",
      question: "s = \"информатика\" болғанда print(s[2:7]) нәтижесі",
      options: [
        { letter: "A", text: "формат" }, { letter: "B", text: "форм" },
        { letter: "C", text: "форма" }, { letter: "D", text: "мат" }
      ],
      correct: ["C"], userAnswer: [], keyConfidence: "derived",
      explanation: "«информатика» жолында индекстер: и0,н1,ф2,о3,р4,м5,а6,т7,и8,к9,а10. s[2:7] — 2-ден 7-ге дейін (7 кірмейді), яғни ф,о,р,м,а — «форма» (C)."
    },
    {
      id: "v13-itbasics-36", variant: 13, subject: "itbasics", number: 36, topic: "Python: строки",
      question: "s = \"информатика\". «к» әрпін экранға шығару үшін қолданылатын код",
      options: [
        { letter: "A", text: "print(s[7])" }, { letter: "B", text: "print(s[6])" },
        { letter: "C", text: "print(s[8])" }, { letter: "D", text: "print(s[9])" }
      ],
      correct: ["D"], userAnswer: [], keyConfidence: "derived",
      explanation: "«информатика» жолында «к» әрпі 9-индексте тұр (и0,н1,ф2,о3,р4,м5,а6,т7,и8,к9,а10), сондықтан print(s[9]) (D)."
    },
    {
      id: "v13-itbasics-37", variant: 13, subject: "itbasics", number: 37, topic: "Python: строки",
      question: "s = \"информатика\" болғанда print(s[2:7:2]) нәтижесі",
      options: [
        { letter: "A", text: "фра" }, { letter: "B", text: "форма" },
        { letter: "C", text: "фраи" }, { letter: "D", text: "форм" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "derived",
      explanation: "s[2:7:2] — 2-ден 7-ге дейін, әр 2-ші таңбаны алады: индекс 2 (ф), 4 (р), 6 (а) — «фра» (A). Қадам (step) 2 болғандықтан аралық таңбалар (о, м) өткізіп жіберіледі."
    }
  ]
};
