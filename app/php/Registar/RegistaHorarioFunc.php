<?php
include "../config.php";

$mysqli->set_charset("utf8");

$func = $_COOKIE[cookieID_funcionario];
$TipoReg = $_POST['TipoRegistoRegHoras'];
$Hora = $_POST['HoraFunc'];

  $query = mysqli_query($mysqli, " call InserirRegistoHorasFuncionario('$func','$TipoReg','$Hora')");

mysqli_close($mysqli);
?>