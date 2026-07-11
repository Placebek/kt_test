window.QUIZ_DATA = window.QUIZ_DATA || {};
/* Вариант 14 · ИТ-тест (базы данных, Excel, сети, Python, графика) —
   questions/infor-programming/Пробный тест1.docx. Одиночный выбор A-D,
   1 балл за вопрос. Источник — скриншоты теста с подсвеченным (галочка)
   правильным вариантом; на первой же странице документ явно подтверждает
   конвенцию отдельной подписью "Дұрыс жауап С" под скриншотом — то есть
   подсветка отмечает ПРАВИЛЬНЫЙ ответ, а не выбор какого-то пользователя.
   Поэтому большинство вопросов имеют keyConfidence "official". В нескольких
   вопросах подсветка противоречит объективному расчёту/факту, показанному
   тут же на скриншоте (напр. явно посчитанная по формуле скорость передачи,
   или трассировка кода, дающая другое число) — там ответ исправлен на
   математически верный, disputed:true, keyConfidence "derived". Объяснения —
   на казахском языке. userAnswer пустой (это не транскрипт реальной попытки
   конкретного пользователя, а сам тест с ключом). */
window.QUIZ_DATA["v14-itbasics"] = {
  key: "v14-itbasics", variant: 14, subject: "itbasics", lang: "kz",
  title: "Вариант 14 · ИТ-тест (Пробный тест 1)",
  questions: [
    {
      id: "v14-itbasics-1", variant: 14, subject: "itbasics", number: 1, topic: "Базы данных: основы",
      question: "«Ток күші / Кернеу / Кедергі» атты 3 бағаннан және 12 жолдан тұратын кесте берілген. Мәліметтер қорының жазба мен өріс саны",
      options: [
        { letter: "A", text: "3, 13" }, { letter: "B", text: "13, 3" },
        { letter: "C", text: "12, 3" }, { letter: "D", text: "3, 12" }
      ],
      correct: ["C"], userAnswer: [], keyConfidence: "official",
      explanation: "Кестеде 12 деректер жолы (жазба) және 3 баған (өріс) бар, сондықтан жауап «12, 3» (C) — бұл құжатта тікелей «Дұрыс жауап С» деп те көрсетілген."
    },
    {
      id: "v14-itbasics-2", variant: 14, subject: "itbasics", number: 2, topic: "Веб-сайты",
      question: "Сайттың дұрыс істеп тұрғанын тексеретін кезең",
      options: [
        { letter: "A", text: "тестілеу" }, { letter: "B", text: "жарнялау" },
        { letter: "C", text: "бақылау" }, { letter: "D", text: "жоспарлау" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "official",
      explanation: "Сайттың дұрыс жұмыс істеп тұрғанын арнайы тексеру кезеңі — тестілеу (A). Жарнялау (жариялау), бақылау, жоспарлау — сайт әзірлеу циклінің басқа кезеңдері."
    },
    {
      id: "v14-itbasics-3", variant: 14, subject: "itbasics", number: 3, topic: "Excel: функции",
      question: "ОКРУГЛ функциясының мәні (100,214 / 7,38 / -22,45 сандары үшін =ОКРУГЛ(F16;1) формуласы қолданылған)",
      options: [
        { letter: "A", text: "100,4; 7,4; -21" }, { letter: "B", text: "100,2; 7,4; -23" },
        { letter: "C", text: "100,2; 7,4; -22,5" }, { letter: "D", text: "100,4; 7,3; -22,5" }
      ],
      correct: ["C"], userAnswer: [], keyConfidence: "official",
      explanation: "ОКРУГЛ(х;1) санды үтірден кейінгі 1 таңбаға дейін дөңгелектейді: 100,214→100,2; 7,38→7,4; -22,45→-22,5 — дәл C нұсқасы."
    },
    {
      id: "v14-itbasics-4", variant: 14, subject: "itbasics", number: 4, topic: "Криптография",
      question: "Шифрдан ашуда өте көп көлемді есептеулерді талап ететін алгоритм",
      options: [
        { letter: "A", text: "парольдің беріктігі" }, { letter: "B", text: "алгоритм беріктігі" },
        { letter: "C", text: "шифрдың беріктігі" }, { letter: "D", text: "шифрдың критоберіктілігі" }
      ],
      correct: ["B"], userAnswer: [], keyConfidence: "official",
      explanation: "Шифрды ашу үшін өте көп есептеу қажет ету — шифрлау алгоритмінің беріктігін (B) сипаттайды: алгоритм неғұрлым берік болса, соғұрлым оны «бас тіркеу» әдісімен ашу қиынырақ."
    },
    {
      id: "v14-itbasics-5", variant: 14, subject: "itbasics", number: 5, topic: "История информатики",
      question: "Қосу мен азайту амалын орындайтын ең қарапайым есептеу машинасын ойлап тапқан неміс астрономы",
      options: [
        { letter: "A", text: "Чарльз Бэббидж" }, { letter: "B", text: "Вильгельм Шиккард" },
        { letter: "C", text: "Конрад Цузе" }, { letter: "D", text: "Блез Паскаль" }
      ],
      correct: ["B"], userAnswer: [], keyConfidence: "official",
      explanation: "Неміс астрономы әрі математигі Вильгельм Шиккард 1623 жылы қосу-азайтуды орындайтын алғашқы механикалық есептеу машинасын жасаған (B). Паскаль (D) француз болған, Бэббидж (A) — ағылшын, Цузе (C) — кейінірек, XX ғасырда жұмыс істеген неміс инженері."
    },
    {
      id: "v14-itbasics-6", variant: 14, subject: "itbasics", number: 6, topic: "Python: циклы",
      question: "Программа нәтижесінде «Salem» сөзінің экранға шығу саны",
      questionCode: "k = 3\nwhile k > 0:\n    print('Salem')\n    k = k - 1",
      options: [
        { letter: "A", text: "0" }, { letter: "B", text: "3" },
        { letter: "C", text: "1" }, { letter: "D", text: "2" }
      ],
      correct: ["B"], userAnswer: [], keyConfidence: "official",
      explanation: "k=3-тен бастап әр қайталанымда 1-ге кемиді (k=3→2→1→0), әр қайталанымда «Salem» бір рет басылады. Цикл k>0 шартымен 3 рет орындалады (k=3,2,1 кезінде), сондықтан «Salem» дәл 3 рет шығады (B)."
    },
    {
      id: "v14-itbasics-7", variant: 14, subject: "itbasics", number: 7, topic: "Компьютерная графика",
      question: "Rendering",
      options: [
        { letter: "A", text: "форматтау" }, { letter: "B", text: "визуалдау немесе көрсету" },
        { letter: "C", text: "өзгерту" }, { letter: "D", text: "монтаждау" }
      ],
      correct: ["B"], userAnswer: [], keyConfidence: "official",
      explanation: "Rendering — үш өлшемді немесе басқа сипатталған сахнаны экранда көрінетін кескінге айналдыру, яғни визуалдау/көрсету процесі (B)."
    },
    {
      id: "v14-itbasics-8", variant: 14, subject: "itbasics", number: 8, topic: "Компьютерная графика",
      question: "Растрлық графиканың негізгі үш параметрі",
      options: [
        { letter: "A", text: "өлшем, сапа, түстер моделі" }, { letter: "B", text: "өлшем, айыру, сапа" },
        { letter: "C", text: "өлшем, түс, түстер моделі" }, { letter: "D", text: "өлшем, түстер моделі, айыру" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "official",
      explanation: "Растрлық кескінді сипаттайтын үш негізгі параметр — өлшемі (пиксель бойынша), сапасы (айыру қабілеті мен түс тереңдігіне байланысты) және түстер моделі (RGB, CMYK және т.б.) — A нұсқасы."
    },
    {
      id: "v14-itbasics-9", variant: 14, subject: "itbasics", number: 9, topic: "Excel: формулы",
      question: "Тоқсандық бағаларға қолданылған команда (шартты форматтау — Мажан/Мади/Ерғали/Даурен оқушыларының 4 тоқсандағы бағалары кесте түрінде түрлі-түсті боялған)",
      options: [
        { letter: "A", text: "равно" }, { letter: "B", text: "меньше" },
        { letter: "C", text: "больше" }, { letter: "D", text: "между" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "official",
      explanation: "Кестеде бірдей бағалар (мысалы, бірнеше 4, бірнеше 5) бірдей түспен боялған — бұл шартты форматтаудың «равно» (тең) ережесімен жасалады (A)."
    },
    {
      id: "v14-itbasics-10", variant: 14, subject: "itbasics", number: 10, topic: "Excel: сортировка",
      question: "Ұяшықтардың түсі, қаріп түсі немесе белгішелер жиынтығы бойынша сұрыптау",
      options: [
        { letter: "A", text: "формат бойынша" }, { letter: "B", text: "таңдалмалы тізім бойынша" },
        { letter: "C", text: "сандар бойынша" }, { letter: "D", text: "мәтін бойынша" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "official",
      explanation: "Excel-де ұяшық түсі, қаріп түсі немесе белгіше бойынша сұрыптау — «формат бойынша сұрыптау» (сортировка по формату) деп аталады (A)."
    },
    {
      id: "v14-itbasics-11", variant: 14, subject: "itbasics", number: 11, topic: "Системы счисления",
      question: "Позициялық сандар жүйесіндегі сандарды ұсынудың құрылымдық элементі",
      options: [
        { letter: "A", text: "мәні" }, { letter: "B", text: "дәреже" },
        { letter: "C", text: "саны" }, { letter: "D", text: "разряд" }
      ],
      correct: ["D"], userAnswer: [], keyConfidence: "official",
      explanation: "Позициялық сандар жүйесінде санның әр таңбасының орны — разряд (D) деп аталады, оның мәні сол таңбаның негіздің қай дәрежесіне көбейтілетінін анықтайды."
    },
    {
      id: "v14-itbasics-12", variant: 14, subject: "itbasics", number: 12, topic: "Python: массивы",
      question: "Бір атаумен біріктірілген, бір типтегі деректерден тұратын айнымалылардың жиынтығы",
      options: [
        { letter: "A", text: "жол" }, { letter: "B", text: "шарт" },
        { letter: "C", text: "массив" }, { letter: "D", text: "мән" }
      ],
      correct: ["C"], userAnswer: [], keyConfidence: "official",
      explanation: "Бір атаумен біріктірілген, бір типтегі элементтер жиынтығы — массив (тізім, C) деп аталатын классикалық анықтама."
    },
    {
      id: "v14-itbasics-13", variant: 14, subject: "itbasics", number: 13, topic: "История информатики",
      question: "Логикалық алгебраның атасы",
      options: [
        { letter: "A", text: "Джордж Буль" }, { letter: "B", text: "Бэббидж" },
        { letter: "C", text: "Готфрид Лейбниц" }, { letter: "D", text: "Аристотель" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "official",
      explanation: "Логикалық (бульдік) алгебраны жасаған ағылшын математигі — Джордж Буль (A), оның есімімен аталады."
    },
    {
      id: "v14-itbasics-14", variant: 14, subject: "itbasics", number: 14, topic: "История информатики",
      question: "Wi-fi пайда болған жыл",
      options: [
        { letter: "A", text: "1992" }, { letter: "B", text: "1991" },
        { letter: "C", text: "1995" }, { letter: "D", text: "1989" }
      ],
      correct: ["B"], userAnswer: [], keyConfidence: "official",
      explanation: "Wi-Fi технологиясының алғашқы негізі (NCR/AT&T-дің WaveLAN әзірлемесі) 1991 жылы пайда болды (B)."
    },
    {
      id: "v14-itbasics-15", variant: 14, subject: "itbasics", number: 15, topic: "Кодирование",
      question: "ASCII кодтау кестесінің стандартты бөлігі тұратын символдар аралығы",
      options: [
        { letter: "A", text: "0-ден 128-ге дейін" }, { letter: "B", text: "128-ден 255-ке дейін" },
        { letter: "C", text: "0-ден 127-ге дейін" }, { letter: "D", text: "0-ден 255-ке дейін" }
      ],
      correct: ["C"], userAnswer: [], keyConfidence: "official",
      explanation: "ASCII кестесінің стандартты (негізгі) бөлігі 0-ден 127-ге дейінгі 128 кодты қамтиды (C); 128-ден 255-ке дейінгі бөлік — кеңейтілген (қосымша, ұлттық) ASCII."
    },
    {
      id: "v14-itbasics-16", variant: 14, subject: "itbasics", number: 16, topic: "Кодирование",
      question: "Есептеуіш техникасында ең көп пайдаланылатын код",
      options: [
        { letter: "A", text: "Морзе" }, { letter: "B", text: "он алтылық код" },
        { letter: "C", text: "Тьюринг коды" }, { letter: "D", text: "ASCII" }
      ],
      correct: ["D"], userAnswer: [], keyConfidence: "official",
      explanation: "Есептеуіш техникасында мәтіндік символдарды кодтау үшін ең кең тараған код — ASCII (D)."
    },
    {
      id: "v14-itbasics-17", variant: 14, subject: "itbasics", number: 17, topic: "Excel: формулы",
      question: "A1 ұяшығының нәтижесі",
      questionCode: "A1: =100*5-45",
      options: [
        { letter: "A", text: "455" }, { letter: "B", text: "275" },
        { letter: "C", text: "460" }, { letter: "D", text: "545" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "official",
      explanation: "Амалдар реті бойынша алдымен көбейту орындалады: 100*5=500, содан кейін азайту: 500-45=455 (A)."
    },
    {
      id: "v14-itbasics-18", variant: 14, subject: "itbasics", number: 18, topic: "Сети",
      question: "Компьютер әрбір желіге қосылған сайын оған қызмет ететін провайдер компаниясы бір ғана мекенжай тағайындап беріп отыратын IP-мекенжай",
      options: [
        { letter: "A", text: "статикалық" }, { letter: "B", text: "динамикалық" },
        { letter: "C", text: "сыртқы" }, { letter: "D", text: "ішкі" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "official",
      explanation: "Тұрақты, әрдайым бір ғана мекенжай тағайындалатын IP — статикалық IP-мекенжай (A). Динамикалық (B) IP әр қосылған сайын өзгеруі мүмкін."
    },
    {
      id: "v14-itbasics-19", variant: 14, subject: "itbasics", number: 19, topic: "Архитектура ЭВМ",
      question: "Процессор мен жады арасындағы ақпарат алмасу жүзеге асырылатын және перифериялық құрылғылармен байланыс орнатылатын негізгі магистраль",
      options: [
        { letter: "A", text: "коректендіру блогы" }, { letter: "B", text: "жүйелік шина" },
        { letter: "C", text: "компьютер порттары" }, { letter: "D", text: "микропроцессор" }
      ],
      correct: ["B"], userAnswer: [], keyConfidence: "official",
      explanation: "Процессор, жады және перифериялық құрылғылар арасында деректер алмасатын негізгі магистраль — жүйелік шина (B, system bus)."
    },
    {
      id: "v14-itbasics-20", variant: 14, subject: "itbasics", number: 20, topic: "Системы счисления",
      question: "Қазіргі кезде компьютерде кең тараған позициялық санау жүйелерінің түрі",
      options: [
        { letter: "A", text: "4" }, { letter: "B", text: "2" },
        { letter: "C", text: "3" }, { letter: "D", text: "5" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "official",
      explanation: "Компьютерлік техникада кеңінен қолданылатын позициялық санау жүйесі 4 түрлі: екілік, сегіздік, ондық, он алтылық (A)."
    },
    {
      id: "v14-itbasics-21", variant: 14, subject: "itbasics", number: 21, topic: "Нейронные сети",
      question: "Жасанды нейрондық желілерді жіктеуге болатын белгілері",
      options: [
        { letter: "A", text: "қабат саны, байланыс түрі, оқыту алгоритмі, шешілетін есептің класы" },
        { letter: "B", text: "қабат саны, байланыс түрі, оқыту түрі, шешілетін алгоритм түрі" },
        { letter: "C", text: "қабат саны, байланыс класы, оқыту алгоритмі, шешілетін есептің түрі" },
        { letter: "D", text: "қабат саны, байланыс саны, оқыту түрі, шешілетін есептердің класы" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "official",
      explanation: "Жасанды нейрондық желілер әдетте қабат саны, байланыс түрі, оқыту алгоритмі және шешілетін есептің класы бойынша жіктеледі (A) — бұл нұсқада барлық төрт белгі дәл, дұрыс атаумен көрсетілген."
    },
    {
      id: "v14-itbasics-22", variant: 14, subject: "itbasics", number: 22, topic: "Excel: формулы",
      question: "C2 ұяшығының мәні",
      questionCode: "A1=7   B1=4        C1=A1+B2\nA2=A1*2   B2=СТЕПЕНЬ(B1;2)+A2   C2=C1-(B2-15)",
      options: [
        { letter: "A", text: "21" }, { letter: "B", text: "20" },
        { letter: "C", text: "22" }, { letter: "D", text: "35" }
      ],
      correct: ["C"], userAnswer: [], keyConfidence: "official",
      explanation: "Есептеу тізбегі: A2=7*2=14; B2=4²+14=16+14=30; C1=A1+B2=7+30=37; C2=C1-(B2-15)=37-(30-15)=37-15=22 (C)."
    },
    {
      id: "v14-itbasics-23", variant: 14, subject: "itbasics", number: 23, topic: "Веб-технологии",
      question: "CSS-ті HTML-ге қосудың тәсілдері",
      options: [
        { letter: "A", text: "құжат басында, құжат соңында" },
        { letter: "B", text: "ішкі стиль, құжат деңгейіндегі стиль, сыртқы стиль" },
        { letter: "C", text: "блоктық стильдер, стильді экспорттау" },
        { letter: "D", text: "ғаламдық стиль, байланыс стиль" }
      ],
      correct: ["B"], userAnswer: [], keyConfidence: "official",
      explanation: "CSS-ті HTML-ге қосудың үш классикалық тәсілі: inline (ішкі, тег ішінде), internal (құжат деңгейіндегі, <style> арқылы), external (сыртқы, бөлек файл) — B нұсқасы."
    },
    {
      id: "v14-itbasics-24", variant: 14, subject: "itbasics", number: 24, topic: "Сети", disputed: true,
      disputedNote: "Скриншотта дәл осы есептің толық шешімі көрсетілген (491 520 бит/240 секунд=2048 бит/1024=2 Кбит/сек), бірақ бөлек белгіленген «дұрыс» жауап B (0,25 Кбит/с) — есептеудің өзінің нәтижесіне қайшы келеді. Есептеудің дұрыстығына сеніп, «2 Кбит/с»-ты дұрыс жауап деп алдық.",
      question: "Көлемі 60 Кбайт болатын файлды 4 минутта желі бойынша тасымалдау үшін желінің өткізу қабілеті",
      options: [
        { letter: "A", text: "4 Кбит/с" }, { letter: "B", text: "0,25 Кбит/с" },
        { letter: "C", text: "2 Кбит/с" }, { letter: "D", text: "1,5 Кбит/с" }
      ],
      correct: ["C"], userAnswer: [], keyConfidence: "derived",
      explanation: "60 Кбайт = 60*1024 байт = 61 440 байт = 61 440*8 бит = 491 520 бит. 4 минут = 240 секунд. Өткізу қабілеті = 491 520 бит / 240 секунд = 2048 бит/с = 2048/1024 = 2 Кбит/с (C) — бұл дәл есептеу де құжатта көрсетілген."
    },
    {
      id: "v14-itbasics-25", variant: 14, subject: "itbasics", number: 25, topic: "Python: условия", disputed: true,
      disputedNote: "Құжатта белгіленген «дұрыс» жауап B (36) — бұл тек айнымалы a-ның квадратқа көтерілгеннен кейінгі аралық мәні, ал сұрақ соңғы print(k) нәтижесін сұрайды. Толық трассировка бойынша дұрыс жауап — C (41).",
      question: "a=6, b=5 болса, есептің нәтижесі",
      questionCode: "a = int(input())\nb = int(input())\nif a % 2 == 0:\n    a = a ** 2\nk = a + b\nprint(k)",
      options: [
        { letter: "A", text: "11" }, { letter: "B", text: "36" },
        { letter: "C", text: "41" }, { letter: "D", text: "31" }
      ],
      correct: ["C"], userAnswer: [], keyConfidence: "derived",
      explanation: "a=6 жұп болғандықтан a=a**2=36. Содан кейін k=a+b=36+5=41, және дәл осы k мәні print(k) арқылы экранға шығады — сондықтан жауап 41 (C), ал 36 (B) — тек аралық қадамдағы a-ның мәні, соңғы нәтиже емес."
    },
    {
      id: "v14-itbasics-26", variant: 14, subject: "itbasics", number: 26, topic: "История информатики",
      question: "Аналитикалық машина неше бөліктен тұрады",
      options: [
        { letter: "A", text: "6" }, { letter: "B", text: "5" },
        { letter: "C", text: "4" }, { letter: "D", text: "3" }
      ],
      correct: ["C"], userAnswer: [], keyConfidence: "official",
      explanation: "Чарльз Бэббидждің аналитикалық машинасы дәстүрлі түрде 4 негізгі бөліктен тұрады деп сипатталады: есептеу блогы (mill), жад (store), енгізу және шығару құрылғылары (C)."
    },
    {
      id: "v14-itbasics-27", variant: 14, subject: "itbasics", number: 27, topic: "Логика",
      question: "Бульдік алгебраның негізгі операциялары",
      options: [
        { letter: "A", text: "конъюнкция (НЕМЕСЕ), дизъюнкция (ЖӘНЕ), теріске шығару (ЖӘНЕ)" },
        { letter: "B", text: "конъюнкция (ЖӘНЕ), дизъюнкция (НЕМЕСЕ), теріске шығару (ЖӘНЕ)" },
        { letter: "C", text: "конъюнкция (НЕМЕСЕ), дизъюнкция (ЖӘНЕ), теріске шығару (ЕМЕС)" },
        { letter: "D", text: "конъюнкция (ЖӘНЕ), дизъюнкция (НЕМЕСЕ), теріске шығару (ЕМЕС)" }
      ],
      correct: ["D"], userAnswer: [], keyConfidence: "official",
      explanation: "Бульдік алгебраның үш негізгі операциясы: конъюнкция = ЖӘНЕ (AND), дизъюнкция = НЕМЕСЕ (OR), теріске шығару = ЕМЕС (NOT) — дәл D нұсқасы, басқаларында бір операция дұрыс емес сәйкестендірілген."
    },
    {
      id: "v14-itbasics-28", variant: 14, subject: "itbasics", number: 28, topic: "Архитектура ЭВМ",
      question: "Компьютердің аппараттық негізі (модульді құрылғысы)",
      options: [
        { letter: "A", text: "қатқыл диск" }, { letter: "B", text: "аналық тақша" },
        { letter: "C", text: "процессор" }, { letter: "D", text: "жедел жад" }
      ],
      correct: ["B"], userAnswer: [], keyConfidence: "official",
      explanation: "Компьютердің барлық модульдік құрылғылары (процессор, жад, қатқыл диск және т.б.) қосылатын негізгі аппараттық тірегі — аналық тақша (B, материнская плата)."
    },
    {
      id: "v14-itbasics-29", variant: 14, subject: "itbasics", number: 29, topic: "Python: типы данных", disputed: true,
      disputedNote: "Құжатта белгіленген «дұрыс» жауап C (int) — стандартты информатика терминологиясында int бүтін сандар типі, ал «нақты сандар» (жылжымалы үтірлі сандар) типі — float. Сондықтан дұрысы B.",
      question: "Нақты сандар типі",
      options: [
        { letter: "A", text: "boolean" }, { letter: "B", text: "float" },
        { letter: "C", text: "int" }, { letter: "D", text: "str" }
      ],
      correct: ["B"], userAnswer: [], keyConfidence: "derived",
      explanation: "«Нақты сандар» (жылжымалы үтірлі, бөлшек бөлігі бар сандар) деректер типі — float (B). int — бүтін сандар типі, boolean — логикалық (ақиқат/жалған), str — мәтіндік жол."
    },
    {
      id: "v14-itbasics-30", variant: 14, subject: "itbasics", number: 30, topic: "Основы программирования",
      question: "Компьютер түсінетін тілде жазылған командалар мен нұсқаулар жиынтығы",
      options: [
        { letter: "A", text: "программалау тілі" }, { letter: "B", text: "программа" },
        { letter: "C", text: "программалау" }, { letter: "D", text: "транслятор" }
      ],
      correct: ["B"], userAnswer: [], keyConfidence: "official",
      explanation: "Компьютер түсінетін тілде жазылған командалар мен нұсқаулар жиынтығы — программа (B). Программалау тілі (A) — жазу құралы, программалау (C) — процесс, транслятор (D) — код аудару құралы."
    },
    {
      id: "v14-itbasics-31", variant: 14, subject: "itbasics", number: 31, topic: "Компьютерная графика",
      question: "Векторлық графикалық редакторлар",
      options: [
        { letter: "A", text: "Paint.NET, Microsoft Draw" }, { letter: "B", text: "Photo Brush, Corel Draw" },
        { letter: "C", text: "Photo Brush, Paint" }, { letter: "D", text: "Paint, Adobe illustrator" }
      ],
      correct: ["B"], userAnswer: [], keyConfidence: "official",
      explanation: "Ұсынылған нұсқалардың ішінде векторлық редактор ретінде танылатыны — Corel Draw (B); Paint, Paint.NET, Photo Brush негізінен растрлық суреттермен жұмыс істейді."
    },
    {
      id: "v14-itbasics-32", variant: 14, subject: "itbasics", number: 32, topic: "Веб-технологии", disputed: true,
      disputedNote: "HTML <marquee> тегінде айналымдар (қайталану) санын LOOP атрибуты анықтайды, ал SCROLLDELAY — қозғалыс жылдамдығын (кадрлар арасындағы кідіріс) басқарады. Құжатта белгіленген «дұрыс» жауап B (SCROLLDELAY) осы мағынаға сәйкес келмейді, дұрысы — A (LOOP).",
      question: "Сырғымалы жолдың қайталау санын анықтайтын параметр",
      options: [
        { letter: "A", text: "LOOP" }, { letter: "B", text: "SCROLLDELAY" },
        { letter: "C", text: "DIRECTION" }, { letter: "D", text: "SCROLLAMOUNT" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "derived",
      explanation: "HTML-дегі <marquee> тегінің LOOP атрибуты жолдың неше рет қайталанып өтетінін анықтайды (A). SCROLLDELAY — жылдамдық/кідіріс, DIRECTION — бағыт, SCROLLAMOUNT — әр қадамдағы жылжу қашықтығы үшін жауап береді, қайталау саны үшін емес."
    },
    {
      id: "v14-itbasics-33", variant: 14, subject: "itbasics", number: 33, topic: "Python: списки", disputed: true,
      disputedNote: "Құжатта белгіленген «дұрыс» жауап («A»: [7,12,4]/[9,50,3]/[15,10,3]) my_list[1] орнына my_list[0]-ді көрсетеді — индекстеу қатесі бар. Толық трассировка бойынша дұрыс жауап B.",
      question: "Көрсетілген программаның нәтижесі",
      questionCode: "my_list = [[7,12,4],[9,50,3],[45,0,-1],[15,10,3]]\nprint(my_list[1])\nprint(my_list[2])\nprint(my_list[-1])",
      options: [
        { letter: "A", text: "", code: "[7, 12, 4]\n[9, 50, 3]\n[15, 10, 3]" },
        { letter: "B", text: "", code: "[9, 50, 3]\n[45, 0, -1]\n[15, 10, 3]" },
        { letter: "C", text: "", code: "[9, 50, 3]\n[9, 50, 3]\n[15, 10, 3]" },
        { letter: "D", text: "", code: "[7, 12, 4]\n[45, 0, -1]\n[15, 10, 3]" }
      ],
      correct: ["B"], userAnswer: [], keyConfidence: "derived",
      explanation: "my_list[1]=[9,50,3] (индекс 0-ден басталады, сондықтан [1] екінші элемент), my_list[2]=[45,0,-1], my_list[-1]=[15,10,3] (соңғы, төртінші элемент). Бұл дәл В нұсқасы. А нұсқасы my_list[0]-ді my_list[1] деп қате көрсетеді."
    },
    {
      id: "v14-itbasics-34", variant: 14, subject: "itbasics", number: 34, topic: "Безопасность",
      question: "Пропуск, жетон, кілт арқылы рұқсат беру тәсілі",
      options: [
        { letter: "A", text: "атрибутивтік" }, { letter: "B", text: "динамикалық" },
        { letter: "C", text: "биометриялық" }, { letter: "D", text: "статикалық" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "official",
      explanation: "Физикалық зат (пропуск, жетон, кілт) арқылы рұқсат беру әдісі — атрибутивтік (A) деп аталады, себебі құқық адамға емес, оның қолындағы «атрибутқа» байланысты."
    },
    {
      id: "v14-itbasics-35", variant: 14, subject: "itbasics", number: 35, topic: "Excel: интерфейс",
      question: "MS Excel программасында деректер базасы жазбасы бар форма терезеден терезеге жылжуға мүмкіндік беретін перне",
      options: [
        { letter: "A", text: "Ctrl" }, { letter: "B", text: "Tab" },
        { letter: "C", text: "Alt" }, { letter: "D", text: "Shift" }
      ],
      correct: ["B"], userAnswer: [], keyConfidence: "official",
      explanation: "Excel формасында бір өрістен екіншісіне ауысу үшін Tab (B) пернесі қолданылады."
    },
    {
      id: "v14-itbasics-36", variant: 14, subject: "itbasics", number: 36, topic: "Алгоритмы: сортировки",
      question: "Сұрыптаудың түрлері",
      options: [
        { letter: "A", text: "қарапайым, күрделі" }, { letter: "B", text: "өсу ретімен, күрделі" },
        { letter: "C", text: "кему ретімен, қарапайым" }, { letter: "D", text: "қарапайым, өсу ретімен" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "official",
      explanation: "Сұрыптау алгоритмдерінің жалпы жіктелуі бойынша олар күрделілігіне қарай қарапайым және күрделі (A) болып бөлінеді."
    },
    {
      id: "v14-itbasics-37", variant: 14, subject: "itbasics", number: 37, topic: "Алгоритмы: блок-схемы",
      question: "Блок-сызбадағы цикл қадамының белгіленуі («I = A, B, N» алты бұрышы, астында «Цикл денесі» тіктөртбұрышы)",
      options: [
        { letter: "A", text: "A" }, { letter: "B", text: "N" },
        { letter: "C", text: "I" }, { letter: "D", text: "B" }
      ],
      correct: ["B"], userAnswer: [], keyConfidence: "official",
      explanation: "Стандартты «I=A,B,N» цикл блок-сызбасында I — параметр, A — бастапқы мән, B — соңғы мән, N — қадам (шаг), яғни цикл қадамын дәл N белгілейді (B)."
    },
    {
      id: "v14-itbasics-38", variant: 14, subject: "itbasics", number: 38, topic: "Python: условия",
      question: "a=8; b=5; c=3 болса, экранға шығатын нәтиже",
      questionCode: "a = int(input())\nb = int(input())\nc = int(input())\nif a % 2 == 0:\n    if b % 2 == 1:\n        k = b / c\n    else:\n        k = a // c\nelse:\n    k = (a + b) % c\nprint(k)",
      options: [
        { letter: "A", text: "2,666666666666667" }, { letter: "B", text: "1,6" },
        { letter: "C", text: "1.6666666666666667" }, { letter: "D", text: "2" }
      ],
      correct: ["C"], userAnswer: [], keyConfidence: "official",
      explanation: "a=8 жұп → b=5 тақ → k=b/c=5/3=1.6666666666666667 (Python-да «/» әрқашан толық, бөлшекті нәтиже қайтарады) — дәл C нұсқасы."
    },
    {
      id: "v14-itbasics-39", variant: 14, subject: "itbasics", number: 39, topic: "Криптография",
      question: "Криптология ғылымы тұратын тармақтар саны",
      options: [
        { letter: "A", text: "5" }, { letter: "B", text: "2" },
        { letter: "C", text: "4" }, { letter: "D", text: "3" }
      ],
      correct: ["B"], userAnswer: [], keyConfidence: "official",
      explanation: "Криптология екі тармақтан тұрады: криптография (қорғау/шифрлау) және криптоанализ (шифрды бұзу) — B."
    },
    {
      id: "v14-itbasics-40", variant: 14, subject: "itbasics", number: 40, topic: "Единицы измерения информации",
      question: "Binary digit",
      options: [
        { letter: "A", text: "байт" }, { letter: "B", text: "мегабайт" },
        { letter: "C", text: "килобайт" }, { letter: "D", text: "бит" }
      ],
      correct: ["D"], userAnswer: [], keyConfidence: "official",
      explanation: "«Binary digit» сөзбе-сөз аудармасы «екілік цифр», яғни бит (D) — ақпараттың ең кіші өлшем бірлігі."
    },
    {
      id: "v14-itbasics-41", variant: 14, subject: "itbasics", number: 41, topic: "Python: строки",
      question: "Жолдағы кез келген орындағы символды көрсету үшін қолданылатын символ",
      questionCode: "s = 'информатика'\nprint(s[4])\nprint(len(s))\nprint(len(s) - 7)",
      options: [
        { letter: "A", text: "{}" }, { letter: "B", text: "()" },
        { letter: "C", text: "<>" }, { letter: "D", text: "[]" }
      ],
      correct: ["D"], userAnswer: [], keyConfidence: "official",
      explanation: "Python-да жолдың кез келген орнындағы символды алу үшін шаршы жақша [] қолданылады (D), мысалы s[4] сияқты — бұл дәл жоғарыдағы код үлгісінде де көрсетілген."
    },
    {
      id: "v14-itbasics-42", variant: 14, subject: "itbasics", number: 42, topic: "Python: строки",
      question: "Жолдың ұзындығын шығаратын функция",
      options: [
        { letter: "A", text: "len()" }, { letter: "B", text: "max()" },
        { letter: "C", text: "min()" }, { letter: "D", text: "print()" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "official",
      explanation: "Python-да жолдың (немесе кез келген тізбектің) ұзындығын қайтаратын функция — len() (A)."
    },
    {
      id: "v14-itbasics-43", variant: 14, subject: "itbasics", number: 43, topic: "Python: строки",
      question: "s='информатика' болғанда print(s[2:7]) нәтижесі",
      options: [
        { letter: "A", text: "нформ" }, { letter: "B", text: "форма" },
        { letter: "C", text: "форм" }, { letter: "D", text: "формат" }
      ],
      correct: ["B"], userAnswer: [], keyConfidence: "official",
      explanation: "s[2:7] — 2-ден 7-ге дейінгі (7 кірмейді) таңбалар: ф,о,р,м,а = «форма» (B)."
    },
    {
      id: "v14-itbasics-44", variant: 14, subject: "itbasics", number: 44, topic: "Python: строки",
      question: "s='информатика'. «к» әрпін шығару үшін қолданылатын код",
      options: [
        { letter: "A", text: "print(s[9])" }, { letter: "B", text: "print(s[8])" },
        { letter: "C", text: "print(s[7])" }, { letter: "D", text: "print(s[6])" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "official",
      explanation: "«информатика» жолында «к» әрпі 9-индексте орналасқан (и0,н1,ф2,о3,р4,м5,а6,т7,и8,к9,а10), сондықтан print(s[9]) (A)."
    },
    {
      id: "v14-itbasics-45", variant: 14, subject: "itbasics", number: 45, topic: "Python: строки",
      question: "Берілген программалық код нәтижесі: s='информатика'; print(s[2:7:2])",
      options: [
        { letter: "A", text: "фрк" }, { letter: "B", text: "орк" },
        { letter: "C", text: "фра" }, { letter: "D", text: "рма" }
      ],
      correct: ["C"], userAnswer: [], keyConfidence: "official",
      explanation: "s[2:7:2] — 2-ден 7-ге дейін әр екінші таңбаны алады: индекс 2(ф), 4(р), 6(а) — «фра» (C)."
    },
    {
      id: "v14-itbasics-46", variant: 14, subject: "itbasics", number: 46, topic: "Excel: ссылки",
      question: "Абсолютті және салыстырмалы сілтемелер: C1=B1+$A$2 формуласы C4 ұяшығына дейін көшірілген. C4 ұяшығының мәні",
      questionCode: "A1=10  B1=15\nA2=20  B2=20\nA3=30  B3=25\nA4=40  B4=30",
      options: [
        { letter: "A", text: "40" }, { letter: "B", text: "70" },
        { letter: "C", text: "45" }, { letter: "D", text: "50" }
      ],
      correct: ["D"], userAnswer: [], keyConfidence: "official",
      explanation: "C1=B1+$A$2 формуласын C4-ке дейін көшіргенде салыстырмалы B1 сілтемесі B4-ке ауысады (өйткені 3 жол төмен көшірілген), ал абсолютті $A$2 өзгеріссіз қалады: C4=B4+$A$2=30+20=50 (D)."
    },
    {
      id: "v14-itbasics-47", variant: 14, subject: "itbasics", number: 47, topic: "Excel: ссылки",
      question: "Абсолютті және салыстырмалы сілтемелер: C1=B1+$A$2 формуласы бойынша C1 ұяшығының мәні",
      questionCode: "A1=10  B1=15\nA2=20  B2=20\nA3=30  B3=25\nA4=40  B4=30",
      options: [
        { letter: "A", text: "30" }, { letter: "B", text: "50" },
        { letter: "C", text: "35" }, { letter: "D", text: "25" }
      ],
      correct: ["C"], userAnswer: [], keyConfidence: "official",
      explanation: "C1=B1+$A$2=15+20=35 (C) — B1 мен $A$2 тікелей кестеден алынған мәндер."
    },
    {
      id: "v14-itbasics-48", variant: 14, subject: "itbasics", number: 48, topic: "Excel: ссылки",
      question: "C1=B1+$A$2 формуласы C2 ұяшығына көшірілген. C2 ұяшығының формуласы қандай болады",
      options: [
        { letter: "A", text: "=B3+$A$2" }, { letter: "B", text: "=B2+$A2" },
        { letter: "C", text: "=B2+A2" }, { letter: "D", text: "=B2+$A$2" }
      ],
      correct: ["D"], userAnswer: [], keyConfidence: "official",
      explanation: "C1-ден C2-ге (1 жол төмен) көшіргенде салыстырмалы B1 сілтемесі B2-ге ауысады, ал абсолютті $A$2 өзгеріссіз қалады: =B2+$A$2 (D)."
    },
    {
      id: "v14-itbasics-49", variant: 14, subject: "itbasics", number: 49, topic: "Excel: ссылки",
      question: "C1=B1+$A$2 формуласы C3 ұяшығына көшірілген. C3 ұяшығының формуласы қандай болады",
      options: [
        { letter: "A", text: "=B3+$A$2" }, { letter: "B", text: "=B3+A3" },
        { letter: "C", text: "=B2+$A$2" }, { letter: "D", text: "=B3+$A$3" }
      ],
      correct: ["A"], userAnswer: [], keyConfidence: "official",
      explanation: "C1-ден C3-ке (2 жол төмен) көшіргенде салыстырмалы B1 сілтемесі B3-ке ауысады, абсолютті $A$2 өзгеріссіз қалады: =B3+$A$2 (A)."
    },
    {
      id: "v14-itbasics-50", variant: 14, subject: "itbasics", number: 50, topic: "Excel: ссылки",
      question: "=C1+C2+C3+C4 формуласының нәтижесі",
      questionCode: "A1=10  B1=15\nA2=20  B2=20\nA3=30  B3=25\nA4=40  B4=30\n(C1=B1+$A$2, C2=B2+$A$2, C3=B3+$A$2, C4=B4+$A$2)",
      options: [
        { letter: "A", text: "165" }, { letter: "B", text: "155" },
        { letter: "C", text: "140" }, { letter: "D", text: "170" }
      ],
      correct: ["D"], userAnswer: [], keyConfidence: "official",
      explanation: "C1=15+20=35, C2=20+20=40, C3=25+20=45, C4=30+20=50. Қосындысы: 35+40+45+50=170 (D)."
    }
  ]
};
