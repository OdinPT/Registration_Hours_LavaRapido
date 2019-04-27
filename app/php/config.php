<?php

// DB credentials.
define('DB_HOST','localhost');
define('DB_USER','cod');
define('DB_PASS' ,'cod');
define('DB_NAME', 'invest');

date_default_timezone_set('Europe/Lisbon');

// Establish database connection.
$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME) or die("Connect failed: %s\n". $conn -> error);

if (!$mysqli) {
   die("Connection failed: " . mysqli_connect_error());
}
//echo "Connected successfully";

?>
