<?php

//Initial response is NULL
$response = null;

//Initialize appropriate action and return as HTML response
if (isset($_POST["action"])) {
    $action = $_POST["action"];

    switch ($action) {
        case "SendMessage": {
                if (isset($_POST["firstname"]) && isset($_POST["email"]) && isset($_POST["lastname"]) &&  isset($_POST["contact-number"]) && isset($_POST["message"]) 
                && isset($_POST["contact-method"]) && !empty($_POST["firstname"]) && !empty($_POST["email"]) && !empty($_POST["lastname"])) {
                    $message = "Hello. You are needed on the Jestalt website.";
                    $message .= "<br/>";
                    $message .= "Here are the details of the communication:";
                    $message .= "<br/>";
                    $message .= "Their name: " . $_POST["firstname"] . " " . $_POST["lastname"];
                    $message .= "<br/>";
                    $message .= "Their contact email: " . $_POST["email"];
                    $message .= "<br/>";
                    $message .= "Their contact number (which is optional): " . $_POST["contact-number"];
                    $message .= "<br/>";
                    $message .= "Their preferred method of contact: " . $_POST["contact-method"];
                    $message .= "<br/>";
                    $message .= "Their message (this might be empty): " . $_POST["message"];
                    $message .= "<br/><br/>";

                    $response = (SendEmail($message, "New communication from Jestalt website", "info@jestalt.com", "info@jestalt.com")) ? 'Thank you for contacting us! Someone will be in contact with you shortly.' : 'Your message could not be sent. Please try again.';
                } else {
                    $response = 'Your message could not be sent. Please try again.';
                }
            }
        break;
        default: {
                $response = "Invalid action is set! Action is: " . $action;
        }
    }
}


if (isset($response) && !empty($response) && !is_null($response)) {
    echo '{"ResponseData":' . json_encode($response) . '}';
}

function SendEmail($message, $subject, $from, $to) {
    $isSent = false;
    // Content-type header
    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    // Additional headers
    // $headers .= 'To: ' . $to . "\r\n";
    $headers .= 'From: ' . $from . "\r\n";

    mail($to, $subject, $message, $headers);
    if (mail) {
        $isSent = true;
    }
    return $isSent;
}

?>
