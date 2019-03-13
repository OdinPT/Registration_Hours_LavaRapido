<?php
error_reporting(0);
include "../config.php";

$id = $_COOKIE['cookieID_funcionario'];

$return_arr = array();

    $query = "call RetornaHorarioFuncionario($id)" ;

$mysqli->set_charset("utf8");

$result = mysqli_query($mysqli, $query);
while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {


$row_array['ID_Prev'] = $row['ID_Prev'];
$row_array['username'] = $row['username'];
$row_array['Tipo_Registo'] = $row['Tipo_Registo'];
$row_array['Hora_Prevista'] = $row['Hora_Prevista'];

    array_push($return_arr,$row_array);
}
echo json_encode($return_arr);

?>
