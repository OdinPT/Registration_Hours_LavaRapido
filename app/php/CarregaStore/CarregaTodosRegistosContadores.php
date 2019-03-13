<?php

 //error_reporting(0);
 include "../config.php";

    $mysqli->set_charset("utf8");

      $return_arr = array();

      $query = "call RetornaTodosRegistosContador " ;

  $result = mysqli_query($mysqli, $query);

    while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

     $row_array['ID_Pista'] = $row['ID_Pista'];
     $row_array['Tipo_Equipamento'] = $row['Tipo_Equipamento'];
     $row_array['Local'] = $row['Local'];
     $row_array['Contagem'] = $row['Contagem'];
     $row_array['Data'] = $row['Data'];
     $row_array['username'] = $row['username'];
     $row_array['Num_EquiLav'] = $row['Num_EquiLav'];

       array_push($return_arr,$row_array);
    }
     echo json_encode($return_arr);
  ?>

