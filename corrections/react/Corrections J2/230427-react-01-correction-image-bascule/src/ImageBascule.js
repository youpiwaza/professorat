import { useState } from "react";

export default function ImageBascule() {
  // Booléen vrai / faux
  // let affiche = false; // tests

  // On crée un état, par défaut il est vrai
  const [affiche, setAffiche] = useState(true);

  // let content;
  // if (affiche) {
  //   content = <img src="./image.webp" alt="peut importe ou pas" />;
  // }

  // Gestion du clic
  function handleClick() {
    // setAffiche(false);

    console.log(affiche);

    setAffiche(!affiche);
  }

  return (
    <div className="ImageBascule">
      <h3>Compo ImageBascule</h3>
      <button onClick={handleClick}>Hey</button>

      {/* {content} */}

      {affiche && <img src="./image.webp" alt="peut importe ou pas" />}
    </div>
  );
}
