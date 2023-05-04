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

// On rend la variable accessible à l'extérieur du try...catch (portée des variables / scope)
try {
    // ! Connexion
    // * On ajuste nos informations
    $hote                = 'localhost';
    $nom_base_de_donnees = 'ma_super_base';
    // Les défauts phpmyadmin
    $utilisateur         = 'root';
    $mot_de_passe        = '';

    $dbh = new PDO(
                'mysql:host=' . $hote . ';dbname=' . $nom_base_de_donnees
                , $utilisateur
                , $mot_de_passe
    );

    // Gestion propre des caractères accentués (encodage)
    $dbh->exec("SET NAMES 'utf8';");

    // ! Requête de récupération
    // @see     https://www.php.net/manual/fr/pdo.prepared-statements.php

    // Je prépare ma requête SQL
    $mes_utilisateurs = $dbh->prepare("SELECT * FROM utilisateurs");
    
    // Je l'execute dans la base de donnée, si c'est possible est renvoie les résultats
    $mes_utilisateurs->execute();

    // * Si il y a plusieurs résultats, ils sont retounés sous forme de tableau
    // * Je peux le parcourir afin de faire l'affichage
    
    // Pour chacun des utilisateurs
    // Débug
    foreach ($mes_utilisateurs as $un_utilisateur) {
        print_r($un_utilisateur);
    }

}
// ! Au cas ou on choppe les erreurs (mauvaise connexion, mauvaise base ou requête)
catch (PDOException $e) {
    // Note, $e contient beaucoup d'informations, n'hésitez pas a var_dump en cas de problème
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
