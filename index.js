const board = document.getElementById("gameBoard");

let actualBoard = [[], [], []];

let currentTurn = "X";

function toggleTurn() {
  if (currentTurn === "X") {
    currentTurn = "O";
  } else {
    currentTurn = "X";
  }
}
let player1Score = document.getElementById("player1Score");
let player2Score = document.getElementById("player2Score");

let newPlayer1Score = 0;
let newPlayer2Score = 0;
function updateScore(winningPlayer) {
  if (winningPlayer === "X") {
    player1Score.innerText = ++newPlayer1Score;
  } else {
    player2Score.innerText = ++newPlayer2Score;
  }
}
function whoWon() {
  if (
    actualBoard[0][0] === actualBoard[0][1] &&
    actualBoard[0][0] === actualBoard[0][2] &&
    actualBoard[0][1] === actualBoard[0][2]
  ) {
    return actualBoard[0][0];
  }
  return undefined;
}
function newGame() {
  const tableBody = document.createElement("tbody");
  board.appendChild(tableBody);

  for (let i = 0; i < 3; i++) {
    const row = document.createElement("tr");
    tableBody.appendChild(row);

    for (let k = 0; k < 3; k++) {
      const cell = document.createElement("td");
      row.appendChild(cell);

      cell.addEventListener("click", function () {
        try {
          actualBoard[i][k] = currentTurn;
          console.log("this is the board", actualBoard);
          cell.innerText = currentTurn;
          let winningPlayer = whoWon();
          if (winningPlayer) {
            alert("Congratulations " + winningPlayer + " !!!");
            updateScore(winningPlayer);
          } else {
            toggleTurn();
          }
        } catch (error) {
          console.log(error);
        }
      });
    }
  }
  newGameButton.style.display = "none";
}

const newGameButton = document.getElementById("newGame");

newGameButton.addEventListener("click", newGame);

// function clearBoard() {}
// document.querySelectorAll("td")
