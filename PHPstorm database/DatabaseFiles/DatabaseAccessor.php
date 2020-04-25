<?php
$q = $_GET['q'];
$reason = $_GET['reason'];

    include 'IncludeFiles/generalConnectServer.php';

    if($reason === "findProduct") {
        $sql = "SELECT name, description, price FROM products WHERE name LIKE '%" . $q . "%'";
        $result = $conn->query($sql);
        $row = $result->fetch_assoc();

        if ($result->num_rows > 0) {
            echo "Name: " . $row["name"] . " <br>Description: " . $row["description"] . " <br>Price: $" . $row["price"] . "<br>";
        } else {
            echo "0 results";
        }
    } else if($reason === "findCount") {
        $sql = "SELECT Count(*) AS count FROM products WHERE type = '" . $q . "'";
        $result = $conn->query($sql);
        $row = $result->fetch_assoc();

        if ($result->num_rows > 0) {
            echo "Count: " . $row["count"];
        } else {
            echo "0 results";
        }
    }
    $conn->close();