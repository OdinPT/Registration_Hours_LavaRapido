<?php

 error_reporting(0);
 include "../config.php";

    $id = $_COOKIE['cookieID_ContadoresRDP'];

    $mysqli->set_charset("utf8"); // Convert DATA to utf8
    $return_arr = array();

    $query = "call RetornaLogContadorSelect ($id)" ;

  $result = mysqli_query($mysqli, $query);
    while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

    $row_array['ID_Pista'] = $row['ID_Pista'];
    $row_array['Local'] = $row['Local'];
    $row_array['Contagem'] = $row['Contagem'];
    $row_array['Data'] = $row['Data'];
    $row_array['Username'] = $row['Username'];
    $row_array['Descrisao'] = $row['Descrisao'];

       array_push($return_arr,$row_array);
    }
     echo json_encode($return_arr);
  ?>

