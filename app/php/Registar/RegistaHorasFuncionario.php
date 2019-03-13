<?php
include "../config.php";
include "../Functions.php";

$local = $_POST['ID_Localx'];
$IDFunc = $_POST['ID_funcionariox'];
$DataX = $_POST['Horasx'];
$TipoReg = $_POST['ID_tipo_regx'];

# se a data for inserida com '/' converte para '-' e se a data for inserida com '-' mantém com '-'

$out0 = converSlashToDash($DataX);

$mysqli->set_charset("utf8");

    $query0 = mysqli_query($mysqli, "Select RetornaUsername('$IDFunc') as username from funcionarios limit 1");

        while($res0 = mysqli_fetch_array($query0))
        {
	        $username = $res0['username'];
        }

    $query = mysqli_query($mysqli, "SELECT EXISTS (SELECT `ID_LF`
                                        FROM `local_funcionarios`
                                         WHERE `ID_Funcionario_LF` = '$IDFunc' and `ID_Local_LF` = '$local') as ID_LF");

        while($res = mysqli_fetch_array($query))
        {
	        $Valid = $res['ID_LF'];
        }

        if($Valid == 1){

            $query2 = mysqli_query($mysqli, " call RegistarHoraFunc('$username','$local','$TipoReg','$out0')");

         } else {

                header('HTTP', true, 500);
         }

mysqli_close($mysqli);
?>