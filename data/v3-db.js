window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["v3-db"] = {
  key: "v3-db", variant: 3, subject: "db", lang: "kz",
  title: "Вариант 3 · Базы данных (каз.)",
  questions: [
    {
      id: "v3-db-1", variant: 3, subject: "db", number: 1, multi: true, topic: "Модели данных",
      question: "Факультет – Кафедра – Оқытушы байланысын бейнелейтін ағаштар тізімінен тұратын деректер моделі",
      options: [
        { letter: "A", text: "объектіге бағытталған" },
        { letter: "B", text: "иерархиялық" },
        { letter: "C", text: "кестелік" },
        { letter: "D", text: "ER" },
        { letter: "E", text: "желілік" },
        { letter: "F", text: "реляциондық" }
      ],
      correct: ["B"], userAnswer: ["B"], officialResult: 2, keyConfidence: "official",
      explanation: "Связь «Факультет–Кафедра–Преподаватель» — это дерево (одна вершина-родитель, много потомков). Модель данных, представляющая данные набором деревьев, — иерархическая (B). Сетевая (E) допускает связи «многие ко многим» (граф, а не дерево), реляционная (F) хранит данные в таблицах, ER — это модель проектирования, а не хранения."
    },
    {
      id: "v3-db-2", variant: 3, subject: "db", number: 2, multi: true, topic: "Реляционная алгебра",
      question: "Біріктіру (union) амалының нәтижесі",
      options: [
        { letter: "A", text: "екі қатынасқа да кіретін кортеждер жиыны" },
        { letter: "B", text: "бірінші және екінші қатынасқа кіретін барлық кортеждер жиыны" },
        { letter: "C", text: "бірінші қатынасқа кіретін, бірақ екіншісіне кірмейтін кортеждер жиыны" },
        { letter: "D", text: "берілген шартты қанағаттандыратын кортеждер жиыны" },
        { letter: "E", text: "берілген шартты қанағаттандырмайтын кортеждер жиыны" },
        { letter: "F", text: "кемінде бір қатынастағы барлық кортеждер жиыны" }
      ],
      correct: ["B", "F"], userAnswer: ["A", "B", "D"], officialResult: 0, keyConfidence: "derived",
      explanation: "Объединение (UNION) — все кортежи, входящие хотя бы в одно из двух отношений. Это одновременно «все кортежи первого и второго отношения» (B) и «все кортежи хотя бы в одном отношении» (F) — два равнозначных описания. A — это пересечение (INTERSECT, «в обоих»), C — разность (в первом, но не во втором), D — выборка (σ). Пользователь выбрал A и D (неверные) вместе с B — из-за неверных выборов балл 0."
    },
    {
      id: "v3-db-3", variant: 3, subject: "db", number: 3, multi: true, topic: "Реляционная алгебра",
      question: "Жиыннан элементтерді тек берілген шарт бойынша іріктеп алу амалы",
      options: [
        { letter: "A", text: "айырмашылық" },
        { letter: "B", text: "Декарт көбейтіндісі" },
        { letter: "C", text: "проекция" },
        { letter: "D", text: "INTERSECT" },
        { letter: "E", text: "таңдау" },
        { letter: "F", text: "бөлу" },
        { letter: "G", text: "қарым-қатынастарды біріктіру" },
        { letter: "H", text: "біріктіру" }
      ],
      correct: ["E"], userAnswer: ["D", "E"], officialResult: 1, keyConfidence: "derived",
      explanation: "Отбор строк по условию — это операция выборки/селекции (таңдау, σ) — E. Проекция (C) выбирает столбцы, а не строки; INTERSECT (D) — пересечение; разность (A), декартово произведение (B), деление (F), соединение (G), объединение (H) решают другие задачи. Пользователь верно указал E, но добавил неверный D — частичный балл (1)."
    },
    {
      id: "v3-db-4", variant: 3, subject: "db", number: 4, multi: true, topic: "Атрибуты",
      question: "Жалғыз мәнді атрибут",
      options: [
        { letter: "A", text: "білім алу дипломы" },
        { letter: "B", text: "адам жасы" },
        { letter: "C", text: "тауарлардың тізімі" },
        { letter: "D", text: "телефон нөмірі" },
        { letter: "E", text: "факультет деканы" },
        { letter: "F", text: "студенттер тізімі" }
      ],
      correct: ["B", "E"], userAnswer: ["D", "E"], officialResult: 1, keyConfidence: "derived",
      explanation: "Однозначный (single-valued) атрибут имеет ровно одно значение. Возраст человека (B) и декан факультета (E) — по одному значению. «Список товаров» (C) и «список студентов» (F) — многозначные по определению; номер телефона (D) тоже часто многозначный (у человека может быть несколько), поэтому классически его относят к многозначным. Пользователь верно указал E, но выбрал D вместо B — частичный балл (1)."
    },
    {
      id: "v3-db-5", variant: 3, subject: "db", number: 5, multi: true, topic: "Ключи", authored: true,
      question: "Бір кестені басқа кестемен байланыстыратын, басқа кестенің басты кілтіне сілтейтін өріс",
      options: [
        { letter: "A", text: "сыртқы кілт (foreign key)" },
        { letter: "B", text: "басты кілт (primary key)" },
        { letter: "C", text: "үміткер кілт (candidate key)" },
        { letter: "D", text: "индекс" },
        { letter: "E", text: "домен" },
        { letter: "F", text: "кортеж" }
      ],
      correct: ["A"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "🆕 Дополнительный вопрос (составлен для тренировки — оригинал не был сфотографирован). Внешний ключ (сыртқы кілт, A) — поле, ссылающееся на первичный ключ другой таблицы; он связывает таблицы и обеспечивает ссылочную целостность. Первичный ключ (B) идентифицирует строку в своей таблице, кандидатный ключ (C) — потенциальный первичный, индекс (D) ускоряет поиск, домен (E) — множество допустимых значений атрибута, кортеж (F) — строка таблицы."
    },
    {
      id: "v3-db-6", variant: 3, subject: "db", number: 6, multi: true, topic: "SQL · массивы (UNNEST)",
      question: "Кітаптың аты мен авторлар тізімі",
      options: [
        { letter: "A", text: "", code: "SELECT B.Title, A.Author\nFROM BOOKS AS B, UNNEST(B.AuthArray) AS A(Author);" },
        { letter: "B", text: "", code: "SELECT B.Title\nFROM BOOKS AS Title, UNNEST(B.AuthArray) AS A(Title);" },
        { letter: "C", text: "", code: "SELECT B.Title, A.Author\nFROM BOOKS AS B, NOT UNNEST(B.AuthArray) AS A(Author);" },
        { letter: "D", text: "", code: "SELECT B.Title, A.Author\nFROM BOOKS AS B, BOOKS AS A(Author);" },
        { letter: "E", text: "", code: "SELECT B.Title\nFROM BOOKS AS B;" },
        { letter: "F", text: "", code: "SELECT B.Title, A.Author\nFROM BOOKS AS B;" }
      ],
      correct: ["A"], userAnswer: ["A", "F"], officialResult: 1, keyConfidence: "derived",
      explanation: "Авторы хранятся массивом (AuthArray). Чтобы вывести название и каждого автора отдельной строкой, массив надо развернуть через UNNEST и дать столбцу имя — именно это делает A. В F используется A.Author, но таблица A нигде не определена (UNNEST отсутствует) — запрос некорректен. B теряет автора и путает псевдонимы, C содержит недопустимое NOT UNNEST. Пользователь выбрал верный A и лишний F — частичный балл (1)."
    },
    {
      id: "v3-db-7", variant: 3, subject: "db", number: 7, multi: true, topic: "SQL · SELECT/WHERE",
      question: "Биология кафедрасының оқытушылары",
      options: [
        { letter: "A", text: "", code: "SELECT *\nFROM INSTRUCTOR\nWHERE DeptName <> 'Биология';" },
        { letter: "B", text: "", code: "SELECT *\nFROM INSTRUCTOR = 'Биология';" },
        { letter: "C", text: "", code: "SELECT Name\nFROM INSTRUCTOR\nGROUP BY DeptName;" },
        { letter: "D", text: "", code: "SELECT Name\nFROM INSTRUCTOR\nWHERE DeptName = 'Биология';" },
        { letter: "E", text: "", code: "SELECT Name\nFROM INSTRUCTOR" },
        { letter: "F", text: "", code: "SELECT Name\nFROM INSTRUCTOR\nGROUP BY DeptName = 'Биология';" }
      ],
      correct: ["D"], userAnswer: ["D"], officialResult: 2, keyConfidence: "official",
      explanation: "Нужны преподаватели кафедры «Биология» — это фильтр по строкам: WHERE DeptName = 'Биология' (D). A с оператором <> даёт наоборот всех, кроме биологов; B — синтаксически неверно (нельзя присваивать таблице значение); C и F используют GROUP BY без агрегата и не фильтруют; E возвращает всех. Ответ полностью верный (2)."
    },
    {
      id: "v3-db-8", variant: 3, subject: "db", number: 8, multi: true, topic: "SQL · LIKE / шаблоны",
      question: "«LIKE 'ab\\%cd%'» түрінде берілген болса",
      options: [
        { letter: "A", text: "abcd тіркесі жоқ жазбалардан тұрады" },
        { letter: "B", text: "\"ab\"-мен басталып, \"cd\"-мен аяқталады" },
        { letter: "C", text: "\"ab\\%cd\" деген тіркесті қарастырады" },
        { letter: "D", text: "\"ab%cd\" тіркесінен басталады" },
        { letter: "E", text: "\"abcd\" тіркесінен басталады" },
        { letter: "F", text: "\"abcd\" тіркесімен аяқталады" }
      ],
      correct: ["D"], userAnswer: ["C"], officialResult: 0, keyConfidence: "derived",
      explanation: "В шаблоне 'ab\\%cd%' последовательность \\% — это экранированный процент, то есть литеральный символ «%». Значит шаблон означает: строка начинается с литерала «ab%cd», а завершающий неэкранированный % — обычный подстановочный знак (любой хвост). Поэтому верно D — «начинается с ab%cd». Пользователь выбрал C (буквально «ab\\%cd» с обратным слэшем) — это неверная трактовка экранирования, балл 0."
    },
    {
      id: "v3-db-9", variant: 3, subject: "db", number: 9, multi: true, topic: "SQL · JOIN + ORDER BY",
      question: "Бөлім бойынша, әр бөлімнің ішінде жұмысшы фамилиясы, аты алфавит бойынша сұрыпталатын және жұмыс істейтін проектісі",
      options: [
        { letter: "A", text: "", code: "SELECT D.Dname, E.Lname, E.Fname, P.Pname\nFROM DEPART AS D, EMPL AS E, WORKS_ON AS W, PROJECT AS P\nWHERE D.Dnum = E.Dno AND E.Ssn = W.Essn AND W.Pno = P.Pnum\nORDER BY D.Dname, E.Lname, E.Fname;" },
        { letter: "B", text: "", code: "SELECT D.Dname, E.Lname, E.Fname, P.Pname\nFROM DEPART AS D, EMPL AS E, WORKS_ON AS W, PROJECT AS P\nWHERE D.Dnum = E.Dno OR E.Ssn = W.Essn OR W.Pno = P.Pnum;" },
        { letter: "C", text: "", code: "SELECT D.Dname, E.Lname, E.Fname, P.Pname\nFROM DEPART AS D, EMPL AS E, WORKS_ON AS W, PROJECT AS P;" },
        { letter: "D", text: "", code: "SELECT D.Dname, E.Lname, E.Fname, P.Pname\nFROM DEPART AS D, EMPL AS E, WORKS_ON AS W, PROJECT AS P\nWHERE D.Dnum == E.Dno AND E.Ssn == W.Essn AND W.Pno == P.Pnum\nGROUP BY D.Dname, E.Lname, E.Fname;" },
        { letter: "E", text: "", code: "SELECT D.Dname, E.Lname, E.Fname, P.Pname\nFROM DEPART AS D, EMPL AS E, WORKS_ON AS W, PROJECT AS P\nWHERE D.Dnum = E.Dno AND E.Ssn = W.Essn AND W.Pno = P.Pnum;" },
        { letter: "F", text: "", code: "SELECT D.Dname, E.Lname, E.Fname, P.Pname\nFROM DEPART AS D, EMPL AS E, WORKS_ON AS W, PROJECT AS P\nWHERE D.Dnum = E.Dno AND E.Ssn = W.Essn AND W.Pno = P.Pnum\nGROUP BY D.Dname;" }
      ],
      correct: ["A"], userAnswer: ["B", "E"], officialResult: 0, keyConfidence: "derived",
      explanation: "Требуется вывод, отсортированный по алфавиту внутри каждого отдела, поэтому нужны и корректные соединения (все три условия через AND: D.Dnum=E.Dno AND E.Ssn=W.Essn AND W.Pno=P.Pnum), и сортировка ORDER BY. Обоим требованиям отвечает только A. B использует OR (получится почти декартово произведение) и не сортирует; E имеет верные соединения, но без ORDER BY — сортировки нет; C без условий соединения; D применяет недопустимый оператор == и GROUP BY вместо ORDER BY. Пользователь выбрал B и E — оба неверны, балл 0."
    },
    {
      id: "v3-db-10", variant: 3, subject: "db", number: 10, multi: true, topic: "SQL · GROUP BY / COUNT",
      question: "Келесі сұраныстың нәтижесі:",
      questionCode: "SELECT Semester, COUNT(*) AS '60-тан көп сағаттар саны'\nFROM UCHPLAN\nWHERE Hours > 60\nGROUP BY Semester",
      options: [
        { letter: "A", text: "Әр семестрдегі сабақтар санының орташа мәнін шығарады" },
        { letter: "B", text: "Әр семестрдегі сағат саны 60 тан аз болатын сабақтар санын шығарады" },
        { letter: "C", text: "Барлық семестрлердегі сағат саны 60-тан көп сағаттар саны шығарады" },
        { letter: "D", text: "Әр семестрдегі сағат саны 60-тан көп болатын сабақтар санын шығарады" },
        { letter: "E", text: "Әр семестрдегі сағат саны 60 қа тең болатын сабақтар санын шығарады" },
        { letter: "F", text: "Әр семестрдегі сабақтар санын және олардың атауларын шығарады" }
      ],
      correct: ["D"], userAnswer: ["C"], officialResult: 0, keyConfidence: "derived",
      explanation: "GROUP BY Semester группирует строки по семестрам, WHERE Hours>60 оставляет только предметы с числом часов больше 60, а COUNT(*) считает их количество. Итог: «для каждого семестра — число предметов, где часов больше 60» (D). Вариант C неверен вдвойне: говорит «по всем семестрам» (а группировка идёт по каждому) и «число часов» вместо «числа предметов». Пользователь выбрал C — балл 0."
    },
    {
      id: "v3-db-11", variant: 3, subject: "db", number: 11, multi: true, topic: "SQL · GROUP BY",
      question: "Әр проект үшін проект номерін, атын және сол проектте істеген жұмыскерлер саны",
      options: [
        { letter: "A", text: "", code: "SELECT Pnum, Pname, COUNT(*)\nFROM PROJECT, WORKS_ON\nWHERE Pnum = Pno" },
        { letter: "B", text: "", code: "SELECT Pnum, Pname, COUNT(*)\nFROM PROJECT, WORKS_ON\nWHERE Pnum = Pno\nHAVING COUNT(*) > 2" },
        { letter: "C", text: "", code: "SELECT Pnum, Pname, COUNT(*)\nFROM PROJECT, WORKS_ON\nWHERE Pnum == Pno" },
        { letter: "D", text: "", code: "SELECT Pnum, Pname, COUNT\nFROM PROJECT, WORKS_ON\nWHERE Pnum == Pno" },
        { letter: "E", text: "", code: "SELECT Pnum, Pname, COUNT(Employers)\nFROM PROJECT, WORKS_ON\nWHERE Pnum = Pno" },
        { letter: "F", text: "", code: "SELECT Pnum, Pname, COUNT(*)\nFROM PROJECT, WORKS_ON\nWHERE Pnum = Pno\nGROUP BY Pnum, Pname" }
      ],
      correct: ["F"], userAnswer: ["B", "E"], officialResult: 0, keyConfidence: "derived",
      explanation: "Чтобы получить по каждому проекту число работников, нужно сгруппировать строки: GROUP BY Pnum, Pname с COUNT(*). Единственный вариант с GROUP BY — F. Остальные без группировки не дают результат «по каждому проекту»: A/B возвращают одну агрегированную строку (B ещё и фильтрует HAVING>2), C/D используют недопустимый оператор == (а D — COUNT без аргумента), E считает несуществующий столбец Employers. Пользователь выбрал B и E — оба неверны, балл 0."
    },
    {
      id: "v3-db-12", variant: 3, subject: "db", number: 12, multi: true, topic: "Внешние ключи · целостность",
      question: "Кесте құру барысында осы кілттік сөз арқылы негізгі кестедегі жол өшірілсе, онда байланысқан кестедегі жол да жойылады",
      options: [
        { letter: "A", text: "ON UPDATE CASCADE" },
        { letter: "B", text: "FOREIGN KEY" },
        { letter: "C", text: "ON UPDATE NO ACTION" },
        { letter: "D", text: "DELETE" },
        { letter: "E", text: "CHECK" },
        { letter: "F", text: "ON DELETE NO ACTION" },
        { letter: "G", text: "PRIVATE KEY" },
        { letter: "H", text: "ON DELETE CASCADE" }
      ],
      correct: ["H"], userAnswer: ["H"], officialResult: 2, keyConfidence: "official",
      explanation: "«Удалили строку в главной таблице — удалилась и связанная строка в подчинённой» — это каскадное удаление ON DELETE CASCADE (H). ON UPDATE CASCADE (A) каскадирует изменение ключа, а не удаление; NO ACTION (C, F) наоборот запрещает операцию при наличии ссылок; DELETE (D) — команда, а не правило; CHECK (E) — ограничение значения. Ответ полностью верный (2)."
    },
    {
      id: "v3-db-13", variant: 3, subject: "db", number: 13, multi: true, topic: "SQL · UPDATE",
      question: "Студенттер кестесінде стипендия мәні 25000 болатындарды екі есеге көбейту",
      options: [
        { letter: "A", text: "", code: "CREATE STUDENTS\nSET STIP = STIP * 2\nWHERE STIP = 25000;" },
        { letter: "B", text: "", code: "INSERT INTO STUDENTS\nSET STIP = STIP * 2\nWHERE STIP = 25000;" },
        { letter: "C", text: "", code: "DELETE STUDENTS\nWHERE STIP = 25000;" },
        { letter: "D", text: "", code: "INSERT STUDENTS\nSET STIP = STIP * 2\nWHERE STIP = 25000;" },
        { letter: "E", text: "", code: "UPDATE STUDENTS\nSET STIP = STIP * 2\nWHERE STIP = 25000;" },
        { letter: "F", text: "", code: "UPDATE STUDENTS\nSELECT STIP = STIP * 2\nWHERE STIP = 25000;" }
      ],
      correct: ["E"], userAnswer: ["E"], officialResult: 2, keyConfidence: "official",
      explanation: "Изменение существующих строк — это UPDATE ... SET ... WHERE (E): удваиваем стипендию тем, у кого STIP=25000. CREATE (A) создаёт таблицу, INSERT (B, D) добавляет строки, DELETE (C) удаляет, а F использует SELECT внутри UPDATE — неверный синтаксис. Ответ полностью верный (2)."
    },
    {
      id: "v3-db-14", variant: 3, subject: "db", number: 14, multi: true, topic: "SQL · UPDATE / NULL",
      question: "2003 кодтағы сабақтан барлық студенттердің балын NULL-ға өзгерту",
      options: [
        { letter: "A", text: "", code: "INSERT USP\nSET Ocenka = NULL\nWHERE Pnum > 2003;" },
        { letter: "B", text: "", code: "CREATE USP\nSET Ocenka = NULL\nWHERE Pnum = 2003;" },
        { letter: "C", text: "", code: "INSERT INTO USP\nSET Ocenka = NULL\nWHERE Pnum = 2003;" },
        { letter: "D", text: "", code: "UPDATE USP\nSET Ocenka = NULL\nWHERE Pnum = 2003;" },
        { letter: "E", text: "", code: "INSERT INTO USP\nSET Ocenka = NULL;" },
        { letter: "F", text: "", code: "UPDATE USP\nSET Ocenka = NULL;" }
      ],
      correct: ["D"], userAnswer: ["D"], officialResult: 2, keyConfidence: "official",
      explanation: "Нужно изменить оценки существующих записей по предмету с кодом 2003: UPDATE USP SET Ocenka=NULL WHERE Pnum=2003 (D). A использует > 2003 (не тот набор) и INSERT; B — CREATE; C и E — INSERT (добавление, а не изменение); F меняет оценки у всех без условия. Ответ полностью верный (2)."
    },
    {
      id: "v3-db-15", variant: 3, subject: "db", number: 15, multi: true, topic: "SQL · предикат UNIQUE",
      question: "UNIQUE кілттік сөзін қолданып, 2021 жылы бір рет қана оқылған пәндер",
      options: [
        { letter: "A", text: "", code: "SELECT T.CourseId\nFROM COURSE AS T\nWHERE UNIQUE (SELECT R.CourseId\n  FROM SECTION AS R\n  WHERE T.CourseId = R.CourseId OR R.Year = 2021);" },
        { letter: "B", text: "", code: "SELECT T.CourseId\nFROM COURSE AS T\nWHERE NOT UNIQUE (SELECT R.CourseId\n  FROM SECTION AS R\n  WHERE T.CourseId = R.CourseId AND R.Year = 2021);" },
        { letter: "C", text: "", code: "SELECT T.CourseId\nFROM COURSE AS T\nWHERE SOME (SELECT R.CourseId\n  FROM SECTION AS R\n  WHERE T.CourseId = R.CourseId AND R.Year = 2021);" },
        { letter: "D", text: "", code: "SELECT T.CourseId\nFROM COURSE AS T\nWHERE UNIQUE (SELECT R.CourseId\n  FROM SECTION AS R\n  WHERE T.CourseId = R.CourseId AND R.Year = 2021);" }
      ],
      correct: ["D"], userAnswer: ["A", "D"], officialResult: 1, keyConfidence: "derived",
      explanation: "Предикат UNIQUE истинен, когда подзапрос не содержит дубликатов, то есть курс встречается в 2021 году ровно один раз. Нужны корректная корреляция и год через AND — это D. В A условие связано через OR (R.Year=2021 сработает для всех курсов — логика ломается), B — NOT UNIQUE (наоборот, встречается более одного раза), C использует неуместный SOME. Пользователь выбрал верный D и лишний A — частичный балл (1)."
    },
    {
      id: "v3-db-16", variant: 3, subject: "db", number: 16, multi: true, topic: "SQL · подзапросы / COUNT",
      question: "2021 жылы бір рет қана оқылған пәндер",
      options: [
        { letter: "A", text: "", code: "SELECT T.CourseId\nFROM COURSE AS T\nWHERE 1 <= (SELECT COUNT(R.CourseId)\n  FROM SECTION AS R\n  WHERE T.CourseId = R.CourseId AND R.Year = 2021);" },
        { letter: "B", text: "", code: "SELECT T.CourseId\nFROM COURSE AS T\nWHERE 1 <= (SELECT COUNT(R.CourseId)\n  FROM SECTION AS R\n  WHERE T.CourseId = R.CourseId OR R.Year = 2021);" },
        { letter: "C", text: "", code: "SELECT T.CourseId\nFROM COURSE AS T\nWHERE 1 <= (SELECT COUNT(R.CourseId)\n  FROM SECTION AS R\n  WHERE T.CourseId = R.CourseId);" },
        { letter: "D", text: "", code: "SELECT T.CourseId\nFROM COURSE AS T\nWHERE 1 <= (SELECT COUNT(R.CourseId)\n  FROM SECTION AS R\n  WHERE T.CourseId = R.CourseId OR R.Year = 2021);" },
        { letter: "E", text: "", code: "SELECT T.CourseId\nFROM COURSE AS T\nWHERE 1 <= (SELECT COUNT(R.CourseId)\n  FROM SECTION AS R\n  WHERE CourseId = CourseId AND Year = 2021);" },
        { letter: "F", text: "", code: "SELECT T.CourseId\nFROM COURSE AS T\nWHERE 1 <= (SELECT COUNT(R.CourseId)\n  FROM SECTION AS R\n  WHERE R.Year = 2021);" }
      ],
      correct: ["A"], userAnswer: ["A", "E", "F"], officialResult: 0, keyConfidence: "derived",
      explanation: "Здесь тот же смысл, что и в №15, но через COUNT. Правильна корректно скоррелированная версия: подзапрос считает секции данного курса за 2021 год — WHERE T.CourseId=R.CourseId AND R.Year=2021 (A). E пишет CourseId=CourseId без псевдонимов (условие всегда истинно, корреляции нет), F вовсе теряет связь с курсом (WHERE R.Year=2021), B/D используют OR. Пользователь выбрал верный A, но добавил два неверных (E, F) — неверных больше, чем верных, балл 0."
    },
    {
      id: "v3-db-17", variant: 3, subject: "db", number: 17, multi: true, topic: "SQL · подзапросы",
      question: "Философия пәнінің кодынан 1 санға кем сабақ туралы ақпарат",
      options: [
        { letter: "A", text: "", code: "SELECT * FROM PREDMET\nWHERE Pnum = (SELECT Pnum - 1 FROM PREDMET\n  WHERE Pname = 'Философия');" },
        { letter: "B", text: "", code: "SELECT * FROM PREDMET\nWHERE Pnum >= (SELECT Pnum - 1 FROM PREDMET;\n  WHERE Pname = 'Философия');" },
        { letter: "C", text: "", code: "SELECT * FROM PREDMET\nWHERE Pnum = Pnum - 1" },
        { letter: "D", text: "", code: "SELECT * FROM PREDMET\nWHERE (SELECT Pnum - 1 FROM PREDMET\n  WHERE Pname = 'Философия');" },
        { letter: "E", text: "", code: "SELECT * FROM PREDMET\nWHERE Pnum = (SELECT Pnum - 1 FROM PREDMET);" },
        { letter: "F", text: "", code: "SELECT * FROM PREDMET\nWHERE Pnum <= (SELECT Pnum - 1 FROM PREDMET\n  WHERE Pname = 'Философия');" }
      ],
      correct: ["A"], userAnswer: ["A", "B", "D"], officialResult: 0, keyConfidence: "derived",
      explanation: "Нужен предмет, чей код на 1 меньше кода «Философии»: сначала подзапросом берём (код Философии − 1), затем ищем строку с этим кодом — WHERE Pnum = (SELECT Pnum-1 ... WHERE Pname='Философия') (A). B использует >= (и синтаксическую ошибку с ;) — вернёт много строк; D не имеет сравнения «Pnum =» (подзапрос-условие некорректен); C сравнивает Pnum с Pnum−1 (всегда ложь); E теряет фильтр по Философии (подзапрос вернёт много значений). Пользователь выбрал верный A и два неверных (B, D) — балл 0."
    },
    {
      id: "v3-db-18", variant: 3, subject: "db", number: 18, multi: true, topic: "Нормальные формы",
      question: "1НФ (первая нормальная форма)",
      options: [
        { letter: "A", text: "кілттік емес атрибуттары толығымен бастапқы кілтке тәуелді қатынас" },
        { letter: "B", text: "кілттік емес атрибуттар өзара тәуелді емес қатынас" },
        { letter: "C", text: "логикалық бөлінбейтін мәндерге ие қатынас" },
        { letter: "D", text: "кестелер бір кестеге біріктірілетін қатынас" },
        { letter: "E", text: "тұтастық сақталмайтын қатынас" },
        { letter: "F", text: "логикалық бөлінетін мәндерге ие қатынас" }
      ],
      correct: ["C"], userAnswer: ["C", "D"], officialResult: 1, keyConfidence: "derived",
      explanation: "1НФ требует, чтобы все значения атрибутов были атомарными — «логически неделимыми» (C). Полная зависимость неключевых атрибутов от первичного ключа (A) — это уже 2НФ; взаимная независимость неключевых атрибутов (B) — про 3НФ; F описывает противоположное (делимые значения), D и E к 1НФ отношения не имеют. Пользователь выбрал верный C и лишний D — частичный балл (1)."
    },
    {
      id: "v3-db-19", variant: 3, subject: "db", number: 19, multi: true, topic: "Атрибуты · скалярность",
      question: "Скалярлық қатынас (скалярное отношение)",
      options: [
        { letter: "A", text: "сыртқы кілттік емес атрибуттары толығымен бастапқы кілтке тәуелді" },
        { letter: "B", text: "кілттік емес атрибуттары толығымен бастапқы кілтке тәуелді" },
        { letter: "C", text: "кестелер бір кестеге біріктіріледі" },
        { letter: "D", text: "логикалық бөлінбейтін мәндерге ие қатынас" },
        { letter: "E", text: "логикалық бөлінетін мәндерге ие" },
        { letter: "F", text: "логикалық емес бөлінбейтін мәндерге ие қатынас" }
      ],
      correct: ["D"], userAnswer: ["A", "C"], officialResult: 0, keyConfidence: "derived",
      explanation: "Скалярное (атомарное) отношение — то, у которого значения логически неделимы, то есть каждый атрибут содержит одно скалярное значение (D). A и B описывают зависимости от ключа (это про нормальные формы), C — про слияние таблиц, E — про делимые значения (противоположность), F — бессмысленная формулировка. Пользователь выбрал A и C — оба неверны, балл 0."
    },
    {
      id: "v3-db-20", variant: 3, subject: "db", number: 20, multi: true, topic: "Нормализация · аномалии",
      question: "Денормалауда пайда болатын аномалия",
      options: [
        { letter: "A", text: "іздеу аномалиясы" },
        { letter: "B", text: "өзгерту аномалиясы" },
        { letter: "C", text: "қосылу аномалиясы" },
        { letter: "D", text: "енгізу аномалиясы" },
        { letter: "E", text: "сұрыптау аномалиясы" },
        { letter: "F", text: "жою аномалиясы" },
        { letter: "G", text: "байланыс аномалиясы" }
      ],
      correct: ["C", "D"], userAnswer: ["C", "D"], officialResult: 2, keyConfidence: "official",
      explanation: "Денормализация — намеренное объединение таблиц ради скорости — вводит избыточность, из-за которой появляются аномалии. По ключу засчитаны аномалия присоединения/объединения (C, қосылу) и аномалия вставки (D, енгізу). Родственные им классические аномалии избыточности — обновления (B, өзгерту) и удаления (F, жою); а «поиска» (A), «сортировки» (E), «связи» (G) — это не аномалии, а отвлекающие варианты. Ответ пользователя совпал с ключом полностью (2)."
    }
  ]
};
