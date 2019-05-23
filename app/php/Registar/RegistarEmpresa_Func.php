<?php
include "../config.php";
error_reporting(0);

$mysqli->set_charset("utf8");

$IDFunc = $_POST['ID_funcionario'];
$IDEmpresa = $_POST['IDEmpresa'];

$IDFunc = mysqli_real_escape_string($mysqli, $IDFunc);
$IDEmpresa = mysqli_real_escape_string($mysqli, $IDEmpresa);

$query = mysqli_query($mysqli, "SELECT EXISTS (SELECT `ID_ef` FROM `empresa_func` WHERE `ID_Funcionario_emp_ef` = '$IDFunc' and `Id_empresa_func` = '$IDEmpresa') as ID_ef");

        while($res = mysqli_fetch_array($query))
        {
	        $Valid = $res['ID_ef'];
        }
               if($Valid == 1)
               {
                    header('HTTP', true, 402);

               } else {

                    $query2 = mysqli_query($mysqli, " call Registar_Func_a_Empresa('$IDFunc','$IDEmpresa')");

              }

mysqli_close($mysqli);
?>