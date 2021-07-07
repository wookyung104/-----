<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
</head>
<body>
    <table>
        <thead>
        <tr>
            <th width="100">번호</th>
            <th width="100">ID</th>
            <th width="100">PW</th>
            <th width="100">Phone</th>
            <th width="100">date</th>
            <th width="100">gender</th>
            <th width="100">e-mail</th>
        </tr>
        </thead>
    

<?php

    // login.php or db.php
    $db_hostname = '127.0.0.1'; //102.168.126.78 
    $db_database = 'database_test';
    $db_username = 'kwk';
    $db_password = '1234';

    $db_server = new mysqli($db_hostname, $db_username, $db_password, $db_database, 3306);
    if(!$db_server)
        echo "DB Server connect Error<br>";
    else
        echo "DB Server connect<br>";
    
    $Select = "SELECT * FROM web_test ";
    $result = mysqli_query($db_server, $Select);
    while($board = $result->fetch_array())
    {
        $m_no = $board['m_no'];
        $m_id = $board['m_id'];
        $m_pw = $board['m_pw'];
        $m_phone_num = $board['m_phone_num'];
        $m_date = $board['m_date'];
        $m_gender = $board['m_gender'];
        $m_email = $board['m_email'];
        echo <<< END
        <tbody>
            <tr>
                <td width="100">$m_no</td>
                <td width="100">$m_id</td>
                <td width="100">$m_pw</td>
                <td width="180">$m_phone_num</td>
                <td width="100">$m_date</td>
                <td width="100">$m_gender</td>
                <td width="180">$m_email</td>
            </tr>
        </tbody>

        END;
    }
    $Insert = "INSERT INTO web_test (
        m_id, m_pw, m_phone_num, m_date, m_gender, m_email) VALUES (
        'id_2', 'pw_2', '010-0000-1171', '2021-07-06', 'male', 'test2@naver.com')";
    $result = mysqli_query($db_server, $Insert);
    if($result == false){
        echo mysqli_error($db_server);
    }

?>
</table>
</body>
</html>