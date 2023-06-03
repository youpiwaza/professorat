console.log('Coucou depuis le fichier "/assets/js/main.js"');

// * Les variables
//          ~ancien, pas recommandé
var prenom = "Bob";

//          ~ nouvelle syntaxe (ES6)
//      constante > ne change pas > refaire = > erreur
const lePrenom = "Max";
//      variable classique
// Utilisez ça !
let encoreUnPrenom = "Jean michel";



// * Types de variables
// Déjà les chaînes de caractères 'hey' et "hoy" / String

//          ~ nouvelle syntaxe (ES6)
// `` > Alt gr + 7 > tu appuies 2 fois
let laChaineCorrecte = `C'est moi !`;

// Un nombre / Number
let leNombre = 42;

// Un nombre à virgule / Number
// NON // let leNombreAVirgule = 42,6;
let leNombreAVirgule = 42.6;

// Booléens / Booleans > vrai ou faux
let cEstVrai = true;
let cEstFalse = false;

console.log(laChaineCorrecte);
console.log(leNombre);
console.log(leNombreAVirgule);
console.log(cEstVrai);
console.log('42'); // Attention c'est une chaine de caractères !
console.log('true'); // Attention c'est une chaine de caractères !


console.log('----'); // un séparateur dans la console

// * typeof > qui renvoit le type de la variable
console.log(typeof laChaineCorrecte);
console.log(typeof leNombre);
console.log(typeof leNombreAVirgule);
console.log(typeof cEstVrai);
console.log(typeof '42'); // Attention c'est une chaine de caractères !
console.log(typeof 'true'); // Attention c'est une chaine de caractères !


let leParagrapheDansLeHtml = document.getElementById('monSuperId');
leParagrapheDansLeHtml.innerHTML = "hey";

prenom = 'Maxime';

// * Concaténation
//          "Scotch" du javscript
//  Relier des chaines de caractères et des variables

// J'aimerai afficher "Bonjour je m'apelle Maxime" Mais avec la variable prénom

// À l'ancienne, on va utilier +
leParagrapheDansLeHtml.innerHTML = "Bonjour je m'apelle " + prenom;
// Multiligne compliqué
leParagrapheDansLeHtml.innerHTML = "Bonjour je m'apelle " + 
    prenom  + 
    ' :) ';

// Nouvelle syntaxe (ES6)
leParagrapheDansLeHtml.innerHTML = `Au revoir je m'apelle ${prenom} !
et je peux faire du multiligne tranquille 
et mon age est ${leNombre} !`;

leParagrapheDansLeHtml.innerHTML = `<p>Au revoir je m'apelle ${prenom} !</p>
<p>et je peux faire du multiligne tranquille</p>
<p>et mon age est ${leNombre} !</p>`;
