function computerPlay() {
    var optionsArray = ["Rock", "Paper", "Scissors"]

    let result = optionsArray[Math.floor(Math.random()*optionsArray.length)];

    return result;
}

function round(playerSelection, computerSelection) {
    playerSelection.toLowerCase();

    if (playerSelection === "rock" && computerSelection === "Rock")
    {
        console.log("Tie!");
        return 0;
    }

    else if (playerSelection === "rock" && computerSelection === "Paper") {
        console.log("You Lose! Paper beats Rock");
        return -1;

    }

    else if (playerSelection === "rock" && computerSelection === "Scissors") {
        console.log("You Win! Rock beats Scissors");
        return 1;
    }

    else if (playerSelection === "paper" && computerSelection === "Paper")
    {
        console.log("Tie!");
        return 0;

    }

    else if (playerSelection === "paper" && computerSelection === "Scissors") {
        console.log("You Lose! Scissors beats Paper");
        return -1;
    }

    else if (playerSelection === "paper" && computerSelection === "Rock") {
        console.log("You Win! Paper beats Rock");
        return 1;
    }

    else if (playerSelection === "scissors" && computerSelection === "Scissors")
    {
        console.log("Tie!");
        return 0;
    }

    else if (playerSelection === "scissors" && computerSelection === "Rock") {
        console.log("You Lose! Rock beats Scissors");
        return -1;
    }

    else if (playerSelection === "paper" && computerSelection === "Paper") {
        console.log("You Win! Scissors beats Paper");
        return 1;
    }

    else {
        return 0;
    }

}

function game() {
    times = 5;
    scoreTotal = 0;
    while (times > 0)
    {
        scoreTotal += round(playerSelection, computerPlay());
        times--;
    }

    if (scoreTotal >= 1) 
    {
        return "You win!";

    }
    else {
        return "You lose";
    }
}

message = "Please enter rock, paper, or scissors";
const playerSelection = window.prompt(message);
console.log(game());