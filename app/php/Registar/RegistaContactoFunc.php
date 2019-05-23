<?php

include "../config.php";
error_reporting(0);

$mysqli->set_charset("utf8");
$func = $_COOKIE['cookieID_funcionario'];

$Tipo_Contacto = $_POST['TipoContacto'];
$Descricao = $_POST['Descricao'];

$Tipo_Contacto = mysqli_real_escape_string($mysqli, $Tipo_Contacto);
$Descricao = mysqli_real_escape_string($mysqli, $Descricao);

$query2 = mysqli_query($mysqli, " call InserirContactos_do_Funcionario('$func','$Tipo_Contacto','$Descricao')");

mysqli_close($mysqli);
?>