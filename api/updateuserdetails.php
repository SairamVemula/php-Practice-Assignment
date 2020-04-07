<?php


header("Content-Type: application/json"); 
  
$data = json_decode(file_get_contents("php://input"));

echo var_dump($data->fname);
// '{"fname":"Sairam","lname":"Vemula","Email":"svemula@insperoo.com","Mobile":"9762224974","Address":"Flat no 304,Sriranganagar,Near Hanuman Mandir\nAgra Road"}'
// echo "UPDATE user SET fname='".$date['fname']."',lname='".$date['lname']."',Email='".$date['Email']."',Mobile=?'".$date['Mobile']."'Address='".$date['Address']."' WHERE id=1";

include 'include/db.php';

$stmt = $conn->prepare('UPDATE user SET fname=?,lname=?,Email=?,Mobile=?,Address=? WHERE `id`=1');

// ,`Email`=?,`Mobile`=?,`Address`=? 
$bb=$stmt->bind_param('sssss',$data->fname,$data->lname,$data->Email,$data->Mobile,$data->Address);


// $stmt->bind_param('sssss', $date['fname'], $date['lname'], $date['Email'], $date['Mobile'], $date['Address']);

$stmt->execute();

$stmt->close();
// $sql = "UPDATE user SET fname='".$date->fname."',lname='".$date->lname."',Email='".$date->Email."',Mobile='".$date->Mobile."',Address='".$date->Address."' WHERE id=1";
// $conn->query($sql);
$conn->close();
?>