<?php
include "../config.php";
include "../Functions.php";

$mysqli->set_charset("utf8");
$DataAtual = date("Y-m-d");

$ID_Request = $_COOKIE['cookieContagemSelect'];
$Num_Equip = $_COOKIE['cookieNum_Equip'];
$ID_PPista = $_COOKIE['cookieID_PPista'];
$username = $_COOKIE['cookieEmail'];

// usar Tipo equipamento e local para mostrar registos anteriores do equipamento

print $NumEqui;
$Contagem = $_POST['ContagemPPz'];
//$Contagem = 1300;
$con = get_numeric($Contagem);

//print "Contagem $con <br>";

$querw1 = mysqli_query($mysqli, "SELECT `ID_Local_EquiLav`,`ID_Tipo_equiLav` FROM `Reg_Equipamentos_Lavagem` WHERE `Num_EquiLav`= '$Num_Equip'");

   while($res = mysqli_fetch_array($querw1)){

	        $Local = $res['ID_Local_EquiLav'];
	        $Tipo_Registo = $res['ID_Tipo_equiLav'];
   }

 //print "=> Tipo equipamento $Tipo_Registo ";
 //print "<br> => Local $Local <br> Num Equipamento $Num_Equip";


if ($con != $Contagem){
    header('HTTP', true, 500);

} else {

// verifica se existe IDPPIsta
//print "<br> Id Pista => $ID_PPista ";
if ($ID_PPista == " "){

        //lim máximo diráiro de cada equipamento
        $query1 = mysqli_query($mysqli, "SELECT `ID_LimMaxCont`,`Limit_Diario` FROM `Lim_Max_Cont`
                                            where `ID_Local_LimMaxCont` = $Local and Tipo_Equip_LimMaxCont = '$Tipo_Registo'");

        while($res = mysqli_fetch_array($query1)){

	        $LimMaxDiario = $res['Limit_Diario'];

	        //print "<br> Lim diario $LimMaxDiario ";
        }


$query02 = mysqli_query($mysqli, "select `ID_EquiLav` from Reg_Equipamentos_Lavagem
                                            where `Num_EquiLav`= $NumEqui and `ID_Local_EquiLav` = $Local and ID_Tipo_equiLav = $Tipo_Registo");

        while($res = mysqli_fetch_array($query02)){

    	        $ID_EquiLav = $res['ID_EquiLav'];
	          //  print "<br><br> ID EquiLav :$ID_EquiLav <br>";
        }

        $query3 = mysqli_query($mysqli, "SELECT * FROM `Postos_Pistas` WHERE `ID_Func_PP` = RetornaIdFuncionario('$username') and
                                                                       ID_EquiPorLav_PP = $ID_EquiLav order by`DataPP` desc limit 1");
        while($res = mysqli_fetch_array($query3)) {

                $ID_PPistas = $res['ID_PPistas'];
	            $LastCongemFunc = $res['ContagemPP'];

                //print "<br> ID PPistas $ID_PPistas";
	            //print "<br> antiga contagem $LastCongemFunc";
        }

//aqui

        $querycheck= "SELECT COUNT(*) as Result FROM Postos_Pistas";
        $resutw1 = mysqli_query($mysqli, $querycheck);

           while ($ruw1 = mysqli_fetch_array($resutw1, MYSQLI_ASSOC)) {

                  $ResultCheck = $ruw1['Result'];

                 //print "</br> <b>Existe Dados : $ResultCheck</br></b>";
            }


// verificações para a contagem
//print "-- $LastCongemFunc ";

        if ($LastCongemFunc == 0){

                //print " Contagem < Lim diario || $Contagem < $LimMaxDiario";

                    // contagem < limdiario
                 if($Contagem < $LimMaxDiario) {

                        print "<br> Regista #1";

                    $query2 = mysqli_query($mysqli, "call InsereContagem01('$Contagem','$DataAtual','$username',$Num_Equip,$ID_Request)");

                 } else {
                  // contagem superior ao limite diário
                  header('HTTP', true, 502);

                 }
        } else {
                   print "<br><b>primeiro else #1</b><br>";
                $AntMaisLim = $LastCongemFunc + $LimMaxDiario;

                   print "Antiga contagem mais limite diário $AntMaisLim<br><br><br><br>";
                      print "($Contagem < $AntMaisLim )";

                     if ($Contagem < $AntMaisLim){
                         print "<p>dentro do if #2.1 <p>";
                       $query2 = mysqli_query($mysqli, "call InsereContagem01('$Contagem','$DataAtual','$username',$Num_Equip,$ID_Request)");

                     }else{

                        header('HTTP', true, 501);
                     }
        }


}else{
    // faz update a contagem
    //print "update";
   $insere = mysqli_query($mysqli, "call EditaRegContdiario1('$Tipo_Registo','$Local','$Contagem','$ID_PPista','$DataAtual','$DataAtual',$Num_Equip,'$username','$ID_Request')");
}
}
mysqli_close($mysqli);
?>