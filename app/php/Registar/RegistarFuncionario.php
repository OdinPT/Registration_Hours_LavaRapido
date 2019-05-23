<?php
include "../config.php";
error_reporting(0);

$mysqli->set_charset("utf8");
$username = $_POST['username'];
$pass = $_POST['pass'];
$Niff = $_POST['niff'];

$Contact = $_POST['Contact'];
$TF = $_POST['TF'];
$LG = $_POST['LG'];
$CoockieFunc = $_POST['CoockieFunc'];
$Tolerancia = $_POST['ID_Tolerancia'];

$username = mysqli_real_escape_string($mysqli, $username);
$pass = mysqli_real_escape_string($mysqli, $pass);
$Niff = mysqli_real_escape_string($mysqli, $Niff);
$Contact = mysqli_real_escape_string($mysqli, $Contact);
$CoockieFunc = mysqli_real_escape_string($mysqli, $CoockieFunc);
$Tolerancia = mysqli_real_escape_string($mysqli, $Tolerancia);

$query = mysqli_query($mysqli, "SELECT EXISTS (SELECT `ID_funcionario` FROM `funcionarios` WHERE `username` = '$username') as ID_funcionario");

        while($res = mysqli_fetch_array($query))
        {
	        $Valid = $res['ID_funcionario'];
        }
               if($Valid == 1) {
                  header('HTTP', true, 500);
               } else {
                 $query2 = mysqli_query($mysqli, " call InserirFuncionario('$username','$pass','$Niff','$TF','$LG','$CoockieFunc','$Contact','$Tolerancia')");
               }

mysqli_close($mysqli);
?>