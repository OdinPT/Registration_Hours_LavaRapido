<?php
include "../config.php";
include "../Functions.php";

$mysqli->set_charset("utf8");
$DataAtual = date("Y-m-d");

$ID_Request = $_COOKIE['cookieContagemSelect'];
$ID_PPista = $_COOKIE['cookieID_PPista'];
$username = $_COOKIE['cookieEmail'];

$Contagem = $_POST['ContagemPPz'];
$con = get_numeric($Contagem);

$con = mysqli_real_escape_string($mysqli, $con);

$querw1 = mysqli_query($mysqli, "SELECT `ID_Tipo_Req`,`ID_Local_Req`,`Num_Equip` FROM `Request` WHERE `ID_Request`= '$ID_Request'");

   while($res = mysqli_fetch_array($querw1)){

	        $Tipo_Registo = $res['ID_Tipo_Req'];
	        $Local = $res['ID_Local_Req'];
	        $Num_Equip = $res['Num_Equip'];
   }

 //print "Tipo equipamento $Tipo_Registo ";
 //print "<br> => Local $Local <br> Num Equipamento $Num_Equip";


if ($con != $Contagem){
    header('HTTP', true, 500);

} else {

// verifica se existe IDPPIsta
if ($ID_PPista == " "){

        //lim máximo diráiro de cada equipamento
        $query1 = mysqli_query($mysqli, "SELECT `ID_LimMaxCont`,`Limit_Diario` FROM `Lim_Max_Cont`
                                            where `ID_Local_LimMaxCont` = $Local and Tipo_Equip_LimMaxCont = '$Tipo_Registo'");

        while($res = mysqli_fetch_array($query1)){

	        $LimMaxDiario = $res['Limit_Diario'];

	        //print "Lim diario $LimMaxDiario ";
        }

        $query02 = mysqli_query($mysqli, "select `ID_EquiLav` from Reg_Equipamentos_Lavagem where `Num_EquiLav`= $Num_Equip and `ID_Local_EquiLav` = $Local
                                    and ID_Tipo_equiLav = $Tipo_Registo");

        while($res = mysqli_fetch_array($query02)){

    	        $ID_EquiLav = $res['ID_EquiLav'];
	            // print "<br><br> ID EquiLav :$ID_EquiLav <br>";
        }

        $query3 = mysqli_query($mysqli, "SELECT * FROM `Postos_Pistas` WHERE `ID_Func_PP` = RetornaIdFuncionario('$username') and
                                                                       ID_EquiPorLav_PP = $ID_EquiLav order by`DataPP` desc limit 1");
        while($res = mysqli_fetch_array($query3)) {

                $ID_PPistas = $res['ID_PPistas'];
	            $LastCongemFunc = $res['ContagemPP'];

                //print "<br> ID PPistas $ID_PPistas";
	            //print "<br> antiga contagem $LastCongemFunc";
        }

        $querycheck= "SELECT COUNT(*) as Result FROM Postos_Pistas";
        $resutw1 = mysqli_query($mysqli, $querycheck);

           while ($ruw1 = mysqli_fetch_array($resutw1, MYSQLI_ASSOC)) {

                  $ResultCheck = $ruw1['Result'];

                 //print "</br> <b>Existe Dados : $ResultCheck</br></b>";
            }

        if ($LastCongemFunc == 0){
                 if($Contagem < $LimMaxDiario) {

                        print "<br> Regista #1";

                    $query2 = mysqli_query($mysqli, "call InsereContagem01('$Contagem','$DataAtual','$username',$Num_Equip,$ID_Request)");

                 } else {
                           //header("HTTP/1.0 404 Not Found");
                            //header('HTTP', true, 502);
                            print "erro 502";
                 }
        } else {
                  // print "<br><b>primeiro else #1</b><br>";
                $AntMaisLim = $LastCongemFunc + $LimMaxDiario;

                     // print "Antiga contagem mais limite diário $AntMaisLim<br><br><br><br>";
                     // print "($Contagem < $AntMaisLim )";

                     if ($Contagem < $AntMaisLim){
                      //   print "<p>dentro do if #2.1 <p>";
                       $query2 = mysqli_query($mysqli, "call InsereContagem01('$Contagem','$DataAtual','$username',$Num_Equip,$ID_Request)");

                     }else{

                        header('HTTP', true, 501);
                     }
        }


}else{
    // faz update a contagem
    print "update";
   $insere = mysqli_query($mysqli, "call EditaRegContdiario1('$Tipo_Registo','$Local','$Contagem','$ID_PPista','$DataAtual','$DataAtual',$Num_Equip,'$username','$ID_Request')");
}
}
mysqli_close($mysqli);
?>