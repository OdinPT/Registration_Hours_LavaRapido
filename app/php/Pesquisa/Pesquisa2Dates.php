<?php

include "../config.php";
  $username = $_COOKIE['cookieEmail'];
  $dataAtual= date('y/m/d');

  $mysqli->set_charset("utf8");
  $return_arr = array();

  $DataBegin = $_POST['Datainicio'];
  $DataEnd = $_POST['DateFim'];

print "=> $DataBegin <p> => $DataEnd <p> ";

    //format mm-dd-yy
    $DataInicio = date('Y-m-d', strtotime($DataBegin));
    $DataFim = date('Y-m-d', strtotime($DataEnd));


print "<p> mm-dd-yy  formatada d-m-y  $DataInicio  Data Fim $DataFim <br>";

print "<br><br><br>";


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

            print "<br>Num Req ".$NumRequest;
            print "<br>";

    $query1 = "SELECT *
                FROM Postos_Pistas,Reg_Equipamentos_Lavagem
                WHERE (`DataPP` BETWEEN '$DataInicio' AND '$DataFim' and `ID_EquiPorLav_PP` = ID_EquiLav)";

   $result1 = mysqli_query($mysqli, $query1);

 while ($row = mysqli_fetch_array($result1, MYSQLI_ASSOC)) {

       $IDPista = $row['ID_PPistas'];
       $Contagem = $row['ContagemPP'];
       $Data = $row['DataPP'];
       $Local = $row['ID_Local_EquiLav'];

       $TipoReg = $row['ID_Tipo_equiLav'];
       $ID_EquiLav = $row['ID_EquiLav'];
       $Num_EquiLav = $row['Num_EquiLav'];


    print "'$TipoReg','$Local','$Contagem','$Data','$IDPista','$NumRequest','$dataAtual','$username','$Num_EquiLav',$ID_EquiLav <br>";

    $query0 = mysqli_query($mysqli, " call InserirPedido2('$TipoReg','$Local','$Contagem','$Data','$IDPista','$NumRequest','$dataAtual','$username','$Num_EquiLav','$ID_EquiLav')");

  }

mysqli_close($mysqli);
?>

