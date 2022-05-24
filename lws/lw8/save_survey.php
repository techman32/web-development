<?php
require_once('./src/common.inc.php'); 
$requestSurveyLoader = new RequestSurveyLoader();
$surveyFileStorage = new SurveyFileStorage();

$survey = $requestSurveyLoader->createSurveyInfo();
SurveyFileStorage::saveSurveyToFile($survey);
header("Refresh: 0; url = /request.php");