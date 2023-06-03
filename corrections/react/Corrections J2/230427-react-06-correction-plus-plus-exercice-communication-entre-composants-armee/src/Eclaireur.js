export default function Eclaireur({
  attributPourEnvoyerHandleClick,
  attributPourEnvoyerAffiche
}) {
  let texteBoutton;

  if (attributPourEnvoyerAffiche) {
    texteBoutton = (
      <span>
        <span role="img" aria-label="boom">
          💥
        </span>{" "}
        A terre !
      </span>
    );
  } else {
    texteBoutton = (
      <span>
        <span role="img" aria-label="boom">
          👌
        </span>{" "}
        C'est good sortez !
      </span>
    );
  }

  return (
    <div className="Eclaireur">
      <h3>Eclaireur</h3>
      <img src="./eclaireur.jpg" alt="eclaireur" />
      <button onClick={attributPourEnvoyerHandleClick}>{texteBoutton}</button>
    </div>
  );
}
