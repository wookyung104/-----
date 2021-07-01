<html>
<!--조건문을 이용하여 암호가 8글자 이하일 때는 나쁨, 8글자 이상일 때는 좋음-->
<head>
<title></title>
</head>
<body>
    <h1>데이터의 입력</h1>
    <form method = "POST" action="strlen.php">
    아이디 : <input type="text" name="id"/><br/>
    비밀번호 : <input type="text" name="pw"/><br/>
    이메일 : <input type="text" name="email"/><br/>
    <input type="submit" name="submit"/>
    </form>

    <?php
        if(strlen($_POST['pw'])>= 8)
        {
            echo "아이디: ".$_POST['id']."<br/>";
            echo "비밀번호: ".$_POST['pw']. "좋음 <br/>";
            echo "이메일: ".$_POST['email']."<br/>";
        }
        else{
            echo "아이디: ".$_POST['id']."<br/>";
            echo "비밀번호: ".$_POST['pw']."나쁨 <br/>";
            echo "이메일: ".$_POST['email']."<br/>";
        }
    ?>
</body>
</html>

<html>
<!--if문 사용하여 로또-->
<head>
        <meta charset="uft-8">
        <title></title>
</head>
<body>
    <h1>데이터의 입력</h1>
    <form method ="POST" action="strlen.php">
        숫자1: <input type="text" name="num1"/><br/>
        숫자2: <input type="text" name="num2"/><br/>
        숫자3: <input type="text" name="num3"/><br/>
        숫자4: <input type="text" name="num4"/><br/>
        숫자5: <input type="text" name="num5"/><br/>
        숫자6: <input type="text" name="num6"/><br/>
        <input type="submit" name=submit/>
    </form>

    <?php
        $lotto = array(1,3,5,7,9,11);
        $input_num1 = $_POST['num1'];
        $input_num2 = $_POST['num2'];
        $input_num3 = $_POST['num3'];
        $input_num4 = $_POST['num4'];
        $input_num5 = $_POST['num5'];
        $input_num6 = $_POST['num6'];

        $count = 0;

        if($input_num1 == $lotto[0])
        {
            $count++;
        }
        if($input_num2 == $lotto[1])
        {
            $count++;
        }
        if($input_num3 == $lotto[2])
        {
            $count++;
        }
        if($input_num4 == $lotto[3])
        {
            $count++;
        }
        if($input_num5 == $lotto[4])
        {
            $count++;
        }
        if($input_num6 == $lotto[5])
        {
            $count++;
        }

        switch($count)
        {
            case 6:
                echo "1등";
                break;
            case 5:
                echo "2등";
                break;
            case 4:
                echo "3등";
                break;
            case 3:
                echo "4등";
                break;
            default:
                "다음 기회에...";
        }
    ?>
</body>
</html>