export default function Eclaireur({ attributPourEnvoyerHandleClick }) {
  return (
    <div className="Eclaireur">
      <h3>Eclaireur</h3>
      <img src="./eclaireur.jpg" alt="eclaireur" />
      <button onClick={attributPourEnvoyerHandleClick}>
        <span role="img" aria-label="boom">
          💥
        </span>{" "}
        A terre !
      </button>
    </div>
  );
}
