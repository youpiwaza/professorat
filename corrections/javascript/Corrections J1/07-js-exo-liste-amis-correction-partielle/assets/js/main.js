console.log('Coucou depuis le fichier "/assets/js/main.js"');

// * Quand utiliser les tableaux ou les objets ?
//      Tableau > Ranger des données similaires
    // C'est ok, mais difficile à utiliser en tant qu'humain
    let monPremierAmi = [
        'bob',
        'eponge',
        12,
        'bikini bottom',
        'indéterminé'
    ];

    console.log(monPremierAmi);
    console.log(monPremierAmi[1]);
    console.log(monPremierAmi[4]);

//      Objet > sémantique, "aider les copaings développeurs"
    let monPremierAmiEnObjet = {
        'prenom' : 'bob',
        'nom'    : 'eponge',
        'age'    : 12,
        'sexe'   : 'indéterminé',
        'adresse': {
            'numero'      : 12,
            'ville'       : 'bikini bottom',
            'codePostal' : '75001',
        }
    }
    console.log(monPremierAmiEnObjet);
    console.log(monPremierAmiEnObjet.nom);
    console.log(monPremierAmiEnObjet.adresse.codePostal);

// ---

// * Exemple de parcours de tableau à l'aide d'une boucle
let tableauDeFruits = ['cerises', 'pommes', 'fraises', 'kiwi', 'prunes'];
console.log(tableauDeFruits);
// On affiche chacun des éléments "a la main" et on repère la répétition
// console.log(tableauDeFruits[0]);
// console.log(tableauDeFruits[1]);
// console.log(tableauDeFruits[2]);
// console.log(tableauDeFruits[3]);
// console.log(tableauDeFruits[4]);

// * Ma boucle
//      On commence à 0
//      On s'arrête avant 5
//      On augmente de 1 à chaque tour
for( let i = 0 ; i < 5 ; i++ ) {

    let unFruit = tableauDeFruits[i];

    console.log( unFruit );
    
    // * Aider pour l'exercice
    //      Au lieu d'afficher directement la case du tableau, on affiche les propriétés
    // console.log( unAmi.prenom );
    // console.log( unAmi.nom );

    //      Remplacer le console.log par un affichage dans le html
}




// ---

// * On stocke les informations de manière rangée
//      Plusieurs amis (similaires donc dans un Tableau)
//          Chaque ami a des informations précises > dans un Onbjet
let mesAmis = [
    {
        'prenom' : 'Bob',
        'nom'    : 'Eponge',
        'age'    : 16,
        'sexe'   : 'indéterminé',
        'adresse': {
            'numero'      : 42,
            'ville'       : 'Bikini bottom',
            'codePostal'  : '75001',
        }
    },

    {
        'prenom' : 'Patrick',
        'nom'    : 'Star',
        'age'    : 12,
        'sexe'   : 'Masculin',
        'adresse': {
            'numero'      : 27,
            'ville'       : 'Bikini bottom',
            'codePostal'  : '75002',
        }
    },

    {
        'prenom' : 'Sandy',
        'nom'    : 'Ecureuil',
        'age'    : 22,
        'sexe'   : 'féminin',
        'adresse': {
            'numero'      : 12,
            'ville'       : 'Texas',
            'codePostal'  : '32005',
        }
    }
];


