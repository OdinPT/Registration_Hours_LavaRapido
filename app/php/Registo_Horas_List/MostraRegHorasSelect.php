<?php
error_reporting(0);
include "../config.php";

$id = $_COOKIE['cookieID_RegHoras'];

$return_arr = array();

    $mysqli->set_charset("utf8"); // Convert DATA to utf8

    $query = "call RetornaRegistoSelec($id)" ;


    $result = mysqli_query($mysqli, $query);
    while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

    $row_array['ID_Reg_horas'] = $row['ID_Reg_horas'];
    $row_array['username'] = $row['username'];
    $row_array['Hora_entradaManha_rh'] = $row['Hora_entradaManha_rh'];
    $row_array['Descricao_Local'] = $row['Descricao_Local'];
    $row_array['Descricao_tipo_reg'] = $row['Descricao_tipo_reg'];
    $row_array['ID_Local_rh'] = $row['ID_Local_rh'];
    $row_array['Descrisao'] = $row['Descrisao'];


    array_push($return_arr,$row_array);
}
echo json_encode($return_arr);

?>
