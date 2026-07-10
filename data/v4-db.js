window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["v4-db"] = {
  key: "v4-db", variant: 4, subject: "db", lang: "ru",
  title: "Вариант 4 · Базы данных (тренировочный)",
  questions: [
    {
      id: "v4-db-1", variant: 4, subject: "db", number: 1, multi: true, topic: "Ключи",
      question: "Какой ключ по умолчанию МОЖЕТ содержать значения NULL?",
      options: [
        { letter: "A", text: "внешний ключ (foreign key)" },
        { letter: "B", text: "первичный ключ (primary key)" },
        { letter: "C", text: "потенциальный ключ (candidate)" },
        { letter: "D", text: "суперключ отношения" },
        { letter: "E", text: "уникальный ключ таблицы" }
      ],
      correct: ["A"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Внешний ключ (A) может быть NULL — это значит «связь отсутствует» (если нет ограничения NOT NULL). Первичный и потенциальный ключи однозначно идентифицируют строку, поэтому NULL в них недопустим."
    },
    {
      id: "v4-db-2", variant: 4, subject: "db", number: 2, multi: true, topic: "Реляционная алгебра",
      question: "Какие операции реляционной алгебры требуют совместимости схем (одинакового набора атрибутов)?",
      options: [
        { letter: "A", text: "объединение (UNION)" },
        { letter: "B", text: "декартово произведение" },
        { letter: "C", text: "разность (EXCEPT)" },
        { letter: "D", text: "проекция (PROJECT)" },
        { letter: "E", text: "соединение (JOIN)" },
        { letter: "F", text: "выборка (SELECT)" },
        { letter: "G", text: "пересечение (INTERSECT)" },
        { letter: "H", text: "переименование (RENAME)" }
      ],
      correct: ["A", "C", "G"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Теоретико-множественные операции — объединение (A), разность (C) и пересечение (G) — определены только для отношений с одинаковым набором атрибутов. Произведение, соединение, проекция, выборка и переименование такого требования не имеют."
    },
    {
      id: "v4-db-3", variant: 4, subject: "db", number: 3, multi: true, topic: "Нормализация",
      question: "Что устраняет приведение таблицы ко второй нормальной форме (2НФ)?",
      options: [
        { letter: "A", text: "транзитивные зависимости между неключевыми атрибутами" },
        { letter: "B", text: "неатомарные (составные) значения в ячейках" },
        { letter: "C", text: "многозначные зависимости" },
        { letter: "D", text: "частичные зависимости от части ключа" },
        { letter: "E", text: "избыточные внешние ключи" }
      ],
      correct: ["D"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "2НФ убирает частичные зависимости — когда неключевой атрибут зависит лишь от ЧАСТИ составного первичного ключа (D). Транзитивные зависимости (A) устраняет 3НФ, неатомарные значения (B) — 1НФ, многозначные (C) — 4НФ."
    },
    {
      id: "v4-db-4", variant: 4, subject: "db", number: 4, multi: true, topic: "SQL · NULL",
      question: "Как в SQL правильно отобрать строки, где столбец col содержит NULL?",
      options: [
        { letter: "A", text: "WHERE col = NULL" },
        { letter: "B", text: "WHERE col <> NULL" },
        { letter: "C", text: "WHERE col IS NULL" },
        { letter: "D", text: "WHERE ISNULL(col)" },
        { letter: "E", text: "WHERE col == NULL" }
      ],
      correct: ["C"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "NULL проверяется только через IS NULL (C). Сравнение col = NULL (A) даёт не TRUE, а UNKNOWN, поэтому строки не попадут в результат. Оператора == в стандартном SQL нет."
    },
    {
      id: "v4-db-5", variant: 4, subject: "db", number: 5, multi: true, topic: "SQL · агрегаты",
      question: "Чем COUNT(*) отличается от COUNT(столбец)?",
      options: [
        { letter: "A", text: "COUNT(*) считает строки без единого NULL" },
        { letter: "B", text: "это одно и то же, разницы нет" },
        { letter: "C", text: "COUNT(столбец) даёт уникальные значения" },
        { letter: "D", text: "COUNT(*) считает столбцы таблицы" },
        { letter: "E", text: "COUNT(столбец) пропускает NULL-значения" }
      ],
      correct: ["E"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "COUNT(*) считает все строки, а COUNT(столбец) — только строки, где этот столбец не NULL (E). Для подсчёта уникальных значений нужен COUNT(DISTINCT столбец), а не обычный COUNT."
    },
    {
      id: "v4-db-6", variant: 4, subject: "db", number: 6, multi: true, topic: "Транзакции · ACID",
      question: "Какое свойство ACID означает «всё или ничего» — транзакция выполняется целиком либо откатывается?",
      options: [
        { letter: "A", text: "согласованность (Consistency)" },
        { letter: "B", text: "изолированность (Isolation)" },
        { letter: "C", text: "долговечность (Durability)" },
        { letter: "D", text: "атомарность (Atomicity)" },
        { letter: "E", text: "сериализуемость (Serializable)" }
      ],
      correct: ["D"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Атомарность (Atomicity) гарантирует, что транзакция применяется полностью либо не оставляет следов (D). Изолированность — про параллельные транзакции, долговечность — про сохранность после фиксации."
    },
    {
      id: "v4-db-7", variant: 4, subject: "db", number: 7, multi: true, topic: "SQL · DML/DDL",
      question: "Какая команда быстро удаляет ВСЕ строки таблицы, сохраняя её структуру?",
      options: [
        { letter: "A", text: "DROP TABLE удаляет и структуру" },
        { letter: "B", text: "TRUNCATE TABLE, все строки" },
        { letter: "C", text: "DELETE TABLE целиком за раз" },
        { letter: "D", text: "REMOVE ALL ROWS" },
        { letter: "E", text: "ALTER TABLE CLEAR" }
      ],
      correct: ["B"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "TRUNCATE TABLE (B) быстро очищает все строки, не удаляя саму таблицу. DROP (A) удаляет таблицу вместе со структурой; команд DELETE TABLE и REMOVE ALL в SQL нет."
    },
    {
      id: "v4-db-8", variant: 4, subject: "db", number: 8, multi: true, topic: "Нормализация",
      question: "К какой форме приводят таблицу, если в 3НФ всё ещё остаются аномалии из-за пересекающихся ключей?",
      options: [
        { letter: "A", text: "первой нормальной форме (1НФ)" },
        { letter: "B", text: "второй нормальной форме (2НФ)" },
        { letter: "C", text: "ненормализованному плоскому виду" },
        { letter: "D", text: "доменно-ключевой форме" },
        { letter: "E", text: "четвёртой нормальной форме (4НФ)" },
        { letter: "F", text: "форме Бойса–Кодда (BCNF)" }
      ],
      correct: ["F"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Более строгая, чем 3НФ, — форма Бойса–Кодда (BCNF) (F): детерминантом любой функциональной зависимости обязан быть потенциальный ключ. 4НФ борется уже с многозначными зависимостями."
    },
    {
      id: "v4-db-9", variant: 4, subject: "db", number: 9, multi: true, topic: "SQL · GROUP BY",
      question: "Какие утверждения о GROUP BY верны?",
      options: [
        { letter: "A", text: "неагрегированные столбцы — в GROUP BY" },
        { letter: "B", text: "отбор групп задаётся словом WHERE" },
        { letter: "C", text: "условие на группы пишут в HAVING" },
        { letter: "D", text: "конструкция требует ORDER BY" },
        { letter: "E", text: "объединяет две таблицы по ключу" },
        { letter: "F", text: "работает как DISTINCT" }
      ],
      correct: ["A", "C"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Верно: неагрегированные столбцы SELECT должны быть в GROUP BY (A), а условие на уже сформированные группы задаётся в HAVING (C). WHERE фильтрует строки ДО группировки (B неверно), ORDER BY не обязателен, объединение таблиц — это JOIN."
    },
    {
      id: "v4-db-10", variant: 4, subject: "db", number: 10, multi: true, topic: "SQL · JOIN",
      question: "Что возвращает INNER JOIN двух таблиц?",
      options: [
        { letter: "A", text: "все строки левой плюс совпадения правой" },
        { letter: "B", text: "только строки правой без пар" },
        { letter: "C", text: "строки, совпавшие в обеих таблицах" },
        { letter: "D", text: "все возможные пары строк таблиц" },
        { letter: "E", text: "строки без соответствия в другой" }
      ],
      correct: ["C"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "INNER JOIN оставляет только строки, для которых условие соединения истинно в обеих таблицах (C). Вариант A описывает LEFT JOIN, а D — декартово произведение (CROSS JOIN)."
    },
    {
      id: "v4-db-11", variant: 4, subject: "db", number: 11, multi: true, topic: "Реляционная модель",
      question: "Что такое степень (degree) отношения?",
      options: [
        { letter: "A", text: "число атрибутов (столбцов)" },
        { letter: "B", text: "число кортежей (строк)" },
        { letter: "C", text: "число значений первичного ключа" },
        { letter: "D", text: "число внешних ключей" },
        { letter: "E", text: "размер в байтах на диске" }
      ],
      correct: ["A"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Степень отношения — это число его атрибутов, то есть столбцов (A). Не путайте с кардинальностью: число строк (кортежей) называется кардинальностью, а не степенью."
    },
    {
      id: "v4-db-12", variant: 4, subject: "db", number: 12, multi: true, topic: "Реляционная модель",
      question: "Что такое кардинальность (cardinality) отношения?",
      options: [
        { letter: "A", text: "число атрибутов схемы" },
        { letter: "B", text: "число доменов отношения" },
        { letter: "C", text: "число ограничений целостности" },
        { letter: "D", text: "глубина вложенных подзапросов" },
        { letter: "E", text: "число кортежей (строк)" }
      ],
      correct: ["E"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Кардинальность — это число строк (кортежей) в отношении (E). Число столбцов — это степень (degree). Эти два понятия часто путают."
    },
    {
      id: "v4-db-13", variant: 4, subject: "db", number: 13, multi: true, topic: "SQL · подзапросы",
      question: "Когда предикат EXISTS(подзапрос) возвращает истину?",
      options: [
        { letter: "A", text: "подзапрос вернул ровно одно значение" },
        { letter: "B", text: "подзапрос вернул хотя бы одну строку" },
        { letter: "C", text: "строки подзапроса не содержат NULL" },
        { letter: "D", text: "внешний запрос совпал по всем столбцам" },
        { letter: "E", text: "подзапрос не вернул строк" }
      ],
      correct: ["B"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "EXISTS истинен, если подзапрос вернул хотя бы одну строку (B) — конкретные значения при этом неважны. Вариант E описывает противоположный случай (это NOT EXISTS)."
    },
    {
      id: "v4-db-14", variant: 4, subject: "db", number: 14, multi: true, topic: "SQL · SELECT",
      question: "Что делает ключевое слово DISTINCT в SELECT?",
      options: [
        { letter: "A", text: "сортирует результат по возрастанию" },
        { letter: "B", text: "выбирает непустые значения" },
        { letter: "C", text: "группирует строки перед выводом" },
        { letter: "D", text: "убирает повторяющиеся строки" },
        { letter: "E", text: "считает число уникальных строк" }
      ],
      correct: ["D"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "DISTINCT удаляет из результата дубликаты, оставляя только различные строки (D). Он не сортирует (это ORDER BY), не фильтрует NULL и не считает — подсчёт уникальных даёт COUNT(DISTINCT ...)."
    },
    {
      id: "v4-db-15", variant: 4, subject: "db", number: 15, multi: true, topic: "Ключи",
      question: "Какие свойства верны для первичного ключа (PRIMARY KEY)?",
      options: [
        { letter: "A", text: "уникален для каждой строки" },
        { letter: "B", text: "может быть NULL" },
        { letter: "C", text: "не может быть NULL" },
        { letter: "D", text: "их может быть несколько" },
        { letter: "E", text: "значения повторяются" },
        { letter: "F", text: "обязан быть числом" }
      ],
      correct: ["A", "C"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Первичный ключ уникален для каждой строки (A) и не может быть NULL (C). При этом в таблице он один (хотя может быть составным), значения не повторяются, а тип не обязан быть числовым."
    },
    {
      id: "v4-db-16", variant: 4, subject: "db", number: 16, multi: true, topic: "Функциональные зависимости",
      question: "Как называется зависимость неключевого атрибута от другого неключевого, которую устраняет 3НФ?",
      options: [
        { letter: "A", text: "частичная зависимость от ключа" },
        { letter: "B", text: "многозначная зависимость" },
        { letter: "C", text: "полная функциональная зависимость" },
        { letter: "D", text: "рекурсивная зависимость ключа" },
        { letter: "E", text: "транзитивная зависимость" }
      ],
      correct: ["E"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Зависимость «ключ → неключевой A → неключевой B» называется транзитивной (E); её и устраняет 3НФ. Частичная зависимость (A) — это про 2НФ, многозначная (B) — про 4НФ."
    },
    {
      id: "v4-db-17", variant: 4, subject: "db", number: 17, multi: true, topic: "SQL · агрегаты и NULL",
      question: "Дана таблица T(id, val) со строками (1, 10), (2, NULL), (3, 30). Что вернёт SELECT COUNT(val) FROM T?",
      options: [
        { letter: "A", text: "3" },
        { letter: "B", text: "NULL" },
        { letter: "C", text: "2" },
        { letter: "D", text: "1" },
        { letter: "E", text: "0" }
      ],
      correct: ["C"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "COUNT(val) считает только строки, где val не NULL. Значения 10 и 30 подходят, строка с NULL пропускается → результат 2 (C). А COUNT(*) вернул бы 3."
    },
    {
      id: "v4-db-18", variant: 4, subject: "db", number: 18, multi: true, topic: "SQL · DISTINCT",
      question: "Дана таблица T(id) со строками (1), (2), (2), (3), (3), (3). Сколько строк вернёт SELECT DISTINCT id FROM T?",
      options: [
        { letter: "A", text: "6" },
        { letter: "B", text: "5" },
        { letter: "C", text: "2" },
        { letter: "D", text: "1" },
        { letter: "E", text: "0" },
        { letter: "F", text: "3" }
      ],
      correct: ["F"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "DISTINCT оставляет только различные значения id: 1, 2, 3 — это 3 строки (F). Всего строк 6, но повторяющиеся 2 и 3 схлопываются в одно значение каждое."
    },
    {
      id: "v4-db-19", variant: 4, subject: "db", number: 19, multi: true, topic: "Индексы · DDL",
      question: "Какова главная цель создания индекса на столбце таблицы?",
      options: [
        { letter: "A", text: "ускорить поиск по столбцу" },
        { letter: "B", text: "запретить значения NULL" },
        { letter: "C", text: "гарантировать уникальность значений строк" },
        { letter: "D", text: "уменьшить размер таблицы" },
        { letter: "E", text: "держать данные физически отсортированными" }
      ],
      correct: ["A"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Индекс ускоряет поиск и выборку по столбцу (A) ценой лишней памяти и замедления вставок/обновлений. Он не запрещает NULL, не уменьшает размер таблицы (наоборот) и не задаёт физический порядок строк (кроме кластерного случая)."
    },
    {
      id: "v4-db-20", variant: 4, subject: "db", number: 20, multi: true, topic: "Реляционная алгебра",
      question: "Какая операция реляционной алгебры оставляет только некоторые СТОЛБЦЫ отношения?",
      options: [
        { letter: "A", text: "выборка строк по условию (σ)" },
        { letter: "B", text: "проекция — выбор столбцов (π)" },
        { letter: "C", text: "соединение таблиц по условию (join)" },
        { letter: "D", text: "декартово произведение отношений" },
        { letter: "E", text: "переименование атрибутов (ρ)" }
      ],
      correct: ["B"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Проекция (π) выбирает заданные столбцы (атрибуты) отношения (B). Выборка (σ), наоборот, отбирает строки по условию. Эти две базовые операции легко перепутать."
    }
  ]
};
