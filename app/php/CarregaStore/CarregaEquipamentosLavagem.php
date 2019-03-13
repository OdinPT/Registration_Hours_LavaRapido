<?php

    error_reporting(0);
    include "../config.php";

    $mysqli->set_charset("utf8");

      $return_arr = array();

      $query = "call CarregaEquipamentosLavagem ()" ;

  $result = mysqli_query($mysqli, $query);

    while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

    $row_array['ID_EquiLav'] = $row['ID_EquiLav'];
    $row_array['Local'] = $row['Local'];
    $row_array['Tipo_Equi'] = $row['Tipo_Equi'];
    $row_array['NumEqui'] = $row['NumEqui'];

       array_push($return_arr,$row_array);
    }
     echo json_encode($return_arr);
  ?>

