window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["v5-db"] = {
  key: "v5-db", variant: 5, subject: "db", lang: "kz",
  title: "Вариант 5 · Базы данных (каз.)",
  questions: [
    {
      id: "v5-db-1", variant: 5, subject: "db", number: 1, multi: true, topic: "Распределённые БД",
      question: "Әр түрлі ДҚБЖ бағдарламасын қолданатын үлестірілген ДҚБЖ",
      options: [
        { letter: "A", text: "графқа негізделген" },
        { letter: "B", text: "гетерогенді" },
        { letter: "C", text: "локалды" },
        { letter: "D", text: "объектіге негізделген" },
        { letter: "E", text: "гомогенді" },
        { letter: "F", text: "бір қолданушы жүйесі" }
      ],
      correct: ["B"], userAnswer: ["A", "B"], officialResult: 1, keyConfidence: "derived",
      explanation: "Распределённая СУБД, где на разных узлах используется РАЗНОЕ программное обеспечение СУБД, называется гетерогенной (гетерогенді, B). Гомогенная (E), наоборот, использует одинаковую СУБД везде. Пользователь верно указал B, но добавил лишний A — частичный балл."
    },
    {
      id: "v5-db-2", variant: 5, subject: "db", number: 2, multi: true, topic: "Связи (кардинальность)",
      question: "Реляционды деректер моделінде «Студент - топ» байланысының түрі",
      options: [
        { letter: "A", text: "M:1" },
        { letter: "B", text: "1:M" },
        { letter: "C", text: "1:2" },
        { letter: "D", text: "M:M" },
        { letter: "E", text: "1:1" },
        { letter: "F", text: "2:1" }
      ],
      correct: ["A"], userAnswer: ["B"], officialResult: 0, keyConfidence: "derived",
      explanation: "Связь «Студент → Группа»: много студентов относятся к одной группе, то есть многие-к-одному, M:1 (A). Вариант 1:M (B) означал бы «один студент — много групп», что неверно: студент состоит в одной группе."
    },
    {
      id: "v5-db-3", variant: 5, subject: "db", number: 3, multi: true, topic: "Реляционная алгебра",
      question: "Бірінші жиынға кіретін, бірақ екінші жиынға кірмейтін элементтерді таңдайтын реляционды алгебраның амалы",
      options: [
        { letter: "A", text: "таңдау" },
        { letter: "B", text: "қарым-қатынастарды біріктіру" },
        { letter: "C", text: "қиылысу" },
        { letter: "D", text: "проекция" },
        { letter: "E", text: "айырмашылық" },
        { letter: "F", text: "Декарт көбейтіндісі" },
        { letter: "G", text: "бөлу" },
        { letter: "H", text: "UNION" }
      ],
      correct: ["E"], userAnswer: ["D", "H"], officialResult: 0, keyConfidence: "derived",
      explanation: "Операция, выбирающая элементы, которые есть в первом множестве, но нет во втором, — это разность (айырмашылық, E; EXCEPT/MINUS). Проекция (D) выбирает столбцы, а UNION (H) — объединение. Оба выбора пользователя неверны."
    },
    {
      id: "v5-db-4", variant: 5, subject: "db", number: 4, multi: true, topic: "Модель «сущность-связь»",
      question: "Бірнеше нысанды біріктіретін қауымдастық",
      options: [
        { letter: "A", text: "байланыс" },
        { letter: "B", text: "қасиет" },
        { letter: "C", text: "қатынас" },
        { letter: "D", text: "жиын" },
        { letter: "E", text: "агрегация" },
        { letter: "F", text: "кілт" }
      ],
      correct: ["A", "E"], userAnswer: ["A", "D"], officialResult: 1, keyConfidence: "derived",
      explanation: "Ассоциация, объединяющая несколько объектов, — это связь (байланыс, A) и агрегация (агрегация, E): агрегация объединяет объекты в единое целое более высокого уровня. Пользователь верно указал A, но добавил лишний D («жиын») и не указал E — частичный балл."
    },
    {
      id: "v5-db-5", variant: 5, subject: "db", number: 5, multi: true, topic: "Функциональные зависимости",
      question: "Егер R қатынасында X, Y, Z атрибуттары берілсе, тұйықталу (транзитивтік) тәуелділігі",
      options: [
        { letter: "A", text: "X→Z және Y→Z болса, онда X→Z болмайды" },
        { letter: "B", text: "X→Z функционалдық тәуелділік шарты орындалса, онда X→Y болмайды" },
        { letter: "C", text: "X→Y және Y→Z функционалдық тәуелділігі болса, онда X→Z болады" },
        { letter: "D", text: "X→ және Y→Z функционалдық тәуелділігі болса, онда Y→X болады" },
        { letter: "E", text: "Y→Z функционалдық тәуелділік шарты орындалса, онда X→Y болады" },
        { letter: "F", text: "X→Z функционалдық тәуелділік шарты орындалса, онда X→ болады" }
      ],
      correct: ["C"], userAnswer: ["C"], officialResult: 2, keyConfidence: "official",
      explanation: "Аксиома транзитивности Армстронга: если X→Y и Y→Z, то X→Z (C). Это и есть «замыкание» функциональных зависимостей."
    },
    {
      id: "v5-db-6", variant: 5, subject: "db", number: 6, multi: true, topic: "SQL · агрегатные функции",
      question: "Агрегаттық функция",
      options: [
        { letter: "A", text: "GROUP BY" },
        { letter: "B", text: "HAVING" },
        { letter: "C", text: "ADD" },
        { letter: "D", text: "SUM" },
        { letter: "E", text: "COUNT" },
        { letter: "F", text: "AS" },
        { letter: "G", text: "AVG" },
        { letter: "H", text: "WHERE" }
      ],
      correct: ["D", "E", "G"], userAnswer: ["D", "E", "G"], officialResult: 2, keyConfidence: "official",
      explanation: "Агрегатные функции считают итог по группе строк: SUM (сумма, D), COUNT (количество, E), AVG (среднее, G). GROUP BY, HAVING, WHERE, AS — это ключевые слова, а не агрегатные функции."
    },
    {
      id: "v5-db-7", variant: 5, subject: "db", number: 7, multi: true, topic: "SQL · SELECT/JOIN",
      question: "«Зерттеу» бөлімінде істейтін жұмысшылардың аты-жөні мен адресі",
      options: [
        { letter: "A", text: "", code: "SELECT Fname, Lname, Address\nFROM Fname\nWHERE Dname = 'Зерттеу' AND Dnum = Dno;" },
        { letter: "B", text: "", code: "SELECT Fname, Lname, Address\nFROM EMPLOYEE, DEPARTMENT\nWHERE Dname = 'Зерттеу' NOT Dnum = Dno;" },
        { letter: "C", text: "", code: "SELECT Fname, Lname, Address\nFROM EMPLOYEE\nWHERE Dname = 'Зерттеу' AND Dnum = Dno;" },
        { letter: "D", text: "", code: "SELECT Fname, Lname, Address\nFROM EMPLOYEE, DEPARTMENT" },
        { letter: "E", text: "", code: "SELECT Fname, Lname, Address\nFROM EMPLOYEE, DEPARTMENT\nWHERE Dname = 'Зерттеу' AND Dnum = Dno;" },
        { letter: "F", text: "", code: "SELECT Fname, Lname, Address\nFROM EMPLOYEE\nWHERE Dname = 'Зерттеу' OR Dnum = Dno;" }
      ],
      correct: ["E"], userAnswer: ["C", "F"], officialResult: 0, keyConfidence: "derived",
      explanation: "Нужны сотрудники отдела «Зерттеу»: соединяем EMPLOYEE и DEPARTMENT и фильтруем — FROM EMPLOYEE, DEPARTMENT WHERE Dname='Зерттеу' AND Dnum=Dno (E). Вариант C ссылается на Dname, но не включает DEPARTMENT в FROM; F использует OR вместо AND. Оба неверны."
    },
    {
      id: "v5-db-8", variant: 5, subject: "db", number: 8, multi: true, topic: "SQL · LIKE",
      question: "«LIKE '___'» түрінде берілген болса (үш астын сызу)",
      options: [
        { letter: "A", text: "'___%' символдарынан басталатын жолдар" },
        { letter: "B", text: "3 символдан тұратын жол" },
        { letter: "C", text: "кез-келген санды символдар тіркесі" },
        { letter: "D", text: "3 символдан көп символдардан тұратын жол" },
        { letter: "E", text: "'___%' символдар тіркесі бар жолдар" },
        { letter: "F", text: "'___' символдарынан басталатын жолдар" }
      ],
      correct: ["B"], userAnswer: ["B"], officialResult: 2, keyConfidence: "official",
      explanation: "Символ подчёркивания «_» в LIKE заменяет ровно один любой символ. Шаблон '___' (три подчёркивания) без % означает строку РОВНО из 3 символов (B). Знак % (любое число символов) здесь отсутствует."
    },
    {
      id: "v5-db-9", variant: 5, subject: "db", number: 9, multi: true, topic: "SQL · агрегаты",
      question: "Әр студенттің әр күнде алған минималды бағасы",
      options: [
        { letter: "A", text: "", code: "SELECT Snum, Udate, MIN(Ocenka)\nFROM USP" },
        { letter: "B", text: "", code: "SELECT Snum, Udate, MAX(Ocenka)\nFROM USP" },
        { letter: "C", text: "", code: "SELECT Snum, Udate\nFROM USP" },
        { letter: "D", text: "", code: "SELECT Snum, Udate, MIN(Ocenka+1)\nFROM USP" },
        { letter: "E", text: "", code: "SELECT Snum, Udate, AVG(Ocenka)\nFROM USP" },
        { letter: "F", text: "", code: "SELECT Snum, Udate, MIN(Ocenka-1)\nFROM USP" }
      ],
      correct: ["A"], userAnswer: ["A"], officialResult: 2, keyConfidence: "official",
      explanation: "«Минимальная оценка» — это функция MIN(Ocenka) (A). MAX даёт максимум, AVG — среднее, а MIN(Ocenka±1) искажает значение. (По смыслу нужен ещё GROUP BY Snum, Udate.)"
    },
    {
      id: "v5-db-10", variant: 5, subject: "db", number: 10, multi: true, topic: "SQL · ORDER BY", authored: true,
      question: "SQL сөйлемі, ол сұраныс нәтижесін бір баған бойынша ӨСУ ретімен сұрыптайды",
      options: [
        { letter: "A", text: "GROUP BY" },
        { letter: "B", text: "ORDER BY ... ASC" },
        { letter: "C", text: "SORT BY" },
        { letter: "D", text: "HAVING" },
        { letter: "E", text: "WHERE" },
        { letter: "F", text: "DISTINCT" }
      ],
      correct: ["B"], userAnswer: [], officialResult: 0, keyConfidence: "authored",
      explanation: "🆕 Дополнительный вопрос (оригинал №10 не был сфотографирован). Сортировку результата задаёт ORDER BY, а направление по возрастанию — ключевым словом ASC (B). GROUP BY группирует, HAVING фильтрует группы, WHERE — строки, DISTINCT убирает дубликаты; конструкции SORT BY в стандартном SQL нет."
    },
    {
      id: "v5-db-11", variant: 5, subject: "db", number: 11, multi: true, topic: "SQL · GROUP BY/JOIN",
      question: "Әр проект үшін проект номері, аты және сол проектте 5-нөмірдегі бөлімде істейтін жұмыскерлер саны",
      options: [
        { letter: "A", text: "", code: "SELECT Pnumber, Pname, AVG(Pname)\nFROM PROJECT, WORKS_ON, EMPLOYEE\nWHERE Pnumber = Pno OR Ssn = Essn OR Dno = 5" },
        { letter: "B", text: "", code: "SELECT Pnumber, Pname, COUNT(*)\nFROM PROJECT, WORKS_ON, EMPLOYEE\nWHERE Pnumber = Pno OR Ssn = Essn OR Dno = 5" },
        { letter: "C", text: "", code: "SELECT Pnum, Pname, COUNT(Employers)\nFROM PROJECT, WORKS_ON\nWHERE Pnum = Pno\nHAVING Dno = 5" },
        { letter: "D", text: "", code: "SELECT Pnum, Pname, COUNT(*)\nFROM PROJECT, WORKS_ON\nWHERE Pnum = Pno\nHAVING Dno = 5" },
        { letter: "E", text: "", code: "SELECT Pnumber, Pname, COUNT(*)\nFROM PROJECT, WORKS_ON, EMPLOYEE\nWHERE Pnumber = Pno AND Ssn = Essn AND Dno = 5" },
        { letter: "F", text: "", code: "SELECT Pnum, Pname, COUNT(*)\nFROM PROJECT, WORKS_ON\nWHERE Dno = 5" }
      ],
      correct: ["E"], userAnswer: ["E", "F"], officialResult: 1, keyConfidence: "derived",
      explanation: "Нужны корректные соединения трёх таблиц через AND и фильтр Dno=5: FROM PROJECT, WORKS_ON, EMPLOYEE WHERE Pnumber=Pno AND Ssn=Essn AND Dno=5 (E). Вариант F не соединяет таблицы (нет условий Pnumber=Pno, Ssn=Essn). Пользователь выбрал верный E и лишний F — частичный балл."
    },
    {
      id: "v5-db-12", variant: 5, subject: "db", number: 12, multi: true, topic: "SQL · DDL (ALTER)",
      question: "Құрылған кестеге жаңа баған қосу үшін қолданылатын параметр",
      options: [
        { letter: "A", text: "DROP" },
        { letter: "B", text: "DRUG" },
        { letter: "C", text: "ADD" },
        { letter: "D", text: "CREATE" },
        { letter: "E", text: "INSERT" },
        { letter: "F", text: "NEW" }
      ],
      correct: ["C"], userAnswer: ["E"], officialResult: 0, keyConfidence: "derived",
      explanation: "Новый столбец в уже существующую таблицу добавляют командой ALTER TABLE ... ADD (ключевое слово ADD, C). INSERT (E) добавляет строки, а не столбцы, поэтому ответ пользователя неверен."
    },
    {
      id: "v5-db-13", variant: 5, subject: "db", number: 13, multi: true, topic: "SQL · DML (INSERT)",
      question: "INSERT командасы",
      options: [
        { letter: "A", text: "бір кестеден екіншісіне мәліметтерді қою" },
        { letter: "B", text: "кестеге жаңа элементтер қосу" },
        { letter: "C", text: "кестеден мәліметтерді жою" },
        { letter: "D", text: "топтастыру" },
        { letter: "E", text: "кестеде мәліметтерді жаңарту" },
        { letter: "F", text: "кестелерді байланыстырады" }
      ],
      correct: ["A", "B"], userAnswer: ["B"], officialResult: 1, keyConfidence: "derived",
      explanation: "INSERT добавляет в таблицу новые строки (B) и умеет переносить данные из одной таблицы в другую через INSERT INTO ... SELECT (A). Пользователь указал только B — частичный балл. Удаление (C) — DELETE, обновление (E) — UPDATE."
    },
    {
      id: "v5-db-14", variant: 5, subject: "db", number: 14, multi: true, topic: "SQL · UPDATE",
      question: "Студенттер стипендиясын екі есе өскенін кестеде сақтау",
      options: [
        { letter: "A", text: "", code: "INSERT INTO STUDENTS\nSET STIP = STIP * 2;" },
        { letter: "B", text: "", code: "UPDATE STUDENTS\nWHERE STIP = STIP * 2;" },
        { letter: "C", text: "", code: "INSERT INTO STUDENTS\nWHERE STIP = STIP ** 2;" },
        { letter: "D", text: "", code: "UPDATE STUDENTS\nSET STIP = STIP ** 2;" },
        { letter: "E", text: "", code: "UPDATE STUDENTS\nSET STIP = STIP * 2;" },
        { letter: "F", text: "", code: "CREATE STUDENTS\nSET STIP = STIP * 0.2;" }
      ],
      correct: ["E"], userAnswer: ["E"], officialResult: 2, keyConfidence: "official",
      explanation: "Изменение существующих строк — это UPDATE ... SET: удвоить стипендию всем — UPDATE STUDENTS SET STIP = STIP*2 (E). INSERT добавляет строки, CREATE создаёт таблицу, а ** и WHERE вместо SET — синтаксически неверно."
    },
    {
      id: "v5-db-15", variant: 5, subject: "db", number: 15, multi: true, topic: "SQL · подзапросы/агрегаты",
      question: "Бөлшектер (деталь) санының қосындысының арифметикалық ортасын табу",
      options: [
        { letter: "A", text: "", code: "SELECT X\nFROM (SELECT SUM(SP.QTY) AS X\n      FROM SP\n      GROUP BY SP.S#) AS POINTLESS;" },
        { letter: "B", text: "", code: "SELECT MAX(X)\nFROM (SELECT SUM(SP.QTY)\n      FROM SP\n      GROUP BY SP.S#) AS POINTLESS;" },
        { letter: "C", text: "", code: "SELECT MAX(X)\nFROM (SELECT SUM(SP.QTY) AS X\n      FROM SP) AS POINTLESS;" },
        { letter: "D", text: "", code: "SELECT SUM(X)\nFROM (SELECT SUM(SP.QTY) AS X\n      FROM SP\n      GROUP BY SP.S#) AS POINTLESS;" },
        { letter: "E", text: "", code: "SELECT AVG(X)\nFROM (SELECT SUM(SP.QTY) AS X\n      FROM SP\n      GROUP BY SP.S#) AS POINTLESS;" },
        { letter: "F", text: "", code: "SELECT AVG(X)\nFROM (SELECT SUM(SP.QTY)\n      FROM SP\n      ORDER BY SP.S# DESC) AS POINTLESS;" }
      ],
      correct: ["E"], userAnswer: ["E", "F"], officialResult: 1, keyConfidence: "derived",
      explanation: "Сначала во вложенном запросе считаем сумму по каждому поставщику (SUM(QTY) с GROUP BY S#), затем берём среднее этих сумм: SELECT AVG(X) FROM (... GROUP BY SP.S#) (E). Вариант F не именует X (нет AS X) и использует ORDER BY DESC вместо GROUP BY. Пользователь выбрал верный E и лишний F — частичный балл."
    },
    {
      id: "v5-db-16", variant: 5, subject: "db", number: 16, multi: true, topic: "SQL · GROUP BY/HAVING",
      question: "Орташа жалақысы 200 000-нан көп болатын бөлімдердің орташа жалақысы",
      options: [
        { letter: "A", text: "", code: "SELECT DeptName, SUM(Salary) AS AvgSalary\nFROM INSTRUCTOR\nHAVING SUM(Salary) > 200000;" },
        { letter: "B", text: "", code: "SELECT DeptName, AVG(Salary) AS AvgSalary\nFROM INSTRUCTOR\nHAVING Salary > 200000;" },
        { letter: "C", text: "", code: "SELECT DeptName, Salary AS AvgSalary\nFROM INSTRUCTOR\nHAVING AVG(Salary) > 200000;" },
        { letter: "D", text: "", code: "SELECT DeptName, AVG(Salary) AS AvgSalary\nFROM INSTRUCTOR\nHAVING AVG(Salary) > 200000;" },
        { letter: "E", text: "", code: "SELECT DeptName, AvgSalary\nFROM (SELECT DeptName, AVG(Salary) AS AvgSalary)\nWHERE AvgSalary > 200000;" },
        { letter: "F", text: "", code: "SELECT DeptName, AvgSalary\nFROM (SELECT DeptName, AVG(Salary) AS AvgSalary\n      FROM INSTRUCTOR)\nWHERE AvgSalary > 200000;" }
      ],
      correct: ["D", "F"], userAnswer: ["D", "F"], officialResult: 2, keyConfidence: "official",
      explanation: "Отобрать отделы, где средняя зарплата > 200000, можно двумя способами: через HAVING AVG(Salary) > 200000 (D) или через подзапрос с AVG в FROM и фильтром WHERE AvgSalary > 200000 (F). В варианте B в HAVING стоит Salary без агрегата, в C — SELECT Salary без агрегата."
    },
    {
      id: "v5-db-17", variant: 5, subject: "db", number: 17, multi: true, topic: "SQL · подзапросы (IN)",
      question: "110011 нөмірлі оқытушыда курстарды оқыған студенттер саны",
      options: [
        { letter: "A", text: "", code: "SELECT COUNT(DISTINCT Id)\nFROM TAKES\nWHERE (CourseId, SecId) IN\n (LIKE CourseId, SecId, Semester, Year\n  FROM TEACHES\n  WHERE TEACHES.Id = 110011);" },
        { letter: "B", text: "", code: "CREATE COUNT(DISTINCT Id)\nFROM TAKES\nWHERE (CourseId, SecId, Semester, Year) IN\n (SELECT CourseId, SecId, Semester, Year\n  FROM TEACHES\n  WHERE TEACHES.Id = 110011);" },
        { letter: "C", text: "", code: "SELECT AVG(DISTINCT Id)\nFROM TAKES\nWHERE (CourseId, SecId, Semester, Year) IN\n (SELECT CourseId\n  FROM TEACHES\n  WHERE TEACHES.Id = 110011);" },
        { letter: "D", text: "", code: "SELECT COUNT(DISTINCT Id)\nFROM TAKES\nWHERE (CourseId, SecId, Semester, Year) SOME\n (SELECT CourseId, SecId, Semester, Year\n  FROM TEACHES\n  HAVING TEACHES.Id == 110011);" },
        { letter: "E", text: "", code: "SELECT COUNT(DISTINCT Id)\nFROM TAKES\nWHERE (CourseId, SecId, Semester, Year) ANY\n (SELECT CourseId, SecId, Semester, Year\n  FROM TEACHES\n  WHERE TEACHES.Id = 110011);" },
        { letter: "F", text: "", code: "SELECT COUNT(DISTINCT Id)\nFROM TAKES\nWHERE (CourseId, SecId, Semester, Year) IN\n (SELECT CourseId, SecId, Semester, Year\n  FROM TEACHES\n  WHERE TEACHES.Id = 110011);" }
      ],
      correct: ["F"], userAnswer: ["E", "F"], officialResult: 1, keyConfidence: "derived",
      explanation: "Правильно: COUNT(DISTINCT Id) с фильтром через IN и подзапросом, где кортеж совпадает по всем полям — вариант F. В E вместо IN стоит ANY без оператора сравнения (неверный синтаксис), в D — SOME с HAVING и ==, в B — CREATE вместо SELECT. Пользователь выбрал верный F и лишний E — частичный балл."
    },
    {
      id: "v5-db-18", variant: 5, subject: "db", number: 18, multi: true, topic: "Функциональные зависимости",
      question: "Детерминант (функционалды тәуелділікте)",
      options: [
        { letter: "A", text: "қатынастың барлық функционалдылық тәуелділіктері мәнге ие болса" },
        { letter: "B", text: "кілттік емес атрибуттар толығымен бастапқы кілтке тәуелді болса" },
        { letter: "C", text: "қатынаста функционалды тәуелділіктер болмаса" },
        { letter: "D", text: "қатынас логикалық бөлінбейтін мәндерден тұрса" },
        { letter: "E", text: "бір атрибут басқа атрибутқа толықтай функционалды тәуелді болса" },
        { letter: "F", text: "қатынастағы кез-келген байланысу тәуелділігі осы қатынаста болса" }
      ],
      correct: ["E"], userAnswer: ["C"], officialResult: 0, keyConfidence: "derived",
      explanation: "Детерминант — это атрибут (или набор атрибутов), от которого полностью функционально зависит другой атрибут, то есть левая часть X в зависимости X→Y. Этому соответствует вариант E («один атрибут полностью функционально зависит от другого»). Ответ C («в отношении нет функциональных зависимостей») неверен."
    },
    {
      id: "v5-db-19", variant: 5, subject: "db", number: 19, multi: true, topic: "Нормальные формы",
      question: "3НФ (үшінші қалыпты форма)",
      options: [
        { letter: "A", text: "2НФ-те болатын және кілттік емес атрибуттары толығымен бастапқы кілтке тәуелді" },
        { letter: "B", text: "2НФ-те болатын және кілттік атрибуттары өзара байланысқан" },
        { letter: "C", text: "2НФ-те болатын және кілттік емес атрибуттар өзара тәуелсіз" },
        { letter: "D", text: "2НФ-те болатын және логикалық бөлінетін мәндерге ие қатынас" },
        { letter: "E", text: "2НФ-те болатын және кілттік емес атрибуттар өзара тәуелді емес" },
        { letter: "F", text: "2НФ-те болатын және логикалық бөлінбейтін мәндерге ие қатынас" }
      ],
      correct: ["E"], userAnswer: ["B", "C", "E"], officialResult: 0, keyConfidence: "derived",
      explanation: "3НФ: отношение находится во 2НФ И неключевые атрибуты не зависят друг от друга (нет транзитивной зависимости) — это вариант E («кілттік емес атрибуттар өзара тәуелді емес»). Пользователь выбрал E, но добавил два неверных (B и C), поэтому балл 0. (Формулировка C очень близка к E, но по ключу засчитан именно E.)"
    },
    {
      id: "v5-db-20", variant: 5, subject: "db", number: 20, multi: true, topic: "Денормализация",
      question: "Денормалау (денормализация) дегеніміз",
      options: [
        { letter: "A", text: "күрделі деректер құрылымын қарапайым, тұрақты деректер құрылымына өткізу процесі" },
        { letter: "B", text: "нормаланған дереккордың оқылу жылдамдығын арттыру үшін қолданылатын стратегия" },
        { letter: "C", text: "бар кестелерді бірнеше кестеге бөліп шығарып, бұл кестелерді тек қана сұраныс арқылы байланыстыру" },
        { letter: "D", text: "лас деректерді форматтау" },
        { letter: "E", text: "лас деректерді жою" },
        { letter: "F", text: "дереккордың енгізу, өзгерту қабілетінің жылдамдығын баяулата отырып, дереккорға артық деректерді енгізу есебінен, деректерді оқу жылдамдығын арттыру" },
        { letter: "G", text: "кестелерден артық деректерді жоя отырып, дереккордың сақтау қабілеттілігін, деректердің тұтастығын және масштабтандыру қабілетін арттыру" }
      ],
      correct: ["B", "F"], userAnswer: ["A", "B", "F"], officialResult: 1, keyConfidence: "derived",
      explanation: "Денормализация — намеренное добавление избыточности ради скорости чтения: это стратегия ускорения чтения нормализованной БД (B) и приём, замедляющий вставку/изменение, но ускоряющий чтение за счёт избыточных данных (F). Вариант A описывает НОРМАЛИЗАЦИЮ (упрощение структуры), поэтому он лишний — у пользователя частичный балл."
    }
  ]
};
