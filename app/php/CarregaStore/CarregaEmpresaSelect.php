<?php

error_reporting(0);
include "../config.php";

$id = $_COOKIE['cookieID_empresaSelect'];

$mysqli->set_charset("utf8"); // Convert DATA to utf8

      $return_arr = array();

      $query = "call CarregaEmpresaSelecionada ('$id')" ;

  $result = mysqli_query($mysqli, $query);

    while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

    $row_array['ID_empresa'] = $row['ID_empresa'];
    $row_array['Nome_empresa'] = $row['Nome_empresa'];
    $row_array['Niff_empresa'] = $row['Niff_empresa'];

       array_push($return_arr,$row_array);
    }
     echo json_encode($return_arr);
  ?>

