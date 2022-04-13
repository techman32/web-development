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
    $dir = '../src/data/' . strtolower($email) . '.txt';
    $fileData = createLine('Email', $email)
        . createLine('userName', getPostParameter('userName'))
        . createLine('activity', getPostParameter('activity'));
    echo file_put_contents($dir, $fileData) === false
        ? 'Data save error'
        : 'Data Saved';
}