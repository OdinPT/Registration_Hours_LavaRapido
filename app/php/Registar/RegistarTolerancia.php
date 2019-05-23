<?php
include "../config.php";

$mysqli->set_charset("utf8");

$tempo = $_POST['temptolerancia'];
$tempo = mysqli_real_escape_string($mysqli, $tempo);

$query2 = mysqli_query($mysqli, " call InserirTolerancias('$tempo')");

mysqli_close($mysqli);
?>