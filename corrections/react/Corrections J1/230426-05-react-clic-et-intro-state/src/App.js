import "./styles.css";
import { useState } from "react";

export default function App() {
  // Variable propre au composant, ~= propriété
  // Un état, défini par défaut, à 0

  //  [ "VARIABLE",  "ACCESSEUR"   ]
  ///                 ^ fonction dédiée à la mise à jour de la variable
  const [compté, mettreAJourLeCompté] = useState(0);

  // Le javascript yay
  // On gère le comportement du bouton
  function handleClick() {
    // alert("You clicked me!");

    mettreAJourLeCompté(compté + 1);
  }

  return (
    <div className="App">
      <h1>ICI</h1>
      <h2>Je compte : {compté}</h2>
      <button onClick={handleClick}>Click me</button>
      <p>{compté}</p>
    </div>
  );
}
