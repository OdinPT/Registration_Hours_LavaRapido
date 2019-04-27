<?php

 include "../config.php";
 include "../Functions.php";

 //recebe id da combobox
 $id_Local = $_POST['ID_Local_LF'];

 $mysqli->set_charset("utf8");
 $return_arr = array();

 $query2 = "SELECT `ID_EquiLav`,`ID_Local_EquiLav`,`ID_Tipo_equiLav`,`Num_EquiLav`
                         FROM `Reg_Equipamentos_Lavagem`
                         WHERE `ID_Local_EquiLav` = $ID_LocalFunc order by ID_EquiLav asc";

       $resultx = mysqli_query($mysqli, $query2);
         while ($row = mysqli_fetch_array($resultx, MYSQLI_ASSOC)) {

           $ID_EquiLav = $row['ID_EquiLav'];
           $ID_LocalLAV = $row['ID_Local_EquiLav'];
           $TipoEquipamentoLavagem = $row['ID_Tipo_equiLav'];
           $Num_EquiLav = $row['Num_EquiLav'];

                 /*
                     print " ** ID do Equipamento Lav  $ID_EquiLav </p>";
                     print " ID Local : $ID_LocalLAV </p>";
                     print " Tipo Equip: $TipoEquipamentoLavagem </p>";
                 */
         }

 //print "</p>----</p>";
 $query3 = "SELECT count(`ID_Tipo_equiLav`)as maxEquiLav FROM `Reg_Equipamentos_Lavagem` WHERE ID_Local_EquiLav= '$ID_LocalLAV'";

      $resultx = mysqli_query($mysqli, $query3);
         while ($row = mysqli_fetch_array($resultx, MYSQLI_ASSOC)) {

                 $TotalEquiLav = $row['maxEquiLav'];
                // print "Total de Equipamentos por Lavagem $TotalEquiLav </p>";
         }

  $Total = array();

     $query4= "SELECT ID_EquiLav FROM `Reg_Equipamentos_Lavagem` WHERE `ID_Local_EquiLav` = '$ID_LocalLAV'  order by ID_EquiLav asc ";

           $resul = mysqli_query($mysqli, $query4);

            while ($ru = mysqli_fetch_array($resul, MYSQLI_ASSOC)) {

                             foreach ($ru as $keyy => $ID_EquipamentosLav) {
                                 array_push($Total, $ID_EquipamentosLav);
                             }
         }
        //echo json_encode($Total);

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
                                                   $row_array['ContagemPP'] =' ';

                                                     array_push($return_arr,$row_array);
                                                   }
    }

echo json_encode($return_arr);
mysqli_close($mysqli);

?>

