<?php
 //error_reporting(0);
include "../config.php";
include "../Functions.php";

$username = $_COOKIE['cookieEmail'];

$mysqli->set_charset("utf8");
$return_arr = array();

$MaxIDRequest = GeraNumRequest($mysqli);

 $query = "call RetornaRequest ($MaxIDRequest)" ;   //Mando id pedido e retorna os registos

  $result = mysqli_query($mysqli, $query);

    while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

    $row_array['ID_Request'] = $row['ID_Request'];
    $row_array['ID_Tipo_Req'] = $row['ID_Tipo_Req'];
    $row_array['ID_Local_Req'] = $row['ID_Local_Req'];
    $row_array['Contagem_Req'] = $row['Contagem_Req'];
    $row_array['Data_Req'] = $row['Data_Req'];
    $row_array['ID_PPista'] = $row['ID_PPista'];
    $row_array['ID_Pedido'] = $row['ID_Pedido'];
    $row_array['Data_Pedido'] = $row['Data_Pedido'];
    $row_array['Desc_EquiLav'] = $row['Desc_EquiLav'];

       array_push($return_arr,$row_array);
    }
     echo json_encode($return_arr);
     mysqli_close($mysqli);
?>

