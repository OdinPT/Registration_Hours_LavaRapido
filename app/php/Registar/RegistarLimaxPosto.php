<?php
include "../config.php";
error_reporting(0);

$LimMax = $_POST['LimMaxEquiLav'];
$Local = $_POST['IDLocalReglimEqui'];
$TipoEqui = $_POST['TipoEquipamentoRegLimEqui'];

$mysqli->set_charset("utf8");

$query = mysqli_query($mysqli, "SELECT EXISTS (SELECT `ID_LimMaxCont` FROM Lim_Max_Cont
                                 WHERE `ID_Local_LimMaxCont` = '$Local' and `Tipo_Equip_LimMaxCont`= '$TipoEqui') as Existe");

        while($res = mysqli_fetch_array($query))
        {
	        $Valid = $res['Existe'];
        }
            if($Valid == 1){
                header('HTTP', true, 503);
              } else  {
                $query2 = mysqli_query($mysqli, " call InsereLimEquipamento('$LimMax','$Local','$TipoEqui')");
              }

mysqli_close($mysqli);
?>