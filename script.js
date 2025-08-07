// console.log("Hello, World!");

function getComputerChoice()
{
    let choice = null;

    let rng = Math.floor(Math.random() * 1000) % 3;
    
    switch(rng)
    {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
    }

    return choice;
}

let gameResult = null;
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice)
{
    if(humanChoice=="rock" & computerChoice=="scissors")
    {
        gameResult = "You win! Rock beats Scissors.";
        humanScore++;
    }
    else if(humanChoice=="paper" & computerChoice=="rock")
    {
        gameResult = "You win! Paper beats Rock.";
        humanScore++;
    }
    else if(humanChoice=="scissors" & computerChoice=="paper")
    {
        gameResult = "You win! Scissors beats paper.";
        humanScore++;
    }
    else if(humanChoice=="rock" & computerChoice=="paper")
    {
        gameResult = "You lose! Paper beats Rock.";
        computerScore++;
    }
    else if(humanChoice=="paper" & computerChoice=="scissors")
    {
        gameResult = "You lose! Scissors beats paper.";
        computerScore++;
    }
    else if(humanChoice=="scissors" & computerChoice=="rock")
    {
        gameResult = "You lose! Rock beats Scissors.";
        computerScore++;
    }
    else
    {
        gameResult = "It's a tie!";
    }

    if(humanScore >= 5)
        gameResult = "Game Over! You win!";
    else if(computerScore >= 5)
        gameResult = "Game Over! Computer wins!";

    let scoreboardComment = document.querySelector("#comments");
    scoreboardComment.innerText = gameResult;

    let humanScoreCounter = document.querySelector("#human-score-counter");
    humanScoreCounter.innerText = "You: " + humanScore;

    let computerScoreCounter = document.querySelector("#computer-score-counter");
    computerScoreCounter.innerText = "Computer: " + computerScore;
}

let choices = document.querySelector("#human-choices");

choices.addEventListener("click", (e) => {
    let humanSelection = e.target.id;
    let computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
})