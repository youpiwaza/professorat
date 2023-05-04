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
    <div class="small-text">

        <h3>Ma page d'accueil</h3>

<?php
    // Les boucles
    // "Pour" ma variable qui va de 1 jusqu'a 10
    //      JE fais "ca à chaque tour

    // for( INITIALISATION ; CONDITION DE SORTIE ; LE PAS )
    // ++ > On augmente de 1
    for( $compteur = 1 ; $compteur < 100 ; $compteur++ ) {
        echo "<p>Mon compteur : $compteur</p>";
    }
?>

    </div>
    
    <!-- Code en couleur -->
    <!-- @see / https://github.com/googlearchive/code-prettify -->
    <!-- Utiliser <pre class="prettyprint">le code</pre> -->
    <script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js?&amp;skin=sunburst"></script>
    
    <!-- Notre javascript -->
    <script src="./assets/js/main.js"></script>

</body>

</html>
