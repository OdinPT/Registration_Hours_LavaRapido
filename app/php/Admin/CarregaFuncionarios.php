<?php
error_reporting(0);

include "../config.php";

$return_arr = array();

$query = "call CarregaFuncionarios ()" ;

  $result = mysqli_query($mysqli, $query);

  while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

  $row_array['ID_funcionario'] = $row['ID_funcionario'];
  $row_array['username'] = $row['username'];

      array_push($return_arr,$row_array);
  }
  echo json_encode($return_arr);
mysqli_close($mysqli);

?>
