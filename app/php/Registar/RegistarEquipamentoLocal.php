<?php
include "../config.php";
error_reporting(0);

$mysqli->set_charset("utf8");

$IDLocal = $_POST['IDLocal'];
$TipoEquipamento = $_POST['TipoEquipamento'];
$NumEqui = $_POST['NumEqui'];

$IDLocal = mysqli_real_escape_string($mysqli, $IDLocal);
$TipoEquipamento = mysqli_real_escape_string($mysqli, $TipoEquipamento);
$NumEqui = mysqli_real_escape_string($mysqli, $NumEqui);

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