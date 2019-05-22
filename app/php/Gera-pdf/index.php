<?php

include "../config.php";
include_once('fpdf.php');

class PDF extends FPDF
{
// Page header
function Header() {
    // Logo
    //$this->Image('https://image.ibb.co/ktEti7/logotipo_curvas_v3_preview_s_logo.png');
    // size font
    $this->SetFont('Arial','B',12);
    // Move to the right
    $this->Cell(50);
    // Title
    $this->Cell(50,20,'Contagens',-1,0,'C');
    // Line break
    $this->Ln(15);
}

// Page footer
function Footer() {
    // Position at 1.5 cm from bottom
    $this->SetY(-10);
    // Arial italic 8
    $this->SetFont('Arial','I',8);
    // Page number
    $this->Cell(0,10,'Page '.$this->PageNo().'/{nb}',0,0,'C');
}
}

$pdf = new PDF();
$pdf->AddPage();

//$db = new dbObj();
//$connString =  $db->getConnstring();

$m = date("m");
$y = date("Y");

        //nome do ficheiro
$filename ="Cont".$m."".$y.".pdf";

$username = $_COOKIE['cookieEmail'];

 $query0 = "SELECT MAX(`ID_Pedido`) as MaxIDRequest FROM Request where `ID_Func_Req`= RetornaIdFuncionario ('$username')";

    $result0 = mysqli_query($mysqli, $query0);

      while ($row = mysqli_fetch_array($result0, MYSQLI_ASSOC)) {
        $MaxIDRequest = $row['MaxIDRequest'];
      }


$result = mysqli_query($mysqli, "SELECT Desc_EquiLav as `ID_Tipo_Req`,Descricao_Local as `ID_Local_Req`,`Contagem_Req`,`Data_Req`,username as`ID_Func_Req`
                                                                FROM `Request`,multiusos,locais,funcionarios,Reg_Equipamentos_Lavagem
                                          WHERE  `ID_Tipo_Req`=ID_acesso and `ID_Local_Req`=ID_Local and `ID_Func_Req`=ID_funcionario and `Num_EquiLav`=Num_Equip and `ID_Pedido`= '$MaxIDRequest' order by `Data_Req` asc  ") or die("database error:". mysqli_error($connString));

//headers

$Cab=["Equipamento", "Posto","Contagem","Data","Utilizador"];

$i = 0;
while ($i < count($Cab)){
    $pdf->Cell(33, 15, $Cab[$i]);
    $i++;
}

//foter page
$pdf->AliasNbPages();

foreach($result as $row) {
$pdf->Ln();
foreach($row as $column)
//with column
$pdf->Cell(33,10,$column,1);

}

$pdf->Output();

    header('Content-Description: File Transfer');
    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename="' . basename($filename) . '"');
    header('Content-Length: ' . filesize($filename));


?>