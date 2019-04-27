<?php
error_reporting(0);
include "../config.php";

$username = $_COOKIE['cookieEmail'];
$mysqli->set_charset("utf8");
$return_arr = array();

   $query = "call Retorna_Locais_do_Func ('$username')" ;

  $result = mysqli_query($mysqli, $query);
  while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

    $row_array['ID_Local'] = $row['ID_Local'];
    $row_array['Descricao_Local'] = $row['Descricao_Local'];

     array_push($return_arr,$row_array);
  }
echo json_encode($return_arr);
mysqli_close($mysqli);
?>
