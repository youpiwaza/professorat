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

        <h3>Formulaires</h3>

        <div class="display-block small-text">

            <h4>Formulaire en GET</h4>
            <p>Les données sont passées dans l'url</p>

            <form action="recuperer_en_get.php" method="get">
                
                <!-- table>tr>td>label^td>input -->
                <table>
                    
                    <!-- Libellé & saisie : Nom -->
                    <tr>
                        <td><label for="idNom">Nom : </label></td>
                        <td><input type="text" name="nom" id="idNom"></td>
                    </tr>

                    <!-- Libellé & saisie : Prenom -->
                    <tr>
                        <td><label for="idPrenom">Prenom : </label></td>
                        <td><input type="text" name="prenom" id="idPrenom"></td>
                    </tr>

                    <tr>
                        <td colspan="2">
                            <input type="submit" />
                        </td>
                    </tr>
                </table>
            </form>

            <hr>

            <h4>Formulaire en POST</h4>
            <p>Les données sont passées de manière "cachée"</p>

            <form action="recuperer_en_post.php" method="POST">
                
                <!-- table>tr>td>label^td>input -->
                <table>
                    
                    <!-- Libellé & saisie : Nom -->
                    <tr>
                        <td><label for="idNom">Nom : </label></td>
                        <td><input type="text" name="nom" id="idNom"></td>
                    </tr>

                    <!-- Libellé & saisie : Prenom -->
                    <tr>
                        <td><label for="idPrenom">Prenom : </label></td>
                        <td><input type="text" name="prenom" id="idPrenom"></td>
                    </tr>

                    <tr>
                        <td colspan="2">
                            <input type="submit"></input>
                        </td>
                    </tr>
                </table>
            </form>

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
