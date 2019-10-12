<?php
//error_reporting(0);
include "../config.php";

$return_arr = array();
$mysqli->set_charset("utf8");

$query = "call GridLoginLogout ()";
$result = mysqli_query($mysqli, $query);

 while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

  $row_array['Data_Hora'] = $row['Data_Hora'];
  $row_array['TipoReg'] = $row['TipoReg'];
  $row_array['username'] = $row['username'];

      array_push($return_arr,$row_array);
  }
echo json_encode($return_arr);
mysqli_close($mysqli);

?>

