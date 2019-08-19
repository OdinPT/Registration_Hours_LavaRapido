<?php
include "../config.php";
include "../Functions.php";

$username = $_COOKIE['cookieEmail'];
$local = $_POST['ID_Local'];

$local = mysqli_real_escape_string($mysqli, $local);

$data = date("Y-m-d H:i");
$data1 = date("H:i");
$mysqli->set_charset("utf8");


//RetornaMaxId
$quer = mysqli_query($mysqli, "SELECT max(ID_Reg_horas) as  maxIDFunc FROM `registo_horas`
                                    WHERE `ID_Func_rh`=RetornaIdFuncionario('$username')");

    while($re = mysqli_fetch_array($quer))              //tolerancia do funcionário
        {
            $maxIDFunc = $re['maxIDFunc'];
        }

        print $maxIDFunc;

$query = mysqli_query($mysqli, "SELECT `Tipo_Registo_rh` as TipoRegisto FROM `registo_horas`
                                      WHERE `ID_Func_rh`=RetornaIdFuncionario('$username') and `ID_Reg_horas` = $maxIDFunc ");

    while($res = mysqli_fetch_array($query))              //tolerancia do funcionário
        {
            $TipoRegisto = $res['TipoRegisto'];
        }

        print "<br> Tipo Registo : ".$TipoRegisto;

// a ideia é para usar um só botão para registar entrada e saida
//ve se registo anterior do funcionario foi entrada ou saida se foi entrada regista saida e vice versa

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


    if ($TipoRegisto == 1)
    {
        print "insere tipo 2";
        $TipoReg = 2;
        print $TipoReg;

              if ($HoraPrevista2 != $data1)
            {
                if ($HoraTolerancia1 == $diferenca1) //tolerancia =  diferença de hora
                {
                    $query = mysqli_query($mysqli, " call Regista_Horas('$username','$local','$TipoReg','$HoraPrevista2')");

                }else {
                        if ($vardiferenca < $HoraTolerancia1) {

                                $query = mysqli_query($mysqli, " call Regista_Horas('$username','$local','$TipoReg','$data')");

                            }else {
                                    $query = mysqli_query($mysqli, " call Regista_Horas('$username','$local','$TipoReg','$data1')");
                                  }
                }
            } else {
            $query = mysqli_query($mysqli, " call Regista_Horas('$username','$local','$TipoReg','$data1')");
            }
    }else{
           print "insere tipo 1 <br>";
            $TipoReg = 1;
            print $TipoReg;

             if ($HoraPrevista2 != $data1)
               {
                          if ($HoraTolerancia1 == $diferenca1) //tolerancia =  diferença de hora
                           {
                                $query = mysqli_query($mysqli, " call Regista_Horas('$username','$local','$TipoReg','$HoraPrevista2')");
                           }else {
                                    if ($vardiferenca < $HoraTolerancia1) {

                                       $query = mysqli_query($mysqli, " call Regista_Horas('$username','$local','$TipoReg','$data')");

                                     }else {
                                          $query = mysqli_query($mysqli, " call Regista_Horas('$username','$local','$TipoReg','$data1')");
                                      }
                           }
               } else {

                    $query = mysqli_query($mysqli, " call Regista_Horas('$username','$local','$TipoReg','$data1')");
               }
   }

mysqli_close($mysqli);
?>