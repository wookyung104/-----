<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">  
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <title>회원가입</title>
    <style>
        .div_center {
                    display: flex;
                    justify-content: center;
        }
        p{
            font-family: 'Montserrat', sans-serif;
        }
        #pairs{
            text-align: center;
        }
    </style>
</head>
<body>
    <div id="pairs" class="container">
    <!--form tag-->
    <br><br><img src="/test/login/pairs.jpg" alt="pairs" id="img">
    <form action="/test/content/join_query.php" method ="post">
        <div class="div_center">
            <div id="id">
        <br><br><p><b>id</b></p><input type="text" name="id" text-align="center"><br></input><br>
        </div>
    </div>
            <div class="div_center">
                <div id="id">
        <p><b>password</b></p><input type="text" name="pw"><br></input><br>
    </div>
    </div>
            <div class="div_center">
                <div id="id">
        <p><b>username</b></p><input type="text" name="username"><br></input><br>
    </div>
    </div>
            <div class="div_center">
                <div id="id">
        <p><b>e-mail</b></p><input type="text" name="email"><br></input><br>
    </div>
    </div>
            <div class="div_center">
                <div id="id">
        <p><b>nickname</b></p><input type="text" name="n_name"></input><br><br><br>
    </div>
    </div>
            <div class="div_center">
                <div id="id">
        <button type="button" class="btn btn-warning" color="#000080"><b>join</b></button>
    </div>
        </div>
    </form>
</body>
</html>