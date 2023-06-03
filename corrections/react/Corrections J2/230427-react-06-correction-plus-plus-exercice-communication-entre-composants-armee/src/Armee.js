import { useState } from "react";

import Eclaireur from "./Eclaireur";
import General from "./General";
import Soldat from "./Soldat";

export default function Armee() {
  const [affiche, setAffiche] = useState(true);

  function handleClick() {
    // alert("You clicked me!");

    setAffiche(!affiche);
  }

  return (
    <div className="Armee">
      <h3>Composant Armée</h3>

      <General />

      <div class="pietaille">
        <Eclaireur
          attributPourEnvoyerHandleClick={handleClick}
          attributPourEnvoyerAffiche={affiche}
        />
        <Soldat attributPourEnvoyerAffiche={affiche} />
        <Soldat attributPourEnvoyerAffiche={affiche} />
        <Soldat attributPourEnvoyerAffiche={affiche} />
      </div>
    </div>
  );
}
