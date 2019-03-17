<?php
error_reporting(0);
include "../config.php";
include "../Functions.php";

$username = $_COOKIE['cookieEmail'];

$mysqli->set_charset("utf8");
$return_arr = array();


 $Total = array();

$queryMID = "SELECT max(`ID_Pedido`) as MaxID FROM `Request`";

     $rsult = mysqli_query($mysqli, $queryMID);

           while ($r1 = mysqli_fetch_array($rsult, MYSQLI_ASSOC)) {
                      $MaxRequest = $r1['MaxID'];
           }

    $query4= "SELECT `ID_Request` FROM `Request` WHERE ID_Pedido = '$MaxRequest'";

          $resul = mysqli_query($mysqli, $query4);

           while ($ru = mysqli_fetch_array($resul, MYSQLI_ASSOC)) {

                            foreach ($ru as $keyy => $ID_Request) {
                                array_push($Total, $ID_Request);
                            }
        }
      //echo json_encode($Total);

foreach($Total as $indice => $valor) {

  $queryt= "SELECT `ID_Request`,descrisao as`ID_Tipo_Req`,Descricao_Local as `ID_Local_Req`,`Contagem_Req`,`Data_Req`,`ID_PPista`,ID_Pedido,`Data_Pedido`,`ID_Func_Req`,`Num_Equip`
                                 FROM `Request`,multiusos,locais
                                   WHERE `ID_Tipo_Req`=ID_acesso and `ID_Local_Req`=ID_Local and `ID_Request` =$valor";

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

                                                  $row_array['ID_Pedido'] = $ru['ID_Pedido'];


                                                    array_push($return_arr,$row_array);
                                                  }
   }

echo json_encode($return_arr);

mysqli_close($mysqli);
?>