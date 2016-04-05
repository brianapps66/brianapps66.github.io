<!doctype html>
<html>
<meta charset="UTF-8">
<head>
    <!--<link href='http://fonts.googleapis.com/css?family=Oswald:400,300' rel='stylesheet'>-->
    <link href='https://fonts.googleapis.com/css?family=Lato|Source+Sans+Pro|Oswald:400,300' rel='stylesheet' type='text/css'>
    <link href="../styles/css/bootstrap.min.css" rel="stylesheet">
    <link href="../styles/css/styles.css" rel="stylesheet">
</head>
  <body>
    <div class="header">
      <div class="container">
        <a href="../index.html" class="logo-icon">
          <img src="../images/logo.png">
        </a>
        <ul class="menu">
          <li><a href="../minecraft.html">Minecraft</a></li>
          <li><a href="../pokemon.html">Pokemon</a></li>
          <li><a href="../xbox.html">XBox</a></li>
          <li><a href="../transfers.html">Transfers</a></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle">Man City <b class="caret"></b></a>
            <ul class="dropdown-menu">
              <li><a href="team-photo.html">Team Photo</a></li>
              <li><a href="players.php">Players</a></li>
              <li><a href="games.html">Games</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <div class="main_layout">

      <div class ="container">
        <h1>Get a picture of a different Man City player every time you visit!</h1>
        <?php include('get_image.php') ?>
      </div>
    </div>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="../scripts/app.js"></script>
  </body>
</html>
