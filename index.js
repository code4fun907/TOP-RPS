function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win!, rock beats scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win!, paper beats rock";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win!, scissors beats paper";
  } else {
    return `You lose!, ${computerSelection} beats ${playerSelection}`;
  }
}

function playGame(rounds) {
  for (let i = 0; i < rounds; ++i) {
    const playerChoice = prompt("Rock, paper, scissors");
    console.log(playRound(playerChoice, getComputerChoice()));
  }
}
