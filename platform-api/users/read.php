<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Headers: *");

$users = Array();
$con = $con = mysqli_connect("sql40.jnb1.host-h.net", "jestacvvqy_4", "TtgPUuy84MRVv5af8SX8", "platform_prototype");

$method = $_SERVER['REQUEST_METHOD'];

if($method === "GET") {
    if(isset($_GET['id'])) {
        $sql = "SELECT * FROM User WHERE user_id = " . $_GET['id'];
    } else if(isset($_GET['email'])) {
        $sql = "SELECT * FROM User WHERE email = " . $_GET['email'];
    } else {
        $sql = "SELECT * FROM User";
    }
}

if($result = mysqli_query($con, $sql)) {
    $i = 0;

    while($row = mysqli_fetch_assoc($result)) {
        $users[$i] = $row;
        $i++;
    }

    echo json_encode($users);
} else {
    http_response_code(404);
}
?>
