<?php
require_once("../config.php");

ini_set("include_path", '/home/phpgurukul/php/PEAR:' . ini_get("include_path") );
require('fpdf.php');

$pdf = new FPDF();
$pdf->AddPage();

$pdf->SetFont('Arial','B',8);
$pdf->SetFont('Arial', "", 10);

$pdf->Ln();

$username = $_COOKIE['cookieEmail'];
$return_arr = array();
$array = [];

$m = date("m");
$y = date("Y");

        //nome do ficheiro

$filename ="Cont".$m."".$y.".pdf";

// Headers
$Cab=["Tipo Equipamento.", "Lavagem","Contagem","Data","ID Pista"];

$i = 0;
while ($i < count($Cab))
{
    $pdf->Cell(38, 12, $Cab[$i]);
    $i++;
}
       //code for print data
 $query0 = "SELECT MAX(`ID_Pedido`) as MaxIDRequest FROM Request where `ID_Func_Req`= RetornaIdFuncionario ('$username')";

      $result0 = mysqli_query($mysqli, $query0);

          while ($row = mysqli_fetch_array($result0, MYSQLI_ASSOC)) {

              $MaxIDRequest = $row['MaxIDRequest'];
          }

 $sql = "SELECT  Descrisao, Descricao_Local,`Contagem_Req`,`Data_Req`,`ID_PPista`
                FROM `Request`,multiusos,locais
                WHERE `ID_Tipo_Req`=ID_acesso and `ID_Local_Req`=ID_Local and `ID_Pedido`= $MaxIDRequest";

$query = $dbh -> prepare($sql);
$query->execute();

$results=$query->fetchAll(PDO::FETCH_OBJ);
$cnt=1;

if($query->rowCount() > 0)
{

foreach($results as $row) {
	$pdf->Ln();
	foreach($row as $column)
		$pdf->Cell(38,12,$column,1);
} }
$pdf->Output();

    header('Content-Description: File Transfer');
    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename="' . basename($filename) . '"');
    header('Content-Length: ' . filesize($filename));

?>