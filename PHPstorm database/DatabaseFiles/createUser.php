<?php
$email = $_GET['email'];
$password2 = $_GET['password'];
$fname = $_GET['fname'];
$lname = $_GET['lname'];

include 'IncludeFiles/generalConnectServer.php';

$sql = "SELECT email FROM users  WHERE email = '" . $email . "'";
$result = $conn->query($sql);
$row = $result->fetch_assoc();

if ($result->num_rows > 0)
    echo makeError("Email account already in use");
  else {

    $myDate = date("Y-m-d");
    $sql = "INSERT INTO users (fname, lname, email, password, DateOfCreation)
VALUES ('" . $fname . "', '" . $lname . "', '" .  $email . "', '" . $password2 . "', '" . $myDate . "')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(true);
    } else
        echo makeError($conn->error);
}
$conn->close();