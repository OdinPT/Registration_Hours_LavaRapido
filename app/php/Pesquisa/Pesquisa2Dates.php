<?php
    include "../config.php";

  $username = $_COOKIE['cookieEmail'];
  $DataBegin = $_POST['Datainicio'];
  $DataEnd = $_POST['DateFim'];

   //$DataBegin = '30-09-2018'>;
   //$DataEnd = '10-09-2018';
   //print "$DataBegin <p> $DataEnd";

    //format Date  dd/mm/YYY to yy/mm/dd
    $DataInicio = date('Y-m-d', strtotime($DataBegin));
    $DataFim = date('Y-m-d', strtotime($DataEnd));

//print "<p>formatada $DataInicio $DataFim";

  $dataAtual= date('y/m/d');
  $mysqli->set_charset("utf8");
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
           print "$NumRequest = $NumRequestx +1";
           $NumRequest = $NumRequestx +1;

            print "Num Req ".$NumRequest;

    $query1 = "SELECT *
                FROM Postos_Pistas,Reg_Equipamentos_Lavagem
                WHERE (`DataPP` BETWEEN '$DataFim' AND '$DataInicio' and `ID_EquiPorLav_PP` = ID_EquiLav)";

   $result1 = mysqli_query($mysqli, $query1);

 while ($row = mysqli_fetch_array($result1, MYSQLI_ASSOC)) {

       $IDPista = $row['ID_PPistas'];
       $TipoReg = $row['ID_Tipo_equiLav'];
       $Local = $row['ID_Local_EquiLav'];
       $Contagem = $row['ContagemPP'];
       $Data = $row['DataPP'];

    $query0 = mysqli_query($mysqli, " call InserirPedido('$TipoReg','$Local','$Contagem','$Data','$IDPista','$NumRequest','$dataAtual','$username')");

  }

mysqli_close($mysqli);

?>

