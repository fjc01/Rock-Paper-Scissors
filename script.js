let userScore = 0;
let computerScore = 0;

/*Computer's Choice*/

function getComputerChoice(){
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomizer = Math.floor(Math.random() * choices.length);
    return choices[randomizer];
}

const computerChoice = getComputerChoice();

/*Plays A Game Round*/

function playRound(userInput, computerChoice) {
    if (userInput === computerChoice) {
        return "It's a tie! Both players used the same item.";
    } else if (userInput === 'Rock' && computerChoice === 'Scissors') {
        userScore++;
        return "You win! Rock beats Scissors.";
    } else if (userInput === 'Scissors' && computerChoice === 'Paper') {
        userScore++;
        return "You win! Scissors beats Paper.";
    } else if (userInput === 'Paper' && computerChoice === 'Rock') {
        userScore++;
        return "You win! Paper beats Rock.";
    } else if (userInput === 'Rock' && computerChoice === 'Paper') {
        computerScore++;
        return "You lose! Paper beats Rock.";
    } else if (userInput === 'Scissors' && computerChoice === 'Rock') {
        computerScore++;
        return "You lose! Rock beats Scissors.";
    } else if (userInput === 'Paper' && computerChoice === 'Scissors') {
        computerScore++;
        return "You lose! Scissors beats Paper.";
    } else {
        return "You used an invalid item, try again.";
    }
}

function updateScore() {
    document.getElementById('userScore').textContent = userScore;
    document.getElementById('computerScore').textContent = computerScore;

    if (userScore === 5 || computerScore === 5) {
        if (userScore === 5) {
            alert("You win! You reached 5 points first.");
        } else {
            alert("Computer wins! It reached 5 points first.");
        }

        userScore = 0;
        computerScore = 0;
        document.getElementById('results').innerHTML = '';
    }
}

function handleUserChoice(userInput){
    const computerChoice = getComputerChoice();
    const result = playRound(userInput, computerChoice);
    const resultElement = document.getElementById('results');
    const newResultDiv = document.createElement('div'); // Create a new <div> element
    newResultDiv.textContent = result; // Set the text content of the new <div> to the result
    resultElement.appendChild(newResultDiv); // Append the new <div> to the result <div>
    updateScore();
}

document.getElementById('Rock').addEventListener('click', function(){
    handleUserChoice('Rock');
});

document.getElementById('Paper').addEventListener('click', function(){
    handleUserChoice('Paper');
});

document.getElementById('Scissors').addEventListener('click', function(){
    handleUserChoice('Scissors');
});