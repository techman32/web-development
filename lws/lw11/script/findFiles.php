<?php
header('Content-type: application/json');
  
$response = [];
$files = glob('../data/*.txt');
foreach ($files as $filename) {
    array_push($response, file_get_contents($filename));
}

echo json_encode($response);