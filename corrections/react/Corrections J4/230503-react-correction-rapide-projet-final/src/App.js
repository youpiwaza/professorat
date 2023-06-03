import "./styles.css";
import { useState } from "react";

import Header from "./Header";
import Encart from "./Encart";
import Grille from "./Grille";
import Footer from "./Footer";

export default function App() {
  const [page, setPage] = useState("Accueil");
  // const [page, setPage] = useState("Une autre page");

  let pageAAfficher = "";

  if (page == "Accueil") {
    pageAAfficher = (
      <div className="Accueil">
        <Encart />
        <h3>Mes derniers articles yay fun</h3>
        <Grille />
      </div>
    );
  } else {
    pageAAfficher = <div>Une autre page</div>;
  }

  return (
    <div className="App">
      <Header />
      <div className="Page">{pageAAfficher}</div>
      <Footer />
    </div>
  );
}
