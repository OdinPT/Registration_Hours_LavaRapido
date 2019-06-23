<?php

 //error_reporting(0);
 include "../config.php";

$id = $_COOKIE['cookieNum_Equip'];

$mysqli->set_charset("utf8");
$return_arr = array();

      $query = "call GridContagemDiaAnt ('$id')" ;

  $result = mysqli_query($mysqli, $query);

    while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

        $row_array['ContagemPP'] = $row['ContagemPP'];
        $row_array['DataPP'] = $row['DataPP'];
        $row_array['username'] = $row['username'];
        $row_array['ID_EquiPorLav_PP'] = $row['ID_EquiPorLav_PP'];
        $row_array['Num_EquiLav'] = $row['Num_EquiLav'];

       array_push($return_arr,$row_array);
    }
    echo json_encode($return_arr);
    mysqli_close($mysqli);
?>

