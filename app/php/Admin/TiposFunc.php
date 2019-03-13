<?php
error_reporting(0);
include "../config.php";

      $return_arr = array();
      $query = "call Carrega_TiposFuncionario" ;

  $result = mysqli_query($mysqli, $query);

  while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

  $row_array['TF'] = $row['TF'];
  $row_array['Descricao_TipoFunc'] = $row['Descricao_TipoFunc'];

      array_push($return_arr,$row_array);
  }
  echo json_encode($return_arr);

  ?>
