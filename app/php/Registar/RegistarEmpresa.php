<?php

include "../config.php";
error_reporting(0);

$nomeEmpresa = $_POST['nomeEmpresa'];
$NiffEmpresa = $_POST['NiffEmpresa'];

$mysqli->set_charset("utf8");

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