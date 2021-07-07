<?php
    $r_id = $_POST['id'];
    $r_pw = $_POST['pw'];
    $r_username = $_POST['username'];
    $r_email = $_POST['email'];
    $r_n_name = $_POST['n_name'];
    echo "받아온 데이터 <br>";
    echo $r_id, "<br>";
    echo $r_pw, "<br>";
    echo $r_username, "<br>";
    echo $r_email, "<br>";
    echo $r_n_name, "<br>";

    $db_hostname = '127.0.0.1'; //102.168.126.78 
    $db_database = 'database_test';
    $db_username = 'kwk';
    $db_password = '1234';

    $db_server = new mysqli($db_hostname, $db_username, $db_password, $db_database, 3306);
    if(!$db_server)
        echo "DB Server connect Error<br>";

    $Insert = "INSERT INTO web_test (
        m_id, m_pw, m_phone_num, m_date, m_gender, m_email) VALUES (
        '$r_id', '$r_pw', '$r_username', '$r_bt', '$r_gender', ' $r_email')";
    $result = mysqli_query($db_server, $Insert);
    if($result == false){
        echo mysqli_error($db_server);
    }
    header('Location: /test/login/join.php' );
?>