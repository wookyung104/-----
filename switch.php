<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title></title>
</head>
<body>
    <!-- https://codeup.kr/problem.php?id=1216 -->
    <h1>월을 입력하세요</h1>
    <form method = "POST" action="swith.php">
    월: <input type="text" name="month"/><br/>
    <input type="submit" name="submit"/>
    </form>

    <?php
        $month = $_POST['month'];

        switch($month)
        {
            case 3:
            case 4:
            case 5:
                echo "<br>", $month, "월은 봄입니다.";
                break;
            case 6:
            case 7:
            case 8:
                echo "<br>", $month, "월은 여름입니다.";
                break;
            case 9:
            case 10:
            case 11:
                echo "<br>", $month, "월은 가을입니다.";
                break;
            case 12:
            case 1:
            case 2:
                echo "<br>", $month, "월은 겨울입니다.";
                break;
            default:
                echo "<br>1~12 사이의 값을 입력하세요.";
                break;
                
        }
    ?>
</body>
</html>