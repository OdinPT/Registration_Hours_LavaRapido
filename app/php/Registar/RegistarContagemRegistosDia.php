<?php
include "../config.php";
include "../Functions.php";

$mysqli->set_charset("utf8");
$DataAtual = date("Y-m-d");

$ID_Request = $_COOKIE['cookieContagemSelect'];
$Num_Equip = $_COOKIE['cookieNum_Equip'];

$ID_PPista = $_COOKIE['cookieID_PPista'];
$username = $_COOKIE['cookieEmail'];
$Contagem = $_POST['ContagemPPz'];

$con = get_numeric($Contagem);
//print "Contagem $con <br>";

$querw1 = mysqli_query($mysqli, "SELECT `ID_Local_EquiLav`,`ID_Tipo_equiLav`,`ID_EquiLav` FROM `Reg_Equipamentos_Lavagem` WHERE `Num_EquiLav`= '$Num_Equip'");

   while($res = mysqli_fetch_array($querw1)){

	        $Local = $res['ID_Local_EquiLav'];
	        $Tipo_Registo = $res['ID_Tipo_equiLav'];
	        $ID_EquiLav = $res['ID_EquiLav'];
    }

if ($con != $Contagem){
    header('HTTP', true, 500);

} else {
        // verifica se existe IDPPIsta
    if ($ID_PPista = " "){

        $query1 = mysqli_query($mysqli, "SELECT `ID_LimMaxCont`,`Limit_Diario` FROM `Lim_Max_Cont`
                                            where `ID_Local_LimMaxCont` = $Local and Tipo_Equip_LimMaxCont = $Tipo_Registo");

            while($r1 = mysqli_fetch_array($query1)){

	            $LimMaxDiario = $r1['Limit_Diario'];
            }


         $query02 = mysqli_query($mysqli, "select `ID_EquiLav` from Reg_Equipamentos_Lavagem
                                           where `Num_EquiLav`= $NumEqui and `ID_Local_EquiLav` = $Local and ID_Tipo_equiLav = $Tipo_Registo");

            while($res = mysqli_fetch_array($query02)){

    	        $ID_EquiLav = $res['ID_EquiLav'];

            }

         $query3 = mysqli_query($mysqli, "SELECT * FROM `Postos_Pistas` WHERE `ID_Func_PP` = RetornaIdFuncionario('$username') and
                                                                       ID_EquiPorLav_PP = $ID_EquiLav order by`DataPP` desc limit 1");
               while($res = mysqli_fetch_array($query3)) {

                    $ID_PPistas = $res['ID_PPistas'];
    	            $LastCongemFunc = $res['ContagemPP'];
               }

            $querycheck= "SELECT COUNT(*) as Result FROM Postos_Pistas";
                $resutw1 = mysqli_query($mysqli, $querycheck);

                while ($ruw1 = mysqli_fetch_array($resutw1, MYSQLI_ASSOC)) {

                      $ResultCheck = $ruw1['Result'];

                }

        if ($LastCongemFunc == 0){

                 if($Contagem < $LimMaxDiario) {

                    $query2 = mysqli_query($mysqli, "call InsereContagem01('$Contagem','$DataAtual','$username',$Num_Equip,$ID_Request)");
                 } else {
                  // contagem superior ao limite diário
                     header('HTTP', true, 502);
                 }
        } else {
                $AntMaisLim = $LastCongemFunc + $LimMaxDiario;

                     if ($Contagem < $AntMaisLim){
                         //print "<p>dentro do if #2.1 <p>";
                       $query2 = mysqli_query($mysqli, "call InsereContagem01('$Contagem','$DataAtual','$username',$Num_Equip,$ID_Request)");
                     }else{
                        header('HTTP', true, 501);
                     }
        }
    }else{

    $insere = mysqli_query($mysqli, "call EditaRegContdiario1('$Tipo_Registo','$Local','$Contagem','$ID_PPista','$DataAtual','$DataAtual',$Num_Equip,'$username','$ID_Request')");
}
}
mysqli_close($mysqli);
?>