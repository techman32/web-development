<?php

class SurveyPrinter
{
    public static function viewData(Survey $survey): void
    {
        if (!$survey->getEmail())
        {
            echo"<br>Unable to output data<br>";
            return;
        }

        echo
            '<p>Email: ' . $survey->getEmail() . "</p>" .
            '<p>Имя: ' . $survey->getFirstName() . "</p>" .
            '<p>Деятельность: ' . $survey->getActivity() . "</p>";
    }
}