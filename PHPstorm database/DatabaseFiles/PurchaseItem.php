<?php
$itemName = $_GET['itemName'];
$quantity = $_GET['quantity'];
$userEmail = $_GET['email'];

include 'IncludeFiles/generalConnectServer.php';

$sql = "SELECT Name, Quantity FROM Products  WHERE name = '" . $itemName . "' AND Quantity >=  " . $quantity;
$result = $conn->query($sql);
$row = $result->fetch_assoc();

if ($result->num_rows == 0)
    echo makeError("No such product exists, or ordered quantity is more than quantity available");
else {

    $updatedQuantity = intval($row["Quantity"]) - $quantity;
    $sql = "UPDATE Products Set Quantity = " . $updatedQuantity . " WHERE Name = '" . $itemName . "'";

    if ($conn->query($sql) === TRUE) {
        $myDate = date("Y-m-d");
        $sql2 = "INSERT INTO Orders (ProductName, Quantity, PurchaseDate, PurchasedBy) VALUES ('" . $itemName . "', " . $quantity . ", '" . $myDate . "', '" . $userEmail . "')";

        if($conn->query($sql2) === TRUE)
            echo json_encode(true);
        else
            echo makeError("Failed to update Orders table, " . $conn->error);
    } else
        echo makeError("Failed to update Products table, " . $conn->error);
}
$conn->close();