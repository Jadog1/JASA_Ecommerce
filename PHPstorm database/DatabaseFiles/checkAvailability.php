<?php
$itemName = $_GET['itemName'];
$quantity = $_GET['quantity'];

include 'IncludeFiles/generalConnectServer.php';

$sql = "SELECT Name, Quantity FROM Products  WHERE name = '" . $itemName . "' AND Quantity >=  " . $quantity;
$result = $conn->query($sql);
$row = $result->fetch_assoc();

if ($result->num_rows > 0)
    echo json_encode(true);
else {
     echo makeError("No items found");
}
$conn->close();