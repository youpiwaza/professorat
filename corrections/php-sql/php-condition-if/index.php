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

        <h3>Les conditions</h3>
        <p>Structures de contrôles : Si, sinon si, sinon</p>

<?php
    
    // Boolean > vrai soit faux
    $une_variable = true;
    $une_variable = false;

    // * Si ... Sinon
    /* Syntaxe : 

    / Si la condition est vraie
    if( CONDITION EST CE QUE C EST VRAI OU FAUX) {
        / J'execute le code ici
    }
    / Sinon, si la condition est fausse
    else {
        / j'execute le code ici
    }
    */

    
    // Nombre
    $age = 12;

    if($age >= 18) {
        echo "<p>On est majeure, go bière 🍻</p>";
    }
    else {
        echo "<p>On est mineur, go bière 🍻</p>";
    }

    // == égal
    // != différent

    // Moins utilisée // donc on s'en fout
    // Dans le cas ou énumération
    /* Syntaxe :

    switch ( LA VARIABLE ) {
        case LE TEST
        case LE TEST
        default
    }

    */

    // switch ($bouteille ) {
    //     case 'vodka':
    //         echo "Tu vomis !";
    //         break;
        
    //     ..
    // }


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
