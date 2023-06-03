import { useState } from "react";

import Square from "./Square";

export default function Board() {
  // L'état est un tableau de 9 cases, qui nous permet de stocker les 9 états des 9 boutons
  const [squares, setSquares] = useState([
    null, // La valeur de la case 1
    null, // La valeur de la case 2
    null, // etc.
    null,
    null,
    null,
    null,
    null,
    null
  ]);
  // const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(leNumeroDeLaCase) {
    // On crée une copie du tableau, indépendante de l'ancienne
    //    Afin de conserver le côté "immuable" ~= qui ne change pas
    const nextSquares = squares.slice();

    // On modifie la première case
    nextSquares[leNumeroDeLaCase] = "X";

    // [
    //   "X", // La valeur de la case 1
    //   null, // La valeur de la case 2
    //   null, // etc.
    //   null,
    //   null,
    //   null,
    //   null,
    //   null,
    //   null
    // ]

    // On met à jour l'ensemble des carrés avec ce nouveau tableau
    setSquares(nextSquares);
  }

  function gererLeClicDuPremierCarre() {
    handleClick(0);
  }

  function gererLeClicDuDeuxiemeCarre() {
    handleClick(1);
  }

  function gererLeClicDuTroisiemeCarre() {
    handleClick(2);
  }

  // Explication des fonctions fléchées
  //      @see  http://es6-features.org/#ExpressionBodies
  // La fonction complète originale
  //    function ditBonjour(desParamètres) {
  //      console.log(desParamètres);
  //      return "bonjour" + desParamètres;
  //    }

  // Retiré le mot clé function
  //    bonjour(desParamètres) {
  //      console.log(desParamètres);
  //      return "bonjour" + desParamètres;
  //    }

  // Retiré le nom > (fonction anomyme)
  //    (desParamètres) {
  //      console.log(desParamètres);
  //      return "bonjour" + desParamètres;
  //    }

  // Il ont viré le return
  //    (desParamètres) => "bonjour" + desParamètres;
  //    (desParamètres) => { console.log(desParamètres); "bonjour" + desParamètres};

  return (
    <>
      <div className="board-row">
        {/* On crée une fonction anonyme, qui appele handleClick avec un paramètre */}
        {/* de cette mani_re, handleClick n'est pas appelé lors de l'éxécution (à cause des parenthèses) */}
        <Square value={squares[0]} onSquareClick={gererLeClicDuPremierCarre} />
        <Square value={squares[1]} onSquareClick={gererLeClicDuDeuxiemeCarre} />
        <Square
          value={squares[2]}
          onSquareClick={gererLeClicDuTroisiemeCarre}
        />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={handleClick} />
        <Square value={squares[4]} onSquareClick={handleClick} />
        <Square value={squares[5]} onSquareClick={handleClick} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={handleClick} />
        <Square value={squares[7]} onSquareClick={handleClick} />
        <Square value={squares[8]} onSquareClick={handleClick} />
      </div>
    </>
  );
}
