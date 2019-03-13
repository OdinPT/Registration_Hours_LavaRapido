<?php
include "../config.php";
//error_reporting(0);

$id20 = $_COOKIE['cookiID_EquiLav'];

   $Apaga = mysqli_query($mysqli, "call ApagaRegEquipamentoLavagem('$id20')");

mysqli_close($mysqli);

?>

