<?php
function getPostParameter(string $param): ?string
{
    return isset($_POST[$param]) && !empty($_POST[$param])
        ? $_POST[$param]
        : null;
}

function getUserData(string $email): ?Array
{
    $dir = '../../task2/data/';
    $fileName = $dir . strtolower($email) . '.txt';
    if (file_exists($fileName))
    {
        $lines = file($fileName);
        $fileData = [];
        foreach ($lines as $line)
        {
            $value = explode(':', $line);
            $fileData[$value[0]] = trim($value[1]);
        }
        return $fileData;
    }
    return null;
}

$email = getPostParameter('email');

if ($email === null)
{
    require('../src/pages/form.php');
}
else
{
    $data = getUserData($email);
    if ($data !== null)
    {
        $userName = $data['Имя'];
        $activity = $data['Должность'];
        require('../src/pages/formData.php');
    }
    else
    {
        require('../src/pages/emptyData.php');
    }
}