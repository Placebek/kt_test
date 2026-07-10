window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["v6-db"] = {
  key: "v6-db", variant: 6, subject: "db", lang: "ru",
  title: "Вариант 6 · Базы данных (тренировочный)",
  questions: [
    {
      id: "v6-db-1", variant: 6, subject: "db", number: 1, multi: true, topic: "Ключи",
      question: "Отметьте верные утверждения о внешнем ключе (FOREIGN KEY).",
      options: [
        { letter: "A", text: "может содержать значение NULL" },
        { letter: "B", text: "ссылается на первичный (или потенциальный) ключ другой таблицы" },
        { letter: "C", text: "обязан быть уникальным в своей таблице" },
        { letter: "D", text: "сам обязан быть первичным ключом" },
        { letter: "E", text: "может ссылаться на ту же таблицу (рекурсивно)" }
      ],
      correct: ["A", "B", "E"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Внешний ключ может быть NULL, если связь необязательна (A); он ссылается на первичный/потенциальный ключ родительской таблицы (B) и вполне может указывать на ту же таблицу — например, «начальник» в таблице сотрудников (E). Уникальность и роль первичного ключа для него не требуются."
    },
    {
      id: "v6-db-2", variant: 6, subject: "db", number: 2, multi: true, topic: "Нормализация",
      question: "Какое требование предъявляет первая нормальная форма (1НФ)?",
      options: [
        { letter: "A", text: "отсутствие транзитивных зависимостей" },
        { letter: "B", text: "все значения атрибутов атомарны (неделимы)" },
        { letter: "C", text: "отсутствие частичных зависимостей от составного ключа" },
        { letter: "D", text: "каждый детерминант — потенциальный ключ" },
        { letter: "E", text: "отсутствие многозначных зависимостей" }
      ],
      correct: ["B"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "1НФ требует атомарности: в каждой ячейке одно неделимое значение, без списков и повторяющихся групп (B). Частичные зависимости убирает 2НФ, транзитивные — 3НФ, требование про детерминанты — BCNF, многозначные — 4НФ."
    },
    {
      id: "v6-db-3", variant: 6, subject: "db", number: 3, multi: true, topic: "SQL · порядок выполнения",
      question: "В каком предложении отбираются строки ДО группировки GROUP BY?",
      options: [
        { letter: "A", text: "в HAVING" },
        { letter: "B", text: "в WHERE" },
        { letter: "C", text: "в ORDER BY" },
        { letter: "D", text: "в SELECT DISTINCT" },
        { letter: "E", text: "в самом GROUP BY" }
      ],
      correct: ["B"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "WHERE фильтрует строки до группировки (B), а HAVING — уже готовые группы после неё. Порядок логической обработки: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY. Поэтому в WHERE нельзя использовать агрегаты."
    },
    {
      id: "v6-db-4", variant: 6, subject: "db", number: 4, multi: true, topic: "SQL · JOIN",
      question: "Что вернёт LEFT OUTER JOIN таблиц A и B?",
      options: [
        { letter: "A", text: "все возможные пары строк A и B" },
        { letter: "B", text: "только строки, совпавшие в обеих таблицах по условию" },
        { letter: "C", text: "все строки B и совпавшие из A" },
        { letter: "D", text: "все строки A, а из B — совпавшие (иначе NULL)" },
        { letter: "E", text: "строки A без соответствия в B" }
      ],
      correct: ["D"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "LEFT JOIN сохраняет ВСЕ строки левой таблицы A; там, где в B нет совпадения, столбцы B заполняются NULL (D). Только совпадения — это INNER JOIN (B), а «все пары» — декартово произведение (A)."
    },
    {
      id: "v6-db-5", variant: 6, subject: "db", number: 5, multi: true, topic: "Транзакции · ACID",
      question: "Какое свойство ACID гарантирует, что после COMMIT данные не пропадут даже при сбое питания?",
      options: [
        { letter: "A", text: "атомарность (Atomicity)" },
        { letter: "B", text: "согласованность (Consistency)" },
        { letter: "C", text: "изолированность (Isolation)" },
        { letter: "D", text: "долговечность (Durability)" },
        { letter: "E", text: "масштабируемость (Scalability)" }
      ],
      correct: ["D"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Долговечность (Durability) гарантирует, что зафиксированные изменения сохранятся даже при сбое или отключении питания (D). Атомарность — про «всё или ничего», изолированность — про параллельные транзакции; «масштабируемость» вообще не входит в ACID."
    },
    {
      id: "v6-db-6", variant: 6, subject: "db", number: 6, multi: true, topic: "SQL · агрегаты",
      question: "Какие из перечисленных агрегатов игнорируют строки со значением NULL в аргументе?",
      options: [
        { letter: "A", text: "SUM(x)" },
        { letter: "B", text: "COUNT(*)" },
        { letter: "C", text: "AVG(x)" },
        { letter: "D", text: "COUNT(x)" },
        { letter: "E", text: "COUNT(1)" }
      ],
      correct: ["A", "C", "D"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "SUM, AVG и COUNT(x) учитывают только непустые значения — строки с NULL пропускаются (A, C, D). А COUNT(*) и COUNT(1) считают ВСЕ строки подряд, независимо от NULL (B, E — не игнорируют). Тонкость: COUNT(x) и COUNT(1) ведут себя по-разному именно из-за NULL."
    },
    {
      id: "v6-db-7", variant: 6, subject: "db", number: 7, multi: true, topic: "SQL · ORDER BY",
      question: "По умолчанию (без указания ASC/DESC) ORDER BY сортирует",
      options: [
        { letter: "A", text: "по убыванию (DESC)" },
        { letter: "B", text: "по возрастанию (ASC)" },
        { letter: "C", text: "в случайном порядке" },
        { letter: "D", text: "по физическому порядку на диске" },
        { letter: "E", text: "по длине значений" }
      ],
      correct: ["B"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Если явно не указано, ORDER BY сортирует по возрастанию — как если бы стояло ASC (B). Для обратного порядка нужно писать DESC. Без ORDER BY порядок строк вообще не гарантируется."
    },
    {
      id: "v6-db-8", variant: 6, subject: "db", number: 8, multi: true, topic: "Ключи",
      question: "Что такое суперключ (superkey) отношения?",
      options: [
        { letter: "A", text: "набор атрибутов, однозначно определяющий строку" },
        { letter: "B", text: "обязательно ровно один столбец" },
        { letter: "C", text: "ключ, обязательно ссылающийся на строку другой таблицы" },
        { letter: "D", text: "минимально возможный по составу ключ" },
        { letter: "E", text: "ключ, в котором не бывает значений NULL" }
      ],
      correct: ["A"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Суперключ — любой набор атрибутов, значения которого однозначно определяют строку (A); он может содержать «лишние» столбцы. Минимальный суперключ (без лишнего) — это уже потенциальный ключ (D описывает именно его)."
    },
    {
      id: "v6-db-9", variant: 6, subject: "db", number: 9, multi: true, topic: "Функциональные зависимости",
      question: "Многозначные зависимости (multivalued dependencies) устраняются приведением к",
      options: [
        { letter: "A", text: "1НФ" },
        { letter: "B", text: "2НФ" },
        { letter: "C", text: "3НФ" },
        { letter: "D", text: "4НФ" },
        { letter: "E", text: "BCNF" }
      ],
      correct: ["D"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Четвёртая нормальная форма (4НФ) убирает нетривиальные многозначные зависимости (D). 2НФ и 3НФ работают с функциональными зависимостями, BCNF — их усиление, но именно многозначные — задача 4НФ."
    },
    {
      id: "v6-db-10", variant: 6, subject: "db", number: 10, multi: true, topic: "SQL · DML/DDL",
      question: "Какая команда удаляет строки и может быть отменена откатом (ROLLBACK), так как является DML?",
      options: [
        { letter: "A", text: "DROP TABLE" },
        { letter: "B", text: "TRUNCATE TABLE" },
        { letter: "C", text: "DELETE" },
        { letter: "D", text: "ALTER TABLE" },
        { letter: "E", text: "CREATE TABLE" }
      ],
      correct: ["C"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "DELETE — это DML: она удаляет строки построчно в рамках транзакции, и её можно откатить (C). TRUNCATE и DROP относятся к DDL, обычно выполняют неявный commit и откату не поддаются; DROP к тому же удаляет саму таблицу."
    },
    {
      id: "v6-db-11", variant: 6, subject: "db", number: 11, multi: true, topic: "Реляционная модель",
      question: "Строка таблицы в реляционной модели формально называется",
      options: [
        { letter: "A", text: "кортеж (tuple)" },
        { letter: "B", text: "атрибут (attribute)" },
        { letter: "C", text: "домен (domain)" },
        { letter: "D", text: "отношение (relation)" },
        { letter: "E", text: "степень (degree)" }
      ],
      correct: ["A"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Строка — это кортеж (tuple) (A). Столбец — атрибут (B), таблица целиком — отношение (D), множество допустимых значений столбца — домен (C), а число столбцов — степень (E)."
    },
    {
      id: "v6-db-12", variant: 6, subject: "db", number: 12, multi: true, topic: "SQL · GROUP BY",
      question: "Условие HAVING в запросе с GROUP BY применяется к",
      options: [
        { letter: "A", text: "отдельным строкам ещё до группировки" },
        { letter: "B", text: "уже сформированным группам" },
        { letter: "C", text: "столбцам в предложении ORDER BY" },
        { letter: "D", text: "именам таблиц в разделе FROM" },
        { letter: "E", text: "индексам таблицы" }
      ],
      correct: ["B"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "HAVING фильтрует уже готовые группы и может использовать агрегаты, например HAVING COUNT(*) > 5 (B). Отдельные строки до группировки отбирает WHERE (A). Это классическая пара «WHERE — до, HAVING — после»."
    },
    {
      id: "v6-db-13", variant: 6, subject: "db", number: 13, multi: true, topic: "SQL · подзапросы",
      question: "С чем связана типичная ошибка при использовании NOT IN (SELECT ...)?",
      options: [
        { letter: "A", text: "подзапрос вернул ровно одну строку" },
        { letter: "B", text: "данные в подзапросе отсортированы" },
        { letter: "C", text: "в подзапросе только числовые значения" },
        { letter: "D", text: "в подзапросе больше ста строк" },
        { letter: "E", text: "среди значений подзапроса встречается NULL" }
      ],
      correct: ["E"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Если подзапрос вернёт хотя бы один NULL, то NOT IN сравнивает с NULL и даёт UNKNOWN, из-за чего внешний запрос может неожиданно вернуть пусто (E). Поэтому с NOT IN на «обнуляемых» столбцах предпочитают NOT EXISTS."
    },
    {
      id: "v6-db-14", variant: 6, subject: "db", number: 14, multi: true, topic: "Представления",
      question: "Что такое представление (VIEW) в SQL?",
      options: [
        { letter: "A", text: "виртуальная таблица на основе запроса" },
        { letter: "B", text: "физическая копия данных на диске" },
        { letter: "C", text: "индекс для ускорения поиска" },
        { letter: "D", text: "резервная копия всей базы данных" },
        { letter: "E", text: "временный журнал транзакций" }
      ],
      correct: ["A"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Представление — это сохранённый запрос, который выглядит как таблица, но данных сам не хранит (A): при обращении оно каждый раз вычисляется из базовых таблиц. Физически хранит данные материализованное представление — но это уже отдельное понятие."
    },
    {
      id: "v6-db-15", variant: 6, subject: "db", number: 15, multi: true, topic: "Транзакции · изоляция",
      question: "«Грязное чтение» (dirty read) — это когда транзакция читает",
      options: [
        { letter: "A", text: "данные из устаревшей резервной копии" },
        { letter: "B", text: "только собственные незавершённые изменения" },
        { letter: "C", text: "ещё не зафиксированные изменения другой транзакции" },
        { letter: "D", text: "данные напрямую с диска, минуя кэш" },
        { letter: "E", text: "устаревшие данные из кэша индекса" }
      ],
      correct: ["C"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Грязное чтение — чтение изменений другой транзакции, которые ещё не зафиксированы (C); если та откатится, прочитанные данные окажутся ложными. От этого защищает уровень изоляции READ COMMITTED и выше."
    },
    {
      id: "v6-db-16", variant: 6, subject: "db", number: 16, multi: true, topic: "Реляционная алгебра",
      question: "Результат декартова произведения таблиц с m и n строками содержит строк",
      options: [
        { letter: "A", text: "m + n" },
        { letter: "B", text: "m × n" },
        { letter: "C", text: "max(m, n)" },
        { letter: "D", text: "m − n" },
        { letter: "E", text: "min(m, n)" }
      ],
      correct: ["B"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Декартово произведение (CROSS JOIN) сочетает каждую строку первой таблицы с каждой строкой второй → m × n строк (B). Именно поэтому его без условия соединения используют осторожно: для 1000×1000 получится миллион строк."
    },
    {
      id: "v6-db-17", variant: 6, subject: "db", number: 17, multi: true, topic: "SQL · GROUP BY",
      question: "Таблица T(a) содержит строки (1), (1), (2), (3). Что вернёт запрос SELECT a, COUNT(*) FROM T GROUP BY a для группы a = 1?",
      options: [
        { letter: "A", text: "1, 2" },
        { letter: "B", text: "1, 1" },
        { letter: "C", text: "1, 4" },
        { letter: "D", text: "1, 3" },
        { letter: "E", text: "2, 1" }
      ],
      correct: ["A"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Значение a = 1 встречается в таблице дважды, значит группа «1» содержит 2 строки → результат «1, 2» (A). COUNT(*) считает строки внутри каждой группы, а не общее число строк таблицы (это было бы 4)."
    },
    {
      id: "v6-db-18", variant: 6, subject: "db", number: 18, multi: true, topic: "SQL · множества",
      question: "Чем UNION отличается от UNION ALL?",
      options: [
        { letter: "A", text: "UNION убирает дубликаты, а UNION ALL оставляет их" },
        { letter: "B", text: "это полные синонимы, разницы нет" },
        { letter: "C", text: "UNION ALL всегда сортирует итоговый результат по возрастанию" },
        { letter: "D", text: "UNION работает только с одной таблицей" },
        { letter: "E", text: "UNION ALL убирает строки со значением NULL" }
      ],
      correct: ["A"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "UNION объединяет результаты и удаляет повторяющиеся строки (что требует дополнительной работы), а UNION ALL просто склеивает всё как есть, с дубликатами (A). Поэтому UNION ALL обычно быстрее, если дубликаты не мешают."
    },
    {
      id: "v6-db-19", variant: 6, subject: "db", number: 19, multi: true, topic: "Индексы",
      question: "Отметьте верные утверждения об индексах в базе данных.",
      options: [
        { letter: "A", text: "ускоряют поиск и выборку по столбцу" },
        { letter: "B", text: "замедляют вставку и обновление данных" },
        { letter: "C", text: "уменьшают объём, занимаемый таблицей" },
        { letter: "D", text: "кластерный индекс у таблицы может быть только один" },
        { letter: "E", text: "любой индекс всегда гарантирует уникальность" }
      ],
      correct: ["A", "B", "D"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Индексы ускоряют чтение (A), но замедляют запись, ведь их нужно поддерживать (B), и занимают дополнительную память, а не экономят её (C — неверно). Кластерный индекс задаёт физический порядок строк, поэтому он один на таблицу (D). Уникальность гарантирует лишь UNIQUE-индекс, а не любой (E — неверно)."
    },
    {
      id: "v6-db-20", variant: 6, subject: "db", number: 20, multi: true, topic: "Транзакции",
      question: "Команда ROLLBACK в транзакции",
      options: [
        { letter: "A", text: "окончательно фиксирует все изменения" },
        { letter: "B", text: "отменяет изменения текущей транзакции" },
        { letter: "C", text: "создаёт промежуточную точку сохранения" },
        { letter: "D", text: "начинает новую транзакцию" },
        { letter: "E", text: "полностью блокирует таблицу для всех остальных" }
      ],
      correct: ["B"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "ROLLBACK отменяет все изменения, сделанные в текущей транзакции, возвращая базу к состоянию до её начала (B). Окончательно сохраняет изменения COMMIT (A), а промежуточную точку задаёт SAVEPOINT (C)."
    }
  ]
};
