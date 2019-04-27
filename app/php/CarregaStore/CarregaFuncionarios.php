<?php

//error_reporting(0);

include "../config.php";
      $return_arr = array();

  $mysqli->set_charset("utf8"); // convert query to uf8

      $query = "call CarregaFuncionarios ()" ;

  $result = mysqli_query($mysqli, $query);

  while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

  $row_array['ID_funcionario'] = $row['ID_funcionario'];
  $row_array['username'] = $row['username'];
  $row_array['pass'] = $row['pass'];
  $row_array['NIFF_funcionario'] = $row['NIFF_funcionario'];
  $row_array['tipo_Funcionario'] = $row['tipo_Funcionario'];
  $row_array['acesso'] = $row['acesso'];
  $row_array['VL'] = $row['VL'];
  $row_array['Contacto_predef'] = $row['Contacto_predef'];
  $row_array['Hora_Tolerancia'] = $row['Hora_Tolerancia'];

      array_push($return_arr,$row_array);
  }
  echo json_encode($return_arr);
  mysqli_close($mysqli);

?>
