window.QUIZ_DATA = window.QUIZ_DATA || {};

/* Вариант 9 · Алгоритмы (папка questions/вариант-9/algoritm) — реальные вопросы
   с пробного тестирования. 30 вопросов, одиночный выбор A–E, 1 балл за вопрос
   (максимум 30). Ключ выведен по results/вариант-9/algoritm/results.txt: если
   пользователь ответил верно — keyConfidence "official"; если неверно — верный
   вариант выведен самостоятельно (keyConfidence "derived") с объяснением ошибки. */

window.QUIZ_DATA["v9-algo"] = {
  key: "v9-algo", variant: 9, subject: "algo", lang: "ru",
  title: "Вариант 9 · Алгоритмы",
  questions: [
    {
      id: "v9-algo-1", variant: 9, subject: "algo", number: 1, topic: "Графы", lang: "ru",
      question: "Топологическая абстракция, предназначенная для описания некоторых топологических свойств самых разных объектов и отношений между ними",
      options: [
        { letter: "A", text: "куст" }, { letter: "B", text: "область" }, { letter: "C", text: "граф" },
        { letter: "D", text: "вектор" }, { letter: "E", text: "массив" }
      ],
      multi: false, correct: ["C"], userAnswer: ["C"], officialResult: 1, keyConfidence: "official",
      explanation: "Граф — это абстрактная структура (вершины + рёбра), которая используется именно для описания объектов и отношений между ними в самых разных предметных областях. Верный ответ C."
    },
    {
      id: "v9-algo-2", variant: 9, subject: "algo", number: 2, topic: "Синтаксис C++", lang: "ru",
      question: "Операторы тела функции заключаются в операторные скобки (C++)",
      options: [
        { letter: "A", text: "{...}" }, { letter: "B", text: "{...)" }, { letter: "C", text: "(...)" },
        { letter: "D", text: "<...>" }, { letter: "E", text: "[...]" }
      ],
      multi: false, correct: ["A"], userAnswer: ["A"], officialResult: 1, keyConfidence: "official",
      explanation: "Тело функции в C++ ограничивается фигурными скобками { }. Верный ответ A. Вариант B — ловушка с несогласованными скобками ({ и ), такого синтаксиса не существует."
    },
    {
      id: "v9-algo-3", variant: 9, subject: "algo", number: 3, topic: "Сортировки", lang: "ru",
      question: "Элементы массива переупорядочиваются относительно выбранного опорного значения ключа. Рекомендуется выбирать опорный элемент близким к значению медианы – это",
      options: [
        { letter: "A", text: "сортировка узла" }, { letter: "B", text: "поразрядная сортировка" },
        { letter: "C", text: "быстрая сортировка" }, { letter: "D", text: "сортировка слиянием" },
        { letter: "E", text: "медленная сортировка" }
      ],
      multi: false, correct: ["C"], userAnswer: ["C"], officialResult: 1, keyConfidence: "official",
      explanation: "Переупорядочивание элементов относительно опорного значения (pivot) — это ключевой шаг быстрой сортировки (quicksort); совет выбирать опорный элемент близким к медиане — известная оптимизация именно этого алгоритма. Верный ответ C."
    },
    {
      id: "v9-algo-4", variant: 9, subject: "algo", number: 4, topic: "Синтаксис C++", lang: "ru",
      question: "Зарезервированные обозначения, имеющие специальное значение для компилятора и используемые только в одном определенном смысле",
      options: [
        { letter: "A", text: "неисполняемые операторы" }, { letter: "B", text: "исполняемые операторы" },
        { letter: "C", text: "ключевые слова" }, { letter: "D", text: "строковые литералы" },
        { letter: "E", text: "неисполняемые операнды" }
      ],
      multi: false, correct: ["C"], userAnswer: ["C"], officialResult: 1, keyConfidence: "official",
      explanation: "Это стандартное определение ключевых слов (keywords) языка программирования — зарезервированных идентификаторов с фиксированным единственным значением для компилятора. Верный ответ C."
    },
    {
      id: "v9-algo-5", variant: 9, subject: "algo", number: 5, topic: "Деревья", lang: "ru",
      question: "Узел может быть вставлен в двоичное дерево только в качестве",
      options: [
        { letter: "A", text: "корня" }, { letter: "B", text: "ветки" }, { letter: "C", text: "листа" },
        { letter: "D", text: "вершины" }, { letter: "E", text: "саженца" }
      ],
      multi: false, correct: ["C"], userAnswer: ["D"], officialResult: 0, keyConfidence: "derived",
      explanation: "При стандартной вставке в двоичное дерево (поиска) новый узел спускается до первой свободной позиции и всегда становится ЛИСТОМ — узлом без потомков в момент вставки; уже потом у него могут появиться собственные дети. Верный ответ C. «Вершина» (выбор D) — это просто синоним узла вообще и не отвечает на вопрос «в качестве чего именно» вставляется узел."
    },
    {
      id: "v9-algo-6", variant: 9, subject: "algo", number: 6, topic: "Синтаксис C++", lang: "ru",
      question: "Унарная операция, позволяющая получить адрес программного объекта (C++)",
      options: [
        { letter: "A", text: "!" }, { letter: "B", text: "&" }, { letter: "C", text: "?" },
        { letter: "D", text: "%" }, { letter: "E", text: "*" }
      ],
      multi: false, correct: ["B"], userAnswer: ["B"], officialResult: 1, keyConfidence: "official",
      explanation: "Унарный оператор & — оператор взятия адреса (address-of) в C++. Верный ответ B (оператор * — напротив, разыменование указателя)."
    },
    {
      id: "v9-algo-7", variant: 9, subject: "algo", number: 7, topic: "Циклы", lang: "ru",
      question: "Группа операторов, которая выполняется повторно до тех пор, пока удовлетворяется некоторое условие",
      options: [
        { letter: "A", text: "индукция" }, { letter: "B", text: "рефлексия" }, { letter: "C", text: "цикл" },
        { letter: "D", text: "метка" }, { letter: "E", text: "рекурсия" }
      ],
      multi: false, correct: ["C"], userAnswer: ["C"], officialResult: 1, keyConfidence: "official",
      explanation: "Повторное выполнение группы операторов при выполнении условия — это определение цикла. Верный ответ C."
    },
    {
      id: "v9-algo-8", variant: 9, subject: "algo", number: 8, topic: "Линейные списки", lang: "ru",
      question: "Линейный список, доступ к элементам которого происходит по принципу «Первым пришёл и первым ушёл» (First In and First Out)",
      options: [
        { letter: "A", text: "таблица (table)" }, { letter: "B", text: "порядок (ordnung)" },
        { letter: "C", text: "куча (coatch)" }, { letter: "D", text: "стек (stuck)" },
        { letter: "E", text: "очередь (queue)" }
      ],
      multi: false, correct: ["E"], userAnswer: ["E"], officialResult: 1, keyConfidence: "official",
      explanation: "FIFO (первым пришёл — первым ушёл) — это очередь (queue). Верный ответ E. Стек (D) работает по обратному принципу LIFO."
    },
    {
      id: "v9-algo-9", variant: 9, subject: "algo", number: 9, topic: "Синтаксис C++", lang: "ru",
      question: "Задают действия над данными",
      options: [
        { letter: "A", text: "исполняемые операторы" }, { letter: "B", text: "зависимые переменные" },
        { letter: "C", text: "ключевые операнды" }, { letter: "D", text: "независимые переменные" },
        { letter: "E", text: "неисполняемые операторы" }
      ],
      multi: false, correct: ["A"], userAnswer: ["A"], officialResult: 1, keyConfidence: "official",
      explanation: "Именно исполняемые операторы (в отличие от объявлений/деклараций) задают конкретные действия над данными во время выполнения программы. Верный ответ A."
    },
    {
      id: "v9-algo-10", variant: 9, subject: "algo", number: 10, topic: "Деревья", lang: "ru",
      question: "Деревья, узлы которых содержат две связки (одна из которых или обе могут быть нулевыми)",
      options: [
        { letter: "A", text: "ветвящиеся" }, { letter: "B", text: "корневые" }, { letter: "C", text: "листовые" },
        { letter: "D", text: "двоичные" }, { letter: "E", text: "кустистые" }
      ],
      multi: false, correct: ["D"], userAnswer: ["D"], officialResult: 1, keyConfidence: "official",
      explanation: "Узел ровно с двумя связками (указателями на потомков), каждая из которых может быть нулевой — определение двоичного (бинарного) дерева. Верный ответ D."
    },
    {
      id: "v9-algo-11", variant: 9, subject: "algo", number: 11, topic: "Асимптотическая эффективность", lang: "ru",
      question: "Характеристика качества алгоритма, показывающая насколько быстро работает алгоритм",
      options: [
        { letter: "A", text: "линейная эффективность (linear efficiency)" },
        { letter: "B", text: "минимальная эффективность (min efficiency)" },
        { letter: "C", text: "максимальная эффективность (max efficiency)" },
        { letter: "D", text: "временная эффективность (time efficiency)" },
        { letter: "E", text: "пространственная эффективность (space efficiency)" }
      ],
      multi: false, correct: ["D"], userAnswer: ["D"], officialResult: 1, keyConfidence: "official",
      explanation: "Скорость работы алгоритма характеризует временная эффективность (time efficiency); пространственная эффективность (E) отвечает за использование памяти, а не скорость. Верный ответ D."
    },
    {
      id: "v9-algo-12", variant: 9, subject: "algo", number: 12, topic: "Генерация случайных чисел", lang: "ru",
      question: "Фрагмент программы моделирует бросание игральной кости (20 раз).",
      questionCode:
        "# include <iostream.h>\n# include <stdlib.h>\nmain()\n{\nfor (int i=1; i<=20; i++)\n  {cout << 1 + rand() % 6;\n  }\nreturn;\n}",
      options: [
        { letter: "A", text: "от 1 до 6" }, { letter: "B", text: "от 0 до 6" }, { letter: "C", text: "от 0 до 5" },
        { letter: "D", text: "от 1 до 5" }, { letter: "E", text: "от 1 до 20" }
      ],
      multi: false, correct: ["A"], userAnswer: ["D"], officialResult: 0, keyConfidence: "derived",
      explanation: "rand() % 6 даёт остатки от 0 до 5 включительно; прибавляя 1, получаем интервал от 1 до 6 — верный ответ A. Выбор D («от 1 до 5») ошибочен: диапазон включает и 6 (когда rand()%6 равен 5)."
    },
    {
      id: "v9-algo-13", variant: 9, subject: "algo", number: 13, topic: "Сортировки", lang: "ru",
      question: "Если второй элемент массива меньше первого, эти элементы меняются местами. На втором шаге третий элемент размещается в правильном порядке по отношению к двум первым, и т.д.",
      options: [
        { letter: "A", text: "сортировка вставкой" }, { letter: "B", text: "распределяющая сортировка" },
        { letter: "C", text: "сортировка индексацией" }, { letter: "D", text: "сортировка пузырьками" },
        { letter: "E", text: "выборочная сортировка" }
      ],
      multi: false, correct: ["A"], userAnswer: ["D"], officialResult: 0, keyConfidence: "derived",
      explanation: "Пошаговая «встройка» очередного элемента в уже упорядоченную часть массива (сначала 2-й относительно 1-го, затем 3-й относительно первых двух и т.д.) — это определение сортировки ВСТАВКОЙ (insertion sort). Верный ответ A. Сортировка пузырьками (выбор D) устроена иначе: она многократно проходит по ВСЕМУ массиву, сравнивая и меняя местами каждую соседнюю пару за проход, а не «размещает k-й элемент относительно первых k−1»."
    },
    {
      id: "v9-algo-14", variant: 9, subject: "algo", number: 14, topic: "Асимптотическая эффективность", lang: "ru",
      question: "Класс сложности оптимизационных алгоритмов, реализующих полный перебор множества допустимых решений задачи",
      options: [
        { letter: "A", text: "кубическая" }, { letter: "B", text: "факториальная" }, { letter: "C", text: "параболическая" },
        { letter: "D", text: "бинарная" }, { letter: "E", text: "многомерная" }
      ],
      multi: false, correct: ["B"], userAnswer: ["B"], officialResult: 1, keyConfidence: "official",
      explanation: "Полный перебор всех допустимых решений (например, всех перестановок объектов, как в задаче коммивояжёра) даёт число вариантов порядка n! — факториальную сложность. Верный ответ B."
    },
    {
      id: "v9-algo-15", variant: 9, subject: "algo", number: 15, topic: "Линейные списки", lang: "ru",
      question: "Список, допускающий прохождение как в прямом, так и обратном направлении",
      options: [
        { letter: "A", text: "двусвязный" }, { letter: "B", text: "динамический" }, { letter: "C", text: "односвязный" },
        { letter: "D", text: "циклический" }, { letter: "E", text: "референтный" }
      ],
      multi: false, correct: ["A"], userAnswer: ["A"], officialResult: 1, keyConfidence: "official",
      explanation: "Только двусвязный список хранит указатели на предыдущий И следующий элемент, что позволяет проходить его в обоих направлениях. Верный ответ A (односвязный список, C, допускает движение только вперёд)."
    },
    {
      id: "v9-algo-16", variant: 9, subject: "algo", number: 16, topic: "Деревья", lang: "ru",
      question: "Упорядоченное дерево, состоящее из узлов двух типов: внешних узлов, не имеющих дочерних узлов, и внутренних узлов, каждый из которых имеет ровно два дочерних узла",
      options: [
        { letter: "A", text: "бинарный куст" }, { letter: "B", text: "двоичная куча" }, { letter: "C", text: "тернарное дерево" },
        { letter: "D", text: "красное дерево" }, { letter: "E", text: "бинарное дерево" }
      ],
      multi: false, correct: ["E"], userAnswer: ["E"], officialResult: 1, keyConfidence: "official",
      explanation: "Внутренние узлы ровно с двумя потомками и внешние узлы (листья) без потомков — стандартное определение бинарного (двоичного) дерева. Верный ответ E."
    },
    {
      id: "v9-algo-17", variant: 9, subject: "algo", number: 17, topic: "Синтаксис C++", lang: "ru",
      question: "Оператор возврата значений из функции",
      options: [
        { letter: "A", text: "if" }, { letter: "B", text: "for" }, { letter: "C", text: "while" },
        { letter: "D", text: "else" }, { letter: "E", text: "return" }
      ],
      multi: false, correct: ["E"], userAnswer: ["E"], officialResult: 1, keyConfidence: "official",
      explanation: "return — оператор, завершающий выполнение функции и возвращающий значение вызывающему коду. Верный ответ E."
    },
    {
      id: "v9-algo-18", variant: 9, subject: "algo", number: 18, topic: "Хеширование", lang: "ru",
      question: "Хеш-функция, используемая при двойном хешировании",
      options: [
        { letter: "A", text: "h(k,i) = (h₁(k)+ih₂(k)) mod h₁" },
        { letter: "B", text: "h(k,i) = (h₁(k)+ih₂(h₂)) mod m" },
        { letter: "C", text: "h(k,i) = (h₁(k)+ih₂(k)) mod m" },
        { letter: "D", text: "h(k,i) = (h₁(h₁)+ih₂(k)) mod m" },
        { letter: "E", text: "h(k,i) = (h₁(k)+ih₂(h₁)) mod m" }
      ],
      multi: false, correct: ["C"], userAnswer: ["C"], officialResult: 1, keyConfidence: "official",
      explanation: "Стандартная формула двойного хеширования: h(k,i) = (h₁(k) + i·h₂(k)) mod m, где обе вспомогательные функции берутся от исходного ключа k, а результат приводится по модулю размера таблицы m. Верный ответ C."
    },
    {
      id: "v9-algo-19", variant: 9, subject: "algo", number: 19, topic: "Синтаксис C++", lang: "ru",
      question: "Ключевое слово, указывающее, что объект не является модифицируемым и что любая попытка изменения этого объекта является ошибкой",
      options: [
        { letter: "A", text: "const" }, { letter: "B", text: "unit" }, { letter: "C", text: "base" },
        { letter: "D", text: "long" }, { letter: "E", text: "indef" }
      ],
      multi: false, correct: ["A"], userAnswer: ["A"], officialResult: 1, keyConfidence: "official",
      explanation: "const — модификатор, объявляющий объект неизменяемым; попытка его изменить приводит к ошибке компиляции. Верный ответ A."
    },
    {
      id: "v9-algo-20", variant: 9, subject: "algo", number: 20, topic: "Поиск", lang: "ru",
      question: "Двоичный поиск исключает после каждого просмотра следующую часть элементов массива",
      options: [
        { letter: "A", text: "треть" }, { letter: "B", text: "четверть" }, { letter: "C", text: "десятую" },
        { letter: "D", text: "пятую" }, { letter: "E", text: "половину" }
      ],
      multi: false, correct: ["E"], userAnswer: ["E"], officialResult: 1, keyConfidence: "official",
      explanation: "На каждом шаге двоичного поиска отсекается половина оставшихся элементов (та половина, где искомого значения точно нет). Верный ответ E."
    },
    {
      id: "v9-algo-21", variant: 9, subject: "algo", number: 21, topic: "Указатели и массивы (C++)", lang: "ru",
      question: "Имя массива есть адрес его начального элемента (и указатель на этот элемент). Поэтому инструкцию y = &a[0] можно записать в виде",
      options: [
        { letter: "A", text: "y = a(0);" }, { letter: "B", text: "y = 1;" }, { letter: "C", text: "y = a(1);" },
        { letter: "D", text: "y = a;" }, { letter: "E", text: "y = 0;" }
      ],
      multi: false, correct: ["D"], userAnswer: ["D"], officialResult: 1, keyConfidence: "official",
      explanation: "Поскольку имя массива a само по себе равно адресу его нулевого элемента (&a[0]), инструкцию можно сократить до y = a;. Верный ответ D."
    },
    {
      id: "v9-algo-22", variant: 9, subject: "algo", number: 22, topic: "Синтаксис C++", lang: "ru",
      question: "Оператор C, который означает «увеличить на единицу»",
      options: [
        { letter: "A", text: "+/" }, { letter: "B", text: "-+" }, { letter: "C", text: "++" },
        { letter: "D", text: "+-" }, { letter: "E", text: "/+" }
      ],
      multi: false, correct: ["C"], userAnswer: ["C"], officialResult: 1, keyConfidence: "official",
      explanation: "++ — оператор инкремента, увеличивающий значение переменной на единицу. Верный ответ C."
    },
    {
      id: "v9-algo-23", variant: 9, subject: "algo", number: 23, topic: "Графы", lang: "ru",
      question: "Изображение иллюстрирует граф с 4 вершинами (1, 2, 3, 4) и направленными рёбрами: 1→2, 1→3, 1→4, 4→2, 4→3 (стрелки идут от вершины 1 к вершинам 2, 3 и 4, а также от вершины 4 к вершинам 2 и 3).",
      options: [
        { letter: "A", text: "простой двунаправленный циклический граф" },
        { letter: "B", text: "сложный направленный циклический граф" },
        { letter: "C", text: "простой направленный граф" },
        { letter: "D", text: "простой ненаправленный циклический граф" },
        { letter: "E", text: "простой направленный нециклический граф" }
      ],
      multi: false, correct: ["E"], userAnswer: ["E"], officialResult: 0, keyConfidence: "derived",
      disputed: true,
      disputedNote: "Официальная система засчитала выбор E как ошибку (0 баллов), хотя по стандартному определению это и есть простой направленный ациклический граф (DAG): все 5 рёбер однонаправленные (нет пары противоположных стрелок между одними и теми же вершинами — значит граф «простой», не мультиграф), и по стрелкам невозможно вернуться в исходную вершину (вершина 1 — источник без входящих рёбер, вершины 2 и 3 — стоки без исходящих, цикла нет). Возможно, автоматический ключ ожидал более общий ответ C («простой направленный граф», без уточнения об ацикличности) или содержит ошибку.",
      explanation: "Все рёбра графа однонаправленные и различны (простой граф, не мультиграф), а по направлению стрелок вернуться в начальную вершину невозможно — значит граф ациклический. По определению это простой направленный ациклический граф (DAG) — вариант E, который и был выбран. ⚠ Система, тем не менее, засчитала этот ответ неверным — см. пояснение о спорности ниже."
    },
    {
      id: "v9-algo-24", variant: 9, subject: "algo", number: 24, topic: "Хеширование", lang: "ru",
      question: "Выбор хеш-функции зависит от",
      options: [
        { letter: "A", text: "типа ключа" }, { letter: "B", text: "вида данных" }, { letter: "C", text: "индекса ключа" },
        { letter: "D", text: "размера массива" }, { letter: "E", text: "типа переменной" }
      ],
      multi: false, correct: ["A"], userAnswer: ["A"], officialResult: 1, keyConfidence: "official",
      explanation: "Хеш-функция строится исходя из типа ключа (число, строка и т.д.) — именно от этого зависит, как ключ преобразуется в индекс таблицы. Верный ответ A."
    },
    {
      id: "v9-algo-25", variant: 9, subject: "algo", number: 25, topic: "Динамическая память (C++)", lang: "ru",
      question: "Функция C динамического выделения памяти",
      options: [
        { letter: "A", text: "molloc" }, { letter: "B", text: "sizeof" }, { letter: "C", text: "fullog" },
        { letter: "D", text: "calloc" }, { letter: "E", text: "realoc" }
      ],
      multi: false, correct: ["D"], userAnswer: ["D"], officialResult: 1, keyConfidence: "official",
      explanation: "calloc — настоящая функция стандартной библиотеки C для выделения памяти (с обнулением). Варианты A (molloc) и E (realoc) — намеренно искажённые написания malloc/realloc, C (fullog) — несуществующее слово, B (sizeof) — оператор размера типа, а не выделение памяти. Верный ответ D."
    },
    {
      id: "v9-algo-26", variant: 9, subject: "algo", number: 26, topic: "Обход графов", lang: "ru",
      question: "Алгоритм поиска вершин в графе по их ключам, использующий очередь как дополнительную структуру данных",
      options: [
        { letter: "A", text: "поиск по диагонали" }, { letter: "B", text: "поиск в ширину" }, { letter: "C", text: "поиск в глубину" },
        { letter: "D", text: "поиск по слоям" }, { letter: "E", text: "поиск по высоте" }
      ],
      multi: false, correct: ["B"], userAnswer: ["B"], officialResult: 1, keyConfidence: "official",
      explanation: "Поиск в ширину (BFS) использует очередь (FIFO) для хранения вершин, ожидающих обработки. Поиск в глубину (C), для сравнения, использует стек (или рекурсию). Верный ответ B."
    },
    {
      id: "v9-algo-27", variant: 9, subject: "algo", number: 27, topic: "Представление алгоритмов", lang: "ru",
      question: "Графическое представление алгоритма или фрагмента алгоритма",
      options: [
        { letter: "A", text: "математическая структура" }, { letter: "B", text: "технологическая схема" },
        { letter: "C", text: "физическая схема" }, { letter: "D", text: "карта компонентов" }, { letter: "E", text: "блок схема" }
      ],
      multi: false, correct: ["E"], userAnswer: ["E"], officialResult: 1, keyConfidence: "official",
      explanation: "Блок-схема — это и есть общепринятое графическое представление алгоритма. Верный ответ E."
    },
    {
      id: "v9-algo-28", variant: 9, subject: "algo", number: 28, topic: "Асимптотическая эффективность", lang: "ru",
      question: "Время выполнения алгоритмов, которые обрабатывают все элементы данных тройками",
      options: [
        { letter: "A", text: "linea (линейное)" }, { letter: "B", text: "N³" }, { letter: "C", text: "N-3" },
        { letter: "D", text: "3ᴺ" }, { letter: "E", text: "tetr (тетра-)" }
      ],
      multi: false, correct: ["B"], userAnswer: ["A"], officialResult: 0, keyConfidence: "derived",
      explanation: "Если алгоритм перебирает все возможные тройки элементов данных (аналог тройного вложенного цикла по N элементам), число операций растёт как N³ — кубическая сложность. Верный ответ B. Линейное время (выбор A) характерно для алгоритмов, обрабатывающих элементы ПО ОДНОМУ за проход, а не тройками."
    },
    {
      id: "v9-algo-29", variant: 9, subject: "algo", number: 29, topic: "Строки (C++ STL)", lang: "ru",
      question: "Функция в классе string C++ для обмена содержимого строк",
      options: [
        { letter: "A", text: "chanstr" }, { letter: "B", text: "swap" }, { letter: "C", text: "maxrstr" },
        { letter: "D", text: "instr" }, { letter: "E", text: "supstr" }
      ],
      multi: false, correct: ["B"], userAnswer: ["B"], officialResult: 1, keyConfidence: "official",
      explanation: "std::string::swap — стандартный метод обмена содержимым двух строк. Остальные варианты — несуществующие названия функций. Верный ответ B."
    },
    {
      id: "v9-algo-30", variant: 9, subject: "algo", number: 30, topic: "Хеширование", lang: "ru",
      question: "Идеальную хеш-функцию легко вычислить и аппроксимировать",
      options: [
        { letter: "A", text: "дельта-функцией" }, { letter: "B", text: "случайной функцией" },
        { letter: "C", text: "тригонометрической функцией" }, { letter: "D", text: "логарифмической функцией" },
        { letter: "E", text: "функцией гамма" }
      ],
      multi: false, correct: ["B"], userAnswer: ["D"], officialResult: 0, keyConfidence: "derived",
      explanation: "По классическому определению (гипотеза простого равномерного хеширования), идеальная хеш-функция должна быть легко вычислимой и вести себя подобно ИСТИННО СЛУЧАЙНОЙ функции — тогда ключи равномерно распределяются по ячейкам таблицы. Верный ответ B. Логарифмическая, тригонометрическая, дельта- и гамма-функции к качеству хеш-функции отношения не имеют."
    }
  ]
};
