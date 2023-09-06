let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    switch(Math.floor(Math.random() * 3)) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
        default:
            break;
    }
}

function playRound(playerSelection, computerSelection) {

    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();

    if (playerChoice == computerChoice) {
        return "Tie";
    }
    else if (playerChoice == "rock" && computerChoice == "paper") {
        computerScore ++;
        return "You Lose! Paper beats Rock"
    }
    else if (playerChoice == "paper" && computerChoice == "rock") {
        playerScore ++;
        return "You Win! Paper beats Rock"
    }
    else if (playerChoice == "paper" && computerChoice == "scissors") {
        computerScore ++;
        return "You Lose! Scissors beats Paper";
    }
    else if (playerChoice == "scissors" && computerChoice == "paper") {
        playerScore ++;
        return "You Win! Scissors beats Paper";
    }
    else if (playerChoice == "scissors" && computerChoice == "rock") {
        computerScore ++;
        return "You Lose! Rock beats Scissors";
    }
    else if (playerChoice == "rock" && computerChoice == "scissors") {
        playerScore ++;
        return "You win! Rock beats scissors";
    }
}

function game() {
    playerScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++) {
        console.log(playRound(prompt("Rock, Paper or Scissors?"), getComputerChoice()));
    }
    if (playerScore > computerScore)
    {
        return "Game over... You won!";
    }
    else if (computerScore > playerScore)
    {
        return "Game over... You lose!";
    }
    else
    {
        return "Game over... Tie!";
    }
}

console.log(game());