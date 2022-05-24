<?php
    header("Content-Type: text/plain");

    $info = [
        'first_name' => '',
        'last_name' => '',
        'email' => '',
        'age' => '',
    ];

    $info['email'] = $_GET['email'];

    if (! isset($info['email'])) 
    {
        echo 'Тебуется ключ email.';
    }
    elseif ($info['email'] === '') 
    {
        echo 'Ключ email без значения';
    }
    else
    {
        $fileName = './data/'.$info['email'].'.txt';
  
        if (file_exists($fileName)) 
        {
            $infoFile = file($fileName);
            $info['first_name'] = trim(substr($infoFile[0], strpos($infoFile[0], ':') + 1));
            $info['last_name'] = trim(substr($infoFile[1], strpos($infoFile[1], ':') + 1));
            $info['age'] = trim(substr($infoFile[3], strpos($infoFile[3], ':') + 1));
   
            $infoStr = '';
            $infoStr = $infoStr . 'First Name: ' . $info['first_name'] . PHP_EOL;
            $infoStr = $infoStr . 'Last Name: ' . $info['last_name'] . PHP_EOL;
            $infoStr = $infoStr . 'Email: ' . $info['email'] . PHP_EOL;
            $infoStr = $infoStr . 'Age: ' . $info['age'] . PHP_EOL;

            echo $infoStr;
        }
        else 
        {
            echo 'Ошибка чтения файла' . $fileName . ' !';
        }
    }
?>