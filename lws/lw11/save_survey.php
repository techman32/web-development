<?php
// require_once('./src/common.inc.php');
header('Content-type: application/json');

$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, true);

$email = strtolower($input['email']);
$name = $input['first_name'];
$activity = $input['activity'];
$agreement = $input['agreement'];

if ($email === '') {
    $response = array('status' => 500, 'message' => 'Invalid email');
    echo json_encode($response);
    exit;
}

if ($name === '') {
    $response = array('status' => 500, 'message' => 'Invalid name');
    echo json_encode($response);
    exit;
}

if ($name === 'Ошибка') {
    $response = array('status' => 500, 'message' => 'Так надо');
    echo json_encode($response);
    exit;
}



$file = 'data/' . $email . '.txt';
$content = 'Ваше имя: ' . $name . PHP_EOL . 
    'Email: ' . $email . PHP_EOL . 
    'Деятельность: ' . $activity . PHP_EOL . 
    'Согласие на рассылку: ' . $agreement . PHP_EOL;
file_put_contents($file, $content);

$response = array('status' => 200, 'message' => 'OK');
echo json_encode($response);