<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Roboto+Condensed&display=swap" rel="stylesheet">
    <title>Form</title>
    <link rel="stylesheet" href="src/style.css"/>
</head>
<body>
    <form class="form" method="post" action="/task2/web/formHandler.php">
        <img src="/task2/src/img/welcome.png" alt="welcome"/>
        <div class="form__title">Записаться на курс</div>
        <input class="form__input" type="text" placeholder="Ваше имя" name="userName" maxlength="40"/>
        <input class="form__input" type="email" placeholder="Email" name="email" maxlength="40"/>
        <select class="form__input form__select" name="activity" required>
            <option class="form__option" value="" selected hidden>Деятельность</option>
            <option class="form__option" value="Программист">Программист</option>
            <option class="form__option" value="Дизайнер">Дизайнер</option>
            <option class="form__option" value="Маркетолог">Маркетолог</option>
        </select>
        <div class="form__checkbox">
            <input class="checkbox__input" type="checkbox" name="checkbox" id="form-checkbox"/>
            <label for="form-checkbox">Согласен получать информационные материалы о старте курса</label>
        </div>
        <input class="form__submit" type="submit" value="Записаться на курс"/>
    </form>
</body>
</html>