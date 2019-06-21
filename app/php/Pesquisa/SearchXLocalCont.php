<?php
 //error_reporting(0);
 include "../config.php";

    $Local = $_POST['ID_Localz1'];
    //$Local = 1;
    $username = $_COOKIE['cookieEmail'];
    $dataAtualx= date('Y-m-d');

    $datax = date('y/m/d');
    $mysqli->set_charset("utf8");

    $return_arr = array();
    $Totalx = array();
    $Total = array();

// vai ficar absolento.

//Seleciona  ID dos Equipamentos por Lavagem
    $query1= "SELECT ID_EquiLav FROM `Reg_Equipamentos_Lavagem` WHERE `ID_Local_EquiLav` = '$Local'";

      $resul = mysqli_query($mysqli, $query1);
          while ($ru = mysqli_fetch_array($resul, MYSQLI_ASSOC)) {

                    foreach ($ru as $keyy => $ID_EquiLav) {
                         array_push($Total, $ID_EquiLav);
                    }
          }
        echo json_encode($Total);

// verifica se já existe registos do dia atual
$existe = "Select EXISTS (SELECT * FROM Request where `Data_Req` = '$datax' and `ID_Local_Req` = '$Local') as max";
     $rm = mysqli_query($mysqli, $existe);

      while ($x1 = mysqli_fetch_array($rm, MYSQLI_ASSOC)) {

            $ExisteRegDia = $x1['max'];
            print "<br> existe registo do dia  $ExisteRegDia <br> <br>";
      }
print "($ExisteRegDia == TRUE)";

if($ExisteRegDia == TRUE){

    print "<br><br> ===> inserir <br><br>";


    $ReturnNumRequest = "SELECT max(`ID_Pedido`) as MaxID FROM Request where `Data_Req` = '$datax' and `ID_Local_Req` = '$Local' limit 1";
         $RNR = mysqli_query($mysqli, $ReturnNumRequest);

          while ($xn = mysqli_fetch_array($RNR, MYSQLI_ASSOC)) {

                $NumR = $xn['MaxID'];

                print "ID Pedido $NumRequest ";
                $NumRequest = $NumR + 1;
          }

    $ques = "SELECT * from Request where `Data_Req` = '$datax' and `ID_Local_Req` = $Local ";
               $reu= mysqli_query($mysqli, $ques);

       while ($rQ1 = mysqli_fetch_array($reu, MYSQLI_ASSOC)) {

          $ID_EquiLav = $rQ1['Id_EquiLav'];
          $TipoReg = $rQ1['ID_Tipo_Req'];
          $NumeroEqui = $rQ1['Num_Equip'];
          $ID_Func_Req = $rQ1['ID_Func_Req'];
          $ID_PPista = $rQ1['ID_PPista'];
          $Contagem = $rQ1['Contagem_Req'];
          $Data_Req = $rQ1['Data_Req'];


          print "<br>-- --<br>";

          print "ID EquiLav $ID_EquiLav <br>";
          print " Local $Local <br>";
          print "Tipo registo $TipoReg <br>";
          print "NumEquipamento $NumeroEqui <br>";

          print "ID Func $ID_Func_Req <br>";
          print "ID_PPista $ID_PPista <br>";
          print "Contagem =>  $Contagem <br>";

       $insert = mysqli_query($mysqli, "call InserirPedido2 ('$TipoReg','$Local','$Contagem','$Data_Req','$ID_PPista','$NumRequest','$datax','$username','$NumeroEqui','$ID_EquiLav')");
       }


} else {
print "ELSE  <br>  grid em branco ";

$ReturnNumRequest = "SELECT max(`ID_Pedido`) as MaxID FROM Request where `Data_Req` = '$datax' and `ID_Local_Req` = '$Local' limit 1";
         $RNR = mysqli_query($mysqli, $ReturnNumRequest);

          while ($xn = mysqli_fetch_array($RNR, MYSQLI_ASSOC)) {

                $NumRequestx = $xn['MaxID'];
          }

       if ($NumRequestx == 0){
                print "<br><br><br> tabela vazia <br><br><br>";
                 $NumRequest = 0;
                 $NumRequestx = 2000;
                 $NumRequest = $NumRequestx +1;
                  print "Num Req ".$NumRequest;
       }

foreach($Total as $indice => $valor) {

    $queryw0 = "SELECT * FROM `Reg_Equipamentos_Lavagem`,locais, multiusos
                 WHERE `ID_Local_EquiLav` = ID_Local and `ID_Tipo_equiLav`=ID_acesso and`ID_Local_EquiLav`= $Local and   ID_EquiLav = $valor limit 1 ";

            $resultw0 = mysqli_query($mysqli, $queryw0);

        while ($ru = mysqli_fetch_array($resultw0, MYSQLI_ASSOC)) {

               $ID_EquiLav = $ru['ID_EquiLav'];
               $TipoReg = $ru['ID_Tipo_equiLav'];
               $NumeroEqui = $ru['Num_EquiLav'];

            print "<br> ---query--<br>";
            print "ID EquiLav $ID_EquiLav <br>";
            print " Local $Local <br>";
            print "Tipo registo $TipoReg <br>";
            print "NumEquipamento $NumeroEqui <br>";

           $insert = mysqli_query($mysqli, "call InserirPedido2 ('$TipoReg','$Local',' ','$datax',' ',$NumRequest,'$datax','$username','$NumeroEqui','$ID_EquiLav')");
        }
}

}

mysqli_close($mysqli);
?>
