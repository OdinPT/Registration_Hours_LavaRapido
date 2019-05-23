<?php
include "../config.php";
include "../Functions.php";

$mysqli->set_charset("utf8");
$username = $_COOKIE['cookieEmail'];
$dataAtual= date('y/m/d');

$ID_Request = $_POST['ID_Request'];
$Tipo_RegistoZ= $_POST['ID_Tipo_Req'];
$LocalZ= $_POST['ID_Local_Req'];
$Contagem = $_POST['Contagem_Req'];
$Num_Equip= $_POST['Num_Equip'];

$ID_Request = mysqli_real_escape_string($mysqli, $ID_Request);
$Tipo_RegistoZ = mysqli_real_escape_string($mysqli, $Tipo_RegistoZ);
$LocalZ = mysqli_real_escape_string($mysqli, $LocalZ);
$Contagem = mysqli_real_escape_string($mysqli, $Contagem);
$Num_Equip = mysqli_real_escape_string($mysqli, $Num_Equip);

//fazer para receber texto e retornar os ids que vai inserir
$con = get_numeric($Contagem);

if ($con != $Contagem){

 header('HTTP', true, 500);
} else{

$querw1 = mysqli_query($mysqli, "SELECT `ID_acesso` FROM `multiusos` WHERE `Descrisao`='$Tipo_RegistoZ'");

   while($res = mysqli_fetch_array($querw1)){

	        $Tipo_Registo = $res['ID_acesso'];
	        print "Tipo equipamento $Tipo_Registo ";
   }

$querw2 = mysqli_query($mysqli, "SELECT `ID_Local` FROM `locais` WHERE `Descricao_Local` like '$LocalZ'");

   while($res = mysqli_fetch_array($querw2)){

	        $Local = $res['ID_Local'];
	        print "<br> => Local $Local <br>";
   }

$query1 = mysqli_query($mysqli, "SELECT `ID_LimMaxCont`,`Limit_Diario`
                                        FROM `Lim_Max_Cont`
                                       where `ID_Local_LimMaxCont` = $Local and Tipo_Equip_LimMaxCont ='$Tipo_Registo'");

   while($res = mysqli_fetch_array($query1)){

	        $LimMaxDiario = $res['Limit_Diario'];

	        print "Lim diario $LimMaxDiario ";
   }

$query02 = mysqli_query($mysqli, "select `ID_EquiLav` from Reg_Equipamentos_Lavagem where `Num_EquiLav`= $Num_Equip and `ID_Local_EquiLav` = $Local and ID_Tipo_equiLav = $Tipo_Registo");

   while($res = mysqli_fetch_array($query02))
   {

	        $ID_EquiLav = $res['ID_EquiLav'];
	        print "ID EquiLav :$ID_EquiLav";
   }

$query3 = mysqli_query($mysqli, "SELECT * FROM `Postos_Pistas`
                                        WHERE `ID_Func_PP` = RetornaIdFuncionario('$username') and ID_EquiPorLav_PP = $ID_EquiLav order by`DataPP` desc limit 1");
   while($res = mysqli_fetch_array($query3))
   {
            $ID_PPistas = $res['ID_PPistas'];
	        $LastCongemFunc = $res['ContagemPP'];

            print "<br> ID PPistas $ID_PPistas";
	        print "<br> antiga contagem $LastCongemFunc";
   }

$querycheck= "SELECT COUNT(*) as Result FROM Postos_Pistas";
     $resutw1 = mysqli_query($mysqli, $querycheck);

           while ($ruw1 = mysqli_fetch_array($resutw1, MYSQLI_ASSOC)) {
                  $ResultCheck = $ruw1['Result'];
                                                                    print "</br> <b>Existe Dados : $ResultCheck</br></b>";
            }

    if ($LastCongemFunc == 0){
                 if($Contagem < $LimMaxDiario) {

                        print "<br> Regista #1";

                    $query2 = mysqli_query($mysqli, "call InsereContagem01('$Contagem','$dataAtual','$username',$Num_Equip,$ID_Request)");

                 } else {
                           //header("HTTP/1.0 404 Not Found");
                            header('HTTP', true, 502);
                 }
    } else {
                                                                print "<br><b>primeiro else #1</b><br>";
            $AntMaisLim = $LastCongemFunc + $LimMaxDiario;

                      print "($Contagem < $AntMaisLim)";

                     if ($Contagem < $AntMaisLim){

                         print "<p>dentro do if #2.1 <p>";
                            $query2 = mysqli_query($mysqli, "call InsereContagem01('$Contagem','$dataAtual','$username',$Num_Equip,$ID_Request)");

                     }else{


                        header('HTTP', true, 501);
                     }
    }
    }
mysqli_close($mysqli);
?>