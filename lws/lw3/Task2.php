<?php
    header("Content-Type: text/plain");
    $text = trim($_GET['identifier']);
    $arrayText = str_split($text);
    $answer = 'Не введен ключ identifier или не присвоено значение ключу';

    if($text != null)
    {
        if(!ctype_alpha($arrayText[0]))
            $answer = 'NO: Так как идентификатор должен начинаться строго с буквы.';
        else
        {
            for($i = 1; $i < count($arrayText); $i++)
            {
                $checked = ctype_alpha($arrayText[$i]) || is_numeric($arrayText[$i]);
                if(!$checked)
                    $answer = 'NO: Так как идентификатор должен состоять исключительно из букв или цифр.';
                else
                    $answer = 'YES: Все хорошо:)';
            }
        }
    }

    echo $answer;