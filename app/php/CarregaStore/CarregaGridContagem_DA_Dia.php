<?php

 //error_reporting(0);
 include "../config.php";

//id request
$id = $_COOKIE['cookieContagemSelect'];

$mysqli->set_charset("utf8");
$return_arr = array();

      $query = "call GridOutrasContagensDia ('$id')" ;

  $result = mysqli_query($mysqli, $query);

    while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

        $row_array['ID_Request'] = $row['ID_Request'];
        $row_array['TipoEquipamento'] = $row['TipoEquipamento'];
        $row_array['Lavagem'] = $row['Lavagem'];
        $row_array['Contagem_Req'] = $row['Contagem_Req'];
        $row_array['Data_Req'] = $row['Data_Req'];
        $row_array['username'] = $row['username'];

       array_push($return_arr,$row_array);
    }
     echo json_encode($return_arr);
    mysqli_close($mysqli);
?>

