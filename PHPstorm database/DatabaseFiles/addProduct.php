<?php
$name = $_GET['name'];
$description = $_GET['desc'];
$price = intval($_GET['price']);
$quantity = intval($_GET['quantity']);
$model = $_GET['model'];
$dimensions = $_GET['dim'];
$type = $_GET['type'];

include 'IncludeFiles/generalAdminCheck.php';

$sql = "SELECT name FROM products  WHERE name = '" . $name . "'";
$result = $conn->query($sql);
$row = $result->fetch_assoc();

if ($result->num_rows > 0)
    echo makeError("Product already exists");
  else {
    $sql = "INSERT INTO products (name, description, price, quantity, model, dimensions, type)
VALUES ('" . $name . "', '" . $description . "', '" .  $price . "', '" . $quantity . "', '" . $model . "', '" . $dimensions . "', '" . $type . "')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(true);
    } else
        echo makeError($conn->error);

}
$conn->close();

