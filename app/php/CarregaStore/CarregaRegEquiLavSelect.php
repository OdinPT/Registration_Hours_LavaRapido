<?php

 //error_reporting(0);
 include "../config.php";

$id = $_COOKIE['cookieID_ContadoresRDP'];

    $mysqli->set_charset("utf8");
    $return_arr = array();

      $query = "call RetornaRegGridEquiLav('$id')" ;

  $result = mysqli_query($mysqli, $query);

    while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

     $row_array['ID_EquiLav'] = $row['ID_EquiLav'];
     $row_array['Local'] = $row['Local'];
     $row_array['TipoEquipamento'] = $row['TipoEquipamento'];
     $row_array['Contagem'] = $row['Contagem'];
     $row_array['Num_EquiLav'] = $row['Num_EquiLav'];

       array_push($return_arr,$row_array);
    }
     echo json_encode($return_arr);
  ?>

