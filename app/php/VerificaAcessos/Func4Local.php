<?php

 include "../config.php";
 $username = $_COOKIE['cookieEmail'];
 $dataAtualx= date('Y-m-d');
 $dataAtual= date('y/m/d');

$mysqli->set_charset("utf8");

$XLocal = array();
$Total = array();
$EquiL = array();

// create NumRequest
    $queryMaxID = "SELECT max(`ID_Pedido`) as MaxID FROM `Request`";
     $result = mysqli_query($mysqli, $queryMaxID);
           while ($row1 = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
                      $MaxRequestx = $row1['MaxID'];
           }

        if ($MaxRequestx == 0) {         // se não existir registos na tabela
             $NumRequest = 0;
             $MaxRequestx = 2000;
             $NumRequest = $MaxRequestx +1;
        }
        $NumRequest = $MaxRequestx +1;
        print '<br>Num Request '.$NumRequest.'<br>';

$qMaxPPISTA = "SELECT max(`ID_PPistas`) as IDPISTA from Postos_Pistas where `ID_Func_PP` = RetornaIdFuncionario('$username')";
     $rMaxpp = mysqli_query($mysqli, $qMaxPPISTA);
       while ($rowq = mysqli_fetch_array($rMaxpp, MYSQLI_ASSOC)) {

            $IDPISTA = $rowq['IDPISTA'];
    }

// verifica se existe reg do dia em POSTOS PISTAS
$qMaxPPISTA = "SELECT max(`ID_PPistas`) as IDPISTA from Postos_Pistas ";
     $rMaxpp = mysqli_query($mysqli, $qMaxPPISTA);
       while ($rowq = mysqli_fetch_array($rMaxpp, MYSQLI_ASSOC)) {

            $IDPISTA = $rowq['IDPISTA'];

            $lastData = "SELECT `DataPP` as LASTDATA from Postos_Pistas  WHERE ID_PPistas = '$IDPISTA'";
                $rd = mysqli_query($mysqli, $lastData);
                while ($rowd = mysqli_fetch_array($rd, MYSQLI_ASSOC)) {

                      $LASTDATA = $rowd['LASTDATA'];

                    //print "Last Date ".$LASTDATA.'<br>';
                }
     }

if ($LASTDATA == $dataAtualx){          // condição não validada significa que não existe registos do dia


    //Insere locais no array

            $qu1= "SELECT `ID_Local_LF` FROM `local_funcionarios` WHERE `ID_Funcionario_LF`= RetornaIdFuncionario('$username')";
              $r1 = mysqli_query($mysqli, $qu1);
                  while ($ruz = mysqli_fetch_array($r1, MYSQLI_ASSOC)) {

                            foreach ($ruz as $keyy => $ID_Local_LF) {
                                 array_push($XLocal, $ID_Local_LF);
                            }
                  }
                //echo json_encode($XLocal);

// deixar de ir buscar ao request e ir buscar as tabelas

    foreach($XLocal as $indice => $loc) {

        $QTeste = "SELECT `ID_EquiLav`,`ID_Local_EquiLav`,`ID_Tipo_equiLav`,`Num_EquiLav`,`Desc_EquiLav` FROM `Reg_Equipamentos_Lavagem` WHERE `ID_Local_EquiLav` = '$loc' ";

            $resultTeste = mysqli_query($mysqli, $QTeste);
           while ($rLocal = mysqli_fetch_array($resultTeste, MYSQLI_ASSOC)) {

                     $ID_EquiLav = $rLocal['ID_EquiLav'];
                     $ID_Local_EquiLav = $rLocal['ID_Local_EquiLav'];
                     $ID_Tipo_equiLav = $rLocal['ID_Tipo_equiLav'];
                     $Num_EquiLav = $rLocal['Num_EquiLav'];
                     $Desc_EquiLav = $rLocal['Desc_EquiLav'];

                      //print "<br><br>----<br> ID_EquiLav $ID_EquiLav";print "<br> ID_Local_EquiLav $ID_Local_EquiLav";print "<br> ID_Tipo_equiLav $ID_Tipo_equiLav";
                      //print "<br> Num_EquiLav $Num_EquiLav";print "<br> Desc_EquiLav $Desc_EquiLav";

           //select * from Postos_Pistas where `ID_EquiPorLav_PP` =5 and `DataPP` = '2019-08-08'
           // fazer insert para ver se funciona evitar usar dados do request porque ao inserir novos vai dar bronca
                  $QTeste1 = "select `ID_PPistas`,`ContagemPP`,`DataPP`,`ID_Func_PP`,`ID_EquiPorLav_PP` from Postos_Pistas
                                                            where `ID_EquiPorLav_PP` = '$ID_EquiLav' and `DataPP` = '$dataAtualx' ";

                        $resultTeste1 = mysqli_query($mysqli, $QTeste1);
                       while ($rLocal1 = mysqli_fetch_array($resultTeste1, MYSQLI_ASSOC)) {

                                     $ID_PPistas = $rLocal1['ID_PPistas'];
                                     $ContagemPP = $rLocal1['ContagemPP'];
                                     $DataPP = $rLocal1['DataPP'];
                                     $ID_Func_PP = $rLocal1['ID_Func_PP'];
                                     $ID_EquiPorLav_PP = $rLocal1['ID_EquiPorLav_PP'];
                                     $teste = 1;
                                /*
                                      print "<br>===============><br> ID_PPistas $ID_PPistas";
                                      print "<br> ContagemPP $ContagemPP";
                                      print "<br> DataPP $DataPP";
                                      print "<br> ID_Func_PP $ID_Func_PP";
                                      print "<br> ID_EquiPorLav_PP $ID_EquiPorLav_PP";
                                */

                       }
                        if ($teste == 1){
                           //print "call InserirPedido COM CONTAGEM ('$ID_Tipo_equiLav','$ID_Local_EquiLav','$ContagemPP','$dataAtualx','$ID_PPistas',$NumRequest,'$dataAtual','$username','$Num_EquiLav',$ID_EquiLav)";
                           $insert = mysqli_query($mysqli, "call InserirPedido1 ('$ID_Tipo_equiLav','$ID_Local_EquiLav','$ContagemPP','$dataAtualx','$ID_PPistas',$NumRequest,'$dataAtual','$username','$Num_EquiLav',$ID_EquiLav)");
                           $teste = ' ';
                        } else {
                            //print "call InserirPedido SEM contagem ('$ID_Tipo_equiLav','$ID_Local_EquiLav','','$dataAtualx','$ID_PPistas',$NumRequest,'$dataAtual','$username','$Num_EquiLav',$ID_EquiLav)";
                            $insert = mysqli_query($mysqli, "call InserirPedido1 ('$ID_Tipo_equiLav','$ID_Local_EquiLav','','$dataAtualx','',$NumRequest,'$dataAtual','$username','$Num_EquiLav',$ID_EquiLav)");
                        }
           }
    }

} else {        // não existe registos do dia

$query = "SELECT * FROM `local_funcionarios` WHERE `ID_Funcionario_LF`=RetornaIdFuncionario('$username')";
$result = mysqli_query($mysqli, $query);

if( $result -> num_rows > 1 ) {            //funcionário trabalha em + que um local

//  print "<br> aqui  num rows >1  <B>FUNCIONARIO TRABALHA EM MAIS QUE UM LOCAL </B><br><br>";

            $qu1= "SELECT `ID_Local_LF` FROM `local_funcionarios` WHERE `ID_Funcionario_LF`= RetornaIdFuncionario('$username')";
              $r1 = mysqli_query($mysqli, $qu1);
                  while ($ruz = mysqli_fetch_array($r1, MYSQLI_ASSOC)) {

                            foreach ($ruz as $keyy => $ID_Local_LF) {
                                 array_push($XLocal, $ID_Local_LF);
                            }
                  }

               // echo "Locais: ".json_encode($XLocal);


        foreach($XLocal as $indice => $x) {

                $qu2= "SELECT `ID_EquiLav` FROM `Reg_Equipamentos_Lavagem` WHERE `ID_Local_EquiLav` = $x";
                      $r2 = mysqli_query($mysqli, $qu2);
                          while ($ruz2 = mysqli_fetch_array($r2, MYSQLI_ASSOC)) {

                                    foreach ($ruz2 as $keyy => $ID_EquiLav) {
                                         array_push($EquiL, $ID_EquiLav);
                                    }
                          }
                      //  echo "<br>Equipamentos por lavagem: ".json_encode($EquiL);

                                //ver em POSTOS PISTAS pelo ID_Equi_Lav e data do dia se existir insere na query.

            $kappa = "SELECT * FROM `Reg_Equipamentos_Lavagem`,locais, multiusos
                              WHERE `ID_Local_EquiLav` = ID_Local and `ID_Tipo_equiLav`=ID_acesso and`ID_Local_EquiLav`= $x";

                        $rkappa = mysqli_query($mysqli, $kappa);
                            while ($rk = mysqli_fetch_array($rkappa, MYSQLI_ASSOC)) {

                                $ID_EquiLav = $rk['ID_EquiLav'];
                                $Local = $rk['ID_Local_EquiLav'];
                                $TipoReg = $rk['ID_Tipo_equiLav'];
                                $NumeroEqui = $rk['Num_EquiLav'];

                               // print "<br><br>ID EquiLav $ID_EquiLav  e local $Local e Num Equipamento $NumeroEqui <br>";

                                $Contagem = "SELECT `ID_PPistas`,`ContagemPP`,`DataPP`,`ID_Func_PP`
                                                    FROM `Postos_Pistas` WHERE `ID_EquiPorLav_PP` = '$ID_EquiLav' and `DataPP` = '$dataAtualx'";

                                $rcont = mysqli_query($mysqli, $Contagem);
                                while ($rc = mysqli_fetch_array($rcont, MYSQLI_ASSOC)) {

                                    $ID_PPistas = $rc['ID_PPistas'];
                                    $ContagemPP= $rc['ContagemPP'];
                                    $DataPP = $rc['DataPP'];
                                    $ID_Func_PP = $rc['ID_Func_PP'];

                                  // print "ID PPista ". $ID_PPistas; print "Contagem $ContagemPP <br>";print "Data Reg $DataPP <br>";print "ID Funcionário $ID_Func_PP";
                                }

    $insert = mysqli_query($mysqli, "call InserirPedido1 ('$TipoReg','$Local','$ContagemPP','$dataAtualx','$ID_PPistas',$NumRequest,'$dataAtual','$username','$NumeroEqui',$ID_EquiLav)");

                            }
        }

  } else {          //um só local

     //print "<br> Sucesso 1 só local .<br>";

   $return_arr = array();

   $query1 = "SELECT `ID_Local_LF` as Local FROM `local_funcionarios` WHERE `ID_Funcionario_LF` = RetornaIdFuncionario('$username')";

     $result1 = mysqli_query($mysqli, $query1);
     while ($row = mysqli_fetch_array($result1, MYSQLI_ASSOC)) {

        $Local = $row['Local'];
        //print "<br>Local ::> ".$Local."<br> ";
     }

  $querywwe= "SELECT ID_EquiLav FROM `Reg_Equipamentos_Lavagem` WHERE `ID_Local_EquiLav` = '$Local'";

      $resulwwe = mysqli_query($mysqli, $querywwe);
          while ($rwwe = mysqli_fetch_array($resulwwe, MYSQLI_ASSOC)) {

                    foreach ($rwwe as $keyy => $ID_EquiLav) {
                         array_push($Total, $ID_EquiLav);
                    }
          }
        //echo json_encode($Total);

foreach($Total as $indice => $valor) {

    $queryw0 = "SELECT * FROM `Reg_Equipamentos_Lavagem`,locais, multiusos
                                 WHERE `ID_Local_EquiLav` = ID_Local and `ID_Tipo_equiLav`=ID_acesso and`ID_Local_EquiLav`= $Local and   ID_EquiLav = $valor limit 1 ";


            $resultw0 = mysqli_query($mysqli, $queryw0);

        while ($ru = mysqli_fetch_array($resultw0, MYSQLI_ASSOC)) {

                  $ID_PPistas = $ru['ID_PPistas'];
                  $ContagemPP = $ru['ContagemPP'];
                  $DataPP = $ru['DataPP'];
                  $ID_EquiPorLav_PP = $ru['ID_EquiLav'];
                  $Local = $ru['ID_Local_EquiLav'];
                  $TipoReg = $ru['ID_Tipo_equiLav'];
                  $Local = $ru['ID_Local_EquiLav'];
                  $TipoReg = $ru['ID_Tipo_equiLav'];
                  $Contagem = $ru['ContagemPP'];
                  $NumeroEqui = $ru['Num_EquiLav'];
        /*
            print "<br>ID Equi Lav $ID_EquiPorLav_PP";
            print "<br>Local  $Local";
            print "<br>Tipo Req $TipoReg";
            print "<br>ID Contagem $Contagem";
            print "<br>ID Equi Lav $ID_EquiPorLav_PP";
            print "<br>NumeroEqui $NumeroEqui<br>";
        */
//check if table PostosPistas is empthy
$querycheck= "SELECT COUNT(*) as Result FROM Postos_Pistas";
  $resutw1 = mysqli_query($mysqli, $querycheck);
  while ($ruw1 = mysqli_fetch_array($resutw1, MYSQLI_ASSOC)) {

       $ResultCheck = $ruw1['Result'];

    //print "<br><br>Result check if table is empthy $ResultCheck </br> ";

     $querw2= "SELECT `ID_PPistas`,`ContagemPP`,`DataPP`,`ID_Func_PP`,`ID_EquiPorLav_PP` FROM `Postos_Pistas`
                WHERE `ID_EquiPorLav_PP`= $valor and `DataPP` = '$dataAtual'";

    $resutw2 = mysqli_query($mysqli, $querw2);
    while ($ruw2 = mysqli_fetch_array($resutw2, MYSQLI_ASSOC)) {

                                                     $ID_PPistas = $ruw2['ID_PPistas'];
                                                     $ContagemPP = $ruw2['ContagemPP'];
                                                     $DataPP = $ruw2['DataPP'];
                                                     $ID_Func_PP = $ruw2['ID_Func_PP'];
                                                     $ID_EquiPorLav_PP = $ruw2['ID_EquiPorLav_PP'];

        //print "$dataAtualx == $DataPP)";

        if($dataAtualx == $DataPP){
           $insert = mysqli_query($mysqli, "call InserirPedido1 ('$TipoReg','$Local','$Contagem','$dataAtual','$ID_PPistas',$NumRequest,'$dataAtual','$username','$NumeroEqui',$valor)");

        }else{
          $ContVazio = ' ';
        $insert = mysqli_query($mysqli, "call InserirPedido1 ('$TipoReg','$Local','$ContVazio','$dataAtual','$ID_PPistas',$NumRequest,'$dataAtual','$username','$NumeroEqui',$valor)");
        }
    }

       //check if table POSTOS_PISTAS is empthy.
      if ($ResultCheck == 0) {

        $insert = mysqli_query($mysqli, "call InserirPedido1 ('$TipoReg','$Local','$Contagem','$dataAtual','$IDPista', $NumRequest,'$dataAtual','$username','$NumeroEqui',$valor)");
      }else {
        // tava a ver de mandar  ID EquiLav para o request
        $insert = mysqli_query($mysqli, "call InserirPedido1 ('$TipoReg','$Local','$Contagem','$dataAtual','$IDPista', $NumRequest,'$dataAtual','$username','$NumeroEqui',$valor)");
      }
}
}
}
}



}
mysqli_close($mysqli);

?>
