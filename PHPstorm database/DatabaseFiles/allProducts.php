<?php
include 'IncludeFiles/ProductClass.php';
include 'IncludeFiles/generalConnectServer.php';

$sql = "SELECT * FROM Products";
$result = $conn->query($sql);
$resultsArray = array();

if ($result->num_rows > 0) {
    // output data of each row
    array_push($resultsArray, true); //This is to show that the data passed through successfully
    while($row = $result->fetch_assoc())
        array_push($resultsArray, new ProductFull($row["Name"], $row["Description"], $row["Price"], $row["Quantity"], $row["Model"], $row["Dimensions"], $row["type"]));

    echo json_encode($resultsArray);
} else {
    echo makeError("There hasn't been any orders!");
}
$conn->close();