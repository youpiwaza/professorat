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
    <div class="small-text">

        <h1>PHP / Communication avec SQL / Serveur maxime</h1>
        <p>Pour celles zet ceux qui ont le phpMyAdmin qui déconne</p>
        <p>🚨 Attention, besoin que je fasse une opération manuelle "Autoriser adresse IP"</p>
        <p class="small-text">La <a href="https://www.php.net/manual/fr/pdo.connections.php">doc officielle</a>, bonne chance</p>

        <div style="text-align: left;">

<?php


// ! Connexion à phpMyAdmin
//      Url             / https://phpmyadmin-gra3.hosting.ovh.net/
//      Hôte            / cm79609-001.eu.clouddb.ovh.net
//      Utilisateur     / temp_efrei_util
//      Mot de passe    / y4nfEtokXNsNcCFefBmndxmdYPYtyN
//      Port            / 35350


// * Récupération de l'exemple de base de PHP
// @see     https://www.php.net/manual/fr/pdo.connections.php

// On rend la variable accessible à l'extérieur du try...catch (portée des variables / scope)
try {
    // ! Connexion
    // * On ajuste nos informations
    $hote                = 'cm79609-001.eu.clouddb.ovh.net';
    $nom_base_de_donnees = 'temp_efrei';
    $utilisateur         = 'temp_efrei_util';
    $mot_de_passe        = 'y4nfEtokXNsNcCFefBmndxmdYPYtyN';
    $port_sql            = '35350';

    $dbh = new PDO(
                'mysql:host=' . $hote . ';port=' . $port_sql . ';dbname=' . $nom_base_de_donnees
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
    // Affichage avec de belles balises html
?>
    <h2>Voici la liste des utilisateurs en base</h2>
    <ul>
<?php
        foreach ($mes_utilisateurs as $un_utilisateur) {
?>
            <li><?= $un_utilisateur['prenom'] ?> <?= $un_utilisateur['nom'] ?></li>
<?php
        }
?>
    </ul>
<?php

}
// ! Au cas ou on choppe les erreurs (mauvaise connexion, mauvaise base ou requête)
catch (PDOException $e) {
    // Note, $e contient beaucoup d'informations, n'hésitez pas a var_dump en cas de problème
    print "Erreur !: " . $e->getMessage() . "<br/>";
    die();
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
