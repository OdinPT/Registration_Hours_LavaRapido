<?php
include "../config.php";
//error_reporting(0);

$IDFuncionario = $_COOKIE['cookieID_funcionario'];
$IDLocal = $_POST['ID_Localx'];

$mysqli->set_charset("utf8");

$query = mysqli_query($mysqli, "SELECT EXISTS (SELECT `ID_LF` FROM `local_funcionarios` WHERE `ID_Funcionario_LF`= '$IDFuncionario' and `ID_Local_LF` = '$IDLocal') as ID_LF");

        while($res = mysqli_fetch_array($query)){
	        $Valid = $res['ID_LF'];
         }
           if($Valid == 1){
                header('HTTP', true, 402);
           } else {
             $query2 = mysqli_query($mysqli, " call InserirlFuncionarioLocal('$IDFuncionario','$IDLocal')");
           }

mysqli_close($mysqli);
?>