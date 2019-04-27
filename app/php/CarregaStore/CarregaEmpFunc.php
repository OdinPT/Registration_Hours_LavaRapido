<?php

 //error_reporting(0);
 include "../config.php";

$id = $_COOKIE['cookieID_funcionario'];

    $mysqli->set_charset("utf8"); // Convert DATA to utf8

      $return_arr = array();

      $query = "call CarregaEmpFunc('$id')" ;

  $result = mysqli_query($mysqli, $query);

    while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

    $row_array['ID'] = $row['ID'];
    $row_array['username'] = $row['username'];
    $row_array['Locais'] = $row['Locais'];

       array_push($return_arr,$row_array);
    }

echo json_encode($return_arr);
mysqli_close($mysqli);
?>

