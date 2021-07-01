<!doctype html>
<html>
<head>
<meta charset="utf-8">
</head>
<body>
    <h1>function</h1>
    <?php
    $str = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
    Assumenda voluptatibus possimus pariatur quas facilis commodi. 
  

    Quae harum tempore nulla dignissimos ipsa enim soluta quia, 
    laboriosam sed? Quas amet hic excepturi.";
    echo $str;
    ?>
    <h2>strlen()</h2>
    <?php
    echo strlen($str);
    ?>
    <h2>nl2br</h2>
    <?php
      echo nl2br($str);
    ?>
</body>
</html>    