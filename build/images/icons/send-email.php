<?php
$filename = "emails";
try {
//$format = "Author: %s (email: %s); Subject: %s; Message: %s";
//$msg = sprintf($format, $_POST["name"], $_POST["email"], $_POST["subject"], $_POST["message"]);
$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);
echo $data["json"];
echo $data->json;
echo $request_body;
echo $HTTP_RAW_POST_DATA;
file_put_contents($filename, $request_body . '/n' , FILE_APPEND);
// send email "] . $_POST["email"] . $_POST["subject"] . $_POST["message"]
mail("viktor.kukurba@gmail.com", "Message");
//mail("viktor.kukurba@gmail.com", $msg);
echo $_POST["email"];
echo "done1";
echo "done2";
} catch(Exception $e) {
//  mail("viktor.kukurba@gmail.com", "Exception");
//file_put_contents($filename, $e->getMessage() , FILE_APPEND);
//  echo $e->getMessage();
}
?>