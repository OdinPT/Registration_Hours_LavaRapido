<?php
include "../config.php";
error_reporting(0);

$mysqli->set_charset("utf8");

$nomeEmpresa = $_POST['nomeEmpresa'];
$NiffEmpresa = $_POST['NiffEmpresa'];

$nomeEmpresa = mysqli_real_escape_string($mysqli, $nomeEmpresa);
$NiffEmpresa = mysqli_real_escape_string($mysqli, $NiffEmpresa);

$query = mysqli_query($mysqli, "SELECT EXISTS (SELECT `ID_empresa` FROM `empresa` WHERE `Nome_Empresa` = '$nomeEmpresa') as ID_empresa");

        while($res = mysqli_fetch_array($query))
        {
	        $Valid = $res['ID_empresa'];
        }
               if($Valid == 1)
               {
                     header('HTTP', true, 500);
               } else  {

                $query2 = mysqli_query($mysqli, " call InserirEmpresa('$nomeEmpresa','$NiffEmpresa')");
              }

mysqli_close($mysqli);
?>