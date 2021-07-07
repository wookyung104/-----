<!DOCTYPE html>
<html lang="kr">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="UTF-8">
    <title>한글...ㅠㅠ</title>
</head>
<body>
    <table>
        <thead>
        <tr>
            <th width="100">no.</th>
            <th width="100">ID</th>
            <th width="100">PW</th>
            <th width="100">username</th>
            <th width="100">email</th>
            <th width="100">n_name</th>
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
    /*else
        echo "DB Server connect<br>";*/
    
    mysqli_query($db_server, "set session character_set_connection=utf8;");
    mysqli_query($db_server, "set session character_set_results=utf8;");
    mysqli_query($db_server, "set session character_set_client=utf8;");
        
    $Select = "SELECT * FROM login_test ";
    $result = mysqli_query($db_server, $Select);
    while($board = $result->fetch_array())
    {
        $m_no = $board['no'];
        $m_id = $board['id'];
        $m_pw = $board['pw'];
        $m_username = $board['username'];
        $m_email = $board['email'];
        $m_n_name = $board['n_name'];
        echo <<< END
        <tbody>
            <tr>
                <td width="100">$m_no</td>
                <td width="100">$m_id</td>
                <td width="100">$m_pw</td>
                <td width="180">$m_username</td>
                <td width="100">$m_email</td>
                <td width="180">$m_n_name</td>
            </tr>
        </tbody>

        END;
    }
    /*
    $Insert = "INSERT INTO login_test (
        m_id, m_pw, m_username, m_email, m_n_name) VALUES (
        'asd_12', 'alskdj12', '강우경', 'rkdrkd-.-.@naver.com', '쿄쿄')";
    $result = mysqli_query($db_server, $Insert);
    if($result == false){
        echo mysqli_error($db_server);
    }*/

?>
</table>
</body>
</html>