<?php

 include "../config.php";
 $username = $_COOKIE['cookieEmail'];

 $dataAtualx= date('Y-m-d');
 $dataAtual= date('y/m/d');

$mysqli->set_charset("utf8");

$query = "SELECT * FROM `local_funcionarios` WHERE `ID_Funcionario_LF`=RetornaIdFuncionario('$username')";
$result = mysqli_query($mysqli, $query);

if( $result -> num_rows > 1 ) {            //mais que um local

	   header("HTTP/1.0 404 Not Found");
                                header('HTTP', true, 500);
  } else {                                   // um só local

     print "Sucesso";

     $return_arr = array();
     $Totalx = array();

     $query1 = "call Retorna_Locais_do_Func ('$username')";
     $result1 = mysqli_query($mysqli, $query1);

     while ($row = mysqli_fetch_array($result1, MYSQLI_ASSOC)) {

        $Local = $row['ID_Local'];

     }

$queryMaxID = "SELECT max(`ID_Pedido`) as MaxID FROM `Request`";

     $result = mysqli_query($mysqli, $queryMaxID);

           while ($row1 = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
                      $MaxRequest = $row1['MaxID'];
           }

        if ($MaxRequest == 0) {         // se não existir registos na tabela
           $NumRequest = 1;
        } else {
           $NumRequest = $MaxRequest +3;
        }

$queryx = "SELECT `ID_PPistas`,`ContagemPP`,`DataPP`,`ID_Func_PP`,`ID_EquiPorLav_PP`,`ID_EquiLav`,`ID_Local_EquiLav`,`ID_Tipo_equiLav`,`Num_EquiLav` as NumeroEqui
                FROM Postos_Pistas, Reg_Equipamentos_Lavagem
                WHERE`ID_EquiPorLav_PP`= `ID_EquiLav` and`ID_Local_EquiLav`= $Local ";

  $resultx = mysqli_query($mysqli, $queryx);

      $Total = array();

              $query1= "SELECT ID_EquiLav FROM `Reg_Equipamentos_Lavagem` WHERE `ID_Local_EquiLav` = '$Local'";
                    $resul = mysqli_query($mysqli, $query1);

                while ($ru = mysqli_fetch_array($resul, MYSQLI_ASSOC)) {
                    foreach ($ru as $keyy => $ID_EquiLav) {
                         array_push($Total, $ID_EquiLav);
                    }
                }
                //echo json_encode($Total);

foreach($Total as $indice => $valor) {

    $queryw0 = "SELECT ID_EquiLav,ID_Local_EquiLav,ID_Tipo_equiLav,Num_EquiLav
                                FROM `Reg_Equipamentos_Lavagem`,locais, multiusos
                                   WHERE `ID_Local_EquiLav` = $Local and `ID_Tipo_equiLav`=ID_acesso and`ID_Local_EquiLav`=ID_Local and ID_EquiLav = $valor
                                   order by ID_EquiLav asc limit 1";

            $resultw0 = mysqli_query($mysqli, $queryw0);

        while ($ru = mysqli_fetch_array($resultw0, MYSQLI_ASSOC)) {

                  $ID_PPistas = $ru['ID_PPistas'];
                  //$ContagemPP = $ru['ContagemPP'];
                  $ContagemPP = ' ';
                  $DataPP = $ru['DataPP'];

                  $ID_EquiPorLav_PP = $ru['ID_EquiLav'];
                  $Local = $ru['ID_Local_EquiLav'];
                  $TipoReg = $ru['ID_Tipo_equiLav'];

                  $Local = $ru['ID_Local_EquiLav'];
                  $TipoReg = $ru['ID_Tipo_equiLav'];
                  $Contagem = $ru['ContagemPP'];
                  $NumeroEqui = $ru['Num_EquiLav'];

            print "<br>first query<br>";

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
