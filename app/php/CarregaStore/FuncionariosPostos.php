<?php

//error_reporting(0);

include "../config.php";
      $return_arr = array();
      $query = "call Carrega_Local_Funcionarios ()" ;

  $result = mysqli_query($mysqli, $query);
  while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

  $row_array['ID'] = $row['ID'];
  $row_array['username'] = $row['username'];
  $row_array['Locais'] = $row['Locais'];

      array_push($return_arr,$row_array);
  }
  echo json_encode($return_arr);

  ?>
