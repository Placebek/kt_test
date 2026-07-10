window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["v6-algo"] = {
  key: "v6-algo", variant: 6, subject: "algo", lang: "ru",
  title: "Вариант 6 · Алгоритмы (тренировочный)",
  questions: [
    {
      id: "v6-algo-1", variant: 6, subject: "algo", number: 1, topic: "Хеширование",
      question: "Метод разрешения коллизий, при котором все элементы хранятся прямо в самой таблице (без отдельных списков)",
      options: [
        { letter: "A", text: "открытая адресация (open addressing)" },
        { letter: "B", text: "метод цепочек со списками" },
        { letter: "C", text: "двойное независимое хеширование" },
        { letter: "D", text: "идеальное бесколлизийное хеширование" },
        { letter: "E", text: "полное рехеширование таблицы" }
      ],
      multi: false, correct: ["A"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Открытая адресация (A) хранит все элементы внутри самого массива таблицы: при коллизии ищется другая свободная ячейка (линейное/квадратичное пробирование, двойное хеширование). Метод цепочек (B), наоборот, держит элементы в отдельных списках вне таблицы."
    },
    {
      id: "v6-algo-2", variant: 6, subject: "algo", number: 2, topic: "Сложность",
      question: "Сложность линейного поиска в неотсортированном массиве в худшем случае",
      options: [
        { letter: "A", text: "O(1)" },
        { letter: "B", text: "O(log n)" },
        { letter: "C", text: "O(n)" },
        { letter: "D", text: "O(n log n)" },
        { letter: "E", text: "O(n²)" }
      ],
      multi: false, correct: ["C"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "В худшем случае искомый элемент — последний или отсутствует, и нужно просмотреть все n элементов → O(n) (C). O(log n) даёт двоичный поиск, но он требует отсортированного массива."
    },
    {
      id: "v6-algo-3", variant: 6, subject: "algo", number: 3, topic: "Сортировки",
      question: "Какая сортировка на почти отсортированных данных работает за линейное время O(n)?",
      options: [
        { letter: "A", text: "слиянием (merge sort)" },
        { letter: "B", text: "быстрая (quicksort)" },
        { letter: "C", text: "пирамидальная сортировка (heapsort)" },
        { letter: "D", text: "вставками (insertion sort)" },
        { letter: "E", text: "выбором (selection sort)" }
      ],
      multi: false, correct: ["D"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Сортировка вставками (D) на почти отсортированном массиве делает лишь около n сравнений без перестановок → O(n) в лучшем случае. Слиянием и пирамидальная всегда O(n·log n), а выбором — всегда O(n²) даже на готовых данных."
    },
    {
      id: "v6-algo-4", variant: 6, subject: "algo", number: 4, topic: "Структуры данных",
      question: "Структура «дек» (double-ended queue) позволяет",
      options: [
        { letter: "A", text: "хранить элементы по приоритету" },
        { letter: "B", text: "обращаться к элементам по индексу" },
        { letter: "C", text: "работать только по правилу FIFO" },
        { letter: "D", text: "доступ лишь к вершине, как стек" },
        { letter: "E", text: "добавлять и удалять элементы с обоих концов" }
      ],
      multi: false, correct: ["E"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Дек (deque) — двусторонняя очередь: вставка и удаление возможны с обоих концов (E). Только один конец — у стека и обычной очереди; «по приоритету» — у очереди с приоритетом."
    },
    {
      id: "v6-algo-5", variant: 6, subject: "algo", number: 5, topic: "Язык C/C++",
      question: "Чему равно значение выражения ++x, если int x = 5?",
      options: [
        { letter: "A", text: "5, значение до инкремента" },
        { letter: "B", text: "6" },
        { letter: "C", text: "5, а x увеличится позже" },
        { letter: "D", text: "ошибка компиляции" },
        { letter: "E", text: "7" }
      ],
      multi: false, correct: ["B"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Префиксный ++x сначала увеличивает x до 6, а потом возвращает это новое значение → 6 (B). Значение «до инкремента» (5) вернул бы постфиксный x++. Не путайте префиксную и постфиксную формы."
    },
    {
      id: "v6-algo-6", variant: 6, subject: "algo", number: 6, topic: "Язык C/C++",
      question: "В выражении (a && b), если a равно false, то операнд b",
      options: [
        { letter: "A", text: "всё равно будет вычислен до конца" },
        { letter: "B", text: "непременно вызовет ошибку выполнения" },
        { letter: "C", text: "вообще не вычисляется — короткое замыкание" },
        { letter: "D", text: "станет равным true автоматически" },
        { letter: "E", text: "вычислится первым, раньше a" }
      ],
      multi: false, correct: ["C"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Логическое И вычисляется с коротким замыканием: если a = false, всё выражение уже ложно, и b не вычисляется (C). Это важно, когда b — вызов функции или обращение по указателю (защита от лишних действий/аварий)."
    },
    {
      id: "v6-algo-7", variant: 6, subject: "algo", number: 7, topic: "Деревья",
      question: "Какой обход двоичного дерева поиска (BST) выдаёт ключи в порядке возрастания?",
      options: [
        { letter: "A", text: "прямой обход (pre-order)" },
        { letter: "B", text: "симметричный (in-order)" },
        { letter: "C", text: "обратный обход (post-order)" },
        { letter: "D", text: "по уровням (BFS)" },
        { letter: "E", text: "в порядке вставки" }
      ],
      multi: false, correct: ["B"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Симметричный обход (in-order: левое поддерево → узел → правое) в BST посещает ключи по возрастанию (B). Прямой (pre-order) начинает с корня, обратный (post-order) — с листьев."
    },
    {
      id: "v6-algo-8", variant: 6, subject: "algo", number: 8, topic: "Графы",
      question: "Сколько памяти требует матрица смежности для графа из V вершин?",
      options: [
        { letter: "A", text: "O(V)" },
        { letter: "B", text: "O(V + E)" },
        { letter: "C", text: "O(E)" },
        { letter: "D", text: "O(V²)" },
        { letter: "E", text: "O(log V)" }
      ],
      multi: false, correct: ["D"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Матрица смежности — это таблица V×V, поэтому она занимает O(V²) памяти независимо от числа рёбер (D). Для разреженных графов экономнее список смежности — O(V + E)."
    },
    {
      id: "v6-algo-9", variant: 6, subject: "algo", number: 9, topic: "Графы",
      question: "Алгоритм Дейкстры даёт неверный результат, если в графе есть",
      options: [
        { letter: "A", text: "циклы любой длины" },
        { letter: "B", text: "более тысячи вершин" },
        { letter: "C", text: "несколько компонент" },
        { letter: "D", text: "кратные (параллельные) рёбра" },
        { letter: "E", text: "рёбра отрицательного веса" }
      ],
      multi: false, correct: ["E"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Дейкстра предполагает, что добавление ребра не уменьшает стоимость пути, поэтому на рёбрах с отрицательным весом он ошибается (E). Для таких графов применяют алгоритм Беллмана–Форда. Обычные циклы и число вершин помехой не являются."
    },
    {
      id: "v6-algo-10", variant: 6, subject: "algo", number: 10, topic: "Рекурсия",
      question: "Сложность наивного рекурсивного вычисления n-го числа Фибоначчи (два вызова на шаг)",
      options: [
        { letter: "A", text: "O(2ⁿ), экспоненциальная" },
        { letter: "B", text: "O(n)" },
        { letter: "C", text: "O(log n)" },
        { letter: "D", text: "O(n²)" },
        { letter: "E", text: "O(n log n)" }
      ],
      multi: false, correct: ["A"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Каждый вызов порождает два новых, дерево вызовов растёт экспоненциально → примерно O(2ⁿ) (A). Простое кэширование (мемоизация) или итерация снижают сложность до O(n)."
    },
    {
      id: "v6-algo-11", variant: 6, subject: "algo", number: 11, topic: "Указатели",
      question: "Разыменование нулевого указателя (nullptr) во время выполнения приводит к",
      options: [
        { letter: "A", text: "возврату значения ноль" },
        { letter: "B", text: "выделению новой памяти" },
        { letter: "C", text: "неопределённому поведению и аварийному завершению" },
        { letter: "D", text: "созданию нового объекта" },
        { letter: "E", text: "выводу пустой строки" }
      ],
      multi: false, correct: ["C"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Обращение по нулевому указателю — неопределённое поведение; чаще всего программа аварийно завершается (segmentation fault) (C). Указатель нужно проверять на nullptr перед разыменованием."
    },
    {
      id: "v6-algo-12", variant: 6, subject: "algo", number: 12, topic: "Язык C/C++",
      question: "Признаком конца C-строки (массива char) служит",
      options: [
        { letter: "A", text: "пробел в самом конце" },
        { letter: "B", text: "символ переноса строки" },
        { letter: "C", text: "точка с запятой" },
        { letter: "D", text: "нулевой символ '\\0'" },
        { letter: "E", text: "последний индекс массива" }
      ],
      multi: false, correct: ["D"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "C-строка завершается нулевым символом '\\0' (код 0) (D). Именно по нему функции вроде strlen определяют конец строки; без него они выйдут за границы. Перенос строки '\\n' — обычный символ, а не терминатор."
    },
    {
      id: "v6-algo-13", variant: 6, subject: "algo", number: 13, topic: "Сложность",
      question: "Сложность сортировки слиянием (merge sort) в худшем случае",
      options: [
        { letter: "A", text: "O(n²), как у пузырька" },
        { letter: "B", text: "O(n), линейная" },
        { letter: "C", text: "O(log n)" },
        { letter: "D", text: "O(2ⁿ)" },
        { letter: "E", text: "O(n log n)" }
      ],
      multi: false, correct: ["E"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Слияние делит массив пополам (log n уровней) и на каждом уровне обрабатывает n элементов → O(n·log n), причём и в худшем случае (E). Стабильные O(n·log n) — её преимущество перед quicksort, у которого худший случай O(n²)."
    },
    {
      id: "v6-algo-14", variant: 6, subject: "algo", number: 14, topic: "Сложность",
      question: "Дополнительная память для стека вызовов при рекурсии глубины n",
      options: [
        { letter: "A", text: "O(1), не зависит от n" },
        { letter: "B", text: "O(n)" },
        { letter: "C", text: "O(n²)" },
        { letter: "D", text: "O(log n)" },
        { letter: "E", text: "память вообще не нужна" }
      ],
      multi: false, correct: ["B"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Каждый незавершённый рекурсивный вызов хранит свой кадр в стеке; при глубине n их одновременно до n → O(n) памяти (B). Слишком глубокая рекурсия приводит к переполнению стека."
    },
    {
      id: "v6-algo-15", variant: 6, subject: "algo", number: 15, topic: "Сортировки",
      question: "Сколько перестановок (обменов) делает сортировка выбором (selection sort) в худшем случае?",
      options: [
        { letter: "A", text: "порядка n" },
        { letter: "B", text: "порядка n²" },
        { letter: "C", text: "порядка log n" },
        { letter: "D", text: "ни одной перестановки" },
        { letter: "E", text: "порядка n·log n" }
      ],
      multi: false, correct: ["A"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Хитрый момент: сортировка выбором делает O(n²) СРАВНЕНИЙ, но лишь около n перестановок — по одной на каждый проход (A). Именно малое число обменов — её единственное практическое достоинство."
    },
    {
      id: "v6-algo-16", variant: 6, subject: "algo", number: 16, topic: "Деревья",
      question: "Балансный фактор узла в АВЛ-дереве равен",
      options: [
        { letter: "A", text: "числу его прямых потомков" },
        { letter: "B", text: "глубине узла от корня" },
        { letter: "C", text: "разности высот левого и правого поддеревьев" },
        { letter: "D", text: "числу ключей в поддереве" },
        { letter: "E", text: "цвету узла (кр./чёрн.)" }
      ],
      multi: false, correct: ["C"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Балансный фактор = высота левого поддерева − высота правого (C). В АВЛ-дереве он допускается только −1, 0 или +1; при выходе за эти пределы выполняется поворот. Цвет узла — понятие красно-чёрного дерева, а не АВЛ."
    },
    {
      id: "v6-algo-17", variant: 6, subject: "algo", number: 17, topic: "Структуры данных",
      question: "Что произойдёт при извлечении (pop) из пустого стека?",
      options: [
        { letter: "A", text: "вернётся значение ноль" },
        { letter: "B", text: "стек создаст новый элемент" },
        { letter: "C", text: "будет возвращён элемент из соседнего стека" },
        { letter: "D", text: "ошибка / неопределённое поведение" },
        { letter: "E", text: "программа продолжит без изменений" }
      ],
      multi: false, correct: ["D"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Извлечение из пустого стека — ошибка («антипереполнение», stack underflow): поведение не определено, поэтому перед pop проверяют, что стек не пуст (D). Никакого «нуля» или соседнего стека при этом не появляется."
    },
    {
      id: "v6-algo-18", variant: 6, subject: "algo", number: 18, topic: "Хеширование",
      question: "Хорошая хеш-функция должна в первую очередь",
      options: [
        { letter: "A", text: "использовать только простые числа" },
        { letter: "B", text: "быть криптографически необратимой" },
        { letter: "C", text: "сортировать ключи по возрастанию" },
        { letter: "D", text: "всегда возвращать одно значение" },
        { letter: "E", text: "равномерно распределять ключи" }
      ],
      multi: false, correct: ["E"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Главное для хеш-функции в хеш-таблице — равномерно раскидывать ключи по ячейкам, чтобы было меньше коллизий (E). Необратимость важна для криптографии, а не для обычной таблицы; одно и то же значение для всех ключей (D) — худший случай."
    },
    {
      id: "v6-algo-19", variant: 6, subject: "algo", number: 19, topic: "Поиск",
      question: "Сколько сравнений сделает двоичный поиск в массиве из 1000 элементов в худшем случае?",
      options: [
        { letter: "A", text: "около 10" },
        { letter: "B", text: "около 500" },
        { letter: "C", text: "около 1000" },
        { letter: "D", text: "ровно 1" },
        { letter: "E", text: "около 100" }
      ],
      multi: false, correct: ["A"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Каждое сравнение уменьшает диапазон вдвое, поэтому шагов около log₂(1000) ≈ 10 (A). Это и есть сила двоичного поиска: миллион элементов — всего ~20 сравнений."
    },
    {
      id: "v6-algo-20", variant: 6, subject: "algo", number: 20, topic: "Массивы",
      question: "В массиве a[3][4] при построчном (row-major) хранении элемент a[1][2] стоит по смещению (в элементах от начала)",
      options: [
        { letter: "A", text: "3" },
        { letter: "B", text: "6" },
        { letter: "C", text: "2" },
        { letter: "D", text: "9" },
        { letter: "E", text: "12" }
      ],
      multi: false, correct: ["B"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "При построчном хранении смещение = номер_строки × число_столбцов + номер_столбца = 1×4 + 2 = 6 (B). То есть перед a[1][2] лежат вся строка 0 (4 элемента) и два элемента строки 1."
    },
    {
      id: "v6-algo-21", variant: 6, subject: "algo", number: 21, topic: "Указатели",
      question: "При передаче массива в функцию в C++ по умолчанию фактически передаётся",
      options: [
        { letter: "A", text: "полная копия всех элементов" },
        { letter: "B", text: "размер массива в байтах" },
        { letter: "C", text: "указатель на самый первый элемент массива" },
        { letter: "D", text: "ссылка на весь массив" },
        { letter: "E", text: "только первый элемент" }
      ],
      multi: false, correct: ["C"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Массив при передаче «распадается» (decay) в указатель на первый элемент (C) — копирования всех элементов не происходит, и внутри функции sizeof уже не даст размер всего массива. Поэтому длину обычно передают отдельным параметром."
    },
    {
      id: "v6-algo-22", variant: 6, subject: "algo", number: 22, topic: "Сложность",
      question: "Что из перечисленного растёт медленнее всего при больших n?",
      options: [
        { letter: "A", text: "n · log n" },
        { letter: "B", text: "n" },
        { letter: "C", text: "n²" },
        { letter: "D", text: "log n" },
        { letter: "E", text: "2ⁿ" }
      ],
      multi: false, correct: ["D"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Логарифм log n растёт медленнее всех перечисленных функций (D): порядок роста log n < n < n·log n < n² < 2ⁿ. Поэтому алгоритмы с логарифмической сложностью самые «дешёвые»."
    },
    {
      id: "v6-algo-23", variant: 6, subject: "algo", number: 23, topic: "Структуры данных",
      question: "Кольцевая (циклическая) очередь на массиве нужна прежде всего, чтобы",
      options: [
        { letter: "A", text: "хранить элементы строго по их приоритету" },
        { letter: "B", text: "обходить дерево по уровням" },
        { letter: "C", text: "быстрее сортировать данные" },
        { letter: "D", text: "ускорить доступ по индексу" },
        { letter: "E", text: "переиспользовать освободившиеся ячейки массива" }
      ],
      multi: false, correct: ["E"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "В кольцевой очереди индексы «заворачиваются» по модулю размера, поэтому ячейки, освобождённые при извлечении из начала, снова используются для новых элементов (E). Это избавляет от постоянного сдвига данных в массиве."
    },
    {
      id: "v6-algo-24", variant: 6, subject: "algo", number: 24, topic: "Графы",
      question: "Связный неориентированный граф из V вершин является деревом тогда и только тогда, когда у него ровно",
      options: [
        { letter: "A", text: "V − 1 рёбер" },
        { letter: "B", text: "V рёбер" },
        { letter: "C", text: "V + 1 рёбер" },
        { letter: "D", text: "2·V рёбер" },
        { letter: "E", text: "V² рёбер" }
      ],
      multi: false, correct: ["A"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Дерево — связный граф без циклов; в нём всегда ровно V − 1 рёбер (A). Добавление хотя бы одного лишнего ребра к связному графу создаёт цикл, и он перестаёт быть деревом."
    },
    {
      id: "v6-algo-25", variant: 6, subject: "algo", number: 25, topic: "Рекурсия",
      question: "Алгоритм Евклида основан на равенстве НОД(a, b) =",
      options: [
        { letter: "A", text: "НОД(a, b − 1)" },
        { letter: "B", text: "НОД(b, a mod b)" },
        { letter: "C", text: "сумме чисел a и b" },
        { letter: "D", text: "произведению a и b" },
        { letter: "E", text: "НОД(a + b, b)" }
      ],
      multi: false, correct: ["B"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Классический алгоритм Евклида использует НОД(a, b) = НОД(b, a mod b), пока второй аргумент не станет нулём (B). Замена большего числа остатком быстро уменьшает аргументы — сложность O(log(min(a, b)))."
    },
    {
      id: "v6-algo-26", variant: 6, subject: "algo", number: 26, topic: "Язык C/C++",
      question: "Оператор % (остаток от деления) в стандартном C++ применим",
      options: [
        { letter: "A", text: "к любым числам, включая double" },
        { letter: "B", text: "только к положительным числам" },
        { letter: "C", text: "только к целым числам" },
        { letter: "D", text: "к строкам и числам одинаково" },
        { letter: "E", text: "только к константам, не переменным" }
      ],
      multi: false, correct: ["C"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Оператор % определён только для целочисленных операндов (C). Для вещественных чисел (double) он не работает — там используют функцию fmod. Знак и то, переменная это или константа, значения не имеют."
    },
    {
      id: "v6-algo-27", variant: 6, subject: "algo", number: 27, topic: "Язык C/C++",
      question: "Сколько раз выполнится тело цикла while(false) { ... }?",
      options: [
        { letter: "A", text: "один раз" },
        { letter: "B", text: "бесконечно" },
        { letter: "C", text: "зависит от компилятора" },
        { letter: "D", text: "ноль раз" },
        { letter: "E", text: "один раз, как у do-while" }
      ],
      multi: false, correct: ["D"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Цикл while проверяет условие ДО тела; условие false ложно сразу, поэтому тело не выполнится ни разу (D). А вот do-while сначала выполнил бы тело один раз и лишь потом проверил условие — в этом их отличие."
    },
    {
      id: "v6-algo-28", variant: 6, subject: "algo", number: 28, topic: "Хеширование",
      question: "Среднее время поиска в хеш-таблице при хорошей хеш-функции и малом коэффициенте загрузки",
      options: [
        { letter: "A", text: "O(n)" },
        { letter: "B", text: "O(n log n)" },
        { letter: "C", text: "O(log n)" },
        { letter: "D", text: "O(n²)" },
        { letter: "E", text: "O(1)" }
      ],
      multi: false, correct: ["E"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "При равномерном хешировании и небольшой загрузке поиск занимает в среднем константное время O(1) (E). Но в худшем случае (все ключи в одну ячейку) он вырождается в O(n) — об этом важно помнить."
    },
    {
      id: "v6-algo-29", variant: 6, subject: "algo", number: 29, topic: "Деревья",
      question: "Построение двоичной кучи из n произвольных элементов (build-heap) выполняется за",
      options: [
        { letter: "A", text: "O(n)" },
        { letter: "B", text: "O(n log n)" },
        { letter: "C", text: "O(log n)" },
        { letter: "D", text: "O(n²)" },
        { letter: "E", text: "O(1)" }
      ],
      multi: false, correct: ["A"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Неочевидный факт: если «просеивать» узлы снизу вверх, построение кучи из n элементов занимает O(n), а не O(n·log n) (A). Оценка O(n·log n) получается при наивной вставке по одному и здесь избыточна."
    },
    {
      id: "v6-algo-30", variant: 6, subject: "algo", number: 30, topic: "Язык C/C++",
      question: "Оператор continue внутри цикла",
      options: [
        { letter: "A", text: "полностью прерывает цикл" },
        { letter: "B", text: "переходит к следующей итерации" },
        { letter: "C", text: "возвращает значение из функции" },
        { letter: "D", text: "приостанавливает всю программу" },
        { letter: "E", text: "перезапускает цикл с самого начала" }
      ],
      multi: false, correct: ["B"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "continue пропускает оставшуюся часть тела и переходит к следующей итерации цикла (B). Полный выход из цикла делает break, а возврат из функции — return. Цикл при этом не начинается заново с первого значения."
    }
  ]
};
