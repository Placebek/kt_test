window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["v4-algo"] = {
  key: "v4-algo", variant: 4, subject: "algo", lang: "ru",
  title: "Вариант 4 · Алгоритмы (тренировочный)",
  questions: [
    {
      id: "v4-algo-1", variant: 4, subject: "algo", number: 1, topic: "Хеширование",
      question: "Коэффициент загрузки (load factor) хеш-таблицы — это",
      options: [
        { letter: "A", text: "число коллизий при вставке ключа" },
        { letter: "B", text: "размер таблицы к числу ключей" },
        { letter: "C", text: "занятых ячеек к размеру таблицы" },
        { letter: "D", text: "длина самой длинной цепочки" },
        { letter: "E", text: "среднее число сравнений при поиске" }
      ],
      multi: false, correct: ["C"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Коэффициент загрузки α = (число занятых ячеек) / (размер таблицы) (C). Он показывает степень заполненности и влияет на вероятность коллизий. Вариант B переставляет отношение, остальные описывают другие величины."
    },
    {
      id: "v4-algo-2", variant: 4, subject: "algo", number: 2, topic: "Сложность",
      question: "Запись O(1) для времени работы алгоритма означает, что",
      options: [
        { letter: "A", text: "алгоритм делает ровно одну операцию" },
        { letter: "B", text: "программа завершается меньше секунды" },
        { letter: "C", text: "памяти требуется не больше байта" },
        { letter: "D", text: "в цикле проходит одна итерация" },
        { letter: "E", text: "время не растёт с размером входа" }
      ],
      multi: false, correct: ["E"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "O(1) — константное время: оно не растёт с размером входа n (E). Это не «одна операция» (A) и не «одна секунда» (B): константа может быть любой, важно лишь отсутствие роста с n."
    },
    {
      id: "v4-algo-3", variant: 4, subject: "algo", number: 3, topic: "Сортировки",
      question: "Какая из сортировок в классическом виде является устойчивой (stable)?",
      options: [
        { letter: "A", text: "слиянием (merge sort)" },
        { letter: "B", text: "быстрая (quicksort)" },
        { letter: "C", text: "пирамидальная (heapsort)" },
        { letter: "D", text: "выбором (selection)" },
        { letter: "E", text: "Шелла (shell sort)" }
      ],
      multi: false, correct: ["A"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Сортировка слиянием (A) устойчива: сохраняет относительный порядок равных элементов. Быстрая, пирамидальная, выбором и Шелла в классической реализации неустойчивы."
    },
    {
      id: "v4-algo-4", variant: 4, subject: "algo", number: 4, topic: "Структуры данных",
      question: "Очередь (queue) работает по принципу",
      options: [
        { letter: "A", text: "LIFO — последним пришёл, первым вышел" },
        { letter: "B", text: "по величине приоритета элемента" },
        { letter: "C", text: "в случайном порядке извлечения" },
        { letter: "D", text: "FIFO" },
        { letter: "E", text: "FILO — первым пришёл, последним вышел" }
      ],
      multi: false, correct: ["D"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Очередь — это FIFO (первым пришёл — первым вышел) (D). Принцип LIFO (A) — у стека; «по приоритету» (B) — это очередь с приоритетом. Внимание: FILO ≡ LIFO, а не FIFO."
    },
    {
      id: "v4-algo-5", variant: 4, subject: "algo", number: 5, topic: "Язык C/C++",
      question: "Значение выражения 7 / 2 в C++, если оба операнда типа int",
      options: [
        { letter: "A", text: "3.5" },
        { letter: "B", text: "3" },
        { letter: "C", text: "4" },
        { letter: "D", text: "2" },
        { letter: "E", text: "деление выполнить нельзя" }
      ],
      multi: false, correct: ["B"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "При делении двух int дробная часть отбрасывается: 7 / 2 = 3 (B), а не 3.5. Чтобы получить 3.5, хотя бы один операнд должен быть вещественным (например 7.0 / 2)."
    },
    {
      id: "v4-algo-6", variant: 4, subject: "algo", number: 6, topic: "Язык C/C++",
      question: "Значение выражения 17 % 5",
      options: [
        { letter: "A", text: "3.4" },
        { letter: "B", text: "3" },
        { letter: "C", text: "12" },
        { letter: "D", text: "5" },
        { letter: "E", text: "2" }
      ],
      multi: false, correct: ["E"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Оператор % возвращает остаток: 17 = 5·3 + 2, остаток равен 2 (E). Не путайте с частным (это 3); операнды % должны быть целыми."
    },
    {
      id: "v4-algo-7", variant: 4, subject: "algo", number: 7, topic: "Деревья",
      question: "Максимальное число узлов в двоичном дереве высоты h (высота корня равна 0)",
      options: [
        { letter: "A", text: "2^h" },
        { letter: "B", text: "2^h − 1" },
        { letter: "C", text: "2^(h+1) − 1, сумма всех уровней" },
        { letter: "D", text: "h · (h + 1)" },
        { letter: "E", text: "2h + 1" }
      ],
      multi: false, correct: ["C"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "На уровне i помещается до 2^i узлов; сумма 2^0 + 2^1 + … + 2^h = 2^(h+1) − 1 (C). Вариант A (2^h) — максимум узлов лишь на последнем уровне, а не во всём дереве."
    },
    {
      id: "v4-algo-8", variant: 4, subject: "algo", number: 8, topic: "Графы",
      question: "Обход графа, который естественно реализуется с помощью очереди",
      options: [
        { letter: "A", text: "поиск в ширину, обход по уровням" },
        { letter: "B", text: "поиск в глубину с возвратом назад" },
        { letter: "C", text: "алгоритм Дейкстры для путей" },
        { letter: "D", text: "топологическая сортировка вершин" },
        { letter: "E", text: "построение минимального остова" }
      ],
      multi: false, correct: ["A"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Поиск в ширину (BFS) использует очередь: вершины обрабатываются по уровням удаления от старта (A). Поиск в глубину (B), наоборот, опирается на стек или рекурсию."
    },
    {
      id: "v4-algo-9", variant: 4, subject: "algo", number: 9, topic: "Графы",
      question: "Обход графа, который естественно реализуется через стек или рекурсию",
      options: [
        { letter: "A", text: "поиск в ширину по уровням графа" },
        { letter: "B", text: "обход с приоритетной очередью" },
        { letter: "C", text: "волновой алгоритм на сетке" },
        { letter: "D", text: "поиск в глубину или рекурсия" },
        { letter: "E", text: "обход по возрастанию весов рёбер" }
      ],
      multi: false, correct: ["D"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Поиск в глубину (DFS) идёт вглубь по одной ветви, откатываясь назад, — это поведение стека или рекурсии (D). Обход по уровням (A) — это уже BFS на основе очереди."
    },
    {
      id: "v4-algo-10", variant: 4, subject: "algo", number: 10, topic: "Рекурсия",
      question: "Что обязательно нужно, чтобы рекурсивная функция завершалась?",
      options: [
        { letter: "A", text: "цикл while в теле функции" },
        { letter: "B", text: "базовый случай завершения" },
        { letter: "C", text: "не меньше двух параметров" },
        { letter: "D", text: "статическая переменная внутри" },
        { letter: "E", text: "тип возврата, отличный от void" }
      ],
      multi: false, correct: ["B"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Нужен базовый случай (B) — условие, при котором рекурсия прекращается без нового вызова себя. Без него вызовы идут бесконечно и переполняют стек. Цикл, число параметров и тип возврата к завершению отношения не имеют."
    },
    {
      id: "v4-algo-11", variant: 4, subject: "algo", number: 11, topic: "Указатели",
      question: "Что делает унарный оператор * , применённый к указателю в выражении?",
      options: [
        { letter: "A", text: "берёт адрес переменной в памяти" },
        { letter: "B", text: "умножает два указателя между собой" },
        { letter: "C", text: "объявляет массив фиксированной длины" },
        { letter: "D", text: "сравнивает два адреса на равенство" },
        { letter: "E", text: "обращается к значению по адресу" }
      ],
      multi: false, correct: ["E"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Унарный * разыменовывает указатель — обращается к значению по хранимому адресу (E). Адрес переменной берёт оператор & (A). Не путайте разыменование с бинарным умножением."
    },
    {
      id: "v4-algo-12", variant: 4, subject: "algo", number: 12, topic: "Язык C/C++",
      question: "Сколько раз выполнится тело цикла for(int i = 0; i < 5; i++) ?",
      options: [
        { letter: "A", text: "5" },
        { letter: "B", text: "4" },
        { letter: "C", text: "6" },
        { letter: "D", text: "0" },
        { letter: "E", text: "бесконечно" }
      ],
      multi: false, correct: ["A"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "i пробегает значения 0, 1, 2, 3, 4 — ровно 5 итераций (A). При i = 5 условие i < 5 ложно, цикл останавливается."
    },
    {
      id: "v4-algo-13", variant: 4, subject: "algo", number: 13, topic: "Язык C/C++",
      question: "Что выведет фрагмент: int x = 5; cout << x++;",
      options: [
        { letter: "A", text: "6, а затем x станет равен 7" },
        { letter: "B", text: "сначала ничего, потом 6" },
        { letter: "C", text: "ошибка: нельзя выводить x++" },
        { letter: "D", text: "5, значение до инкремента" },
        { letter: "E", text: "4, из-за декремента" }
      ],
      multi: false, correct: ["D"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Постфиксный x++ сначала возвращает текущее значение (5), и лишь потом увеличивает x. Поэтому выведется 5 (D), а x станет равен 6 уже после вывода."
    },
    {
      id: "v4-algo-14", variant: 4, subject: "algo", number: 14, topic: "Сложность",
      question: "Асимптотическая сложность двух вложенных циклов, каждый из которых идёт до n",
      options: [
        { letter: "A", text: "O(n)" },
        { letter: "B", text: "O(log n)" },
        { letter: "C", text: "O(n²)" },
        { letter: "D", text: "O(n · log n)" },
        { letter: "E", text: "O(2^n)" }
      ],
      multi: false, correct: ["C"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Внутренний цикл выполняется n раз для каждой из n итераций внешнего: n · n = n² операций → O(n²) (C)."
    },
    {
      id: "v4-algo-15", variant: 4, subject: "algo", number: 15, topic: "Сортировки",
      question: "Порядок роста числа сравнений сортировки пузырьком в худшем случае",
      options: [
        { letter: "A", text: "O(n), один проход массива" },
        { letter: "B", text: "O(n²), вложенные циклы" },
        { letter: "C", text: "O(n · log n), как быстрая" },
        { letter: "D", text: "O(log n), деление пополам" },
        { letter: "E", text: "O(1), не зависит от n" }
      ],
      multi: false, correct: ["B"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Пузырёк сравнивает соседние элементы во вложенных циклах — порядка n² сравнений в худшем случае → O(n²) (B). O(n·log n) — это быстрая или слиянием, но не пузырёк."
    },
    {
      id: "v4-algo-16", variant: 4, subject: "algo", number: 16, topic: "Деревья",
      question: "Верное свойство узла в дереве двоичного поиска (BST)",
      options: [
        { letter: "A", text: "левый потомок больше правого" },
        { letter: "B", text: "высоты поддеревьев равны" },
        { letter: "C", text: "корень — максимум дерева" },
        { letter: "D", text: "число узлов на уровне чётно" },
        { letter: "E", text: "в левом поддереве ключи меньше узла, в правом — больше" }
      ],
      multi: false, correct: ["E"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "В BST для любого узла все ключи левого поддерева меньше ключа узла, а правого — больше (E). Равенство высот (B) — свойство сбалансированного дерева, а не BST вообще."
    },
    {
      id: "v4-algo-17", variant: 4, subject: "algo", number: 17, topic: "Структуры данных",
      question: "Какая структура НЕ обеспечивает доступ к элементу по индексу за O(1)?",
      options: [
        { letter: "A", text: "связный список по ссылкам" },
        { letter: "B", text: "обычный массив в C++" },
        { letter: "C", text: "вектор std::vector" },
        { letter: "D", text: "статический массив фиксированный" },
        { letter: "E", text: "хеш-таблица в среднем случае" }
      ],
      multi: false, correct: ["A"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "В связном списке нет адресной арифметики: чтобы дойти до k-го элемента, надо пройти по ссылкам от начала — это O(n) (A). Массивы и векторы дают доступ по индексу за O(1). Внимание: вопрос с отрицанием «НЕ»."
    },
    {
      id: "v4-algo-18", variant: 4, subject: "algo", number: 18, topic: "Язык C/C++",
      question: "Какой заголовочный файл нужен для потокового ввода-вывода (cin/cout) по стандарту C++?",
      options: [
        { letter: "A", text: "<stdio.h> из языка C" },
        { letter: "B", text: "<iostream.h>, старое имя" },
        { letter: "C", text: "<conio.h> для консоли" },
        { letter: "D", text: "<iostream> без расширения" },
        { letter: "E", text: "<cstdlib> общего вида" }
      ],
      multi: false, correct: ["D"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Стандартный заголовок — <iostream> без расширения .h (D). Написание <iostream.h> (B) — устаревшее и в современном стандарте недопустимо. Будьте внимательны к точному написанию."
    },
    {
      id: "v4-algo-19", variant: 4, subject: "algo", number: 19, topic: "Поиск",
      question: "Обязательное условие применимости двоичного (бинарного) поиска",
      options: [
        { letter: "A", text: "значения уникальны" },
        { letter: "B", text: "размер — степень двойки" },
        { letter: "C", text: "массив предварительно отсортирован по возрастанию" },
        { letter: "D", text: "элементы целочисленные" },
        { letter: "E", text: "нет повторов ключей" }
      ],
      multi: false, correct: ["C"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Двоичный поиск на каждом шаге отбрасывает половину диапазона — это корректно только для упорядоченных данных, массив должен быть отсортирован (C). Уникальность, тип элементов и размер значения не имеют."
    },
    {
      id: "v4-algo-20", variant: 4, subject: "algo", number: 20, topic: "Массивы",
      question: "Индекс первого элемента массива int a[10] в C++",
      options: [
        { letter: "A", text: "1" },
        { letter: "B", text: "0" },
        { letter: "C", text: "−1" },
        { letter: "D", text: "зависит от компилятора" },
        { letter: "E", text: "равен длине массива минус один" }
      ],
      multi: false, correct: ["B"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "В C++ индексация массивов начинается с нуля: первый элемент — a[0] (B), последний — a[9]. Обращение к a[10] выходит за границы массива."
    },
    {
      id: "v4-algo-21", variant: 4, subject: "algo", number: 21, topic: "Язык C/C++",
      question: "Функция для вычисления длины C-строки (const char*) из заголовка <cstring>",
      options: [
        { letter: "A", text: "strlen" },
        { letter: "B", text: "length" },
        { letter: "C", text: "sizeof" },
        { letter: "D", text: "size" },
        { letter: "E", text: "count" }
      ],
      multi: false, correct: ["A"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Длину C-строки (до нулевого символа) возвращает strlen (A). Внимание: sizeof (C) даёт размер типа/массива в байтах, а .length()/.size() — методы класса std::string, а не C-строки."
    },
    {
      id: "v4-algo-22", variant: 4, subject: "algo", number: 22, topic: "Сложность",
      question: "Какая из сложностей растёт быстрее всех при больших n?",
      options: [
        { letter: "A", text: "O(n · log n)" },
        { letter: "B", text: "O(n²)" },
        { letter: "C", text: "O(n³)" },
        { letter: "D", text: "O(n^10)" },
        { letter: "E", text: "O(2^n), экспоненциальный рост" }
      ],
      multi: false, correct: ["E"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Экспонента 2^n (E) рано или поздно обгоняет любой полином, включая n^10. Высокая степень n^10 (D) выглядит внушительно, но остаётся полиномом и при больших n проигрывает экспоненте."
    },
    {
      id: "v4-algo-23", variant: 4, subject: "algo", number: 23, topic: "Структуры данных",
      question: "Какие основные операции предоставляет абстрактный тип «стек»?",
      options: [
        { letter: "A", text: "enqueue и dequeue" },
        { letter: "B", text: "push и pop с вершины" },
        { letter: "C", text: "insert и remove по индексу" },
        { letter: "D", text: "чтение первого и последнего" },
        { letter: "E", text: "вставка элемента в середину" }
      ],
      multi: false, correct: ["B"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Стек работает через push (положить на вершину) и pop (снять с вершины) (B). enqueue/dequeue (A) — операции очереди. Стек не даёт доступа к произвольному элементу или середине."
    },
    {
      id: "v4-algo-24", variant: 4, subject: "algo", number: 24, topic: "Графы",
      question: "Связная структура без циклов, где у каждого узла не более одного родителя",
      options: [
        { letter: "A", text: "полный неориентированный граф" },
        { letter: "B", text: "кольцевой двусвязный список" },
        { letter: "C", text: "сильно связный орграф" },
        { letter: "D", text: "дерево" },
        { letter: "E", text: "граф с мостами и петлями" }
      ],
      multi: false, correct: ["D"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Связный граф без циклов — это дерево (D); в нём у каждого узла ровно один родитель (кроме корня). Наличие циклов или нескольких родителей превращает структуру в граф общего вида."
    },
    {
      id: "v4-algo-25", variant: 4, subject: "algo", number: 25, topic: "Рекурсия",
      question: "Чему по определению равен факториал нуля, 0! ?",
      options: [
        { letter: "A", text: "не определён" },
        { letter: "B", text: "0" },
        { letter: "C", text: "1" },
        { letter: "D", text: "равен аргументу" },
        { letter: "E", text: "ошибка рекурсии" }
      ],
      multi: false, correct: ["C"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "По определению 0! = 1 (C) — это базовый случай рекурсии для факториала. Произведение «пустого» набора множителей равно единице, а не нулю."
    },
    {
      id: "v4-algo-26", variant: 4, subject: "algo", number: 26, topic: "Язык C/C++",
      question: "Какой оператор используется для сравнения на равенство в условии if?",
      options: [
        { letter: "A", text: "==" },
        { letter: "B", text: "=" },
        { letter: "C", text: ":=" },
        { letter: "D", text: "equals()" },
        { letter: "E", text: "===" }
      ],
      multi: false, correct: ["A"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Проверка на равенство — двойное == (A). Одиночное = (B) выполняет присваивание, а не сравнение; операторов := и === в C++ нет. Путаница = и == — классическая ошибка."
    },
    {
      id: "v4-algo-27", variant: 4, subject: "algo", number: 27, topic: "Язык C/C++",
      question: "Что произойдёт при выполнении if (x = 5) { ... } для любого x?",
      options: [
        { letter: "A", text: "блок не выполнится никогда" },
        { letter: "B", text: "сравнение x с числом 5" },
        { letter: "C", text: "синтаксическая ошибка" },
        { letter: "D", text: "сравнение по адресу" },
        { letter: "E", text: "x получит значение 5, и условие окажется истинным" }
      ],
      multi: false, correct: ["E"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "x = 5 — это присваивание; его результат равен 5, а любое ненулевое значение в условии трактуется как «истина». Поэтому блок выполнится всегда, а x станет равен 5 (E). Для сравнения нужно ==."
    },
    {
      id: "v4-algo-28", variant: 4, subject: "algo", number: 28, topic: "Сложность",
      question: "Для какого алгоритма характерно время O(log n)?",
      options: [
        { letter: "A", text: "линейный поиск по массиву" },
        { letter: "B", text: "двоичный поиск в массиве" },
        { letter: "C", text: "сортировка выбором" },
        { letter: "D", text: "обход всех пар элементов" },
        { letter: "E", text: "перебор всех подмножеств" }
      ],
      multi: false, correct: ["B"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Двоичный поиск на каждом шаге уменьшает область поиска вдвое, поэтому шагов около log₂n → O(log n) (B). Линейный поиск — O(n), перебор подмножеств — O(2^n)."
    },
    {
      id: "v4-algo-29", variant: 4, subject: "algo", number: 29, topic: "Деревья",
      question: "Как называется двоичная куча, в которой корень — наибольший элемент?",
      options: [
        { letter: "A", text: "дерево двоичного поиска" },
        { letter: "B", text: "АВЛ-дерево" },
        { letter: "C", text: "префиксное дерево (бор)" },
        { letter: "D", text: "куча max-heap, корень — максимум" },
        { letter: "E", text: "красно-чёрное дерево" }
      ],
      multi: false, correct: ["D"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Куча, где значение каждого узла не меньше значений потомков (корень максимален), называется max-heap (D). AVL и красно-чёрное — сбалансированные деревья поиска, а не кучи."
    },
    {
      id: "v4-algo-30", variant: 4, subject: "algo", number: 30, topic: "Язык C/C++",
      question: "Что делает оператор break внутри цикла?",
      options: [
        { letter: "A", text: "переход к следующей итерации" },
        { letter: "B", text: "пауза в выполнении программы" },
        { letter: "C", text: "немедленный выход из цикла" },
        { letter: "D", text: "возврат значения из функции" },
        { letter: "E", text: "пропуск остатка функции" }
      ],
      multi: false, correct: ["C"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "break немедленно прерывает цикл и передаёт управление на первую инструкцию после него (C). Переход к следующей итерации (A) — это continue, а возврат из функции — return."
    }
  ]
};
