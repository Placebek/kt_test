window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["v2-algo"] = {
  key: "v2-algo", variant: 2, subject: "algo", lang: "ru",
  title: "Вариант 2 · Алгоритмы",
  questions: [
    {
      id: "v2-algo-1", variant: 2, subject: "algo", number: 1, topic: "Сортировки",
      question: "Количество операций сравнения, выполняемое быстрой сортировкой для файла размером N в наихудшем случае",
      options: [
        { letter: "A", text: "N/4" },
        { letter: "B", text: "N²/2" },
        { letter: "C", text: "N/3" },
        { letter: "D", text: "N/2" },
        { letter: "E", text: "N³/2" }
      ],
      multi: false, correct: ["B"], userAnswer: ["E"], officialResult: 0, keyConfidence: "derived",
      explanation: "В худшем случае (например, на уже отсортированном массиве при неудачном выборе опорного элемента) быстрая сортировка деградирует до O(N²) и выполняет порядка N²/2 сравнений. Линейные и сублинейные оценки (N/2, N/3, N/4) для этого случая недостижимы, а N³/2 завышена."
    },
    {
      id: "v2-algo-2", variant: 2, subject: "algo", number: 2, topic: "Библиотеки C/C++",
      question: "Стандартная библиотека C, позволяющая модифицировать программу в зависимости от места её выполнения",
      options: [
        { letter: "A", text: "<local.h>" },
        { letter: "B", text: "<stdloc.h>" },
        { letter: "C", text: "<locale.h>" },
        { letter: "D", text: "<loctime.h>" },
        { letter: "E", text: "<clocale.h>" }
      ],
      multi: false, correct: ["C"], userAnswer: ["C"], officialResult: 1, keyConfidence: "official",
      explanation: "<locale.h> отвечает за локализацию — настройку форматов чисел, дат, валюты и разделителей под конкретный регион («место выполнения»). Остальные заголовки в стандартной библиотеке C не существуют."
    },
    {
      id: "v2-algo-3", variant: 2, subject: "algo", number: 3, topic: "Операторы C++",
      question: "Структура множественного выбора в C++, при котором значение некоторой переменной или выражения проверяется на множестве допустимых значений и в зависимости от результатов проверки предпринимаются различные действия",
      options: [
        { letter: "A", text: "while" },
        { letter: "B", text: "grade" },
        { letter: "C", text: "square" },
        { letter: "D", text: "for" },
        { letter: "E", text: "switch" }
      ],
      multi: false, correct: ["E"], userAnswer: ["E"], officialResult: 1, keyConfidence: "official",
      explanation: "switch — оператор множественного ветвления: значение выражения сравнивается с набором меток case, и выполняется соответствующая ветвь. while и for — циклы; grade и square операторами C++ не являются."
    },
    {
      id: "v2-algo-4", variant: 2, subject: "algo", number: 4, topic: "Деревья",
      question: "Деревья, узлы которых содержат две связки (одна из которых или обе могут быть нулевыми)",
      options: [
        { letter: "A", text: "кустистые" },
        { letter: "B", text: "ветвящиеся" },
        { letter: "C", text: "корневые" },
        { letter: "D", text: "двоичные" },
        { letter: "E", text: "листовые" }
      ],
      multi: false, correct: ["D"], userAnswer: ["D"], officialResult: 1, keyConfidence: "official",
      explanation: "Двоичное (бинарное) дерево — у каждого узла не более двух ссылок (на левого и правого потомка), любая из которых может быть пустой (null). Остальные термины стандартными видами деревьев не являются."
    },
    {
      id: "v2-algo-5", variant: 2, subject: "algo", number: 5, topic: "Графы",
      question: "Математическая структура, состоящая из множества точек, которые называются вершинами, и совокупности линий (ребер), соединяющих эти точки",
      options: [
        { letter: "A", text: "куст" },
        { letter: "B", text: "маршрут" },
        { letter: "C", text: "граф" },
        { letter: "D", text: "шаблон" },
        { letter: "E", text: "схема" }
      ],
      multi: false, correct: ["C"], userAnswer: ["C"], officialResult: 1, keyConfidence: "official",
      explanation: "Это определение графа: множество вершин и множество рёбер, соединяющих вершины. Маршрут — это последовательность рёбер внутри графа, а не сама структура."
    },
    {
      id: "v2-algo-6", variant: 2, subject: "algo", number: 6, topic: "Деревья / Кучи", authored: true,
      question: "Почти полное бинарное дерево, в котором значение каждого узла не меньше значений его потомков",
      options: [
        { letter: "A", text: "дерево двоичного поиска" },
        { letter: "B", text: "куча (пирамида, heap)" },
        { letter: "C", text: "АВЛ-дерево" },
        { letter: "D", text: "красно-чёрное дерево" },
        { letter: "E", text: "префиксное дерево (trie)" }
      ],
      multi: false, correct: ["B"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "🆕 Дополнительный вопрос (составлен для тренировки — оригинал не был сфотографирован). Это невозрастающая куча (max-heap): значение родителя ≥ значений его детей. Куча хранится в массиве и используется в пирамидальной сортировке (heapsort) и очередях с приоритетом. В дереве поиска действует другой порядок: «левое < корень < правое», а не «родитель ≥ дети»."
    },
    {
      id: "v2-algo-7", variant: 2, subject: "algo", number: 7, topic: "Сортировки",
      question: "Алгоритм, не использующий операцию сравнения ключей и упорядочивающий последовательности неотрицательных целых чисел",
      options: [
        { letter: "A", text: "сортировка вливанием" },
        { letter: "B", text: "сортировка кучей" },
        { letter: "C", text: "выборочная сортировка" },
        { letter: "D", text: "сортировка пузырьками" },
        { letter: "E", text: "сортировка подсчётом" }
      ],
      multi: false, correct: ["E"], userAnswer: ["B"], officialResult: 0, keyConfidence: "derived",
      explanation: "Сортировка подсчётом (counting sort) не сравнивает ключи между собой, а подсчитывает количество каждого значения; работает для неотрицательных целых из ограниченного диапазона за линейное время. Сортировки кучей, выбором и пузырьком основаны на сравнении элементов."
    },
    {
      id: "v2-algo-8", variant: 2, subject: "algo", number: 8, topic: "Сложность алгоритмов",
      question: "Класс сложности алгоритма, обрабатывающего все подмножества некоторого множества из n элементов",
      options: [
        { letter: "A", text: "экспоненциальная" },
        { letter: "B", text: "параболическая" },
        { letter: "C", text: "линеарная" },
        { letter: "D", text: "восьмеричная" },
        { letter: "E", text: "факториальная" }
      ],
      multi: false, correct: ["A"], userAnswer: ["C"], officialResult: 0, keyConfidence: "derived",
      explanation: "У множества из n элементов ровно 2ⁿ подмножеств, поэтому перебор всех подмножеств имеет экспоненциальную сложность O(2ⁿ). Факториальная (n!) сложность соответствует перебору всех перестановок, а не подмножеств."
    },
    {
      id: "v2-algo-9", variant: 2, subject: "algo", number: 9, topic: "Сортировки",
      question: "Наименьший элемент массива меняется местами с первым элементом. Наименьший элемент из остальных элементов переставляется со вторым элементом в исходном массиве и т.д.",
      options: [
        { letter: "A", text: "сортировка вставками" },
        { letter: "B", text: "сортировка пузырьками" },
        { letter: "C", text: "распределяющая сортировка" },
        { letter: "D", text: "индексная сортировка" },
        { letter: "E", text: "сортировка выбором" }
      ],
      multi: false, correct: ["E"], userAnswer: ["E"], officialResult: 1, keyConfidence: "official",
      explanation: "Это описание сортировки выбором (selection sort): на каждом шаге ищем минимум среди оставшихся элементов и ставим его на очередную позицию, меняя местами с текущим."
    },
    {
      id: "v2-algo-10", variant: 2, subject: "algo", number: 10, topic: "Массивы",
      question: "Объявление массива с числом элементов arraySize типа float, имеющими нулевые начальные значения",
      options: [
        { letter: "A", text: "float table [arraySize] = {0};" },
        { letter: "B", text: "float [arraySize] = {0};" },
        { letter: "C", text: "float table [arraySize] = {0,..,0};" },
        { letter: "D", text: "float mv [arraySize] = {0,0};" },
        { letter: "E", text: "float mv [arraySize] = {};" }
      ],
      multi: false, correct: ["A"], userAnswer: ["B"], officialResult: 0, keyConfidence: "derived",
      explanation: "Правильная запись — float table[arraySize] = {0}; : указано имя массива, а инициализатор {0} обнуляет все элементы. Вариант B синтаксически неверен — отсутствует имя массива; запись «{0,..,0}» в C++ недопустима."
    },
    {
      id: "v2-algo-11", variant: 2, subject: "algo", number: 11, topic: "Хеширование",
      question: "Метод построения хеш-таблиц для статических множеств ключей, обеспечивающий выполнение поиска за время O(1) даже в худшем случае",
      options: [
        { letter: "A", text: "идеальное, или совершенное хеширование" },
        { letter: "B", text: "нелинейное, или совершенное зондирование" },
        { letter: "C", text: "линейное, или совершенное зондирование" },
        { letter: "D", text: "билинейная, или отдельная цепочка" },
        { letter: "E", text: "тернарное, или совершенное хеширование" }
      ],
      multi: false, correct: ["A"], userAnswer: ["B"], officialResult: 0, keyConfidence: "derived",
      explanation: "Идеальное (совершенное) хеширование строит для фиксированного набора ключей хеш-функцию без коллизий, что гарантирует поиск за O(1) даже в худшем случае. Зондирование и цепочки такой гарантии не дают."
    },
    {
      id: "v2-algo-12", variant: 2, subject: "algo", number: 12, topic: "Графы",
      question: "Текущее множество рёбер устанавливается пустым. Затем из всех рёбер, добавление которых к уже имеющемуся множеству не вызовет появление в нём цикла, выбирается ребро минимального веса – это алгоритм",
      options: [
        { letter: "A", text: "Форда" },
        { letter: "B", text: "Фрейда" },
        { letter: "C", text: "Белмана" },
        { letter: "D", text: "Крускала" },
        { letter: "E", text: "Дейтла" }
      ],
      multi: false, correct: ["D"], userAnswer: ["E"], officialResult: 0, keyConfidence: "derived",
      explanation: "Это алгоритм Крускала для построения минимального остовного дерева: рёбра добавляются по возрастанию веса, если не образуют цикл. Алгоритмы Форда–Беллмана ищут кратчайшие пути, а не остовное дерево."
    },
    {
      id: "v2-algo-13", variant: 2, subject: "algo", number: 13, topic: "C++ / ООП",
      question: "Каждый объект C++ имеет доступ к своему собственному адресу через указатель с именем",
      options: [
        { letter: "A", text: "adress" },
        { letter: "B", text: "intr" },
        { letter: "C", text: "setpr" },
        { letter: "D", text: "cout" },
        { letter: "E", text: "this" }
      ],
      multi: false, correct: ["E"], userAnswer: ["A"], officialResult: 0, keyConfidence: "derived",
      explanation: "Указатель this хранит адрес текущего объекта и неявно доступен внутри методов класса. cout — это поток вывода, а adress, intr, setpr не являются ключевыми словами C++."
    },
    {
      id: "v2-algo-14", variant: 2, subject: "algo", number: 14, topic: "Ввод-вывод",
      question: "Операция, в ходе которой байты пересылаются из оперативной памяти на устройства (например, экран дисплея, дисковод, принтер)",
      options: [
        { letter: "A", text: "рекурсия" },
        { letter: "B", text: "вывод" },
        { letter: "C", text: "инверсия" },
        { letter: "D", text: "ввод" },
        { letter: "E", text: "инкапсуляция" }
      ],
      multi: false, correct: ["B"], userAnswer: ["B"], officialResult: 1, keyConfidence: "official",
      explanation: "Вывод (output) — передача данных из оперативной памяти на внешние устройства (экран, диск, принтер). Ввод — обратное направление, с устройств в память."
    },
    {
      id: "v2-algo-15", variant: 2, subject: "algo", number: 15, topic: "Хеширование",
      question: "Для большинства хеш-функций пространство ключей представляется множеством ….",
      options: [
        { letter: "A", text: "N={0,1,2….}" },
        { letter: "B", text: "рациональных чисел" },
        { letter: "C", text: "комплексных чисел" },
        { letter: "D", text: "Z={…. -2,-1,0,1,2….}" },
        { letter: "E", text: "действительных чисел" }
      ],
      multi: false, correct: ["A"], userAnswer: ["C"], officialResult: 0, keyConfidence: "derived",
      explanation: "Обычно ключи отображаются в неотрицательные целые числа (натуральный ряд с нулём) — именно на этом множестве работают хеш-функции и вычисляются индексы ячеек таблицы. Комплексные, действительные и отрицательные значения для индексации не используются."
    },
    {
      id: "v2-algo-16", variant: 2, subject: "algo", number: 16, topic: "Хеширование",
      question: "Методы разрешения коллизий",
      options: [
        { letter: "A", text: "закрытой адресации, цепочки, линейного исследования" },
        { letter: "B", text: "адресации, удаления, линейноого возрастания" },
        { letter: "C", text: "открытой адресации, цепочки, линейного исследования" },
        { letter: "D", text: "закрытой адресации, ветвления, линейного исследования" },
        { letter: "E", text: "кубического исследования, двоичного хеширования" }
      ],
      multi: false, correct: ["C"], userAnswer: ["A"], officialResult: 0, keyConfidence: "derived",
      explanation: "Коллизии разрешают методом цепочек и открытой адресацией (включая линейное зондирование/исследование). Вариант C перечисляет их корректно. В варианте A «закрытая адресация» фактически дублирует «цепочки» и не упомянута открытая адресация."
    },
    {
      id: "v2-algo-17", variant: 2, subject: "algo", number: 17, topic: "Библиотеки C/C++",
      question: "Математическая библиотечная функция C, возводящая x в степень y",
      options: [
        { letter: "A", text: "pow(x/y)" },
        { letter: "B", text: "pow(x;y)" },
        { letter: "C", text: "pow(x?y)" },
        { letter: "D", text: "pow(y,x)" },
        { letter: "E", text: "pow(x,y)" }
      ],
      multi: false, correct: ["E"], userAnswer: ["D"], officialResult: 0, keyConfidence: "derived",
      explanation: "Функция pow(x, y) из <math.h> возвращает x в степени y; аргументы разделяются запятой. pow(y,x) вычислит y^x, а варианты с «/», «;» и «?» синтаксически неверны."
    },
    {
      id: "v2-algo-18", variant: 2, subject: "algo", number: 18, topic: "Хеширование",
      question: "Выбор хеш-функции зависит от",
      options: [
        { letter: "A", text: "типа ключа" },
        { letter: "B", text: "индекса ключа" },
        { letter: "C", text: "вида данных" },
        { letter: "D", text: "размера массива" },
        { letter: "E", text: "типа переменной" }
      ],
      multi: false, correct: ["A"], userAnswer: ["B"], officialResult: 0, keyConfidence: "derived",
      explanation: "Хеш-функцию подбирают исходя из типа ключа (целое, строка, вещественное и т.д.) — от него зависит способ преобразования ключа в индекс. Индекс ключа — это уже результат работы хеш-функции, а не исходные данные для её выбора."
    },
    {
      id: "v2-algo-19", variant: 2, subject: "algo", number: 19, topic: "Рекурсия", disputed: true,
      disputedNote: "⚠ Спорный ответ. Академически правильный вариант — A: fibonacci(n) = fibonacci(n-1) + fibonacci(n-2). Официальный ключ засчитывает вариант B (с n+1, n+2), что математически некорректно (рекурсия не сходится к базовым случаям). Здесь показан ответ официального ключа, чтобы соответствовать реальному экзамену.",
      question: "Рекурсивное определение последовательности Фибоначчи",
      options: [
        { letter: "A", text: "", code: "fibonacci (0)=0\nfibonacci (1)=1\nfibonacci (n)= fibonacci (n-1) + fibonacci (n-2)" },
        { letter: "B", text: "", code: "fibonacci (0)=0\nfibonacci (1)=1\nfibonacci (n)= fibonacci (n+1) + fibonacci (n+2)" },
        { letter: "C", text: "", code: "fibonacci (0)=1\nfibonacci (1)=0\nfibonacci (n)= fibonacci (n+1) + fibonacci (n+2)" },
        { letter: "D", text: "", code: "fibonacci (0)=0\nfibonacci (1)=1\nfibonacci (n)= fibonacci (n-1) - fibonacci (n-2)" },
        { letter: "E", text: "", code: "fibonacci (0)=1\nfibonacci (1)=2\nfibonacci (n)= fibonacci (n-1) - fibonacci (n-2)" }
      ],
      multi: false, correct: ["B"], userAnswer: ["B"], officialResult: 1, keyConfidence: "official",
      explanation: "Верная рекурсия Фибоначчи: F(0)=0, F(1)=1, F(n)=F(n-1)+F(n-2) — это вариант A. Вариант B использует n+1 и n+2, уводя рекурсию «вперёд», из-за чего она не завершается. Однако официальный ключ теста считает верным именно B — учитывайте это на экзамене."
    },
    {
      id: "v2-algo-20", variant: 2, subject: "algo", number: 20, topic: "Ввод-вывод / Библиотеки", disputed: true,
      disputedNote: "⚠ Спорный ответ. Официальная система засчитала этот вопрос как неверный (0 баллов), хотя <iostream.h> — правильный заголовок для операций ввода-вывода в C++. Вероятно, это ошибка ключа платформы; её «правильный» вариант неизвестен.",
      question: "Заголовочный файл, содержащий основную информацию необходимую для всех операций ввода-вывода в C++",
      options: [
        { letter: "A", text: "<ostream.h>" },
        { letter: "B", text: "<iostream.h>" },
        { letter: "C", text: "<inalude.h>" },
        { letter: "D", text: "<istdlib.h>" },
        { letter: "E", text: "<imanip.h>" }
      ],
      multi: false, correct: ["B"], userAnswer: ["B"], officialResult: 0, keyConfidence: "derived",
      explanation: "<iostream.h> (input/output stream) подключает средства ввода-вывода C++ (cin, cout). <ostream.h> отвечает только за вывод, а <inalude.h>, <istdlib.h>, <imanip.h> не существуют. Ответ B академически верен, хотя официальный ключ его не засчитал."
    },
    {
      id: "v2-algo-21", variant: 2, subject: "algo", number: 21, topic: "Операторы / Циклы", disputed: true,
      disputedNote: "⚠ Спорный ответ. Официальная система засчитала этот вопрос как неверный (0 баллов), хотя «цикл» — правильный термин для многократно повторяющейся группы операторов. Вероятно, это ошибка ключа платформы.",
      question: "Группа операторов, которая выполняется повторно до тех пор, пока удовлетворяется некоторое условие",
      options: [
        { letter: "A", text: "индукция" },
        { letter: "B", text: "рефлексия" },
        { letter: "C", text: "рекурсия" },
        { letter: "D", text: "метка" },
        { letter: "E", text: "цикл" }
      ],
      multi: false, correct: ["E"], userAnswer: ["E"], officialResult: 0, keyConfidence: "derived",
      explanation: "Цикл — конструкция, повторяющая группу операторов, пока истинно условие. Рекурсия — это самовызов функции, а индукция, рефлексия и метка к повторению операторов отношения не имеют. Ответ E академически верен, хотя официальный ключ его не засчитал."
    },
    {
      id: "v2-algo-22", variant: 2, subject: "algo", number: 22, topic: "C++ / переменное число аргументов",
      question: "В C++ макрос, который вызывается перед обработкой списка с переменным числом параметров",
      options: [
        { letter: "A", text: "va_sign" },
        { letter: "B", text: "va_endl" },
        { letter: "C", text: "va_start" },
        { letter: "D", text: "va_argv" },
        { letter: "E", text: "va_make" }
      ],
      multi: false, correct: ["C"], userAnswer: ["C"], officialResult: 1, keyConfidence: "official",
      explanation: "Макрос va_start (из <cstdarg>) инициализирует va_list перед перебором переменного числа аргументов функции. Остальные имена в механизм variadic-функций не входят."
    },
    {
      id: "v2-algo-23", variant: 2, subject: "algo", number: 23, topic: "Сложность алгоритмов", disputed: true,
      disputedNote: "⚠ Спорный ответ. По классификации Седжвика описание «все инструкции выполняются один или несколько раз» соответствует постоянному времени O(1) (вариант C). Официальный ключ засчитывает NlogN (D) — здесь показан ответ ключа.",
      question: "Время выполнения программы, все инструкции которой выполняются один или несколько раз",
      options: [
        { letter: "A", text: "квадратично" },
        { letter: "B", text: "линейно" },
        { letter: "C", text: "постоянно" },
        { letter: "D", text: "NlogN" },
        { letter: "E", text: "logarithmic" }
      ],
      multi: false, correct: ["D"], userAnswer: ["D"], officialResult: 1, keyConfidence: "official",
      explanation: "В классической классификации (Седжвик) фраза «большинство инструкций выполняются один раз или несколько раз» описывает постоянное время выполнения O(1) — вариант C. NlogN характерно для алгоритмов «разделяй и властвуй». Однако официальный ключ считает верным D."
    },
    {
      id: "v2-algo-24", variant: 2, subject: "algo", number: 24, topic: "Деревья",
      question: "Древовидная структура данных, в которой значения всех узлов, размещённых правее некоторого узла, больше значений узлов, размещённых левее, причём это справедливо как для всего дерева, так и для любой его части - это",
      options: [
        { letter: "A", text: "тернарная система векторов" },
        { letter: "B", text: "стек красных деревьев" },
        { letter: "C", text: "очередь связных цепочек" },
        { letter: "D", text: "многозадачный симплекс" },
        { letter: "E", text: "двоичное дерево поиска" }
      ],
      multi: false, correct: ["E"], userAnswer: ["E"], officialResult: 1, keyConfidence: "official",
      explanation: "Это определение двоичного дерева поиска (BST): для любого узла все значения в левом поддереве меньше, а в правом — больше, причём свойство выполняется рекурсивно для каждого поддерева. Остальные варианты — бессмысленные/несуществующие термины."
    },
    {
      id: "v2-algo-25", variant: 2, subject: "algo", number: 25, topic: "Структуры данных",
      question: "Абстрактный тип данных, представляющий собой список, в котором вставка и удаление элементов производятся с одного конца. Функционирует по принципу «последним пришёл – первым вышел»",
      options: [
        { letter: "A", text: "таблица (table)" },
        { letter: "B", text: "порядок (order)" },
        { letter: "C", text: "стек (stack)" },
        { letter: "D", text: "очередь (queue)" },
        { letter: "E", text: "куча (coach)" }
      ],
      multi: false, correct: ["C"], userAnswer: ["C"], officialResult: 1, keyConfidence: "official",
      explanation: "Стек работает по принципу LIFO (последним пришёл — первым вышел): добавление (push) и удаление (pop) выполняются с одного конца — вершины. Очередь, напротив, работает по FIFO (первым пришёл — первым вышел)."
    },
    {
      id: "v2-algo-26", variant: 2, subject: "algo", number: 26, topic: "Графы",
      question: "Описание взвешенного направленного циклического графа, показанного на рисунке",
      questionCode: "Рёбра графа (по рисунку):\n1 → 2 : 0.20\n1 → 3 : 0.30\n1 → 4 : 0.10\n4 → 2 : 0.33\n4 → 3 : 0.15",
      options: [
        { letter: "A", text: "(1, 2, 0.30), (1, 3, 0.30), (1, 4, 0.10), (4, 2, 0.33), (4, 3, 0.15)" },
        { letter: "B", text: "(1, 4, 0.30), (1, 2, 0.20), (1, 3, 0.30), (4, 2, 0.33), (4, 3, 0.15)" },
        { letter: "C", text: "(1, 2, 0.20), (1, 3, 0.30), (1, 4, 0.10), (4, 2, 0.33), (4, 3, 0.25)" },
        { letter: "D", text: "(1, 2, 0.20), (1, 3, 0.30), (1, 4, 0.10), (4, 2, 0.33), (4, 3, 0.15)" },
        { letter: "E", text: "(1, 2, 0.30), (1, 3, 0.20), (1, 4, 0.10), (4, 2, 0.30), (4, 3, 0.15)" }
      ],
      multi: false, correct: ["D"], userAnswer: ["D"], officialResult: 1, keyConfidence: "official",
      explanation: "По рисунку рёбра графа: 1→2 (0.20), 1→3 (0.30), 1→4 (0.10), 4→2 (0.33), 4→3 (0.15). Точно этому набору соответствует вариант D. В A и E завышен вес ребра 1→2 (0.30), в B — ребра 1→4 (0.30), в C — ребра 4→3 (0.25)."
    },
    {
      id: "v2-algo-27", variant: 2, subject: "algo", number: 27, topic: "Рекурсия",
      question: "Вызывает сама себя либо непосредственно, либо косвенно с помощью другой функции",
      options: [
        { letter: "A", text: "рекурсия" },
        { letter: "B", text: "индукция" },
        { letter: "C", text: "дедукция" },
        { letter: "D", text: "итерация" },
        { letter: "E", text: "инверсия" }
      ],
      multi: false, correct: ["A"], userAnswer: ["A"], officialResult: 1, keyConfidence: "official",
      explanation: "Рекурсия — это когда функция вызывает саму себя напрямую или через цепочку других функций (косвенная рекурсия). Итерация — повторение с помощью цикла, без самовызова."
    },
    {
      id: "v2-algo-28", variant: 2, subject: "algo", number: 28, topic: "Указатели",
      question: "Переменные, содержащие адреса других переменных или функций",
      options: [
        { letter: "A", text: "константы" },
        { letter: "B", text: "функции" },
        { letter: "C", text: "указатели" },
        { letter: "D", text: "разделители" },
        { letter: "E", text: "выражения" }
      ],
      multi: false, correct: ["C"], userAnswer: ["C"], officialResult: 1, keyConfidence: "official",
      explanation: "Указатель — переменная, значением которой является адрес другой переменной или функции. Константа хранит фиксированное значение, а не адрес."
    },
    {
      id: "v2-algo-29", variant: 2, subject: "algo", number: 29, topic: "Качество алгоритмов",
      question: "Характеристика качества алгоритма, отражающая объём потребляемой памяти",
      options: [
        { letter: "A", text: "временная эффективность (time efficiency)" },
        { letter: "B", text: "линейная эффективность (linear efficiency)" },
        { letter: "C", text: "пространственная эффективность (space efficiency)" },
        { letter: "D", text: "максимальная эффективность (max efficiency)" },
        { letter: "E", text: "минимальная эффективность (min efficiency)" }
      ],
      multi: false, correct: ["C"], userAnswer: ["A"], officialResult: 0, keyConfidence: "derived",
      explanation: "Пространственная эффективность (space efficiency) характеризует объём памяти, потребляемой алгоритмом. Временна́я эффективность (выбранный пользователем вариант A) отражает время работы, а не расход памяти."
    },
    {
      id: "v2-algo-30", variant: 2, subject: "algo", number: 30, topic: "C++ / функции",
      question: "Пользовательская функция, написанная на языке C++, проводит операцию над всеми числами в диапазоне от 1 до 10",
      questionCode: "#include<iostream.h>\nint square (int);\nint main()\n{\nfor (int x = 1; x<=10; x++)\ncout << square (x) << endl;\nreturn 0;\n}\nint square (y);\n{\nreturn y*y;\n}",
      options: [
        { letter: "A", text: "разность" },
        { letter: "B", text: "сумму" },
        { letter: "C", text: "произведение" },
        { letter: "D", text: "возведение в куб" },
        { letter: "E", text: "возведение в квадрат" }
      ],
      multi: false, correct: ["E"], userAnswer: ["E"], officialResult: 1, keyConfidence: "official",
      explanation: "Функция square(y) возвращает y*y, то есть квадрат числа. В цикле программа выводит квадраты чисел от 1 до 10 — это операция «возведение в квадрат»."
    }
  ]
};
