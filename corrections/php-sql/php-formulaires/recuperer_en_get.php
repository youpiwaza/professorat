<!doctype html>
<html>

    <head>
        <meta charset="utf-8">
        <title>Un fichier PHP tout simple !</title>

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

        <h3>On récupère les données via $_GET</h3>

        <div class="display-block small-text">

            <p>Affichage "debug"</p>
            <pre>

<?php
    // C'est un tableau
    var_dump($_GET);

    // Les cases sont nommées, via les attributs "name"
    // array(2) {
    //     ["nom"]=>
    //     string(4) "Chev"
    //     ["prenom"]=>
    //     string(3) "Max"
    // }

    // On peut les récupérer / réutiliser via
    // $_GET["nom"]
    // $_GET["prenom"]
?>

            </pre>

            <hr>

            <p>Affichage classique</p>
            <p>Vous avez entré le nom <?= $_GET["nom"] ?></p>
            <p>Vous avez entré le prénom <?= $_GET["prenom"] ?></p>

        <!-- /.display-block -->
        </div>

    </div>
    
    <!-- Code en couleur -->
    <!-- @see / https://github.com/googlearchive/code-prettify -->
    <!-- Utiliser <pre class="prettyprint">le code</pre> -->
    <script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js?&amp;skin=sunburst"></script>
    
    <!-- Notre javascript -->
    <script src="./assets/js/main.js"></script>

</body>

</html>
