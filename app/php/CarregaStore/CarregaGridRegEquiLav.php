<?php

 //error_reporting(0);
 include "../config.php";

    $mysqli->set_charset("utf8");
    $return_arr = array();

      $query = "call GridRegisto_EquiLav" ;

  $result = mysqli_query($mysqli, $query);

    while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

     $row_array['ID_EquiLav'] = $row['ID_EquiLav'];
     $row_array['Local'] = $row['Local'];
     $row_array['TipoEquipamento'] = $row['TipoEquipamento'];
     $row_array['Num_EquiLav'] = $row['Num_EquiLav'];
     $row_array['Desc_EquiLav'] = $row['Desc_EquiLav'];

       array_push($return_arr,$row_array);
    }
     echo json_encode($return_arr);
     mysqli_close($mysqli);
?>

