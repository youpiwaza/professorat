import "./styles.css";

import ImageBascule from "./ImageBascule";

export default function App() {
  const images = [
    { id: 1, urlImage: "https://placekitten.com/250/300" },
    { id: 2, urlImage: "https://placekitten.com/250/320" },
    { id: 3, urlImage: "https://placekitten.com/250/312" }
  ];

  const plusieursImagesAAfficher = images.map((image) => (
    <ImageBascule key={image.id} urlImage={image.urlImage} />
  ));

  return (
    <div className="App">
      <h1>Image à bascule</h1>
      <h2>Exo supplémentaire</h2>
      {/* <ImageBascule /> */}

      <div class="grille">{plusieursImagesAAfficher}</div>
    </div>
  );
}
