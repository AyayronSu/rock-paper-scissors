function getComputerChoice() {
    let computerChoice = Math.random();
    if (computerChoice <= 0.34) {
        return "rock";
    } else if (computerChoice <= 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors?").toLowerCase();
    while (!["rock", "paper", "scissors"].includes(choice)) {
        choice = prompt("Invalid choice. Please choose Rock, Paper, or Scissors.").toLowerCase();
    }
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! You both chose ${humanChoice}.`);
        return "tie";
    }

    const wins = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    if (wins[humanChoice] === computerChoice) {
        console.log(`You won! ${humanChoice} beats ${computerChoice}.`);
        return "human";
    } else {
        console.log(`You lost! ${computerChoice} beats ${humanChoice}.`);
        return "computer";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanPick = getHumanChoice();
        const computerPick = getComputerChoice();
        const result = playRound(humanPick, computerPick);

        if (result === "human") humanScore++;
        else if (result === "computer") computerScore++;
    }

    console.log(`Final Score — You: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("🎉 You won the game!");
    } else if (computerScore > humanScore) {
        console.log("😞 You lost the game.");
    } else {
        console.log("🤝 It's a tie game!");
    }
}

playGame();
