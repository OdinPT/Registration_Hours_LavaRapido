<?php
 //error_reporting(0);
 include "../config.php";

    $Local = $_POST['ID_Localz1'];
    $username = $_COOKIE['cookieEmail'];

    $dataAtualx= date('Y-m-d');
    $dataAtual= date('y/m/d');
    print $dataAtual;

    $mysqli->set_charset("utf8");

    $return_arr = array();
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
           print "=> $NumRequest = $NumRequestx +1";
           $NumRequest = $NumRequestx +1;
           print "<br>Num Req ".$NumRequest."<br><br> --";


    $query1= "SELECT ID_EquiLav FROM `Reg_Equipamentos_Lavagem` WHERE `ID_Local_EquiLav` = '$Local'";
       $resul = mysqli_query($mysqli, $query1);

      while ($ru = mysqli_fetch_array($resul, MYSQLI_ASSOC)) {

                    foreach ($ru as $keyy => $ID_EquiLav) {
                         array_push($Total, $ID_EquiLav);
                    }
      }
                echo json_encode($Total); print "<br>";

print "<br>====================<br>";

foreach($Total as $indice => $valor) {

    $queryw0 = "SELECT * FROM `Reg_Equipamentos_Lavagem`,locais, multiusos
                 WHERE `ID_Local_EquiLav` = ID_Local and `ID_Tipo_equiLav`=ID_acesso and`ID_Local_EquiLav`=ID_Local and   ID_EquiLav = $valor limit 1 ";

            $resultw0 = mysqli_query($mysqli, $queryw0);

        while ($ru = mysqli_fetch_array($resultw0, MYSQLI_ASSOC)) {

                  $ID_EquiLav = $ru['ID_EquiLav'];
                  $TipoReg = $ru['ID_Tipo_equiLav'];
                  $NumeroEqui = $ru['Num_EquiLav'];

            print "<br>--first query--<br>";


            print "ID EquiLav $ID_EquiLav <br>";
            print " Local $Local <br>";
            print "Tipo registo $TipoReg <br>";
            print "NumEquipamento $NumeroEqui <br>";
            print "_____________________________<br><br>";

      $insert = mysqli_query($mysqli, "call InserirPedido2 ('$TipoReg','$Local',' ','$dataAtual',' ', $NumRequest,'$dataAtual','$username','$NumeroEqui','$ID_EquiLav')");

}
}

?>
