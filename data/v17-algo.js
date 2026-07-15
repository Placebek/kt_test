window.QUIZ_DATA = window.QUIZ_DATA || {};
/* Вариант 17 · Алгоритмы (тренировочный, авторский набор — не с реального
   экзамена), по образцу вариантов 4 и 6. 30 вопросов, одиночный выбор A-E,
   1 балл за вопрос. Правильные буквы распределены равномерно (по 6 на A-E).
   Варианты ответов намеренно выровнены по длине и стилю формулировки —
   правильный ответ не должен быть самым длинным/подробным или единственным
   хорошо структурированным среди остальных (в первой редакции этого файла
   была именно такая проблема — исправлено). Вопросы №9, №14, №17, №19,
   №23, №26, №28, №30 — трассировка кода (C++): нужно проследить выполнение
   фрагмента и определить, что он выведет. */
window.QUIZ_DATA["v17-algo"] = {
  key: "v17-algo", variant: 17, subject: "algo", lang: "ru",
  title: "Вариант 17 · Алгоритмы (тренировочный)",
  questions: [
    {
      id: "v17-algo-1", variant: 17, subject: "algo", number: 1, topic: "Рекурсия",
      question: "Без чего рекурсивная функция вызовет бесконечную рекурсию и переполнение стека?",
      options: [
        { letter: "A", text: "без базового случая" },
        { letter: "B", text: "без глобальной переменной" },
        { letter: "C", text: "без цикла for внутри тела" },
        { letter: "D", text: "без второго параметра функции" },
        { letter: "E", text: "без оператора return void" }
      ],
      multi: false, correct: ["A"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Базовый случай (A) — условие, при котором рекурсия прекращает вызывать саму себя. Без него функция будет звать себя бесконечно, пока не переполнится стек вызовов. Глобальная переменная, цикл, второй параметр и return void (B–E) не являются обязательными элементами рекурсии."
    },
    {
      id: "v17-algo-2", variant: 17, subject: "algo", number: 2, topic: "Поиск",
      question: "Сложность бинарного поиска в отсортированном массиве из n элементов (худший случай)",
      options: [
        { letter: "A", text: "O(1)" },
        { letter: "B", text: "O(log n)" },
        { letter: "C", text: "O(n)" },
        { letter: "D", text: "O(n log n)" },
        { letter: "E", text: "O(n²)" }
      ],
      multi: false, correct: ["B"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Бинарный поиск на каждом шаге отбрасывает половину оставшегося диапазона, поэтому число шагов растёт как логарифм от n — O(log n) (B)."
    },
    {
      id: "v17-algo-3", variant: 17, subject: "algo", number: 3, topic: "Сортировки",
      question: "При каком условии быстрая сортировка (без рандомизации pivot) работает за O(n²)?",
      options: [
        { letter: "A", text: "pivot — медиана трёх элементов" },
        { letter: "B", text: "pivot выбирается случайно" },
        { letter: "C", text: "pivot — первый элемент, массив отсортирован" },
        { letter: "D", text: "pivot вычисляется через median-of-medians" },
        { letter: "E", text: "pivot — средний элемент по индексу" }
      ],
      multi: false, correct: ["C"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Если pivot фиксированно берётся первым (или последним) элементом, а вход уже отсортирован, каждое разбиение делит массив в пропорции 1 к (n−1) вместо примерно пополам — отсюда O(n²) (C). Случайный выбор, медиана трёх и median-of-medians (A, B, D) как раз защищают от такого случая."
    },
    {
      id: "v17-algo-4", variant: 17, subject: "algo", number: 4, topic: "Сортировки",
      question: "Что верно про сортировку слиянием (merge sort)?",
      options: [
        { letter: "A", text: "работает на месте, без доп. памяти" },
        { letter: "B", text: "худший случай — O(n²)" },
        { letter: "C", text: "не подходит для связных списков" },
        { letter: "D", text: "требует O(n) доп. памяти для слияния" },
        { letter: "E", text: "обязательно неустойчива (unstable)" }
      ],
      multi: false, correct: ["D"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Для слияния двух отсортированных половин обычно создаётся дополнительный массив размером O(n) (D). Классическая реализация не работает in-place (A), худший случай всегда O(n log n) (B), она хорошо подходит для связных списков (C) и обычно устойчива (E)."
    },
    {
      id: "v17-algo-5", variant: 17, subject: "algo", number: 5, topic: "Структуры данных",
      question: "Какая структура данных используется для проверки правильности расстановки скобок?",
      options: [
        { letter: "A", text: "очередь" },
        { letter: "B", text: "хеш-таблица" },
        { letter: "C", text: "двусвязный список" },
        { letter: "D", text: "куча" },
        { letter: "E", text: "стек" }
      ],
      multi: false, correct: ["E"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Открывающие скобки кладутся в стек, а при встрече закрывающей скобки верхний элемент снимается и сверяется с ней — принцип LIFO идеально подходит для парной проверки вложенности (E)."
    },
    {
      id: "v17-algo-6", variant: 17, subject: "algo", number: 6, topic: "Структуры данных",
      question: "Очередь (queue) работает по принципу",
      options: [
        { letter: "A", text: "FIFO" },
        { letter: "B", text: "LIFO" },
        { letter: "C", text: "по приоритету" },
        { letter: "D", text: "случайно" },
        { letter: "E", text: "по алфавиту" }
      ],
      multi: false, correct: ["A"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Очередь — структура FIFO (A): элемент, добавленный первым, извлекается тоже первым. LIFO (B) — принцип стека."
    },
    {
      id: "v17-algo-7", variant: 17, subject: "algo", number: 7, topic: "Структуры данных",
      question: "Сложность вставки в начало односвязного списка (известна голова)",
      options: [
        { letter: "A", text: "O(n)" },
        { letter: "B", text: "O(1)" },
        { letter: "C", text: "O(log n)" },
        { letter: "D", text: "O(n²)" },
        { letter: "E", text: "O(n log n)" }
      ],
      multi: false, correct: ["B"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Достаточно создать новый узел и перенаправить указатель головы на него — O(1) (B), независимо от длины списка."
    },
    {
      id: "v17-algo-8", variant: 17, subject: "algo", number: 8, topic: "Деревья",
      question: "Какой обход бинарного дерева поиска (BST) даёт элементы в отсортированном порядке?",
      options: [
        { letter: "A", text: "preorder" },
        { letter: "B", text: "postorder" },
        { letter: "C", text: "in-order" },
        { letter: "D", text: "BFS по уровням" },
        { letter: "E", text: "обратный in-order" }
      ],
      multi: false, correct: ["C"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "In-order обход (левое поддерево → узел → правое поддерево) для BST всегда посещает узлы по возрастанию значений (C)."
    },
    {
      id: "v17-algo-9", variant: 17, subject: "algo", number: 9, topic: "Трассировка кода (C++)",
      question: "Что выведет этот код на C++?",
      questionCode: "int count = 0;\nfor (int i = 0; i < 3; i++)\n    for (int j = 0; j < 3; j++)\n        count++;\ncout << count;",
      options: [
        { letter: "A", text: "3" },
        { letter: "B", text: "6" },
        { letter: "C", text: "9" },
        { letter: "D", text: "12" },
        { letter: "E", text: "0" }
      ],
      multi: false, correct: ["C"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Внешний цикл выполняется 3 раза, и для каждой его итерации внутренний цикл выполняется ещё 3 раза: count увеличивается 3×3 = 9 раз (C)."
    },
    {
      id: "v17-algo-10", variant: 17, subject: "algo", number: 10, topic: "Деревья",
      question: "Основное свойство узла в бинарном дереве поиска (BST)",
      options: [
        { letter: "A", text: "оба поддерева одной высоты" },
        { letter: "B", text: "не более одного потомка" },
        { letter: "C", text: "все листья на одном уровне" },
        { letter: "D", text: "левое поддерево меньше, правое больше" },
        { letter: "E", text: "потомки всегда больше родителя" }
      ],
      multi: false, correct: ["D"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Определяющее свойство BST — для каждого узла все значения левого поддерева меньше значения узла, а все значения правого — больше (D). Одинаковая высота поддеревьев — свойство сбалансированных деревьев (например, AVL), а не BST вообще."
    },
    {
      id: "v17-algo-11", variant: 17, subject: "algo", number: 11, topic: "Деревья",
      question: "Зачем в AVL-дереве после вставки или удаления выполняются повороты (ротации)?",
      options: [
        { letter: "A", text: "уменьшить число узлов" },
        { letter: "B", text: "превратить дерево в список" },
        { letter: "C", text: "отсортировать значения по алфавиту" },
        { letter: "D", text: "удалить дубликаты значений" },
        { letter: "E", text: "восстановить баланс дерева" }
      ],
      multi: false, correct: ["E"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "После изменения дерево может перестать быть сбалансированным; повороты восстанавливают баланс и гарантируют высоту O(log n), а значит и быстрый поиск (E)."
    },
    {
      id: "v17-algo-12", variant: 17, subject: "algo", number: 12, topic: "Графы",
      question: "Что эффективнее по памяти для разреженного графа (мало рёбер)?",
      options: [
        { letter: "A", text: "список смежности" },
        { letter: "B", text: "матрица смежности" },
        { letter: "C", text: "матрица инцидентности" },
        { letter: "D", text: "полный перебор пар вершин" },
        { letter: "E", text: "счётчик рёбер графа" }
      ],
      multi: false, correct: ["A"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Список смежности хранит только реально существующие рёбра — O(V+E) памяти, что выгоднее для разреженных графов (A). Матрица смежности всегда занимает O(V²), даже если рёбер почти нет."
    },
    {
      id: "v17-algo-13", variant: 17, subject: "algo", number: 13, topic: "Графы",
      question: "Какой обход находит кратчайший путь по рёбрам в невзвешенном графе?",
      options: [
        { letter: "A", text: "DFS" },
        { letter: "B", text: "BFS" },
        { letter: "C", text: "топологическая сортировка" },
        { letter: "D", text: "ограниченный по глубине DFS" },
        { letter: "E", text: "случайное блуждание" }
      ],
      multi: false, correct: ["B"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "BFS посещает вершины «волнами» по уровням удалённости от старта, поэтому первое достижение вершины даёт кратчайший путь по числу рёбер (B)."
    },
    {
      id: "v17-algo-14", variant: 17, subject: "algo", number: 14, topic: "Трассировка кода (C++)",
      question: "Что выведет этот код на C++?",
      questionCode: "int f(int n) {\n    if (n <= 1) return 1;\n    return n * f(n - 1);\n}\ncout << f(5);",
      options: [
        { letter: "A", text: "24" },
        { letter: "B", text: "60" },
        { letter: "C", text: "720" },
        { letter: "D", text: "120" },
        { letter: "E", text: "5" }
      ],
      multi: false, correct: ["D"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Функция вычисляет факториал: f(5) = 5×4×3×2×1 = 120 (D)."
    },
    {
      id: "v17-algo-15", variant: 17, subject: "algo", number: 15, topic: "Динамическое программирование",
      question: "Когда эффективно динамическое программирование?",
      options: [
        { letter: "A", text: "граф обязательно ориентирован" },
        { letter: "B", text: "массив предварительно отсортирован" },
        { letter: "C", text: "все элементы положительны" },
        { letter: "D", text: "алгоритм строго рекурсивен" },
        { letter: "E", text: "оптимальная подструктура и перекрывающиеся подзадачи" }
      ],
      multi: false, correct: ["E"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "ДП эффективно, когда решение задачи можно собрать из решений подзадач (оптимальная подструктура), а эти подзадачи повторяются много раз (перекрывающиеся подзадачи) — тогда результат можно запомнить и переиспользовать (E)."
    },
    {
      id: "v17-algo-16", variant: 17, subject: "algo", number: 16, topic: "Динамическое программирование",
      question: "Чем жадный (greedy) алгоритм отличается от динамического программирования?",
      options: [
        { letter: "A", text: "жадный не пересматривает локальный выбор" },
        { letter: "B", text: "жадный всегда медленнее ДП" },
        { letter: "C", text: "ДП не использует память" },
        { letter: "D", text: "жадный требует больше памяти" },
        { letter: "E", text: "ДП не решает рекурсивные задачи" }
      ],
      multi: false, correct: ["A"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Жадный алгоритм фиксирует выбор на каждом шаге и никогда к нему не возвращается (A) — это быстрее, но не всегда даёт глобально верный результат, в отличие от ДП, которое рассматривает все варианты подзадач."
    },
    {
      id: "v17-algo-17", variant: 17, subject: "algo", number: 17, topic: "Трассировка кода (C++)",
      question: "Что выведет этот код на C++?",
      questionCode: "int fib(int n) {\n    if (n <= 1) return n;\n    return fib(n - 1) + fib(n - 2);\n}\ncout << fib(6);",
      options: [
        { letter: "A", text: "5" },
        { letter: "B", text: "6" },
        { letter: "C", text: "13" },
        { letter: "D", text: "3" },
        { letter: "E", text: "8" }
      ],
      multi: false, correct: ["E"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Числа Фибоначчи: fib(0)=0, fib(1)=1, fib(2)=1, fib(3)=2, fib(4)=3, fib(5)=5, fib(6)=fib(5)+fib(4)=5+3=8 (E)."
    },
    {
      id: "v17-algo-18", variant: 17, subject: "algo", number: 18, topic: "Хеширование",
      question: "Что такое load factor (коэффициент заполнения) хеш-таблицы?",
      options: [
        { letter: "A", text: "число коллизий за всё время" },
        { letter: "B", text: "отношение элементов к размеру таблицы" },
        { letter: "C", text: "число хеш-функций таблицы" },
        { letter: "D", text: "длина самой длинной цепочки" },
        { letter: "E", text: "число свободных ячеек в квадрате" }
      ],
      multi: false, correct: ["B"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Load factor = (число элементов) / (размер таблицы) (B) — чем он выше, тем чаще случаются коллизии и тем полезнее рехешировать таблицу."
    },
    {
      id: "v17-algo-19", variant: 17, subject: "algo", number: 19, topic: "Трассировка кода (C++)",
      question: "Что выведет этот код на C++?",
      questionCode: "int i = 0, sum = 0;\nwhile (true) {\n    if (i == 5) break;\n    sum += i;\n    i++;\n}\ncout << sum;",
      options: [
        { letter: "A", text: "10" },
        { letter: "B", text: "15" },
        { letter: "C", text: "6" },
        { letter: "D", text: "4" },
        { letter: "E", text: "0" }
      ],
      multi: false, correct: ["A"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Цикл суммирует i, пока i не станет равно 5 (после чего break прерывает цикл ДО прибавления пятёрки): sum = 0+1+2+3+4 = 10 (A)."
    },
    {
      id: "v17-algo-20", variant: 17, subject: "algo", number: 20, topic: "Сложность",
      question: "Главный риск глубокой рекурсии без хвостовой оптимизации",
      options: [
        { letter: "A", text: "рекурсия всегда быстрее итерации" },
        { letter: "B", text: "не работает с отрицательными числами" },
        { letter: "C", text: "итерация всегда точнее рекурсии" },
        { letter: "D", text: "переполнение стека вызовов" },
        { letter: "E", text: "рекурсия требует меньше кода" }
      ],
      multi: false, correct: ["D"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Каждый рекурсивный вызов добавляет кадр в стек вызовов; при большой глубине рекурсии стек может переполниться — программа аварийно завершится (D)."
    },
    {
      id: "v17-algo-21", variant: 17, subject: "algo", number: 21, topic: "Сортировки",
      question: "Что означает термин «устойчивая» (stable) сортировка?",
      options: [
        { letter: "A", text: "сложность O(n) в любом случае" },
        { letter: "B", text: "не использует доп. память" },
        { letter: "C", text: "быстрее, чем O(n log n)" },
        { letter: "D", text: "не меняет исходный массив" },
        { letter: "E", text: "сохраняет порядок равных элементов" }
      ],
      multi: false, correct: ["E"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Устойчивость означает: если два элемента имеют одинаковый ключ сортировки, их взаимный порядок после сортировки останется таким же, как до неё (E)."
    },
    {
      id: "v17-algo-22", variant: 17, subject: "algo", number: 22, topic: "Сортировки",
      question: "Когда эффективна сортировка подсчётом (counting sort)?",
      options: [
        { letter: "A", text: "диапазон ключей мал и известен" },
        { letter: "B", text: "элементы — произвольные строки" },
        { letter: "C", text: "сортировка сразу по нескольким полям" },
        { letter: "D", text: "сравнение элементов невозможно" },
        { letter: "E", text: "массив почти отсортирован" }
      ],
      multi: false, correct: ["A"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Counting sort работает за O(n+k), где k — диапазон значений ключа: она эффективна именно когда k невелик и известен заранее (A)."
    },
    {
      id: "v17-algo-23", variant: 17, subject: "algo", number: 23, topic: "Трассировка кода (C++)",
      question: "Что выведет этот код на C++? (обратите внимание на порядок присваиваний)",
      questionCode: "int x = 5, y = 8;\nx = y;\ny = x;\ncout << x << \" \" << y;",
      options: [
        { letter: "A", text: "5 8" },
        { letter: "B", text: "8 5" },
        { letter: "C", text: "8 8" },
        { letter: "D", text: "5 5" },
        { letter: "E", text: "0 0" }
      ],
      multi: false, correct: ["C"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "x = y присваивает x значение 8 — исходное значение x (5) при этом безвозвратно теряется. Затем y = x присваивает y уже новое значение x, то есть 8. В итоге x=8 и y=8 (C) — это классическая ошибка «обмена без временной переменной»: значения НЕ поменялись местами, оба стали равны 8."
    },
    {
      id: "v17-algo-24", variant: 17, subject: "algo", number: 24, topic: "Рекуррентные соотношения",
      question: "T(n) = 2T(n/2) + O(n) по основной теореме о рекуррентных соотношениях (master theorem) даёт сложность",
      options: [
        { letter: "A", text: "O(n)" },
        { letter: "B", text: "O(n log n)" },
        { letter: "C", text: "O(n²)" },
        { letter: "D", text: "O(log n)" },
        { letter: "E", text: "O(2ⁿ)" }
      ],
      multi: false, correct: ["B"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Классический случай мастер-теоремы (сортировка слиянием): T(n) = 2T(n/2) + O(n) даёт сложность O(n log n) (B)."
    },
    {
      id: "v17-algo-25", variant: 17, subject: "algo", number: 25, topic: "Куча (heap)",
      question: "В min-heap (куче с минимумом в корне) в корне всегда находится",
      options: [
        { letter: "A", text: "последний добавленный элемент" },
        { letter: "B", text: "случайный элемент кучи" },
        { letter: "C", text: "наименьший элемент" },
        { letter: "D", text: "элемент со средним значением" },
        { letter: "E", text: "наибольший элемент" }
      ],
      multi: false, correct: ["C"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "По определению min-heap значение в каждом узле не больше значений его потомков, поэтому минимальный элемент всей кучи всегда находится в корне (C)."
    },
    {
      id: "v17-algo-26", variant: 17, subject: "algo", number: 26, topic: "Трассировка кода (C++)",
      question: "Массив a = {10, 20, 30, 40, 50}. Что выведет этот код на C++?",
      questionCode: "int arr[5] = {10, 20, 30, 40, 50};\nint *p = arr;\np += 2;\ncout << *p;",
      options: [
        { letter: "A", text: "10" },
        { letter: "B", text: "30" },
        { letter: "C", text: "20" },
        { letter: "D", text: "40" },
        { letter: "E", text: "50" }
      ],
      multi: false, correct: ["B"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "p изначально указывает на arr[0]. После p += 2 указатель смещается на 2 элемента вперёд и указывает на arr[2] = 30 (B). Разыменование *p даёт значение по этому адресу."
    },
    {
      id: "v17-algo-27", variant: 17, subject: "algo", number: 27, topic: "Техника двух указателей",
      question: "Техника «двух указателей» (two pointers) чаще всего применяется для",
      options: [
        { letter: "A", text: "генерации случайных чисел" },
        { letter: "B", text: "построения хеш-таблицы" },
        { letter: "C", text: "поиска пары с заданной суммой в отсортированном массиве" },
        { letter: "D", text: "обхода графа в ширину" },
        { letter: "E", text: "вычисления факториала числа" }
      ],
      multi: false, correct: ["C"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "В отсортированном массиве два указателя (с начала и с конца) можно сдвигать навстречу друг другу в зависимости от текущей суммы пары — это находит нужную пару за один проход, O(n) (C)."
    },
    {
      id: "v17-algo-28", variant: 17, subject: "algo", number: 28, topic: "Трассировка кода (C++)",
      question: "Массив a = {5, 2, 4, 1}. Что будет в массиве после ОДНОГО прохода этого кода?",
      questionCode: "int a[4] = {5, 2, 4, 1};\nfor (int i = 0; i < 3; i++)\n    if (a[i] > a[i + 1])\n        swap(a[i], a[i + 1]);",
      options: [
        { letter: "A", text: "1, 2, 4, 5" },
        { letter: "B", text: "5, 2, 4, 1" },
        { letter: "C", text: "2, 5, 4, 1" },
        { letter: "D", text: "2, 4, 1, 5" },
        { letter: "E", text: "1, 4, 2, 5" }
      ],
      multi: false, correct: ["D"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Это один проход пузырьковой сортировки: i=0: 5>2 → меняем → [2,5,4,1]; i=1: 5>4 → меняем → [2,4,5,1]; i=2: 5>1 → меняем → [2,4,1,5] (D). Массив ещё не полностью отсортирован — для этого нужны дополнительные проходы."
    },
    {
      id: "v17-algo-29", variant: 17, subject: "algo", number: 29, topic: "Скользящее окно",
      question: "Техника «скользящего окна» (sliding window) эффективна для задач вида",
      options: [
        { letter: "A", text: "сортировка всего массива" },
        { letter: "B", text: "построение дерева поиска" },
        { letter: "C", text: "вычисление кратчайшего пути в графе" },
        { letter: "D", text: "поиск суммы непрерывного подмассива заданной длины" },
        { letter: "E", text: "разложение числа на простые множители" }
      ],
      multi: false, correct: ["D"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Скользящее окно постепенно сдвигает границы непрерывного диапазона по массиву, обновляя нужную величину (сумму, максимум и т.п.) без пересчёта с нуля — классическая задача именно на непрерывный подмассив (D)."
    },
    {
      id: "v17-algo-30", variant: 17, subject: "algo", number: 30, topic: "Трассировка кода (C++)",
      question: "Что выведет этот код на C++?",
      questionCode: "stack<int> s;\ns.push(1);\ns.push(2);\ns.push(3);\ns.pop();\ns.push(4);\ncout << s.top();",
      options: [
        { letter: "A", text: "1" },
        { letter: "B", text: "2" },
        { letter: "C", text: "3" },
        { letter: "D", text: "0" },
        { letter: "E", text: "4" }
      ],
      multi: false, correct: ["E"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "После push(1),push(2),push(3) стек — [1,2,3] (3 сверху). pop() снимает 3 → [1,2]. push(4) кладёт 4 сверху → [1,2,4]. top() показывает верхний элемент — 4 (E)."
    }
  ]
};
