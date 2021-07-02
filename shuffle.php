<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>gamegame</title>
        <style>
        body{
            background-color:gray;
        }
            @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding&family=Noto+Sans+KR&display=swap');
            h1{
                font-size:40px; font-family: 'Nanum Gothic Coding', monospace; font-family: 'Noto Sans KR', sans-serif; text-align:center;
            }
            h2{
                font-size:30px; font-family: 'Nanum Gothic Coding', monospace; font-family: 'Noto Sans KR', sans-serif;
            }
        </style>
    </head>
    <body> 

<?php
    $item_list = array("leg_item1", "leg_item2", "leg_item3", "leg_item4", "leg_item5", "leg_item6", "leg_item7", "leg_item8",
                        "u_item1", "u_item2", "u_item3", "u_item4", "u_item5", "u_item6", "u_item7", "u_item8",
                        "m_item1", "m_item2", "m_item3", "m_item4", "m_item5", "m_item6", "m_item7", "m_item8",
                        "m_item9", "m_item10", "m_item11", "m_item12", "m_item13", "m_item14", "m_item15", "m_item16",
                        "n_item1", "n_item2", "n_item3", "n_item4", "n_item5", "n_item6", "n_item7", "n_item8", 
                        "n_item9", "n_item10", "n_item11", "n_item12", "n_item13", "n_item14", "n_item15", "n_item16",
                        "d_item1", "d_item2", "d_item3", "d_item4", "d_item5", "d_item6", "d_item7", "d_item8");

    $item_box_1 = $item_list[rand(0, count($item_list)-1)];
    $item_box_2 = $item_list[rand(0, count($item_list)-1)];
    $item_box_3 = $item_list[rand(0, count($item_list)-1)];
    $item_box_4 = $item_list[rand(0, count($item_list)-1)];
    $item_box_5 = $item_list[rand(0, count($item_list)-1)];
    $item_box_6 = $item_list[rand(0, count($item_list)-1)];
    $item_box_7 = $item_list[rand(0, count($item_list)-1)];
    $item_box_8 = $item_list[rand(0, count($item_list)-1)];
    $item_box_9 = $item_list[rand(0, count($item_list)-1)];
    $item_box_10 = $item_list[rand(0, count($item_list)-1)];

    $reward = compact ('item_box_1', 'item_box_2', 'item_box_3', 'item_box_4', 'item_box_5', 'item_box_6', 'item_box_7', 'item_box_8', 'item_box_9', 'item_box_10');
    shuffle($reward);

    echo "<h1>아이템 뽑기 이벤트 </h1>";
    echo "<h2> </h2>";

    echo "<h2>team 1의 아이템</h2>";
    for($i = 0; $i<5; $i++)
    {
        echo "player ", $i+1, " 아이템 : <img src=\"./img/$reward[$i].png\"<br>";
    }
    
    echo "<h2>team 2의 아이템</h2>";
    for($i = 5; $i<10; $i++)
    {
        echo "player ",$i-5," 아이템 : <img src=\"./img/$reward[$i].png\"<br>";
    }

    echo "이 주어진 상태로 시작합니다.";

/*
    for($j = 1001; $j<4000; $j++)
    {
        echo $j, ": <img src="
    }*/
?>
</body>
</html>