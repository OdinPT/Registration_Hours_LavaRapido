<?php
include "../config.php";
error_reporting(0);

$mysqli->set_charset("utf8");

$LimMax = $_POST['LimMaxEquiLav'];
$Local = $_POST['IDLocalReglimEqui'];
$TipoEqui = $_POST['TipoEquipamentoRegLimEqui'];

$LimMax = mysqli_real_escape_string($mysqli, $LimMax);
$Local = mysqli_real_escape_string($mysqli, $Local);
$TipoEqui = mysqli_real_escape_string($mysqli, $TipoEqui);

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