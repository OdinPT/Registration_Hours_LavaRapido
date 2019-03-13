<?php
include "../config.php";
//error_reporting(0);

$id13 = $_COOKIE['cookieID_HorarioFunc'];

   $Apaga = mysqli_query($mysqli, "call ApagaHorarioFunc('$id13')");

mysqli_close($mysqli);

?>

