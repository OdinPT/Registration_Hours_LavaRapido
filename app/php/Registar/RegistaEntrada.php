<?php
include "../config.php";
include "../Functions.php";

$username = $_COOKIE['cookieEmail'];
$local = $_POST['ID_Local'];
$TipoVal = $_POST['Tipo_validacao'];

$data = date("Y-m-d H:i");
$data1 = date("H:i");

$mysqli->set_charset("utf8");

$query0 = mysqli_query($mysqli, " SELECT DATE_FORMAT(`Hora_Tolerancia`,' %H:%i:%s') as Hora_Tolerancia
                                  FROM Tolerancias,funcionarios
                                    where ID_Tolerancia_Func= ID_Tolerancia
                                     and ID_Funcionario =RetornaIdFuncionario('$username')");

    while($res0 = mysqli_fetch_array($query0))              //tolerancia do funcionário
        {
            $Hora_Tolerancia = $res0['Hora_Tolerancia'];
        }

// não devolve aqui nada pq não tem horário
$query1 = mysqli_query($mysqli, " SELECT  DATE_FORMAT(Hora_entrada_prevista, '%H:%i:%s') as Hora_entrada_prevista,
                                  TIMEDIFF(DATE_FORMAT(Hora_entrada_prevista, '%H:%i:%s'), '$data1')as Diferenca
                                    FROM registo_horas, funcionarios,Prev_entrada
                                      where ID_Func_PrevEntrada= ID_Func_rh and `ID_Func_rh`= RetornaIdFuncionario('$username')");

    while($res1 = mysqli_fetch_array($query1))
        {
            $Hora_entrada_prevista = $res1['Hora_entrada_prevista'];
            $Diferenca = $res1['Diferenca'];
        }

    $HoraTolerancia1 = date('H:i:s', strtotime($Hora_Tolerancia));
    $diferenca1 = date('H:i:s', strtotime($dif = mb_abs($Diferenca)));
    $HoraPrevista2 = date('Y-m-d H:i', strtotime($Hora_entrada_prevista));

    //format
    $data1 = date('Y-m-d H:i', strtotime($data));
    $data_horaEntradaPrevista = date('Y-m-d H:i', strtotime($Hora_entrada_prevista));

    if ($HoraPrevista2 != $data1)
    {
              if ($HoraTolerancia1 == $diferenca1) //tolerancia =  diferença de hora
               {
                    $query = mysqli_query($mysqli, " call Regista_Horas('$username','$local','$TipoVal','$HoraPrevista2')");

               }else {
                        if ($vardiferenca < $HoraTolerancia1) {

                                $query = mysqli_query($mysqli, " call Regista_Horas('$username','$local','$TipoVal','$data')");

                            }else {
                                    $query = mysqli_query($mysqli, " call Regista_Horas('$username','$local','$TipoVal','$data1')");
                                  }
               }
   } else {

        $query = mysqli_query($mysqli, " call Regista_Horas('$username','$local','$TipoVal','$data1')");
      }

mysqli_close($mysqli);
?>