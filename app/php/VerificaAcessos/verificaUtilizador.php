<?php
include "../config.php";

//$id = $_COOKIE['cookieID'];
$IDFuncEstadox = $_COOKIE['cookieEmail'];

$mysqli->set_charset("utf8");
$kappa = mysqli_query($mysqli, "SELECT * FROM funcionarios WHERE username='$IDFuncEstadox'");

        while($res = mysqli_fetch_array($kappa))
        {
	        $tipo = $res['ID_TipoFuncionario'];
	    }
    if($tipo == 1 || $tipo == 2 || $tipo == 3)
    {
     Echo "Sucesso";
    }
  else
     {
          header("HTTP/1.0 404 Not Found");
                        header('HTTP', true, 500);
      }
?>