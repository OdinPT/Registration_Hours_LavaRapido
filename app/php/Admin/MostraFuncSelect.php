<?php
error_reporting(0);
include "../config.php";

$mysqli->set_charset("utf8");

$id = $_COOKIE['cookieID_funcionario'];

$return_arr = array();
 $query = "call RetornaFuncionario('$id')" ;

$result = mysqli_query($mysqli, $query);
while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

    $row_array['ID_funcionario'] = $row['ID_funcionario'];
    $row_array['username02'] = $row['username02'];
    $row_array['pass02'] = $row['pass02'];
    $row_array['NIFF_funcionario'] = $row['NIFF_funcionario'];
    $row_array['Descricao__tipofunc'] = $row['Descricao__tipofunc'];
    $row_array['login'] = $row['login'];
    $row_array['Ccookie_funcionario'] = $row['Ccookie_funcionario'];
    $row_array['Contacto_predef'] = $row['Contacto_predef'];
    $row_array['Hora_Tolerancia'] = $row['Hora_Tolerancia'];

    array_push($return_arr,$row_array);
}
echo json_encode($return_arr);
mysqli_close($mysqli);
?>
