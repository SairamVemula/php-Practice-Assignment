<?php

$user_id=$_GET['user_id'];

include 'include/db.php';
$sql = "select * from user where id=$user_id;";
$result = $conn->query($sql);
// echo $result;
$jsonobj=[];
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $jsonobj=$row;
    }
} else {
    echo "0 results";
}

echo json_encode($jsonobj);

$conn->close();