<?php
/*
    include "../config.php";

  $username = $_COOKIE['cookieEmail'];

$query = "SELECT * FROM `local_funcionarios` WHERE `ID_Funcionario_LF`=RetornaIdFuncionario('$username')";

$result = mysqli_query($mysqli, $query);

if( $result -> num_rows > 1 ) {      //verifica se existe registo anterior

  while($res = mysqli_fetch_array($result)){    //mais que um local
	  //  $ID_LF= $res['ID_LF'];
	  // print $ID_LF;
	   header("HTTP/1.0 404 Not Found");
                                    header('HTTP', true, 500);
    }



  } else {
     print "Sucesso";
  }

mysqli_close($mysqli);
*/

?>

