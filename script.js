let humanScore = 0;
let computerScore = 0;
let rounds = 0;
let humanChoice;
let computerChoice;
let getComputerChoice = function(){
    let x = Math.floor(Math.random()*3);
    if(x == 0){
        return "rock";
    }
    else if(x == 1){
        return "paper";
    }
    else{
        return "scissor";
    }
}
let numberOfRounds;
const inputRounds = document.querySelector("#inpt");
const btn = document.querySelector("#submit");
const hs = document.querySelector("#humanS");
const cs = document.querySelector("#computerS");
btn.addEventListener("click",function(){
    numberOfRounds = parseInt(inputRounds.value);
    if(isNaN(numberOfRounds) || numberOfRounds<=0){
        alert("Enter a valid number in the number of rounds section!!")
    }
})

const text = document.querySelector("#present");
const final = document.querySelector("#final");

function playRound(humanChoice,computerChoice){
    if(numberOfRounds === undefined){
        alert("Enter number of rounds first!!");
        return;
    }
    if(humanChoice == computerChoice){
        text.textContent = `Its a draw!!, you both choose ${humanChoice}`;
    }
    else if(computerChoice == "rock"){
        if(humanChoice == "paper"){
            humanScore++;
            text.textContent = `You won!!, ${humanChoice} beats ${computerChoice}`;


        }
        else{
            computerScore++;
            text.textContent = `You lost!!, ${computerChoice} beats ${humanChoice}`;
        }
    }
    else if(computerChoice == "paper"){
        if(humanChoice == "scissor"){
            humanScore++;
            text.textContent = `You won!!, ${humanChoice} beats ${computerChoice}`;
        }
        else{
            computerScore++;
            text.textContent = `You lost!!, ${computerChoice} beats ${humanChoice}`;
        }
    }
    else{
        if(humanChoice === "rock"){
            humanScore++;
            text.textContent = `You won!!, ${humanChoice} beats ${computerChoice}`;
        }
        else{
            computerScore++;
            text.textContent = `You lost!!, ${computerChoice} beats ${humanChoice}`;
        }
    }
    
    hs.textContent = humanScore;
    cs.textContent = computerScore;
    rounds++;
}

const choice = document.querySelector("#choices");
choice.addEventListener("click",function(elem){
    if(numberOfRounds <= rounds){
        text.textContent = "You have completed all the rounds, click restart to play again!"
        return;
    }
    computerChoice = getComputerChoice();
    let choose = elem.target.closest("button").id;
    switch(choose){
        case "r":
            humanChoice = "rock";
            playRound(humanChoice,computerChoice);
            break;

        case "p":
            humanChoice = "paper";
            playRound(humanChoice,computerChoice);
            break;

        case "s":
            humanChoice = "scissor";
            playRound(humanChoice,computerChoice);
            break;
    }

    if(rounds == numberOfRounds){
        if(humanScore > computerScore){
            final.textContent = `You WON!!, you beat computer by (${humanScore}-${computerScore}) rounds`;
        }
        else if(humanScore == computerScore){
            final.textContent = `Its a TIE!!, you both won ${humanScore} amounts of rounds`;
        }
        else{
            final.textContent = `You LOST!!, your computer beat you by (${computerScore}-${humanScore}) rounds`;
        }

        inputRounds.value = "";
    }
})


const restart = document.querySelector("#restart");
restart.addEventListener("click",function(){
    humanScore = 0;
    computerScore = 0;
    hs.textContent = humanScore;
    cs.textContent = computerScore;
    rounds = 0;
    final.textContent = "";
    text.textContent = "";
    alert("You have restarted the game, enter the number of rounds again!")
})