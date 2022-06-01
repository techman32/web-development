SELECT
	student.surname AS Фамилия,
    student.name AS Имя,
    student.patronymic AS Отчество,
    class.name AS Группа
FROM 
	student
    INNER JOIN class ON student.class_id = class.id
WHERE
	class.name = 'А-1';