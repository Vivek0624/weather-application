<?php
    include 'partials/_dbconnect.php';

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap" rel="stylesheet">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">


    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="style.css">
    <title>Weather app ||</title>
</head>

<body>
    <div class="weather-app">
        <div class="container">

        <div class="d-flex bd-highlight">
                <h3 class="brand">The Weather</h3>
                <form action="/Weather/login.php" method="post">
                    <button type="submit" id="logout" class="btn btn-danger ml-5">Logout</button>
                </form>
</div>


        <div class="d-flex flex-row-reverse bd-highlight p-2">
        
              
</div>
          
            <?php

$sql="Select * from `users`";
$result=mysqli_query($conn,$sql);
if($result) {
    while($row=mysqli_fetch_assoc($result)) {
        $username=$row['username'];
       
    }

    
    echo "<h1 class=\"main\">Welcome $username</h1>";
}
    
?>

            <div>
                <h1 class="temp">16&#176;</h1>
                <div class="city-time">
                    <h1 class="name">London</h1>
                    <small>
                        <span class="time">06:09</span>
                        -
                        <span class="date">
                            Monday Sep 19
                        </span>
                    </small>
                </div>
                <div class="weather">
                    <img class="icon" src="./icons/day/113.png" alt="icon" width="50" height="50">
                    <span class="condition">Cloudy</span>
                </div>
            </div>
        </div>
        
        <div class="panel">
            <form id="locationInput">
                <input type="text" class="search" placeholder="Search Location...">
                <button type="submit" class="submit">
                    <i class="fas fa-search"></i>
                </button>
            </form>

            <ul class="cities">
                <li class="city">Delhi</li>
                <li class="city">New York </li>
                <li class="city">Paris</li>
                <li class="city">Tokyo</li>
            </ul>

            <ul class="details">
                <h4>Weather Details</h4>
                <li>
                    <span>Cloudy</span>
                    <span class="cloud">89%</span>
                </li>
                <li>
                    <span>Humidity</span>
                    <span class="humidity">64%</span>
                </li>
                <li>
                    <span>Wind</span>
                    <span class="wind">8km/h</span>
                </li>
            </ul>
        </div>
    </div>

 
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossorigin="anonymous"></script>
    <script src="main.js"></script>
 
</body>

</html>