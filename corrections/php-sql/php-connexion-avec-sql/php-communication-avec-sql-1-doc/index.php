<!doctype html>
<html>

    <head>
        <meta charset="utf-8">
        <title>PHP / Communication avec SQL</title>

        <!-- Chargement de la police afin de ne plus être dans les années 90 -->
        <!--    Google web fonts > Bebas Neue > https://fonts.google.com/specimen/Bebas+Neue?query=bebas -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">

        <!-- Favicon -->
        <link rel="shortcut icon"     href="./assets/images/glorious-favicon.ico">
        <link rel="apple-touch-icon"  href="./assets/images/apple-touch-glorious-icon.png">

        <!-- Styles -->
        <link rel="stylesheet" href="./assets/css/normalize.css">
        <link rel="stylesheet" href="./assets/css/main.css">
    </head>

<body>
    <div>

        <h1>PHP / Communication avec SQL</h1>
        <p class="small-text">La <a href="https://www.php.net/manual/fr/pdo.connections.php">doc officielle</a>, bonne chance</p>

        <pre class="prettyprint small-text">
<?php
// * Récupération de l'exemple de base de PHP
// @see     https://www.php.net/manual/fr/pdo.connections.php

try {
    // * On ajuste nos informations
    // $dbh = new PDO('mysql:host=localhost;dbname=test', $user, $pass);
    $dbh = new PDO('mysql:host=localhost;dbname=ma_super_base', 'root', '');
    
    foreach($dbh->query('SELECT * from utilisateurs') as $row) {
        print_r($row);
    }
    $dbh = null;
} catch (PDOException $e) {
    print "Erreur !: " . $e->getMessage() . "<br/>";
    die();
}
?>
        </pre>

    </div>
    
    <!-- Code en couleur -->
    <!-- @see / https://github.com/googlearchive/code-prettify -->
    <!-- Utiliser <pre class="prettyprint">le code</pre> -->
    <script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js?&amp;skin=sunburst"></script>
    
    <!-- Notre javascript -->
    <script src="./assets/js/main.js"></script>

</body>

</html>
