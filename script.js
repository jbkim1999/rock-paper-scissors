const button0 = document.querySelector("#button-0");
const button1 = document.querySelector("#button-1");
const button2 = document.querySelector("#button-2");
const buttonNew = document.querySelector("#button-new");
const scoreBoard = document.querySelector('#scoreBoard');
const result = document.querySelector('#result');

button0.addEventListener('click', () => playRound(0, computerPlay()));
button1.addEventListener('click', () => playRound(1, computerPlay()));
button2.addEventListener('click', () => playRound(2, computerPlay()));
buttonNew.addEventListener('click', () => Game.startOver());

function computerPlay() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  return getRandomInt(3); // 0 - rock; 1 - paper; 2 - scissors
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    scoreBoard.textContent = Game.currentScore();
    result.textContent = "It's a tie.";
  }
  else if (playerSelection === 0) {
    if (computerSelection === 1) {
      Game.computerWin();
      scoreBoard.textContent = Game.currentScore();
      result.textContent = "You lost this round... ";
      Game.checkWin();
    } else {
      Game.playerWin();
      scoreBoard.textContent = Game.currentScore();
      result.textContent = "Yon won this round!";
      Game.checkWin();
    }
  }
  else if (playerSelection === 1) {
    if (computerSelection === 2) {
      Game.computerWin();
      scoreBoard.textContent = Game.currentScore();
      result.textContent = "You lost this round... ";
      Game.checkWin();
    } else {
      Game.playerWin();
      scoreBoard.textContent = Game.currentScore();
      result.textContent = "Yon won this round!";
      Game.checkWin();
    }
  }
  else {
    if (computerSelection === 0) {
      Game.computerWin();
      scoreBoard.textContent = Game.currentScore();
      result.textContent = "You lost this round... ";
      Game.checkWin();
    } else {
      Game.playerWin();
      scoreBoard.textContent = Game.currentScore();
      result.textContent = "Yon won this round!";
      Game.checkWin();
    }
  }
}

// IIFE
const Game = (() => {
  let playerPoint = 0;
  let computerPoint = 0;
  result.textContent = "Welcome to the game!";

  const playerWin = () => playerPoint++;
  const computerWin = () => computerPoint++;

  const currentScore = () => {
    return `Current score: ${playerPoint} vs. ${computerPoint}`;
  }
  
  const checkWin = () => {
    if (playerPoint === 3) {
      result.textContent = "You won the game... should be obvious";
      reset();
    } else if (computerPoint === 3) {
      result.textContent = "How can you lose to a computer?";
      reset();
    }
  }

  const reset = () => {
    playerPoint = 0;
    computerPoint = 0;
  }

  const startOver = () => {
    reset();
    result.textContent = "Game refreshed.";
    scoreBoard.textContent = "";
  }

  return {
    currentScore,
    playerWin,
    computerWin,
    checkWin,
    reset,
    startOver
  }
})();