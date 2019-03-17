<?php

 //error_reporting(0);
 include "../config.php";

$id = $_COOKIE['cookieContagemSelect'];

$mysqli->set_charset("utf8");
$return_arr = array();

      $query = "call GridContagemDiaAnt ('$id')" ;

  $result = mysqli_query($mysqli, $query);

    while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

        $row_array['ContagemPP'] = $row['ContagemPP'];
        $row_array['DataPP'] = $row['DataPP'];
        $row_array['username'] = $row['username'];
        $row_array['ID_EquiPorLav_PP'] = $row['username'];

       array_push($return_arr,$row_array);
    }
     echo json_encode($return_arr);

  ?>

