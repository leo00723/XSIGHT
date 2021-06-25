
<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Headers: *");

$postdata = file_get_contents("php://input");
$con = mysqli_connect("sql40.jnb1.host-h.net", "jestacvvqy_4", "TtgPUuy84MRVv5af8SX8", "platform_prototype");

$method = $_SERVER['REQUEST_METHOD'];

if (isset($postdata) && !empty($postdata) && $method === 'POST') {
    $request = json_decode($postdata);

    $house_id = mysqli_real_escape_string($con, $request->house_id);
    $price = mysqli_real_escape_string($con, $request->price);
    $beds = mysqli_real_escape_string($con, $request->beds);
    $baths = mysqli_real_escape_string($con, $request->baths);
    $area = mysqli_real_escape_string($con, $request->area);
    $type = mysqli_real_escape_string($con, $request->type);
    $description = mysqli_real_escape_string($con, $request->description);
    $views = mysqli_real_escape_string($con, $request->views);
    $shares = mysqli_real_escape_string($con, $request->shares);
    $features = mysqli_real_escape_string($con, $request->features);
    $locality = mysqli_real_escape_string($con, $request->locality);
    $pictures = mysqli_real_escape_string($con, $request->pictures);
    $contact_details = mysqli_real_escape_string($con, $request->contact_details);
    $date_listed = mysqli_real_escape_string($con, $day->format('Y-m-d H:i:s'));
    $status = mysqli_real_escape_string($con, $request->status);
    $floor_plans = mysqli_real_escape_string($con, $request->floor_plans);
 
    $sql = "INSERT INTO House (house_id, price, beds, baths, area, type, description, views, 
    shares, features, locality, pictures, contact_details, date_listed, status, floor_plans) 
    VALUES ('{$house_id}', '{$price}', '{$beds}', '{$baths}', '{$area}',
             {$type}', '{$description}', '{$views}', '{$shares}', '{$features}',
             {$locality}', '{$pictures}', '{$contact_details}', '{$date_listed}', '{$status}', '{$floor_plans}'
            )";

    if (mysqli_query($con, $sql)) {
        echo json_encode('Success');
    } else {
        echo json_encode('Error');
    }
} else {
    echo json_encode('Failure');
}
?>
