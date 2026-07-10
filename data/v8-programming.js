window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["v8-programming"] = {
  key: "v8-programming", variant: 8, subject: "programming", lang: "kz",
  title: "Вариант 8 · Программирование (каз.)",
  questions: [
    {
      id: "v8-programming-1", variant: 8, subject: "programming", number: 1, topic: "Python", multi: false,
      question: "Python тілінің стандартты жүзеге асырылуы",
      options: [
        { letter: "A", text: "Jython" },
        { letter: "B", text: "CPython" },
        { letter: "C", text: "JIT-компиляторлар" },
        { letter: "D", text: "IronPython" },
        { letter: "E", text: "Stackless" }
      ],
      correct: ["B"], userAnswer: ["B"], officialResult: 1, keyConfidence: "official",
      explanation: "Эталонная (стандартная) реализация языка Python — это CPython (B), написанная на C. Jython (на JVM), IronPython (на .NET) и Stackless — альтернативные реализации/варианты, а не стандартная."
    },
    {
      id: "v8-programming-2", variant: 8, subject: "programming", number: 2, topic: "Стиль кода", multi: false,
      question: "Программаның кодын жақсы түсінуге қызмет етеді",
      options: [
        { letter: "A", text: "блоктар" },
        { letter: "B", text: "кодтың орындалуы" },
        { letter: "C", text: "комментарийлер" },
        { letter: "D", text: "нәтиже" },
        { letter: "E", text: "мысал" }
      ],
      correct: ["C"], userAnswer: ["C"], officialResult: 1, keyConfidence: "official",
      explanation: "Комментарии (C) — пояснения в коде, которые не выполняются, а помогают человеку понять логику программы. Остальные варианты описывают элементы выполнения программы, а не средства понимания кода."
    },
    {
      id: "v8-programming-3", variant: 8, subject: "programming", number: 3, topic: "Основы программирования", multi: false,
      question: "Алгоритмдерді жазуға арналған символдар мен сол символдардан тұратын конструкцияларды құрастыру және түсіндіру ережелерінің жиыны",
      options: [
        { letter: "A", text: "алгоритмдік тіл" },
        { letter: "B", text: "интерпретатор" },
        { letter: "C", text: "алгоритм" },
        { letter: "D", text: "алгоритмдеу" },
        { letter: "E", text: "бағдарламалау" }
      ],
      correct: ["A"], userAnswer: ["B"], officialResult: 0, keyConfidence: "derived",
      explanation: "Набор символов и правил построения/толкования конструкций из них для записи алгоритмов — это определение алгоритмического языка (A). Интерпретатор (B) — программа, выполняющая код построчно, а не система обозначений; алгоритм (C) — сама последовательность действий, а не язык её записи."
    },
    {
      id: "v8-programming-4", variant: 8, subject: "programming", number: 4, topic: "Типы данных", multi: false,
      question: "C/C++ тіліндегі мәліметтердің типі анықтайды",
      options: [
        { letter: "A", text: "белгілі бір типтегі шамалардың қабылдамайтын мәндерін" },
        { letter: "B", text: "құрылымдар мен екі еселенген нақты сандарды" },
        { letter: "C", text: "компьютер жадындағы мәліметтің ішкі бейнелену түрін" },
        { letter: "D", text: "бейнелер мен нұсқауыштарды" },
        { letter: "E", text: "логикалық, бүтін типтерді" }
      ],
      correct: ["C"], userAnswer: ["E"], officialResult: 0, keyConfidence: "derived",
      explanation: "Тип данных определяет внутренний способ представления значения в памяти компьютера, диапазон допустимых значений и набор допустимых операций (C). Перечисление конкретных типов (E) — не определение, а лишь примеры типов."
    },
    {
      id: "v8-programming-5", variant: 8, subject: "programming", number: 5, topic: "C/C++", multi: false,
      question: "\\(d = \\frac{-b+\\sqrt{b^{2}-4ac}}{2a}\\) өрнегін C++ программалау тілінде жазу:",
      options: [
        { letter: "A", text: "d=(-b+sqrt(sqr(b)-4*a*c))/2*a;" },
        { letter: "B", text: "d=(-b+sqrt(pow(b,2)-4*ac))/2a;" },
        { letter: "C", text: "d:=(-b+sqr(sqrt(b)-4*ac))/2a;" },
        { letter: "D", text: "d:=(-b+sqrt(pow(b,2)-4*a*c))/2*a;" },
        { letter: "E", text: "d=(-b+sqrt(pow(b,2)-4*a*c))/2*a;" }
      ],
      correct: ["E"], userAnswer: ["D"], officialResult: 0, keyConfidence: "derived",
      explanation: "В C++ присваивание записывается через «=», а не через паскалевское «:=» (это отличает E от почти идентичного D). Кроме того, b² корректно записывается как pow(b,2), а не sqr(b) (A) — sqr не является стандартной функцией C++."
    },
    {
      id: "v8-programming-6", variant: 8, subject: "programming", number: 6, topic: "Основы программирования", multi: false,
      question: "Нақты бір программалау тілі үшін символдардың шекті жиынтығы",
      options: [
        { letter: "A", text: "алфавит" },
        { letter: "B", text: "семантика" },
        { letter: "C", text: "синтаксис" },
        { letter: "D", text: "бақылау" },
        { letter: "E", text: "әрекет" }
      ],
      correct: ["A"], userAnswer: ["E"], officialResult: 0, keyConfidence: "derived",
      explanation: "Конечное множество символов языка называется алфавитом (A). Синтаксис (C) — это правила составления конструкций из символов алфавита, а семантика (B) — смысл этих конструкций; это не сам набор символов."
    },
    {
      id: "v8-programming-7", variant: 8, subject: "programming", number: 7, topic: "Python", multi: false,
      question: "Экземплярды логикалық мәліметтер типке келтіретін әдіс",
      options: [
        { letter: "A", text: "__doc__()" },
        { letter: "B", text: "__bool__()" },
        { letter: "C", text: "__len__()" },
        { letter: "D", text: "__line__()" },
        { letter: "E", text: "__form__()" }
      ],
      correct: ["B"], userAnswer: ["E"], officialResult: 0, keyConfidence: "derived",
      explanation: "Специальный метод __bool__() (B) определяет, как объект приводится к логическому типу (True/False). __len__() (C) участвует в проверке истинности лишь как запасной вариант, если __bool__ не определён; __doc__ и «__line__»/«__form__» к этому не относятся."
    },
    {
      id: "v8-programming-8", variant: 8, subject: "programming", number: 8, topic: "Python", multi: false,
      question: "Базалық класстардың тізімін алу үшін қолданылатын атрибут",
      options: [
        { letter: "A", text: "__menu__" },
        { letter: "B", text: "__in__" },
        { letter: "C", text: "__str__" },
        { letter: "D", text: "__distract__" },
        { letter: "E", text: "__bases__" }
      ],
      correct: ["E"], userAnswer: ["C"], officialResult: 0, keyConfidence: "derived",
      explanation: "Атрибут __bases__ (E) хранит кортеж базовых (родительских) классов. __str__ (C) отвечает за строковое представление объекта, а не за список предков; остальные варианты не являются реальными атрибутами Python."
    },
    {
      id: "v8-programming-9", variant: 8, subject: "programming", number: 9, topic: "Tkinter", multi: false,
      question: "tkinter модулінде қолданушы бір жолды мәтін енгізе алатын арнайы аймақ классы",
      options: [
        { letter: "A", text: "entry (енгізу өрісі)" },
        { letter: "B", text: "button (батырма)" },
        { letter: "C", text: "label (жазба)" },
        { letter: "D", text: "radio (радио)" },
        { letter: "E", text: "text (мәтін)" }
      ],
      correct: ["A"], userAnswer: ["E"], officialResult: 0, keyConfidence: "derived",
      explanation: "Для ввода одной строки текста в tkinter используется виджет Entry (A). Text (E) — виджет для МНОГОстрочного текста, что не соответствует условию «одна строка»."
    },
    {
      id: "v8-programming-10", variant: 8, subject: "programming", number: 10, topic: "Python", multi: false,
      question: "Әдеттегі шақыруда қолжетімді болмайтын класстың атрибут мәнін алуға мүмкіндік береді, тек қолжетімді емес аргументке мән меншіктейді",
      options: [
        { letter: "A", text: "__docs__" },
        { letter: "B", text: "__str__" },
        { letter: "C", text: "__call__" },
        { letter: "D", text: "__setattr__" },
        { letter: "E", text: "__visual__" }
      ],
      correct: ["D"], userAnswer: ["B"], officialResult: 0, keyConfidence: "derived",
      disputed: true,
      disputedNote: "Формулировка вопроса переведена не вполне однозначно. Среди вариантов единственный реально существующий метод, отвечающий за управление доступом к атрибутам класса (в т.ч. присваивание значения), — __setattr__ (D). Остальные — либо не про атрибуты (__call__, __str__), либо не существуют (__docs__, __visual__).",
      explanation: "Из перечисленных вариантов только __setattr__ (D) — реальный специальный метод Python, отвечающий за присвоение значения атрибуту класса. __call__ (C) делает объект вызываемым как функцию, __str__ (B) — за строковое представление; ни то, ни другое не про доступ к атрибутам."
    },
    {
      id: "v8-programming-11", variant: 8, subject: "programming", number: 11, topic: "Python", multi: false,
      question: "Қандай да бір атаулы мәндердің жиынтығын көрсететін ерекше кластар",
      options: [
        { letter: "A", text: "синтаксистер" },
        { letter: "B", text: "көрсетулер" },
        { letter: "C", text: "итераторлар" },
        { letter: "D", text: "әдістер" },
        { letter: "E", text: "аударымдар" }
      ],
      correct: ["E"], userAnswer: ["B"], officialResult: 0, keyConfidence: "derived",
      disputed: true,
      disputedNote: "Перевод формулировки на казахский оставляет двусмысленность. По смыслу («особые классы, представляющие набор именованных значений») речь похожа на перечисления (Enum), но точного соответствия среди вариантов нет. Вариант E выбран методом исключения как наименее противоречащий смыслу; проверьте по первоисточнику, если найдёте.",
      explanation: "Ни один из вариантов не переводит термин однозначно. По смыслу вопрос описывает классы-перечисления (Enum), сопоставляющие имена конкретным значениям. Среди данных вариантов ближе всего по смыслу «аударымдар» (E) — сопоставления/отображения имени значению; выбрано методом исключения, а не точным переводом термина."
    },
    {
      id: "v8-programming-12", variant: 8, subject: "programming", number: 12, topic: "Python", multi: false,
      questionCode: ">>> 2\n2\n>>> _+3.43",
      question: "Интерпретатор режиміндегі программа фрагментінің нәтижесі",
      options: [
        { letter: "A", text: "5.43" },
        { letter: "B", text: "0" },
        { letter: "C", text: "6.43" },
        { letter: "D", text: "3.43" },
        { letter: "E", text: "2" }
      ],
      correct: ["D"], userAnswer: ["D"], officialResult: 1, keyConfidence: "official",
      explanation: "В интерактивном интерпретаторе Python специальная переменная _ хранит результат последнего вычисленного выражения. По официальному ключу правильный ответ — 3.43 (D)."
    },
    {
      id: "v8-programming-13", variant: 8, subject: "programming", number: 13, topic: "Python", multi: false,
      question: "Жолдағы бүкіл символдарды сәйкес бас әріптерге ауыстырады",
      options: [
        { letter: "A", text: "title ( )" },
        { letter: "B", text: "upper ( )" },
        { letter: "C", text: "capitalize ( )" },
        { letter: "D", text: "lower ( )" },
        { letter: "E", text: "swapcase ( )" }
      ],
      correct: ["B"], userAnswer: ["B"], officialResult: 1, keyConfidence: "official",
      explanation: "Метод str.upper() (B) переводит все буквы строки в верхний регистр. title() делает заглавной первую букву каждого слова, capitalize() — только первую букву строки, lower() — в нижний регистр, swapcase() меняет регистр на противоположный."
    },
    {
      id: "v8-programming-14", variant: 8, subject: "programming", number: 14, topic: "Python", multi: false,
      question: "x элементін L тізімінің соңына қосады",
      options: [
        { letter: "A", text: "L.sqrt (x)" },
        { letter: "B", text: "L.cos (x)" },
        { letter: "C", text: "L.append (x)" },
        { letter: "D", text: "L.extend (x)" },
        { letter: "E", text: "L.remove (x)" }
      ],
      correct: ["C"], userAnswer: ["C"], officialResult: 1, keyConfidence: "official",
      explanation: "Метод list.append(x) (C) добавляет один элемент x в конец списка. extend() (D) добавляет элементы из ИТЕРИРУЕМОГО объекта по одному, а не сам объект целиком; remove() удаляет элемент."
    },
    {
      id: "v8-programming-15", variant: 8, subject: "programming", number: 15, topic: "Python", multi: false,
      question: "x+i*y (бастапқы жағдайда y=0) кешенді сандар типіне түрлендіру",
      options: [
        { letter: "A", text: "sgrt (x, y)" },
        { letter: "B", text: "float (x, y)" },
        { letter: "C", text: "int (y, x)" },
        { letter: "D", text: "complex (x, y)" },
        { letter: "E", text: "abs (x, y)" }
      ],
      correct: ["D"], userAnswer: ["C"], officialResult: 0, keyConfidence: "derived",
      explanation: "Функция complex(x, y) (D) создаёт комплексное число x + iy из действительной и мнимой частей. float() и abs() принимают лишь один аргумент числового рода, а int(строка, основание) не имеет отношения к комплексным числам."
    },
    {
      id: "v8-programming-16", variant: 8, subject: "programming", number: 16, topic: "Операторы", multi: false,
      question: "Бөлу кезінде қалдықты анықтау амалының белгіленуі",
      options: [
        { letter: "A", text: "!" },
        { letter: "B", text: "/" },
        { letter: "C", text: "*" },
        { letter: "D", text: "$" },
        { letter: "E", text: "%" }
      ],
      correct: ["E"], userAnswer: ["E"], officialResult: 1, keyConfidence: "official",
      explanation: "Оператор % (E) вычисляет остаток от деления. «/» — обычное (частное) деление, «*» — умножение, «!» и «$» операторами деления/остатка не являются."
    },
    {
      id: "v8-programming-17", variant: 8, subject: "programming", number: 17, topic: "Python", multi: false,
      question: "Қатынасы осы санға тең бүтін сандар жұбы",
      options: [
        { letter: "A", text: "float.as_integer_ratio ( )" },
        { letter: "B", text: "is_integer_ratio ( )" },
        { letter: "C", text: "float_integer_ratio ( )" },
        { letter: "D", text: "integer_ratio ( )" },
        { letter: "E", text: "for_integer_ratio ( )" }
      ],
      correct: ["A"], userAnswer: ["A"], officialResult: 1, keyConfidence: "official",
      explanation: "float.as_integer_ratio() (A) возвращает пару целых чисел (числитель, знаменатель), отношение которых точно равно данному float. Остальные варианты — не существующие в Python имена."
    },
    {
      id: "v8-programming-18", variant: 8, subject: "programming", number: 18, topic: "Python", multi: false,
      question: "Unicode-жолын қарапайым жолға айналдыру функциясы",
      options: [
        { letter: "A", text: "shuffle" },
        { letter: "B", text: "sample" },
        { letter: "C", text: "randint" },
        { letter: "D", text: "bytes" },
        { letter: "E", text: "uniform" }
      ],
      correct: ["D"], userAnswer: ["B"], officialResult: 0, keyConfidence: "derived",
      explanation: "Функция bytes(s, encoding) (D) преобразует строку Unicode в последовательность байт. shuffle, sample, randint и uniform (A,B,C,E) — функции модуля random, к преобразованию строк отношения не имеют."
    },
    {
      id: "v8-programming-19", variant: 8, subject: "programming", number: 19, topic: "Функции", multi: false,
      question: "Берілген өрістегі минималды сан",
      options: [
        { letter: "A", text: "ABS (<Поле>)" },
        { letter: "B", text: "SIN (<Поле>)" },
        { letter: "C", text: "MIN (<Поле>)" },
        { letter: "D", text: "AVERAGE (<Поле>)" },
        { letter: "E", text: "SUM (<Поле>)" }
      ],
      correct: ["C"], userAnswer: ["C"], officialResult: 1, keyConfidence: "official",
      explanation: "Функция MIN (C) возвращает минимальное значение в поле. ABS — модуль числа, AVERAGE — среднее, SUM — сумма, SIN — синус: ни одна из них не находит минимум."
    },
    {
      id: "v8-programming-20", variant: 8, subject: "programming", number: 20, topic: "Python", multi: false,
      question: "Операциялық жүйелермен жұмыс жасауға арналған атрибуттардан тұратын модуль",
      options: [
        { letter: "A", text: "os" },
        { letter: "B", text: "sys" },
        { letter: "C", text: "gzip" },
        { letter: "D", text: "doc" },
        { letter: "E", text: "glob" }
      ],
      correct: ["A"], userAnswer: ["A"], officialResult: 1, keyConfidence: "official",
      explanation: "Модуль os (A) предоставляет функции для работы с операционной системой (файлы, пути, переменные окружения, процессы). sys (B) — про интерпретатор Python, gzip — про сжатие, glob — про поиск файлов по маске."
    },
    {
      id: "v8-programming-21", variant: 8, subject: "programming", number: 21, topic: "Массивы", multi: false,
      question: "Жиымдарда индекс санының сипаттамасы",
      options: [
        { letter: "A", text: "саны" },
        { letter: "B", text: "деректер типі" },
        { letter: "C", text: "мәні" },
        { letter: "D", text: "құрылымы" },
        { letter: "E", text: "аты" }
      ],
      correct: ["B"], userAnswer: ["A"], officialResult: 0, keyConfidence: "derived",
      disputed: true,
      disputedNote: "Формулировка допускает разное толкование. Наиболее стандартный учебный факт — индекс массива характеризуется целочисленным типом данных (B); это и выбрано как правильный ответ.",
      explanation: "Стандартное учебное утверждение: индекс элемента массива характеризуется целочисленным типом данных (B) — индексом не может быть, например, дробное число. Вариант A (просто «число») не описывает конкретную характеристику индекса."
    },
    {
      id: "v8-programming-22", variant: 8, subject: "programming", number: 22, topic: "Алгоритмы", multi: false,
      question: "Компьютер жадысында х және у айнымалыларының мәндерін ауыстыратын меншіктеу операторларының тізбегі",
      options: [
        { letter: "A", text: "z=x; x=y; y=z;" },
        { letter: "B", text: "x=y; y=z; x=z;" },
        { letter: "C", text: "y=x; x=y; y=z;" },
        { letter: "D", text: "z=x; x=y; x=z;" },
        { letter: "E", text: "x=y; y=x; y=z;" }
      ],
      correct: ["A"], userAnswer: ["B"], officialResult: 0, keyConfidence: "derived",
      explanation: "Классический обмен через временную переменную: z=x (сохранили x); x=y (в x кладём y); y=z (в y кладём сохранённый x) — это вариант A. В варианте B первым же шагом x=y стирает исходное значение x до того, как оно сохранено — обмен не получится."
    },
    {
      id: "v8-programming-23", variant: 8, subject: "programming", number: 23, topic: "Python", multi: false,
      question: "d сөздігінен барлық элементтерді жояды",
      options: [
        { letter: "A", text: "d.del ( )" },
        { letter: "B", text: "d.clean ( )" },
        { letter: "C", text: "d.add ( )" },
        { letter: "D", text: "d.insert ( )" },
        { letter: "E", text: "d.clear ( )" }
      ],
      correct: ["E"], userAnswer: ["A"], officialResult: 0, keyConfidence: "derived",
      explanation: "Метод dict.clear() (E) удаляет все элементы словаря. У словарей в Python нет метода .del() — удаление одного элемента делает оператор del d[key], а не метод d.del()."
    },
    {
      id: "v8-programming-24", variant: 8, subject: "programming", number: 24, topic: "Python", multi: false,
      question: "Жиынның айырмасын есептейтін әдіс",
      options: [
        { letter: "A", text: "difference" },
        { letter: "B", text: "in" },
        { letter: "C", text: "isdisjoint" },
        { letter: "D", text: "range" },
        { letter: "E", text: "issubset" }
      ],
      correct: ["A"], userAnswer: ["E"], officialResult: 0, keyConfidence: "derived",
      explanation: "Метод set.difference() (A) вычисляет разность множеств. issubset() (E) проверяет отношение подмножества, isdisjoint() — отсутствие общих элементов, in — проверка принадлежности, range — вообще не связан с множествами."
    },
    {
      id: "v8-programming-25", variant: 8, subject: "programming", number: 25, topic: "Python", multi: false,
      question: "obj объектісіне арналған объектінің типін қайтарады",
      options: [
        { letter: "A", text: "exec (locals)" },
        { letter: "B", text: "exec (globals)" },
        { letter: "C", text: "ex (obj)" },
        { letter: "D", text: "type (obj)" },
        { letter: "E", text: "exec (obj)" }
      ],
      correct: ["D"], userAnswer: ["C"], officialResult: 0, keyConfidence: "derived",
      explanation: "Функция type(obj) (D) возвращает тип объекта obj. exec() выполняет код (передан как строка/объект кода), а не определяет тип; «ex(obj)» не является функцией Python."
    },
    {
      id: "v8-programming-26", variant: 8, subject: "programming", number: 26, topic: "Python", multi: false,
      question: "Файлдың басына қатысты көрсеткіштің ағымдағы орнын қайтарады",
      options: [
        { letter: "A", text: "newline ( )" },
        { letter: "B", text: "seek ( )" },
        { letter: "C", text: "close ( )" },
        { letter: "D", text: "getvalue ( )" },
        { letter: "E", text: "tell ( )" }
      ],
      correct: ["E"], userAnswer: ["D"], officialResult: 0, keyConfidence: "derived",
      explanation: "Метод file.tell() (E) возвращает текущую позицию указателя относительно начала файла. seek() (B), наоборот, ПЕРЕМЕЩАЕТ указатель в заданную позицию; getvalue() относится к объектам StringIO, а не к позиции в файле."
    },
    {
      id: "v8-programming-27", variant: 8, subject: "programming", number: 27, topic: "Python", multi: false,
      question: "datetime.date.today ( ) функциясы",
      options: [
        { letter: "A", text: "өткен күннің объектісін қайтарады" },
        { letter: "B", text: "келер күнді сақтайтын объектіні қайтарады" },
        { letter: "C", text: "ағымдағы уақыт объектісін үзеді" },
        { letter: "D", text: "ағымдағы циклдан шығады" },
        { letter: "E", text: "ағымдағы күнді сақтайтын объектіні қайтарады" }
      ],
      correct: ["E"], userAnswer: ["E"], officialResult: 1, keyConfidence: "official",
      explanation: "datetime.date.today() (E) возвращает объект date, хранящий текущую (сегодняшнюю) календарную дату по местному времени."
    },
    {
      id: "v8-programming-28", variant: 8, subject: "programming", number: 28, topic: "C/C++", multi: false,
      question: "Бірінші жолдың мәндерін екінші жолға көшіретін функция",
      options: [
        { letter: "A", text: "char *puts(жол)" },
        { letter: "B", text: "char *strcpy(жол)" },
        { letter: "C", text: "char *strcmp(жол)" },
        { letter: "D", text: "char *strcat(жол)" },
        { letter: "E", text: "char *gets(жол)" }
      ],
      correct: ["B"], userAnswer: ["E"], officialResult: 0, keyConfidence: "derived",
      explanation: "Функция strcpy (B) копирует содержимое одной строки в другую. strcat (D) ДОБАВЛЯЕТ (конкатенирует) строку к концу другой, а не копирует; strcmp сравнивает строки, puts/gets — вывод/ввод строки, а не копирование между двумя строками."
    },
    {
      id: "v8-programming-29", variant: 8, subject: "programming", number: 29, topic: "Python", multi: false,
      question: "Бастапқы файлды жойып, файлды көрсетілген орынға ауыстыратын функция",
      options: [
        { letter: "A", text: "copyfile ( )" },
        { letter: "B", text: "copy ( )" },
        { letter: "C", text: "call ( )" },
        { letter: "D", text: "remove ( )" },
        { letter: "E", text: "move ( )" }
      ],
      correct: ["E"], userAnswer: ["A"], officialResult: 0, keyConfidence: "derived",
      explanation: "Функция shutil.move() (E) перемещает файл: копирует в новое место и удаляет исходный. copyfile()/copy() (A, B) только копируют, не удаляя оригинал; remove() лишь удаляет, никуда не перемещая."
    },
    {
      id: "v8-programming-30", variant: 8, subject: "programming", number: 30, topic: "Python", multi: false,
      question: "Басқа класстардың атрибуттарына кіруді қамтамасыз ететін класстар",
      options: [
        { letter: "A", text: "дескрипторлар" },
        { letter: "B", text: "декораторлар" },
        { letter: "C", text: "жиындар" },
        { letter: "D", text: "операторлар" },
        { letter: "E", text: "функторлар" }
      ],
      correct: ["A"], userAnswer: ["C"], officialResult: 0, keyConfidence: "derived",
      explanation: "Дескрипторы (A) — специальные классы (реализующие __get__/__set__/__delete__), управляющие доступом к атрибутам ДРУГИХ классов. Декораторы (B) изменяют поведение функций/методов, а не доступ к атрибутам; жиындар (C) — обычная структура данных, к описанию не относится."
    }
  ]
};
