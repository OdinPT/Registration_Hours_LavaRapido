<?php
error_reporting(0);

include "../config.php";

$username = $_COOKIE['cookieEmail'];
$mysqli->set_charset("utf8");

$query = mysqli_query($mysqli, "call RegLogOut('$username')");

mysqli_close($mysqli);
?>