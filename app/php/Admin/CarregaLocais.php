<?php
error_reporting(0);

include "../config.php";
      $return_arr = array();

      $query = "call CarregaLocais ()" ;

    $mysqli->set_charset("utf8"); //Converter para utf8

  $result = mysqli_query($mysqli, $query);

  while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

  $row_array['ID_Local'] = $row['ID_Local'];
  $row_array['NomeLocal'] = $row['NomeLocal'];
  $row_array['CodigoPostal'] = $row['CodigoPostal'];
  $row_array['Nome_empresa'] = $row['Nome_empresa'];

      array_push($return_arr,$row_array);
  }
  echo json_encode($return_arr);
  mysqli_close($mysqli);
  ?>

