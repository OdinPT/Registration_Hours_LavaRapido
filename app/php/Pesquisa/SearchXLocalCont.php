<?php
 //error_reporting(0);
 include "../config.php";

    $Local = $_POST['ID_Localz1'];
    //$Local = 3;
    $username = $_COOKIE['cookieEmail'];
    $dataAtualx= date('Y-m-d');
    $dataAtual= date('y/m/d');

    $return_arr = array();
    $mysqli->set_charset("utf8");
    $Totalx = array();
    $Total = array();

$queryMID = "SELECT max(`ID_Pedido`) as MaxID FROM `Request`";

     $rsult = mysqli_query($mysqli, $queryMID);

           while ($r1 = mysqli_fetch_array($rsult, MYSQLI_ASSOC)) {
                      $NumRequestx = $r1['MaxID'];
           }
           if ($NumRequestx == 0){
                print "tabela vazia <br>";
                 $NumRequest = 0;
                 $NumRequestx = 2000;

                print "$NumRequest = $NumRequestx +1";
                  $NumRequest = $NumRequestx +1;

                  print "Num Req ".$NumRequest;
           }

           $NumRequest = 0;
           print "$NumRequest = $NumRequestx +1";
           $NumRequest = $NumRequestx +1;

            print "Num Req ".$NumRequest;

    $query1= "SELECT ID_EquiLav FROM `Reg_Equipamentos_Lavagem` WHERE `ID_Local_EquiLav` = '$Local'";
       $resul = mysqli_query($mysqli, $query1);

      while ($ru = mysqli_fetch_array($resul, MYSQLI_ASSOC)) {
                    foreach ($ru as $keyy => $ID_EquiLav) {
                         array_push($Total, $ID_EquiLav);
                    }
      }
                echo json_encode($Total); print "<br>";

foreach($Total as $indice => $valor) {

    $queryw0 = "SELECT ID_EquiLav,ID_Local_EquiLav,ID_Tipo_equiLav,Num_EquiLav
                                FROM `Reg_Equipamentos_Lavagem`,locais, multiusos
                     WHERE `ID_Local_EquiLav` = $Local and `ID_Tipo_equiLav`=ID_acesso and`ID_Local_EquiLav`=ID_Local and ID_EquiLav = $valor
                                   order by ID_EquiLav asc limit 1";

            $resultw0 = mysqli_query($mysqli, $queryw0);

        while ($ru = mysqli_fetch_array($resultw0, MYSQLI_ASSOC)) {

                  $ID_PPistas = $ru['ID_PPistas'];
                  $ContagemPP = $ru['ContagemPP'];
                  $DataPP = $ru['DataPP'];

                  $ID_EquiPorLav_PP = $ru['ID_EquiLav'];
                  $Local = $ru['ID_Local_EquiLav'];
                  $TipoReg = $ru['ID_Tipo_equiLav'];



                  $TipoReg = $ru['ID_Tipo_equiLav'];
                  $Contagem = $ru['ContagemPP'];
                  $NumeroEqui = $ru['Num_EquiLav'];

            print "<br>first query<br>";
            print "$ID_PPistas<br>";
            print "Contagem $ContagemPP <br>";
            print " Data $DataPP <br>";
            print "ID EquiLAv $ID_EquiPorLav_PP <br>";
            print " Local $Local <br>";
            print " Num Request $NumRequest <br>";

            print "Tipo registo $TipoReg <br>";
            print "Contagem : $Contagem <br>";
            print "NumEquipamento $NumeroEqui <br>";
            print "<br>";

//check if table PostosPistas is empthy
   $querycheck= "SELECT COUNT(*) as Result FROM Postos_Pistas";
        $resutw1 = mysqli_query($mysqli, $querycheck);
                        while ($ruw1 = mysqli_fetch_array($resutw1, MYSQLI_ASSOC)) {

                              $ResultCheck = $ruw1['Result'];

//print "Result check $ResultCheck </br> ";

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

         print "<br> <be queryw2 $out $NumRequest $ID_PPistas  $ContagemPP $DataPP $ID_Func_PP $ID_EquiPorLav_PP";

   if($dataAtualx == $DataPP){

       print "primeiro if";
        //print " ('$TipoReg','$Local','$Contagem','$dataAtual','$ID_PPistas',$NumRequest,'$dataAtual','$username','$NumeroEqui')";
        $insert = mysqli_query($mysqli, "call InserirPedido1 ('$TipoReg','$Local','$Contagem','$dataAtual','$ID_PPistas',$NumRequest,'$dataAtual','$username','$NumeroEqui')");

    }else{
         $ContVazio = ' ';
         print "else";
        //print "'$TipoReg','$Local','$ContVazio','$dataAtual','$ID_PPistas',$NumRequest,'$dataAtual','$username','$NumeroEqui'";
     $insert = mysqli_query($mysqli, "call InserirPedido1 ('$TipoReg','$Local','$ContVazio','$dataAtual','$ID_PPistas',$NumRequest,'$dataAtual','$username','$NumeroEqui')");

    }
  }
       //check if table POSTOS_PISTAS is empthy.
      if ($ResultCheck == 0) {

            print "if table is empthy";

                print "<br>$TipoReg','$Local',Contagem: '$Contagem','$dataAtual',ID Pista' $ID_PPistas, $NumRequest,'$dataAtual','$username','$NumeroEqui'";

        $insert = mysqli_query($mysqli, "call InserirPedido1 ('$TipoReg','$Local','$Contagem','$dataAtual','$IDPista', $NumRequest,'$dataAtual','$username','$NumeroEqui')");
      }else {
            print "else table is not empthy";
        $insert = mysqli_query($mysqli, "call InserirPedido1 ('$TipoReg','$Local','$Contagem','$dataAtual','$IDPista', $NumRequest,'$dataAtual','$username','$NumeroEqui')");
      }

}
}
   }

?>
