console.log('Coucou depuis le fichier "/assets/js/main.js"');

// * Variables de type Tableaux / Array
// Syntaxe [ ]
let unTableau = ['citron', 'fraises', 'bananes', 6, true];
console.log(unTableau);

// Accéder au contenu du tableau, on va devoir utiliser l'index
//      qui commence à zéro
//  0: "citron"
//  1: "fraises"
//  2: "bananes"
//  3: 6
//  4: true

// Premier élément du tableau > dans la "case" 0
console.log( unTableau[0] ); // 'citron'
console.log( unTableau[3] ); // 6

// Changer les fraises en framboises
unTableau[1] = 'framboises';
console.log(unTableau);

// Plein de méthodes pour manipuler les tableaux
//      https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array

// ---

// * Variables de type Objets / Objects
// Syntaxe { }
//      ~peu ou prou pareil que les tableaux
// au lieu d'avoir un index généré de manière auto
// on affecte nous même les différents index
let objet = {
    // index : le contenu
    'prenom' : 'Maxime',
    'nom' : 'Bof',
    'etc' : 'etcaetera'
};

console.log( objet );

// Accéder à une propriété de l'objet
console.log( objet.prenom ); // 'Maxime'

// Changer la valeur d'une propriété
objet.prenom = 'Bob';
console.log( objet );

// ---

// On peut imbriquer tout ça
let unObjetTresComplexe = {
    'unTableau' : [
        'sel',
        'poivre',
        'épices',
        'tout plein de bonnes choses'
    ],
    'tauxTVA': 20 / 100,
    'meteo': {
        'temperature': '20°',
        'temps': 'ensoleillé',
        'historique': [
            '01/06/2023',
            '02/06/2023'
        ]
    }
}
