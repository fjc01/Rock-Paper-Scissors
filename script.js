/*User's Choice*/

function caseSensitivityFix(input){
    return input.toLowerCase().charAt(0).toUpperCase() + input.toLowerCase().slice(1);
}

const userInput = prompt('Rock, Paper or Scissors?');

const transformedUserInput = caseSensitivityFix(userInput);

console.log(transformedUserInput)

/*Computer's Choice*/

function getComputerChoice(){
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomizer = Math.floor(Math.random() * choices.length);
    return choices[randomizer];
}

const computerChoice = getComputerChoice();

console.log(computerChoice);

/*Computer's Input has to come after the User's Input, otherwise players can cheat by using the console and console.log to see what the computer picked.*/

/*Plays A Game Round*/

function playRound(transformedUserInput, computerChoice){

    if (transformedUserInput === computerChoice){
        return "It's a tie! Both players used the same item.";
    }
    else if (transformedUserInput === 'Rock' && computerChoice === 'Scissors'){
        return "You win! Rock beats Scissors.";      
    }
    else if (transformedUserInput === 'Scissors' && computerChoice === 'Paper'){
        return "You win! Scissors beats Paper.";      
    }
    else if (transformedUserInput === 'Paper' && computerChoice === 'Rock'){
        return "You win! Paper beats Rock.";      
    }
    else if (transformedUserInput === 'Rock' && computerChoice === 'Paper'){
        return "You lose! Paper beats Rock.";      
    }
    else if (transformedUserInput === 'Scissors' && computerChoice === 'Rock'){
        return "You lose! Rock beats Scissors.";      
    }
    else if (transformedUserInput === 'Paper' && computerChoice === 'Scissors'){
        return "You lose! Scissors beats Paper.";      
    }
    else {
        return "You used an invalid item, try again.";
    }
}

console.log(playRound(transformedUserInput, computerChoice));
alert(playRound(transformedUserInput, computerChoice));

alert("I challenge you to MORTAL KOMBAT! (5 rounds)")

/*Plays The Game 5 Times*/

function playGame(){
    let userScore = 0;
    let computerScore = 0;

    for (let i = 1; i<=5; i++){

        console.log(`Round ${i}`);
        alert(`Round ${i}, FIGHT!`);

        const userInput = prompt('Rock, Paper or Scissors?');
        const transformedUserInput = caseSensitivityFix(userInput);
        console.log(transformedUserInput)

        const computerChoice = getComputerChoice();
        console.log(`Computer chose: ${computerChoice}`);

        const roundResult = playRound(transformedUserInput, computerChoice);
        console.log(roundResult);
        alert(roundResult);

        if (roundResult.includes('You win')){
            userScore++;
        }
        else if (roundResult.includes('You lose')){
            computerScore++;
        }
    }

    console.log(`Final Score:
        You: ${userScore}
        Computer: ${computerScore}`);

    alert(`Final Score:
    You: ${userScore}
    Computer: ${computerScore}`);

    if (userScore > computerScore) {
        console.log("You won the game!");
        alert("You won the game!");
    } else if (userScore < computerScore) {
        console.log("You lost the game!");
        alert("You lost the game!");
    } else {
        console.log("It's a tie!");
        alert("It's a tie!");
    }
}

playGame();

/*
NOTES:
Added alerts after most console.logs to make the game more quick to play
There's a "bug" where if you don't input anything or use invalid inputs you can tie every time.
I've decided to leave it for now as an easter egg because Odin Project doesn't adress this.
Maybe I'll fix it when I get to the GUI part of the project.
*/