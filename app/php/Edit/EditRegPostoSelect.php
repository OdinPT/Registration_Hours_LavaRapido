<?phpinclude "../config.php";include "../Functions.php";//error_reporting(0);$mysqli->set_charset("utf8");$username = $_COOKIE['cookieEmail'];//$id20 = $_COOKIE['cookieID_ContadoresRDP'];$id20 = $_COOKIE['cookieID_EquiLav'];$ContagemEdit = $_POST['Contagemz'];$username = $_COOKIE['cookieEmail'];$Local20 = $_POST['Localz'];$TipoEquip20 = $_POST['Tipo_Equipamentoz'];$DataReg20 = $_POST['Dataz'];$NumEqui = $_POST['NumEquiz'];$DataAtual=date("Y-m-d");// se não existir limite diário para o equipamento não é possivel editar a contagemprint "Data a editar $DataReg20 contagem: $ContagemEdit <br>";$DataAnt=FormataDataInversa(RetornaDiaAnt_DataPers($DataReg20));$format=FormataDataInversa(FormataData1($DataReg20));$datadep = FormataDataInversa(RetornaDiaDep_DataPers($DataReg20));// converte nome do local e tipo de equipamento em numeros$query = mysqli_query($mysqli, "SELECT * FROM `locais`,multiusos WHERE `Descricao_Local` = '$Local20' and `Descrisao` ='$TipoEquip20' ");    while($resx = mysqli_fetch_array($query)) {	        $IDLocal20 = $resx['ID_Local'];	        $IDEquipamento20 = $resx['ID_acesso'];    }print "<br>  ID Local $IDLocal20 ==> Tipo equipamento: $IDEquipamento20 <br><br>--------------------<br>";$query1 = mysqli_query($mysqli, "SELECT `ID_EquiLav` FROM `Reg_Equipamentos_Lavagem`                                 WHERE `ID_Local_EquiLav`= $IDLocal20 and `ID_Tipo_equiLav`= $IDEquipamento20 and `Num_EquiLav`= $NumEqui");    while($res = mysqli_fetch_array($query1)) {	        $ID_EquiLav = $res['ID_EquiLav'];    } print "Id Local:$IDLocal20 <b>Tipo equipamento: $IDEquipamento20</b> Numero do equipamento: $NumEqui <b>ID Equi Lav $ID_EquiLav</b> <br><br>";//retorna contagem da data anterior$query2 = mysqli_query($mysqli, "select `ContagemPP` from Postos_Pistas where `ID_EquiPorLav_PP`= '$ID_EquiLav' and`DataPP` = '$DataAnt'");    while($resCAnt = mysqli_fetch_array($query2)) {	        $ContagemDiaAnt = $resCAnt['ContagemPP'];    }//print "<br>==> Colocar aqui para se não existir registo dia anterior assumir o limite diárioprint "<b>Dia anterior $DataAnt</b> Contagem  $ContagemDiaAnt<p>";$query3 = mysqli_query($mysqli, "select `ContagemPP` from Postos_Pistas where `ID_EquiPorLav_PP`= '$ID_EquiLav' and`DataPP` = '$datadep'");    while($resCAnt = mysqli_fetch_array($query3)) {	        $ContagemDiaDep = $resCAnt['ContagemPP'];    }print " <b> ++ dia depois $datadep</b> Contagem $ContagemDiaDep";//limite diário do tipo de equipamento deste local$query4 = mysqli_query($mysqli, "SELECT `Limit_Diario` FROM `Lim_Max_Cont`                                        WHERE `ID_Local_LimMaxCont` = $IDLocal20 and`Tipo_Equip_LimMaxCont`= $IDEquipamento20");    while($limmax = mysqli_fetch_array($query4)) {	        $Limit_Diario = $limmax['Limit_Diario'];    }$contagemAntLimi = $ContagemDiaAnt + $Limit_Diario;print "<br><br>dia anterior + lim diário = $ContagemDiaAnt + $Limit_Diario = $contagemAntLimi</br>";if ($contagemAntLimi > $ContagemEdit ){             echo" dentro if 1"; print "<br>";    if ($ContagemEdit < $contagemAntLimi){            //print "'$IDEquipamento20','$IDLocal20','$ContagemEdit','$id20','$DataAtual','$DataReg20',$NumEqui <br>";     $insere = mysqli_query($mysqli, "call EditaRegContdiario('$IDEquipamento20','$IDLocal20','$ContagemEdit','$id20','$DataAtual','$DataReg20',$NumEqui,'$username')");                print "dentro if 2";    }else{            header("HTTP/1.0 406 Not Found");            header('HTTP', true, 406);    }}else{      header("HTTP/1.0 406 Not Found");      header('HTTP', true, 406);}mysqli_close($mysqli);?>