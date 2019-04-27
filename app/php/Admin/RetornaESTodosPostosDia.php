<?php
error_reporting(0);

include "../config.php";
      $return_arr = array();

      $query = "call RetornaESTodosPostosDia ()" ;

    $mysqli->set_charset("utf8"); //Converter para utf8

  $result = mysqli_query($mysqli, $query);

  while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

  $row_array['ID_Registo'] = $row['ID_Registo'];
  $row_array['Descricao_Local'] = $row['Descricao_Local'];
  $row_array['username'] = $row['username'];
  $row_array['Tipo_registo'] = $row['Tipo_registo'];
  $row_array['Hora_entradaManha_rh'] = $row['Hora_entradaManha_rh'];

      array_push($return_arr,$row_array);
  }
echo json_encode($return_arr);
mysqli_close($mysqli);
?>

