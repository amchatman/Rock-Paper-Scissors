let player;
let computer;
const playerChoice = document.querySelectorAll(".playerChoice"); //Gets all class name playersChoice.
const playerText = document.getElementById("playerText");
const computerText = document.getElementById("computerText");
const resultText = document.getElementById("resultText");
const roundCount = document.getElementById("roundCount");

/*Randomize between Rock, Paper, Scissors for computer choice*/
const getComputerChoice = () =>{
    
    const computerOptions =['Rock','Paper','Scissors']; //An array that gives three choices of Rock,Paper, and Scissors
   
    const computerSelection = computerOptions[Math.floor(Math.random()*computerOptions.length)]; //Cycles through the array to get random computer choices

    return computerSelection;
     //console.log (computerSelection);
  };
/*Display player choice and computer choice */
playerChoice.forEach(button => button.addEventListener("click", () => { //When button click getComputerChoice is active.
    player = button.textContent; 
    computer = getComputerChoice();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = playround();

}));

/* plays a round base on the Rock Paper Scissor rules */
function playround(){
    if(player == computer){
        return "It's a Tie"
    }
    else if(computer == 'Rock'){
        return(player == 'Paper') ? "You Win" : "You Lose"
    }
    else if(computer == 'Paper'){
        return(player == 'Scissors') ? "You Win" : "You Lose"
    }
    else if(computer == 'Scissors'){
        return(player == 'Rock') ? "You Win" : "You Lose"
    }
}
function roundCounter(){
    for(i = 0; i <= 5; i++){
     let count=playround();
    roundCount.textContent = `Round: ${i}`;
    playround(count.computer, count.player);

    }
}
roundCounter();
/*If computer selects rock an player returns  +1 for player count else computer count
If computer select paper  and player returns +1 for playe coutr else +1 computer count
If computer select  scissors and player retrn +1 for player count else +1 computer count*/
