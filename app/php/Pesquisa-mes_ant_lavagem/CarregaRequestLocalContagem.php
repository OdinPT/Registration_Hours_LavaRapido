<?php
error_reporting(0);

include "../config.php";
include "../Functions.php";

$username = $_COOKIE['cookieEmail'];

$mysqli->set_charset("utf8");
$return_arr = array();

$Total = array();

$MaxRequest = GeraNumRequest($mysqli);
    //print "Request ".$MaxRequest;

    $query4= "SELECT `ID_Request` FROM `Request` WHERE ID_Pedido = '$MaxRequest'";

          $resul = mysqli_query($mysqli, $query4);

           while ($ru = mysqli_fetch_array($resul, MYSQLI_ASSOC)) {

                            foreach ($ru as $keyy => $ID_Request) {
                                array_push($Total, $ID_Request);
                            }
        }
      //echo json_encode($Total);

foreach($Total as $indice => $valor) {

  $queryt= "SELECT `ID_Request`,descrisao as`ID_Tipo_Req`,Descricao_Local as `ID_Local_Req`,`Contagem_Req`,`Data_Req`,`ID_PPista`,`Desc_EquiLav`,
                                        ID_Pedido,`Data_Pedido`,`ID_Func_Req`,`Num_Equip`
                                            FROM `Request`,multiusos,locais,Reg_Equipamentos_Lavagem
          WHERE `ID_Tipo_Req`=ID_acesso and `ID_Local_Req`=ID_Local and `ID_Request` = $valor and `ID_Tipo_equiLav` = ID_Tipo_Req and  Num_Equip = `Num_EquiLav` ";

                                     $resut = mysqli_query($mysqli, $queryt);

                                              while ($ru = mysqli_fetch_array($resut, MYSQLI_ASSOC)) {

                                                  $row_array['ID_Request'] = $ru['ID_Request'];     //
                                                  $row_array['ID_Local_Req'] = $ru['ID_Local_Req']; //
                                                  $row_array['ID_Tipo_Req'] = $ru['ID_Tipo_Req'];   //
                                                  $row_array['Contagem_Req'] = $ru['Contagem_Req']; //

                                                  $row_array['Data_Req'] = $ru['Data_Req'];
                                                  $row_array['ID_PPista'] = $ru['ID_PPista'];
                                                  $row_array['Data_Pedido'] = $ru['Data_Pedido'];   //
                                                  $row_array['Num_Equip'] = $ru['Num_Equip'];       //
                                                  $row_array['ID_Func_Req'] = $ru['ID_Func_Req'];

                                                  $row_array['Id_EquiLav'] = $ru['Id_EquiLav'];

                                                  $row_array['ID_Pedido'] = $ru['ID_Pedido'];
                                                  $row_array['Desc_EquiLav'] = $ru['Desc_EquiLav'];


                                                    array_push($return_arr,$row_array);
                                                  }
   }

echo json_encode($return_arr);

mysqli_close($mysqli);
?>