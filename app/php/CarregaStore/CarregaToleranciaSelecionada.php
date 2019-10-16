<?php

 error_reporting(0);
 include "../config.php";

$id = $_COOKIE['cookieID_Tol'];

    $mysqli->set_charset("utf8"); // Convert DATA to utf8

      $return_arr = array();

      $query = "call SelecionaTolerancia ($id)" ;

  $result = mysqli_query($mysqli, $query);

    while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
    $row_array['ID_Tolerancia'] = $row['ID_Tolerancia'];
    $row_array['Hora_Tolerancia'] = $row['Hora_Tolerancia'];

       array_push($return_arr,$row_array);
    }
     echo json_encode($return_arr);
     mysqli_close($mysqli);
?>

