<?php
$mycounter = 1;
$mystring = "Hello";
$myarray = array("one", "two", "three");

echo $mystring; //Hello를 출력

echo "<br>";
echo "<br>";

$myarray 1 = array("one", "two", "three");
$myarray 2 = array("one", "two", "three");
echo "<br>";
echo $myarray 1[1];
echo "<br>";
echo $myarray 2[2];



echo"<br>";
echo"<br>";
$oxo = array(array('x1', 'x2', 'x3'),
array('y1', 'y2', 'y3'),
array('z1', 'z2', 'z3')
);
echo $oxo[1][1];

echo "<br>";
echo "<br>";
$num = 10;
echo $num - 1;

echo "<br>";
$user_input = 10000;
$user_price = 7300;
//여기에 연산

$change_money_total = $user_input-$item_price:;
$change_money_1000 = (int)($change_money_total/1000);
$change_money_500 = (int)($change_money_total%1000)/500);
$change_money_100 = (int)($change_money_total%1000)%500)/100);
echo "<br>";
echo "거스름돈 총계 : ",$user_input-$item_price,"<br>";
echo "1000원 : ", $change_money_1000, "장<br>";
echo "500원 : ", $change_money_500, "개<br>";
echo "100원 : ", $change_money_100, "개<br>";

echo"<br>연산자 예제<br>";
$num = 10;
echo "연산 전: ",$num,"<br>";
$num += 10;
echo "연산 후: ",$num,"<br>";
$num -= 10;
echo "연산 후: ",$num,"<br>";
$num *= 10;
echo "연산 후: ",$num,"<br>";
$num /= 10;
echo "연산 후: ",$num,"<br>";
$l_name = kang;
$f_name = wookyung;
$f_name = $l_name . $f_name;
echo "연산 후: ",$num,"<br>";
$num % = 10;
echo "연산 후: ",$num,"<br>";

echo"<br>다중 라인 명령<br>;"
$author = "Wookyung Kang";
echo "Developers, Developers, developers, developers, developers, developers,
developers, developers, developers, developers, developers!"

-$author.";

echo "<br>";
echo "<br>";
$author_2 = "Gildong Hong";
$text = Measuring programming progress by lines of code is like 
Measuring aircraft building progress by weight.

-$author_2.";
echo $text;

echo "<br>";
echo "<br>";
$author_3 = "Bill";

echo <<<_END
This is a Headline.
This is the first line.
This is the second.
-Written by $author_3.
_END;


echo "<br>";
echo "<br>";
$author = "AI";

$out = <<<_END
This is a Headline. 
This is the second.
-Written by $author.
_END;
echo $out;
?>




