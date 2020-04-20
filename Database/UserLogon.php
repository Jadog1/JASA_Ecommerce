<?php
$email = $_GET['username'];
$password = $_GET['password'];

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "softwareengineering";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM products WHERE email = '" . $email . "' AND password = '" . $password ."'";
$result = $conn->query($sql);
$row = $result->fetch_assoc();

if ($result->num_rows > 0) {
    echo $row["name"] . ", " . $row["isAdmin"];
} else {
    echo false;
}
$conn->close();