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

    $Insert = "INSERT INTO login_test (
        id, pw, username, email, n_name) VALUES (
        '$r_id', hex(aes_encrypt('$r_pw', 'abc')), '$r_username', '$r_email', '$r_n_name')";
    $result = mysqli_query($db_server, $Insert);
    if($result == false){
        echo mysqli_error($db_server);
    }
    header('Location: /login_test/join.php' );
?>