import { useState } from "react";

export default function ImageBascule({ urlImage }) {
  // Booléen vrai / faux
  // let affiche = false; // tests

  // On crée un état, par défaut il est vrai
  const [affiche, setAffiche] = useState(true);
  const [texteBouton, setTexteBouton] = useState("Cacher");

  // let content;
  // if (affiche) {
  //   content = <img src="./image.webp" alt="peut importe ou pas" />;
  // }

  // Gestion du clic
  function handleClick() {
    // setAffiche(false);

    console.log(affiche);

    setAffiche(!affiche);

    if (texteBouton === "Cacher") {
      setTexteBouton("Afficher");
    } else {
      setTexteBouton("Cacher");
    }
  }

  return (
    <div className="ImageBascule">
      <h3>Compo ImageBascule</h3>
      {/* <button onClick={handleClick}>{affiche ? "Cacher" : "Afficher"}</button> */}
      <button onClick={handleClick}>{texteBouton}</button>

      {/* {content} */}

      {affiche && (
        //   <img
        //   src="https://placehold.co/600x400/orange/white?text=Image1"
        //   alt="peut importe ou pas"
        // />
        <img src={urlImage} alt="peut importe ou pas" />
      )}
    </div>
  );
}
