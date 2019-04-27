<?php
include "../config.php";

$tempo = $_POST['temptolerancia'];
$mysqli->set_charset("utf8");

$query2 = mysqli_query($mysqli, " call InserirTolerancias('$tempo')");

mysqli_close($mysqli);
?>