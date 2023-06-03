console.log('Les événements cay cool');

// * Récupérer les éléments dans le HTML en premier
let monBoutonDansLeHTML = document.getElementById('leBouton');
console.log(monBoutonDansLeHTML);

let paragrapheAModifierHTML = document.getElementById('aModifier');
console.log(paragrapheAModifierHTML);


// * Rajouter des comportements
// Ajouter un "écouteur" sur le bouton
//      de type "click", on écoute si l'utilisateur clique dessus
//      on éxécute le code de la fonction "lorsqueOnClicDessus"
monBoutonDansLeHTML.addEventListener("click", lorsqueOnClicDessus);

// "keypress" / https://developer.mozilla.org/fr/docs/Web/API/Element/keypress_event
// "mouseover" / https://developer.mozilla.org/fr/docs/Web/API/Element/mouseover_event

function lorsqueOnClicDessus() {
    console.log("Hey mais tu m'as cliqué dessus !");

    alert("Tu m'as cliqué dessus euh");

    // =+ pour rajouter, au lieu de = pour remplacer
    paragrapheAModifierHTML.innerHTML += `Hey ça rajoute dans le html !<br>`;

    // Vous pouvez rajouter du code ici
    // a executer lorsque l'événement est déclenché

}
