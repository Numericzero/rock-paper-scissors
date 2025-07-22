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

function getHumanChoice()
{
    let choice = prompt("Select rock, paper, or scissors:");

    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice)
{
    if(humanChoice=="rock" & computerChoice=="scissors")
    {
        console.log("You win! Rock beats Scissors.");
        humanScore++;
    }
    else if(humanChoice=="paper" & computerChoice=="rock")
    {
        console.log("You win! Paper beats Rock.");
        humanScore++;
    }
    else if(humanChoice=="scissors" & computerChoice=="paper")
    {
        console.log("You win! Scissors beats paper.");
        humanScore++;
    }
    else if(humanChoice=="rock" & computerChoice=="paper")
    {
        console.log("You lose! Paper beats Rock.");
        computerScore++;
    }
    else if(humanChoice=="scissors" & computerChoice=="rock")
    {
        console.log("You lose! Rock beats Scissors.");
        computerScore++;
    }
    else if(humanChoice=="paper" & computerChoice=="scissors")
    {
        console.log("You lose! Scissors beats paper.");
        computerScore++;
    }
    else
    {
        console.log("It's a tie!");
    }
}

function playGame()
{
    for(let i = 0; i < 5; i++)
    {
        let humanSelection = getHumanChoice().toLowerCase();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    console.log("\nYour score: " + humanScore);
    console.log("Computer score: " + computerScore);

    if(humanScore > computerScore)
        console.log("Winner: You")
    else if(humanScore < computerScore)
        console.log("Winner: Computer")
    else
        console.log("The game is tied.")
}

playGame()