const board = document.getElementById("gameBoard");

let actualBoard = [
  [undefined, undefined, undefined],
  [undefined, undefined, undefined],
  [undefined, undefined, undefined],
];

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
let cpuScore = document.getElementById("cpuScore");

let newPlayer1Score = 0;
let newPlayer2Score = 0;
let newCpuScore = 0;
function updateScore(winningPlayer) {
  if (winningPlayer === "X") {
    player1Score.innerText = ++newPlayer1Score;
  } else {
    player2Score.innerText = ++newPlayer2Score;
    cpuScore.innerText = ++newCpuScore;
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
  if (
    actualBoard[1][0] === actualBoard[1][1] &&
    actualBoard[1][0] === actualBoard[1][2] &&
    actualBoard[1][1] === actualBoard[1][2]
  ) {
    return actualBoard[1][0];
  }
  if (
    actualBoard[2][0] === actualBoard[2][1] &&
    actualBoard[2][0] === actualBoard[2][2] &&
    actualBoard[2][1] === actualBoard[2][2]
  ) {
    return actualBoard[2][0];
  }
  if (
    actualBoard[0][0] === actualBoard[1][0] &&
    actualBoard[0][0] === actualBoard[2][0] &&
    actualBoard[1][0] === actualBoard[2][0]
  ) {
    return actualBoard[0][0];
  }
  if (
    actualBoard[0][1] === actualBoard[1][1] &&
    actualBoard[0][1] === actualBoard[2][1] &&
    actualBoard[1][1] === actualBoard[2][1]
  ) {
    return actualBoard[0][1];
  }
  if (
    actualBoard[0][2] === actualBoard[1][2] &&
    actualBoard[0][2] === actualBoard[2][2] &&
    actualBoard[1][2] === actualBoard[2][2]
  ) {
    return actualBoard[0][2];
  }
  if (
    actualBoard[0][0] === actualBoard[1][1] &&
    actualBoard[0][0] === actualBoard[2][2] &&
    actualBoard[1][1] === actualBoard[2][2]
  ) {
    return actualBoard[0][0];
  }
  if (
    actualBoard[0][2] === actualBoard[1][1] &&
    actualBoard[0][2] === actualBoard[2][0] &&
    actualBoard[1][1] === actualBoard[2][0]
  ) {
    return actualBoard[0][2];
  }
  return undefined;
}

function playCPU() {
  for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 3; k++) {
      if (actualBoard[i][k] === undefined) {
        document.getElementById("cell" + i + "_" + k).innerText = "O";
        actualBoard[i][k] = "O";

        return;
      }
    }
  }
}
const playerSelect = document.getElementById("numOfPlayers");
const player2card = document.getElementById("player2Title");
const cpuPlayerCard = document.getElementById("cpuTitle");
playerSelect.addEventListener("change", selectPlayer);

function selectPlayer(event) {
  if (event.target.value === "2") {
    player2card.style.display = "initial";
    cpuPlayerCard.style.display = "none";
  } else {
    player2card.style.display = "none";
    cpuPlayerCard.style.display = "initial";
  }
}

function newGame() {
  const tableBody = document.createElement("tbody");
  board.appendChild(tableBody);

  for (let i = 0; i < 3; i++) {
    const row = document.createElement("tr");
    tableBody.appendChild(row);

    for (let k = 0; k < 3; k++) {
      const cell = document.createElement("td");
      cell.id = "cell" + i + "_" + k;
      row.appendChild(cell);

      cell.addEventListener("click", function () {
        if (playerSelect.value === "2" && cell.innerText === "") {
          actualBoard[i][k] = currentTurn;
          cell.innerText = currentTurn;
          let winningPlayer = whoWon();

          if (winningPlayer) {
            alert("Congratulations " + winningPlayer + " !!!");
            updateScore(winningPlayer);
          } else {
            toggleTurn();
          }
        }

        if (playerSelect.value === "1") {
          actualBoard[i][k] = currentTurn;
          cell.innerText = currentTurn;
          let winningPlayer = whoWon();

          if (winningPlayer) {
            alert("Congratulations " + winningPlayer + " !!!");
            updateScore(winningPlayer);
          } else {
            playCPU();
          }
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
}

const txt1 = document.getElementById("player1Name");
const txt2 = document.getElementById("player2Name");
const title1 = document.getElementById("player1CardName");
const title2 = document.getElementById("player2CardName");
const nameButton1 = document.getElementById("nameEnter1");
const nameButton2 = document.getElementById("nameEnter2");

function updateName1() {
  title1.innerHTML = txt1.value;
}

function updateName2() {
  title2.innerHTML = txt2.value;
}
nameButton1.addEventListener("click", updateName1);
nameButton2.addEventListener("click", updateName2);
