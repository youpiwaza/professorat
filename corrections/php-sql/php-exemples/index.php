<!doctype html>
<html>

    <head>
        <meta charset="utf-8">
        <title>Exemples de codes PHP</title>

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

        <h1>Exemples de codes PHP</h1>

        <pre class="prettyprint">
<?php
// Balise pour indiquer le début de PHP

// On affiche du texte, avec des balises html
//                                   v ; en fin de ligne (ou d'instruction)
echo '<p>Bonjour tout le monde !</p>';

// * Types de variables
$chaine_de_caracteres   = "Maxime";
$nombre                 = 5;
$nombre_a_virgule       = 5.2; // Même si on utilise un point

$booleen_vrai = true;
$booleen_faux = false;


$un_tableau = array("pomme", "poire", "fraise");
// On peu accéder au différents éléments de cette manière
// echo $un_tableau[0]; // première case "pomme"
// echo $un_tableau[1]; // deuxième case "poire"
// echo $un_tableau[2]; // troisième case "fraise"

// Note : pas de echo, donc rien n'est affiché

// * Débogage
echo "<p>Affichage debug de mon tableau</p>";
var_dump( $un_tableau ); // Note : pas besoin de echo

// Balise pour indiquer la fin de PHP
?>
        </pre>

        <div class="small-text">
            <p>Note : On peut ajouter du HTML entre 2 balises PHP</p>
            <p>On peut utiliser l'affichage raccourci : <?= $chaine_de_caracteres ?></p>

            <?php
                // Exemple de concaténation, avec point
                $prenom = 'Bob';

                echo "<p>Bonjour, je m'appelle " . $prenom . ", et toi ?</p>";

                $chaine = '<p>le début, ';
                $chaine = $chaine . 'le milieu, ';
                $chaine .= 'la fin</p>';

                echo $chaine;

                // ---

                // * Avancé : Exemple de condition
                $age = 15; // Vous pouvez modifier et relancer la page
                // $age = 30; // Code commenté, pas exécuté

                if($age > 18) {
                    echo '<p>Vous êtes majeur du haut de vos ' . $age . ' ans</p>';
                }
                else {
                    echo '<p>Vous êtes mineur</p>';
                }

                // ---

                // * Avancé : Exemple de boucle, afin d'automatiser
                $maximum = 20;

                $chaine_a_afficher = '<p>Je compte jusqu\'à ' . $maximum . ' : ';

                // Pour chaque valeur de la variable i, allant de 1 à 10, en augmentant de 1 à chaque tour
                // for($i = 1 ; $i < 10 ; $i++) { }

                for($i = 1 ; $i <= $maximum ; $i++) {
                    $chaine_a_afficher .= $i . ', ';
                }

                $chaine_a_afficher .= '</p>';

                echo $chaine_a_afficher;

                // ---

                // * Avancé : Exemple de boucle, parcours de tableau
                $fruits = array("cerise", "kiwi", "fraise");
                $fruits = array("cerise", "kiwi", "fraise", "pomme", "rhubarbe");
                
                $nombre_d_elements = count($fruits);
                // var_dump( $nombre_d_elements );

                echo '<p>Mon tableau contient ' . $nombre_d_elements . ' fruits : ';
                
                // Les tableaux commencent à zéro
                for($j = 0 ; $j < $nombre_d_elements ; $j++) {
                    echo $fruits[$j] . ', ';
                }

                echo '</p>';

            ?>
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
