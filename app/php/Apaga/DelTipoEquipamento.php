<?php
include "../config.php";
//error_reporting(0);

$IDTipoEqui = $_COOKIE['C'];

$Apaga = mysqli_query($mysqli, "call ApagaMultiuso('$IDTipoEqui')");

mysqli_close($mysqli);

?>

