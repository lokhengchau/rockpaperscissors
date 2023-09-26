function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function getPlayerChoice(){
    do {
        const userInput = prompt("Rock, Paper, or Scissors?", "").toLowerCase();
        const choices = ['rock', 'paper', 'scissors'];

        if (choices.includes(userInput)) {
            return userInput;
        };
        alert("Invalid input.")
    } while (true); 
}

function playGame(playerSelection, computerSelection){
    if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'rock') {
        return 1
    } else if (playerSelection === computerSelection) {
        return 0
    } else {
        return -1
    }
}

function displayResult(result, playerSelection, computerSelection) {
    if (result === 1){
        playerSelection = playerSelection[0].toUpperCase() + playerSelection.substring(1,);
        return `You win! ${playerSelection} beats ${computerSelection}!`
    } else if (result === 0){
        return "It's a tie!"
    } else {
        computerSelection = computerSelection[0].toUpperCase() + computerSelection.substring(1,);
        return `Computer wins! ${computerSelection} beats ${playerSelection}!`;
    }
}

function game(reps = 5){
    for (let i = 0; i < reps; i++) {
        const player = getPlayerChoice();
        const computer = getComputerChoice();
        const result = playGame(player, computer);
        console.log(displayResult(result, player, computer)); 
    }
}

game()