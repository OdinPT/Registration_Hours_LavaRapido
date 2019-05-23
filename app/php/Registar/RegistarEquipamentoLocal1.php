<?php
include "../config.php";
error_reporting(0);

$IDLocal = $_COOKIE['cookieID_Local'];
$TipoEquipamento = $_POST['TipoEquipamentoxS'];
$LimMax = $_POST['LimMax'];

$TipoEquipamento = mysqli_real_escape_string($mysqli, $TipoEquipamento);
$LimMax = mysqli_real_escape_string($mysqli, $LimMax);

//$IDLocal = 2;
//$TipoEquipamento = 8;
//$LimMax = 1000;

//print "Id Local".$IDLocal.'<br>';
//print "Id Equipamento ".$TipoEquipamento.'<br>';

$return_arr = array();
$mysqli->set_charset("utf8");

//Seleciona Max NumEquipamento
$query0 = mysqli_query($mysqli, "SELECT max(`Num_EquiLav`) as MaxNumEqui FROM `Reg_Equipamentos_Lavagem` ");

        while($res0 = mysqli_fetch_array($query0)){
	        $MaxNumEqui = $res0['MaxNumEqui'];
	        $NumEqui = $MaxNumEqui + 1;

	        //print "Próximo numero do equipamento é :".$NumEqui."<br>";
        }

//verifica se existe limite diário para esse equipamento


$query1 = mysqli_query($mysqli, "SELECT EXISTS (SELECT `ID_LimMaxCont` FROM Lim_Max_Cont WHERE `ID_Local_LimMaxCont` = '$IDLocal' and
                                            `Tipo_Equip_LimMaxCont`= '$TipoEquipamento') as Existe1");

        while($res1 = mysqli_fetch_array($query1)){
	        $Existelim = $res1['Existe1'];
	        //print "Existe Limite: ".$Existelim."<br>" ;
        }

//retorna descrisao do tipo de equipamento
$query2 = mysqli_query($mysqli, "SELECT `Descrisao` as TipoLocal FROM `multiusos` WHERE `ID_acesso` = '$TipoEquipamento' and `Tipo_multiuso` = 4");

        while($res2 = mysqli_fetch_array($query2)){
	        $DescTipoEqui = $res2['TipoLocal'];
	        // print '<br>'.$DescTipoEqui."<br>" ;
        }

$q3 = mysqli_query($mysqli, "SELECT count(`ID_EquiLav`)+1 as MaxEquip FROM `Reg_Equipamentos_Lavagem` WHERE `ID_Local_EquiLav` = $IDLocal and `ID_Tipo_equiLav`= $TipoEquipamento");

        while($rs3 = mysqli_fetch_array($q3)){

	        $MaxEquip = $rs3['MaxEquip'];
            //Max TipoEquipamento existente
	        //print "count ".$MaxEquip."<br>" ;
        }

//Retorna string tipo equipamento
$NP = substr($DescTipoEqui,0,10);
$PistaLav ="$NP $MaxEquip";
print $PistaLav;

$query = mysqli_query($mysqli, "select EXISTS (select * from Reg_Equipamentos_Lavagem where Num_EquiLav= '$NumEqui') as Valida");

       while($res = mysqli_fetch_array($query)){
    	       $Valida = $res['Valida'];

         //print "valida $Valida <br>";
    	 //print "Existe limite ".$Existelim;
       }

    if($Valida == 1){

      header("HTTP/1.0 404 Not Found");

    } else {

       $query2 = mysqli_query($mysqli, " call InserirEquipamentosLavagem('$IDLocal','$TipoEquipamento','$NumEqui','$PistaLav')");

       if($Existelim != 1){

        $query2 = mysqli_query($mysqli, "call InsereLimEquipamento('$LimMax','$IDLocal','$TipoEquipamento')");

       } else {

       }
    }

mysqli_close($mysqli);
?>