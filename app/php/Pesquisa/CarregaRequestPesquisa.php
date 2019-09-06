<?php
 //error_reporting(0);
 include "../config.php";
 include "../Functions.php";

    $mes = $_POST['numMes'];
    $username = $_COOKIE['cookieEmail'];

    $dataAtual= date('y/m/d');
    $Year = date("Y");
    $mysqli->set_charset("utf8");

    $return_arr = array();

    $NumRequest = GeraNumRequest($mysqli);
    //print "Request ".$NumRequest;

if ($mes == 13){

    $queryz0 = "SELECT * FROM Postos_Pistas,Reg_Equipamentos_Lavagem
                WHERE`ID_EquiPorLav_PP`= `ID_EquiLav` and Year(`DataPP`) = $Year  order by `DataPP` desc";

     $resultz0 = mysqli_query($mysqli, $queryz0);

           while ($row = mysqli_fetch_array($resultz0, MYSQLI_ASSOC)) {

                      $IDPista = $row['ID_PPistas'];
                      $TipoReg = $row['ID_Tipo_equiLav'];
                      $Local = $row['ID_Local_EquiLav'];
                      $Contagem = $row['ContagemPP'];
                      $Data = $row['DataPP'];

                      $IDLocal = $row['ID_Local_EquiLav'];
                      $IdTipo = $row['ID_Tipo_equiLav'];
                      $NumEqui = $row['Num_EquiLav'];
                      $ID_EquiLav = $row['ID_EquiLav'];

            $insert = mysqli_query($mysqli, "call InserirPedido1 ('$TipoReg','$Local','$Contagem','$Data','$IDPista','$NumRequest','$dataAtual','$username','$NumEqui','$ID_EquiLav')");

           }

} else {

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
                      $ID_EquiLav = $row['ID_EquiLav'];


            //print " <br> call InserirPedido1 ('$TipoReg','$Local','$Contagem','$Data','$IDPista',$NumRequestZ,'$dataAtual','$username','$NumEqui','$ID_EquiLav')<br>";
            $insert = mysqli_query($mysqli, "call InserirPedido1 ('$TipoReg','$Local','$Contagem','$Data','$IDPista','$NumRequest','$dataAtual','$username','$NumEqui','$ID_EquiLav')");

           }
}
mysqli_close($mysqli);
?>

