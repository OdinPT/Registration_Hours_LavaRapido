<?php

//error_reporting(0);
include "../config.php";

      $return_arr = array();
 $query = "call RetornaMultiUso ()" ;

  $result = mysqli_query($mysqli, $query);

  while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

  $row_array['ID_registo'] = $row['ID_registo'];
  $row_array['Descrisao'] = $row['Descrisao'];

      array_push($return_arr,$row_array);
  }

  echo json_encode($return_arr);

  ?>
