window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["v5-algo"] = {
  key: "v5-algo", variant: 5, subject: "algo", lang: "kz",
  title: "Вариант 5 · Алгоритмы (каз.)",
  questions: [
    {
      id: "v5-algo-1", variant: 5, subject: "algo", number: 1, topic: "Деревья",
      question: "Қызыл-қара теңестірілген ағаштың жапырақтарының (NIL) түсі",
      options: [
        { letter: "A", text: "күрең" },
        { letter: "B", text: "ақшыл" },
        { letter: "C", text: "қызыл" },
        { letter: "D", text: "қара" },
        { letter: "E", text: "сары" }
      ],
      multi: false, correct: ["D"], userAnswer: ["D"], officialResult: 1, keyConfidence: "official",
      explanation: "В красно-чёрном дереве все листья (фиктивные узлы NIL) по правилам всегда чёрные (қара, D). Это одно из базовых свойств: корень чёрный, а листья-NIL считаются чёрными."
    },
    {
      id: "v5-algo-2", variant: 5, subject: "algo", number: 2, topic: "Хеширование",
      question: "T[0..u−1] массивіндегі әр ұяшық U жиынындағы нақты бір кілтке сәйкес келу, key нөміріндегі ұяшықта осы кілтпен ассоциация болатын мәліметтерге көрсеткіш болады",
      options: [
        { letter: "A", text: "адрестелмеген кесте" },
        { letter: "B", text: "мәліметтері жоқ кестесі" },
        { letter: "C", text: "тікелей адрестелген кесте" },
        { letter: "D", text: "адресі жоқ кесте" },
        { letter: "E", text: "хеш-кесте" }
      ],
      multi: false, correct: ["C"], userAnswer: ["E"], officialResult: 0, keyConfidence: "derived",
      explanation: "Массив T[0..u−1], где каждый ключ k напрямую соответствует ячейке с номером k, — это таблица с прямой адресацией (тікелей адрестелген кесте, C). Хеш-таблица (E) использует хеш-функцию и допускает коллизии, а здесь соответствие «ключ → ячейка» взаимно-однозначное, без хеширования."
    },
    {
      id: "v5-algo-3", variant: 5, subject: "algo", number: 3, topic: "Сложность",
      question: "Егер алгоритм кірістегі деректерді теріп өтіп, содан кейін тағы да әр қайсысын жеке қарап шықса, бұл алгоритмнің өнімділігінің белгісі болады",
      options: [
        { letter: "A", text: "O(5)" },
        { letter: "B", text: "O(n²)" },
        { letter: "C", text: "O(n log n)" },
        { letter: "D", text: "O(5!)" },
        { letter: "E", text: "O(log n)" }
      ],
      multi: false, correct: ["B"], userAnswer: ["B"], officialResult: 1, keyConfidence: "official",
      explanation: "Для каждого из n элементов алгоритм ещё раз перебирает все элементы — это вложенный проход n·n, то есть O(n²) (B)."
    },
    {
      id: "v5-algo-4", variant: 5, subject: "algo", number: 4, topic: "Язык C/C++",
      question: "C++ тіліндегі логикалық амалдар орындайтын операторлардың белгілері",
      options: [
        { letter: "A", text: "#, &" },
        { letter: "B", text: "$, %" },
        { letter: "C", text: "@, #" },
        { letter: "D", text: "!, ?" },
        { letter: "E", text: "&, ||" }
      ],
      multi: false, correct: ["E"], userAnswer: ["D"], officialResult: 0, keyConfidence: "derived",
      explanation: "Логические операции в C++ обозначаются && (И), || (ИЛИ), ! (НЕ). Среди пар единственный явно логический символ — || (в варианте E). Пара «!, ?» (D) неверна: ! — логическое НЕ, но ? — это тернарный оператор, а не логическая операция. Примечание: логическое «И» правильнее писать как &&, а одиночный & — побитовая операция."
    },
    {
      id: "v5-algo-5", variant: 5, subject: "algo", number: 5, topic: "Сортировки",
      question: "Толық бинарлық ағаштан тұратын объект-массив (қолданатын сұрыптау)",
      options: [
        { letter: "A", text: "үйінді сұрыптау" },
        { letter: "B", text: "шаршылдық сұрыптау (squaresort)" },
        { letter: "C", text: "көпіршікті сұрыптау (bubblesort)" },
        { letter: "D", text: "жылдам сұрыптау (quicksort)" },
        { letter: "E", text: "шелл сұрыптау (Shellsort)" }
      ],
      multi: false, correct: ["A"], userAnswer: ["D"], officialResult: 0, keyConfidence: "derived",
      explanation: "Объект-массив, представляющий собой полное бинарное дерево, — это куча (heap), которую использует пирамидальная сортировка (үйінді сұрыптау / heapsort, A). Быстрая сортировка (quicksort) кучи не использует."
    },
    {
      id: "v5-algo-6", variant: 5, subject: "algo", number: 6, topic: "Сортировки",
      question: "Пирамидалық сұрыптауда ағашты қолданбай сұрыптауды ұсынатын алгоритм",
      options: [
        { letter: "A", text: "прима" },
        { letter: "B", text: "дейкстр" },
        { letter: "C", text: "шелл" },
        { letter: "D", text: "крускал" },
        { letter: "E", text: "флойд" }
      ],
      multi: false, correct: ["E"], userAnswer: ["A"], officialResult: 0, keyConfidence: "derived",
      explanation: "Приём построения кучи и пирамидальной сортировки без явного дерева (куча хранится в массиве) предложил Роберт Флойд (E) — метод «просеивания» build-heap. Прим, Дейкстра, Крускал — это графовые алгоритмы, к пирамидальной сортировке они отношения не имеют."
    },
    {
      id: "v5-algo-7", variant: 5, subject: "algo", number: 7, topic: "Рекурсия",
      question: "Фибоначчи сандарын есептеу функциясында рекурсияның әр деңгейін шақыруды екі есе өсіреді, сондықтан Фибоначчидің n-санын есептеу 2ⁿ болады. Есептеу әдісінде бұл күрделілік аталады",
      options: [
        { letter: "A", text: "квадраттық" },
        { letter: "B", text: "сызықтық-логарифмдық" },
        { letter: "C", text: "логарифмдық" },
        { letter: "D", text: "сызықтық" },
        { letter: "E", text: "экспоненттік" }
      ],
      multi: false, correct: ["E"], userAnswer: ["E"], officialResult: 1, keyConfidence: "official",
      explanation: "Наивная рекурсия для чисел Фибоначчи на каждом уровне удваивает число вызовов, поэтому их всего порядка 2ⁿ — это экспоненциальная сложность (экспоненттік, E)."
    },
    {
      id: "v5-algo-8", variant: 5, subject: "algo", number: 8, topic: "Структуры данных",
      question: "Орындалатын функцияларды және кезекте тұрған өзге де операциялардың орындалуын басқару үшін қолданатын программаның жады аймағы. Байланысқан тізім, яғни динамикалық тізбектер қатарына жатады",
      options: [
        { letter: "A", text: "дек" },
        { letter: "B", text: "сөздік" },
        { letter: "C", text: "сызықты тізім" },
        { letter: "D", text: "ағаш" },
        { letter: "E", text: "стек" }
      ],
      multi: false, correct: ["E"], userAnswer: ["C"], officialResult: 0, keyConfidence: "derived",
      explanation: "Область памяти, управляющая выполнением функций и вызовов (по принципу «последним вызван — первым завершён»), — это стек вызовов (стек, E). Он работает по LIFO и может быть реализован связным списком."
    },
    {
      id: "v5-algo-9", variant: 5, subject: "algo", number: 9, topic: "Структуры данных",
      question: "Дек немесе екіжолды кезекті ұйымдастырудағы қолданылатын тізімнің тәсілі",
      options: [
        { letter: "A", text: "бірбайланысты сақина тізімімен" },
        { letter: "B", text: "сызықты бірбайланысты тізімімен" },
        { letter: "C", text: "сызықты көпбайланысты тізімімен" },
        { letter: "D", text: "сызықты екібайланысты тізімімен" },
        { letter: "E", text: "екібайланысты сақина" }
      ],
      multi: false, correct: ["E"], userAnswer: ["D"], officialResult: 0, keyConfidence: "derived",
      explanation: "Дек (двусторонняя очередь) требует эффективной вставки/удаления с обоих концов, поэтому его удобно организовать двусвязным кольцевым списком (екібайланысты сақина, E). У каждого узла есть ссылки и вперёд, и назад, а кольцо замыкает концы."
    },
    {
      id: "v5-algo-10", variant: 5, subject: "algo", number: 10, topic: "Сложность",
      question: "Алгоритмнің сызықты-логарифмдық күрделілігі",
      options: [
        { letter: "A", text: "O(n!)" },
        { letter: "B", text: "O(n³)" },
        { letter: "C", text: "O(1)" },
        { letter: "D", text: "O(5ⁿ)" },
        { letter: "E", text: "O(n log n)" }
      ],
      multi: false, correct: ["E"], userAnswer: ["E"], officialResult: 1, keyConfidence: "official",
      explanation: "Линейно-логарифмическая сложность — это O(n·log n) (E). Такую сложность имеют, например, быстрая сортировка (в среднем) и сортировка слиянием."
    },
    {
      id: "v5-algo-11", variant: 5, subject: "algo", number: 11, topic: "Сортировки",
      question: "Кірістіру сұрыптауының модификацияланған түрі. h арақашықтықта орналасқан элементтер ішкі массивке кірістіріледі, әр ішкі массивте сұрыптау жүргізіледі",
      options: [
        { letter: "A", text: "шаршылық сұрыптау" },
        { letter: "B", text: "разрядты сұрыптау" },
        { letter: "C", text: "жылдам сұрыптау" },
        { letter: "D", text: "салыстыру арқылы сұрыптау" },
        { letter: "E", text: "шелл сұрыптауы" }
      ],
      multi: false, correct: ["E"], userAnswer: ["A"], officialResult: 0, keyConfidence: "derived",
      explanation: "Модифицированная сортировка вставками, где сначала упорядочиваются элементы на расстоянии h (в подмассивах), а затем шаг уменьшают, — это сортировка Шелла (шелл сұрыптауы, E)."
    },
    {
      id: "v5-algo-12", variant: 5, subject: "algo", number: 12, topic: "Графы",
      question: "Қабырғалар арқылы байланысқан төбелердің кез келген тізбегі",
      options: [
        { letter: "A", text: "жол" },
        { letter: "B", text: "ілмек" },
        { letter: "C", text: "төбе" },
        { letter: "D", text: "қабырға" },
        { letter: "E", text: "бағыт" }
      ],
      multi: false, correct: ["A"], userAnswer: ["A"], officialResult: 1, keyConfidence: "official",
      explanation: "Любая последовательность вершин, соединённых рёбрами, — это путь (жол, A) в графе. Ребро (қабырға) соединяет две вершины, а вершина (төбе) — это одна точка."
    },
    {
      id: "v5-algo-13", variant: 5, subject: "algo", number: 13, topic: "Язык C/C++",
      question: "C++ тілінде берілген square функцияның прототипінің жариялануы (қай жол?)",
      questionCode: "#include<iostream.h>\nint square (int);\nmain()\n{\nfor (int x = 1; x<=10; x++)\n{cout << square (x) << \" \";\ncout << endl;\nreturn 0;\n}\n}\nint square (y);\n{\nreturn y*y;\n}",
      options: [
        { letter: "A", text: "for (int x = 1; x<=10; x++)" },
        { letter: "B", text: "main()" },
        { letter: "C", text: "cout << square(x)" },
        { letter: "D", text: "#include<iostream.h>" },
        { letter: "E", text: "int square (int);" }
      ],
      multi: false, correct: ["E"], userAnswer: ["E"], officialResult: 1, keyConfidence: "official",
      explanation: "Прототип функции — это её объявление до определения: `int square (int);` (E). Он сообщает компилятору имя, тип возврата и типы параметров. Остальные строки — это заголовок include, тело main, вызов и оператор цикла."
    },
    {
      id: "v5-algo-14", variant: 5, subject: "algo", number: 14, topic: "Хеширование", authored: true,
      question: "Метод разрешения коллизий, при котором все элементы хранятся прямо в самой хеш-таблице, а при коллизии проверяется следующая свободная ячейка",
      options: [
        { letter: "A", text: "метод цепочек (chaining)" },
        { letter: "B", text: "открытая адресация" },
        { letter: "C", text: "прямая адресация" },
        { letter: "D", text: "рехеширование всей таблицы" },
        { letter: "E", text: "идеальное хеширование" }
      ],
      multi: false, correct: ["B"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "🆕 Дополнительный вопрос (оригинал №14 не был сфотографирован). При открытой адресации (B) все элементы хранятся в самой таблице, а при коллизии по правилу пробирования ищется следующая свободная ячейка. В методе цепочек (A), наоборот, элементы с одинаковым хешем хранятся в списке вне массива."
    },
    {
      id: "v5-algo-15", variant: 5, subject: "algo", number: 15, topic: "Структуры данных",
      question: "Стек, кезек және екі жақты кезек типті құрылымдар ұйымдастырылады",
      options: [
        { letter: "A", text: "графтар арқылы" },
        { letter: "B", text: "екі өлшемді массив арқылы" },
        { letter: "C", text: "жазбалар арқылы" },
        { letter: "D", text: "бір өлшемді массив арқылы" },
        { letter: "E", text: "бинарлық ағаш арқылы" }
      ],
      multi: false, correct: ["D"], userAnswer: ["B"], officialResult: 0, keyConfidence: "derived",
      explanation: "Стек, очередь и дек — линейные структуры, их проще всего организовать одномерным массивом (бір өлшемді массив, D) с указателями на вершину/начало/конец. Двумерный массив (B) для них избыточен."
    },
    {
      id: "v5-algo-16", variant: 5, subject: "algo", number: 16, topic: "Язык C/C++",
      question: "Ағынға жіберу операциясы «<<» қалай жазылады солай орындалады, яғни",
      options: [
        { letter: "A", text: "шетінен бастап" },
        { letter: "B", text: "оңнан солға қарай" },
        { letter: "C", text: "ортасынан бастап" },
        { letter: "D", text: "солдан оңға қарай" },
        { letter: "E", text: "ені бойынша" }
      ],
      multi: false, correct: ["D"], userAnswer: ["D"], officialResult: 1, keyConfidence: "official",
      explanation: "Операция вывода в поток `<<` выполняется в порядке записи — слева направо (солдан оңға қарай, D). Например, `cout << a << b` сначала выведет a, затем b."
    },
    {
      id: "v5-algo-17", variant: 5, subject: "algo", number: 17, topic: "Хеширование",
      question: "Егер керек кілт key хеш-кестеде болмаса, онда оны жою мен іздеу үшін T[hash(key)] байланысқан тізімнің барлық α = n/m түйіндерін теріп шығу керек. Хеш-кестеде кілттің болмаған кезінде осы операциялардың есептеу күрделілігі орташа жағдайда болады",
      options: [
        { letter: "A", text: "Θ(5²)" },
        { letter: "B", text: "Θ(cⁿ)" },
        { letter: "C", text: "Θ(n log n)" },
        { letter: "D", text: "O(1 + α)" },
        { letter: "E", text: "Θ(n)" }
      ],
      multi: false, correct: ["D"], userAnswer: ["E"], officialResult: 0, keyConfidence: "derived",
      explanation: "При хешировании с цепочками средняя сложность неуспешного поиска (и удаления) — Θ(1 + α), где α = n/m — коэффициент загрузки (D). Слагаемое 1 — вычисление хеша и обращение к ячейке, α — средняя длина просматриваемой цепочки."
    },
    {
      id: "v5-algo-18", variant: 5, subject: "algo", number: 18, topic: "Деревья",
      question: "13 элементтен тұратын бинарлы ағаштың түрі (сурет: 9 түбір; сол — 7 (2, 8); оң — 11 (10, 25); 25 → 23 және 31; 23 → 15 және 24; 15 → 13 және 17)",
      options: [
        { letter: "A", text: "теңестірілген" },
        { letter: "B", text: "теңестірілмеген" },
        { letter: "C", text: "орман" },
        { letter: "D", text: "байланыспаған" },
        { letter: "E", text: "бинарлық" }
      ],
      multi: false, correct: ["B"], userAnswer: ["E"], officialResult: 0, keyConfidence: "derived",
      explanation: "На рисунке правое поддерево уходит гораздо глубже левого (ветвь 25→23→15→13/17), поэтому дерево несбалансированное (теңестірілмеген, B). Ответ «бинарлық» (E) верен по типу, но не отвечает на вопрос о балансе — вопрос именно про вид дерева по сбалансированности."
    },
    {
      id: "v5-algo-19", variant: 5, subject: "algo", number: 19, topic: "Язык C/C++",
      question: "Қайталау барысында құрылымнан жедел шығуға және цикл денесіндегі қалған операцияларды орындамай жаңа итерациядан бастауға мүмкіндік тудыратын операторлар",
      options: [
        { letter: "A", text: "if/else" },
        { letter: "B", text: "goto, switch" },
        { letter: "C", text: "break, continue" },
        { letter: "D", text: "switch, for" },
        { letter: "E", text: "do/while" }
      ],
      multi: false, correct: ["C"], userAnswer: ["C"], officialResult: 1, keyConfidence: "official",
      explanation: "break досрочно выходит из цикла, а continue пропускает оставшиеся операции тела и переходит к новой итерации — это операторы break, continue (C)."
    },
    {
      id: "v5-algo-20", variant: 5, subject: "algo", number: 20, topic: "Сортировки", authored: true,
      question: "Какая сортировка на каждом шаге находит минимальный элемент в неотсортированной части и ставит его в её начало?",
      options: [
        { letter: "A", text: "быстрая" },
        { letter: "B", text: "слиянием" },
        { letter: "C", text: "выбором" },
        { letter: "D", text: "пузырьком" },
        { letter: "E", text: "вставками" }
      ],
      multi: false, correct: ["C"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "🆕 Дополнительный вопрос (оригинал №20 не был сфотографирован). Сортировка выбором (C) на каждом проходе выбирает минимум из оставшейся части и ставит его на очередную позицию. Пузырьковая меняет местами соседние элементы, а вставками — вставляет очередной элемент в уже отсортированную часть."
    },
    {
      id: "v5-algo-21", variant: 5, subject: "algo", number: 21, topic: "Язык C/C++",
      question: "C++ тілінде функция белсенді болады егер оны",
      options: [
        { letter: "A", text: "көшірсе" },
        { letter: "B", text: "шақырса" },
        { letter: "C", text: "енгізсе" },
        { letter: "D", text: "шығарса" },
        { letter: "E", text: "жойса" }
      ],
      multi: false, correct: ["B"], userAnswer: ["B"], officialResult: 1, keyConfidence: "official",
      explanation: "Функция начинает выполняться (становится активной), только когда её вызывают (шақырса, B). Само по себе объявление или определение функции код не исполняет."
    },
    {
      id: "v5-algo-22", variant: 5, subject: "algo", number: 22, topic: "Графы",
      question: "Графқа сәйкес сыбайлас матрицасын (кестесін) анықта. Бағытталған салмақталған граф, доғалары: B→A=9, A→D=8, A→C=11, B→C=5, D→C=7",
      questionCode: "Дұрыс матрица (жол = қайдан, баған = қайда), реті A,B,C,D:\n     A  B  C  D\n A [ 0  0 11  8 ]\n B [ 9  0  5  0 ]\n C [ 0  0  0  0 ]\n D [ 0  0  7  0 ]",
      options: [
        { letter: "A", text: "симметриялы (бағытталмаған) матрица: A[0,9,11,8] B[9,0,5,0] C[11,0,0,11] D[0,0,7,0]" },
        { letter: "B", text: "матрица: A[0,8,0,0] B[0,0,9,0] C[7,0,0,0] D[0,0,11,0]" },
        { letter: "C", text: "бағытталған матрица: A[0,0,11,8] B[9,0,5,0] C[0,0,0,0] D[0,0,7,0]" },
        { letter: "D", text: "матрица: A[0,9,8,11] B[0,0,0,5] C[0,0,0,7] D[0,0,0,0]" },
        { letter: "E", text: "барлық элементтері 1-ге тең матрица" }
      ],
      multi: false, correct: ["C"], userAnswer: ["C"], officialResult: 1, keyConfidence: "official",
      explanation: "В матрице смежности ориентированного графа элемент [i][j] равен весу дуги из i в j (иначе 0). По дугам B→A=9, A→D=8, A→C=11, B→C=5, D→C=7 получаем именно матрицу варианта C (несимметричную, т.к. граф направленный). Симметричная матрица (A) описывала бы неориентированный граф."
    },
    {
      id: "v5-algo-23", variant: 5, subject: "algo", number: 23, topic: "Рекурсия",
      question: "Рекурсивті функцияның рекурсия орындалатын денесін анықта (***** орнына)",
      questionCode: "#include<iostream.h>\n#include<iomanip.h>\nunsigned long EsepF (unsigned long)\nmain()\n{\nfor (int i = 0; i<=10; i++)\ncout << setw (2) << EsepF (i) << endl;\nreturn 0;\n}\nunsigned long EsepF (unsigned long san)\n{\n*****\n}",
      options: [
        { letter: "A", text: "if (san > 1) return 2; else return san" },
        { letter: "B", text: "if (san<=1) return 1; else return san * EsepF(san-1)" },
        { letter: "C", text: "if (san ==1) return 1+1; else cout << san -1 return" },
        { letter: "D", text: "return san * san" },
        { letter: "E", text: "while (san>0) san--" }
      ],
      multi: false, correct: ["B"], userAnswer: ["B"], officialResult: 1, keyConfidence: "official",
      explanation: "Это функция факториала. Рекурсивное тело: базовый случай `if (san<=1) return 1;` и рекурсивный шаг `else return san * EsepF(san-1);` (B). Остальные варианты либо не рекурсивны, либо синтаксически неверны."
    },
    {
      id: "v5-algo-24", variant: 5, subject: "algo", number: 24, topic: "Динамические таблицы",
      question: "Кестені берілген константаға бірнеше рет өсіру (кеңейту тәсілі)",
      options: [
        { letter: "A", text: "динамикалық сызба" },
        { letter: "B", text: "аддитивті сызба" },
        { letter: "C", text: "модификацияланған сызба" },
        { letter: "D", text: "мультипликативті сызба" },
        { letter: "E", text: "минималды сызба" }
      ],
      multi: false, correct: ["D"], userAnswer: ["A"], officialResult: 0, keyConfidence: "derived",
      explanation: "Увеличение таблицы в заданное (константное) число раз — это мультипликативная схема расширения (мультипликативті сызба, D): размер умножают на константу (например, удвоение). Аддитивная схема (B), наоборот, прибавляет постоянную величину."
    },
    {
      id: "v5-algo-25", variant: 5, subject: "algo", number: 25, topic: "Язык C/C++",
      question: "C++ тілінде екі өлшемді массивте қолданылатын циклдық құрылым",
      options: [
        { letter: "A", text: "қабаттасқан цикл" },
        { letter: "B", text: "функция" },
        { letter: "C", text: "ішкі программа" },
        { letter: "D", text: "процедура" },
        { letter: "E", text: "жергілікті айнымалы" }
      ],
      multi: false, correct: ["A"], userAnswer: ["A"], officialResult: 1, keyConfidence: "official",
      explanation: "Для обхода двумерного массива используют вложенные циклы (қабаттасқан цикл, A): внешний идёт по строкам, внутренний — по столбцам."
    },
    {
      id: "v5-algo-26", variant: 5, subject: "algo", number: 26, topic: "Язык C/C++",
      question: "C++ тілінде unsigned және int типтегі (немесе басқа құрылымдар) элементтер сақталатын биттердің санын беру мүмкіндігі бар. Бұл элементтерді төмендегідей атайды",
      options: [
        { letter: "A", text: "бинарлық ағаш" },
        { letter: "B", text: "биттік өріс" },
        { letter: "C", text: "биттік операция" },
        { letter: "D", text: "екілік жүйе" },
        { letter: "E", text: "разрядтық амал" }
      ],
      multi: false, correct: ["B"], userAnswer: ["C"], officialResult: 0, keyConfidence: "derived",
      explanation: "Возможность задать точное число битов под поле структуры — это битовые поля (биттік өріс, B). Битовая операция (C) — это действие (&, |, ^, <<), а не элемент хранения, поэтому ответ пользователя неверен."
    },
    {
      id: "v5-algo-27", variant: 5, subject: "algo", number: 27, topic: "Управляющие структуры",
      question: "Есепті шығару үшін қолданылатын басқару құрылымдарды анықтау. Есеп: 1-ден 10-ға дейін берілген сандардың ішінен жұп сандардың қосындасын табу циклы",
      options: [
        { letter: "A", text: "ағаш немесе графты құрылым" },
        { letter: "B", text: "тармақталу немесе таңдау" },
        { letter: "C", text: "сызықты немесе тармақталу" },
        { letter: "D", text: "таңдау және тізбекті құрылым" },
        { letter: "E", text: "параметрлік немесе тармақталу" }
      ],
      multi: false, correct: ["E"], userAnswer: ["A"], officialResult: 0, keyConfidence: "derived",
      explanation: "Чтобы просуммировать чётные числа от 1 до 10, нужен цикл со счётчиком (параметрический цикл) и ветвление для проверки чётности. Этому набору соответствует «параметрлік немесе тармақталу» (параметрический цикл или ветвление, E). Дерево/граф (A) здесь ни при чём."
    },
    {
      id: "v5-algo-28", variant: 5, subject: "algo", number: 28, topic: "Структуры данных",
      question: "Жолдар (жол-құрылымы) ретінде ұйымдастырылатын тәсіл",
      options: [
        { letter: "A", text: "бинарлық үйін" },
        { letter: "B", text: "біріккен сызықты тізім" },
        { letter: "C", text: "графтар" },
        { letter: "D", text: "бірікпеген тізімдер" },
        { letter: "E", text: "бинарлық ағаш" }
      ],
      multi: false, correct: ["B"], userAnswer: ["C"], officialResult: 0, keyConfidence: "derived",
      disputed: true,
      disputedNote: "Официальный ключ не засчитал «графтар» (графы). Наиболее вероятная трактовка: пути/маршруты хранятся связными списками смежности (объединённые линейные списки), поэтому ответ — B. Формулировка вопроса нечёткая.",
      explanation: "По ключу ответ «графтар» (C) не засчитан. Скорее всего, имеется в виду способ хранения путей смежности — через объединённые линейные (связные) списки (біріккен сызықты тізім, B), то есть списки смежности. Формулировка неоднозначна; академически графы (C) тоже описывают пути, но официальный ключ их отклонил."
    },
    {
      id: "v5-algo-29", variant: 5, subject: "algo", number: 29, topic: "Структуры данных",
      question: "Элементтерді орналастыруға қажетті сызықты емес адресті кеңістікті талап ететін маңызды құрылым",
      options: [
        { letter: "A", text: "кезек" },
        { letter: "B", text: "ағаштар" },
        { letter: "C", text: "дек" },
        { letter: "D", text: "стек" },
        { letter: "E", text: "бір өлшемді массив" }
      ],
      multi: false, correct: ["B"], userAnswer: ["B"], officialResult: 1, keyConfidence: "official",
      explanation: "Структура, требующая нелинейного (иерархического) адресного пространства для размещения элементов, — это деревья (ағаштар, B). Очередь, стек, дек и одномерный массив линейны."
    },
    {
      id: "v5-algo-30", variant: 5, subject: "algo", number: 30, topic: "Основы программирования",
      question: "Есептегі тұрақтыны анықтау. Есеп: Шеңбердің ұзындығын екі тәсілмен табу керек: L = π·d және L = 2·π·R. Радиусты R қолданып дөңгелектің ауданын табу керек: S = π·R². Егер π=3.14",
      options: [
        { letter: "A", text: "R²" },
        { letter: "B", text: "S" },
        { letter: "C", text: "L" },
        { letter: "D", text: "π" },
        { letter: "E", text: "d" }
      ],
      multi: false, correct: ["D"], userAnswer: ["D"], officialResult: 1, keyConfidence: "official",
      explanation: "Постоянная (константа) в задаче — это π = 3.14 (D): её значение не меняется. Величины L, S, R, d — переменные, зависящие от конкретной окружности."
    }
  ]
};
