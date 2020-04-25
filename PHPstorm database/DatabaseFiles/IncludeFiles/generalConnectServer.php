<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "softwareengineering";

include 'IncludeFiles/ErrorClass.php';
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die(makeError($conn->connect_error));
}