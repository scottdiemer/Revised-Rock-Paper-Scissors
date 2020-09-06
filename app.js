let playerScore = 0;
let computerScore = 0;
// Set array with choices
const selectionOptions = ["Rock", "Paper", "Scissors"];

const players = { PLAYER: "player", COMPUTER: "computer" };

// Randomly return either Rock, Paper, or Scissors
function computerPlay() {
  // Pick random number
  const computerPick = getRandomInt(selectionOptions.length);
  // return corresponding selection option
  return selectionOptions[computerPick];
}

// Play single round of Rock, Paper, Scissors
// and return a string that declares the winner
// example: "You Lose! Paper beats Rock"
function playRound(playerSelection, computerSelection) {
  // Get indexs of selection to use for computation
  const player = selectionOptions.indexOf(playerSelection);
  const computer = selectionOptions.indexOf(computerSelection);

  postComputerPick(computerSelection);

  // The higher indexes beat lower indexes with the
  // exception of Rock beating Scissors
  // Check for Rock and Scissors first
  // otherwise check for greater index value
  // or tie
  if ((player === 0 && computer === 2) || (player === 2 && computer === 0)) {
    if (player === 0) {
      updateScore(players.PLAYER);
      postRoundWinner(players.PLAYER);
    } else {
      updateScore(players.COMPUTER);
      postRoundWinner(players.COMPUTER);
    }
    return "Rock beats Scissors!";
  } else if (player > computer) {
    updateScore(players.PLAYER);
    postRoundWinner(players.PLAYER);
    return `${playerSelection} beats ${computerSelection}!`;
  } else if (player === computer) {
    // If TIE don't update score
    return `Both picked ${computerSelection}. Tie!`;
  } else {
    updateScore(players.COMPUTER);
    postRoundWinner(players.COMPUTER);
    return `${computerSelection} beats ${playerSelection}!`;
  }
}

function updateScore(winner) {
  console.log("updateScore");
  if (winner === players.PLAYER) {
    playerScore++;
    const playerScoreDisplay = document.querySelector("#player-score");
    playerScoreDisplay.textContent = playerScore;
  } else if (winner === players.COMPUTER) {
    computerScore++;
    const computerScoreDisplay = document.querySelector("#computer-score");
    computerScoreDisplay.textContent = computerScore;
  }
}

function postComputerPick(pick) {
  const computerPick = document.querySelector("#computer-pick");
  computerPick.textContent = `Computer: ${pick}`;
}

function postCommentary(message) {
  console.log("postCommentary");
  const commentary = document.querySelector(".commentary");
  commentary.textContent = message;
}

function postRoundWinner(winner) {
  const roundWinner = document.querySelector(".round-winner");
  if (winner === players.PLAYER) {
    roundWinner.textContent = "You Win!";
  } else if (winner === players.COMPUTER) {
    roundWinner.textContent = "You Lose!";
  } else {
    roundWinner.textContent = "";
  }
}

function checkWinner() {
  if (playerScore >= 5) {
    return players.PLAYER;
  } else if (computerScore >= 5) {
    return players.COMPUTER;
  } else {
    return null;
  }
}

function postWinner(winner) {
  const gameWinner = document.querySelector("#game-winner");
  if (winner === players.PLAYER) {
    gameWinner.textContent = "You Win!";
  } else {
    gameWinner.textContent = "You Lose!";
  }
}

// Event Listeners
const selectionButtons = document.querySelectorAll("button");
selectionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    postCommentary(
      playRound(selectionOptions[Number(button.id)], computerPlay())
    );
    if (checkWinner() !== null) {
      postWinner(checkWinner);
    }
  });
});

function getRandomInt(maxNumber) {
  return Math.floor(Math.random() * Math.floor(maxNumber));
}

function capitalizeWord(word) {
  return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
}
