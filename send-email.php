<?php
$filename = "emails.txt";
try {
    $format = "Author: %s (email: %s); Subject: %s; Message: %s";
    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body, true);
    $msg = sprintf($format, $data["name"], $data["email"], $data["subject"], $data["message"]);
    file_put_contents($filename, $msg . "/n" , FILE_APPEND);
    mail("viktor.kukurba@gmail.com", "My site. " . $data["subject"], $msg);
    header('Content-Type: application/json');
    $response = new StdClass();
    $response->success = true;
    $response->data = $data;
    echo json_encode($response);
} catch(Exception $e) {
//  mail("viktor.kukurba@gmail.com", "Exception");
    file_put_contents($filename, $e->getMessage(), FILE_APPEND);
//  echo $e->getMessage();
}
?>