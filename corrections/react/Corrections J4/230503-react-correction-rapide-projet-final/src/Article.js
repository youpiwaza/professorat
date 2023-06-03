export default function Article({
  titreAttribut,
  texteAttribut,
  imageAttribut,
  dateAttribut,
  auteurAttribut
}) {
  // const monTexte = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab a  perspiciatis aliquid, ipsum maxime, modi";
  // const resume = monTexte.substr(0, 100);

  // Valeur par défaut
  texteAttribut = texteAttribut ? texteAttribut : "";
  // Résumé à 100 caractères max
  const resume = texteAttribut.substr(0, 100);

  return (
    <div className="Article">
      <img src={imageAttribut} alt="yay" />
      <h4>{titreAttribut}</h4>
      <div className="date">{dateAttribut}</div>
      <div className="auteur">{auteurAttribut}</div>
      <div className="content">{resume}</div>
      <button>Afficher plus</button>
    </div>
  );
}
