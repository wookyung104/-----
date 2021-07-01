<?php
/*공이 30~40m나 60~70m에 들어오면 슬기 win, 그 외는 lose*/
$sk = rand(1, 100);

    echo "<h1>떨어진 공의 위치 =", $sk, "</h1>";
    if(($sk >= 30 && $sk <= 40) || ($sk >= 60 && $sk <= 70))
    {
        echo "<h1>$sk win</h1>";
    }
    else{
        echo "<h1>$sk lose</h1>";
    }
echo "<br>";
echo "<br>";
/*echo esle if를 사용한 경우*/
    if(($sk >= 30 && $sk <= 40))
    {
        echo "<h1>$sk win</h1>";
    }    
    elseif(($sk >= 60 && $sk <= 70))
    {
        echo "<h1>$sk win</h1>";
    }
    else{
        echo "<h1>$sk lose</h1>";
    }

echo "<br>";
echo "<br>";
/*50~70m면 슬기 win 또는 공의 위치가 6의 배수면 슬기 win*/
$sk = rand(1,100);

echo "<h1>공의 떨어진 위치 = ", $sk, "</h1>";
if(($sk >=50 && $sk <= 70) || (($sk % 6) == 0))
{
    echo "<h1>$sk win</h1>";
}
else{
    echo "<h1>$sk lose</h1>";
}
?>