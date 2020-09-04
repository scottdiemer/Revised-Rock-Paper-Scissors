// Set array with choices
const selectionOptions = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
const display = document.querySelector("#display");

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

  // The higher indexes beat lower indexes with the
  // exception of Rock beating Scissors
  // Check for Rock and Scissors first
  // otherwise check for greater index value
  // or tie
  if ((player === 0 && computer === 2) || (player === 2 && computer === 0)) {
    if (player === 0) {
      playerScore++;
      return `Computer Plays: ${computerSelection}
      Rock beats Scissors!
      You Win!`;
    } else {
      computerScore++;
      return `Computer Plays: ${computerSelection}
      Rock beats Scissors!
      You Lose!`;
    }
  } else if (player > computer) {
    return `Computer Plays ${computerSelection}
    ${playerSelection} beats ${computerSelection}!
    Player Wins!`;
  } else if (player === computer) {
    return `Both picked ${computerSelection}. Tie!`;
  } else {
    return `${computerSelection} beats ${playerSelection}! Computer Wins!`;
  }
}

// Event Listeners
const selectionButtons = document.querySelectorAll("button");
selectionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.id);
    display.textContent = playRound(
      selectionOptions[Number(button.id)],
      computerPlay()
    );
  });
});

function getRandomInt(maxNumber) {
  return Math.floor(Math.random() * Math.floor(maxNumber));
}

function capitalizeWord(word) {
  return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
}
