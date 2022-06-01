SELECT
	student.id,
	student.surname AS Фамилия,
    student.name AS Имя,
    student.patronymic AS Отчество,
    class.name AS Группа,
    faculty.name AS Факультет
FROM 
	student
    INNER JOIN class ON student.class_id = class.id
    INNER JOIN faculty ON faculty.id = class.faculty_id
WHERE
	student.surname = 'Клочко' AND student.name = 'Александр';