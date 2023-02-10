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
        actualBoard[i][k] = currentTurn;
        cell.innerText = currentTurn;
        let winningPlayer = whoWon();
        if (winningPlayer) {
          alert("Congratulations " + winningPlayer + " !!!");
          updateScore(winningPlayer);
        } else {
          toggleTurn();
        }
      });
    }
  }
  newGameButton.style.display = "none";
}

const newGameButton = document.getElementById("newGame");
newGameButton.addEventListener("click", newGame);

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", clearBoard);
function clearBoard() {
  let oldGameBoard = document.querySelectorAll("td");
  oldGameBoard.forEach((cell) => {
    cell.innerText = "";
  });
  actualBoard = [[], [], []];
  console.log(clearBoard);
}

const playerSelect = document.getElementById("numOfPlayers");
const player2card = document.getElementById("player2Title");
playerSelect.addEventListener("change", selectPlayer);
function selectPlayer(event) {
  if (event.target.value === "2") {
    player2card.style.display = "initial";
  } else {
    player2card.style.display = "none";
  }
}
