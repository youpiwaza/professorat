console.log('Coucou depuis le fichier "/assets/js/main.js"');

// On récupère le <p> html à modifier
let leParagrapheHTML = document.getElementById('unId');

// Attention au type de la variable
let age = 17;

// * Conditions
//      Opérateurs de comparaison
//  https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Expressions_and_operators

// SI la condition est vraie
// Majeure ? Est-ce que l'age est plus grand ou égal à 18 ?
if ( age >= 18 ) {
    // On exécute ça
    // console.log("La condition est vraie");
    leParagrapheHTML.innerHTML = `Vous avez ${age} ans, vous êtes majeur 🍺`;
}
// Sinon
else {
    // On exécute ça
    // console.log("La condition est fausse");
    leParagrapheHTML.innerHTML = `Vous avez ${age} ans, vous êtes mineur ⛏️`;
}


// ---

let condition1 = true;
let condition2 = true;

// Si.. Sinon si ... sinon
if ( condition1 ) {
    // On exécute ça
}
// Sinon si
//      La première condition DOIT etre fausse
else if ( condition2 ) {
    // On exécute ça SI la deuxième condition est vraie
}
// Sinon
else {
    // On exécute ça SI et seulement si les deux conditions sont fausses
}

// ---

// On peut debugger des conditions directement dans le console.log
console.log(age > 18);
console.log(age);
console.log(typeof age);
console.log(condition1);
console.log(typeof condition1);
console.log(age == condition1);


// ---

// * Opérateurs logiques
// &&   ET
// ||   OU
// Regrouper plusieurs conditions en une seule

//  * Les deux conditions doivent être vraie pour que l'ensemble soit vrai
// if( age > 18 && sexe = 'masculin')

//  * Au moins une des 2 conditions doit être vraie pour que l'ensemble soit vrai
// if( age < 18 || sexe = 'feminin')

// ---

// On peut imbriquer des tests
let test1 = true;
let test2 = true;
let test3 = true;

if ( test1 ) {
    // On exécute ça si test1 est vrai
    if ( test2 ) {
        // On exécute ça si test1 est vrai mais aussi test2 est vrai
        
    }
    // Sinon
    else {
        // On exécute ça si test1 est vrai mais test2 est faux
    }
}
// Sinon
else {
    // On exécute ça si test1 est faux
    if ( test3 ) {
                // On exécute ça si test1 est faux mais aussi 3 est vrai

    }
    // Sinon
    else {
        // On exécute ça si test1 est faux mais 3 est faux
    }
}

// ---

// Switch
//      https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/switch

// Dans le cas ou la valeur vaut ...
//      Cas 1
//      Cas 2
//      Cas 3
//      Par défaut (aucun autre cas ne correspond)

let expr = 'Oranges';

// Uniquement le test égalité stricte ===
switch (expr) {
    case 'Oranges':
        console.log('Oranges are $0.59 a pound.');
        break;

    case 'Mangoes':
    case 'Papayas':
        console.log('Mangoes and papayas are $2.79 a pound.');
        // Expected output: "Mangoes and papayas are $2.79 a pound."
        break;

    default:
        console.log(`Sorry, we are out of ${expr}.`);
}
