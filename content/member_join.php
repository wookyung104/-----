<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>회원가입</title>
</head>
<body>
    <!--form tag-->
    <form action="/test/content/join_query.php" method ="post">
        아이디<br><input type="text" name="id"></input><br>
        비밀번호<br><input type="text" name="pw"></input><br>
        비밀번호 재확인<br><input type="text" name="r_pw"></input><br>
        이름<br><input type="text" name="username"></input><br>
        생년월일<br><input type="text" name="bt"></input><br>
        성별<br><input type="text" name="gender"></input><br>
        이메일<br><input type="text" name="email"></input><br>
        <input type="submit"></input>
    </form>
</body>
</html>