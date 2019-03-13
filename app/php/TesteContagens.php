<?php

//caso o funcionário só esteja registado em um local


include "config.php";

$username = $_COOKIE['cookieEmail'];
$mysqli->set_charset("utf8"); // Convert DATA to utf8

  $return_arr = array();


$query0 = "SELECT `ID_Funcionario_LF`,`ID_Local_LF` FROM `local_funcionarios` WHERE `ID_Funcionario_LF`=RetornaIdFuncionario('$username') ";

$result0 = mysqli_query($mysqli, $query0);

while ($row = mysqli_fetch_array($result0, MYSQLI_ASSOC)) {

        $ID_Local_LF = $row['ID_Local_LF'];
        echo " O local do funcionário é: ". $ID_Local_LF. "</br></br>";

}

?>

