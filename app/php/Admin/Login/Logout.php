<?php

include "../../config.php";

$username = $_COOKIE['cookieEmail'];

$query = mysqli_query($mysqli, "Call RegLogOut('$username')");

mysqli_close($mysqli);
?>