<?php
$myKey = $_GET["myKey"];
include 'generalConnectServer.php';

$sql = "Select DuoAuthent from adminGeneratedKey Where DuoAuthent = '" . $myKey . "'";
$result = $conn->query($sql);

if ($result->num_rows == 0) {
    $conn->close();
    die(makeError("User does not have access"));
}