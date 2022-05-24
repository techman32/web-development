<?php

class SurveyFileStorage
{
    private const FOLDER_DATA = './data/';
    private const FILE_FIRST_NAME = "First Name";
    private const FILE_EMAIL = "Email";
    private const FILE_ACTIVITY = "Activity";
    private const DELIMETER_PARAMETERS = ": ";

    private static function createFileName(Survey $survey): string
    {
        return self::FOLDER_DATA . $survey->getEmail() . '.txt';
    }

    public static function loadSurveyFromFile(Survey $survey): Survey
    {
        $fileName = self::createFileName($survey);
        if (file_exists($fileName))
        {
            $tempArray = file($fileName);
            $arrayData = [];
            foreach ($tempArray as $line)
            {
                $tempString = explode(self::DELIMETER_PARAMETERS, $line);
                $arrayData[$tempString[0]] = $tempString[1] ?? null;
            }
            return new Survey(
                $arrayData[self::FILE_EMAIL], 
                $arrayData[self::FILE_FIRST_NAME], 
                $arrayData[self::FILE_ACTIVITY]
            );
        }  
        else
        {
            echo "<br>Impossible email (for load Survey from file)<br><br>";
            return new Survey(null, null, null);
        }      
    }

    public static function saveSurveyToFile(Survey $survey): void
    {        
        if (!$survey->getEmail())
        {
            echo "<br>Impossible email (for save Survey to file)<br><br>";
            return;
        }

        $fileName = self::createFileName($survey);
        $tempEmail = self::FILE_EMAIL . self::DELIMETER_PARAMETERS;
        $tempFirstName = self::FILE_FIRST_NAME . self::DELIMETER_PARAMETERS;
        $tempActivity = self::FILE_ACTIVITY . self::DELIMETER_PARAMETERS;

        if (file_exists($fileName))
        {
            $tempArray = file($fileName);
            if ($survey->getFirstName() !== null)
            {
                $tempArray[1] = $tempFirstName . $survey->getFirstName() . "\n";
            }
            if ($survey->getActivity() !== null)
            {
                $tempArray[2] = $tempActivity . $survey->getActivity();
            }
            file_put_contents($fileName, $tempArray);
        }
        else
        {
            if (!file_exists(self::FOLDER_DATA))
            {
                mkdir(self::FOLDER_DATA);
            }
            $surveyTxt = fopen($fileName, "w");
            fwrite($surveyTxt, $tempEmail . $survey->getEmail() . "\n");
            fwrite($surveyTxt, $tempFirstName . $survey->getFirstName() . "\n");          
            fwrite($surveyTxt, $tempActivity . $survey->getActivity());
            fclose($surveyTxt);
        }
    }   
}