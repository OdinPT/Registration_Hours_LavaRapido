<?php

error_reporting(0);
include "../config.php";

$id = $_COOKIE['cookieID_LocalFunc'];

 $return_arr = array();
 $mysqli->set_charset("utf8");

 $query = "call CarregaFuncLocaisSelect('$id')" ;

$result = mysqli_query($mysqli, $query);

while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

    $row_array['ID'] = $row['ID'];
    $row_array['usernamee'] = $row['username'];
    $row_array['Locaiss'] = $row['Locais'];

    array_push($return_arr,$row_array);
}

echo json_encode($return_arr);
mysqli_close($mysqli);
?>
