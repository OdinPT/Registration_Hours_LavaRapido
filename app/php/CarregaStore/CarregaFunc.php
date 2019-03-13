<?php

//error_reporting(0);
include "../config.php";

      $return_arr = array();
      $query = "call LoadFuncionarios ()" ;

  $result = mysqli_query($mysqli, $query);
  while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

  $row_array['ID_funcionariox'] = $row['ID_funcionariox'];
  $row_array['username'] = $row['username'];

      array_push($return_arr,$row_array);
  }
  echo json_encode($return_arr);

  ?>
