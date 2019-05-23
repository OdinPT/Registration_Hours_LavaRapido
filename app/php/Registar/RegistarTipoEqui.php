<?php
include "../config.php";
$mysqli->set_charset("utf8");

$TipoEqui = $_POST['TipoEqui'];



$query0 = mysqli_query($mysqli, "call InsereTipoEqui('$TipoEqui')");

mysqli_close($mysqli);
?>