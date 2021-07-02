<?php
// 배열의 활용
$paper[] = "Copier";
$paper[] = "Inkjet";
$paper[] = "Laser";
$paper[] = "Photo";

echo "<pre>";
print_r($paper);
echo "<pre/>";

echo "<pre>";
var_dump($paper);
echo "</pre>";

$paper[0] = "Copier";
$paper[1] = "Inkjet";
$paper[2] = "Laser";
$paper[3] = "Photo";

echo "<pre>";
print_r($paper);
echo "<pre/>";

echo "<pre>";
var_dump($paper);
echo "</pre>";

echo "<br/><br>";

//for문
for($i = 0; $i <4; $i++)
{
    echo "$i: $paper[$i]<br  />";
}
echo "<br/><br/>";

//연관 배열
$paper['copier'] = "Copier & Multipurpose";
$paper['inkjet'] = "Inkjet Printer";
$paper['laser'] = "Laser printer";
$paper['photo'] = "Photographic paper";

echo $paper['laser'];

echo "<br/><br/>";

//array 키워드 사용한 대입
$p1 = array("Copier", "Inkjet", "Laser", "Photo");

echo "p1 element: " . $p1[2] . "<br>";

$p2 = array('copier' => "Copier & Multipurpose",
            'inkjet' => "Inkjet Printer",
            'laser' => "Laser printer",
            'photo' => "Photographic paper");

echo "p2 element: " . $p2['inkjet'] . "<br>";

echo "<br><br>";

//Foreach...as 루프를 이용한 배열의 출력
$paper = array("Copier", "Inkjet", "Laser", "Photo");
$j = 0;

foreach ($paper as $item)
{
    echo "$j: $item<br>";
    ++$j;
}

echo "<br><br>";

$paper = array('copier' => "Copier & Multipurpose",
                'inkjet' => "Inkjet Printer",
                'laser' => "Laser printer",
                'photo' => "Photographic paper");

foreach ($paper as $item => $description) //=> 값을 변수가 아닌 인덱스에 대입
{
    echo "$item: $description<br>";
}

echo "<br><br>";

//다차원 배열

$products = array(
    'paper' => array(
        'copier' => "Copier & Multipurpose",
        'inkjet' => "Inkjet Printer",
        'laser' => "Laser printer",
        'photo' => "Photographic paper"),

    'pens' => array(
        'ball' => "Ball Point",
        'hilter' => "Highlighters",
        'marker' => "Markers"),

    'misc' => array(
        'tage' => "Sticky Tapc",
        'glue' => "Adhesives",
        'clips' => "Paperclips") );

    echo "<pre>";
    foreach ($products as $section => $items)
        foreach ($items as $key => $value)
            echo "$section:\t$key\t($value)<br>";
    echo "</pre>";

    echo "<br><br>";

// sort 함수

$p1 = array("2", "6", "10", "4", "15", "33", "21", "17");
sort($p1);

$arrlength = count($p1);
for($x = 0; $x < $arrlength; $x++)
{
    echo $p1[$x];
    echo "<br>";
}

    echo "<br><br>";

// Shuffle 함수

$arr = array("스콘", "앙버터", "휘낭시에", "마들렌", "크로와상", "마카롱");
shuffle($arr);
for($i = 0; $i < count($arr); $i++)
{
    echo $arr[$i];
}
// 


//While문과 list를 이용한 연관 배열의 출력

$paper =  array('copier' => "Copier & Multipurpose",
                'inkjet' => "Inkjet Printer",
                'laser' => "Laser printer",
                'photo' => "Photographic paper");

while (list($item, $description) = each($paper)) //알아만 둘 것.
{
    echo "$item: $description<br>";
}
?>