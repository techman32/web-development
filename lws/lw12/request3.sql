SELECT
	student.surname AS 'Фамилия',
    student.firstname AS 'Имя',
    student.patronymic AS 'Отчество',
    faculty.firstname AS 'Факультет'
FROM 
	student
    INNER JOIN class ON student.class_id = class.id
    INNER JOIN faculty ON faculty.id = class.faculty_id
WHERE
	faculty.firstname = 'ФИВТ';