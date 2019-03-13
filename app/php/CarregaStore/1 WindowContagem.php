<?php
error_reporting(0);
include "../config.php";
include "../Functions.php";

//$username = $_COOKIE['cookieEmail'];
$username = 'jean';
$mysqli->set_charset("utf8");
$return_arr = array();

$query = mysqli_query($mysqli, "SELECT `ID_Local_LF` FROM `local_funcionarios` WHERE `ID_Funcionario_LF`=RetornaIdFuncionario('$username') ");
                                                                        //Seleciona  os locais do funcionários
   while($res = mysqli_fetch_array($query))
     {
  	        $ID_LocalFunc = $res['ID_Local_LF'];
  	         print " Funcionário <B> $username </B> e Id do Local é $ID_LocalFunc";
     }
// até aqui o local do user jean é a sede le foyer

$query1 = mysqli_query($mysqli, "select RetornaNomeLocal($ID_LocalFunc)as NomeLocal FROM `local_funcionarios` limit 1");

   while($res1 = mysqli_fetch_array($query1))
     {
  	        $NomeLocal = $res1['NomeLocal'];
  	        print " <B> $NomeLocal</B>  </p></p>";
     }

$query2 = "SELECT `ID_EquiLav`,`ID_Local_EquiLav`,`ID_Tipo_equiLav`,`Num_EquiLav`
                                        FROM `Reg_Equipamentos_Lavagem`
                                           WHERE `ID_Local_EquiLav` = $ID_LocalFunc order by ID_EquiLav asc";

      $resultx = mysqli_query($mysqli, $query2);
        while ($row = mysqli_fetch_array($resultx, MYSQLI_ASSOC)) {

          $ID_EquiLav = $row['ID_EquiLav'];
          $ID_LocalLAV = $row['ID_Local_EquiLav'];
          $TipoEquipamentoLavagem = $row['ID_Tipo_equiLav'];
          $Num_EquiLav = $row['Num_EquiLav'];


                    print " ** ID do Equipamento Lav  $ID_EquiLav </p>";
                    print " ID Local : $ID_LocalLAV </p>";
                    print " Tipo Equip: $TipoEquipamentoLavagem </p>";
                    print " Num Equi: $Num_EquiLav </p>";

        }

print "</br> ID Equipamentos por lav :</br>";
 $Total = array();

    $query4= "SELECT ID_EquiLav FROM `Reg_Equipamentos_Lavagem` WHERE `ID_Local_EquiLav` = '$ID_LocalLAV'  order by ID_EquiLav asc ";

          $resul = mysqli_query($mysqli, $query4);

           while ($ru = mysqli_fetch_array($resul, MYSQLI_ASSOC)) {

                            foreach ($ru as $keyy => $ID_EquipamentosLav) {
                                array_push($Total, $ID_EquipamentosLav);
                            }
        }
            echo json_encode($Total);
        print "</br></br>";

print "numeros de equipamentos";
    $NumEqui = array();

        $query5= "SELECT Num_EquiLav FROM `Reg_Equipamentos_Lavagem` WHERE `ID_Local_EquiLav` = '$ID_LocalLAV'  order by ID_EquiLav asc ";

              $resul5 = mysqli_query($mysqli, $query5);

               while ($ru5 = mysqli_fetch_array($resul5, MYSQLI_ASSOC)) {

                                foreach ($ru5 as $keyy => $Num_EquiLav) {
                                    array_push($NumEqui, $Num_EquiLav);
                                }
            }
            print "</br>";
                echo json_encode($NumEqui);
            print "</br></br>";

//refazer para ir buscar os valores do ID do equipamento Lav aos Postos por pista
//print "antes query 6";

/*
foreach($Total as $indice => $value) {

$query6 = "select ID_PPistas from Postos_Pistas,Reg_Equipamentos_Lavagem where `ID_EquiLav`=`ID_EquiPorLav_PP` and ID_EquiPorLav_PP = $value";
$resut = mysqli_query($mysqli, $query6);
              while ($ru = mysqli_fetch_array($resut, MYSQLI_ASSOC)) {

                     $ID_PPistas = $ru['ID_PPistas'];
                     print "        ID  PPIsta $ID_PPistas  $value    </br>";

                  }


}*/
//A fazer Posto por Pista para a grid

foreach($Total as $indice => $valor) {

       $queryt= "SELECT `ID_EquiLav`,Descricao_Local as `ID_Local_EquiLav`,Descrisao as`ID_Tipo_equiLav`,`Num_EquiLav`
                             FROM `Reg_Equipamentos_Lavagem`,locais, multiusos
                                WHERE `ID_Local_EquiLav` = $ID_LocalFunc and `ID_Tipo_equiLav`=ID_acesso and`ID_Local_EquiLav`=ID_Local
                                        and ID_EquiLav = $valor order by ID_EquiLav asc limit 1";

                                     $resut = mysqli_query($mysqli, $queryt);

                                              while ($ru = mysqli_fetch_array($resut, MYSQLI_ASSOC)) {

                                                  $row_array['ID_EquiLav'] = $ru['ID_EquiLav'];
                                                  $row_array['ID_Local_EquiLav'] = $ru['ID_Local_EquiLav'];
                                                  $row_array['ID_Tipo_equiLav'] = $ru['ID_Tipo_equiLav'];
                                                  $row_array['Num_EquiLav'] = $ru['Num_EquiLav'];
                                                  $row_array['ContagemPP'] =$ru['ContagemPP'];

                                                    array_push($return_arr,$row_array);
                                                  }
   }

echo json_encode($return_arr);


mysqli_close($mysqli);
?>