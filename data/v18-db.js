window.QUIZ_DATA = window.QUIZ_DATA || {};
/* Вариант 18 · Базы данных (тренировочный, авторский набор — не с реального
   экзамена), построен по тем же принципам, что и исправленный вариант 17:
   20 вопросов, множественный выбор A-H (не более 3 верных вариантов) там,
   где это естественно, и одиночный выбор A-E в остальных вопросах; варианты
   ответов выровнены по длине и стилю. 4 вопроса (№8, №13, №17, №20) —
   трассировка: мини-таблицы + SQL-запрос, нужно определить результат. Темы
   не повторяют вариант 17 (там — ACID/JOIN/2-3НФ/индексы/изоляция/VIEW/
   NoSQL/ограничения/блокировки/типы данных, здесь — оставшаяся часть ACID,
   1НФ/BCNF, составные ключи, фантомное чтение, блокировки optimistic/
   pessimistic, репликация, шардинг, DDL/DCL, self-join, подзапросы,
   UNION/UNION ALL, первичный/уникальный/потенциальный/суперключ, схема БД). */
window.QUIZ_DATA["v18-db"] = {
  key: "v18-db", variant: 18, subject: "db", lang: "ru",
  title: "Вариант 18 · Базы данных (тренировочный)",
  questions: [
    {
      id: "v18-db-1", variant: 18, subject: "db", number: 1, multi: true, topic: "Ключи",
      question: "Отметьте верные утверждения о ВНЕШНЕМ ключе (FOREIGN KEY).",
      options: [
        { letter: "A", text: "может содержать NULL, если связь необязательна" },
        { letter: "B", text: "ссылается на первичный/уникальный ключ другой таблицы" },
        { letter: "C", text: "обязан быть уникальным в своей таблице" },
        { letter: "D", text: "может ссылаться на ту же таблицу (рекурсивно)" },
        { letter: "E", text: "сам обязан быть первичным ключом" },
        { letter: "F", text: "автоматически создаёт новую таблицу" },
        { letter: "G", text: "запрещает удаление любых строк" },
        { letter: "H", text: "хранит копию всех данных родительской таблицы" }
      ],
      correct: ["A", "B", "D"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Внешний ключ может быть NULL при необязательной связи (A), ссылается на первичный/уникальный ключ родительской таблицы (B) и вполне может указывать на ту же таблицу — например, «начальник» в таблице сотрудников (D). Уникальность в своей таблице (C) и роль первичного ключа (E) для него не требуются; он не создаёт таблиц (F), не запрещает удаление сам по себе (G) и не хранит копию данных (H)."
    },
    {
      id: "v18-db-2", variant: 18, subject: "db", number: 2, multi: false, topic: "Нормализация: 1НФ",
      question: "Первая нормальная форма (1НФ) требует, чтобы",
      options: [
        { letter: "A", text: "все значения атрибутов были атомарны (неделимы)" },
        { letter: "B", text: "не было частичных зависимостей" },
        { letter: "C", text: "не было транзитивных зависимостей" },
        { letter: "D", text: "каждый детерминант был потенциальным ключом" },
        { letter: "E", text: "не было многозначных зависимостей" }
      ],
      correct: ["A"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "1НФ требует атомарности значений: в каждой ячейке — одно неделимое значение, без списков и повторяющихся групп (A). Отсутствие частичных зависимостей — требование 2НФ (B), транзитивных — 3НФ (C), «детерминант — потенциальный ключ» — BCNF (D), многозначных зависимостей — 4НФ (E)."
    },
    {
      id: "v18-db-3", variant: 18, subject: "db", number: 3, multi: false, topic: "Нормализация: BCNF",
      question: "Нормальная форма Бойса — Кодда (BCNF) требует, чтобы",
      options: [
        { letter: "A", text: "все атрибуты были атомарны" },
        { letter: "B", text: "каждый детерминант функциональной зависимости был потенциальным ключом" },
        { letter: "C", text: "не было составных ключей" },
        { letter: "D", text: "таблица содержала не более 5 столбцов" },
        { letter: "E", text: "все внешние ключи были NOT NULL" }
      ],
      correct: ["B"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "BCNF — усиленная версия 3НФ: для каждой функциональной зависимости X→Y детерминант X обязан быть потенциальным ключом (B). Остальные пункты (A, C, D, E) не имеют отношения к определению BCNF."
    },
    {
      id: "v18-db-4", variant: 18, subject: "db", number: 4, multi: false, topic: "Ключи",
      question: "Составной ключ (composite key) — это",
      options: [
        { letter: "A", text: "ключ, ссылающийся сам на себя" },
        { letter: "B", text: "любой уникальный индекс таблицы" },
        { letter: "C", text: "первичный ключ из двух и более столбцов" },
        { letter: "D", text: "ключ, состоящий только из чисел" },
        { letter: "E", text: "ключ, автоматически генерируемый СУБД" }
      ],
      correct: ["C"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Составной ключ — первичный ключ, образованный сочетанием двух и более столбцов, которые вместе однозначно определяют строку (C)."
    },
    {
      id: "v18-db-5", variant: 18, subject: "db", number: 5, multi: false, topic: "Транзакции: изоляция",
      question: "Фантомное чтение (phantom read) возникает, когда",
      options: [
        { letter: "A", text: "читаются незакоммиченные данные другой транзакции" },
        { letter: "B", text: "повторное чтение одной строки даёт другое значение" },
        { letter: "C", text: "две транзакции одновременно меняют одну строку" },
        { letter: "D", text: "повторный запрос возвращает другой набор строк из-за вставки/удаления" },
        { letter: "E", text: "СУБД теряет данные при сбое питания" }
      ],
      correct: ["D"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Фантомное чтение — это D: повторное выполнение того же запроса по условию возвращает другой набор строк, потому что другая транзакция успела вставить или удалить подходящие под условие строки. «Грязное чтение» — это A, «неповторяющееся чтение» — это B."
    },
    {
      id: "v18-db-6", variant: 18, subject: "db", number: 6, multi: false, topic: "Блокировки",
      question: "Чем оптимистическая блокировка (optimistic locking) отличается от пессимистической?",
      options: [
        { letter: "A", text: "оптимистическая блокирует строку сразу при чтении" },
        { letter: "B", text: "пессимистическая вообще не проверяет конфликты" },
        { letter: "C", text: "оптимистическая работает только с NoSQL-базами" },
        { letter: "D", text: "пессимистическая быстрее в любых условиях" },
        { letter: "E", text: "оптимистическая не блокирует заранее, проверяет конфликт при сохранении" }
      ],
      correct: ["E"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Оптимистическая блокировка предполагает, что конфликты редки: строка не блокируется заранее, а при сохранении проверяется, не изменил ли её кто-то ещё за это время (E). Пессимистическая блокировка, наоборот, блокирует строку сразу при чтении, чтобы никто другой не смог её изменить."
    },
    {
      id: "v18-db-7", variant: 18, subject: "db", number: 7, multi: true, topic: "Репликация",
      question: "Отметьте верные утверждения о репликации базы данных.",
      options: [
        { letter: "A", text: "создаёт и поддерживает копии данных на других серверах" },
        { letter: "B", text: "повышает отказоустойчивость и доступность для чтения" },
        { letter: "C", text: "полностью заменяет резервное копирование" },
        { letter: "D", text: "реплики всегда идентичны без малейшей задержки" },
        { letter: "E", text: "может быть master-slave (ведущий-ведомый)" },
        { letter: "F", text: "применяется только в NoSQL-системах" },
        { letter: "G", text: "требует обязательного шардинга" },
        { letter: "H", text: "отключает запись на все реплики одновременно" }
      ],
      correct: ["A", "B", "E"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Репликация создаёт и поддерживает копии данных на нескольких серверах (A), повышая отказоустойчивость и разгружая чтение (B); распространённая схема — master-slave, где запись идёт на ведущий сервер, а чтение можно распределять по ведомым (E). Она не заменяет резервное копирование (C, реплика с ошибкой размножит эту же ошибку), обычно имеет задержку синхронизации (D), не привязана только к NoSQL (F), не требует шардинга (G) и не отключает запись (H)."
    },
    {
      id: "v18-db-8", variant: 18, subject: "db", number: 8, multi: true, topic: "Трассировка: LEFT JOIN",
      question: "Таблица Customers: (1, Aigerim), (2, Bek), (3, Dana). Таблица Orders: (customer_id=1, item=Book), (customer_id=1, item=Pen). Что вернёт запрос: SELECT c.name, o.item FROM Customers c LEFT JOIN Orders o ON c.id = o.customer_id;",
      options: [
        { letter: "A", text: "только Aigerim|Book, Aigerim|Pen" },
        { letter: "B", text: "только Bek|NULL, Dana|NULL" },
        { letter: "C", text: "все три покупателя без товаров" },
        { letter: "D", text: "Aigerim|Book, Aigerim|Pen, Bek|NULL, Dana|NULL" },
        { letter: "E", text: "только Aigerim|Book" },
        { letter: "F", text: "пустой результат" },
        { letter: "G", text: "Aigerim|Book, Bek|NULL" },
        { letter: "H", text: "все покупатели с одним и тем же товаром" }
      ],
      correct: ["D"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "LEFT JOIN сохраняет ВСЕ строки левой таблицы (Customers), даже если для них нет совпадения справа. У Aigerim два заказа — две строки (Book, Pen); у Bek и Dana заказов нет, поэтому для них item = NULL, но сами покупатели в результат всё равно попадают (D)."
    },
    {
      id: "v18-db-9", variant: 18, subject: "db", number: 9, multi: false, topic: "SQL: категории команд",
      question: "К какой группе команд SQL относится оператор CREATE TABLE?",
      options: [
        { letter: "A", text: "DDL (Data Definition Language)" },
        { letter: "B", text: "DML (Data Manipulation Language)" },
        { letter: "C", text: "DCL (Data Control Language)" },
        { letter: "D", text: "TCL (Transaction Control Language)" },
        { letter: "E", text: "DQL (Data Query Language)" }
      ],
      correct: ["A"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "CREATE, ALTER, DROP — команды определения структуры данных (DDL, A). DML отвечает за изменение данных (INSERT/UPDATE/DELETE), DCL — за права доступа (GRANT/REVOKE), TCL — за транзакции (COMMIT/ROLLBACK)."
    },
    {
      id: "v18-db-10", variant: 18, subject: "db", number: 10, multi: false, topic: "SQL: категории команд",
      question: "К какой группе команд SQL относится оператор GRANT?",
      options: [
        { letter: "A", text: "DML" },
        { letter: "B", text: "DCL" },
        { letter: "C", text: "DDL" },
        { letter: "D", text: "TCL" },
        { letter: "E", text: "DQL" }
      ],
      correct: ["B"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "GRANT и REVOKE управляют правами доступа пользователей — это команды DCL, Data Control Language (B)."
    },
    {
      id: "v18-db-11", variant: 18, subject: "db", number: 11, multi: false, topic: "SQL: JOIN",
      question: "Self-join (соединение таблицы самой с собой) обычно применяется для",
      options: [
        { letter: "A", text: "удаления дубликатов из таблицы" },
        { letter: "B", text: "объединения двух разных баз данных" },
        { letter: "C", text: "увеличения производительности запроса" },
        { letter: "D", text: "поиска связей между строками одной таблицы (напр. «начальник-подчинённый»)" },
        { letter: "E", text: "создания резервной копии таблицы" }
      ],
      correct: ["D"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Self-join соединяет таблицу с самой собой (под разными псевдонимами), что удобно для поиска связей между строками одной и той же таблицы — классический пример: сотрудник и его непосредственный начальник, хранящиеся в одной таблице Employees (D)."
    },
    {
      id: "v18-db-12", variant: 18, subject: "db", number: 12, multi: false, topic: "SQL: подзапросы",
      question: "Коррелированный подзапрос (correlated subquery) — это",
      options: [
        { letter: "A", text: "выполняется только один раз независимо от внешнего запроса" },
        { letter: "B", text: "не может содержать условие WHERE" },
        { letter: "C", text: "всегда возвращает только NULL" },
        { letter: "D", text: "запрещён стандартом SQL" },
        { letter: "E", text: "использует значения из внешнего запроса на каждой строке" }
      ],
      correct: ["E"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Коррелированный подзапрос ссылается на столбцы внешнего запроса и поэтому выполняется заново для каждой строки внешнего запроса (E) — в отличие от обычного (некоррелированного) подзапроса, который выполняется один раз."
    },
    {
      id: "v18-db-13", variant: 18, subject: "db", number: 13, multi: true, topic: "Трассировка: GROUP BY/HAVING",
      question: "Таблица Reviews(product, rating): (Phone,5), (Phone,4), (Laptop,3), (Phone,5), (Laptop,5). Что вернёт запрос: SELECT product, COUNT(*) FROM Reviews GROUP BY product HAVING COUNT(*) > 2;",
      options: [
        { letter: "A", text: "только Laptop, 2" },
        { letter: "B", text: "только Phone, 3" },
        { letter: "C", text: "Phone,3 и Laptop,2" },
        { letter: "D", text: "только Phone, 2" },
        { letter: "E", text: "никто" },
        { letter: "F", text: "Phone, 2" },
        { letter: "G", text: "Laptop, 3" },
        { letter: "H", text: "оба продукта по 3" }
      ],
      correct: ["B"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Число отзывов: Phone — 3 (5,4,5), Laptop — 2 (3,5). Условие HAVING COUNT(*) > 2 проходит только у Phone (3 > 2); у Laptop (2 > 2) — ложно. В результате только Phone, 3 (B)."
    },
    {
      id: "v18-db-14", variant: 18, subject: "db", number: 14, multi: false, topic: "Ключи",
      question: "Первичный ключ (PRIMARY KEY) и уникальный ключ (UNIQUE) — в чём разница?",
      options: [
        { letter: "A", text: "UNIQUE обязательно составной, а PRIMARY KEY — нет" },
        { letter: "B", text: "в таблице может быть только один PRIMARY KEY, но несколько UNIQUE" },
        { letter: "C", text: "PRIMARY KEY может быть NULL, а UNIQUE — нет" },
        { letter: "D", text: "UNIQUE всегда быстрее в запросах" },
        { letter: "E", text: "между ними нет никакой разницы" }
      ],
      correct: ["B"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "В таблице допускается только один PRIMARY KEY, но может быть несколько столбцов/наборов с ограничением UNIQUE (B). PRIMARY KEY, в отличие от UNIQUE, не допускает NULL (C — сформулировано наоборот и потому неверно)."
    },
    {
      id: "v18-db-15", variant: 18, subject: "db", number: 15, multi: false, topic: "Ключи",
      question: "Потенциальный ключ (candidate key) и суперключ (superkey) — в чём разница?",
      options: [
        { letter: "A", text: "суперключ всегда состоит из одного столбца" },
        { letter: "B", text: "потенциальный ключ обязательно составной" },
        { letter: "C", text: "потенциальный ключ минимален, суперключ может содержать лишние столбцы" },
        { letter: "D", text: "суперключ не может быть уникальным" },
        { letter: "E", text: "это два названия одного и того же понятия" }
      ],
      correct: ["C"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Суперключ — любой набор столбцов, однозначно определяющий строку, необязательно минимальный; потенциальный ключ — это минимальный суперключ, без единого лишнего столбца (C)."
    },
    {
      id: "v18-db-16", variant: 18, subject: "db", number: 16, multi: false, topic: "Модель данных",
      question: "Схема базы данных (schema) и экземпляр базы данных (instance) — в чём разница?",
      options: [
        { letter: "A", text: "схема — это данные, экземпляр — структура" },
        { letter: "B", text: "схема существует только в NoSQL" },
        { letter: "C", text: "экземпляр не может меняться со временем" },
        { letter: "D", text: "схема — структура (таблицы, столбцы, связи), экземпляр — фактические данные в момент времени" },
        { letter: "E", text: "это одно и то же понятие" }
      ],
      correct: ["D"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Схема описывает структуру базы данных — таблицы, столбцы, типы, связи (она относительно стабильна); экземпляр — это конкретное содержимое базы данных в конкретный момент времени, которое постоянно меняется (D)."
    },
    {
      id: "v18-db-17", variant: 18, subject: "db", number: 17, multi: true, topic: "Трассировка: подзапрос",
      question: "Таблица Departments: (1,IT), (2,HR). Таблица Employees(name, dept_id, salary): (Aika,1,200000), (Miras,2,150000), (Nurlan,1,350000). Что вернёт запрос: SELECT name FROM Employees WHERE dept_id = (SELECT id FROM Departments WHERE name='IT') AND salary > 250000;",
      options: [
        { letter: "A", text: "Aika" },
        { letter: "B", text: "Miras" },
        { letter: "C", text: "Aika и Nurlan" },
        { letter: "D", text: "все трое" },
        { letter: "E", text: "никто" },
        { letter: "F", text: "Nurlan" },
        { letter: "G", text: "Miras и Nurlan" },
        { letter: "H", text: "Aika и Miras" }
      ],
      correct: ["F"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Подзапрос возвращает id отдела IT — это 1. Далее фильтр dept_id = 1 AND salary > 250000: Aika (dept 1, 200000) не проходит по зарплате; Nurlan (dept 1, 350000) проходит; Miras (dept 2) отсеивается ещё на первом условии. Итог — только Nurlan (F)."
    },
    {
      id: "v18-db-18", variant: 18, subject: "db", number: 18, multi: false, topic: "SQL: UNION",
      question: "Чем UNION отличается от UNION ALL?",
      options: [
        { letter: "A", text: "UNION убирает дубликаты, UNION ALL — нет" },
        { letter: "B", text: "UNION ALL убирает дубликаты, а UNION — нет" },
        { letter: "C", text: "UNION работает только с одной таблицей" },
        { letter: "D", text: "UNION ALL нельзя использовать с ORDER BY" },
        { letter: "E", text: "между ними нет никакой разницы" }
      ],
      correct: ["A"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "UNION объединяет результаты двух запросов и убирает повторяющиеся строки; UNION ALL объединяет без удаления дубликатов и обычно работает быстрее, так как не тратит время на поиск повторов (A)."
    },
    {
      id: "v18-db-19", variant: 18, subject: "db", number: 19, multi: false, topic: "Проектирование БД",
      question: "Шардинг (sharding) базы данных — это",
      options: [
        { letter: "A", text: "разбиение данных по нескольким серверам (горизонтальное масштабирование)" },
        { letter: "B", text: "создание резервной копии данных" },
        { letter: "C", text: "объединение нескольких таблиц в одну" },
        { letter: "D", text: "удаление устаревших записей" },
        { letter: "E", text: "построение индекса по первичному ключу" }
      ],
      correct: ["A"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "Шардинг разбивает данные одной логической таблицы на части (шарды), распределённые по разным серверам, что позволяет горизонтально масштабировать нагрузку (A)."
    },
    {
      id: "v18-db-20", variant: 18, subject: "db", number: 20, multi: true, topic: "Трассировка: UNION",
      question: "Таблица A(x): 1, 2, 3. Таблица B(x): 2, 3, 4. Сколько строк вернёт запрос: SELECT x FROM A UNION SELECT x FROM B;",
      options: [
        { letter: "A", text: "6" },
        { letter: "B", text: "3" },
        { letter: "C", text: "2" },
        { letter: "D", text: "7" },
        { letter: "E", text: "1" },
        { letter: "F", text: "5" },
        { letter: "G", text: "4" },
        { letter: "H", text: "0" }
      ],
      correct: ["G"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "UNION (без ALL) убирает дубликаты. Объединённое множество значений: {1,2,3} ∪ {2,3,4} = {1,2,3,4} — ровно 4 уникальных значения, значит и 4 строки в результате (G). Если бы использовался UNION ALL, строк было бы 6 (3+3, без удаления повторов 2 и 3)."
    }
  ]
};
