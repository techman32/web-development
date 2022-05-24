<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset='utf-8'>
	<title>Don't do it</title>
	<link rel='stylesheet' type='text/css' href='css/style.css'>
	<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&family=Roboto+Condensed&display=swap" rel="stylesheet">
</head>
<body>
	<div class="header">
		<img class="header__logo" src="img/dont_do_it.svg" alt="Не делай это">
		<div class="header-right-content">
			<nav class="header__navigation">
				<a class="navigation__what-will-be navigation-text" href="#">Что будет на курсе?</a>
				<a class="navigation__questions navigation-text" href="#">Вопросы</a>
				<a class="navigation__author navigation-text" href="#">Автор</a>
			</nav>		
			<a class="button-registration" href="#">
				<p class="header__button-registration">Записаться на курс</p> 
			</a>
		</div>		
	</div>

	<div class="main">
		<div class="main__front-page">
			<div class="front-page__info">
				<p class="info__headline">Не <span class="text_extra">делай</span> это</p>
				<p class="info__about">Онлайн-курс для творческих людей, о том, как управлять своим временем</p>
				<a class="button-registration" href="#">
					<p class="info__button-registration">Записаться на курс</p>
				</a>
			</div>
			<img class="front-page__image" src="img/busy.png" alt="Занятой">
		</div>

		<div class="main__short-description">
			<div class="short-description__panel">
				<div class="panel__time">
					<img class="time__image" src="img/time.svg" alt="Часы">
					<p class="time__text">Для тех, у кого слишком много идей и слишком мало времени</p>					
				</div>
				<div class="panel__notebook">
					<img class="notebook__image" src="img/notebook.svg" alt="Заметки">
					<p class="notebook__text">Метод «списка не дел», который позволит успевать и реализовывать</p>					
				</div>
				<div class="panel__target">
					<img class="target__image" src="img/target.svg" alt="Прицел">
					<p class="target__text">Курс научит творческих людей сосредоточиваться</p>					
				</div>
			</div>
		</div>

		<div class="main__deadline">
			<div class="deadline__fail">
				<img class="fail__image" src="img/finances.png" alt="Финансы">
				<div class="fail__paragrph">
					<p class="fail__headline deadline-headline">Ты не успеешь</p>
					<p class="fail__text deadline-text">Всех творческих людей объединяет одна проблема - отсутствие времени на реализацию идей. Как прибавить суткам часы, рассмотрим в нашем курсе.</p>
				</div>				
			</div>
			<div class="deadline__again">				
				<div class="again__paragrph">
					<p class="again__headline deadline-headline">Опять дедлайн</p>
					<p class="again__text deadline-text">В мире, где столько всего интересного, когда же успевать жить?</p>				
				</div>
				<img class="again__image" src="img/mind_blowing.png" alt="Сногсшибательный">				
			</div>
		</div>

		<div class="main__opportunities">
			<p class="opportunities__headline">На курсе ты <span class="text_extra">сможешь</span></p>
			<div class="opportunities-content_flex">
				<div class="opportunities__first block-opportunities">
					<div class="opportunities-content__first">
						<img class="opportunities__first-image" src="img/one_finger.svg" alt="Первое">
						<p class="opportunities__first-text opportunities-text">Понять, что нужно делать, а что делать не стоит.</p>
					</div>				
				</div>
				<div class="opportunities__second block-opportunities">
					<div class="opportunities-content__second">
						<img class="opportunities__second-image" src="img/two_fingers.svg" alt="Второе">
						<p class="opportunities__second-text opportunities-text">Перестать себя искусственно ограничивать.</p>
					</div>
				</div>
				<div class="opportunities__third block-opportunities">
					<div class="opportunities-content__third">
						<img class="opportunities__third-image" src="img/three_fingers.svg" alt="Третье">
						<p class="opportunities__third-text opportunities-text">Определить сильные стороны<br>и начать использовать слабые.</p>
					</div>
				</div>
				<div class="opportunities__fourth block-opportunities">
					<div class="opportunities-content__fourth">
						<img class="opportunities__fourth-image" src="img/four_fingers.svg" alt="Четвертое">
						<p class="opportunities__fourth-text opportunities-text">Научиться достигать любой цели<br>в 3 понятных шага.</p>
					</div>
				</div>
				<div class="opportunities__fifth block-opportunities">
					<div class="opportunities-content__fifth">
						<img class="opportunities__fifth-image" src="img/five_fingers.svg" alt="Пятое">
						<p class="opportunities__fifth-text opportunities-text">Сотрудничать эффективно<br>и с правильными людьми.</p>
					</div>
				</div>
				<div class="opportunities__sixth block-opportunities">
					<div class="opportunities-content__sixth">
						<img class="opportunities__sixth-image" src="img/six_fingers.svg" alt="Шестое">
						<p class="opportunities__sixth-text opportunities-text">Оптимизировать общение с клиентами и проведение совещаний.</p>
					</div>
				</div>
			</div>
		</div>
	
		<?php include 'form.php'; ?>

	</div>

	<div class="footer">
		<img class="footer__logo" src="img/dont_do_it(neg).svg">
	</div>	
</body>
</html>