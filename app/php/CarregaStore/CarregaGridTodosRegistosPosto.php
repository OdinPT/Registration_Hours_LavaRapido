<?php

 //error_reporting(0);
  include "../config.php";

   $username = $_COOKIE['cookieEmail'];

    $mysqli->set_charset("utf8"); // Convert DATA to utf8

      $return_arr = array();

      $query = "call RetornaRegistosTodosPostos ('$username')" ;    //se não aparecer nada é porque não existem
                                                                    //registos do mes sem ser do dia atual

  $result = mysqli_query($mysqli, $query);

    while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

        $row_array['ID_Pista'] = $row['ID_Pista'];
        $row_array['Tipo_Equipamento'] = $row['Tipo_Equipamento'];
        $row_array['Local'] = $row['Local'];
        $row_array['Contagem'] = $row['Contagem'];
        $row_array['Data'] = $row['Data'];
        $row_array['username'] = $row['username'];

        $row_array['ID_EquiPorLav_PP'] = $row['ID_EquiPorLav_PP'];


       array_push($return_arr,$row_array);
    }
     echo json_encode($return_arr);
     mysqli_close($mysqli);
?>

