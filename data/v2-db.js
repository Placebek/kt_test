window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["v2-db"] = {
  key: "v2-db", variant: 2, subject: "db", lang: "ru",
  title: "Вариант 2 · Базы данных",
  questions: [
    {
      id: "v2-db-1", variant: 2, subject: "db", number: 1, multi: true, topic: "Архитектура БД",
      question: "Обозначение трехуровневой архитектуры",
      options: [
        { letter: "A", text: "уровень пользовательского интерфейса" },
        { letter: "B", text: "уровень масштабируемости" },
        { letter: "C", text: "уровень реализации прикладных алгоритмов и средств обработки данных" },
        { letter: "D", text: "уровень соединения" },
        { letter: "E", text: "уровень получения данных" },
        { letter: "F", text: "СУБД, в которой хранятся данные" },
        { letter: "G", text: "уровень присваивания" },
        { letter: "H", text: "уровень отправки" }
      ],
      correct: ["A", "C", "F"], userAnswer: ["D", "E", "H"], officialResult: 0, keyConfidence: "derived",
      explanation: "Трёхуровневая архитектура (ANSI-SPARC): внешний уровень — пользовательский интерфейс/представления (A); концептуальный — реализация прикладных алгоритмов и обработки данных (C); внутренний — физическое хранение в СУБД (F). Варианты «соединения», «получения», «отправки» к этой архитектуре не относятся."
    },
    {
      id: "v2-db-2", variant: 2, subject: "db", number: 2, multi: true, topic: "Модели данных", authored: true,
      question: "Классические модели организации данных (модели данных)",
      options: [
        { letter: "A", text: "иерархическая" },
        { letter: "B", text: "сетевая" },
        { letter: "C", text: "реляционная" },
        { letter: "D", text: "линейная" },
        { letter: "E", text: "каскадная" },
        { letter: "F", text: "рекурсивная" }
      ],
      correct: ["A", "B", "C"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "🆕 Дополнительный вопрос (составлен для тренировки — оригинал не был сфотографирован). Три классические модели данных: иерархическая (данные в виде дерева), сетевая (граф со связями «многие ко многим») и реляционная (данные в таблицах-отношениях). «Линейной», «каскадной» и «рекурсивной» модели данных как класса не существует."
    },
    {
      id: "v2-db-3", variant: 2, subject: "db", number: 3, multi: true, topic: "Операции над множествами",
      question: "Операция над множествами: Set{1,2,3,4,5} union Set{1,3,4,8,9}",
      options: [
        { letter: "A", text: "{8,9}" },
        { letter: "B", text: "{1,2,3,4,5,8,9}" },
        { letter: "C", text: "{2,8,9}" },
        { letter: "D", text: "{8,9,5,4,1,2,3}" },
        { letter: "E", text: "{1,2,3,4,5,1,3,4,8,9}" },
        { letter: "F", text: "{2,5}" },
        { letter: "G", text: "{1,3,4}" }
      ],
      correct: ["B", "D"], userAnswer: ["B"], officialResult: 1, keyConfidence: "derived",
      explanation: "Объединение (union) — все различные элементы обоих множеств: {1,2,3,4,5,8,9}. Этому набору соответствуют B и D (одно и то же множество, порядок элементов роли не играет). Вариант E содержит повторяющиеся элементы, что для множества недопустимо. Пользователь выбрал только B — частичный балл."
    },
    {
      id: "v2-db-4", variant: 2, subject: "db", number: 4, multi: true, topic: "Модель данных RDF",
      question: "Основные объекты модели данных RDF",
      options: [
        { letter: "A", text: "запрос" },
        { letter: "B", text: "параметры" },
        { letter: "C", text: "свойство" },
        { letter: "D", text: "ресурс" },
        { letter: "E", text: "таблица" },
        { letter: "F", text: "ячейка" },
        { letter: "G", text: "связь" },
        { letter: "H", text: "типы данных" }
      ],
      correct: ["C", "D"], userAnswer: ["E", "G", "H"], officialResult: 0, keyConfidence: "derived",
      explanation: "RDF (Resource Description Framework) описывает данные триплетами «ресурс — свойство — значение». Основные объекты модели — ресурс (D) и свойство (C). Таблица, ячейка, связь, типы данных — понятия других моделей, не RDF."
    },
    {
      id: "v2-db-5", variant: 2, subject: "db", number: 5, multi: true, topic: "Ключи",
      question: "Ключ, который используется для создания уникальных идентификаторов строк и содержит смысл сам по себе",
      options: [
        { letter: "A", text: "уникальный" },
        { letter: "B", text: "составной" },
        { letter: "C", text: "естественный" },
        { letter: "D", text: "простой" },
        { letter: "E", text: "суррогатный" },
        { letter: "F", text: "искусственный" },
        { letter: "G", text: "вторичный" },
        { letter: "H", text: "внешний" }
      ],
      correct: ["C"], userAnswer: ["A"], officialResult: 0, keyConfidence: "derived",
      explanation: "Естественный ключ формируется из самих данных предметной области и несёт смысл (например, ИНН, номер паспорта). Суррогатный/искусственный ключ, наоборот, генерируется системой и смысла не имеет. «Уникальный» — это свойство, а не тип ключа."
    },
    {
      id: "v2-db-6", variant: 2, subject: "db", number: 6, multi: true, topic: "SQL / агрегатные функции",
      question: "Агрегирующая функция AVG",
      options: [
        { letter: "A", text: "позволяет упорядочить выбранные записи только в порядке убывания (DESC)" },
        { letter: "B", text: "возвращает усредненное значение в указанном столбце" },
        { letter: "C", text: "возвращает количество значений в указанном столбце" },
        { letter: "D", text: "позволяет упорядочить выбранные записи только в порядке возрастания (ASC)" },
        { letter: "E", text: "возвращает сумму значений в указанном столбце" },
        { letter: "F", text: "возвращает максимальное значение в указанном столбце" }
      ],
      correct: ["B"], userAnswer: ["B"], officialResult: 2, keyConfidence: "official",
      explanation: "AVG вычисляет среднее арифметическое значений столбца. COUNT — количество (C), SUM — сумму (E), MAX — максимум (F), а сортировку задаёт ORDER BY (A, D)."
    },
    {
      id: "v2-db-7", variant: 2, subject: "db", number: 7, multi: true, topic: "Операции с данными (DML)",
      question: "К операциям управления данных относится",
      options: [
        { letter: "A", text: "описание атрибутов приложения" },
        { letter: "B", text: "интеграция мета данных" },
        { letter: "C", text: "указание ограничения целостности и защиты" },
        { letter: "D", text: "вставка в базу данных новых записей" },
        { letter: "E", text: "модификация сведений, хранимых в базе данных" },
        { letter: "F", text: "обозначение системного каталога" }
      ],
      correct: ["D", "E"], userAnswer: ["D"], officialResult: 1, keyConfidence: "derived",
      explanation: "Операции управления (манипулирования) данными — это работа с содержимым таблиц: вставка новых записей (D, INSERT) и модификация данных (E, UPDATE). Описание атрибутов и ограничений целостности относится к определению данных (DDL), а не к управлению ими. Пользователь выбрал только D — частичный балл."
    },
    {
      id: "v2-db-8", variant: 2, subject: "db", number: 8, multi: true, topic: "SQL / условия выборки",
      question: "Запрос, который выбирает поля, где column1 не содержит значения от 1 до 3 включительно",
      options: [
        { letter: "A", text: "select * from table where column1 =1 and 3" },
        { letter: "B", text: "select * from table where column1< =1 or column1 > 3" },
        { letter: "C", text: "select * from table where column1 not in (1,2,3)" },
        { letter: "D", text: "select * from table where column1 not between 1 and 3" },
        { letter: "E", text: "select * from table where column1<1 and column1>3" },
        { letter: "F", text: "select * from table where column1!=1 and column1!=2 and column1!=3" },
        { letter: "G", text: "select * from table where column1=1 and column1=2 and column1=3" },
        { letter: "H", text: "select * from table where column1=1 or column1=2 or column1=3" }
      ],
      correct: ["C", "D", "F"], userAnswer: ["C", "E", "F"], officialResult: 1, keyConfidence: "derived",
      explanation: "Нужно исключить значения 1, 2, 3. Это делают: NOT IN (1,2,3) — C; NOT BETWEEN 1 AND 3 — D; набор неравенств !=1 AND !=2 AND !=3 — F. Вариант E (column1<1 AND column1>3) — противоречие, не вернёт ни одной строки. Пользователь взял C и F, но добавил ошибочный E — частичный балл."
    },
    {
      id: "v2-db-9", variant: 2, subject: "db", number: 9, multi: true, topic: "SQL / ORDER BY",
      question: "Запрос, сортирующий сотрудников по длине их имени и фамилии вместе взятых в порядке возрастания (last_name-фамилия, first_name –имя, – атрибуты таблицы table)",
      options: [
        { letter: "A", text: "select last_name, first_name from table order by length(last_name) + length(first_name) desc" },
        { letter: "B", text: "select last_name, first_name from table order by length(concat(last_name, first_name))" },
        { letter: "C", text: "select last_name, first_name from table order by last_name +first_name" },
        { letter: "D", text: "select last_name, first_name from table order by length(last_name) + length(first_name)" },
        { letter: "E", text: "select last_name, first_name from table order by last_name ,first_name" },
        { letter: "F", text: "select last_name, first_name from table order by last_name ,length(first_name)" }
      ],
      correct: ["B", "D"], userAnswer: ["B", "D"], officialResult: 2, keyConfidence: "official",
      explanation: "Сортировка по суммарной длине имени и фамилии по возрастанию: length(concat(last_name, first_name)) — B, или length(last_name) + length(first_name) — D (по умолчанию ASC). Вариант A содержит DESC — обратный порядок. Остальные сортируют по самим строкам, а не по их длине."
    },
    {
      id: "v2-db-10", variant: 2, subject: "db", number: 10, multi: true, topic: "SQL / строковые функции",
      question: "Запрос, сортирующий сотрудников по последней букве фамилии в порядке (z to a)",
      options: [
        { letter: "A", text: "select last_name from table order by substr(last_name,1,-1) asc" },
        { letter: "B", text: "select last_name from table order by instr(last_name,-1,1) desc" },
        { letter: "C", text: "select last_name from table order by last_name[-1]" },
        { letter: "D", text: "select last_name from table sort by substr(last_name,-1,-1)" },
        { letter: "E", text: "select last_name from table order by substr(last_name,-1,1) desc" },
        { letter: "F", text: "select last_name from table order by last_name desc" },
        { letter: "G", text: "select last_name from table sort by instr(last_name,-1,1) desc" }
      ],
      correct: ["E"], userAnswer: ["B"], officialResult: 0, keyConfidence: "derived",
      explanation: "Последнюю букву извлекает substr(last_name, -1, 1) (позиция -1 от конца, длина 1), а обратный порядок (z→a) задаёт DESC — вариант E. INSTR ищет позицию подстроки, а не извлекает символ (B); «sort by» и last_name[-1] — недопустимый синтаксис; ORDER BY last_name сортирует по всей строке, а не по последней букве."
    },
    {
      id: "v2-db-11", variant: 2, subject: "db", number: 11, multi: true, topic: "SQL / оператор SELECT",
      question: "Оператор SELECT",
      options: [
        { letter: "A", text: "выполняет выборки и отображении данных одной или более таблиц базы данных" },
        { letter: "B", text: "определение имен используемой таблицы или нескольких таблиц" },
        { letter: "C", text: "предназначен для добавления данных в таблицу" },
        { letter: "D", text: "предназначен для модификации уже помещенных в таблицу данных" },
        { letter: "E", text: "упорядочить выбранные записи в порядке возрастания (ASC) или убывания (DESC) значений любого столбца или комбинации столбцов" },
        { letter: "F", text: "возвращает сумму значений в указанном столбце" }
      ],
      correct: ["A"], userAnswer: ["A"], officialResult: 2, keyConfidence: "official",
      explanation: "SELECT выполняет выборку и отображение данных из одной или нескольких таблиц. Добавление — INSERT (C), модификация — UPDATE (D), сортировка — ORDER BY (E), сумма — SUM (F)."
    },
    {
      id: "v2-db-12", variant: 2, subject: "db", number: 12, multi: true, topic: "SQL / DDL, индексы",
      question: "DDL команда создания индекса",
      options: [
        { letter: "A", text: "create or replace index idx on table1;" },
        { letter: "B", text: "create index idx on table1(column1);" },
        { letter: "C", text: "create or replace index idx on column1 of table1;" },
        { letter: "D", text: "create or replace index idx on table1(column1);" },
        { letter: "E", text: "create index idx for table1(column1);" },
        { letter: "F", text: "alter index idx on column1 of table1;" },
        { letter: "G", text: "create or replace index idx on table1(column1,column2,column3);" },
        { letter: "H", text: "create index idx on table1(column1,column2);" }
      ],
      correct: ["B", "H"], userAnswer: ["B", "D", "F"], officialResult: 0, keyConfidence: "derived",
      explanation: "Индекс создаётся командой CREATE INDEX имя ON таблица(столбцы). Верны B (по одному столбцу) и H (составной индекс по двум столбцам). Конструкция «CREATE OR REPLACE INDEX» (A, C, D, G) нестандартна, «for» вместо «on» (E) ошибочно, а ALTER (F) изменяет, а не создаёт индекс. Пользователь взял верный B, но добавил ошибочные D и F — итог 0."
    },
    {
      id: "v2-db-13", variant: 2, subject: "db", number: 13, multi: true, topic: "Транзакции",
      question: "Автоматическая фиксация данных происходит при обстоятельствах",
      options: [
        { letter: "A", text: "один sql запрос" },
        { letter: "B", text: "происходит одно заявление DCL" },
        { letter: "C", text: "происходит несколько последовательных заявлений DML" },
        { letter: "D", text: "происходит два последовательных запроса sql" },
        { letter: "E", text: "происходит одно заявление DML" },
        { letter: "F", text: "происходит одно заявление DDL" }
      ],
      correct: ["B", "F"], userAnswer: ["A"], officialResult: 0, keyConfidence: "derived",
      explanation: "Неявная (автоматическая) фиксация происходит при выполнении команд DCL (B, например GRANT/REVOKE) и DDL (F, например CREATE/ALTER). Команды DML требуют явного COMMIT. Пользователь выбрал «один sql запрос» — неверно."
    },
    {
      id: "v2-db-14", variant: 2, subject: "db", number: 14, multi: true, topic: "Транзакции",
      question: "Транзакция базы данных состоит из",
      options: [
        { letter: "A", text: "два последовательных заявления DCL" },
        { letter: "B", text: "один оператор DDL" },
        { letter: "C", text: "одно заявление DCL" },
        { letter: "D", text: "операторы DML, которые составляют одно последовательное изменение данных" },
        { letter: "E", text: "операторы DML, которые не составляют одно последовательное изменение данных" },
        { letter: "F", text: "sql запрос" }
      ],
      correct: ["D"], userAnswer: ["B"], officialResult: 0, keyConfidence: "derived",
      explanation: "Транзакция — это набор операторов DML, образующих одно логически неделимое изменение данных (D), которое фиксируется или откатывается целиком. Отдельный оператор DDL (B) транзакцией в этом смысле не является."
    },
    {
      id: "v2-db-15", variant: 2, subject: "db", number: 15, multi: true, topic: "Основы SQL",
      question: "SQL является",
      options: [
        { letter: "A", text: "объектно-ориентированным языком программирования" },
        { letter: "B", text: "инструмент обработки медиафайлов" },
        { letter: "C", text: "процедурным языком" },
        { letter: "D", text: "стандартным языком определения и манипулирования реляционными базами данных" },
        { letter: "E", text: "непроцедурным языком, построенным на использовании обычных английских слов (таких как SELECT, INSERT, DELETE)" },
        { letter: "F", text: "процедурным языком, который непредназначен для работы с базами данных" },
        { letter: "G", text: "инструмент 3D моделирования" }
      ],
      correct: ["D", "E"], userAnswer: ["D", "E"], officialResult: 2, keyConfidence: "official",
      explanation: "SQL — стандартный язык определения и манипулирования реляционными БД (D) и одновременно непроцедурный (декларативный) язык на основе английских слов SELECT, INSERT, DELETE (E). Процедурным ООП-языком или инструментом обработки медиа/3D он не является."
    },
    {
      id: "v2-db-16", variant: 2, subject: "db", number: 16, multi: true, topic: "SQL / подзапросы (ALL)",
      question: "В таблице products есть только 3 продукта. Цена первого продукта 15000, цена второго продукта 30000, третьего 2000. Результат запроса",
      questionCode: "select price from products\nwhere price>all (select 1000 from dual\nUNION\nselect 10000 from dual\nUNION\nselect 12000 from dual);",
      options: [
        { letter: "A", text: "15000, 30000" },
        { letter: "B", text: "10000,15000" },
        { letter: "C", text: "2000" },
        { letter: "D", text: "30000,15000" },
        { letter: "E", text: "30000" },
        { letter: "F", text: "15000, 2000" }
      ],
      correct: ["A", "D"], userAnswer: ["A", "D"], officialResult: 2, keyConfidence: "official",
      explanation: "price > ALL (1000, 10000, 12000) означает «больше максимума набора», то есть price > 12000. Из цен 15000, 30000, 2000 условию удовлетворяют 15000 и 30000. Оба варианта A (15000, 30000) и D (30000, 15000) перечисляют эти значения — порядок строк без ORDER BY не важен."
    },
    {
      id: "v2-db-17", variant: 2, subject: "db", number: 17, multi: true, topic: "SQL / подзапросы (ANY)",
      question: "В таблице products есть только 3 продукта. Цена первого продукта 15000, цена второго продукта 20000, третьего 2000. Результат запроса",
      questionCode: "select price from products\nwhere price>any (select 1000 from dual\nUNION\nselect 30000 from dual\nUNION\nselect 12000 from dual);",
      options: [
        { letter: "A", text: "15000, 20000" },
        { letter: "B", text: "20000,15000,2000" },
        { letter: "C", text: "2000,20000,15000" },
        { letter: "D", text: "10000,15000" },
        { letter: "E", text: "20000" },
        { letter: "F", text: "15000, 2000" },
        { letter: "G", text: "2000,15000,20000" },
        { letter: "H", text: "2000,20000" }
      ],
      correct: ["B", "C", "G"], userAnswer: ["B", "C", "G"], officialResult: 2, keyConfidence: "official",
      explanation: "price > ANY (1000, 30000, 12000) означает «больше минимума набора», то есть price > 1000. Этому удовлетворяют все три цены: 15000, 20000 и 2000. Варианты B, C и G перечисляют эти три значения в разном порядке — все верны (порядок без ORDER BY не важен)."
    },
    {
      id: "v2-db-18", variant: 2, subject: "db", number: 18, multi: true, topic: "Уровни изоляции транзакций",
      question: "Проблемы, которые предотвращают уровень изоляции транзакций READ COMMITTED",
      options: [
        { letter: "A", text: "грязное чтение" },
        { letter: "B", text: "ложное добавление" },
        { letter: "C", text: "потерянное обновление" },
        { letter: "D", text: "фантомное удаление" },
        { letter: "E", text: "дублирующее чтение" },
        { letter: "F", text: "фантомное чтение" },
        { letter: "G", text: "повторяющееся чтение" },
        { letter: "H", text: "фантомное обновление" }
      ],
      correct: ["A", "C"], userAnswer: ["A"], officialResult: 1, keyConfidence: "derived",
      explanation: "READ COMMITTED гарантированно устраняет грязное чтение (A) — чтение незафиксированных чужих изменений; в реализациях с блокировками также предотвращается потерянное обновление (C). Неповторяющееся и фантомное чтение на этом уровне остаются возможными. Пользователь выбрал только A — частичный балл."
    },
    {
      id: "v2-db-19", variant: 2, subject: "db", number: 19, multi: true, topic: "Параллельные транзакции",
      question: "Проблемы при параллельном выполнении транзакций",
      options: [
        { letter: "A", text: "грязное чтение" },
        { letter: "B", text: "потерянное обновление" },
        { letter: "C", text: "дублирующее чтение" },
        { letter: "D", text: "фантомное удаление" },
        { letter: "E", text: "повторяющееся чтение" },
        { letter: "F", text: "фантомное чтение" },
        { letter: "G", text: "ложное добавление" },
        { letter: "H", text: "фантомное обновление" }
      ],
      correct: ["A", "B", "F"], userAnswer: ["B", "C", "E"], officialResult: 0, keyConfidence: "derived",
      explanation: "Классические аномалии параллельных транзакций: грязное чтение (A), потерянное обновление (B) и фантомное чтение (F) (а также неповторяющееся чтение, которого нет среди вариантов). «Дублирующее/повторяющееся чтение», «фантомное удаление/обновление» — не являются стандартными проблемами. Пользователь верно указал только B, добавив два ошибочных варианта, — итог 0."
    },
    {
      id: "v2-db-20", variant: 2, subject: "db", number: 20, multi: true, topic: "Оптимизация / денормализация",
      question: "Соединение многих отношений в запросе может повлиять на чтение и сделать его чрезмерно медленным. Решение данной проблемы",
      options: [
        { letter: "A", text: "удаление ненужных данных" },
        { letter: "B", text: "создание материализованного представления" },
        { letter: "C", text: "привести данные в 3 нормальную форму" },
        { letter: "D", text: "создание представления" },
        { letter: "E", text: "привести данные в 4 нормальную форму" },
        { letter: "F", text: "денормализация" }
      ],
      correct: ["B", "F"], userAnswer: ["C", "F"], officialResult: 1, keyConfidence: "derived",
      explanation: "Чтобы ускорить чтение при множестве соединений, число JOIN-ов уменьшают денормализацией (F) или заранее сохраняют результат в материализованном представлении (B). Приведение к 3-й или 4-й нормальной форме (C, E), наоборот, дробит данные на большее число таблиц и усиливает проблему; обычное представление (D) данные не хранит и соединения не устраняет. Пользователь верно выбрал F, но добавил ошибочный C — частичный балл."
    }
  ]
};
