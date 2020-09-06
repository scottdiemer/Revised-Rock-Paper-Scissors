// Set array with choices
// const selectionOptions = ["Rock", "Paper", "Scissors"];
const selectionOptions = {
  ROCK: 0,
  PAPER: 1,
  SCISSORS: 2,
};

class scoreBoard {
  constructor() {
    this.winner = null;
    this.playerScore = 0;
    this.computerScore = 0;
  }

  players = { PLAYER: "player", COMPUTER: "computer" };

  set winner(player) {
    this.winner = player;
    if (player === players.PLAYER) {
      this.playerScore++;
    } else {
      this.computerScore++;
    }
  }

  get winner() {
    this.winner;
  }
}

class commentaryMessage {
  constructor(playerSelection, computerSelection) {
    this.playerSelection = playerSelection;
    this.computerSelection = computerSelection;
  }

  get message {
    
  }

  messages = {
    ROCK_BEATS_SCISSORS: "Rock Beats Scissors",
    PAPER_BEATS_ROCK: "Paper Beats Rock",
    SCISSORS_BEATS_PAPER: "Scissors Beats Paper",
    TIE: `Both Picked ${capitalizeWord(playerSelection)}`,
  };
}

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
      scoreBoard.winner = players.PLAYER;
      commentaryMessage(playerSelection, computerSelection)
      return `Computer Plays: ${computerSelection}
      Rock beats Scissors!
      You Win!`;
    } else {
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

function updateScore() {
  const playerScoreDisplay = document.querySelector("#player-score");
  const computerScoreDisplay = document.querySelector("#computer-score");
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
}

// Event Listeners
const selectionButtons = document.querySelectorAll("button");
selectionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // TODO: Change out display
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
