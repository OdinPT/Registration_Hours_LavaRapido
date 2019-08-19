<?php
session_start();
include "../../config.php";

$truee = 'true';
$falsee = 'false';

$username=$_POST['user'];
$password=$_POST['pass'];

$url = "Login.js";

$username = stripslashes($username);
$password = stripslashes($password);

// protect to sql injection
$username = mysqli_real_escape_string($mysqli, $username);
$password = mysqli_real_escape_string($mysqli, $password);

$query = mysqli_query($mysqli, "Call Login('$username','$password')");
$querz = mysqli_query($mysqli, "call RegLogin('$username')");

$dataAtualx= date('Y-m-d');
$dataAtual= date('y/m/d');
$mysqli->set_charset("utf8");

$XLocal = array();
$Total = array();
$EquiL = array();

$rows = mysqli_num_rows($query);

if ($rows == 1) {

    setcookie('password','true',time()+60*60*24*365, '/');
    setcookie('cookieEmail',$username,time()+60*60*24*365, '/');
    header("Refresh:0");

        while($res = mysqli_fetch_array($query)){

        	        $tipo = $res['Ccookie_funcionario'];
        	        //echo $tipo;
        }

        if($tipo == 1){
            setcookie('permissao','1',time()+60*60*24*365*5, '/');
        }
}




//mysqli_close($mysqli); // Closing Connection

?>