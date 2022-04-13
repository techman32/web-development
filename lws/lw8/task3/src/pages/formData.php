<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Roboto+Condensed&display=swap" rel="stylesheet">
    <title>FormData</title>
    <link rel="stylesheet" href="/task3/src/pages/style.css"/>
</head>
<body>
<div class="container">
    <div class="item">
        Email: <?= $email ?? '' ?>
    </div>
    <div class="item">
        Имя: <?= $userName ?? '' ?>
    </div>
    <div class="item">
        Должность: <?= $activity ?? '' ?>
    </div>
</div>
</body>
</html>