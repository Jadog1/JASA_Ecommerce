<?php
$email = $_GET['email'];
$password2 = $_GET['password'];

include 'IncludeFiles/generalConnectServer.php';

$sql = "SELECT fname, lname, adminKey, email FROM users  WHERE email = '" . $email . "' AND password = '" . $password2 ."'";
$result = $conn->query($sql);
$row = $result->fetch_assoc();

if ($result->num_rows > 0) {
    echo json_encode($row);
} else {
    echo json_encode(false);
}
$conn->close();