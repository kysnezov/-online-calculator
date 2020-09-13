<?php

    $date = $_POST['date'];
    $year = date('Y', strtotime($date));    
    $mount = date('n', strtotime($date));
    $daysn = cal_days_in_month(CAL_GREGORIAN, $mount, $year);
    $summn_1 = $_POST['summ1'];
    if($_POST['radio'] == "yes") $summadd = $_POST['summadd'];
    else $summadd = "0";
    $percent = 0.1;
    $coun = $_POST['selec'];
    $daysy = 365 * $coun;
    $summn = $summn_1 + ($summn_1 + $summadd)*$daysn*($percent / $daysy);
    echo (int)$summn . " руб.";

?>