import { useState } from "react";

// Le composant Carré (une case)
// La valeur & le comportement au clic viennent de plus haut
function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

// Le composant "Tableau" ~la grille, qui contient les 9 Carrés
// L'ensemble des états des carrés sont stockés plus haut
// De même que LA PLUPART des comportements
function Board({ xIsNext, squares, onPlay }) {
  // On conserve le clic ici
  function handleClick(i) {
    // Avec la fin du jeu / le gagnant
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    // Ainsi que la mise à jour des cases

    // On copie l'état actuel (par exemple 4 cases remplies)
    const nextSquares = squares.slice();
    // On rajoute la nouvelle qu'on vient de remplir
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    // On renvoie au composant Jeu/Game afin qu'il l'ajoute à l'historique
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  // Et l'affichage du statut, ainsi que de la grille
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
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

// Le composant Jeu, qui va contenir la logique & l'historique d'une partie
export default function Game() {
  // On conserve l'historique
  // C'est un tableau qui contient chacun des tableaux correspondant
  //    à l'état du jeu actualisé après un coup
  const [history, setHistory] = useState([Array(9).fill(null)]);

  // On stocke le numéro du coup en cours (~on a déjà joué 3 fois)
  const [currentMove, setCurrentMove] = useState(0);

  // On détermine qui est le prochain joueur à jouer
  //    Plutôt que de faire basculer vrai/faux
  //    On utilise le reste de la division euclidienne
  //      (C'est la façon Matheuse de dire "Est-ce que c'est paire ?")
  //        Tour 1 > Impair > Joueur 1
  //        Tour 2 > Pair   > Joueur 2
  //        Tour 3 > Impair > Joueur 1
  //        Tour 4 > Pair   > Joueur 2
  //        etc.
  const xIsNext = currentMove % 2 === 0;
  // ^ Si on remplace par des valeurs
  //    Si on en est au tour 3 > currentMove vaut 3
  //                                2 x 1 + 1 ~= reste 1
  //                                          Ca n'est pas égal à 0 > false > impair

  // Qu'est-ce qui est affiché présentement ?
  //    On est obligé de stocker cette information
  //    Au cas ou le joueur utilise l'historique
  //      (~= c'est actuellement l'historique du coup n°3 qui est affiché)
  const currentSquares = history[currentMove];

  // Lorsque le joueur à joué
  //    ~"Les prochains carrés" = l'état dans lequel sera la grille après le coup
  function handlePlay(nextSquares) {
    // On met l'historique à jour
    //                  On crée un nouveau tableau
    //                    A partir d'une copie des éléments de l'ancien
    //                                    Allant du premier coup
    //                                        Jusqu'au coup affiché actuellement
    //                                        (C'est pour cela que cela supprime la suite de l'historique lorsqu'on joue a partir d'un coup précédent)
    //                                                         Auquel on rajoute le coup qui vient d'être joué
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];

    // On met à jour l'historique (en gardant le côté immuable)
    setHistory(nextHistory);

    // Vu que l'on vient de jouer, on est sur le dernier coup de l'historique
    //                                -1 car les tableaux commencent à 0
    //                                ~le 5eme élément est dans la case 4 ~= 5 - 1
    setCurrentMove(nextHistory.length - 1);
  }

  // Si on clique sur un bouton de l'historique
  function jumpTo(nextMove) {
    // On met a jour la grille avec ce mouvement
    setCurrentMove(nextMove);
  }

  // Pas mal de gras pour dire
  //            Pour chaque entrée dans l'historique...
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      // .. j'ajoute dans une liste ...
      <li key={move}>
        {/* ... le bouton qui correspond */}
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  // On affiche l'ensemble : A qui de jouer ou gagnant + grille + historique
  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    // Les 3 lignes
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Les 3 colonnes
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Les 2 diagonales
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    // Si c'est pas null, et que les 3 correspondent
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      // On renvoie le contenu de la case ; "X" ou "O", donc le gagnant
      return squares[a];
    }
  }
  // Si on a pas combinaison gagnante, on renvoie null (et le jeu poursuit)
  //    cf. Board() > handleClick() > calculateWinner()
  return null;
}
