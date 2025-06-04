let humanScore = 0;
let computerScore = 0;
let currentround = 0;
function getComputerChoice(){
    let x = Math.floor(Math.random()*3+1);
    switch(x){
        case 1:
            return "rock";

        case 2:
            return "paper";

        case 3:
            return "scissor";
    }
}

let numberofrounds;
document.getElementById("s1").onclick = function(){
    numberofrounds = document.getElementById("rounds").value;
    numberofrounds = Number(numberofrounds);
    console.log(`The game of ${numberofrounds} starts now!!! choose your pick`);
}

let userchoice;
document.getElementById("s2").onclick = function(){
    if(currentround >= numberofrounds){
        console.log("Please restart the game");
        return;
    }
    userchoice = document.getElementById("choice").value;
    let computerchoice = getComputerChoice();

    playround(computerchoice,userchoice);
    currentround++;

    if(currentround < numberofrounds){
        console.log("round over, choose your next pick");
    }
    else{
        console.log("Rounds are over");
        if(humanScore > computerScore){
            console.log("You won, yipeeeee!!")
        }
        else if(humanScore < computerScore){
            console.log("You loose ;(")
        }
        else{
            console.log("Its a tie!!")
        }
    }
}

function getUserChoice(){
    return userchoice;
}

function playround(computerChoice, userChoice){
    if(computerChoice.toLowerCase() == "rock"){
        if(userChoice.toLowerCase() == "rock"){
            console.log(`Tie!! as you and computer choose exactly ${computerChoice.toLowerCase()}`)
        }
        else if(userChoice.toLowerCase() == "paper"){
            humanScore++;
            console.log(`you won ${userChoice.toLowerCase()} beats ${computerChoice.toLowerCase()}`)
        }
        else{
            computerScore++;
            console.log(`you lose!  ${computerChoice.toLowerCase()} beats ${userChoice.toLowerCase()}`)
        }
    }

    else if(computerChoice.toLowerCase() == "paper"){
        if(userChoice.toLowerCase() == "rock"){
            computerScore++;
            console.log(`you lose!  ${computerChoice.toLowerCase()} beats ${userChoice.toLowerCase()}`)
        }
        else if(userChoice.toLowerCase() == "paper"){
            console.log(`Tie!! as you and computer choose exactly ${computerChoice.toLowerCase()}`)
        }
        else{
            humanScore++;
            console.log(`you won ${userChoice.toLowerCase()} beats ${computerChoice.toLowerCase()}`)
        }
    }

    else{
        if(userChoice.toLowerCase() == "rock"){
            humanScore++;
            console.log(`you won ${userChoice.toLowerCase()} beats ${computerChoice.toLowerCase()}`)
        }
        else if(userChoice.toLowerCase() == "paper"){
            computerScore++;
            console.log(`you lose!  ${computerChoice.toLowerCase()} beats ${userChoice.toLowerCase()}`)
        }
        else{
            console.log(`Tie!! as you and computer choose exactly ${computerChoice.toLowerCase()}`)
        }
    }
}


document.getElementById("restart").onclick = function(){
    currentround = 0;
    humanScore = 0;
    computerScore = 0;
    numberofrounds = 0;
    console.log("Your game has been restarted, enter number of rounds to start the game");
}