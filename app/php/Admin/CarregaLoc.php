<?php
//error_reporting(0);

include "../config.php";
      $return_arr = array();

      $query = "call LoadLocais ()" ;

    $mysqli->set_charset("utf8"); //Converter para utf8

  $result = mysqli_query($mysqli, $query);

  while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

  $row_array['ID_Localx'] = $row['ID_Localx'];
  $row_array['Descricao_Local'] = $row['Descricao_Local'];

      array_push($return_arr,$row_array);
  }
  echo json_encode($return_arr);
  ?>

