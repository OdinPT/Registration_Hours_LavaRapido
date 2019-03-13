<?php
error_reporting(0);
include "../config.php";
include "../Functions.php";

$username = $_COOKIE['cookieEmail'];

$dataAtual= date('y/m/d');
$dataAtualx= date('Y-m-d');

$mysqli->set_charset("utf8");
$return_arr = array();

$query = mysqli_query($mysqli, "SELECT `ID_Local_LF` FROM `local_funcionarios` WHERE `ID_Funcionario_LF`=RetornaIdFuncionario('$username') ");
                                                                        //Seleciona  os locais do funcionários
   while($res = mysqli_fetch_array($query))
     {
  	        $ID_LocalFunc = $res['ID_Local_LF'];
  	        // print " Funcionário <B> $username </B> e Id do Local é $ID_LocalFunc<p>";
     }

$query2 = "SELECT `ID_EquiLav`,`ID_Local_EquiLav`,`ID_Tipo_equiLav`,`Num_EquiLav`
                                        FROM `Reg_Equipamentos_Lavagem`
                                           WHERE `ID_Local_EquiLav` = $ID_LocalFunc order by ID_EquiLav asc";

      $resultx = mysqli_query($mysqli, $query2);
        while ($row = mysqli_fetch_array($resultx, MYSQLI_ASSOC)) {

          $ID_EquiLav = $row['ID_EquiLav'];
          $ID_LocalLAV = $row['ID_Local_EquiLav'];
          $TipoEquipamentoLavagem = $row['ID_Tipo_equiLav'];
          $Num_EquiLav = $row['Num_EquiLav'];
                  /*
                    print " Tipo Equip: $TipoEquipamentoLavagem </p>";
                    print "  ID do Equipamento Lav  $ID_EquiLav </p>";
                    print "<b>Numero do equipamento $Num_EquiLav <p> </b>";
                  */
        }

//print "</p>----</p>";
$query3 = "SELECT count(`ID_Tipo_equiLav`)as maxEquiLav FROM `Reg_Equipamentos_Lavagem` WHERE ID_Local_EquiLav= '$ID_LocalLAV'";

     $resultx = mysqli_query($mysqli, $query3);
        while ($row = mysqli_fetch_array($resultx, MYSQLI_ASSOC)) {

                $TotalEquiLav = $row['maxEquiLav'];
               // print "Total de Equipamentos por Lavagem $TotalEquiLav </p>";
        }

 $Total = array();
    $query4= "SELECT ID_EquiLav FROM `Reg_Equipamentos_Lavagem` WHERE `ID_Local_EquiLav` = '$ID_LocalLAV'  order by ID_EquiLav asc ";

          $resul = mysqli_query($mysqli, $query4);
           while ($ru = mysqli_fetch_array($resul, MYSQLI_ASSOC)) {

                            foreach ($ru as $keyy => $ID_EquipamentosLav) {
                                array_push($Total, $ID_EquipamentosLav);
                            }
        }
       //echo json_encode($Total);

foreach($Total as $indice => $valor) {

     $querw1= "SELECT ID_EquiLav,ID_Local_EquiLav,ID_Tipo_equiLav,Num_EquiLav
                FROM `Reg_Equipamentos_Lavagem`,locais, multiusos
                   WHERE `ID_Local_EquiLav` = $ID_LocalFunc and `ID_Tipo_equiLav`=ID_acesso and`ID_Local_EquiLav`=ID_Local and ID_EquiLav = $valor order by ID_EquiLav asc limit 1";
                            $resutw1 = mysqli_query($mysqli, $querw1);

                                  while ($ruw1 = mysqli_fetch_array($resutw1, MYSQLI_ASSOC)) {
                                       $out= substr( time(), -6 );
                                       $NumRequest ="$out$mes";
                                       $NumeroEqui = $ruw1['Num_EquiLav'];
                                       $ID_EquiLav = $ruw1['ID_EquiLav'];
                                       $TipoReg = $ruw1['ID_Tipo_equiLav'];
                                       $Local = $ruw1['ID_Local_EquiLav'];
                                       //$IDPista = ' ';
                                       //$Contagem = ' ';

                // print " </p>#w0 Registo Equipamentos por Lav Num Equi <b>Insere pedido sem contagem</b> --$NumeroEqui--ID equi $ID_EquiLav--Tipo Reg $TipoReg--ID Local $Local";

//check if table PostosPistas is empthy
   $querycheck= "SELECT COUNT(*) as Result FROM Postos_Pistas";
        $resutw1 = mysqli_query($mysqli, $querycheck);
                        while ($ruw1 = mysqli_fetch_array($resutw1, MYSQLI_ASSOC)) {

                              $ResultCheck = $ruw1['Result'];

                        }

                        $querw0= "SELECT `ID_PPistas`,`ContagemPP`,`DataPP`,`ID_Func_PP`,`ID_EquiPorLav_PP` FROM `Postos_Pistas`
                                            WHERE `ID_EquiPorLav_PP`= $valor and `DataPP` = '$dataAtual'";

                                            $resutw0 = mysqli_query($mysqli, $querw0);
                                                while ($ruw0 = mysqli_fetch_array($resutw0, MYSQLI_ASSOC)) {
                                                            $out= substr( time(), -6 );
                                                            $NumRequest ="$out$mes";
                                                            $ID_PPistas = $ruw0['ID_PPistas'];
                                                            $ContagemPP = $ruw0['ContagemPP'];
                                                            $DataPP = $ruw0['DataPP'];
                                                            $ID_Func_PP = $ruw0['ID_Func_PP'];
                                                            $ID_EquiPorLav_PP = $ruw0['ID_EquiPorLav_PP'];

    if ($DataPP == $dataAtualx) {
                //existe contagem do dia atual

        $insert = mysqli_query($mysqli, "call InserirPedido1 ('$TipoReg','$Local','$ContagemPP','$dataAtual','$ID_PPistas',$NumRequest,'$dataAtual','$username','$NumeroEqui')");

    }else{
         $insert = mysqli_query($mysqli, "call InserirPedido1 ('$TipoReg','$Local','$Contagem','$dataAtual','$IDPista', $NumRequest,'$dataAtual','$username','$NumeroEqui')");
    }
   }
            //check if table POSTOS_PISTAS is empthy.
      if ($ResultCheck == 0) {

        $insert = mysqli_query($mysqli, "call InserirPedido1 ('$TipoReg','$Local','$Contagem','$dataAtual','$IDPista', $NumRequest,'$dataAtual','$username','$NumeroEqui')");
      }

  }
}

//Mudar para ir buscar id do request e assim consigo controlar o aparecer a contagem

  $querw2= "SELECT max(ID_Pedido)as MaxRequest FROM `Request`";
   $resutw2 = mysqli_query($mysqli, $querw2);
         while ($ruw2 = mysqli_fetch_array($resutw2, MYSQLI_ASSOC)) {

                $MaxRequest = $ruw2['MaxRequest'];

         }

 $querw3= "SELECT `ID_Request`, Descrisao as ID_Tipo_equiLav, Descricao_Local as ID_Local_EquiLav,`Contagem_Req` as ContagemPP,
                    `ID_PPista`,`ID_Pedido`,`ID_Func_Req`,`Num_Equip` as Num_EquiLav
                        FROM Request,locais,multiusos
                         where `ID_Pedido` = $MaxRequest and `ID_Local_Req` =ID_Local and `ID_acesso`=ID_Tipo_Req";

                                     $resut = mysqli_query($mysqli, $querw3);
                                              while ($ru3 = mysqli_fetch_array($resut, MYSQLI_ASSOC)) {

                                                  $row_array['ID_Request'] = $ru3['ID_Request'];
                                                  $row_array['ID_Local_EquiLav'] = $ru3['ID_Local_EquiLav'];
                                                  $row_array['ID_Tipo_equiLav'] = $ru3['ID_Tipo_equiLav'];
                                                  $row_array['Num_EquiLav'] = $ru3['Num_EquiLav'];
                                                  $row_array['ContagemPP'] =$ru3['ContagemPP'];

                                                    array_push($return_arr,$row_array);
                                                  }
echo json_encode($return_arr);

mysqli_close($mysqli);
?>