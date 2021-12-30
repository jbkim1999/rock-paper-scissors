function computerPlay() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  return getRandomInt(3); // 0 - rock; 1 - paper; 2 - scissors
}

function playerPlay() {
  const result = window.prompt("What are you going to play?");
  if (result.toLowerCase() === "rock") {
    return 0;
  } else if (result.toLowerCase() === "paper") {
    return 1;
  } else if (result.toLowerCase() === "scissors") {
    return 2;
  } else {
    console.log("Please enter a valid option!");
    return playerPlay();
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  }
  else if (playerSelection === 0) {
    if (computerSelection === 1) {
      return "You lost!";
    } else {
      return "You won!";
    }
  }
  else if (playerSelection === 1) {
    if (computerSelection === 2) {
      return "You lost!";
    } else {
      return "You won!";
    }
  }
  else {
    if (computerSelection === 0) {
      return "You lost!";
    } else {
      return "You won!";
    }
  }
}

function game() {
  const howMany = prompt("How many games do you wish to play?");
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < howMany; i++) {
    const playerInput = playerPlay();
    const computerInput = computerPlay();
    const result = playRound(playerInput, computerInput);
    console.log(`round ${i + 1}: ` + result);
    if (result === "You won!") {
      playerScore++;
    } else if (result === "You lost!") {
      computerScore++;
    }
  }
  if (playerScore > computerScore) {
    return "You defeated the computer!";
  } else if (playerScore < computerScore) {
    return "How can you lose to a computer?"; 
  } else {
    return "You guys tied."
  }
}



