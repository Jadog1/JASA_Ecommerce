<?php
$myKey = $_GET['myKey'];

include 'IncludeFiles/ProductClass.php';
include 'IncludeFiles/generalAdminCheck.php';

$sql = "SELECT DISTINCT p.name as Name, SUM(o.quantity) as Quantity, SUM(p.price) as Price, SUM(o.Quantity)*SUM(p.Price) as Total FROM orders o, products p WHERE o.ProductName = p.name GROUP BY p.name ORDER BY Total DESC";
$result = $conn->query($sql);
$resultsArray = array();

if ($result->num_rows > 0) {
    // output data of each row
    array_push($resultsArray, true); //This is to show that the data passed through successfully
    while($row = $result->fetch_assoc())
        array_push($resultsArray, new Product($row["Name"], $row["Price"], $row["Quantity"], $row["Total"]));

    echo json_encode($resultsArray);
} else {
    echo makeError("There hasn't been any orders!");
}
$conn->close();