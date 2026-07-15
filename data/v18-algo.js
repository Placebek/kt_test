window.QUIZ_DATA = window.QUIZ_DATA || {};
/* Вариант 18 · Алгоритмы (тренировочный, авторский набор — не с реального
   экзамена), построен по тем же принципам, что и исправленный вариант 17:
   30 вопросов, одиночный выбор A-E, 1 балл за вопрос; правильные буквы
   распределены равномерно (по 6 на A-E); варианты ответов выровнены по
   длине и стилю, чтобы длина не выдавала правильный ответ; 8 вопросов —
   трассировка кода на C++ (№1, №6, №11, №16, №21, №22, №27, №30). Темы не
   повторяют вариант 17 (там — базовые структуры/сортировки/графы/ДП, здесь
   — сортировки с фиксированной длиной ключа, деревья и графы отдельного
   уровня, техники поиска с возвратом, разбор сложности специфичных
   алгоритмов). */
window.QUIZ_DATA["v18-algo"] = {
  key: "v18-algo", variant: 18, subject: "algo", lang: "ru",
  title: "Вариант 18 · Алгоритмы (тренировочный)",
  questions: [
    {
      id: "v18-algo-1", variant: 18, subject: "algo", number: 1, topic: "Трассировка кода (C++)",
      question: "Что выведет этот код на C++?",
      questionCode: "int arr[5] = {3, 7, 2, 8, 4};\nint sum = 0;\nfor (int i = 0; i < 5; i++)\n    sum += arr[i];\ncout << sum;",
      options: [
        { letter: "A", text: "20" },
        { letter: "B", text: "22" },
        { letter: "C", text: "24" },
        { letter: "D", text: "26" },
        { letter: "E", text: "28" }
      ],
      multi: false, correct: ["C"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Сумма всех элементов массива: 3+7+2+8+4 = 24 (C)."
    },
    {
      id: "v18-algo-2", variant: 18, subject: "algo", number: 2, topic: "Поиск",
      question: "Какое условие обязательно для применения бинарного поиска?",
      options: [
        { letter: "A", text: "массив отсортирован" },
        { letter: "B", text: "массив содержит только числа" },
        { letter: "C", text: "массив имеет чётную длину" },
        { letter: "D", text: "массив не содержит повторов" },
        { letter: "E", text: "массив хранится в связном списке" }
      ],
      multi: false, correct: ["A"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Бинарный поиск работает, только если массив отсортирован (A) — иначе отбрасывание половины диапазона не гарантирует, что искомый элемент остался в оставшейся части."
    },
    {
      id: "v18-algo-3", variant: 18, subject: "algo", number: 3, topic: "Сортировки",
      question: "Сколько обменов (swap) делает сортировка выбором (selection sort) для массива из n элементов?",
      options: [
        { letter: "A", text: "ровно n² обменов" },
        { letter: "B", text: "ровно n-1 обменов" },
        { letter: "C", text: "от 0 до n-1 обменов" },
        { letter: "D", text: "ровно n обменов" },
        { letter: "E", text: "всегда 0 обменов" }
      ],
      multi: false, correct: ["B"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "На каждом из n-1 проходов selection sort находит минимум в оставшейся части и меняет его местами с текущим элементом ровно один раз — итого ровно n-1 обменов (B), независимо от исходного порядка данных. Этим она отличается от пузырьковой сортировки, где число обменов зависит от входных данных."
    },
    {
      id: "v18-algo-4", variant: 18, subject: "algo", number: 4, topic: "Сортировки",
      question: "Для каких данных подходит поразрядная сортировка (radix sort)?",
      options: [
        { letter: "A", text: "для данных без определённого порядка" },
        { letter: "B", text: "для данных, которые нельзя сравнивать" },
        { letter: "C", text: "для чисел/строк с фиксированной длиной ключа" },
        { letter: "D", text: "только для отрицательных чисел" },
        { letter: "E", text: "только для чисел с плавающей точкой" }
      ],
      multi: false, correct: ["C"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Radix sort обрабатывает ключи разряд за разрядом, поэтому эффективна для чисел или строк фиксированной длины (C) — например, для номеров телефонов или чисел, ограниченных известным количеством цифр."
    },
    {
      id: "v18-algo-5", variant: 18, subject: "algo", number: 5, topic: "Структуры данных",
      question: "Основное преимущество двусвязного списка перед односвязным",
      options: [
        { letter: "A", text: "занимает меньше памяти" },
        { letter: "B", text: "быстрее вставка в начало" },
        { letter: "C", text: "не требует указателей" },
        { letter: "D", text: "обход в обе стороны (вперёд и назад)" },
        { letter: "E", text: "поддерживает только целые числа" }
      ],
      multi: false, correct: ["D"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Каждый узел двусвязного списка хранит указатель и на следующий, и на предыдущий элемент, что позволяет обходить список в обе стороны (D). За это приходится платить — двусвязный список занимает БОЛЬШЕ памяти (A неверно), а не меньше."
    },
    {
      id: "v18-algo-6", variant: 18, subject: "algo", number: 6, topic: "Трассировка кода (C++)",
      question: "Что выведет этот код на C++?",
      questionCode: "int sum(int n) {\n    if (n == 0) return 0;\n    return n + sum(n - 1);\n}\ncout << sum(4);",
      options: [
        { letter: "A", text: "6" },
        { letter: "B", text: "8" },
        { letter: "C", text: "9" },
        { letter: "D", text: "10" },
        { letter: "E", text: "24" }
      ],
      multi: false, correct: ["D"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "sum(4) = 4 + sum(3) = 4+3+sum(2) = 4+3+2+sum(1) = 4+3+2+1+sum(0) = 4+3+2+1+0 = 10 (D)."
    },
    {
      id: "v18-algo-7", variant: 18, subject: "algo", number: 7, topic: "Структуры данных",
      question: "Зачем нужна кольцевая (циклическая) очередь?",
      options: [
        { letter: "A", text: "хранить элементы в отсортированном порядке" },
        { letter: "B", text: "ускорить поиск по ключу" },
        { letter: "C", text: "исключить дублирование элементов" },
        { letter: "D", text: "реализовать рекурсию без стека" },
        { letter: "E", text: "эффективно использовать место в буфере фиксированного размера" }
      ],
      multi: false, correct: ["E"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Кольцевая очередь «оборачивает» индексы по кругу, позволяя переиспользовать освободившиеся ячейки буфера фиксированного размера без сдвига остальных элементов (E)."
    },
    {
      id: "v18-algo-8", variant: 18, subject: "algo", number: 8, topic: "Структуры данных",
      question: "Какие операции обязательно поддерживает очередь с приоритетом (priority queue)?",
      options: [
        { letter: "A", text: "вставка и извлечение элемента с наивысшим приоритетом" },
        { letter: "B", text: "вставка только в конец, извлечение только с начала" },
        { letter: "C", text: "доступ по индексу за O(1)" },
        { letter: "D", text: "сортировка по алфавиту при каждой вставке" },
        { letter: "E", text: "хранение только уникальных значений" }
      ],
      multi: false, correct: ["A"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Ключевая операция priority queue — извлечь элемент с наивысшим (или наименьшим) приоритетом, а не строго первый добавленный, как в обычной очереди (A)."
    },
    {
      id: "v18-algo-9", variant: 18, subject: "algo", number: 9, topic: "Деревья",
      question: "Полное бинарное дерево (full binary tree) — это дерево, где",
      options: [
        { letter: "A", text: "все узлы имеют ровно одного потомка" },
        { letter: "B", text: "каждый узел имеет 0 или 2 потомка" },
        { letter: "C", text: "все листья на разных уровнях" },
        { letter: "D", text: "высота дерева равна числу узлов" },
        { letter: "E", text: "корень не имеет потомков" }
      ],
      multi: false, correct: ["B"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "В full binary tree у каждого узла либо нет потомков (лист), либо ровно два потомка — промежуточный вариант с одним потомком не допускается (B)."
    },
    {
      id: "v18-algo-10", variant: 18, subject: "algo", number: 10, topic: "Деревья",
      question: "Высота сбалансированного бинарного дерева с n узлами",
      options: [
        { letter: "A", text: "O(1)" },
        { letter: "B", text: "O(n)" },
        { letter: "C", text: "O(log n)" },
        { letter: "D", text: "O(n²)" },
        { letter: "E", text: "O(n log n)" }
      ],
      multi: false, correct: ["C"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "В сбалансированном дереве на каждом уровне число узлов удваивается, поэтому высота растёт как логарифм от общего числа узлов — O(log n) (C)."
    },
    {
      id: "v18-algo-11", variant: 18, subject: "algo", number: 11, topic: "Трассировка кода (C++)",
      question: "Что выведет этот код на C++?",
      questionCode: "int i = 0, total = 0;\nwhile (i < 6) {\n    i++;\n    if (i % 2 == 0) continue;\n    total += i;\n}\ncout << total;",
      options: [
        { letter: "A", text: "6" },
        { letter: "B", text: "8" },
        { letter: "C", text: "12" },
        { letter: "D", text: "15" },
        { letter: "E", text: "9" }
      ],
      multi: false, correct: ["E"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "i последовательно принимает значения 1,2,3,4,5,6; при чётном i срабатывает continue и total не увеличивается. Складываются только нечётные: 1+3+5 = 9 (E)."
    },
    {
      id: "v18-algo-12", variant: 18, subject: "algo", number: 12, topic: "Структуры данных",
      question: "Для чего используется структура данных «бор» (trie, префиксное дерево)?",
      options: [
        { letter: "A", text: "хранение чисел в отсортированном порядке" },
        { letter: "B", text: "реализация стека с приоритетом" },
        { letter: "C", text: "сжатие изображений" },
        { letter: "D", text: "быстрый поиск слов по общему префиксу" },
        { letter: "E", text: "вычисление кратчайшего пути в графе" }
      ],
      multi: false, correct: ["D"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Trie хранит строки по общим префиксам в виде дерева, что делает поиск слов и автодополнение по префиксу очень быстрым (D)."
    },
    {
      id: "v18-algo-13", variant: 18, subject: "algo", number: 13, topic: "Графы",
      question: "Структура данных Union-Find (система непересекающихся множеств) используется, например, в",
      options: [
        { letter: "A", text: "алгоритме Дейкстры для хранения расстояний" },
        { letter: "B", text: "быстрой сортировке для выбора pivot" },
        { letter: "C", text: "бинарном поиске для деления диапазона" },
        { letter: "D", text: "хеш-таблице для разрешения коллизий" },
        { letter: "E", text: "алгоритме Крускала для проверки образования цикла" }
      ],
      multi: false, correct: ["E"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "В алгоритме Крускала перед добавлением ребра в минимальное остовное дерево нужно быстро проверить, не образует ли оно цикл (не находятся ли обе вершины уже в одной компоненте) — для этого используется Union-Find (E)."
    },
    {
      id: "v18-algo-14", variant: 18, subject: "algo", number: 14, topic: "Графы",
      question: "Обязательное условие для топологической сортировки графа",
      options: [
        { letter: "A", text: "граф должен быть ориентированным и ациклическим (DAG)" },
        { letter: "B", text: "граф должен быть взвешенным" },
        { letter: "C", text: "граф должен быть полным (все пары вершин связаны)" },
        { letter: "D", text: "граф должен содержать хотя бы один цикл" },
        { letter: "E", text: "граф должен быть неориентированным" }
      ],
      multi: false, correct: ["A"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Топологическая сортировка определена только для ориентированных ациклических графов (DAG) (A) — при наличии цикла невозможно построить непротиворечивый линейный порядок вершин."
    },
    {
      id: "v18-algo-15", variant: 18, subject: "algo", number: 15, topic: "Графы",
      question: "Чем алгоритм A* отличается от алгоритма Дейкстры?",
      options: [
        { letter: "A", text: "Дейкстра работает только с деревьями" },
        { letter: "B", text: "A* использует эвристику для ускорения поиска к цели" },
        { letter: "C", text: "A* не умеет работать со взвешенными графами" },
        { letter: "D", text: "A* всегда быстрее на любых данных без исключений" },
        { letter: "E", text: "Дейкстра не может найти кратчайший путь вообще" }
      ],
      multi: false, correct: ["B"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "A* дополняет идею Дейкстры эвристической оценкой расстояния до конкретной цели, что обычно ускоряет поиск именно пути к этой цели (B). При «нулевой» эвристике A* превращается в обычный алгоритм Дейкстры."
    },
    {
      id: "v18-algo-16", variant: 18, subject: "algo", number: 16, topic: "Трассировка кода (C++)",
      question: "Что выведет этот код на C++?",
      questionCode: "int m[2][3] = {{1, 2, 3}, {4, 5, 6}};\ncout << m[1][2];",
      options: [
        { letter: "A", text: "6" },
        { letter: "B", text: "3" },
        { letter: "C", text: "5" },
        { letter: "D", text: "4" },
        { letter: "E", text: "2" }
      ],
      multi: false, correct: ["A"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "m[1] — вторая строка массива, {4, 5, 6}; m[1][2] — третий элемент этой строки (индекс 2) — 6 (A)."
    },
    {
      id: "v18-algo-17", variant: 18, subject: "algo", number: 17, topic: "Алгоритмические техники",
      question: "Backtracking (поиск с возвратом) — в чём суть подхода?",
      options: [
        { letter: "A", text: "всегда выбирать первый попавшийся вариант" },
        { letter: "B", text: "сортировать варианты перед перебором" },
        { letter: "C", text: "пробовать варианты и отменять выбор при тупике" },
        { letter: "D", text: "хранить все варианты в хеш-таблице" },
        { letter: "E", text: "исключать рекурсию полностью" }
      ],
      multi: false, correct: ["C"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Backtracking последовательно пробует варианты решения и, столкнувшись с тупиком (нарушением условий), откатывается («возврат») к предыдущему шагу и пробует другой вариант (C) — классический пример: задача о расстановке ферзей."
    },
    {
      id: "v18-algo-18", variant: 18, subject: "algo", number: 18, topic: "Алгоритмические техники",
      question: "Разделяй и властвуй (divide and conquer) — общий принцип",
      options: [
        { letter: "A", text: "решать задачу только жадным способом" },
        { letter: "B", text: "хранить все промежуточные результаты в таблице" },
        { letter: "C", text: "избегать рекурсии ради скорости" },
        { letter: "D", text: "разбить задачу на подзадачи, решить и объединить результаты" },
        { letter: "E", text: "всегда использовать один и тот же алгоритм для подзадач" }
      ],
      multi: false, correct: ["D"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Разделяй и властвуй: задача разбивается на независимые подзадачи меньшего размера, каждая решается (часто рекурсивно), а затем результаты объединяются (D). Классические примеры — сортировка слиянием и быстрая сортировка."
    },
    {
      id: "v18-algo-19", variant: 18, subject: "algo", number: 19, topic: "Динамическое программирование",
      question: "В чём разница между мемоизацией и табуляцией в динамическом программировании?",
      options: [
        { letter: "A", text: "мемоизация не использует рекурсию вообще" },
        { letter: "B", text: "табуляция работает только с одномерными массивами" },
        { letter: "C", text: "это два названия одного метода без разницы" },
        { letter: "D", text: "табуляция всегда медленнее мемоизации" },
        { letter: "E", text: "мемоизация — «сверху вниз» с кэшем, табуляция — «снизу вверх»" }
      ],
      multi: false, correct: ["E"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Мемоизация решает задачу рекурсивно «сверху вниз», кэшируя результаты подзадач при первом вычислении; табуляция строит решение итеративно «снизу вверх», последовательно заполняя таблицу (E)."
    },
    {
      id: "v18-algo-20", variant: 18, subject: "algo", number: 20, topic: "Динамическое программирование",
      question: "Задача о рюкзаке 0/1 (0/1 knapsack) отличается от непрерывного рюкзака тем, что",
      options: [
        { letter: "A", text: "предмет нельзя брать частично — целиком или не брать" },
        { letter: "B", text: "предметы можно дробить на любые доли" },
        { letter: "C", text: "решается только жадным алгоритмом" },
        { letter: "D", text: "не имеет ограничения по весу" },
        { letter: "E", text: "допускает отрицательный вес предметов" }
      ],
      multi: false, correct: ["A"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "В варианте 0/1 каждый предмет либо берётся целиком, либо не берётся вовсе (A) — поэтому жадный подход (эффективный для непрерывного рюкзака, где предметы дробимы) здесь в общем случае не даёт оптимального решения, и нужна динамика."
    },
    {
      id: "v18-algo-21", variant: 18, subject: "algo", number: 21, topic: "Трассировка кода (C++)",
      question: "Что выведет этот код на C++?",
      questionCode: "vector<int> v;\nv.push_back(10);\nv.push_back(20);\nv.pop_back();\nv.push_back(30);\nv.push_back(40);\ncout << v.size();",
      options: [
        { letter: "A", text: "2" },
        { letter: "B", text: "3" },
        { letter: "C", text: "4" },
        { letter: "D", text: "1" },
        { letter: "E", text: "5" }
      ],
      multi: false, correct: ["B"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "push_back(10) → [10]; push_back(20) → [10,20]; pop_back() удаляет последний → [10]; push_back(30) → [10,30]; push_back(40) → [10,30,40]. Итоговый размер вектора — 3 (B)."
    },
    {
      id: "v18-algo-22", variant: 18, subject: "algo", number: 22, topic: "Трассировка кода (C++)",
      question: "Что выведет этот код на C++?",
      questionCode: "string s = \"abcd\";\nint l = 0, r = s.size() - 1;\nwhile (l < r) {\n    swap(s[l], s[r]);\n    l++;\n    r--;\n}\ncout << s;",
      options: [
        { letter: "A", text: "abcd" },
        { letter: "B", text: "dabc" },
        { letter: "C", text: "dcba" },
        { letter: "D", text: "bcda" },
        { letter: "E", text: "cdba" }
      ],
      multi: false, correct: ["C"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Это стандартный разворот строки двумя указателями: l=0,r=3 → меняем 'a' и 'd' → \"dbca\"; l=1,r=2 → меняем 'b' и 'c' → \"dcba\"; дальше l<r перестаёт выполняться. Итог: \"dcba\" (C)."
    },
    {
      id: "v18-algo-23", variant: 18, subject: "algo", number: 23, topic: "Графы",
      question: "Как обнаружить цикл в ориентированном графе с помощью обхода в глубину (DFS)?",
      options: [
        { letter: "A", text: "считать общее количество рёбер графа" },
        { letter: "B", text: "отслеживать вершины в текущем стеке рекурсии" },
        { letter: "C", text: "проверять, что все вершины имеют разную степень" },
        { letter: "D", text: "сортировать вершины по алфавиту" },
        { letter: "E", text: "искать вершину с максимальной степенью" }
      ],
      multi: false, correct: ["B"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Если DFS во время обхода встречает ребро, ведущее в вершину, которая уже находится в текущем стеке рекурсии (то есть является предком по пути обхода), это означает наличие цикла (B)."
    },
    {
      id: "v18-algo-24", variant: 18, subject: "algo", number: 24, topic: "Графы",
      question: "Сложность алгоритма Флойда — Уоршелла (кратчайшие пути между всеми парами вершин)",
      options: [
        { letter: "A", text: "O(V²)" },
        { letter: "B", text: "O(V log V)" },
        { letter: "C", text: "O(V³)" },
        { letter: "D", text: "O(V + E)" },
        { letter: "E", text: "O(E log V)" }
      ],
      multi: false, correct: ["C"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Алгоритм Флойда — Уоршелла перебирает все тройки вершин (промежуточная, начальная, конечная), что даёт сложность O(V³) (C)."
    },
    {
      id: "v18-algo-25", variant: 18, subject: "algo", number: 25, topic: "Куча (heap)",
      question: "Сложность построения кучи (build-heap) из массива из n элементов",
      options: [
        { letter: "A", text: "O(n log n)" },
        { letter: "B", text: "O(n²)" },
        { letter: "C", text: "O(log n)" },
        { letter: "D", text: "O(n)" },
        { letter: "E", text: "O(1)" }
      ],
      multi: false, correct: ["D"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Хотя каждая операция «просеивания» (sift-down) занимает O(log n), большинство узлов находятся близко к листьям и просеиваются на малую глубину; суммарно построение кучи снизу вверх занимает O(n) (D) — это классический неочевидный результат, а не O(n log n)."
    },
    {
      id: "v18-algo-26", variant: 18, subject: "algo", number: 26, topic: "Строки",
      question: "Сложность наивного (без оптимизаций) поиска подстроки длины m в строке длины n",
      options: [
        { letter: "A", text: "O(n + m)" },
        { letter: "B", text: "O(log(n·m))" },
        { letter: "C", text: "O(n log m)" },
        { letter: "D", text: "O(m²)" },
        { letter: "E", text: "O(n·m)" }
      ],
      multi: false, correct: ["E"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Наивный алгоритм пытается сопоставить подстроку, начиная с каждой из ~n позиций, и в худшем случае на каждой позиции сравнивает до m символов — O(n·m) (E). Более быстрые алгоритмы (KMP, Бойера — Мура) снижают это до O(n+m)."
    },
    {
      id: "v18-algo-27", variant: 18, subject: "algo", number: 27, topic: "Трассировка кода (C++)",
      question: "Что выведет этот код на C++?",
      questionCode: "int count = 0;\nfor (int i = 1; i <= 10; i++)\n    if (i % 3 == 0)\n        count++;\ncout << count;",
      options: [
        { letter: "A", text: "2" },
        { letter: "B", text: "4" },
        { letter: "C", text: "5" },
        { letter: "D", text: "3" },
        { letter: "E", text: "10" }
      ],
      multi: false, correct: ["D"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Среди чисел от 1 до 10 кратны 3 только 3, 6 и 9 — три числа (D)."
    },
    {
      id: "v18-algo-28", variant: 18, subject: "algo", number: 28, topic: "Хеширование",
      question: "Какому свойству должна отвечать хорошая хеш-функция?",
      options: [
        { letter: "A", text: "равномерно распределять ключи по ячейкам" },
        { letter: "B", text: "всегда возвращать один и тот же результат для всех ключей" },
        { letter: "C", text: "быть максимально медленной для безопасности" },
        { letter: "D", text: "увеличивать размер входных данных" },
        { letter: "E", text: "сортировать ключи по возрастанию" }
      ],
      multi: false, correct: ["A"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Хорошая хеш-функция должна равномерно распределять ключи по ячейкам таблицы (A), минимизируя число коллизий, и вычисляться быстро."
    },
    {
      id: "v18-algo-29", variant: 18, subject: "algo", number: 29, topic: "Графы",
      question: "Сильно связные компоненты (strongly connected components) ориентированного графа — это",
      options: [
        { letter: "A", text: "все вершины с одинаковой степенью" },
        { letter: "B", text: "максимальные подмножества, где каждая вершина достижима из каждой" },
        { letter: "C", text: "кратчайший путь между двумя вершинами" },
        { letter: "D", text: "минимальное остовное дерево графа" },
        { letter: "E", text: "множество изолированных вершин без рёбер" }
      ],
      multi: false, correct: ["B"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Сильно связная компонента — это максимальное подмножество вершин, в котором из любой вершины можно по направленным рёбрам добраться до любой другой вершины этого же подмножества (B). Находится алгоритмами Косарайю или Тарьяна."
    },
    {
      id: "v18-algo-30", variant: 18, subject: "algo", number: 30, topic: "Трассировка кода (C++)",
      question: "Что выведет этот код на C++?",
      questionCode: "queue<int> q;\nq.push(1);\nq.push(2);\nq.push(3);\nq.pop();\nq.push(4);\ncout << q.front();",
      options: [
        { letter: "A", text: "1" },
        { letter: "B", text: "3" },
        { letter: "C", text: "4" },
        { letter: "D", text: "0" },
        { letter: "E", text: "2" }
      ],
      multi: false, correct: ["E"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "После push(1),push(2),push(3) очередь — [1,2,3] (1 спереди). pop() в очереди удаляет элемент СПЕРЕДИ (1) → [2,3]. push(4) добавляет в конец → [2,3,4]. front() показывает первый элемент — 2 (E)."
    }
  ]
};
