/*Randomly gets computer choice of Rock, Paper, and Scissor*/
const getComputerChoice = () =>{
    
    const computerOptions =['Rock','Paper','Scissors']; //An array that gives three choices of Rock,Paper, and Scissors

    const computerSelection = computerOptions[Math.floor(Math.random()*computerOptions.length)]; //Cycles through the array to get random computer choices

console.log (computerSelection);
  
};
getComputerChoice();

const playerSelection = "Rock";
