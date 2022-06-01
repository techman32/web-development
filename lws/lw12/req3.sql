SELECT
	student.surname AS Фамилия,
    student.name AS Имя,
    student.patronymic AS Отчество,
    faculty.name AS Факультет
FROM 
	student
    INNER JOIN class ON student.class_id = class.id
    INNER JOIN faculty ON faculty.id = class.faculty_id
WHERE
	faculty.name = 'ФИВТ';