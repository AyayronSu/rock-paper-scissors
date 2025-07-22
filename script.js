let humanScore = 0;
let computerScore = 0;

const resultsDiv = document.querySelector(".results");

// Create a scoreboard element once and reuse it
const scoreDisplay = document.createElement("div");
resultsDiv.appendChild(scoreDisplay);

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    let message = "";

    if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        message = `You won! ${humanChoice} beats ${computerChoice}`;
    } else if (humanChoice === computerChoice) {
        message = "It's a draw!";
    } else {
        computerScore++;
        message = `You lost! ${computerChoice} beats ${humanChoice}`;
    }

    const result = document.createElement("div");
    result.textContent = message;
    resultsDiv.appendChild(result);

    // Update scoreboard
    scoreDisplay.textContent = `Score: You - ${humanScore} | Computer - ${computerScore}`;

    // Check for game over
    if (humanScore === 5 || computerScore === 5) {
        const gameOver = document.createElement("div");
        gameOver.textContent = humanScore === 5 ? "Game over! You win!" : "Game over! Computer wins!";
        resultsDiv.appendChild(gameOver);
        disableButtons();
    }
}

function disableButtons() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

document.getElementById("rock").addEventListener("click", function () {
    const humanChoice = this.value;
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});

document.getElementById("paper").addEventListener("click", function () {
    const humanChoice = this.value;
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});

document.getElementById("scissors").addEventListener("click", function () {
    const humanChoice = this.value;
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});
