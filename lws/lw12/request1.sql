SELECT
	student.surname AS 'Фамилия',
    student.firstname AS 'Имя',
    student.patronymic AS 'Отчество',
    student.age AS 'Возраст',
    class.firstname AS 'Группа'
FROM 
	student
    INNER JOIN class ON student.class_id = class.id
WHERE
	student.age = 19;