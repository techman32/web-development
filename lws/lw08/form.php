<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset='utf-8'>
</head>
<body>
	<div class="main__questionnaire">
		<img class="questionnaire__image" src="img/welcome.png" alt="Астронафт">
		<form action="/save_survey.php">
			<p class="form__headline">Записаться на курс</p>
			<input class="form__name form-cell" type="text" placeholder="Ваше имя" name="first_name"><br>
			<input class="form__email form-cell" type="email" placeholder="Email" name="email"><br>
			<select class="form__activity form-cell" name="activity">
				<option>Деятельность</option>
				<option value="Программист">Программист</option>
				<option value="Дизайнер">Дизайнер</option>
				<option value="Маркетолог">Маркетолог</option>
			</select>
			<br>
			<input class="form__checkbox" type="checkbox">
			<label class="form__checkbox-text" for="checkbox">Согласен получать информационные материалы о старте курса</label><br>
			<input class="form__button" type="submit" value="Записаться на курс">
		</form>
	</div>
</body>
</html>