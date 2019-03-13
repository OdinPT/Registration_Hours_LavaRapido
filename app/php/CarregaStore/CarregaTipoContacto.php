<?php

    error_reporting(0);
    include "../config.php";

    $mysqli->set_charset("utf8");

      $return_arr = array();

      $query = "call CarregaTipoContactos ()" ;

  $result = mysqli_query($mysqli, $query);

    while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

    $row_array['ID'] = $row['ID'];
    $row_array['TipoContacto'] = $row['TipoContacto'];

       array_push($return_arr,$row_array);
    }
     echo json_encode($return_arr);
  ?>

