<?php
 //error_reporting(0);
 include "../config.php";

$id = $_COOKIE['cookieID_EquiLav'];

    $mysqli->set_charset("utf8");

      $return_arr = array();


      $query = "call RetornaRegPPistasRegistoDiario('$id')";

  $result = mysqli_query($mysqli, $query);

    while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

     $row_array['ID_PPista'] = $row['ID_PPista'];
     $row_array['ContagemPP'] = $row['ContagemPP'];
     $row_array['DataPP'] = $row['DataPP'];
     $row_array['utilizador'] = $row['utilizador'];
     $row_array['Local'] = $row['Local'];
     $row_array['NumEqui'] = $row['NumEqui'];
     $row_array['TipoEqui'] = $row['TipoEqui'];

     $row_array['Desc_EquiLav'] = $row['Desc_EquiLav'];

       array_push($return_arr,$row_array);
    }
     echo json_encode($return_arr);
     mysqli_close($mysqli);
?>

