<?php

include "../config.php";

//error_reporting(0);

      $return_arr = array();

    $mysqli->set_charset("utf8"); //Converter para utf8

      $query = "call Max_ES_Diario ()" ;

  $result = mysqli_query($mysqli, $query);

  while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

  $row_array['MaxEntradas'] = $row['MaxEntradas'];
  $row_array['MaxSaidas'] = $row['MaxSaidas'];
  $row_array['MaxRegLocal'] = $row['MaxRegLocal'];
  $row_array['Descricao_Local'] = $row['Descricao_Local'];
  $row_array['MaxFuncLocal'] = $row['MaxFuncLocal'];

      array_push($return_arr,$row_array);
  }
  echo json_encode($return_arr);
  ?>

