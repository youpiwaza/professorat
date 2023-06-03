import Article from "./Article";

const donnees = [
  {
    id: 1,
    titre: "Consectetur",
    texte: "Le contenu 1",
    image: "./logo.jpg",
    date: "1 février 2023",
    auteur: "Wam"
  },
  {
    id: 2,
    titre: "Aliquid",
    texte:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab a perspiciatis aliquid, ipsum maxime, modi exer",
    image: "./logo.jpg",
    date: "5 mars 2023",
    auteur: "Wam aussi"
  },
  {
    id: 3,
    titre: "Exercitationem",
    texte: "Le contenu2",
    image: "./logo.jpg",
    date: "12 juillet 2023",
    auteur: "Wam toujours"
  }
];

const lesArticlesAAfficher = donnees.map((article) => (
  <Article
    key={article.id}
    titreAttribut={article.titre}
    texteAttribut={article.texte}
    imageAttribut={article.image}
    dateAttribut={article.date}
    auteurAttribut={article.auteur}
  />
));

export default function Grille() {
  return (
    <div className="Grille">
      {/* <Article
        titreAttribut="titreEN DUR"
        texteAttribut="texteEN DUR"
        imageAttribut="imageEN DUR"
        dateAttribut="dateEN DUR"
        auteurAttribut="auteurEN DUR"
      /> */}

      {lesArticlesAAfficher}
    </div>
  );
}
