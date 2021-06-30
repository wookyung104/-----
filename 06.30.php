<?php
/*반복문 - 삼항 연산자와 for문을 이용
$lotto = array(1,3,5,7,9,11);
$input_lotto = array($_POST['num1'], $_POST['num2'], $_POST['num3'], $_POST['num4'], $_POST['num5'], $_POST['num6']);

$count = 0;

for($mux_count = 0; $mux_count <= 5; $mux_count++)
{
    $input_lotto[$mux_count] == $lotto[$mux_count] ? $count++ : $count;
}
*/

// 함수를 통해 공백 출력 x
$str = "                                              Hello                                        "; //일부러 문자열 앞 뒤에 공백을 넣음

echo "trim() 함수를 사용하지 않고 출력<br/>";
echo "|".$str."|";

echo "<br/><br/>";
echo "trim() 함수를 사용하고 출력<br/>";
echo "|".trim($str)."|";

echo "<br>";
echo "<br>";

//strtolower(문자열을 소문자로 변경), strtoupper(문자열을 대문자로) 함수
$str = "Hello World";
echo "원문<br/>";
echo $str;
echo "<br/><br/>";

echo "대문자로 출력<br/>";
echo strtoupper($str);
echo "<br/><br/>";

echo "소문자로 출력<br/>";
echo strtolower($str);
echo "<br/><br/>";

echo "<br>";
echo "<br>";

//count(배열의 수를 셀 때), strlen(문자열의 수를 셀 때)함수
$food = array( 'fruits' => array('orange', 'banana', 'apple'),
            'veggie' => array('carrot', 'collard', 'pea'));

// 재귀 count 수
echo count($food, COUNT_RECURSIVE);
// 결과: 8
echo "<br/><br/>";
// 보통 count 수
echo count($food);
//결과 2

echo "<br><br>";
for($i = 0; $i<3; $i++)
{
    printf($food['fruits'][$i]);
    printf(" is %d<br>", strlen($food['fruits'][$i]));
}

echo "<br/><br/>";
//Str_replace() 문자열에서 특정 문자를 찾아 다른 문자로 변경하는 함수
$str = "Hello World";
$change_word = str_replace("World", "PHP World", $str);
echo $change_word;

echo "<br/><br/>";
$fileName = "backgraund.jpg";
$execute = substr($fileName, -4, 4);
if($execute == '.jpg' || $execute == '.png' || $execute == '.bmp' || $execute == '.gif')
{
    echo "업로드한 파일은 이미지 파일입니다.<br/>";
}
else
{
    echo "업로드한 파일은 이미지 파일이 아닙니다.<br/>";
}

echo "<br/><br/>";
//exlode() 문자열에서 특정 문자를 기준으로 나눈 후 배열로 대입
$email = "wookyung104@naver.com";
$email_Array = explode("@", $email);
echo "<pre>"; // 시스템에 미리 지정된 고정폭 글꼴을 사용하여 표현
var_dump($email_Array); // 배열의 모든 요소를 출력

var_dump($food);
printf("pre<br>\r\n");
$str_test = var_export($food, true);
printf("<br>", $str_test);
printf($str_test);

printf("<br>\r\n");
echo print_r($food);
printf("/<pre><br>\r\n");

echo "이메일 호스트 출력<br/>";
echo $email_Array[1];

echo "<br/><br/>";

//시간함수
ini_set('date.timezone', 'asia/Seoul');
echo "현재 시간은 ".date("Y년 m월 d일 H시 i분 s초", time());

echo "<br/><br/>";

//Mktime 함수는 timestamp를 구하는 함수
$start_Time = mktime(22,00,00,07,07,2020);
$end_Time = mktime(22,10,00,07,07,2020);

if($start_Time <= time() && $end_Time > time ()){
    echo "불소 화룡 이벤트 (거대보스 던전)에 참여하세요 !!";
}
else{
    echo "불소 화룡 이벤트 (거대보스 던전)가 종료되었습니다.";
}
echo "<br/><br/>";

//
ini_set('date.timezone', 'asia/Seoul');
echo "초: " .date("s초", time()), "<br/>";
echo "분: " .date("i분", time()), "<br/>";
echo "시: " .date("H시", time()), "<br/>";
echo "일: " .date("d일", time()), "<br/>";
echo "월: " .date("m월", time()), "<br/>";
echo "년: " .date("Y년", time()), "<br/>";

echo "<br/><br/>";
    $timestamp = mktime(0, 0, 0, 10, 04, 2021); echo date('Y-m-d', $timestamp);

?>



