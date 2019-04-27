<?php
include "../config.php";
//error_reporting(0);

$id11 = $_COOKIE['cookieID_EF'];
$id12 = $_COOKIE['cookieID_funcionario'];

$id14 = $_COOKIE['cookieID_Local'];

$id15 = $_COOKIE['cookieID_LocalFunc'];

$id16 = $_COOKIE['cookieID_RegHoras'];
$id17 = $_COOKIE['cookieID_empresaSelect'];
$id18 = $_COOKIE['cookieID_Tol'];
$id20 = $_COOKIE['cookiID_EquiLav'];

$id21 = $_COOKIE['cookieFuncPosto'];
$id22 = $_COOKIE['cookieID_ContadoresRDP'];

$Action = $_POST['Tipo_validacao'];

$Apaga = mysqli_query($mysqli, "call ApagaEmpresaFunc('$id11')");

if ($Action == 1.1) {

 $Apaga = mysqli_query($mysqli, "call ApagaEmpresaFunc('$id11')");

} if ($Action == 1.2) {

 $Apaga = mysqli_query($mysqli, "call ApagaFuncionario('$id12')");

} if ($Action == 1.4) {

  $Apaga = mysqli_query($mysqli, "call ApagaLocal('$id14')");

} if ($Action == 1.5) {

 $Apaga = mysqli_query($mysqli, "call ApagaLF('$id15')");

} if ($Action == 1.6) {

   $Apaga = mysqli_query($mysqli, "call ApagaRegHoras('$id16')");

} if ($Action == 1.7) {

    $Apaga = mysqli_query($mysqli, "call ApagaEmpresa('$id17')");

} if ($Action == 1.8) {

     $Apaga = mysqli_query($mysqli, "call ApagaTolerancia('$id18')");

} if ($Action == 1.10) {

        $Apaga = mysqli_query($mysqli, "call ApagaContador('$id19')");

}if ($Action == 11) {
            //$Apaga = mysqli_query($mysqli, "call ApagaRegEquipamentoLavagem('$id20')");

}if ($Action == 12) {

         $Apaga = mysqli_query($mysqli, "call ApagaLF('$id15')");
}if ($Action == 13) {

          $Apaga = mysqli_query($mysqli, "call ApagaContador('$id22')");
}
mysqli_close($mysqli);
?>

