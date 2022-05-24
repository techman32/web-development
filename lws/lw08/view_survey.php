<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset='utf-8'>
	<link rel='stylesheet' type='text/css' href='css/style.css'>
	<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&family=Roboto+Condensed&display=swap" rel="stylesheet">
</head>
<body>
	<div class="survey-viewer">
        <?php
            require_once('./src/common.inc.php'); 
            $requestSurveyLoader = new RequestSurveyLoader();
            $surveyFileStorage = new SurveyFileStorage();

            $survey = $requestSurveyLoader->createSurveyInfo();
            $loadedSurvey = $surveyFileStorage->loadSurveyFromFile($survey);
            SurveyPrinter::viewData($loadedSurvey);
        ?>

	</div>
</body>
</html>