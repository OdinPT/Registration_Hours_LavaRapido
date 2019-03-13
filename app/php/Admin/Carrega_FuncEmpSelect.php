<?php
//error_reporting(0);

include "../config.php";

   $return_arr = array();
    $func = $_COOKIE['cookieID_funcionario'];

    $query = "call CarregaFuncionario_da_EmpresaSelect ($func)" ;

    $mysqli->set_charset("utf8"); //Converter para utf8

  $result = mysqli_query($mysqli, $query);

  while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

  $row_array['ID_ef'] = $row['ID_ef'];
  $row_array['username'] = $row['username'];
  $row_array['Nome_Empresa'] = $row['Nome_Empresa'];

      array_push($return_arr,$row_array);
  }

  echo json_encode($return_arr);

  ?>

