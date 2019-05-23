<?php
include "../config.php";
error_reporting(0);

$mysqli->set_charset("utf8");

$Local = $_POST['Local'];
$CPostal = $_POST['CPostal'];
$ID_Empresa = $_POST['ID_empresa'];

$Local = mysqli_real_escape_string($mysqli, $Local);
$CPostal = mysqli_real_escape_string($mysqli, $CPostal);
$ID_Empresa = mysqli_real_escape_string($mysqli, $ID_Empresa);

$query = mysqli_query($mysqli, "SELECT EXISTS (SELECT `ID_Local` FROM `locais` WHERE `Descricao_Local`= '$Local') as ID_Local");

        while($res = mysqli_fetch_array($query)){
	        $Valid = $res['ID_Local'];
        }
             if($Valid == 1){
                  header('HTTP', true, 402);
             } else {
                $query2 = mysqli_query($mysqli, " call InserirLocal('$Local','$CPostal','$ID_Empresa')");
             }

mysqli_close($mysqli);
?>