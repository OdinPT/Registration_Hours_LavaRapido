<?php

// DB credentials.
define('DB_HOST','localhost');
define('DB_USER','cod');
define('DB_PASS' ,'cod');
define('DB_NAME', 'invest');

// Establish database connection.

$databaseHost = 'localhost';
$databaseName = 'invest';
$databaseUsername = 'cod';
$databasePassword = 'cod';

try
{
$dbh = new PDO("mysql:host=".DB_HOST.";dbname=".DB_NAME,DB_USER, DB_PASS,array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'utf8'"));
}
catch (PDOException $e)
{
exit("Error: " . $e->getMessage());
}

date_default_timezone_set('Europe/Lisbon');

$mysqli = mysqli_connect($databaseHost, $databaseUsername, $databasePassword, $databaseName);


?>
