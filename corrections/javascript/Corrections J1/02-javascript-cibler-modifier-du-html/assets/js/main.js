console.log('Coucou depuis le fichier "/assets/js/main.js"');

// * Modifier le HTML
// Récupérer LES éléments par leur nom de tag, leur nom de balise ex: "<h1>""
// getElementsByTagName()

// Récupérer LES éléments par leur nom de classe
//      ex: <div class="leNomDeLaClasse">
// getElementsByClassName()



// Récupérer UN SEUL élément par leur nom d'id
//      ex: <p id="monSuperIdentifiant">
// getElementById()

// 1 / Récupérer l'élement dans le html
var leParagrapheDuHTML = document.getElementById("monSuperIdentifiant");
// Tester
console.log(leParagrapheDuHTML);

// 2 / On va venir modifier son contenu
leParagrapheDuHTML.innerHTML = "Yay j'ai modifié le contenu !";
