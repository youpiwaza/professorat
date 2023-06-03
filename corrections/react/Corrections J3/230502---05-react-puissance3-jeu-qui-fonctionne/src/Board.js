import { useState } from "react";

import Square from "./Square";

export default function Board() {
  const [isTourDuJoueur1, setIsTourDuJoueur1] = useState(true);

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

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (isTourDuJoueur1 ? "X" : "O");
  }

  // ---

  // Renvoyer soit
  //  null > Aucun gagnant
  //  "X" ou "O" > L'un des deux a gagné
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        // Si la première case (de la ligne a tester) != null
        squares[a] &&
        // ET
        // SI la première case == a la deuxième
        squares[a] === squares[b] &&
        // ET
        // SI la première == 3eme
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  function handleClick(leNumeroDeLaCase) {
    // Avant de faire quoi que ce soit,
    // On vérifie si la case a déjà été jouée
    //      Valeur par défaut : null
    if (squares[leNumeroDeLaCase] != null) {
      // On ne fait rien
      // (On ressort directement de la fonction, sans aller plus loin)
      return;
    }

    // Avant de faire quoi que ce soit d'autre
    // On vérifie si quelqu'un a gagné
    //  Si il y a un gagnant
    if (calculateWinner(squares)) {
      // On ne fais plus rien (on ne gère les clics car le jeu est fini)
      // (On ressort directement de la fonction, sans aller plus loin)
      return;
    }

    // On crée une copie du tableau, indépendante de l'ancienne
    //    Afin de conserver le côté "immuable" ~= qui ne change pas
    const nextSquares = squares.slice();

    // On modifie la première case
    // nextSquares[leNumeroDeLaCase] = "X";

    // A qui de jouer ?
    if (isTourDuJoueur1) {
      nextSquares[leNumeroDeLaCase] = "X";
    }
    // Sinon (sous entendu tour du joueur 2)
    else {
      nextSquares[leNumeroDeLaCase] = "O";
    }

    // On met à jour l'ensemble des carrés avec ce nouveau tableau
    setSquares(nextSquares);

    setIsTourDuJoueur1(!isTourDuJoueur1);
  }

  return (
    <>
      <div className="status">{status}</div>
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
