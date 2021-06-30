<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Full Width Pics - Start Bootstrap Template</title>
        <!-- Favicon-->
        <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
        <!-- Core theme CSS (includes Bootstrap)-->
        <link href="css/styles.css" rel="stylesheet" />
        <style>
      .italic{font-style: italic;}
      .bold{font-weight:600;}
        </style>
    </head>
    <body>
        <!-- Header - set the background image for the header in the line below-->
        <header class="py-5 bg-image-full" style="background-image: url('https://source.unsplash.com/wfh8dDlNFOk/1600x900')">
            <div class="text-center my-5">
                <img class="img-fluid rounded-circle mb-4" src="../test/magic.png.jpg" width="300" height="300" alt="..." />
                <h1 class="text-white fs-3 fw-bolder">Masic show</h1>
                <p class="text-white-50 mb-0">kwk</p>
            </div>
        </header>
        <!-- Content section-->
        <section class="py-5">
            <div class="container my-5">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
<div id="center">
<?php
    echo "<br>";
    ini_set('display_errors', '1');

    $input_data = $_GET["val"];
    $input_len = strlen($input_data);
    $input_value = substr($input_data, 1, ($input_len - 1));
    $level = substr($input_data, 0, 1);
    switch($level)
    {
        case 0:
            masic_page($level,$input_value);
            break;
        case 1:
            masic_page($level,$input_value);
            break;
        case 2:
            masic_page($level,$input_value);
            break;
        case 3:
            masic_page($level,$input_value);
            break;
        case 4:
            masic_page($level,$input_value);
            break;
        case 5:
            masic_page($level,$input_value);
            break;
        case 6:
            result_page($input_value);
            break;
    }

    function masic_page($level, $current_value)
    {
        $in_count = 0;
        $line_count = 0;

        echo ($level+1),"단계 하단의 숫자 중 생각하신 숫자가 있으십니까? <br>";
        $point = pow(2,$level);

        for($num = $point; $num < 50; $num++)
        {
            if($in_count == $point)
            {
                $num += $point;
                $in_count = 0;
            }

            echo $num, "&nbsp;&nbsp;&nbsp;&nbsp;";
            $in_count++;
            
            if($line_count != 0 && $line_count % 5 == 0)
            {
                echo "<br>";
                //$line_count = 0;
            }
            $line_count++;
        }
        echo "<br>";
        echo "<button id=\"btnfun1\" name=\"btnfun1\" class=\"btn btn-dark\" onClick='location.href=\"magic.php?val=",($level+1),($current_value +$point), "\"'>존재함</button>";
        echo "<button id=\"btnfun2\" name=\"btnfun2\" class=\"btn btn-dark\" onClick='location.href=\"magic.php?val=",($level+1),($current_value), "\"'>존재하지 않음</button>";
    }

    function result_page($input_value)
    {
        echo "당신이 생각한 숫자는 ", $input_value, "입니다.";
    }
?>
</div>