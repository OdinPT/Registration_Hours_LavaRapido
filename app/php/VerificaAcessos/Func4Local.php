<?php

 include "../config.php";
 $username = $_COOKIE['cookieEmail'];
// $username = 'root';

 $dataAtualx= date('Y-m-d');
 $dataAtual= date('y/m/d');

$mysqli->set_charset("utf8");

$XLocal = array();
$Total = array();
$EquiL = array();

// verifica se existe reg do dia em POSTOS PISTAS
$qMaxPPISTA = "SELECT max(`ID_PPistas`) as IDPISTA from Postos_Pistas where `ID_Func_PP` = RetornaIdFuncionario('$username')";
     $rMaxpp = mysqli_query($mysqli, $qMaxPPISTA);
       while ($rowq = mysqli_fetch_array($rMaxpp, MYSQLI_ASSOC)) {

            $IDPISTA = $rowq['IDPISTA'];

            $lastData = "SELECT `DataPP` as LASTDATA from Postos_Pistas  WHERE ID_PPistas = '$IDPISTA'";
                $rd = mysqli_query($mysqli, $lastData);
                while ($rowd = mysqli_fetch_array($rd, MYSQLI_ASSOC)) {

                      $LASTDATA = $rowd['LASTDATA'];

                    print $LASTDATA.'<br>';
                }
     }

print "<br> If $LASTDATA == $dataAtualx";
if ($LASTDATA == $dataAtualx){
// colocar o array dos locais e ir buscar os registos desse dia e inserir novamente na grid do request


print "<br>aqui<br>";

//Insere locais no array
$qu1= "SELECT `ID_Local_LF` FROM `local_funcionarios` WHERE `ID_Funcionario_LF`= RetornaIdFuncionario('$username')";
              $r1 = mysqli_query($mysqli, $qu1);
                  while ($ruz = mysqli_fetch_array($r1, MYSQLI_ASSOC)) {

                            foreach ($ruz as $keyy => $ID_Local_LF) {
                                 array_push($XLocal, $ID_Local_LF);
                            }
                  }
                echo json_encode($XLocal);

$queryMaxID = "SELECT max(`ID_Pedido`) as MaxID FROM `Request`";
     $result = mysqli_query($mysqli, $queryMaxID);
           while ($row1 = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
                      $MaxRequestx = $row1['MaxID'];
           }

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

foreach($XLocal as $indice => $loc) {

    $QregDia = "SELECT `ID_Request`,ID_PPista,`ID_Tipo_Req` as TipoReg,`ID_Local_Req` as Local,
                  `Contagem_Req` as ContagemPP,`Data_Req`as DataPP,`Num_Equip` as NumeroEqui, `Id_EquiLav`as ID_EquiLav
                    FROM `Request` WHERE `Data_Req` = '$dataAtualx' and `ID_Local_Req` = '$loc'  and `ID_Func_Req` =RetornaIdFuncionario('$username')";

            $resultRD = mysqli_query($mysqli, $QregDia);

        while ($rD = mysqli_fetch_array($resultRD, MYSQLI_ASSOC)) {

                  $ID_PPista = $rD['ID_PPista'];
                  $TipoReg = $rD['TipoReg'];
                  $Local = $rD['Local'];
                  $Contagem = $rD['ContagemPP'];

                  $DataPP = $rD['DataPP'];
                  $NumeroEqui = $rD['NumeroEqui'];
                  $ID_EquiPorLav_PP = $rD['ID_EquiLav'];

            print "id PPista $ID_PPistas";
            print "<br>ID Equi Lav $ID_EquiPorLav_PP";
            print "<br>Local  $Local";
            print "<br>Tipo Req $TipoReg";
            print "<br>ID Contagem $Contagem";
            print "<br>ID Equi Lav $ID_EquiPorLav_PP";
            print "<br>NumeroEqui $NumeroEqui<br>";

       $insert = mysqli_query($mysqli, "call InserirPedido1 ('$TipoReg','$Local','$Contagem','$dataAtualx','$ID_PPista',$NumRequest,'$dataAtualx','$username','$NumeroEqui','$ID_EquiPorLav_PP')");

        }
 }

} else {
print "else";

$query = "SELECT * FROM `local_funcionarios` WHERE `ID_Funcionario_LF`=RetornaIdFuncionario('$username')";
$result = mysqli_query($mysqli, $query);

if( $result -> num_rows > 1 ) {            //funcionário trabalha em + que um local

$queryMaxID = "SELECT max(`ID_Pedido`) as MaxID FROM `Request`";
     $result = mysqli_query($mysqli, $queryMaxID);
           while ($row1 = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
                      $MaxRequestx = $row1['MaxID'];
           }

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

print "<br> aqui <br><br>";

$qu1= "SELECT `ID_Local_LF` FROM `local_funcionarios` WHERE `ID_Funcionario_LF`= RetornaIdFuncionario('$username')";
              $r1 = mysqli_query($mysqli, $qu1);
                  while ($ruz = mysqli_fetch_array($r1, MYSQLI_ASSOC)) {

                            foreach ($ruz as $keyy => $ID_Local_LF) {
                                 array_push($XLocal, $ID_Local_LF);
                            }
                  }
                echo json_encode($XLocal);

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

     print "<br> Sucesso.<br>";

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
