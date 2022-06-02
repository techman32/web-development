SELECT
	student.id,
	student.surname AS Фамилия,
    student.firstname AS Имя,
    student.patronymic AS Отчество,
    class.firstname AS Группа,
    faculty.firstname AS Факультет
FROM 
	student
    INNER JOIN class ON student.class_id = class.id
    INNER JOIN faculty ON faculty.id = class.faculty_id
WHERE
	student.surname = 'Бусыгин' AND student.firstname = 'Алексей';