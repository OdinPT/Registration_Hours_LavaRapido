<?php
include "../config.php";
//error_reporting(0);

$id23 = $_COOKIE['cookieIDContactos'];

$Apaga = mysqli_query($mysqli, "call ApagaContactoFunc('$id23')");

mysqli_close($mysqli);

?>

