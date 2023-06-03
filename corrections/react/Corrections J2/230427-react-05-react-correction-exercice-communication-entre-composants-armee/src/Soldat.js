export default function Soldat({ attributPourEnvoyerAffiche }) {
  return (
    <div className="Soldat">
      <h3>Soldat</h3>

      {attributPourEnvoyerAffiche ? (
        <img src="./soldat.jpg" alt="soldat" />
      ) : (
        ""
      )}
    </div>
  );
}
