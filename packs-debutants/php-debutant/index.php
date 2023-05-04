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

        <!--
            🚨 Attention 🚨

            Si ce fichier n'affiche que du texte lorsque vous l'ouvrez,
            C'est que vous n'êtes pas passés par un serveur local, par exemple XAMPP

            💡 Dans la barre du navigateur, l'adresse ne doit pas commencer par "file:///C:/"
            Mais plutôt par ~ "localhost/"

            Quelques étapes à respecter afin de pouvoir exécuter du PHP :

            1. Installer un serveur local (XAMPP) en suivant les instructions
                1-1. On peut le trouver ici https://www.apachefriends.org/fr/index.html
            2. Notez bien le chemin d'installation, par défaut C:\xampp
            3. Vérifier que le programme du serveur est bien lancé (XAMPP Control Panel)
            4. Vérifiez que le serveur est bien lancé (Apache et Mysql doivent être en vert), sinon bouton "Start"
            5. Première vérification : Apache > Bouton "Admin", ou accédez dans votre navigateur à http://localhost/dashboard/
            6. Copiez ce projet packs-debutants "php-debutant" dans C:\xampp\htdocs\
            7. Accédez dans votre navigateur à http://localhost/php-debutant/index.php (sans /dashboard ;) )
            8. Si ça fonctionne, rajouter le lien dans vos favoris

        -->


        <h1>Un fichier PHP tout simple</h1>

        <p>Nous pouvons tester que tout fonctionne en affichant quelque chose</p>
        <p>Par exemple en utilisant ce code dans le fichier 'index.php'</p>
        
        <pre class="prettyprint">
&lt;?php
    echo 'Bonjour tout le monde !';
?&gt;</pre>
        
        <p>
            Test :
            <?php
                echo 'Bonjour tout le monde !';
            ?>
        </p>


    </div>
    
    <!-- Code en couleur -->
    <!-- @see / https://github.com/googlearchive/code-prettify -->
    <!-- Utiliser <pre class="prettyprint">le code</pre> -->
    <script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js?&amp;skin=sunburst"></script>
    
    <!-- Notre javascript -->
    <script src="./assets/js/main.js"></script>

</body>

</html>
