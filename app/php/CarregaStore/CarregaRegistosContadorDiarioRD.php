<?php
 //error_reporting(0);
 include "../config.php";

$id = $_COOKIE['cookieContagemSelect'];

    $mysqli->set_charset("utf8");

      $return_arr = array();

      $query = "call RetornaRequestPedidoDiario('$id')" ;

  $result = mysqli_query($mysqli, $query);

    while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

     $row_array['ID_Request'] = $row['ID_Request'];
     $row_array['ID_Tipo_Req'] = $row['ID_Tipo_Req'];
     $row_array['ID_Local_Req'] = $row['ID_Local_Req'];
     $row_array['Contagem_Req'] = $row['Contagem_Req'];
     $row_array['Num_Equip'] = $row['Num_Equip'];

       array_push($return_arr,$row_array);
    }
     echo json_encode($return_arr);
  ?>

