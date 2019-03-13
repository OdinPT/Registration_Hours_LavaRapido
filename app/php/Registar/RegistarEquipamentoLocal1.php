<?php
include "../config.php";
error_reporting(0);

$IDLocal = $_COOKIE['cookieID_Local'];
$TipoEquipamento = $_POST['TipoEquipamentoxS'];
$NumEqui = $_POST['NumEquix'];

$mysqli->set_charset("utf8");

$query = mysqli_query($mysqli, "select EXISTS (select * from Reg_Equipamentos_Lavagem where Num_EquiLav= '$NumEqui') as Valida");

        while($res = mysqli_fetch_array($query)){
	        $Valida = $res['Valida'];
        }

if($Valida == 1){
  header("HTTP/1.0 404 Not Found");

} else {
    $query2 = mysqli_query($mysqli, " call InserirEquipamentosLavagem('$IDLocal','$TipoEquipamento','$NumEqui')");
}



mysqli_close($mysqli);
?>