window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["v3-algo"] = {
  key: "v3-algo", variant: 3, subject: "algo", lang: "kz",
  title: "Вариант 3 · Алгоритмы (каз.)",
  questions: [
    {
      id: "v3-algo-1", variant: 3, subject: "algo", number: 1, topic: "Свойства алгоритмов",
      question: "Алгоритмдердің міндетті қасиеттерінің бірі",
      options: [
        { letter: "A", text: "түсіндірмелік" },
        { letter: "B", text: "анықталмағандық" },
        { letter: "C", text: "шексіздік" },
        { letter: "D", text: "дискреттілік" },
        { letter: "E", text: "үздіксіздік" }
      ],
      multi: false, correct: ["D"], userAnswer: ["A"], officialResult: 0, keyConfidence: "derived",
      explanation: "Обязательное свойство алгоритма — дискретность (D): алгоритм состоит из отдельных элементарных шагов. Бесконечность (C), неопределённость (B) и непрерывность (E) свойствами алгоритма не являются — наоборот, алгоритм должен быть конечным и определённым."
    },
    {
      id: "v3-algo-2", variant: 3, subject: "algo", number: 2, topic: "Операторы",
      question: "Көптік таңдау құрылымы",
      options: [
        { letter: "A", text: "if" },
        { letter: "B", text: "do-while" },
        { letter: "C", text: "while-do" },
        { letter: "D", text: "if-else" },
        { letter: "E", text: "switch" }
      ],
      multi: false, correct: ["E"], userAnswer: ["E"], officialResult: 1, keyConfidence: "official",
      explanation: "Оператор множественного выбора (ветвление по нескольким значениям) — switch. if/if-else реализуют одиночное/двойное ветвление, do-while и while-do — циклы."
    },
    {
      id: "v3-algo-3", variant: 3, subject: "algo", number: 3, topic: "Типы данных",
      question: "C++ тілінде бағдарламаның негізгі бөлігі келтірілген. Нәтижесінде экранға шығатын жауап",
      questionCode: "double x=3.5;\nint y;\nif(x==0) y=7*pow(x,3);\nelse y=2*pow(x,3);\ncout<<y;",
      options: [
        { letter: "A", text: "0" },
        { letter: "B", text: "85.75" },
        { letter: "C", text: "85" },
        { letter: "D", text: "75" },
        { letter: "E", text: "54" }
      ],
      multi: false, correct: ["C"], userAnswer: ["B"], officialResult: 0, keyConfidence: "derived",
      explanation: "x=3.5≠0, поэтому выполняется ветка else: y = 2·pow(3.5,3) = 2·42.875 = 85.75. Но переменная y объявлена как int, поэтому дробная часть отбрасывается: y = 85. На экран выводится 85 (вариант C), а не 85.75 — это типичная ловушка на приведение типов."
    },
    {
      id: "v3-algo-4", variant: 3, subject: "algo", number: 4, topic: "Операторы",
      question: "Префиксті декремент дұрыс жазылуы",
      options: [
        { letter: "A", text: "a--" },
        { letter: "B", text: "-=a" },
        { letter: "C", text: "a-=" },
        { letter: "D", text: "--a" },
        { letter: "E", text: "+=a" }
      ],
      multi: false, correct: ["D"], userAnswer: ["D"], officialResult: 1, keyConfidence: "official",
      explanation: "Префиксный декремент записывается как --a (сначала уменьшает переменную, затем использует её значение). a-- — это постфиксный декремент."
    },
    {
      id: "v3-algo-5", variant: 3, subject: "algo", number: 5, topic: "Операторы",
      question: "Постфиксті декремент дұрыс жазылуы",
      options: [
        { letter: "A", text: "-=a" },
        { letter: "B", text: "--a" },
        { letter: "C", text: "a++" },
        { letter: "D", text: "+=a" },
        { letter: "E", text: "a--" }
      ],
      multi: false, correct: ["E"], userAnswer: ["E"], officialResult: 1, keyConfidence: "official",
      explanation: "Постфиксный декремент — a-- (сначала используется текущее значение, затем переменная уменьшается). --a — префиксный декремент, a++ — постфиксный инкремент."
    },
    {
      id: "v3-algo-6", variant: 3, subject: "algo", number: 6, topic: "Операторы",
      question: "ЖӘНЕ логикалық операторының дұрыс жазылуы",
      options: [
        { letter: "A", text: "a||b" },
        { letter: "B", text: "a&&b" },
        { letter: "C", text: "a!" },
        { letter: "D", text: "a//b" },
        { letter: "E", text: "a<<b" }
      ],
      multi: false, correct: ["B"], userAnswer: ["B"], officialResult: 1, keyConfidence: "official",
      explanation: "Логическое И (AND) в C++ — оператор &&. || — это ИЛИ (OR), ! — логическое отрицание, << — сдвиг/вывод в поток."
    },
    {
      id: "v3-algo-7", variant: 3, subject: "algo", number: 7, topic: "Строки",
      question: "S жолы бос болғанда true, ал бос болмағанда false қайтаратын жолдардағы әдіс",
      options: [
        { letter: "A", text: "S.substr()" },
        { letter: "B", text: "S.find()" },
        { letter: "C", text: "S.insert()" },
        { letter: "D", text: "S.size()" },
        { letter: "E", text: "S.empty()" }
      ],
      multi: false, correct: ["E"], userAnswer: ["E"], officialResult: 1, keyConfidence: "official",
      explanation: "Метод empty() возвращает true, если строка пустая, и false в противном случае. size() возвращает длину, substr() — подстроку, find() — позицию, insert() — вставку."
    },
    {
      id: "v3-algo-8", variant: 3, subject: "algo", number: 8, topic: "Ветвление",
      question: "Тармақталған алгоритмдік құрылымы нәтижесінде жауапқа шығатын өрнек",
      questionCode: "#include <iostream>\nusing namespace std;\nint main()\n{int i = 25;\nif (i > 15) cout << \"i-дің мәні 15 -тен үлкен\";\nelse cout << \"i-дің мәні 15-тен кіші\";\nreturn 0;",
      options: [
        { letter: "A", text: "i-дің мәні 15 -тен үлкен" },
        { letter: "B", text: "i-дің мәні 15-ке жуық" },
        { letter: "C", text: "i-дің мәні 15-ке тең" },
        { letter: "D", text: "i-дің мәні белгісіз" },
        { letter: "E", text: "i-дің мәні 15-тен кіші" }
      ],
      multi: false, correct: ["A"], userAnswer: ["A"], officialResult: 1, keyConfidence: "official",
      explanation: "i=25, условие i>15 истинно (25>15), поэтому выполняется ветка if и выводится «i-дің мәні 15-тен үлкен» (значение i больше 15) — вариант A."
    },
    {
      id: "v3-algo-9", variant: 3, subject: "algo", number: 9, topic: "Сортировки",
      question: "Массивтерді сыртқы сұрыптау алгоритмі",
      options: [
        { letter: "A", text: "біріктіріп сұрыптау" },
        { letter: "B", text: "қосып сұрыптау" },
        { letter: "C", text: "шейкерлік сұрыптау" },
        { letter: "D", text: "көпіршікті сұрыптау" },
        { letter: "E", text: "кірістіріп сұрыптау" }
      ],
      multi: false, correct: ["A"], userAnswer: ["A"], officialResult: 1, keyConfidence: "official",
      explanation: "Внешняя сортировка (когда данные не помещаются целиком в оперативную память) выполняется сортировкой слиянием (біріктіріп сұрыптау / merge sort). Шейкерная, пузырьковая и вставками — внутренние сортировки."
    },
    {
      id: "v3-algo-10", variant: 3, subject: "algo", number: 10, topic: "Функции",
      question: "int func() функциясы қайтарады",
      options: [
        { letter: "A", text: "символ деректі" },
        { letter: "B", text: "мәтін деректі" },
        { letter: "C", text: "бүтін деректі" },
        { letter: "D", text: "бөлшек деректі" },
        { letter: "E", text: "логикалық деректі" }
      ],
      multi: false, correct: ["C"], userAnswer: ["C"], officialResult: 1, keyConfidence: "official",
      explanation: "Функция с типом int возвращает целочисленные данные (бүтін). char — символ, string — текст, float/double — дробное, bool — логическое значение."
    },
    {
      id: "v3-algo-11", variant: 3, subject: "algo", number: 11, topic: "Рекурсия",
      question: "f(n)=n! функцияларының дұрыс берілуі",
      options: [
        { letter: "A", text: "f(0)=1, f(n)=f(n - 1)+1" },
        { letter: "B", text: "f(0)=0, f(n)=f(n - 1)+2" },
        { letter: "C", text: "f(0)=1, f(n)=2n*f(n - 1)" },
        { letter: "D", text: "f(0)=1, f(n)=n*f(n - 1)" },
        { letter: "E", text: "f(0)=0, f(n)=f(n - 1)+1" }
      ],
      multi: false, correct: ["D"], userAnswer: ["D"], officialResult: 1, keyConfidence: "official",
      explanation: "Факториал: n! = n·(n-1)!, причём 0!=1. Это в точности вариант D: f(0)=1, f(n)=n·f(n-1). Остальные варианты дают n+1, 2n, 2ⁿ·n! и n соответственно."
    },
    {
      id: "v3-algo-12", variant: 3, subject: "algo", number: 12, topic: "Ввод-вывод",
      question: "printf() функциясының дұрыс жазылуы",
      options: [
        { letter: "A", text: "int a; printf(\"%c\", a);" },
        { letter: "B", text: "int a; printf(\"a=%s\", a);" },
        { letter: "C", text: "int a; printf(\"%s\", a);" },
        { letter: "D", text: "int a; printf(\"%d\", a);" },
        { letter: "E", text: "int a; printf(\"a=&i\", a);" }
      ],
      multi: false, correct: ["D"], userAnswer: ["B"], officialResult: 0, keyConfidence: "derived",
      explanation: "Для вывода целого числа (int a) используется спецификатор %d — вариант D. %c выводит символ по коду, %s ожидает строку (для int это ошибка), а «a=&i» вообще не является спецификатором формата."
    },
    {
      id: "v3-algo-13", variant: 3, subject: "algo", number: 13, topic: "Поиск",
      question: "Массивтегі іздеу алгоритімінің классификациясы",
      options: [
        { letter: "A", text: "шелл іздеуі" },
        { letter: "B", text: "таңдап іздеу" },
        { letter: "C", text: "кірістіріп іздеу" },
        { letter: "D", text: "екілік (бинарлы) іздеу" },
        { letter: "E", text: "квадраттық іздеу" }
      ],
      multi: false, correct: ["D"], userAnswer: ["D"], officialResult: 1, keyConfidence: "official",
      explanation: "Реальный алгоритм поиска в массиве — двоичный (бинарный) поиск (D). «Шелл», «выбором», «вставками», «квадратичный» видами поиска не являются (часть из них — сортировки)."
    },
    {
      id: "v3-algo-14", variant: 3, subject: "algo", number: 14, topic: "Сортировки",
      question: "2 3 17 7 8 9 1 4 6 9 2 3 1 18 тізбегі үшін табиғи біріктіріп сұрыптаудың бірінші этапы",
      options: [
        { letter: "A", text: "b=2 3 17 1 4 6 9 1 18   c=7 8 9 2 3   a= 2 3 7 8 9 17 1 2 3 4 6 9 1 18" },
        { letter: "B", text: "b=21 2 3 3 4 6 7 8 9 9 17   c=18 1   a= 1 1 2 2 3 3 4 6 7 8 9 9 17 18" },
        { letter: "C", text: "b=1 2 2 3 3 4 6 7 8 9 9 17   c=1 18   a= 1 18 2 2 3 3 4 6 7 8 9 9 17 1" },
        { letter: "D", text: "b=2 3 17 7 4 6 9 1 18   c= 1 8 9 2 3   a= 1 2 2 3 3 4 6 7 8 9 9 17 1 18" },
        { letter: "E", text: "b=2 3 7 8 9 17 1 18   c=1 2 3 4 6 9   a= 2 3 7 8 9 17 1 2 3 4 6 9 1 18" }
      ],
      multi: false, correct: ["A"], userAnswer: ["A"], officialResult: 1, keyConfidence: "official",
      explanation: "Естественная сортировка слиянием сначала выделяет уже упорядоченные серии: [2 3 17], [7 8 9], [1 4 6 9], [2 3], [1 18]. Их распределяют в b (серии 1,3,5) и c (серии 2,4), затем сливают попарно: b=2 3 17|1 4 6 9|1 18, c=7 8 9|2 3, a=2 3 7 8 9 17|1 2 3 4 6 9|1 18 — вариант A."
    },
    {
      id: "v3-algo-15", variant: 3, subject: "algo", number: 15, topic: "Сортировки",
      question: "(6, 3, 2, 8, 1, 7, 4, 5) бастапқы тізбек үшін көпіршік әдісімен сұрыптау алгоритмінің бірінші қадамының нәтижесінде алынатын тізбек",
      options: [
        { letter: "A", text: "(1, 2, 3, 8, 6, 7, 4, 5)" },
        { letter: "B", text: "(3, 2, 8, 6, 7, 4, 5, 1)" },
        { letter: "C", text: "(3, 2, 6, 1, 7, 4, 5, 8)" },
        { letter: "D", text: "(2, 6, 3, 1, 4, 8, 5, 7)" },
        { letter: "E", text: "(6, 3, 2, 8, 1, 7, 4, 5)" }
      ],
      multi: false, correct: ["C"], userAnswer: ["C"], officialResult: 1, keyConfidence: "official",
      explanation: "Первый проход пузырьковой сортировки сравнивает соседние элементы и «выталкивает» наибольший (8) в конец: 6 3 2 8 1 7 4 5 → 3 2 6 1 7 4 5 8 — вариант C."
    },
    {
      id: "v3-algo-16", variant: 3, subject: "algo", number: 16, topic: "Сложность алгоритмов",
      question: "Көпіршікті сұрыптау алгоритмінің уақыттық күрделілігі",
      options: [
        { letter: "A", text: "O(n³)" },
        { letter: "B", text: "O(n log n)" },
        { letter: "C", text: "O(n²)" },
        { letter: "D", text: "O(1)" },
        { letter: "E", text: "O(log n)" }
      ],
      multi: false, correct: ["C"], userAnswer: ["E"], officialResult: 0, keyConfidence: "derived",
      explanation: "Пузырьковая сортировка имеет временную сложность O(n²) — два вложенных цикла по всем элементам (вариант C). O(log n) характерно для двоичного поиска, а не для сортировки."
    },
    {
      id: "v3-algo-17", variant: 3, subject: "algo", number: 17, topic: "Сложность алгоритмов",
      question: "Алгоритм күрделілігінің өсу ретімен орналасқан нұсқалары",
      options: [
        { letter: "A", text: "O(N²), O(N), O(log N)" },
        { letter: "B", text: "O(1), O(N), O(N³)" },
        { letter: "C", text: "O(2N), O(N), O(1)" },
        { letter: "D", text: "O(N), O(1), O(N log N)" },
        { letter: "E", text: "O(N²), O(log N), O(N³)" }
      ],
      multi: false, correct: ["B"], userAnswer: ["B"], officialResult: 1, keyConfidence: "official",
      explanation: "По возрастанию сложности: O(1) < O(N) < O(N³). Только вариант B расположен строго по возрастанию; в остальных порядок нарушен."
    },
    {
      id: "v3-algo-18", variant: 3, subject: "algo", number: 18, topic: "Сложность алгоритмов",
      question: "O(log n) уақытта жұмыс істейтін алгоритм",
      options: [
        { letter: "A", text: "екі матрицаны көбейту алгоритмі" },
        { letter: "B", text: "сызықты іздеу алгоритмі" },
        { letter: "C", text: "көпіршікті сұрыптау алгоритмі" },
        { letter: "D", text: "бүтін санның тақ-жұптығын табу алгоритмі" },
        { letter: "E", text: "екілік іздеу алгоритмі" }
      ],
      multi: false, correct: ["E"], userAnswer: ["C"], officialResult: 0, keyConfidence: "derived",
      explanation: "За O(log n) работает двоичный (бинарный) поиск (E): на каждом шаге область поиска уменьшается вдвое. Умножение матриц — O(n³), линейный поиск — O(n), пузырьковая сортировка — O(n²), проверка чётности — O(1)."
    },
    {
      id: "v3-algo-19", variant: 3, subject: "algo", number: 19, topic: "Связные списки",
      question: "Бір байланыстырылған тізім анықтамасы",
      options: [
        { letter: "A", text: "бұл FILO принципі бойынша жұмыс істейтін мәліметтер құрылымы" },
        { letter: "B", text: "бұл дерек пен келесі және алдыңғы түйінге көрсеткіші бар мәліметтер құрылымы" },
        { letter: "C", text: "бұл LILO принципі бойынша жұмыс істейтін мәліметтер құрылымы" },
        { letter: "D", text: "бұл LIFO принципі бойынша жұмыс істейтін мәліметтер құрылымы" },
        { letter: "E", text: "бұл дерек пен келесі түйінге көрсеткіші бар мәліметтер құрылымы" }
      ],
      multi: false, correct: ["E"], userAnswer: ["A"], officialResult: 0, keyConfidence: "derived",
      explanation: "Односвязный список — структура, где каждый узел содержит данные и указатель на СЛЕДУЮЩИЙ узел (E). Указатель и на следующий, и на предыдущий (B) — это двусвязный список; FILO/LIFO — принцип работы стека."
    },
    {
      id: "v3-algo-20", variant: 3, subject: "algo", number: 20, topic: "Динамическая память",
      question: "C++ тілінде динамикалық бүтін типті массивті жариялаудың дұрыс жазылуы",
      options: [
        { letter: "A", text: "int* a = new int[n]" },
        { letter: "B", text: "int* a = new int*[n]" },
        { letter: "C", text: "int a = new int[n]" },
        { letter: "D", text: "int a[n]" },
        { letter: "E", text: "int* a = new int(n)" }
      ],
      multi: false, correct: ["A"], userAnswer: ["C"], officialResult: 0, keyConfidence: "derived",
      explanation: "Динамический целочисленный массив: int* a = new int[n]; (A) — выражение new int[n] возвращает указатель int*. Вариант C (int a=…) — несоответствие типов; int*[n] — массив указателей; int a[n] — статический массив; new int(n) — одно число, а не массив."
    },
    {
      id: "v3-algo-21", variant: 3, subject: "algo", number: 21, topic: "Стек",
      question: "Стек әдістеріне жатпайтын функция",
      options: [
        { letter: "A", text: "pop()" },
        { letter: "B", text: "size()" },
        { letter: "C", text: "push()" },
        { letter: "D", text: "clear" },
        { letter: "E", text: "contains()" }
      ],
      multi: false, correct: ["E"], userAnswer: ["E"], officialResult: 1, keyConfidence: "official",
      explanation: "К операциям стека относятся push (добавить на вершину), pop (снять с вершины), size, clear. Функция contains() (поиск элемента) операцией стека не является — вариант E."
    },
    {
      id: "v3-algo-22", variant: 3, subject: "algo", number: 22, topic: "Хеширование",
      question: "Хеш кестесінің анықтамасы",
      options: [
        { letter: "A", text: "хеш кестесі – типтері бірдей элементтерден тұратын деректер құрылымы" },
        { letter: "B", text: "хеш кестесі – әр-түрлі типті реттелген деректердің құрылымы" },
        { letter: "C", text: "хеш кестесі – FIFO принципі бойынша жұмыс істейтін деректер құрылымы" },
        { letter: "D", text: "хеш кестесі – өте жылдам іздеу мен қоюды қамтамасыздандыратын деректер құрылымы" },
        { letter: "E", text: "хеш кестесі – бір-бірімен байланысқан деректер құрылымы" }
      ],
      multi: false, correct: ["D"], userAnswer: ["D"], officialResult: 1, keyConfidence: "official",
      explanation: "Хеш-таблица — структура данных, обеспечивающая очень быстрый (в среднем O(1)) поиск и вставку по ключу — вариант D. FIFO — это очередь, а не хеш-таблица."
    },
    {
      id: "v3-algo-23", variant: 3, subject: "algo", number: 23, topic: "Хеширование",
      question: "Толтырылған массив ұяшығына кілтті хештеудің атауы",
      options: [
        { letter: "A", text: "бірігу" },
        { letter: "B", text: "коллизия" },
        { letter: "C", text: "ажырау" },
        { letter: "D", text: "қиылысу" },
        { letter: "E", text: "бөліну" }
      ],
      multi: false, correct: ["B"], userAnswer: ["B"], officialResult: 1, keyConfidence: "official",
      explanation: "Ситуация, когда хеш-функция отображает ключ в уже занятую ячейку, называется коллизией (B)."
    },
    {
      id: "v3-algo-24", variant: 3, subject: "algo", number: 24, topic: "Хеширование",
      question: "Хеш кестесінде коллизиядан құтылу әдісі",
      options: [
        { letter: "A", text: "ашық адресациялау әдісі" },
        { letter: "B", text: "трапеция әдісі" },
        { letter: "C", text: "орамдар әдісі" },
        { letter: "D", text: "қадамдық бөлшектеу әдісі" },
        { letter: "E", text: "квадрат ортасы әдісі" }
      ],
      multi: false, correct: ["A"], userAnswer: ["D"], officialResult: 0, keyConfidence: "derived",
      explanation: "Коллизии разрешают методом открытой адресации (ашық адресациялау, A) или методом цепочек. «Метод середины квадрата» — это способ вычисления хеша, а не разрешения коллизий; остальные варианты вымышленные."
    },
    {
      id: "v3-algo-25", variant: 3, subject: "algo", number: 25, topic: "Деревья",
      question: "AVL ағашында жою операциясының орындалу уақыты",
      options: [
        { letter: "A", text: "O(n³)" },
        { letter: "B", text: "O(n²)" },
        { letter: "C", text: "O(nlogn)" },
        { letter: "D", text: "O(logn)" },
        { letter: "E", text: "O(1)" }
      ],
      multi: false, correct: ["D"], userAnswer: ["B"], officialResult: 0, keyConfidence: "derived",
      explanation: "AVL-дерево сбалансировано, его высота — O(log n), поэтому операция удаления выполняется за O(log n) — вариант D."
    },
    {
      id: "v3-algo-26", variant: 3, subject: "algo", number: 26, topic: "Деревья",
      question: "20 түйіні бар толық екілік ағаш бар. тамыры 0 деңгейінде орналасқан болса 4 деңгейіндегі түйін саны",
      options: [
        { letter: "A", text: "0" },
        { letter: "B", text: "8" },
        { letter: "C", text: "1" },
        { letter: "D", text: "4" },
        { letter: "E", text: "5" }
      ],
      multi: false, correct: ["E"], userAnswer: ["B"], officialResult: 0, keyConfidence: "derived",
      explanation: "В полном двоичном дереве на уровнях 0–3 помещается 1+2+4+8 = 15 узлов. Оставшиеся 20−15 = 5 узлов находятся на уровне 4 — вариант E."
    },
    {
      id: "v3-algo-27", variant: 3, subject: "algo", number: 27, topic: "Деревья",
      question: "Екілік ағаштағы іздеу қызылды-қаралы ағаш қасиеттерінің бірі",
      options: [
        { letter: "A", text: "түйіннің сол ішкі ағашының кілтінің мәні түйіннің кілтінің мәнінен үлкен болса" },
        { letter: "B", text: "барлық қызыл-қара ағаштың жапырақтары бір деңгейде орналасса" },
        { letter: "C", text: "түйіннің сол ішкі ағашының кілтінің мәні түйіннің кілтінің мәнінен кіші болса" },
        { letter: "D", text: "егер төбе қызыл, онда оның екі мұрагері де қара" },
        { letter: "E", text: "әрбір түйіннің ең болмағанда бір ішкі ағашы бос" }
      ],
      multi: false, correct: ["D"], userAnswer: ["B"], officialResult: 0, keyConfidence: "derived",
      explanation: "Свойство красно-чёрного дерева: если узел красный, то оба его потомка — чёрные (D), то есть двух красных узлов подряд быть не может. Расположение всех листьев на одном уровне (B) для КЧ-дерева не требуется, а вариант C — это свойство обычного двоичного дерева поиска."
    },
    {
      id: "v3-algo-28", variant: 3, subject: "algo", number: 28, topic: "Графы",
      question: "Графтың түйінінің атауы",
      options: [
        { letter: "A", text: "мекенжай" },
        { letter: "B", text: "қабырға" },
        { letter: "C", text: "төбе" },
        { letter: "D", text: "нүкте" },
        { letter: "E", text: "жол" }
      ],
      multi: false, correct: ["C"], userAnswer: ["C"], officialResult: 1, keyConfidence: "official",
      explanation: "Узел графа называется вершиной (төбе, C). Қабырға — это ребро, жол — путь."
    },
    {
      id: "v3-algo-29", variant: 3, subject: "algo", number: 29, topic: "Графы",
      question: "Барлық төбелік жұптар үшін ең қысқа жолдарды құру есебінде ең қысқа жол ізделеді",
      options: [
        { letter: "A", text: "бастапқы төбеден бастап бірнеше қабырға қашықтықтағы басқа шыңдарға дейін" },
        { letter: "B", text: "әр төбеден барлық басқа төбелерге дейін" },
        { letter: "C", text: "бастапқы төбеден бастап бір қабырға қашықтықтағы басқа шыңдарға дейін" },
        { letter: "D", text: "бастапқы төбеден басқа төбелерге дейін" },
        { letter: "E", text: "әр төбеден бастапқы төбеге дейін" }
      ],
      multi: false, correct: ["B"], userAnswer: ["A"], officialResult: 0, keyConfidence: "derived",
      explanation: "Задача о кратчайших путях между всеми парами вершин ищет путь от КАЖДОЙ вершины до ВСЕХ остальных (B). Варианты с «начальной вершиной» описывают задачу с одним источником, а не для всех пар."
    },
    {
      id: "v3-algo-30", variant: 3, subject: "algo", number: 30, topic: "Графы",
      question: "Егер байланыспаған графтың төбелерінің әрқайсысы басқаларымен қабырғалармен жалғанған болса онда ол граф",
      options: [
        { letter: "A", text: "толық емес граф деп аталады" },
        { letter: "B", text: "гиперграф деп аталады" },
        { letter: "C", text: "шынжыр(тізбек) деп аталады" },
        { letter: "D", text: "толық граф деп аталады" },
        { letter: "E", text: "мультиграф деп аталады" }
      ],
      multi: false, correct: ["D"], userAnswer: ["D"], officialResult: 1, keyConfidence: "official",
      explanation: "Граф, в котором каждая вершина соединена рёбрами со всеми остальными, называется полным графом (толық граф, D)."
    }
  ]
};
