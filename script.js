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
    if(player == computer){
        return "It's a Tie" 
    }
    else if(computer == 'Rock' && player == 'Paper'){
        playerScore+=1;  //Plus one  when condition is made
        return("You Win this round");
    }
    else if(computer == 'Paper' && player == 'Scissors'){
        playerScore+=1;
        return("You Win this round");
    }
    else if(computer == 'Scissors' && player == 'Rock'){
        playerScore+=1;
        return("You Win this round");
    }else if(playerScore == 5){
        //Disable all buttons once player score hits 5
        document.getElementById("rockChoice").disabled = true;
        document.getElementById("paperChoice").disabled = true;
        document.getElementById("scissorChoice").disabled = true;
        
        return("Yay you won the game! Please refresh the page");
    }
    else{
        computerScore+=1;// plus one when computer condition is made
        if(computerScore === 5){ //when computerScore reach 5 
            //Disable all button once player score hits 5
            document.getElementById("rockChoice").disabled = true;
            document.getElementById("paperChoice").disabled = true;
            document.getElementById("scissorChoice").disabled = true;
            return("Sorry you lost the game! Please refresh the page");
        }
        return("You lost this round");
    }
}

