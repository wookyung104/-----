<?php
/*숫자에서 문자열로 자동 변환*/
$number = 12345 * 67890;
echo substr($number, 5, 2);

echo "<br>";
echo "<br>";

/* 문자열에서 숫자로의 자동 변환*/
$pi = "3.1415927";
$radius = 5;
echo $pi * ($radius * $radius);

echo "<br>";
echo "<br>";

/*간단한 함수 사용법*/
function longdate($timestamp)
{
    return date("1 F jS Y", $timestamp);
}
echo longdate(time());

echo "<br>";
echo "<br>";

/*전역변수 지역변수 예제*/
$num1;

function global_test()
{
    global $num1;
    $num1 = 20;
}
$num1 = 10;
echo "호출 전 num = ", $num1, "<br>";
global_test();
echo "호출 후 num = ", $num1, "<br>";

echo "<br>";
echo "<br>";

/*전역변수 지역변수 교체*/
function swap_Local($num1, $num2)
{
    $temp = $num1;
    $num1 = $num2;
    $num2 = $temp;
    echo "함수 내부 num1 = ", $num1, ", num2 = ", $num2,"<br>";
}

function swap_global($num1, $num2)
{
    global $num1, $num2;
    $stemp = $num1;
    $num1 = $num2;
    $num2 = $stemp;
    echo "함수 내부 num1 = ", $num1, ", num2 = ", $num2, "<br/>";
}
echo "Local Test<br>";
$num1 = 10;
$num2 = 20;
echo "호출 전 num1 = ", $num1, ", num2 = ", $num2,"<br>";
swap_Local($num1, $num2);
echo "호출 후 num = ", $num1, ", num2 = ", $num2,"<br>";

echo "global Test<br>";
echo "호출 전 num1 = ",$num1, ", num2 = ", $num2,"<br>";
swap_global($num1, $num2);
echo "호출 후 num = ", $num1, ", num2 = ", $num2,"<br>";

echo "<br>";
echo "<br>";

/*static test*/
function statin_test()
{
    static $num = 0;//1, 2
    $num++;//1++, 2++
    echo $num, "<br>";
}
statin_test();
statin_test();
statin_test();
statin_test();

echo "<br>";
echo "<br>";

/*조건문을 이용하여 암호가 8글자 이하일 때는 나쁨을, 8글자 이상일 때는 좋음을 표시하는 소스*/
//$str = "abcde1234";
//echo strlen($str);
if(strlen($_POST['pw'])>= 8)
{
    echo "비밀번호: ", $_POST['pw']."좋음 <br/>";
}else
{
    echo "비밀번호: ", $_POST['pw']."나쁨 <br/>";
}


echo "<br>";
echo "<br>";

/*if문을 이용하여 */
$str = "wookyung104@naver.com";
echo strpos($str, "@");
if(strpos($str,"@"))//1이상이면 True로 인식. 0 ->false
{
    echo "제대로 된 ID";
}
else{
    echo "ID 오류";
}
?>