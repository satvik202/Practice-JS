const playerText= document.querySelector("#playerText");
const computerText= document.querySelector("#computerText");
const resultText= document.querySelector("#resultText");
let player,computer,result;
let choiceBtn= document.querySelectorAll(".choiceBtn")

choiceBtn.forEach(choice => choice.addEventListener("click", () => {
    player= choice.textContent;
    computer= getComputerChoice();
    playerText.textContent= `Player : ${player}`;
    computerText.textContent= `Computer : ${computer}`;
    result= checkWinner();
    resultText.textContent= `Result : ${result}`;
}))

function getComputerChoice(){
    let val = Math.floor(Math.random()*3) + 1;
    switch(val){
        case 1 :
            return "ROCK";
        case 2 :
            return "PAPER";
        case 3 :
            return "SCISSORS";
    }
}

function checkWinner(){
    if(player==computer){
        return "Draw!"
    }
    else if(player=="ROCK"){
        return computer=="SCISSORS" ? "You Win!" : "You Lose!"
    }
    else if(player=="PAPER"){
        return computer=="SCISSORS" ? "You Lose!" : "You Win!"
    }
    else{
        return computer=="ROCK" ? "You Lose!" : "You Win!"
    }
}