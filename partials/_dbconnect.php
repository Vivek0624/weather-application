<?php
$server = "localhost";
$username = "root";
$password = "";
$database = "users";  // name of the db created in phpmyadmin

$conn = mysqli_connect($server,$username, $password, $database);

if(!$conn){
// echo "Successfully connected";
// }
// else {
  echo 'connection failed';
}
?>

<!-- die('Error: '. mysql_error() ) -->