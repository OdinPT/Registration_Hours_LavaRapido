<?php
include "../config.php";
error_reporting(0);

$IDLocal = $_COOKIE['cookieID_Local'];
$TipoEquipamento = $_POST['TipoEquipamentoxS'];
$LimMax = $_POST['LimMax'];

$mysqli->set_charset("utf8");

$query0 = mysqli_query($mysqli, "SELECT max(`Num_EquiLav`) as MaxNumEqui FROM `Reg_Equipamentos_Lavagem` ");

        while($res0 = mysqli_fetch_array($query0)){

	        $MaxNumEqui = $res0['MaxNumEqui'];
	        $NumEqui = $MaxNumEqui + 1;
        }

$query1 = mysqli_query($mysqli, "SELECT EXISTS (SELECT `ID_LimMaxCont` FROM Lim_Max_Cont
                                 WHERE `ID_Local_LimMaxCont` = '$IDLocal' and `Tipo_Equip_LimMaxCont`= '$tipoEqui') as Existe1");

        while($res1 = mysqli_fetch_array($query1)){

	        $Existelim = $res1['Existe1'];
        }

$query = mysqli_query($mysqli, "select EXISTS (select * from Reg_Equipamentos_Lavagem where Num_EquiLav= '$NumEqui') as Valida");

        while($res = mysqli_fetch_array($query)){

	            $Valida = $res['Valida'];
        }

if($Valida == 1){
  header("HTTP/1.0 404 Not Found");

} else {

    $query2 = mysqli_query($mysqli, " call InserirEquipamentosLavagem('$IDLocal','$TipoEquipamento','$NumEqui')");

   if($Existelim == 1){
        header('HTTP', true, 503);

   } else {

      $query2 = mysqli_query($mysqli, "call InsereLimEquipamento('$LimMax','$IDLocal','$TipoEquipamento')");
   }
}

mysqli_close($mysqli);
?>