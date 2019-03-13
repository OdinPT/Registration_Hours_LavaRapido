<?php

//error_reporting(0);
include "../config.php";

   $return_arr = array();
   $query = "call CarregaLimaxCont ()" ;

  $result = mysqli_query($mysqli, $query);

  while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

    $row_array['ID_Lim'] = $row['ID_Lim'];
    $row_array['Limit_Diario'] = $row['Limit_Diario'];
    $row_array['Local'] = $row['Local'];
    $row_array['TipoEqui'] = $row['TipoEqui'];

      array_push($return_arr,$row_array);
  }
  echo json_encode($return_arr);

  ?>
