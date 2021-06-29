<?php
    ini_set('display_errors', '0');
    $num = $_GET["num"];
    $count = $_GET["count"]+$num;
    echo <<<_END
<html>
    <head>
        <meta charset = "utf-8">
        <title>세븐나이츠2 뽑기 확률 알아보기</title>
    </head>

    <body>
        <h2>1회 또는 10연속 뽑기를 선택하세요. </h2>
        <button onclick="window.location.href='알고리즘.php?num=1&&count=$count'">1회뽑기</button>
        <button onclick="window.location.href='알고리즘.php?num=10&&count=$count'">10회뽑기</button>
    </body>
</html>
_END;
    echo "<br>시도횟수 : ", $count;
    if($num == 1)
    {
        $seclect_num = rand(0, 100000)/1000;
        select_char($select_num);
    }
    else{
        for($i = 0; $i < $num; $i++)
        {
            $select_num = rand(0, 100000)/1000;
            select_char($select_num);
        }
    }

    function select_char($select_num)
    {
        if($select_num>=0 && $select_num<=0.01)
        {
            echo '<p style="color:red">네스트라의 사도 세인<br>';
        }
        else if($select_num>0.01 && $select_num<=0.02)
        {
            echo '<p style="color:red">네스트라의 사모 밍<br>';
        }
    }
?>