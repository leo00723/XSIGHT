<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Headers: *");

$postdata = file_get_contents("php://input");
$con = mysqli_connect("sql40.jnb1.host-h.net", "jestacvvqy_4", "TtgPUuy84MRVv5af8SX8", "platform_prototype");

$method = $_SERVER['REQUEST_METHOD'];

if(isset($postdata) && !empty($postdata) && $method === 'POST') {
    $request = json_decode($postdata);

    $id = mysqli_real_escape_string($con, $request->user_id);
    $first_name = mysqli_real_escape_string($con, $request->first_name);
    $last_name = mysqli_real_escape_string($con, $request->last_name);
    $email = mysqli_real_escape_string($con, $request->email);
    $password = hash("sha256", mysqli_real_escape_string($con, $request->password));

    $sql = "INSERT INTO User (user_id, first_name, last_name, email, password) VALUES ('{$id}', '{$first_name}', '{$last_name}', '{$email}', '{$password}')";

    if(mysqli_query($con, $sql)) {
        echo json_encode('Success');
    } else {
        echo json_encode('Error');
    }
} else {
    echo json_encode('Failure');
}
?>
