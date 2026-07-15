window.QUIZ_DATA = window.QUIZ_DATA || {};
/* Вариант 17 · Базы данных (тренировочный, авторский набор — не с реального
   экзамена), по образцу вариантов 4 и 6. 20 вопросов, множественный выбор
   A-H (multi:true), максимум 3 верных варианта в каждом вопросе (до 2 баллов
   за вопрос — та же схема, что и в остальных вариантах баз данных).
   Варианты ответов выровнены по длине и стилю формулировки, чтобы длина не
   выдавала правильный ответ (в первой редакции файла верные варианты были
   систематически длиннее и подробнее остальных — исправлено). Вопросы №3,
   №9, №13, №19 — трассировка: дана мини-таблица и SQL-запрос, нужно
   определить, что запрос вернёт (аналог вопросов «что выведет этот код»
   для алгоритмов). */
window.QUIZ_DATA["v17-db"] = {
  key: "v17-db", variant: 17, subject: "db", lang: "ru",
  title: "Вариант 17 · Базы данных (тренировочный)",
  questions: [
    {
      id: "v17-db-1", variant: 17, subject: "db", number: 1, multi: true, topic: "Транзакции: ACID",
      question: "Отметьте три свойства транзакций СУБД, отвечающие за целостность данных и корректность параллельного выполнения (без учёта устойчивости после сбоя).",
      options: [
        { letter: "A", text: "Atomicity — транзакция выполняется целиком или не выполняется вовсе" },
        { letter: "B", text: "Availability — система доступна в любой момент" },
        { letter: "C", text: "Consistency — переход БД из одного целостного состояния в другое" },
        { letter: "D", text: "Scalability — возможность горизонтального масштабирования" },
        { letter: "E", text: "Isolation — параллельные транзакции не влияют друг на друга" },
        { letter: "F", text: "Portability — переносимость между разными СУБД" },
        { letter: "G", text: "Usability — удобство пользовательского интерфейса" },
        { letter: "H", text: "Redundancy — намеренное дублирование данных" }
      ],
      correct: ["A", "C", "E"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Из четырёх букв ACID к целостности и параллельному выполнению относятся Atomicity (A), Consistency (C) и Isolation (E); четвёртая буква, Durability (устойчивость после сбоя), в этом вопросе намеренно не рассматривается. Availability, Scalability, Portability, Usability и Redundancy (B, D, F, G, H) — понятия из других областей (доступность распределённых систем, переносимость, юзабилити, денормализация), не входящие в ACID."
    },
    {
      id: "v17-db-2", variant: 17, subject: "db", number: 2, multi: true, topic: "Ключи",
      question: "Отметьте верные утверждения о ПЕРВИЧНОМ ключе (PRIMARY KEY) таблицы.",
      options: [
        { letter: "A", text: "может содержать значение NULL" },
        { letter: "B", text: "обеспечивает уникальность каждой строки" },
        { letter: "C", text: "в таблице может быть несколько таких ключей" },
        { letter: "D", text: "значения не могут повторяться в строках" },
        { letter: "E", text: "обязан состоять из нескольких столбцов" },
        { letter: "F", text: "сам является внешним ключом" },
        { letter: "G", text: "по нему обычно создаётся индекс" },
        { letter: "H", text: "может изменяться без ограничений" }
      ],
      correct: ["B", "D", "G"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Первичный ключ гарантирует уникальность строк (B), не допускает повторяющихся значений (D), и по нему СУБД обычно автоматически создаёт индекс (G). NULL в нём недопустим (A), в таблице может быть только один такой ключ (C), составным он быть не обязан (E), внешним ключом он сам не является (F), а его изменение обычно ограничено ссылочной целостностью (H)."
    },
    {
      id: "v17-db-3", variant: 17, subject: "db", number: 3, multi: true, topic: "Трассировка: JOIN",
      question: "Таблица Students: (1, Ali), (2, Bota), (3, Sara). Таблица Grades: (student_id=1, subject=Math, score=90), (student_id=1, subject=Physics, score=85), (student_id=2, subject=Math, score=70). Что вернёт запрос: SELECT s.name, g.score FROM Students s INNER JOIN Grades g ON s.id = g.student_id WHERE g.subject = 'Math';",
      options: [
        { letter: "A", text: "Ali|90, Bota|70" },
        { letter: "B", text: "Ali|90, Ali|85, Bota|70" },
        { letter: "C", text: "Ali|90, Bota|70, Sara|NULL" },
        { letter: "D", text: "Ali|85, Bota|70" },
        { letter: "E", text: "все строки всех предметов" },
        { letter: "F", text: "пустой результат" },
        { letter: "G", text: "только Ali|90" },
        { letter: "H", text: "только Bota|70" }
      ],
      correct: ["A"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "INNER JOIN сначала связывает студентов с их оценками по id, затем WHERE оставляет только записи по предмету Math: у Ali это (Math, 90) — запись (Physics, 85) отфильтровывается; у Bota — (Math, 70). Sara вообще не имеет оценок, поэтому не попадает в INNER JOIN. Итог: Ali|90, Bota|70 (A)."
    },
    {
      id: "v17-db-4", variant: 17, subject: "db", number: 4, multi: true, topic: "Нормализация: 2НФ",
      question: "Какое требование предъявляет ВТОРАЯ нормальная форма (2НФ) к таблице с составным первичным ключом?",
      options: [
        { letter: "A", text: "отсутствие транзитивных зависимостей" },
        { letter: "B", text: "все атрибуты атомарны" },
        { letter: "C", text: "нет частичной зависимости от части ключа" },
        { letter: "D", text: "каждый детерминант — потенциальный ключ" },
        { letter: "E", text: "отсутствие многозначных зависимостей" }
      ],
      multi: false, correct: ["C"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "2НФ (при выполненной 1НФ) требует отсутствия частичной зависимости — когда неключевой атрибут зависит только от части составного ключа (C). Атомарность — требование 1НФ (B), отсутствие транзитивных зависимостей — 3НФ (A), «детерминант — потенциальный ключ» — BCNF (D), многозначные зависимости — 4НФ (E)."
    },
    {
      id: "v17-db-5", variant: 17, subject: "db", number: 5, multi: true, topic: "Нормализация: 3НФ",
      question: "Транзитивная зависимость, которую устраняет ТРЕТЬЯ нормальная форма (3НФ), — это ситуация, когда",
      options: [
        { letter: "A", text: "атрибут зависит от ключа через другой неключевой атрибут" },
        { letter: "B", text: "значение атрибута может быть пустым" },
        { letter: "C", text: "таблица содержит повторяющиеся группы" },
        { letter: "D", text: "ключ состоит из нескольких столбцов" },
        { letter: "E", text: "внешний ключ ссылается сам на себя" }
      ],
      multi: false, correct: ["A"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Транзитивная зависимость — когда неключевой атрибут B зависит от ключа не напрямую, а через другой неключевой атрибут A (ключ→A→B), например «город» зависит от «индекса», а «индекс» — от ключа (A)."
    },
    {
      id: "v17-db-6", variant: 17, subject: "db", number: 6, multi: true, topic: "Индексы",
      question: "Отметьте верные утверждения об индексах в базе данных.",
      options: [
        { letter: "A", text: "ускоряют INSERT/UPDATE" },
        { letter: "B", text: "ускоряют поиск (SELECT)" },
        { letter: "C", text: "замедляют изменение данных" },
        { letter: "D", text: "обязательны для любого столбца" },
        { letter: "E", text: "заменяют первичный ключ" },
        { letter: "F", text: "часто реализованы как B-дерево" },
        { letter: "G", text: "не занимают места на диске" },
        { letter: "H", text: "всегда гарантируют уникальность" }
      ],
      correct: ["B", "C", "F"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Индекс ускоряет чтение (B), но замедляет запись, так как его тоже нужно обновлять (C); чаще всего индексы реализованы через B-дерево (F). Индекс не ускоряет запись (A), не обязателен для каждого столбца (D), не заменяет первичный ключ (E), занимает место на диске (G), а уникальность гарантирует только отдельный UNIQUE-индекс (H)."
    },
    {
      id: "v17-db-7", variant: 17, subject: "db", number: 7, multi: true, topic: "Транзакции: изоляция",
      question: "Аномалия «неповторяющееся чтение» (non-repeatable read) возникает, когда",
      options: [
        { letter: "A", text: "читаются ещё не закоммиченные данные" },
        { letter: "B", text: "повторное чтение строки даёт другое значение из-за чужого коммита" },
        { letter: "C", text: "повторный запрос возвращает другой набор строк" },
        { letter: "D", text: "две транзакции меняют одну строку одновременно" },
        { letter: "E", text: "СУБД теряет данные при сбое питания" }
      ],
      multi: false, correct: ["B"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Неповторяющееся чтение — это именно B: между двумя чтениями одной строки другая транзакция успевает изменить и зафиксировать её. «Грязное чтение» — это A, «фантомное чтение» — это C."
    },
    {
      id: "v17-db-8", variant: 17, subject: "db", number: 8, multi: true, topic: "Транзакции: изоляция",
      question: "Самый строгий уровень изоляции транзакций, исключающий все три классические аномалии чтения",
      options: [
        { letter: "A", text: "READ UNCOMMITTED" },
        { letter: "B", text: "READ COMMITTED" },
        { letter: "C", text: "REPEATABLE READ" },
        { letter: "D", text: "SERIALIZABLE" },
        { letter: "E", text: "AUTOCOMMIT" }
      ],
      multi: false, correct: ["D"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "SERIALIZABLE (D) — самый строгий уровень: транзакции ведут себя так, будто выполняются строго одна за другой. READ UNCOMMITTED (A) — самый слабый, REPEATABLE READ (C) не гарантирует защиту от фантомов во всех СУБД."
    },
    {
      id: "v17-db-9", variant: 17, subject: "db", number: 9, multi: true, topic: "Трассировка: GROUP BY/HAVING",
      question: "Таблица Orders(customer, amount): (Aigerim, 100), (Bek, 200), (Aigerim, 150), (Dana, 300). Какие покупатели попадут в результат запроса: SELECT customer FROM Orders GROUP BY customer HAVING SUM(amount) > 250;",
      options: [
        { letter: "A", text: "только Aigerim" },
        { letter: "B", text: "только Bek" },
        { letter: "C", text: "только Dana" },
        { letter: "D", text: "Aigerim и Bek" },
        { letter: "E", text: "Aigerim и Dana" },
        { letter: "F", text: "Bek и Dana" },
        { letter: "G", text: "все трое" },
        { letter: "H", text: "никто" }
      ],
      correct: ["C"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Суммы по покупателям: Aigerim = 100+150 = 250, Bek = 200, Dana = 300. Условие HAVING SUM(amount) > 250 — строгое неравенство, поэтому Aigerim (ровно 250) не проходит, Bek (200) тем более не проходит, а Dana (300) проходит. В результат попадает только Dana (C)."
    },
    {
      id: "v17-db-10", variant: 17, subject: "db", number: 10, multi: true, topic: "Представления (VIEW)",
      question: "Отметьте верные утверждения о представлениях (VIEW) в базе данных.",
      options: [
        { letter: "A", text: "хранят собственную полную копию данных" },
        { letter: "B", text: "это сохранённый запрос в виде виртуальной таблицы" },
        { letter: "C", text: "упрощают запросы, скрывают часть столбцов" },
        { letter: "D", text: "нельзя использовать в предложении FROM" },
        { letter: "E", text: "изменение через них иногда невозможно (напр. при JOIN)" },
        { letter: "F", text: "всегда работают быстрее обычных таблиц" },
        { letter: "G", text: "автоматически создают индекс" },
        { letter: "H", text: "не могут объединять несколько таблиц" }
      ],
      correct: ["B", "C", "E"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "VIEW — сохранённый запрос, представленный как виртуальная таблица (B); удобен для упрощения запросов и скрытия столбцов (C); изменение данных через представление на основе JOIN часто невозможно (E). Он не хранит копию данных (A), используется в FROM (D), не обязательно быстрее (F), не создаёт индексы (G) и может объединять несколько таблиц (H)."
    },
    {
      id: "v17-db-11", variant: 17, subject: "db", number: 11, multi: true, topic: "Типы СУБД",
      question: "Отметьте примеры NoSQL-моделей хранения данных.",
      options: [
        { letter: "A", text: "документоориентированная (MongoDB)" },
        { letter: "B", text: "реляционная с внешними ключами" },
        { letter: "C", text: "ключ-значение (Redis)" },
        { letter: "D", text: "строгая третья нормальная форма" },
        { letter: "E", text: "графовая (Neo4j)" },
        { letter: "F", text: "звёздная схема для OLAP" },
        { letter: "G", text: "язык запросов SQL" },
        { letter: "H", text: "хранимые процедуры" }
      ],
      correct: ["A", "C", "E"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "К NoSQL относятся документоориентированные СУБД (A), хранилища «ключ-значение» (C) и графовые базы (E). Реляционная модель, нормализация, звёздная схема, SQL и хранимые процедуры (B, D, F, G, H) — понятия классических реляционных СУБД."
    },
    {
      id: "v17-db-12", variant: 17, subject: "db", number: 12, multi: true, topic: "Ограничения SQL",
      question: "Отметьте ограничения (constraints), которые задают при создании столбца в SQL.",
      options: [
        { letter: "A", text: "NOT NULL — запрет пустых значений" },
        { letter: "B", text: "UNIQUE — требование уникальности" },
        { letter: "C", text: "SELECT — выборка данных" },
        { letter: "D", text: "CHECK — проверка по условию" },
        { letter: "E", text: "ORDER BY — сортировка значений" },
        { letter: "F", text: "GROUP BY — группировка значений" },
        { letter: "G", text: "TRUNCATE — очистка таблицы" },
        { letter: "H", text: "DISTINCT — удаление повторов" }
      ],
      correct: ["A", "B", "D"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "NOT NULL (A), UNIQUE (B) и CHECK (D) — реальные ограничения целостности столбца. SELECT, ORDER BY, GROUP BY и DISTINCT (C, E, F, H) — части синтаксиса запросов, а TRUNCATE (G) — отдельная команда очистки таблицы; ни один из них не ограничивает значения столбца."
    },
    {
      id: "v17-db-13", variant: 17, subject: "db", number: 13, multi: true, topic: "Трассировка: WHERE",
      question: "Таблица Employees(name, department, salary): (Nurlan, IT, 300000), (Saule, HR, 250000), (Yerlan, IT, 450000), (Madina, Sales, 200000). Что вернёт запрос: SELECT name FROM Employees WHERE department = 'IT' AND salary > 350000;",
      options: [
        { letter: "A", text: "Nurlan" },
        { letter: "B", text: "Saule" },
        { letter: "C", text: "Yerlan" },
        { letter: "D", text: "Madina" },
        { letter: "E", text: "Nurlan и Yerlan" },
        { letter: "F", text: "Saule и Madina" },
        { letter: "G", text: "все четверо" },
        { letter: "H", text: "никто" }
      ],
      correct: ["C"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Условию department='IT' удовлетворяют Nurlan (300000) и Yerlan (450000). Из них salary > 350000 проходит только Yerlan (450000 > 350000), а Nurlan (300000) — нет. В результате только Yerlan (C)."
    },
    {
      id: "v17-db-14", variant: 17, subject: "db", number: 14, multi: true, topic: "Блокировки",
      question: "Взаимоблокировка (deadlock) в СУБД возникает, когда",
      options: [
        { letter: "A", text: "читаются незакоммиченные данные другой транзакции" },
        { letter: "B", text: "транзакции взаимно ждут ресурсы друг друга" },
        { letter: "C", text: "СУБД недоступна из-за перегрузки сети" },
        { letter: "D", text: "индекс таблицы повреждён" },
        { letter: "E", text: "транзакция превышает лимит времени" }
      ],
      multi: false, correct: ["B"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Взаимоблокировка — циклическая ситуация: транзакция 1 удерживает ресурс, нужный транзакции 2, а транзакция 2 — ресурс, нужный транзакции 1 (B). СУБД обычно обнаруживает это и откатывает одну из транзакций."
    },
    {
      id: "v17-db-15", variant: 17, subject: "db", number: 15, multi: true, topic: "Процедуры и триггеры",
      question: "Отметьте верные различия хранимой процедуры (stored procedure) и триггера (trigger).",
      options: [
        { letter: "A", text: "процедура вызывается явно, триггер — автоматически по событию" },
        { letter: "B", text: "триггер всегда быстрее процедуры" },
        { letter: "C", text: "процедура не может принимать параметры" },
        { letter: "D", text: "триггер привязан к таблице и конкретному событию" },
        { letter: "E", text: "процедура тоже запускается автоматически" },
        { letter: "F", text: "триггер может вести журнал изменений (аудит)" },
        { letter: "G", text: "процедура — то же самое, что VIEW" },
        { letter: "H", text: "триггер не видит старые/новые значения строки" }
      ],
      correct: ["A", "D", "F"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Процедура вызывается явно, триггер — автоматически по событию (A); триггер привязан к конкретной таблице и событию (D); типичное применение триггера — ведение журнала аудита (F). Скорость (B), невозможность параметров (C), автозапуск процедур (E), тождество с VIEW (G) и отсутствие доступа к NEW/OLD (H) — неверные утверждения."
    },
    {
      id: "v17-db-16", variant: 17, subject: "db", number: 16, multi: true, topic: "Типы данных SQL",
      question: "Отметьте верные утверждения о СТРОКОВЫХ И ТЕКСТОВЫХ типах данных в SQL.",
      options: [
        { letter: "A", text: "VARCHAR(n) — строка переменной длины до n" },
        { letter: "B", text: "INT хорошо хранит дробные числа" },
        { letter: "C", text: "CHAR(n) — всегда ровно n символов, с пробелами" },
        { letter: "D", text: "DATE хранит дату и время до секунды" },
        { letter: "E", text: "BOOLEAN хранит только значение TRUE" },
        { letter: "F", text: "FLOAT точно хранит денежные суммы" },
        { letter: "G", text: "TEXT/BLOB — для больших текста/бинарных данных" },
        { letter: "H", text: "все типы занимают одинаковый объём памяти" }
      ],
      correct: ["A", "C", "G"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "VARCHAR(n) — переменная длина до n (A); CHAR(n) — фиксированная длина n с дополнением пробелами (C); TEXT/BLOB — для больших текстовых/бинарных данных (G). INT не для дробных чисел (B); DATE хранит ТОЛЬКО дату, без времени — это задача DATETIME/TIMESTAMP (D); BOOLEAN хранит и TRUE, и FALSE, и NULL (E); для денежных сумм используют DECIMAL, а не FLOAT из-за погрешности округления (F); типы занимают разный объём памяти (H)."
    },
    {
      id: "v17-db-17", variant: 17, subject: "db", number: 17, multi: true, topic: "SQL: порядок выполнения",
      question: "Правильный порядок логической обработки предложений SQL-запроса",
      options: [
        { letter: "A", text: "SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY" },
        { letter: "B", text: "FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY" },
        { letter: "C", text: "FROM → SELECT → WHERE → GROUP BY → HAVING → ORDER BY" },
        { letter: "D", text: "WHERE → FROM → SELECT → GROUP BY → HAVING → ORDER BY" },
        { letter: "E", text: "FROM → HAVING → WHERE → GROUP BY → SELECT → ORDER BY" }
      ],
      multi: false, correct: ["B"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Логический порядок: источник данных FROM, фильтрация строк WHERE, группировка GROUP BY, фильтрация групп HAVING, формирование результата SELECT, сортировка ORDER BY (B). Поэтому агрегаты нельзя использовать в WHERE — группировка на этом этапе ещё не выполнена."
    },
    {
      id: "v17-db-18", variant: 17, subject: "db", number: 18, multi: true, topic: "Ссылочная целостность",
      question: "Что делает опция ON DELETE CASCADE для внешнего ключа?",
      options: [
        { letter: "A", text: "запрещает удаление строки при наличии ссылок" },
        { letter: "B", text: "удаляет все ссылающиеся дочерние строки" },
        { letter: "C", text: "заменяет внешний ключ на NULL" },
        { letter: "D", text: "запрещает DELETE во всей базе" },
        { letter: "E", text: "блокирует таблицу на время удаления" }
      ],
      multi: false, correct: ["B"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "ON DELETE CASCADE означает, что при удалении родительской строки СУБД автоматически удалит все дочерние строки, ссылающиеся на неё (B). Запрет при наличии ссылок — поведение RESTRICT/NO ACTION по умолчанию (A); замена на NULL — это ON DELETE SET NULL (C)."
    },
    {
      id: "v17-db-19", variant: 17, subject: "db", number: 19, multi: true, topic: "Трассировка: ORDER BY/LIMIT",
      question: "Таблица Products(name, price): (Стол, 15000), (Стул, 5000), (Шкаф, 40000), (Полка, 8000). Что вернёт запрос: SELECT name FROM Products ORDER BY price DESC LIMIT 2;",
      options: [
        { letter: "A", text: "Стол, Стул" },
        { letter: "B", text: "Шкаф, Стол" },
        { letter: "C", text: "Стул, Полка" },
        { letter: "D", text: "Полка, Стул" },
        { letter: "E", text: "Шкаф, Стул" },
        { letter: "F", text: "Стол, Полка" },
        { letter: "G", text: "все четыре" },
        { letter: "H", text: "Шкаф, Полка" }
      ],
      correct: ["B"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "ORDER BY price DESC сортирует по убыванию цены: Шкаф(40000), Стол(15000), Полка(8000), Стул(5000). LIMIT 2 оставляет первые две строки: Шкаф, Стол (B)."
    },
    {
      id: "v17-db-20", variant: 17, subject: "db", number: 20, multi: true, topic: "ER-модель",
      question: "Отметьте элементы, из которых строится ER-диаграмма («сущность-связь»).",
      options: [
        { letter: "A", text: "сущность (entity)" },
        { letter: "B", text: "атрибут (attribute)" },
        { letter: "C", text: "связь (relationship)" },
        { letter: "D", text: "первичный ключ операционной системы" },
        { letter: "E", text: "индекс на основе B-дерева" },
        { letter: "F", text: "процедура резервного копирования" },
        { letter: "G", text: "сетевой протокол передачи данных" },
        { letter: "H", text: "файл журнала транзакций" }
      ],
      correct: ["A", "B", "C"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "ER-модель строится из трёх базовых элементов: сущностей (A), их атрибутов (B) и связей между сущностями (C). Остальные пункты (D–H) — понятия из других областей (ОС, индексирование, резервное копирование, сети, журналирование)."
    }
  ]
};
