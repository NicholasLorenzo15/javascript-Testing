let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


const generateTarget = () =>{
  return Math.floor(Math.random()* 10);
} 

const compareGuesses = (humanGuess, computerGuess,secretTargetNumber) => {
  const humanDifferance = Math.abs(secretTargetNumber - humanGuess);
  const computerDifferance = Math.abs(secretTargetNumber - computerGuess);

  if(humanDifferance <= computerDifferance){
    return true;
  }else{
    console.log('Error!');
  }

}

const updateScore = winner =>{
  if(winner === 'human'){
    humanScore++;
  }else if(winner === 'computer'){
    computerScore++;
  }
}

const advanceRound = () =>{
  currentRoundNumber++;
}

console.log(generateTarget());