<?php
include "../connection.php";
error_reporting(0);

$id = $_COOKIE['cookieID_RegHoras'];
$username = $_COOKIE['cookieUser2'];
$id2 = $_POST['ID_Reg_horas'];

$db = new dbObj();
$connString =  $db->getConnstring();

$query = mysqli_query($connString, "SELECT `Visivel_rh` FROM `registo_horas` WHERE `ID_Reg_horas`= $id");

        while($res = mysqli_fetch_array($query))
        {
	        $Visivel = $res['Visivel_rh'];
        }

if ($id == $id2)
{
    if ($Visivel == 6)
        {
            $Altera = mysqli_query($connString, "call AlteraEstadoRegHoras('$id','$username',7)");
        }
     else {
             $Altera1 = mysqli_query($connString, "call AlteraEstadoRegHoras('$id','$username',6)");
          }
}
else {
        header("HTTP/1.0 404 Not Found");
        header('HTTP', true, 500);
      }

mysqli_close($mysqli);

?>

