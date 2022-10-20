let player;
let computer;
let playerScore = 0;
let computerScore = 0;
const playerChoice = document.querySelectorAll(".playerChoice"); //Gets all class name playersChoice.
const playerText = document.getElementById("playerText");
const computerText = document.getElementById("computerText");
const resultText = document.getElementById("resultText");
const computerScoreText = document.getElementById("computerScore");
const playerScoreText = document.getElementById("playerScore");


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
    computerScoreText.textContent=`Computer Score: ${computerScore}`;
    playerScoreText.textContent=`Player Score: ${playerScore}`;

}));

/* plays a round base on the Rock Paper Scissor rules */
function playround(){

    if((computer == 'Rock' && player == 'Paper')||
       (computer == 'Paper' && player == 'Scissors')||
       (computer == 'Scissors' && player == 'Rock')){
        
        playerScore+=1;

        if (playerScore == 5){
            disableButton();
            return "You Win! Refresh the page to play again."
        }
    return("You won this round");
    }
    else if(computer == player) {
        return "Draw";
    }else{
        computerScore+=1;
        if(computerScore == 5){
            disableButton();
            return "Game Over! You Lose. Refresh the page to play again."
        }
        return ("You lose this round");
    }
}
//Function that disable the button from being click
function disableButton(){
        document.getElementById("rockChoice").disabled = true;
        document.getElementById("paperChoice").disabled = true;
        document.getElementById("scissorChoice").disabled = true;
}
    