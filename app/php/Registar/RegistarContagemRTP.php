<?php
include "../config.php";
include "../Functions.php";

$mysqli->set_charset("utf8");
$username = $_COOKIE['cookieEmail'];
$Num_EquiLav = $_COOKIE['cookieID_ContadoresRDP'];

$Override = $_POST['OverrideLim'];

$Contagem = $_POST['Contagemzz2'];
$con = get_numeric($Contagem);
$dataAtual = $_POST['datazz2'];

$con = mysqli_real_escape_string($mysqli, $con);
$dataAtual = mysqli_real_escape_string($mysqli, $dataAtual);


if ($con != $Contagem){

 header('HTTP', true, 500);
} else{

if ($Override == 1){

    $query2 = mysqli_query($mysqli, "call InsereContagem0($Contagem,'$dataAtual','$username',$Num_EquiLav)");

} else{

$querw1 = mysqli_query($mysqli, "SELECT `ID_EquiLav`,`ID_Local_EquiLav`,`ID_Tipo_equiLav` FROM `Reg_Equipamentos_Lavagem`
                                    WHERE `Num_EquiLav`= $Num_EquiLav");

   while($res1 = mysqli_fetch_array($querw1)){

	        $Tipo_Registo = $res1['ID_Tipo_equiLav'];
	        $Local = $res1['ID_Local_EquiLav'];
	        $ID_Equip = $res1['ID_EquiLav'];
   }

$query1 = mysqli_query($mysqli, "SELECT `ID_LimMaxCont`,`Limit_Diario` FROM `Lim_Max_Cont`
                                    where `ID_Local_LimMaxCont` = $Local and Tipo_Equip_LimMaxCont = '$Tipo_Registo'");

   while($res = mysqli_fetch_array($query1)){

	        $LimMaxDiario = $res['Limit_Diario'];
	        print "Lim diario $LimMaxDiario ";
   }


$query3 = mysqli_query($mysqli, "SELECT * FROM `Postos_Pistas`
               WHERE `ID_Func_PP` = RetornaIdFuncionario('$username') and ID_EquiPorLav_PP = $ID_Equip order by`DataPP` desc limit 1");

   while($res3 = mysqli_fetch_array($query3)){

            $ID_PPistas = $res3['ID_PPistas'];
	        $LastCongemFunc = $res3['ContagemPP'];

            print "<br> ID PPistas $ID_PPistas";
	        print "<br> antiga contagem $LastCongemFunc";
   }


$querycheck = "SELECT COUNT(*) as Result FROM Postos_Pistas";

     $resutw1 = mysqli_query($mysqli, $querycheck);

           while ($ruw1 = mysqli_fetch_array($resutw1, MYSQLI_ASSOC)) {
                  $ResultCheck = $ruw1['Result'];
                                print "</br> <b>Existe Dados : $ResultCheck</br></b>";
            }

    if ($LastCongemFunc == 0){
                 if($Contagem < $LimMaxDiario) {

                    print "<br> Regista #1";

                    $query2 = mysqli_query($mysqli, "call InsereContagem0($Contagem,'$dataAtual','$username',$Num_EquiLav)");

                 } else {
                    header('HTTP', true, 502);
                 }
    } else {
                                                                print "<br><b>primeiro else #1</b><br>";
            $AntMaisLim = $LastCongemFunc + $LimMaxDiario;

                      print "($Contagem < $AntMaisLim)";

                     if ($Contagem < $AntMaisLim){
                         print "<p>dentro do if #2.1 <p>";

                          $query2 = mysqli_query($mysqli, "call InsereContagem0($Contagem,'$dataAtual','$username',$Num_EquiLav)");

                     }else{

                        header('HTTP', true, 501);
                     }
    }
   }
  }

mysqli_close($mysqli);
?>