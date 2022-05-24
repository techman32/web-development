<?php

class RequestSurveyLoader
{
    private const GET_FIRST_NAME = "first_name";
    private const GET_ACTIVITY = "activity";
    private const GET_EMAIL = "email";

    public function createSurveyInfo(): Survey
    {
        if (!$_GET[self::GET_EMAIL]) 
        {
            echo "<br>Impossible email (for create Survey)<br><br>";
            return new Survey(null, null, null, null);
        }
        $email = strtolower($_GET[self::GET_EMAIL]);
        $firstName = $_GET[self::GET_FIRST_NAME] ?? null;  
        $activity = $_GET[self::GET_ACTIVITY] ?? null;

        return new Survey($email, $firstName, $activity);
    }
}