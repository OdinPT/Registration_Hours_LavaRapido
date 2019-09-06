<?php
include "../config.php";

//$id = $_COOKIE['cookieID'];
$username = $_COOKIE['cookieEmail'];

$mysqli->set_charset("utf8");
$kappa = mysqli_query($mysqli, "SELECT * FROM funcionarios WHERE username = '$username'");

while($res = mysqli_fetch_array($kappa)) {
     $tipo = $res['ID_TipoFuncionario'];
}
if($tipo == 1 || $tipo == 2 || $tipo == 3) {
  Echo "Sucesso";
}
?>