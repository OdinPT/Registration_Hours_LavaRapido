<?php

 //error_reporting(0);
    include "../config.php";

  //$DataInicio = $_POST['Datainicio'];
  //$DataFim = $_POST['DateFim'];

  $DataInicio = '2018-07-08';
  $DataFim = '2018-07-10';

  $dataAtual= date('y/m/d');

  $cookie_DateSearch2 = '';
  $today = date("dm");
  setcookie("DateSearch2", "$today");

  $mysqli->set_charset("utf8");
  $return_arr = array();

$query0 = "SELECT * FROM Request WHERE Data_Pedido = '$dataAtual' order by `ID_Request` desc limit 1";

$result0 = mysqli_query($mysqli, $query0);

while ($row = mysqli_fetch_array($result0, MYSQLI_ASSOC)) {

        $ID_Pedido = $row['ID_Pedido'];
        $ID_Request = $row['ID_Request'];
}

if( $result0->num_rows > 0 ) {      //verifica se existe registo anterior

  $today= $ID_Pedido+10;

  } else {
    $today =$today;

  }

   $query10 = "SELECT *
              FROM Postos_Pistas
              WHERE (`DataPP` BETWEEN '$DataInicio' AND '$DataFim')";

   $result10 = mysqli_query($mysqli, $query10);

 while ($row = mysqli_fetch_array($result10, MYSQLI_ASSOC)) {

       $IDPista = $row['ID_PPistas'];
       $TipoReg = $row['ID_TipoPP'];
       $Local = $row['ID_LocalPP'];
       $Contagem = $row['ContagemPP'];
       $Data = $row['DataPP'];;

$query0 = mysqli_query($mysqli, " call InserirPedido('$TipoReg','$Local','$Contagem','$Data','$IDPista','$today','$dataAtual')");

  }

mysqli_close($mysqli);

?>

