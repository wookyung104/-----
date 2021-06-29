<?php
    //구구단 2 ~ 5단까지
    echo "2 * 1 = 2<br>";
    echo "2 * 2 = 4<br>";
    echo "2 * 3 = 6<br>";
    echo "2 * 4 = 8<br>";
    echo "2 * 5 = 10<br>";
    echo "2 * 6 = 12<br>";
    echo "2 * 7 = 14<br>";
    echo "2 * 8 = 16<br>";
    echo "2 * 9 = 18<br>";
    
    
    //*While문 사용 반복문
    $input_data = 0;
    while($input_date<=10)
    {
        echo "10보다 작거나 같아요 !". $input_data."<br>";
        $input_data++;
    }  
        echo "10보다 커요 !". $input_data."<br>";
    
    
    echo "<br>";
    echo "<br>";

    //구구단 While문 이용
    $i = 2;
    $count = 1;
    $end = 5;
    while($i<=$end)
    {
        if($count == 1)
        echo $i, "단<br>";
        echo $i, "x", $count, " = ", $i*$count, "<br>";
        $count++;
        if($count == 10)
        {
            $i++;
            $count = 1;
            echo "<br>";
        }
    }
     echo "<br>";
     echo "<br>";*/
     //do while문
     $num = 50;
     do{
         echo "10보다 작거나 같아요 !", $num, "<br>";
         $num++;
     }
     while($num <= 10);
     echo "10보다 커요 !", $num, "<br>";

    echo "<br>";
    echo "<br>";

    //for문
    for($i = 1; $i <= 9; $i++)
    {
        echo "2 x ", $i, "= ", 2*$i. "<br>";
    }

    echo "<br>";
    echo "<br>";
    
    //for문을 이용한 구구단
    $i = 2;
    $j = 1;
    for($i; $i<10; $i++){
    for($j; $j<10; $j++)
    {
        echo $i, " x ", $j, "= ", $i*$j, "<br>";
    }
    $j = 1;
    echo "<br>";
    }
    echo "<br>";
    echo "<br>";
*/
?>

<!doctype html>
<!-- 피라미드 만들기  -->
<html>
<head>
<meta charset = "utf-8">
<title></title>
</head>
<body>
    <form method = "POST" action="06.29.php">
    <input type = "submit" name = "submit">
    </form>
    
    <?php
    echo "<pre>";
    $size = 5;
   for($i=1; $i<=$size; $i++){
       for($j=1; $j<=$size-$i; $j++){
           echo " ";
       }
       for($k=1; $k<=$i; $k++){
           echo "💋";
       }
       echo "<br/>";
   }
   echo "</pre>";
    ?>
   
</body>
</html>

<!-- 시저 암호 -->
<!doctype html>
<html>
<head>
<meta charset ="utf-8">
<title></title>
</head>
<body>
    <form method = "POST" action="06.29.php">
    입력 <input type="text" name="secret"/>
    <input type="submit" name="submit"/>
    </form>
    <?php
    $secret = $_POST['secret'];
    $str = str_split($secret);
    $i = 0;
    while($i < count($str))
    {
        $code = ord($str[$i])-3;
        if ($code == 29)
        {
            $code =32;
        }
        echo chr($code), "&nbsp;";
        $i++;
    }
    ?>
</body>
</html>
