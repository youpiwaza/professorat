const prenom = "Maxime";

// const fruits = ["pommes", "poires", "peches"];

/* hey je suis un commentaire */

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90
};

const cheminImage = "./bob-leponge.png";

console.log(user.name);

// Récupérer le bouton
const monBoutonHTML = document.getElementById("ceBoutonLa");
console.log(monBoutonHTML);

export default function MyButton() {
  return (
    <div>
      <button>Un bouton classique</button>
      <br />
      <br />

      {/* Un bouton avec une classe pour le style */}
      <button id="ceBoutonLa" className="MyButton">
        Je suis stylay
      </button>
      <br />
      <br />

      {/* Utilisation de variables */}
      <button className="MyButton">{prenom}</button>
      <br />
      <br />

      <button className="MyButton">{user.name}</button>
      <br />
      <br />

      {/* Interprétation du Javascript */}
      <button className="MyButton">{5 + 6}</button>
      <br />
      <br />

      {/* Utilisation d'une image */}
      <img
        alt="avatar"
        src="https://i.imgur.com/yXOvdOSs.jpg"
        style={
          // On utilise un objet ici
          {
            height: user.imageSize,
            width: user.imageSize
          }
        }
      ></img>

      {/* Utilisation d'une variable dans les attributs, attentino pas de guillemets doubles */}
      <img src={cheminImage} className="MyButtonImg" alt="avatar" />
    </div>
  );
}
