<?php
//error_reporting(0);
include "../config.php";

$id = $_COOKIE['cookieID_ContadoresRDP'];

  $return_arr = array();
  $mysqli->set_charset("utf8");

  $query = "call GridContagensAnteriores($id)" ;
  $result = mysqli_query($mysqli, $query);

  while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

  $row_array['ID_PPistas'] = $row['ID_PPistas'];
  $row_array['Contagem'] = $row['Contagem'];
  $row_array['DATA'] = $row['DATA'];
  $row_array['ID_EquiPorLav'] = $row['ID_EquiPorLav'];
  $row_array['username'] = $row['username'];

      array_push($return_arr,$row_array);
  }
  echo json_encode($return_arr);

?>

