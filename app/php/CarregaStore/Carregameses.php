<?php

    //error_reporting(0);
    include "../config.php";

      $return_arr = array();

   $mysqli->set_charset("utf8"); // Convert DATA to utf8

      $query = "call RetornaMes ()";

  $result = mysqli_query($mysqli, $query);

    while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

    $row_array['mes'] = $row['mes'];
    $row_array['numMes'] = $row['numMes'];

       array_push($return_arr,$row_array);
    }
     echo json_encode($return_arr);
     mysqli_close($mysqli);
?>

