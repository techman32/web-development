<?php
function getPostParameter(string $param): ?string
{
    return isset($_POST[$param]) && !empty($_POST[$param])
        ? $_POST[$param]
        : null;
}

function createLine(string $key, ?string $value): string
{
    return $key . ': ' . $value . PHP_EOL;
}

$email = getPostParameter('email');
if ($email !== null)
{
    $dir = 'data/' . strtolower($email) . '.txt';
    $fileData = createLine('Email', $email)
        . createLine('Имя', getPostParameter('userName'))
        . createLine('Должность', getPostParameter('activity'));
    echo file_put_contents($dir, $fileData) === false
        ? 'Data save error'
        : 'Data saved';
}
else
{
    echo 'Empty email value';
}