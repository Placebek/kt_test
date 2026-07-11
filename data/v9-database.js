window.QUIZ_DATA = window.QUIZ_DATA || {};

/* Вариант 9 · Базы данных (папка questions/вариант-9/database) — реальные вопросы
   с пробного тестирования. 20 вопросов, множественный выбор A–H (не более трёх
   правильных ответов), до 2 баллов за вопрос (максимум 40). Ключ выведен по
   results/вариант-9/database/results.txt: 2 = точное совпадение множества,
   1 = верных выбрано не меньше, чем неверных (и хотя бы один верный), иначе 0.
   Если пользователь выбрал не всё точное множество — недостающие буквы выведены
   самостоятельно (keyConfidence "derived") на основе теории баз данных. */

window.QUIZ_DATA["v9-db"] = {
  key: "v9-db", variant: 9, subject: "db", lang: "ru",
  title: "Вариант 9 · Базы данных",
  questions: [
    {
      id: "v9-db-1", variant: 9, subject: "db", number: 1, multi: true, topic: "СУБД · окружение",
      question: "Среда СУБД состоит",
      options: [
        { letter: "A", text: "только из аппаратного обеспечения (компьютеров) и пользователей" },
        { letter: "B", text: "только из аппаратного обеспечения (компьютеров)" },
        { letter: "C", text: "только из программного обеспечения" },
        { letter: "D", text: "только из пользователей данных" },
        { letter: "E", text: "из аппаратного обеспечения (компьютеров), данных, процедур пользователей" },
        { letter: "F", text: "пользователей и администратора" },
        { letter: "G", text: "только из моделей мета данных" },
        { letter: "H", text: "только из моделей и данных" }
      ],
      correct: ["E"], userAnswer: ["E", "F"], officialResult: 1, keyConfidence: "derived",
      explanation: "Классически среда СУБД включает пять компонентов: аппаратное обеспечение, программное обеспечение, данные, процедуры и людей (пользователей + администратора). Все варианты кроме E построены на слове «только» и потому ложны из-за излишнего сужения. Вариант E — единственное неограничительное перечисление (аппаратное обеспечение, данные, процедуры пользователей), поэтому это ближайший верный ответ. Вариант F («пользователи и администратор») тоже сужает состав среды только до людей, упуская аппаратное обеспечение, данные и процедуры — поэтому он неверен, хотя пользователь его и выбрал."
    },
    {
      id: "v9-db-2", variant: 9, subject: "db", number: 2, multi: true, topic: "Реляционная алгебра",
      question: "Реляционные операции сравнения",
      options: [
        { letter: "A", text: "⊆" }, { letter: "B", text: "<=" }, { letter: "C", text: "⊇" },
        { letter: "D", text: "<>" }, { letter: "E", text: ">=" }, { letter: "F", text: "⊂" },
        { letter: "G", text: ">" }, { letter: "H", text: "<" }
      ],
      correct: ["A", "C", "F"], userAnswer: ["B", "D", "E"], officialResult: 0, keyConfidence: "derived",
      explanation: "Речь о сравнении отношений как множеств кортежей (реляционная алгебра), а не о поэлементном сравнении значений в SQL. Операции ⊆ (включение), ⊇ (обратное включение) и ⊂ (строгое включение) — это теоретико-множественные операции сравнения ДВУХ ОТНОШЕНИЙ. Пользователь выбрал обычные скалярные операторы сравнения значений (<=, <>, >=) — они применяются к отдельным значениям атрибутов, а не к отношениям целиком, поэтому не подходят под формулировку вопроса и весь выбор оказался неверным (результат 0)."
    },
    {
      id: "v9-db-3", variant: 9, subject: "db", number: 3, multi: true, topic: "Проектирование БД",
      question: "Типы работы разработчика логической базы данных",
      options: [
        { letter: "A", text: "абстрагированное и сетевое" }, { letter: "B", text: "системный и сетевое проектирование" },
        { letter: "C", text: "логическое и эффективное проектирование" }, { letter: "D", text: "концептуальное и логическое проектирование" },
        { letter: "E", text: "концептуальное и сетевое проектирование" }, { letter: "F", text: "логическое и сетевое" },
        { letter: "G", text: "реляционное и концептуальное проектирование" }
      ],
      correct: ["D"], userAnswer: ["D"], officialResult: 2, keyConfidence: "official",
      explanation: "В классической схеме проектирования БД (Elmasri/Navathe) разработчик логической базы данных отвечает за концептуальное и логическое проектирование (в отличие от разработчика физической БД, который занимается физическим проектированием). Верный ответ D."
    },
    {
      id: "v9-db-4", variant: 9, subject: "db", number: 4, multi: true, topic: "Реляционная модель",
      question: "Количество атрибутов в таблице называется",
      options: [
        { letter: "A", text: "кардинальность отношения" }, { letter: "B", text: "n-мерность отношения" },
        { letter: "C", text: "ранг отношения" }, { letter: "D", text: "сила отношения" },
        { letter: "E", text: "мощность отношения" }, { letter: "F", text: "степень отношения" }
      ],
      correct: ["F"], userAnswer: ["F"], officialResult: 2, keyConfidence: "official",
      explanation: "Число атрибутов (столбцов) отношения — это степень отношения (degree); количество кортежей (строк) — кардинальность (cardinality). Верный ответ F."
    },
    {
      id: "v9-db-5", variant: 9, subject: "db", number: 5, multi: true, topic: "Ключи",
      question: "Ключ, который является первичным в другой таблице, но в текущей таблице служит вспомогательным ключом для связи",
      options: [
        { letter: "A", text: "естественный ключ" }, { letter: "B", text: "вторичный ключ" },
        { letter: "C", text: "суррогатный ключ" }, { letter: "D", text: "первичный ключ" },
        { letter: "E", text: "простой ключ" }, { letter: "F", text: "внешний ключ" },
        { letter: "G", text: "составной ключ" }, { letter: "H", text: "искусственный ключ" }
      ],
      correct: ["F"], userAnswer: ["F"], officialResult: 1, keyConfidence: "derived", disputed: true,
      disputedNote: "Описание в вопросе — это точное учебное определение внешнего ключа (foreign key), и F — единственный однозначно подходящий вариант среди восьми. Тем не менее система засчитала выбор только F как частичный (1 из 2 баллов), что означает: ожидался ещё один «верный» вариант, который не поддаётся однозначному определению по имеющимся опциям (ни один из оставшихся терминов — вторичный, составной, суррогатный, искусственный ключ — не описывает эту же роль). Похоже на неточность официального ключа; ответ F в любом случае academически верен.",
      explanation: "Ключ, который в своей «родной» таблице является первичным, а в текущей таблице используется только для связи (ссылки) с той записью — это классическое определение внешнего ключа (foreign key). Верный ответ F."
    },
    {
      id: "v9-db-6", variant: 9, subject: "db", number: 6, multi: true, topic: "SQL · агрегаты",
      question: "Запрос, который выбирает сумму всех уникальных значений столбца в таблице",
      options: [
        { letter: "A", text: "select sum(distinct column) from table;" },
        { letter: "B", text: "select sum(column) from table;" },
        { letter: "C", text: "select unique sum(column) from table;" },
        { letter: "D", text: "select mean(column) from table;" },
        { letter: "E", text: "select sum(column) from table where sum(column) is distinct;" },
        { letter: "F", text: "select sum(column) from table group by column;" },
        { letter: "G", text: "select column, sum(column) from table;" }
      ],
      correct: ["A"], userAnswer: ["A", "C"], officialResult: 1, keyConfidence: "derived",
      explanation: "Стандартный SQL-синтаксис для суммы уникальных (различающихся) значений столбца — SUM(DISTINCT column), то есть вариант A. Вариант C — «select unique sum(column)» — не является корректным SQL-синтаксисом: ключевое слово UNIQUE перед агрегатной функцией так не используется, поэтому этот вариант неверен, несмотря на внешнее сходство формулировки."
    },
    {
      id: "v9-db-7", variant: 9, subject: "db", number: 7, multi: true, topic: "SQL · LIKE / INSTR",
      question: "Запрос, который выбирает поля, где column1 содержит ,букву 'a' или 'e'",
      options: [
        { letter: "A", text: "select * from table where column1 like '%a' and column1 like '%e'" },
        { letter: "B", text: "select * from table where column1 consist of('a','e')" },
        { letter: "C", text: "select * from table where column1 like '%a%' or column1 like '%e%'" },
        { letter: "D", text: "select * from table where instr(column1,'a')>0 or instr(column1,'e')>0" },
        { letter: "E", text: "select * from table where instr(column1,'a')>0 and instr(column1,'e')>0" },
        { letter: "F", text: "select * from table where column1 like '%a%' and column1 like '%e%'" },
        { letter: "G", text: "select * from table where column1 like 'a' and column1 like 'e'" },
        { letter: "H", text: "select * from table where instr(column1,'a')=1 or instr(column1,'e')=1" }
      ],
      correct: ["C", "D"], userAnswer: ["C", "D", "H"], officialResult: 1, keyConfidence: "derived",
      explanation: "«Содержит букву a ИЛИ e» означает: символ встречается в любом месте строки. C (LIKE '%a%' OR LIKE '%e%') и D (INSTR(...)>0 OR INSTR(...)>0, то есть позиция найдена где угодно) — оба корректно это выражают через OR. Вариант H использует instr(...)=1, что означает «буква стоит СТРОГО ПЕРВОЙ» — это гораздо более узкое условие (проверка префикса, а не наличия буквы где угодно), поэтому H неверен."
    },
    {
      id: "v9-db-8", variant: 9, subject: "db", number: 8, multi: true, topic: "SQL · диапазоны",
      question: "Запрос, который выбирает поля, где column1 содержит значения от 1 до 3 включительно",
      options: [
        { letter: "A", text: "select * from table where column1 =1 and 3" },
        { letter: "B", text: "select * from table where column1 between 1 and 3" },
        { letter: "C", text: "select * from table where column1>1 and column1<3" },
        { letter: "D", text: "select * from table where column1 in (1,2,3)" },
        { letter: "E", text: "select * from table where column1> 1 or column1 < 3" },
        { letter: "F", text: "select * from table where column1=1 and column1=2 or column1=3" },
        { letter: "G", text: "select * from table where column1=1 or column1=2 or column1=3" },
        { letter: "H", text: "select * from table where column1=1 and column1=2 and column1=3" }
      ],
      correct: ["B", "D", "G"], userAnswer: ["D", "G"], officialResult: 1, keyConfidence: "derived",
      explanation: "Три равнозначных корректных способа выбрать значения 1, 2 и 3 включительно: BETWEEN 1 AND 3 (B), IN (1,2,3) (D) и цепочка OR-равенств (G). Пользователь выбрал только D и G, упустив равносильный вариант B (BETWEEN), поэтому балл частичный. C — строгие неравенства без учёта границ (реально даёт только «2»), E — почти всегда истинно (слишком широкое условие), F и H дают логически иные/пустые результаты из-за приоритета AND над OR или невозможного условия одновременного равенства трём числам."
    },
    {
      id: "v9-db-9", variant: 9, subject: "db", number: 9, multi: true, topic: "SQL · GROUP BY / HAVING",
      question: "Запрос, сортирующий отделы (порядок возрастания) по сумме зарплат сотрудников, работающих там, при подсчете суммы учитывались только зарплаты больше 10000 (department, salary – атрибуты таблицы table)",
      options: [
        { letter: "A", text: "select department, sum(salary) from table order by last_name desc" },
        { letter: "B", text: "select department, sum(salary) from table\ngroup by department\norder by last_name" },
        { letter: "C", text: "select department, sum(salary) from table\ngroup by department\nhaving salary>10000\norder by sum(salary)" },
        { letter: "D", text: "select sum(salary), department from table\nwhere salary>10000\ngroup by department\norder by sum(salary) asc" },
        { letter: "E", text: "select department, sum(salary) from table\nwhere salary>10000\ngroup by department\norder by sum(salary)" },
        { letter: "F", text: "select department, sum(salary) from table\ngroup by department\norder by sum(salary) desc" }
      ],
      correct: ["D", "E"], userAnswer: ["D", "E"], officialResult: 2, keyConfidence: "official",
      explanation: "Фильтрация отдельных строк по зарплате (>10000) должна идти в WHERE (до группировки), а сортировка по возрастанию суммы — ORDER BY sum(salary) [ASC по умолчанию]. Именно так устроены D и E (они эквивалентны, ASC не указан по умолчанию). Вариант C ошибочно использует HAVING salary>10000 (HAVING должен фильтровать по агрегату, а не по неагрегированному salary), A и B не фильтруют и не сортируют по сумме, F сортирует по убыванию."
    },
    {
      id: "v9-db-10", variant: 9, subject: "db", number: 10, multi: true, topic: "SQL · AVG",
      question: "Запрос, сортирующий отделы по средней арифметической заплаты в порядке возрастания (department, salary – атрибуты таблицы table)",
      options: [
        { letter: "A", text: "select department, sum(salary)/count(*) from table\ngroup by department\norder by sum(salary)/count(*) asc" },
        { letter: "B", text: "select avg (salary) as average, department from table\ngroup by department\norder by avg(salary) asc" },
        { letter: "C", text: "select department, mean (salary) from table\ngroup by department\norder by mean(salary)" },
        { letter: "D", text: "select department, avg (salary) from table\norder by avg(salary)\ngroup by department" },
        { letter: "E", text: "select department, avg (salary) from table\ngroup by department\norder by avg(salary) desc" },
        { letter: "F", text: "select department, avg (salary) from table\ngroup by department\norder by avg(salary)" }
      ],
      correct: ["A", "B", "F"], userAnswer: ["B", "F"], officialResult: 1, keyConfidence: "derived",
      explanation: "Среднее арифметическое можно выразить и через AVG(salary), и через SUM(salary)/COUNT(*) — это математически одно и то же, а порядок по умолчанию — ASC. Поэтому A, B и F равнозначно верны. Пользователь выбрал B и F, но упустил равносильный вариант A, из-за чего балл частичный. C использует несуществующую в стандартном SQL функцию mean(), D нарушает порядок предложений (GROUP BY обязан идти раньше ORDER BY) — синтаксическая ошибка, E сортирует по убыванию (DESC), а не по возрастанию."
    },
    {
      id: "v9-db-11", variant: 9, subject: "db", number: 11, multi: true, topic: "SQL · JOIN",
      question: "Объединение двух таблиц, возвращающих только совпадающие строки из двух таблиц по сопоставленному условию",
      options: [
        { letter: "A", text: "cross join" }, { letter: "B", text: "left outer join" },
        { letter: "C", text: "right outer join" }, { letter: "D", text: "outer join" },
        { letter: "E", text: "full outer join" }, { letter: "F", text: "inner join" }
      ],
      correct: ["F"], userAnswer: ["F"], officialResult: 2, keyConfidence: "official",
      explanation: "INNER JOIN возвращает только те строки, для которых условие соединения выполняется в обеих таблицах — то есть только совпадающие строки. Верный ответ F."
    },
    {
      id: "v9-db-12", variant: 9, subject: "db", number: 12, multi: true, topic: "Распределённые БД",
      question: "Цели управления параллельным выполнением в распределенной среде",
      options: [
        { letter: "A", text: "освобождение всех установленных блокировок" },
        { letter: "B", text: "отправить всем участникам команду GLOBAL_ABORT" },
        { letter: "C", text: "устойчивость к отказам на узле и в линиях связи" },
        { letter: "D", text: "поместить в системный журнал запись commit и обеспечить ее принудительную запись из буфера" },
        { letter: "E", text: "направить на узлы сообщение о принятом глобальном решении" },
        { letter: "F", text: "отсутствие дополнительных ограничений на структуру" }
      ],
      correct: ["C", "F"], userAnswer: ["C"], officialResult: 1, keyConfidence: "derived",
      explanation: "В теории распределённых БД (Ozsu/Valduriez) среди желаемых свойств протоколов управления параллельным выполнением/фиксации называют устойчивость к отказам узлов и линий связи (C) и отсутствие дополнительных ограничений на структуру подтранзакций (F). Пользователь выбрал только C, упустив F, поэтому балл частичный. Остальные варианты описывают конкретные технические шаги протоколов (2PC и т.п.), а не общие цели управления."
    },
    {
      id: "v9-db-13", variant: 9, subject: "db", number: 13, multi: true, topic: "SQL · подразделы",
      question: "Подраздел SQL, который используется для добавления данных в базу данных, для изменения существующих данных в базе данных или удаления данных из базы данных",
      options: [
        { letter: "A", text: "data manipulation language" }, { letter: "B", text: "data definition language" },
        { letter: "C", text: "data altering language" }, { letter: "D", text: "data control language" },
        { letter: "E", text: "transaction control language" }, { letter: "F", text: "mdx" },
        { letter: "G", text: "query language" }, { letter: "H", text: "query by example" }
      ],
      correct: ["A"], userAnswer: ["A"], officialResult: 2, keyConfidence: "official",
      explanation: "Добавление (INSERT), изменение (UPDATE) и удаление (DELETE) данных — это операции DML (Data Manipulation Language). Верный ответ A."
    },
    {
      id: "v9-db-14", variant: 9, subject: "db", number: 14, multi: true, topic: "Транзакции",
      question: "Оператор, который завершает текущую транзакцию, отбрасывая все ожидающие изменения данных до предыдущих постоянных данных",
      options: [
        { letter: "A", text: "rollback to savepoint A" }, { letter: "B", text: "rollback" },
        { letter: "C", text: "checkpoint" }, { letter: "D", text: "commit A" },
        { letter: "E", text: "commit" }, { letter: "F", text: "savepoint A" }
      ],
      correct: ["B"], userAnswer: ["A"], officialResult: 0, keyConfidence: "derived",
      explanation: "Обычный ROLLBACK откатывает ВСЕ ожидающие изменения текущей транзакции назад к последним зафиксированным (постоянным) данным. Вариант «rollback to savepoint A» откатывает изменения только до конкретной точки сохранения внутри транзакции, а не обязательно до последнего commit — это более узкая операция, не соответствующая формулировке вопроса. Верный ответ B."
    },
    {
      id: "v9-db-15", variant: 9, subject: "db", number: 15, multi: true, topic: "SQL · подзапросы",
      question: "Запрос, который выводит название продукта, чья цена выше средней арифметической цены всех продуктов",
      options: [
        { letter: "A", text: "select price from products\nwhere price > (select avg(price) from products)" },
        { letter: "B", text: "select product_name from products\nwhere price > (select mean(price) from products)" },
        { letter: "C", text: "select product_name from products\nwhere price >avg(price)" },
        { letter: "D", text: "select product_name from products\nwhere price in (select avg(price) from products)" },
        { letter: "E", text: "select product_name from products\nwhere price > (select sum(price)/count(*) from products)" },
        { letter: "F", text: "select product_name from products\nwhere price > (select median(price) from products)" },
        { letter: "G", text: "select product_name from products\nwhere price > (select avg(price) from products)" }
      ],
      correct: ["E", "G"], userAnswer: ["C", "E", "G"], officialResult: 1, keyConfidence: "derived",
      explanation: "E и G — корректный и равносильный способ сравнить цену со средним арифметическим (AVG = SUM/COUNT) через подзапрос. Вариант C пытается использовать агрегатную функцию avg(price) прямо в WHERE без подзапроса — это синтаксически некорректно в стандартном SQL, поэтому C неверен, несмотря на то что пользователь его выбрал вместе с правильными E и G."
    },
    {
      id: "v9-db-16", variant: 9, subject: "db", number: 16, multi: true, topic: "SQL · DESCRIBE",
      question: "Оператор DESCRIBE",
      options: [
        { letter: "A", text: "передает программе описание столбцов результирующей таблицы" },
        { letter: "B", text: "предоставляет программе описание входных параметров" },
        { letter: "C", text: "освобождает память от дополнительной информации" },
        { letter: "D", text: "указывает на этап обработки данных" },
        { letter: "E", text: "отправляет дату и время транзакций" },
        { letter: "F", text: "отправяет курсор на дополнительную информацию" },
        { letter: "G", text: "выводит адрес ошибки" }
      ],
      correct: ["A", "B"], userAnswer: ["A", "B"], officialResult: 2, keyConfidence: "official",
      explanation: "В динамическом SQL оператор DESCRIBE возвращает программе описание набора столбцов результата подготовленного запроса, а также описание входных параметров-заполнителей. Верные ответы A и B."
    },
    {
      id: "v9-db-17", variant: 9, subject: "db", number: 17, multi: true, topic: "SQL · подзапросы",
      question: "Операторы сравнения однострочных подзапросов",
      options: [
        { letter: "A", text: ">" }, { letter: "B", text: "all" }, { letter: "C", text: "<" },
        { letter: "D", text: "in" }, { letter: "E", text: "=" }, { letter: "F", text: "some" },
        { letter: "G", text: "any" }
      ],
      correct: ["A", "C", "E"], userAnswer: ["A", "C", "E"], officialResult: 2, keyConfidence: "official",
      explanation: "Однострочные (скалярные) подзапросы сравниваются обычными операторами >, < и = — они рассчитаны ровно на одно возвращаемое значение. ALL, ANY/SOME и IN, напротив, предназначены для много­строчных подзапросов (несколько строк результата). Верные ответы A, C, E."
    },
    {
      id: "v9-db-18", variant: 9, subject: "db", number: 18, multi: true, topic: "Архитектура БД",
      question: "Файловый сервер",
      options: [
        { letter: "A", text: "клиент принимает от пользователя запрос" },
        { letter: "B", text: "клиент управляет пользовательским интерфейсом" },
        { letter: "C", text: "большой объем сетевого трафика" },
        { letter: "D", text: "на каждой рабочей станции должна находиться полная копия СУБД" },
        { letter: "E", text: "управление параллельной работой" },
        { letter: "F", text: "клиент управляет пользовательской логикой приложения" }
      ],
      correct: ["C", "D", "E"], userAnswer: ["C", "D"], officialResult: 1, keyConfidence: "derived",
      explanation: "Классические недостатки файл-серверной архитектуры (Connolly/Begg): большой объём сетевого трафика, так как обработка идёт на рабочей станции (C); необходимость полной копии СУБД на каждой станции (D); а также усложнённое управление параллельным доступом, целостностью и восстановлением при нескольких независимых копиях СУБД (E). Пользователь выбрал только C и D, упустив E, поэтому балл частичный."
    },
    {
      id: "v9-db-19", variant: 9, subject: "db", number: 19, multi: true, topic: "Нормализация",
      question: "Нормализация",
      options: [
        { letter: "A", text: "включает объединение существующих таблиц в одну большую" },
        { letter: "B", text: "процесс удаления избыточных данных из таблиц для повышения эффективности хранения, целостности данных и масштабируемости" },
        { letter: "C", text: "процесс преобразования сложных структур данных в простые, стабильные структуры данных" },
        { letter: "D", text: "процесс добавления избыточных данных в таблицы для повышения эффективности хранения, целостности данных и масштабируемости" },
        { letter: "E", text: "процесс преобразования простых структур данных в сложные, стабильные структуры данных" },
        { letter: "F", text: "включает разделение существующих таблиц на несколько других, которые могут быть объединены или связаны когда выдается запрос" }
      ],
      correct: ["B", "C", "F"], userAnswer: ["B", "E", "F"], officialResult: 1, keyConfidence: "derived",
      explanation: "Нормализация устраняет избыточность данных (B), преобразует сложные/неупорядоченные структуры в простые и стабильные (C), и разбивает таблицы на несколько связанных между собой (F). Вариант E — зеркально перевёрнутая формулировка C («из простых в сложные» вместо «из сложных в простые») и потому неверен: нормализация идёт в обратную сторону. Пользователь выбрал верные B и F, но вместо C ошибочно выбрал перевёрнутый по смыслу вариант E, из-за чего балл частичный. A и D описывают, по сути, денормализацию."
    },
    {
      id: "v9-db-20", variant: 9, subject: "db", number: 20, multi: true, topic: "Нормализация · аномалии",
      question: "Аномалии, которые возможны при денормализации",
      options: [
        { letter: "A", text: "аномалии создания" }, { letter: "B", text: "аномалии объединения" },
        { letter: "C", text: "аномалии обновления" }, { letter: "D", text: "аномалии соединения" },
        { letter: "E", text: "аномалии слияния" }, { letter: "F", text: "аномалии вставки" },
        { letter: "G", text: "аномалии удаления" }, { letter: "H", text: "аномалии поиска" }
      ],
      correct: ["C", "F", "G"], userAnswer: ["B", "E", "H"], officialResult: 0, keyConfidence: "derived",
      explanation: "Классическая тройка аномалий денормализованных (не полностью нормализованных) таблиц — это аномалии вставки (F), обновления (C) и удаления (G); это базовое понятие из любого курса нормализации БД. Пользователь выбрал три несуществующих в стандартной терминологии варианта («объединения», «слияния», «поиска»), поэтому весь ответ оказался неверным (результат 0)."
    }
  ]
};
