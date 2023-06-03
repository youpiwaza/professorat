import "./styles.css";

// Conditions
// Les booléens
//    Vrai / Faux
//    true / false

console.log(5 < 2);

/*
Opérateurs de comparaison

==    // égalité
===   // égalité stricte
!=    // différent
!==

>     // maths
<

*/

let resultat;

// Si la CONDITON est vraie
if (5 > 2) {
  //if (5 < 2) {
  resultat = "Vrai, :)";
} else {
  resultat = "Faux, :(";
}

// On peut changer l'affichage d'un composant
// grâce à une condition
let unComposant;
if (12 === 14) {
  unComposant = <p>Oui c'est vrai</p>;
} else {
  unComposant = <button>Non c'est faux</button>;
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>{resultat}</h2>

      <h3>Test affichage conditionnel de composant</h3>
      <div>{unComposant}</div>
    </div>
  );
}
