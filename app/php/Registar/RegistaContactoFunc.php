<?php

include "../config.php";
error_reporting(0);

$func = $_COOKIE['cookieID_funcionario'];

$Tipo_Contacto = $_POST['TipoContacto'];
$Descricao = $_POST['Descricao'];


$mysqli->set_charset("utf8");

$query2 = mysqli_query($mysqli, " call InserirContactos_do_Funcionario('$func','$Tipo_Contacto','$Descricao')");

mysqli_close($mysqli);
?>