window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["v1-db"] = {
  key: "v1-db", variant: 1, subject: "db", lang: "ru",
  title: "Вариант 1 · Базы данных",
  questions: [
    {
      id: "v1-db-1", variant: 1, subject: "db", number: 1, multi: true, topic: "SQL / DML",
      question: "В этих контекстах может использоваться команда UPDATE",
      options: [
        { letter: "A", text: "для изменения данных в таблицах" },
        { letter: "B", text: "совместно с вложенными запросами" },
        { letter: "C", text: "для выделения первичного ключа в таблице" },
        { letter: "D", text: "при назначении первичного ключа" },
        { letter: "E", text: "при изменении ограничений в таблице" },
        { letter: "F", text: "для удаления таблицы" },
        { letter: "G", text: "для выборки данных" }
      ],
      correct: ["A", "B"], userAnswer: ["A"], officialResult: 1, keyConfidence: "derived",
      explanation: "UPDATE изменяет данные в существующих строках таблиц (A) и может использоваться вместе с вложенными запросами, например UPDATE … SET x = (SELECT …) или WHERE col IN (SELECT …) (B). Работой с ключами и ограничениями занимается ALTER TABLE, удалением таблицы — DROP, выборкой — SELECT."
    },
    {
      id: "v1-db-2", variant: 1, subject: "db", number: 2, multi: true, topic: "Реляционная модель",
      question: "Формальные параметры следующего предиката «Работник работает в отделе DEPT на позиции POSITION и получает зарплату SALARY» (слова со всеми заглавными буквами являются столбцами в таблице)",
      options: [
        { letter: "A", text: "SALARY" },
        { letter: "B", text: "работает" },
        { letter: "C", text: "DEPT" },
        { letter: "D", text: "Работник" },
        { letter: "E", text: "получает" },
        { letter: "F", text: "POSITION" },
        { letter: "G", text: "зарплату" },
        { letter: "H", text: "отделе" }
      ],
      correct: ["A", "C", "F"], userAnswer: ["A", "C", "F"], officialResult: 2, keyConfidence: "official",
      explanation: "Формальные параметры предиката — это столбцы (атрибуты), записанные заглавными буквами: SALARY, DEPT, POSITION. Остальные слова — обычный текст предиката."
    },
    {
      id: "v1-db-3", variant: 1, subject: "db", number: 3, multi: true, topic: "Нормализация",
      question: "Нормальная форма, где первичный ключ (целиком) должен описывать каждый неключевой атрибут, какая-то часть первичного ключа отдельно не должна описывать каждый неключевой атрибут, где нет зависимостей одних неключевых атрибутов от других и ключевые атрибуты не должны зависеть от неключевых",
      options: [
        { letter: "A", text: "BCNF" },
        { letter: "B", text: "6NF" },
        { letter: "C", text: "4NF" },
        { letter: "D", text: "1NF" },
        { letter: "E", text: "5NF" },
        { letter: "F", text: "2NF" },
        { letter: "G", text: "7NF" },
        { letter: "H", text: "3NF" }
      ],
      correct: ["A"], userAnswer: ["C"], officialResult: 0, keyConfidence: "derived",
      explanation: "Описание объединяет требования 2NF (полная зависимость от ключа), 3NF (нет зависимостей неключевых атрибутов друг от друга) и дополнительное условие, что даже ключевые атрибуты не зависят от неключевых — это нормальная форма Бойса-Кодда (BCNF)."
    },
    {
      id: "v1-db-4", variant: 1, subject: "db", number: 4, multi: true, topic: "SQL",
      question: "Выберите все результаты следующих SQL-запросов (дана таблица Students):",
      questionCode: "Students (ID, Name, Surname, GPA, COURSE):\n1, Yerbol, Urmanov, 2.5, 3\n2, Aidana, Ashirbekova, 3, 3\n3, Marat, Aidosov, 4, 1\n4, Aidos, Kurmanov, 1.4, 4\n5, Elena, Fedorova, 2, 1\n6, Aidar, Elmanov, 3.1, 3\n7, Gaukhar, Khassenova, 2.9, 4\n\nUPDATE Students SET COURSE = 4 WHERE ID = 1;\nSELECT Name, Course WHERE ID = 1;",
      options: [
        { letter: "A", text: "Aidana, 2" },
        { letter: "B", text: "Yerbol, 3" },
        { letter: "C", text: "Yerbol, 1" },
        { letter: "D", text: "Aidana, 4" },
        { letter: "E", text: "Yerbol, 2" },
        { letter: "F", text: "Yerbol, 4" }
      ],
      correct: ["F"], userAnswer: ["F"], officialResult: 2, keyConfidence: "official",
      explanation: "UPDATE меняет COURSE на 4 у строки с ID=1 (Yerbol). Затем SELECT для ID=1 вернёт Name=Yerbol и Course=4 → «Yerbol, 4»."
    },
    {
      id: "v1-db-5", variant: 1, subject: "db", number: 5, multi: true, topic: "SQL / агрегатные функции",
      question: "SQL-запросы, использующие агрегатные функции",
      options: [
        { letter: "A", text: "SELECT * FROM USP WHERE SNUM=4" },
        { letter: "B", text: "SELECT SNUM, AVG(OCENKA) FROM USP GROUP BY SNUM;" },
        { letter: "C", text: "SELECT SNUM, MIN(OCENKA) FROM USP GROUP BY SNUM;" },
        { letter: "D", text: "SELECT * FROM USP" },
        { letter: "E", text: "SELECT * FROM USP WHERE SNUM=5" },
        { letter: "F", text: "SELECT * FROM USP WHERE SNUM=3" },
        { letter: "G", text: "SELECT SNUM FROM USP" },
        { letter: "H", text: "SELECT SNUM, MAX(OCENKA) FROM USP GROUP BY SNUM;" }
      ],
      correct: ["B", "C", "H"], userAnswer: ["B", "C", "H"], officialResult: 2, keyConfidence: "official",
      explanation: "Агрегатные функции — AVG, MIN, MAX (а также SUM, COUNT). Их содержат запросы B, C и H. Остальные — обычные выборки без агрегатов."
    },
    {
      id: "v1-db-6", variant: 1, subject: "db", number: 6, multi: true, topic: "Нормализация",
      question: "Основные сложности денормализации",
      options: [
        { letter: "A", text: "усложняет запросы группировки" },
        { letter: "B", text: "усложняет запросы создания таблиц" },
        { letter: "C", text: "усложняет запросы удаления таблиц" },
        { letter: "D", text: "усложняет запросы поиска" },
        { letter: "E", text: "усложняет запросы фильтрации" },
        { letter: "F", text: "создаёт проблемы избыточности и аномалии обновления" },
        { letter: "G", text: "сложно понять, когда её закончить" }
      ],
      correct: ["F", "G"], userAnswer: ["D", "E", "F"], officialResult: 0, keyConfidence: "derived",
      explanation: "Денормализация как раз УСКОРЯЕТ поиск и фильтрацию (поэтому D и E неверны). Её недостатки — избыточность данных и аномалии обновления (F), а также сложность определить разумную границу денормализации (G)."
    },
    {
      id: "v1-db-7", variant: 1, subject: "db", number: 7, multi: true, topic: "SQL / JOIN",
      question: "Правильно написанные SQL-запросы, использующие объединения таблиц",
      options: [
        { letter: "A", text: "SELECT b.*, p.* FROM Branch1 b LEFT JOIN PropertyForRent1 p ON b.bCity = p.pCity;" },
        { letter: "B", text: "SELECT b.*, p.* FROM Branch1 b WHICH FULL JOIN PropertyForRent1 p ON b.bCity = p.pCity;" },
        { letter: "C", text: "SELECT b.*, p.* FROM Branch1 b CONNECT FULL JOIN PropertyForRent1 p ON b.bCity = p.pCity;" },
        { letter: "D", text: "SELECT b.*, p.* FROM Branch1 b CONNECT RIGHT JOIN PropertyForRent1 p ON b.bCity = p.pCity;" },
        { letter: "E", text: "SELECT b.*, p.* FROM Branch1 b CONNECT LEFT JOIN PropertyForRent1 p ON b.bCity = p.pCity;" },
        { letter: "F", text: "SELECT b.*, p.* FROM Branch1 b RIGHT JOIN PropertyForRent1 p ON b.bCity = p.pCity;" },
        { letter: "G", text: "SELECT b.*, p.* FROM Branch1 b WHICH LEFT JOIN PropertyForRent1 p ON b.bCity = p.pCity;" }
      ],
      correct: ["A", "F"], userAnswer: ["C", "D", "E"], officialResult: 0, keyConfidence: "derived",
      explanation: "Корректный синтаксис — LEFT JOIN (A) и RIGHT JOIN (F). Конструкции со словами WHICH и CONNECT перед JOIN недопустимы в SQL."
    },
    {
      id: "v1-db-8", variant: 1, subject: "db", number: 8, multi: true, topic: "SQL / DDL",
      question: "Команды DDL",
      options: [
        { letter: "A", text: "PUT" },
        { letter: "B", text: "DROP" },
        { letter: "C", text: "CREATE" },
        { letter: "D", text: "ALTER" },
        { letter: "E", text: "INSERT" },
        { letter: "F", text: "DELETE" },
        { letter: "G", text: "GET" },
        { letter: "H", text: "UPDATE" }
      ],
      correct: ["B", "C", "D"], userAnswer: ["D", "E", "G"], officialResult: 0, keyConfidence: "derived",
      explanation: "DDL (Data Definition Language) определяет структуру: CREATE, ALTER, DROP (и TRUNCATE). INSERT, UPDATE, DELETE — это DML. PUT и GET к SQL не относятся."
    },
    {
      id: "v1-db-9", variant: 1, subject: "db", number: 9, multi: true, topic: "SQL",
      question: "Выберите все результаты следующего SQL-запроса (дана таблица Students):",
      questionCode: "Students (ID, Name, Surname, GPA, COURSE):\n1, Yerbol, Urmanov, 2.5, 3\n2, Aidana, Ashirbekova, 3, 3\n3, Marat, Aidosov, 4, 1\n4, Aidos, Kurmanov, 1.4, 4\n5, Elena, Fedorova, 2, 1\n6, Aidar, Elmanov, 3.1, 3\n7, Gaukhar, Khassenova, 2.9, 4\n\nSELECT ID FROM Students ORDER BY GPA ASC LIMIT 1;",
      options: [
        { letter: "A", text: "4" },
        { letter: "B", text: "2" },
        { letter: "C", text: "0" },
        { letter: "D", text: "2.5" },
        { letter: "E", text: "1.4" },
        { letter: "F", text: "3" }
      ],
      correct: ["A"], userAnswer: ["A"], officialResult: 2, keyConfidence: "official",
      explanation: "ORDER BY GPA ASC сортирует по возрастанию GPA; минимальный GPA = 1.4 у студента с ID=4. LIMIT 1 оставляет одну (первую) строку → ID = 4."
    },
    {
      id: "v1-db-10", variant: 1, subject: "db", number: 10, multi: true, topic: "SQL",
      question: "Выберите все результаты следующего SQL-запроса (дана таблица Students):",
      questionCode: "Students (ID, Name, Surname, GPA, COURSE):\n1, Yerbol, Kazhigerey, 2.5, 3\n2, Aidana, Khassenova, 3, 2\n3, Marat, Aidosov, 4, 1\n4, Aidos, Kurmanov, 1.4, 4\n5, Elena, Fedorova, 2, 1\n6, Aidar, Elmanov, 3.1, 3\n7, Anna, Karenina, 2.1, 2\n\nSELECT ID FROM Students WHERE Name='Yerbol' OR Name='Aidana';",
      options: [
        { letter: "A", text: "4" },
        { letter: "B", text: "Aidosov" },
        { letter: "C", text: "3" },
        { letter: "D", text: "Marat" },
        { letter: "E", text: "1" },
        { letter: "F", text: "2" },
        { letter: "G", text: "None" }
      ],
      correct: ["E", "F"], userAnswer: ["E", "F"], officialResult: 2, keyConfidence: "official",
      explanation: "Name='Yerbol' → ID=1, Name='Aidana' → ID=2. Условие OR возвращает оба ID: 1 и 2."
    },
    {
      id: "v1-db-11", variant: 1, subject: "db", number: 11, multi: true, topic: "Функциональные зависимости",
      question: "В символической записи функциональной зависимости правильные следующие утверждения",
      options: [
        { letter: "A", text: "правая часть символической записи функциональной зависимости является зависимостью" },
        { letter: "B", text: "правая часть символической записи функциональной зависимости является двоичностью" },
        { letter: "C", text: "левая часть символической записи функциональной зависимости является детерминантом" },
        { letter: "D", text: "правая часть символической записи функциональной зависимости является детерминантом" },
        { letter: "E", text: "правая часть символической записи функциональной зависимости является независимостью" },
        { letter: "F", text: "левая часть символической записи функциональной зависимости является зависимостью" },
        { letter: "G", text: "левая часть символической записи функциональной зависимости является двоичностью" }
      ],
      correct: ["A", "C"], userAnswer: ["A", "B", "C", "D", "E", "F", "G"], officialResult: 0, keyConfidence: "derived",
      explanation: "В записи X → Y левая часть X — это детерминант (C), а правая часть Y — зависимая часть (зависимость) (A). Выбор всех вариантов даёт много неверных, поэтому 0 баллов."
    },
    {
      id: "v1-db-12", variant: 1, subject: "db", number: 12, multi: true, topic: "Реляционная алгебра",
      question: "Основные виды операций над таблицей в реляционной базе данных",
      options: [
        { letter: "A", text: "соединение" },
        { letter: "B", text: "создание прокси запросов" },
        { letter: "C", text: "интеграция" },
        { letter: "D", text: "безопасность" },
        { letter: "E", text: "сокращение" },
        { letter: "F", text: "проекция" },
        { letter: "G", text: "защита" },
        { letter: "H", text: "балансировка" }
      ],
      correct: ["A", "F"], userAnswer: ["A", "G", "H"], officialResult: 0, keyConfidence: "derived",
      explanation: "Операции реляционной алгебры над таблицами — выборка (селекция), проекция (F) и соединение/join (A) (и др.). Безопасность, защита, балансировка — не операции над таблицей."
    },
    {
      id: "v1-db-13", variant: 1, subject: "db", number: 13, multi: true, topic: "SQL",
      question: "Выберите все ID, которые возвратит следующий SQL-запрос (дана таблица Students):",
      questionCode: "Students (ID, Name, Surname, GPA, COURSE):\n1, Yerbol, Kazhigerey, 2.5, 3\n2, Aidana, Khassenova, 3, 2\n3, Marat, Aidosov, 4, 1\n4, Aidos, Kurmanov, 1.4, 4\n5, Elena, Fedorova, 2, 1\n6, Aidar, Elmanov, 3.1, 3\n7, Anna, Karenina, 2.1, 2\n\nSELECT ID FROM Students WHERE COURSE=1;",
      options: [
        { letter: "A", text: "6" },
        { letter: "B", text: "4" },
        { letter: "C", text: "5" },
        { letter: "D", text: "7" },
        { letter: "E", text: "2" },
        { letter: "F", text: "1" },
        { letter: "G", text: "3" }
      ],
      correct: ["C", "G"], userAnswer: ["C", "G"], officialResult: 2, keyConfidence: "official",
      explanation: "COURSE=1 у студентов с ID=3 (Marat) и ID=5 (Elena). Запрос вернёт ID 3 и 5."
    },
    {
      id: "v1-db-14", variant: 1, subject: "db", number: 14, multi: true, topic: "Абстрактные типы данных", disputed: true,
      disputedNote: "Формулировка вопроса нечёткая; ниже — наиболее вероятная трактовка.",
      question: "Операторы позволяют моделировать",
      options: [
        { letter: "A", text: "поведение данных в общем плане" },
        { letter: "B", text: "бинарные деревья поиска" },
        { letter: "C", text: "контейнеры" },
        { letter: "D", text: "двоичные деревья поиска" },
        { letter: "E", text: "очереди" },
        { letter: "F", text: "виды поведения данных" }
      ],
      correct: ["A", "F"], userAnswer: ["B", "D"], officialResult: 0, keyConfidence: "derived",
      explanation: "В контексте абстрактных типов данных операции (операторы) задают именно поведение данных — в общем плане (A) и его конкретные виды (F). Деревья, очереди и контейнеры — это структуры данных, а не то, что «моделируют операторы»."
    },
    {
      id: "v1-db-15", variant: 1, subject: "db", number: 15, multi: true, topic: "SQL / подзапросы", disputed: true,
      disputedNote: "Ключ этого вопроса ненадёжен: на практике WHERE и агрегатные функции в подзапросах использовать МОЖНО. Обычно в подзапросе нельзя ORDER BY (нет среди вариантов).",
      question: "Конструкции, которых нельзя использовать в подзапросах",
      options: [
        { letter: "A", text: "MAX" },
        { letter: "B", text: "IN" },
        { letter: "C", text: "AVG" },
        { letter: "D", text: "SELECT *" },
        { letter: "E", text: "WHERE" },
        { letter: "F", text: "BETWEEN" },
        { letter: "G", text: "MIN" }
      ],
      correct: ["D"], userAnswer: ["D", "E"], officialResult: 1, keyConfidence: "derived",
      explanation: "Скалярный подзапрос должен возвращать один столбец, поэтому SELECT * (D) в нём неуместен. Остальные конструкции (WHERE, IN, BETWEEN, агрегаты) в подзапросах допустимы — этот пункт исходного теста спорный."
    },
    {
      id: "v1-db-16", variant: 1, subject: "db", number: 16, multi: true, topic: "Ключи", authored: true,
      question: "Характеристики первичного ключа (PRIMARY KEY) реляционной таблицы",
      options: [
        { letter: "A", text: "однозначно идентифицирует каждую строку таблицы" },
        { letter: "B", text: "не может содержать значение NULL" },
        { letter: "C", text: "в таблице допустим только один первичный ключ" },
        { letter: "D", text: "значения могут повторяться в разных строках" },
        { letter: "E", text: "может содержать NULL, если строка новая" },
        { letter: "F", text: "в одной таблице может быть несколько первичных ключей" }
      ],
      correct: ["A", "B", "C"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "🆕 Дополнительный вопрос (составлен для тренировки — оригинал не был сфотографирован). Первичный ключ однозначно идентифицирует строку (A), не может быть NULL (B) — иначе идентификация невозможна, и в таблице он ровно один (C) (хотя может быть составным из нескольких столбцов). Поэтому повторение значений (D), NULL (E) и несколько первичных ключей (F) недопустимы."
    },
    {
      id: "v1-db-17", variant: 1, subject: "db", number: 17, multi: true, topic: "SQL / подзапросы", disputed: true,
      disputedNote: "Ключ спорный: перечисленные операторы обычно допустимы в подзапросах. Традиционно в подзапросе нельзя ORDER BY (нет среди вариантов).",
      question: "Оператор, использовать который запрещено в подзапросах",
      options: [
        { letter: "A", text: "min" },
        { letter: "B", text: "select" },
        { letter: "C", text: "in" },
        { letter: "D", text: "where" },
        { letter: "E", text: "having" },
        { letter: "F", text: "avg" }
      ],
      correct: ["E"], userAnswer: ["B", "D", "E"], officialResult: 0, keyConfidence: "derived",
      explanation: "HAVING имеет смысл только вместе с GROUP BY, поэтому чаще всего в простом подзапросе он «лишний». Однако в целом все эти операторы в подзапросах допустимы — вопрос исходного теста некорректен."
    },
    {
      id: "v1-db-18", variant: 1, subject: "db", number: 18, multi: true, topic: "Нормализация",
      question: "Правила третьей нормальной формы",
      options: [
        { letter: "A", text: "неключевые атрибуты (если они вообще существуют) являются взаимно независимыми" },
        { letter: "B", text: "когда обязательно наличие трёх первичных ключей" },
        { letter: "C", text: "когда обязательно наличие двух внешних ключей" },
        { letter: "D", text: "неключевые атрибуты (если они вообще существуют) являются взаимно зависимыми" },
        { letter: "E", text: "когда обязательно наличие двух первичных ключей" },
        { letter: "F", text: "неключевые атрибуты (если они вообще существуют) неприводимо зависимы от первичного ключа" },
        { letter: "G", text: "когда обязательно наличие трёх внешних ключей" }
      ],
      correct: ["A", "F"], userAnswer: ["C", "F"], officialResult: 1, keyConfidence: "derived",
      explanation: "3NF: неключевые атрибуты взаимно независимы (нет транзитивных зависимостей) — A, и каждый неприводимо (полностью) зависит от первичного ключа — F. Требования про «два/три ключа» выдуманы."
    },
    {
      id: "v1-db-19", variant: 1, subject: "db", number: 19, multi: true, topic: "Реляционная модель",
      question: "Определите атрибуты в этом предложении: «Пожалуйста, назовите фамилию и должность преподавателя.»",
      options: [
        { letter: "A", text: "точка" },
        { letter: "B", text: "должность" },
        { letter: "C", text: "запятая" },
        { letter: "D", text: "назовите" },
        { letter: "E", text: "фамилия" },
        { letter: "F", text: "преподаватель" },
        { letter: "G", text: "пожалуйста" }
      ],
      correct: ["B", "E"], userAnswer: ["B", "E", "F"], officialResult: 1, keyConfidence: "derived",
      explanation: "Сущность здесь — «преподаватель», а его атрибуты — «фамилия» (E) и «должность» (B). «Преподаватель» — это сама сущность, а не атрибут, поэтому его выбор — ошибка."
    },
    {
      id: "v1-db-20", variant: 1, subject: "db", number: 20, multi: true, topic: "SQL / подзапросы",
      question: "Последовательность выражения, оператора и подзапроса в контексте предикатов с подзапросами",
      options: [
        { letter: "A", text: "подзапрос, оператор, выражение" },
        { letter: "B", text: "оператор, выражение, подзапрос" },
        { letter: "C", text: "выражение, подзапрос, оператор" },
        { letter: "D", text: "выражение, оператор, подзапрос" },
        { letter: "E", text: "подзапрос, выражение, оператор" },
        { letter: "F", text: "между ними нет последовательности" }
      ],
      correct: ["D"], userAnswer: ["D"], officialResult: 2, keyConfidence: "official",
      explanation: "Предикат с подзапросом строится как: выражение, затем оператор сравнения, затем подзапрос. Например: salary > (SELECT AVG(salary) FROM …)."
    }
  ]
};
