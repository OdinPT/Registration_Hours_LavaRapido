<?php
error_reporting(0);

include "../config.php";

    $return_arr = array();

    $query = "call GridRegBackups()" ;

    $mysqli->set_charset("utf8"); //Converter para utf8

  $result = mysqli_query($mysqli, $query);

  while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

  $row_array['ID_Backup'] = $row['ID_Backup'];
  $row_array['Nome_Backup'] = $row['Nome_Backup'];
  $row_array['Data_Backup'] = $row['Data_Backup'];
  $row_array['Tipo_Backup'] = $row['Tipo_Backup'];
  $row_array['username'] = $row['username'];

      array_push($return_arr,$row_array);
  }
  echo json_encode($return_arr);
  ?>

