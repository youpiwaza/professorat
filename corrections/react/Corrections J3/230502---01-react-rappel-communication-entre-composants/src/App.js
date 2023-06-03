import "./styles.css";
import { useState } from "react";

// Mon composant Bouton
export function MonBouton({ libelle, handleClickAttribute }) {
  // On définit une valeur par défaut pour le libellé
  if (libelle == null) {
    libelle = "Valeur par défaut";
  }

  return <button onClick={handleClickAttribute}>{libelle}</button>;
}

// Mon composant texte coloré
export function MonTexteColore({ couleur, grAttribut }) {
  let isGras;
  if (grAttribut) {
    isGras = "bold";
  } else {
    isGras = "normal";
  }

  return <p style={{ color: couleur, fontWeight: isGras }}>yay</p>;
}

// Mon composant App qui contient tout
export default function App() {
  const [gras, setGras] = useState(false);

  function auClicOnRajouteLeGras(event) {
    // alert("You clicked me! ");

    setGras(true);
  }

  function auClicOnRetireLeGras(event) {
    // alert("You clicked me! ");

    setGras(false);
  }

  return (
    <div className="App">
      <h1>La petite demo</h1>
      <h2>Du rappel</h2>

      <MonBouton
        libelle="Mettre en gras"
        handleClickAttribute={auClicOnRajouteLeGras}
      />
      <MonBouton
        libelle="Enlever le gras"
        handleClickAttribute={auClicOnRetireLeGras}
      />
      <MonBouton handleClickAttribute={auClicOnRajouteLeGras} />

      <MonTexteColore couleur="red" grAttribut={gras} />
      <MonTexteColore couleur="blue" grAttribut={true} />
      <MonTexteColore couleur="#00FF00" grAttribut={false} />
    </div>
  );
}
