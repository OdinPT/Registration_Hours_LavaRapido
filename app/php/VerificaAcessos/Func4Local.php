<?php

 include "../config.php";
 $username = $_COOKIE['cookieEmail'];
 //$username = 'jean';

 $dataAtualx= date('Y-m-d');
 $dataAtual= date('y/m/d');

$mysqli->set_charset("utf8");

$XLocal = array();
$Total = array();


$query = "SELECT * FROM `local_funcionarios` WHERE `ID_Funcionario_LF`=RetornaIdFuncionario('$username')";
$result = mysqli_query($mysqli, $query);

if( $result -> num_rows > 1 ) {            //funcionário trabalha em + que um local

 print "entrou";

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
        print '<br>'.$NumRequest.'<br>';


            $qu1= "SELECT `ID_Local_LF` FROM `local_funcionarios` WHERE `ID_Funcionario_LF`= RetornaIdFuncionario('$username')";

              $r1 = mysqli_query($mysqli, $qu1);
                  while ($ruz = mysqli_fetch_array($r1, MYSQLI_ASSOC)) {

                            foreach ($ruz as $keyy => $ID_EquiLav) {
                                 array_push($XLocal, $ID_EquiLav);
                            }
                  }
                echo json_encode($XLocal);

print "<br> aqui <br><br>";

    foreach($XLocal as $indice => $x) {

        $kappa = "SELECT * FROM `Reg_Equipamentos_Lavagem`,locais, multiusos
                 WHERE `ID_Local_EquiLav` = ID_Local and `ID_Tipo_equiLav`=ID_acesso and`ID_Local_EquiLav`= $x";

            $rkappa = mysqli_query($mysqli, $kappa);

            while ($rk = mysqli_fetch_array($rkappa, MYSQLI_ASSOC)) {

                   $ID_EquiLav = $rk['ID_EquiLav'];
                   $Local = $rk['ID_Local_EquiLav'];
                   $TipoReg = $rk['ID_Tipo_equiLav'];
                   $NumeroEqui = $rk['Num_EquiLav'];


                   print "<br><br>ID EquiLav $ID_EquiLav <br>";
                   print " Local $Local <br>";
                   print "Tipo registo $TipoReg <br>";
                   print "NumEquipamento $NumeroEqui <br>";

        print "<br> <br>'$TipoReg','$Local',' ','$datax',' ',$NumRequest,'$dataAtualx','$username','$NumeroEqui','$ID_EquiLav'";
         $insert = mysqli_query($mysqli, "call InserirPedido2 ('$TipoReg','$Local',' ','$dataAtualx',' ',$NumRequest,'$dataAtualx','$username','$NumeroEqui','$ID_EquiLav')");
            }
    }

  } else {          //um só local

     print "Sucesso.<br>";

//max request
$queryMaxID = "SELECT max(`ID_Pedido`) as MaxID FROM `Request`";

     $result = mysqli_query($mysqli, $queryMaxID);

           while ($row1 = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
                      $MaxRequestx = $row1['MaxID'];
           }

        if ($MaxRequestx == 0) {         // se não existir registos na tabela
             $NumRequest = 0;
             $MaxRequestx = 2000;
        }
        $NumRequest = $MaxRequestx +1;
print $NumRequest.'<br>';

   $return_arr = array();


   $query1 = "SELECT `ID_Local_LF` as Local FROM `local_funcionarios` WHERE `ID_Funcionario_LF` = RetornaIdFuncionario('$username')";

     $result1 = mysqli_query($mysqli, $query1);
     while ($row = mysqli_fetch_array($result1, MYSQLI_ASSOC)) {

        $Local = $row['Local'];
        print "<br>Local ".$Local."<br> ";
     }

  $querywwe= "SELECT ID_EquiLav FROM `Reg_Equipamentos_Lavagem` WHERE `ID_Local_EquiLav` = '$Local'";

      $resulwwe = mysqli_query($mysqli, $querywwe);
          while ($rwwe = mysqli_fetch_array($resulwwe, MYSQLI_ASSOC)) {

                    foreach ($rwwe as $keyy => $ID_EquiLav) {
                         array_push($Total, $ID_EquiLav);
                    }
          }
        echo json_encode($Total);

foreach($Total as $indice => $valor) {

    $queryw0 = "SELECT * FROM `Reg_Equipamentos_Lavagem`,locais, multiusos
                                 WHERE `ID_Local_EquiLav` = ID_Local and `ID_Tipo_equiLav`=ID_acesso and`ID_Local_EquiLav`= $Local and   ID_EquiLav = $valor limit 1 ";


            $resultw0 = mysqli_query($mysqli, $queryw0);

        while ($ru = mysqli_fetch_array($resultw0, MYSQLI_ASSOC)) {

                  $ID_PPistas = $ru['ID_PPistas'];
                  $ContagemPP = $ru['ContagemPP'];
                  $ContagemPP = ' ';
                  $DataPP = $ru['DataPP'];

                  $ID_EquiPorLav_PP = $ru['ID_EquiLav'];
                  $Local = $ru['ID_Local_EquiLav'];
                  $TipoReg = $ru['ID_Tipo_equiLav'];

                  $Local = $ru['ID_Local_EquiLav'];
                  $TipoReg = $ru['ID_Tipo_equiLav'];
                  $Contagem = $ru['ContagemPP'];
                  $NumeroEqui = $ru['Num_EquiLav'];

            print "<br><br>first query<br>";
            print "<br>ID Equi Lav $ID_EquiPorLav_PP";
            print "<br>Local  $Local";
            print "<br>Tipo Req $TipoReg";
            print "<br>ID Contagem $Contagem";
            print "<br>ID Equi Lav $ID_EquiPorLav_PP";
            print "<br>NumeroEqui $NumeroEqui<br>";

//check if table PostosPistas is empthy
$querycheck= "SELECT COUNT(*) as Result FROM Postos_Pistas";
  $resutw1 = mysqli_query($mysqli, $querycheck);
  while ($ruw1 = mysqli_fetch_array($resutw1, MYSQLI_ASSOC)) {

       $ResultCheck = $ruw1['Result'];

    print "<br><br>Result check $ResultCheck </br> ";

     $querw2= "SELECT `ID_PPistas`,`ContagemPP`,`DataPP`,`ID_Func_PP`,`ID_EquiPorLav_PP` FROM `Postos_Pistas`
                WHERE `ID_EquiPorLav_PP`= $valor and `DataPP` = '$dataAtual'";

    $resutw2 = mysqli_query($mysqli, $querw2);
    while ($ruw2 = mysqli_fetch_array($resutw2, MYSQLI_ASSOC)) {
                                                            $out= substr( time(), -6 );
                                                            $NumRequest ="$out$mes";
                                                            $ID_PPistas = $ruw2['ID_PPistas'];
                                                            $ContagemPP = $ruw2['ContagemPP'];
                                                            $DataPP = $ruw2['DataPP'];
                                                            $ID_Func_PP = $ruw2['ID_Func_PP'];
                                                            $ID_EquiPorLav_PP = $ruw2['ID_EquiPorLav_PP'];

        if($dataAtualx == $DataPP){
           $insert = mysqli_query($mysqli, "call InserirPedido1 ('$TipoReg','$Local','$Contagem','$dataAtual','$ID_PPistas',$NumRequest,'$dataAtual','$username','$NumeroEqui')");

        }else{
          $ContVazio = ' ';
        $insert = mysqli_query($mysqli, "call InserirPedido1 ('$TipoReg','$Local','$ContVazio','$dataAtual','$ID_PPistas',$NumRequest,'$dataAtual','$username','$NumeroEqui')");
        }
    }

       //check if table POSTOS_PISTAS is empthy.
      if ($ResultCheck == 0) {

        $insert = mysqli_query($mysqli, "call InserirPedido1 ('$TipoReg','$Local','$Contagem','$dataAtual','$IDPista', $NumRequest,'$dataAtual','$username','$NumeroEqui')");
      }else {

        $insert = mysqli_query($mysqli, "call InserirPedido1 ('$TipoReg','$Local','$Contagem','$dataAtual','$IDPista', $NumRequest,'$dataAtual','$username','$NumeroEqui')");
      }
}
}
}
}

mysqli_close($mysqli);

?>
