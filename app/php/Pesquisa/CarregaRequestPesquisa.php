<?php
 //error_reporting(0);
 include "../config.php";

    $mes = $_POST['numMes'];
    //$mes = 13;
    $mysqli->set_charset("utf8");
    $username = $_COOKIE['cookieEmail'];
    $dataAtual= date('y/m/d');
    $Year = date("Y");
    $return_arr = array();

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


if ($mes == 13){

    print " <br> $Year <br>";


    $queryz0 = "SELECT * FROM Postos_Pistas,Reg_Equipamentos_Lavagem WHERE`ID_EquiPorLav_PP`= `ID_EquiLav` and Year(`DataPP`) = $Year  order by `DataPP` desc";   //Pesquisa Pelo Mes solicidado pelo post

     $resultz0 = mysqli_query($mysqli, $queryz0);

           while ($row = mysqli_fetch_array($resultz0, MYSQLI_ASSOC)) {

                      $IDPista = $row['ID_PPistas'];
                      $TipoReg = $row['ID_Tipo_equiLav'];
                      $Local = $row['ID_Local_EquiLav'];
                      $Contagem = $row['ContagemPP'];
                      $Data = $row['DataPP'];
                      print "<br> $Data <br>";

                      $IDLocal = $row['ID_Local_EquiLav'];
                      $IdTipo = $row['ID_Tipo_equiLav'];
                      $NumEqui = $row['Num_EquiLav'];

            print " <br>'$TipoReg','$Local','$Contagem','$Data','$IDPista',$NumRequest,'$dataAtual','$username','$NumEqui'<br>";
            $insert = mysqli_query($mysqli, "call InserirPedido1 ('$TipoReg','$Local','$Contagem','$Data','$IDPista',$NumRequest,'$dataAtual','$username','$NumEqui')");

           }

} else {

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


    $queryx = "SELECT * FROM Postos_Pistas,Reg_Equipamentos_Lavagem WHERE`ID_EquiPorLav_PP`= `ID_EquiLav` and MONTH(`DataPP`) = $mes  order by `DataPP` desc";   //Pesquisa Pelo Mes solicidado pelo post

     $resultx = mysqli_query($mysqli, $queryx);

           while ($row = mysqli_fetch_array($resultx, MYSQLI_ASSOC)) {

                      $IDPista = $row['ID_PPistas'];
                      $TipoReg = $row['ID_Tipo_equiLav'];
                      $Local = $row['ID_Local_EquiLav'];
                      $Contagem = $row['ContagemPP'];
                      $Data = $row['DataPP'];

                      $IDLocal = $row['ID_Local_EquiLav'];
                      $IdTipo = $row['ID_Tipo_equiLav'];
                      $NumEqui = $row['Num_EquiLav'];

            print " <br>'$TipoReg','$Local','$Contagem','$Data','$IDPista',$NumRequest,'$dataAtual','$username','$NumEqui'<br>";
            $insert = mysqli_query($mysqli, "call InserirPedido1 ('$TipoReg','$Local','$Contagem','$Data','$IDPista',$NumRequest,'$dataAtual','$username','$NumEqui')");

           }
}
mysqli_close($mysqli);
?>

