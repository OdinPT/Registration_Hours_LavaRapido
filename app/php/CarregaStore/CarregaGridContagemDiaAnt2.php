<?php

 //error_reporting(0);
 include "../config.php";

$id = $_COOKIE['cookieID_EquiLav'];

$mysqli->set_charset("utf8");
$return_arr = array();


$query1 = mysqli_query($mysqli, "select `ID_EquiPorLav_PP` from Postos_Pistas where `ID_PPistas` = '$id'");

   while($res = mysqli_fetch_array($query1)){

  	        $ID_EquiPorLav_PP = $res['ID_EquiPorLav_PP'];
     }

   $query = "call GridContagemDiaAnt ('$ID_EquiPorLav_PP')" ;

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

