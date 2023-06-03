import "./styles.css";

const produits = [
  { titre: "Salade", id: 1 }, // index 0
  { titre: "Ail", id: 2 }, // index 1
  { titre: "Pomme", id: 3 }, // index 2
  { titre: "Banane", id: 4 } // index 3
];

// La variable est remplie avec ?
//    nos produits > on fait la fonction "map()" dessus ??
//  google "Javascript fonction map"
//    la fonction map : on prend chacun des éléments
//      et on fait quelquechose avec, on leur applique quelque chose

// On stocke le résultat dans cette variable
const ceQuiSortDeMap =
  // Pour chacun des produit
  produits.map((produit) => (
    // On renvoie le titre dans un paragraphe
    <p>{produit.titre}</p>
  ));

const ceQuiSortEncoreDeMap =
  // Pour chacun des produit
  produits.map((produit) => (
    // On renvoie le titre dans un paragraphe
    <li key={produit.id}>{produit.titre}</li>
  ));

export default function App() {
  return (
    <div className="App">
      <h1>Test affichage de liste</h1>
      <h2>Fait à la main</h2>
      <ul>
        <li>{produits[0].titre}</li>
        <li>{produits[1].titre}</li>
        <li>{produits[2].titre}</li>
      </ul>

      <h2>Fait un peu plus autmatiquement</h2>
      <div>{ceQuiSortDeMap}</div>

      <h2>Liste & id</h2>
      <ul>{ceQuiSortEncoreDeMap}</ul>
    </div>
  );
}
