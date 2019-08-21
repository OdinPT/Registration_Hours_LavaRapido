<?php

include "../config.php";

include "../Functions.php";

 $username = $_COOKIE['cookieEmail'];
 $dataAtual= date('y/m/d');

$mysqli->set_charset("utf8");
$return_arr = array();

$DataBegin = $_POST['Datainicio'];
$DataEnd = $_POST['DateFim'];

  //format mm-dd-yy
$DataInicio = date('Y-m-d', strtotime($DataBegin));
$DataFim = date('Y-m-d', strtotime($DataEnd));

print "<p> mm-dd-yy  formatada d-m-y  $DataInicio  Data Fim $DataFim <br>";

$NumRequest = GeraNumRequest($mysqli);
print "Request ".$NumRequest;

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

