<?php

//error_reporting(0);
include "../config.php";

$return_arr = array();
 $query = "call TipoRegisto ()" ;

  $result = mysqli_query($mysqli, $query);
  while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

  $row_array['ID_tipo_reg'] = $row['ID_tipo_reg'];
  $row_array['Descricao_tipo_reg'] = $row['Descricao_tipo_reg'];

      array_push($return_arr,$row_array);
  }
  echo json_encode($return_arr);
  mysqli_close($mysqli);
?>
