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

  return (
    <>
      <div className="board-row">
        {/* On crée une fonction anonyme, qui appele handleClick avec un paramètre */}
        {/* de cette mani_re, handleClick n'est pas appelé lors de l'éxécution (à cause des parenthèses) */}
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
