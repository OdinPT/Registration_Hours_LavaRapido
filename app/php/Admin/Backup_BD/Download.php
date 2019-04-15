<?php

$today = date("d-m-y");
$username = $_COOKIE['cookieEmail'];

$fileName = basename('Backup_invest_'.$today.'.sql');
$filePath = 'BACKUP_DIR/'.$fileName;


        header("Cache-Control: public");
        header("Content-Description: File Transfer");
        header("Content-Disposition: attachment; filename=$fileName");
        header("Content-Type: application/zip");
        header("Content-Transfer-Encoding: binary");

        // Read the file
        readfile($filePath);
        exit;


?>