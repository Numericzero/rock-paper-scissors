// console.log("Hello, World!");

function getComputerChoice()
{
    let choice = null;

    let rng = (Math.random() * 1000) % 3;
    
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