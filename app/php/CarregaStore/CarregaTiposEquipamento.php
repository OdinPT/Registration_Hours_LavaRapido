<?php

    error_reporting(0);
    include "../config.php";

    $mysqli->set_charset("utf8"); // Convert DATA to utf8

      $return_arr = array();

      $query = "call CarregaTiposEquipamentos ()" ;

  $result = mysqli_query($mysqli, $query);

    while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

    $row_array['ID'] = $row['ID'];
    $row_array['Tipo'] = $row['Tipo'];

       array_push($return_arr,$row_array);
    }
     echo json_encode($return_arr);
     mysqli_close($mysqli);
?>

