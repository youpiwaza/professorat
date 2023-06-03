console.log('Coucou depuis le fichier "/assets/js/main.js"');

// yay je suis du javascript
// On peut rajouter des commentaires
var prenom = 'Kevin'; // J'enregistre mon prénom

/* Un autre commentaire */
/* Un commentaire
    sur
    plusieurs lignes
*/

// Afficher une popup
// alert("Gagne un Iphone 16 gratuit promis donne la CB !");

// Chaines de caractères / String
//      On peu utiliser des guillemets simples 'Hey'
//      On peu utiliser des guillemets doubles "Hop"
//      On peu utiliser des guillemets doubles `Hop`
var monTexte = "C'est super le javascript";
var monAutreTexte = 'C\'est super le javascript';

// Création de variable
//      var     LE_NOM_DE_LA_VARIABLE    =      'Le contenu'    ;

// Utiliser / Afficher une variable
// alert(prenom);


console.log("JE suis dans la console !");
console.log(prenom);

console.log("Je fais changer mon prenom");
prenom = 'Maxime';
console.log(prenom);

// document > à la balise <html>
//      body > la balise <body> à l'intérieur de <html>
// append( ) > la fonction qui rajoute du contenu à la fin
document.body.append("J'apparais dans le html");
