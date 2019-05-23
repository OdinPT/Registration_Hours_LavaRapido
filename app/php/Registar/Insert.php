<?php

include "../config.php";
//error_reporting(0);

$Local = $_COOKIE['cookieID_Local'];
$TipoRegisto = $_POST['TipoRegisto'];
$NumEquipamento = $_POST['NumEquipamento'];

$Local = mysqli_real_escape_string($mysqli, $Local);
$TipoRegisto = mysqli_real_escape_string($mysqli, $TipoRegisto);
$NumEquipamento = mysqli_real_escape_string($mysqli, $NumEquipamentos);

$query0 = "SELECT * FROM `Reg_Equipamentos_Lavagem`
                                WHERE `ID_Local_EquiLav`= '$Local'
                                    and`ID_Tipo_equiLav`= '$TipoRegisto' and `Num_EquiLav`='$NumEquipamento'";

$result0 = mysqli_query($mysqli, $query0);

                //verifica se existe registo anterior, Se existe retorna erro , se não existir regista o equipamento

if( $result0->num_rows > 0 ) {

    header("HTTP/1.0 404 Not Found");
    header('HTTP', true, 500);

} else {

$query = mysqli_query($mysqli, " call InserirEquipamentoLavagem('$Local','$TipoRegisto','$NumEquipamento')")

}

mysqli_close($mysqli);
?>