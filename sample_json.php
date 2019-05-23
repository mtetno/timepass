<?php
 
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

    $response = array();
    $response[0] = array(
        'id' => '1',
        'value1'=> 'value1',
        'value2'=> 'value2'
    );

echo json_encode($response); 
?>