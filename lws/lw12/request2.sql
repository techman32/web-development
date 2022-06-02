SELECT
	student.surname AS 'Фамилия',
    student.firstname AS 'Имя',
    student.patronymic AS 'Отчество',
    class.firstname AS 'Группа'
FROM 
	student
    INNER JOIN class ON student.class_id = class.id
WHERE
	class.firstname = 'А-1';