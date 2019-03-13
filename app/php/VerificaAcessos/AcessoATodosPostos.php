<?php
error_reporting(0);
include "../config.php";

//getting id from url
$email = $_COOKIE['cookieEmail'];

$mysqli->set_charset("utf8");
$result = mysqli_query($mysqli, "call VerificaAdmin('$email')");

while($res = mysqli_fetch_array($result))
{
	$tipo= $res['ID_TipoFuncionario'];
}
if($tipo == 2 || $tipo == 3)
{
    echo "Sucesso";
}
else
{
    header("HTTP/1.0 404 Not Found");
    header('HTTP', true, 500);
}
?>