<?php
include "../config.php";
//error_reporting(0);

$LimMax = $_POST['LimMax'];
$tipoEqui = $_POST['TipoEquipamentoxS'];

$IDLocal= $_COOKIE['cookieID_Local'];


$mysqli->set_charset("utf8");

$query = mysqli_query($mysqli, "SELECT EXISTS (SELECT `ID_LimMaxCont` FROM Lim_Max_Cont
                                 WHERE `ID_Local_LimMaxCont` = '$IDLocal' and `Tipo_Equip_LimMaxCont`= '$tipoEqui') as Existe");

        while($res = mysqli_fetch_array($query))
        {
	        $Valid = $res['Existe'];
        }
               if($Valid == 1)
               {
                     header('HTTP', true, 503);
               } else  {

                $query2 = mysqli_query($mysqli, "call InsereLimEquipamento('$LimMax','$IDLocal','$tipoEqui')");
              }

mysqli_close($mysqli);
?>