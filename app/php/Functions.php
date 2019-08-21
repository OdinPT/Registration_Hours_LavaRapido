<?php

function mb_abs($number) {               // Converte hora negativa em positiva.

  return str_replace('-','',$number);
}

function RetornaDiaAnt_DataPers($data) {    // Retorna Data do Dia Anterior A partir de uma determinada data d/m/y

    $datactual = date('d-m-Y', strtotime($data. ' - 1 days'));

    return $datactual;
}

function RetornaDiaDep_DataPers($data) {    // Retorna Data do Dia depois A partir de uma determinada data d/m/y

    $datactual = date('d-m-Y', strtotime($data. ' + 1 days'));

    return $datactual;
}

function RetornaDiaAnterior($data) {    // Retorna Data do Dia Anterior a Data atual
    $day = date('d') - 1;
    $mouth = date('m');
    $year = date('Y');

       $data = mktime(0,0,0,$mouth,$day,$year);

    $data0 = date('y-m-d',$data);
    $date1 = str_replace('/', '-', $data0);
    $datex = date('Y-m-d', strtotime($data0));

    return $datex;
}

function FormataData($data) {    // Retorna Data para dd/mm/YYY

   $format = date("d-m-Y H:i", strtotime($data));

    return $format;
}

function FormataData1($data) {    // Retorna Data para dd/mm/YYY

   $format = date("d-m-Y ", strtotime($data));

    return $format;
}

function FormataDatabarra($data) {    // Retorna Data para dd/mm/YYY

   $format = date("Y/m/d H:i", strtotime($data));

    return $format;
}

function FormataDataInversa($data) {    // Retorna Data para dd/mm/YYY

    $format = date("Y-m-d", strtotime($data));

    return $format;
}

function Retorna2DiaAnterior($data) {    // Retorna Data de 2 dias anteriores

    $day = date('d') - 2;
    $mouth = date('m');
    $year = date('Y');

       $data = mktime(0,0,0,$mouth,$day,$year);

    $data0 = date('y-m-d',$data);
    $date1 = str_replace('/', '-', $data0);
    $datex = date('Y-m-d', strtotime($data0));

    return $datex;
}

function RetornaDiaSeguinte($data) {    // Retorna Data do Dia Anterior

    $day = date('d') +1 ;
    $mouth = date('m');
    $year = date('Y');

       $data = mktime(0,0,0,$mouth,$day,$year);

    $data0 = date('y-m-d',$data);
    $date1 = str_replace('/', '-', $data0);
    $datex = date('Y-m-d', strtotime($data0));

    return $datex;
}

function FormataDataHoraInversa($data) {    // Retorna Data para dd/mm/YYY

    $format = date("Y-m-d H:i", strtotime($data));

    return $format;
}

function converSlashToDash($dat) {            //converte / para - numa data varchar

    $data = str_replace("/", "-", $dat);
    $x = date('Y-m-d H:i', strtotime($data));

       return $x;
}
                                               //Retorna se o valor inserido é um número ou uma string
function get_numeric($val) {
   if (is_numeric($val)) {
     return $val ;
   }
   header("HTTP/1.0 500 Not Found");;
}

function GeraNumRequest($mysqli) {    // Retorna Data do Dia Anterior A partir de uma determinada data d/m/y

   $queryMID = "SELECT max(`ID_Pedido`) as MaxID FROM `Request`";
       $rsult = mysqli_query($mysqli, $queryMID);
              while ($r1 = mysqli_fetch_array($rsult, MYSQLI_ASSOC)) {
                         $NumRequestx = $r1['MaxID'];
              }
                    if ($NumRequestx == 0){     //empthy request table
                            $NumRequest = 0;
                            $NumRequestx = 2000;
                            $NumRequest = $NumRequestx +1;
                    }
              $NumRequest = 0;
              $NumRequest = $NumRequestx +1;
    return $NumRequest;
}


?>
