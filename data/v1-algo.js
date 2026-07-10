window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["v1-algo"] = {
  key: "v1-algo", variant: 1, subject: "algo", lang: "ru",
  title: "Вариант 1 · Алгоритмы",
  questions: [
    {
      id: "v1-algo-1", variant: 1, subject: "algo", number: 1, topic: "Хеширование",
      question: "Функция, преобразующая ключ поиска в адрес в таблице",
      options: [
        { letter: "A", text: "хеш-функция" },
        { letter: "B", text: "адресная функция" },
        { letter: "C", text: "функция преобразования" },
        { letter: "D", text: "функция индекса" },
        { letter: "E", text: "функция-указатель" }
      ],
      multi: false, correct: ["A"], userAnswer: ["A"], officialResult: 1, keyConfidence: "official",
      explanation: "Хеш-функция отображает ключ поиска в индекс (адрес) ячейки хеш-таблицы. Остальные термины не являются устоявшимися названиями такого преобразования."
    },
    {
      id: "v1-algo-2", variant: 1, subject: "algo", number: 2, topic: "Структуры данных",
      question: "Структуры данных: связные списки, стеки и очереди",
      options: [
        { letter: "A", text: "сбалансированные" },
        { letter: "B", text: "нелинейные" },
        { letter: "C", text: "наивные" },
        { letter: "D", text: "экспоненциальные" },
        { letter: "E", text: "линейные" }
      ],
      multi: false, correct: ["E"], userAnswer: ["E"], officialResult: 1, keyConfidence: "official",
      explanation: "Списки, стеки и очереди — линейные структуры: элементы упорядочены в одну последовательность (у каждого один предыдущий и один следующий). Нелинейные — это деревья и графы."
    },
    {
      id: "v1-algo-3", variant: 1, subject: "algo", number: 3, topic: "Свойства алгоритмов",
      question: "Свойство применимости алгоритма для некоторого класса задач, различающихся лишь значениями входных данных",
      options: [
        { letter: "A", text: "результативность" },
        { letter: "B", text: "массовость" },
        { letter: "C", text: "дискретность" },
        { letter: "D", text: "конечность" },
        { letter: "E", text: "детерминированность" }
      ],
      multi: false, correct: ["B"], userAnswer: ["C"], officialResult: 0, keyConfidence: "derived",
      explanation: "Массовость — применимость алгоритма к целому классу однотипных задач, отличающихся только входными данными. Дискретность — это разбиение на шаги, результативность — получение результата, детерминированность — однозначность шагов."
    },
    {
      id: "v1-algo-4", variant: 1, subject: "algo", number: 4, topic: "Хеширование",
      question: "Масштабирование ключей, являющихся числами больше 0 и меньше 1, в диапазон [0, M-1]",
      options: [
        { letter: "A", text: "умножить на M и округлить до ближайшего целого числа снизу" },
        { letter: "B", text: "умножить на M-1 и округлить до целого числа из диапазона [0, M-1]" },
        { letter: "C", text: "умножить на M и округлить до целого числа из диапазона [0, M-1]" },
        { letter: "D", text: "умножить на M и округлить до целого числа сверху из диапазона [1, M-1]" },
        { letter: "E", text: "умножить на M-1 и округлить до наибольшего целого числа" }
      ],
      multi: false, correct: ["A"], userAnswer: ["C"], officialResult: 0, keyConfidence: "derived",
      explanation: "Для ключа k из [0,1) хеш вычисляется как floor(k·M) — умножаем на M и округляем вниз (до ближайшего целого снизу). Так как k<1, результат гарантированно попадает в [0, M-1]."
    },
    {
      id: "v1-algo-5", variant: 1, subject: "algo", number: 5, topic: "Хеширование",
      question: "Метод разрешения коллизий хеширования, при котором ключи, хешированные в одну ячейку, объединяются в связный список",
      options: [
        { letter: "A", text: "«при помощи столкновений»" },
        { letter: "B", text: "«при помощи зондирования»" },
        { letter: "C", text: "«при помощи кубов»" },
        { letter: "D", text: "«при помощи цепочек»" },
        { letter: "E", text: "«при помощи диаграмм»" }
      ],
      multi: false, correct: ["D"], userAnswer: ["D"], officialResult: 1, keyConfidence: "official",
      explanation: "Метод цепочек (chaining): все ключи с одинаковым хешем хранятся в связном списке, «прицепленном» к ячейке. Зондирование — это открытая адресация (другой метод)."
    },
    {
      id: "v1-algo-6", variant: 1, subject: "algo", number: 6, topic: "Графы",
      question: "Топологическая абстракция, предназначенная для описания некоторых топологических свойств самых разных объектов и отношений между ними",
      options: [
        { letter: "A", text: "граф" },
        { letter: "B", text: "куст" },
        { letter: "C", text: "массив" },
        { letter: "D", text: "область" },
        { letter: "E", text: "вектор" }
      ],
      multi: false, correct: ["A"], userAnswer: ["A"], officialResult: 1, keyConfidence: "official",
      explanation: "Граф — множество вершин и рёбер (связей) между ними — универсальная модель объектов и отношений между ними."
    },
    {
      id: "v1-algo-7", variant: 1, subject: "algo", number: 7, topic: "Сложность",
      question: "В «О-синтаксисе» вставка в неупорядоченном массиве выполняется за время",
      options: [
        { letter: "A", text: "O(N)" },
        { letter: "B", text: "O(N²)" },
        { letter: "C", text: "O(logN)" },
        { letter: "D", text: "O(N/2)" },
        { letter: "E", text: "O(1)" }
      ],
      multi: false, correct: ["E"], userAnswer: ["B"], officialResult: 0, keyConfidence: "derived",
      explanation: "В неупорядоченном массиве новый элемент можно просто дописать в конец — это одна операция, то есть O(1). Упорядочивать ничего не нужно."
    },
    {
      id: "v1-algo-8", variant: 1, subject: "algo", number: 8, topic: "Структуры данных",
      question: "Линейный набор элементов, называемых узлами (node), соединённых указателями (link) на следующий узел",
      options: [
        { letter: "A", text: "динамический массив" },
        { letter: "B", text: "несвязный список" },
        { letter: "C", text: "наивный список" },
        { letter: "D", text: "ассоциативный массив" },
        { letter: "E", text: "связный список" }
      ],
      multi: false, correct: ["E"], userAnswer: ["E"], officialResult: 1, keyConfidence: "official",
      explanation: "Связный список — это узлы, каждый из которых хранит данные и указатель (link) на следующий узел."
    },
    {
      id: "v1-algo-9", variant: 1, subject: "algo", number: 9, topic: "Язык C/C++",
      question: "Тип возвращаемого значения в C, в случае, когда функция не возвращает никакого значения",
      options: [
        { letter: "A", text: "void" },
        { letter: "B", text: "double" },
        { letter: "C", text: "boolean" },
        { letter: "D", text: "char" },
        { letter: "E", text: "float" }
      ],
      multi: false, correct: ["A"], userAnswer: ["A"], officialResult: 1, keyConfidence: "official",
      explanation: "void — «пустой» тип, обозначающий отсутствие возвращаемого значения. В C нет типа boolean (в C++ — bool)."
    },
    {
      id: "v1-algo-10", variant: 1, subject: "algo", number: 10, topic: "Язык C/C++",
      question: "Каждый оператор в языке C++ заканчивается",
      options: [
        { letter: "A", text: "." },
        { letter: "B", text: "/" },
        { letter: "C", text: "\\" },
        { letter: "D", text: ";" },
        { letter: "E", text: "," }
      ],
      multi: false, correct: ["D"], userAnswer: ["D"], officialResult: 1, keyConfidence: "official",
      explanation: "Инструкция (оператор) в C++ завершается точкой с запятой «;»."
    },
    {
      id: "v1-algo-11", variant: 1, subject: "algo", number: 11, topic: "Сложность",
      question: "Время выполнения программ, которые каждый элемент ввода подвергают небольшой обработке",
      options: [
        { letter: "A", text: "2N" },
        { letter: "B", text: "N⁵" },
        { letter: "C", text: "const" },
        { letter: "D", text: "параболический" },
        { letter: "E", text: "линейный" }
      ],
      multi: false, correct: ["E"], userAnswer: ["D"], officialResult: 0, keyConfidence: "derived",
      explanation: "Если на каждый из N элементов тратится небольшая (постоянная) работа, суммарное время пропорционально N — это линейное время O(N)."
    },
    {
      id: "v1-algo-12", variant: 1, subject: "algo", number: 12, topic: "Сложность",
      question: "Класс сложности алгоритма поиска минимального элемента в неупорядоченном массиве, предполагающего просмотр всего набора входных данных",
      options: [
        { letter: "A", text: "гиперболический" },
        { letter: "B", text: "квадратичный" },
        { letter: "C", text: "нелинейный" },
        { letter: "D", text: "десятичный" },
        { letter: "E", text: "линейный" }
      ],
      multi: false, correct: ["E"], userAnswer: ["B"], officialResult: 0, keyConfidence: "derived",
      explanation: "Чтобы найти минимум, нужно один раз просмотреть все N элементов — это линейная сложность O(N)."
    },
    {
      id: "v1-algo-13", variant: 1, subject: "algo", number: 13, topic: "Сортировки",
      question: "Базовый алгоритм быстрой сортировки был открыт Хоаром (C.A.R. Hoare) в",
      options: [
        { letter: "A", text: "1905 году" },
        { letter: "B", text: "1870 году" },
        { letter: "C", text: "1917 году" },
        { letter: "D", text: "1960 году" },
        { letter: "E", text: "2000 году" }
      ],
      multi: false, correct: ["D"], userAnswer: ["D"], officialResult: 1, keyConfidence: "official",
      explanation: "Быструю сортировку (quicksort) Тони Хоар разработал около 1960 года (опубликована в 1961–1962 гг.)."
    },
    {
      id: "v1-algo-14", variant: 1, subject: "algo", number: 14, topic: "Хеширование",
      question: "Методы разрешения коллизий",
      options: [
        { letter: "A", text: "открытой адресации, цепочки, линейного исследования" },
        { letter: "B", text: "закрытой адресации, ветвления, линейного исследования" },
        { letter: "C", text: "кубического исследования, двоичного хеширования" },
        { letter: "D", text: "закрытой адресации, цепочки, линейного исследования" },
        { letter: "E", text: "адресации, удаления, линейного возрастания" }
      ],
      multi: false, correct: ["A"], userAnswer: ["D"], officialResult: 0, keyConfidence: "derived",
      explanation: "Основные методы: открытая адресация, метод цепочек и линейное исследование (probing). Вариант A перечисляет именно их."
    },
    {
      id: "v1-algo-15", variant: 1, subject: "algo", number: 15, topic: "Сортировки", authored: true,
      question: "Класс временно́й сложности сортировки слиянием (merge sort) в худшем случае",
      options: [
        { letter: "A", text: "O(n)" },
        { letter: "B", text: "O(n²)" },
        { letter: "C", text: "O(log n)" },
        { letter: "D", text: "O(n·log n)" },
        { letter: "E", text: "O(1)" }
      ],
      multi: false, correct: ["D"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "🆕 Дополнительный вопрос (составлен для тренировки — оригинал не был сфотографирован). Сортировка слиянием делит массив пополам (log n уровней) и на каждом уровне сливает подмассивы за O(n), поэтому её сложность O(n·log n) — причём во всех случаях, включая худший. O(n²) — это худший случай сортировок вставками и пузырьком."
    },
    {
      id: "v1-algo-16", variant: 1, subject: "algo", number: 16, topic: "Деревья",
      question: "Основные операции в бинарном дереве поиска выполняются за время, пропорциональное его",
      options: [
        { letter: "A", text: "количеству родительских узлов" },
        { letter: "B", text: "количеству дочерних узлов" },
        { letter: "C", text: "количеству ветвей" },
        { letter: "D", text: "ширине" },
        { letter: "E", text: "высоте" }
      ],
      multi: false, correct: ["E"], userAnswer: ["C"], officialResult: 0, keyConfidence: "derived",
      explanation: "Поиск, вставка и удаление в бинарном дереве поиска идут по пути от корня к листу, поэтому время пропорционально высоте дерева."
    },
    {
      id: "v1-algo-17", variant: 1, subject: "algo", number: 17, topic: "Структуры данных",
      question: "Базовая структура данных, в которой каждый элемент содержит информацию, необходимую для получения следующего элемента",
      options: [
        { letter: "A", text: "связный список" },
        { letter: "B", text: "цепочный список" },
        { letter: "C", text: "множество" },
        { letter: "D", text: "массив" },
        { letter: "E", text: "наивный список" }
      ],
      multi: false, correct: ["A"], userAnswer: ["B"], officialResult: 0, keyConfidence: "derived",
      explanation: "В связном списке каждый узел хранит указатель на следующий, то есть информацию для перехода к следующему элементу. «Цепочный список» — не устоявшийся термин."
    },
    {
      id: "v1-algo-18", variant: 1, subject: "algo", number: 18, topic: "Язык C/C++",
      question: "Функция в класс string C++ для выделения подстроки",
      options: [
        { letter: "A", text: "minstr" },
        { letter: "B", text: "supremum" },
        { letter: "C", text: "outstr" },
        { letter: "D", text: "swap" },
        { letter: "E", text: "substr" }
      ],
      multi: false, correct: ["E"], userAnswer: ["A"], officialResult: 0, keyConfidence: "derived",
      explanation: "Метод substr(pos, len) класса std::string возвращает подстроку. swap меняет строки местами, остальных методов не существует."
    },
    {
      id: "v1-algo-19", variant: 1, subject: "algo", number: 19, topic: "Сортировки",
      question: "Процесс упорядоченного размещения элементов в массиве",
      options: [
        { letter: "A", text: "сравнение" },
        { letter: "B", text: "поиск" },
        { letter: "C", text: "фильтр" },
        { letter: "D", text: "перебор" },
        { letter: "E", text: "сортировка" }
      ],
      multi: false, correct: ["E"], userAnswer: ["E"], officialResult: 1, keyConfidence: "official",
      explanation: "Сортировка — это упорядоченное размещение элементов (по возрастанию или убыванию)."
    },
    {
      id: "v1-algo-20", variant: 1, subject: "algo", number: 20, topic: "Деревья", authored: true,
      question: "Обход бинарного дерева, при котором узлы посещаются в порядке «левое поддерево → корень → правое поддерево»",
      options: [
        { letter: "A", text: "прямой (pre-order)" },
        { letter: "B", text: "симметричный (in-order)" },
        { letter: "C", text: "обратный (post-order)" },
        { letter: "D", text: "обход в ширину (по уровням)" },
        { letter: "E", text: "случайный обход" }
      ],
      multi: false, correct: ["B"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "🆕 Дополнительный вопрос (составлен для тренировки — оригинал не был сфотографирован). Симметричный обход (in-order): левое поддерево → корень → правое поддерево. Для дерева поиска он выдаёт элементы в отсортированном порядке. Прямой (pre-order) — корень→левое→правое, обратный (post-order) — левое→правое→корень."
    },
    {
      id: "v1-algo-21", variant: 1, subject: "algo", number: 21, topic: "Язык C/C++",
      question: "Служебное слово для обозначения строковых типов данных",
      options: [
        { letter: "A", text: "string" },
        { letter: "B", text: "float" },
        { letter: "C", text: "const" },
        { letter: "D", text: "set" },
        { letter: "E", text: "integer" }
      ],
      multi: false, correct: ["A"], userAnswer: ["A"], officialResult: 1, keyConfidence: "official",
      explanation: "Строковый тип обозначается словом string. float — вещественный тип, integer/int — целочисленный, const — модификатор."
    },
    {
      id: "v1-algo-22", variant: 1, subject: "algo", number: 22, topic: "Поиск",
      question: "Элементы массива последовательно проверяются на равенство с заданным значением. Работа алгоритма прерывается при обнаружении первого совпадения – это алгоритм",
      options: [
        { letter: "A", text: "сортировки хешем" },
        { letter: "B", text: "линейного поиска" },
        { letter: "C", text: "индуктивного анализа" },
        { letter: "D", text: "быстрой рекурсии" },
        { letter: "E", text: "двоичного поиска" }
      ],
      multi: false, correct: ["B"], userAnswer: ["B"], officialResult: 1, keyConfidence: "official",
      explanation: "Последовательный перебор элементов до первого совпадения — это линейный (последовательный) поиск. Двоичный поиск требует отсортированного массива и делит его пополам."
    },
    {
      id: "v1-algo-23", variant: 1, subject: "algo", number: 23, topic: "Массивы",
      question: "Фрагмент кода на языке C++ определяет сумму",
      questionCode: "total = 0\nfor (row = 0; row < 10; row++)\n  for (col = 0; col < 10; col++)\n    total += a[row][col];",
      options: [
        { letter: "A", text: "всех элементов массива" },
        { letter: "B", text: "первой строки массива" },
        { letter: "C", text: "первого столбца массива" },
        { letter: "D", text: "последней строки массива" },
        { letter: "E", text: "последнего столбца массива" }
      ],
      multi: false, correct: ["A"], userAnswer: ["A"], officialResult: 1, keyConfidence: "official",
      explanation: "Двойной цикл по всем строкам (row) и всем столбцам (col) прибавляет каждый элемент a[row][col] к total — считается сумма всех элементов двумерного массива."
    },
    {
      id: "v1-algo-24", variant: 1, subject: "algo", number: 24, topic: "Структуры данных", authored: true,
      question: "Структура данных, работающая по принципу «последним пришёл — первым ушёл» (LIFO)",
      options: [
        { letter: "A", text: "очередь (queue)" },
        { letter: "B", text: "стек (stack)" },
        { letter: "C", text: "двусвязный список" },
        { letter: "D", text: "хеш-таблица" },
        { letter: "E", text: "двоичное дерево поиска" }
      ],
      multi: false, correct: ["B"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "🆕 Дополнительный вопрос (составлен для тренировки — оригинал не был сфотографирован). Стек работает по принципу LIFO: добавление (push) и удаление (pop) выполняются с одного конца — вершины. Очередь, наоборот, работает по принципу FIFO («первым пришёл — первым ушёл»)."
    },
    {
      id: "v1-algo-25", variant: 1, subject: "algo", number: 25, topic: "Язык C/C++",
      question: "Один или более символов, определяющих действие над операндами",
      options: [
        { letter: "A", text: "знак разделителя" },
        { letter: "B", text: "знак функционала" },
        { letter: "C", text: "знак литерала" },
        { letter: "D", text: "знак операции" },
        { letter: "E", text: "ключевой знак" }
      ],
      multi: false, correct: ["D"], userAnswer: ["D"], officialResult: 1, keyConfidence: "official",
      explanation: "Знак операции (оператор) — один или несколько символов, задающих действие над операндами (например + - * / << ==)."
    },
    {
      id: "v1-algo-26", variant: 1, subject: "algo", number: 26, topic: "Свойства алгоритмов",
      question: "Корректность данных",
      options: [
        { letter: "A", text: "соответствие среде разработки" },
        { letter: "B", text: "интерпретируемость бизнес-аналитиком" },
        { letter: "C", text: "соответствие условиям решаемой задачи" },
        { letter: "D", text: "непротиворечивость входных и выходных данных" },
        { letter: "E", text: "соответствие решениям аналогичных задач" }
      ],
      multi: false, correct: ["C"], userAnswer: ["D"], officialResult: 0, keyConfidence: "derived",
      explanation: "Корректность данных — это их соответствие условиям (требованиям) решаемой задачи. Остальные варианты описывают другие свойства (совместимость, интерпретируемость и т.п.)."
    },
    {
      id: "v1-algo-27", variant: 1, subject: "algo", number: 27, topic: "Язык C/C++",
      question: "Задают действия над данными",
      options: [
        { letter: "A", text: "ключевые операнды" },
        { letter: "B", text: "зависимые переменные" },
        { letter: "C", text: "исполняемые операторы" },
        { letter: "D", text: "неисполняемые операторы" },
        { letter: "E", text: "независимые переменные" }
      ],
      multi: false, correct: ["C"], userAnswer: ["A"], officialResult: 0, keyConfidence: "derived",
      explanation: "Действия над данными задают исполняемые операторы (инструкции). Неисполняемые операторы (объявления) лишь описывают данные, но не выполняют действий."
    },
    {
      id: "v1-algo-28", variant: 1, subject: "algo", number: 28, topic: "Сложность", authored: true,
      question: "Класс временно́й сложности двоичного (бинарного) поиска в отсортированном массиве",
      options: [
        { letter: "A", text: "O(n)" },
        { letter: "B", text: "O(n·log n)" },
        { letter: "C", text: "O(log n)" },
        { letter: "D", text: "O(n²)" },
        { letter: "E", text: "O(1)" }
      ],
      multi: false, correct: ["C"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "🆕 Дополнительный вопрос (составлен для тренировки — оригинал не был сфотографирован). Двоичный поиск на каждом шаге вдвое сокращает область поиска, поэтому число шагов ≈ log₂n → сложность O(log n). Это требует заранее отсортированного массива. Линейный (последовательный) поиск — O(n)."
    },
    {
      id: "v1-algo-29", variant: 1, subject: "algo", number: 29, topic: "Язык C/C++",
      question: "Перегрузка операции << в C++ позволяет использовать её, в зависимости от контекста, как",
      options: [
        { letter: "A", text: "«вывести из потока» или «сдвиг влево»" },
        { letter: "B", text: "нельзя перегружать эту операцию" },
        { letter: "C", text: "«вывести из потока» или «сдвиг вправо»" },
        { letter: "D", text: "«поместить в поток» или «сдвиг вправо»" },
        { letter: "E", text: "«поместить в поток» или «сдвиг влево»" }
      ],
      multi: false, correct: ["E"], userAnswer: ["C"], officialResult: 0, keyConfidence: "derived",
      explanation: "Операция << означает либо побитовый сдвиг ВЛЕВО, либо (при перегрузке для потоков, cout <<) «поместить в поток» — вывод. Извлечение из потока — это >> ."
    },
    {
      id: "v1-algo-30", variant: 1, subject: "algo", number: 30, topic: "Язык C/C++",
      question: "Структура функции языке C++",
      options: [
        { letter: "A", text: "[тип локальных переменных] [параметры (список аргументов)] {тело функции}" },
        { letter: "B", text: "[тип глобальных переменных] [имя функции (список параметров)] {тело функции}" },
        { letter: "C", text: "[тип значения константы] [имя функции (список параметров)] {тело функции}" },
        { letter: "D", text: "[тип возвращаемого значения] [аргументы (список параметров)] {тело функции}" },
        { letter: "E", text: "[тип возвращаемого значения] [имя функции (список параметров)] {тело функции}" }
      ],
      multi: false, correct: ["E"], userAnswer: ["B"], officialResult: 0, keyConfidence: "derived",
      explanation: "Функция в C++ описывается как: тип_возвращаемого_значения имя_функции(список_параметров) { тело }. Именно это перечисляет вариант E."
    }
  ]
};
