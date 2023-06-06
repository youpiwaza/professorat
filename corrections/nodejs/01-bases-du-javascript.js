// Extension .js    // pour Javascript
//      .ts         // Pour TypeScript > Le typage qui est inclus par défaut
//      .jsx        // Pour Javascript ~10

// Revoir les bases du JS classique yay
//  Attention aux écritures
// let bonjour = truc.laMethode('un paramètre');
// let bonjour2 = truc.laMethode = 'un paramètre';
// let bonjour3 = typeof laMethode;

// ECMAScript 6 — New Features: Overview & Comparison
//      Conventions de code

// * Création de variables
//      Ancienne variable JS legacy
var leNomDeLaVariable = "Bonjour !";

//      ES6
const LE_NOM_DE_LA_CONSTANTE = "Bonjour aussi";
let leNomDeLaNouvelleVariable = "Bonjour aussi";

// Utiliser des variables
console.log( leNomDeLaNouvelleVariable );


// * Types de variables

// * Chaînes de caractères
//      ~à l'ancienne
let uneChaineDeCaracteres = 'C\'est lundi aujourd\'hui';
let uneAutreChaineDeCaracteres = "C'est lundi aujourd'hui";

// Concaténation +
//      ~Pas de multiligne
console.log(uneChaineDeCaracteres + uneAutreChaineDeCaracteres + " et la variable" + leNomDeLaVariable);
let uneConcatenation = " Une première ligne "   +
    " une deuxième ligne "                      +
"<ul>"                                          +
"    <li>" + LE_NOM_DE_LA_CONSTANTE + "</li>"   +
"    <li>" + LE_NOM_DE_LA_CONSTANTE + "</li>"   +
"    <li>" + LE_NOM_DE_LA_CONSTANTE + "</li>"   +
"    <li>" + LE_NOM_DE_LA_CONSTANTE + "</li>"   +
"    <li>" + LE_NOM_DE_LA_CONSTANTE + "</li>"   +
"</ul>"                                         +
    " une troisième ligne"
;

// * Chaînes de caractères / nouvelle
let uneChaineCaracteresCool = `Ca marche ' " pareil
Mais avec le multiligne sans prise de tête.`;
// Concaténation une vraie syntaxe ${ }
let uneNouvelleConcatenation = `Du texte ${ LE_NOM_DE_LA_CONSTANTE }
et encore du texte
<ul>
    <li>${ LE_NOM_DE_LA_CONSTANTE }</li>
    <li>${ LE_NOM_DE_LA_CONSTANTE }</li>
    <li>${ LE_NOM_DE_LA_CONSTANTE }</li>
    <li>${ LE_NOM_DE_LA_CONSTANTE }</li>
    <li>${ LE_NOM_DE_LA_CONSTANTE }</li>
</ul>
`;

// * Nombres & nombres à virgule / Number
let unNombre = 42;
let unNombreAVirgule = 42.5;

// * Booléens // Boolean
let cEstVrai = true;
let cEstFalse = false;

// * Tableaux [ ] / Indexs, gérés automatiquement, et commencent à 0

///                 0           1       2
let unTableau = [ 'banane', 'fraise', 'pomme' ];
console.log( unTableau[1] );

// * Objets { } / Indexs gérés à la main
let unObjet = {
    'lIndex'    : 'laValeur',
    'nom'       : 'chevasson',
    'prenom'    : 'maxime',
}

console.log( unObjet.lIndex );
console.log( unObjet.nom );
console.log( unObjet.prenom );
