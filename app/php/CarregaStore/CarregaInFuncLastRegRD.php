<?php

error_reporting(0);
include "../config.php";

$username= $_COOKIE['cookieEmail'];

$mysqli->set_charset("utf8"); // Convert DATA to utf8

      $return_arr = array();

      $query = "call RetornaInfFuncLasrRegRD('$username')" ;
      //RetornaInfFuncLasrRegRD

  $result = mysqli_query($mysqli, $query);

    while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

    $row_array['Hora'] = $row['Hora'];
    $row_array['DataRegisto'] = $row['DataRegisto'];
    $row_array['Local'] = $row['Local'];
    $row_array['TipoReg'] = $row['TipoReg'];

       array_push($return_arr,$row_array);
    }
echo json_encode($return_arr);

mysqli_close($mysqli);
?>

