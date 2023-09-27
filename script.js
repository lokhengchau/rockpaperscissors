const rockImgSrc = "./images/rock.png"
const paperImgSrc = "./images/paper.png"
const scissorsImgSrc = "./images/scissors.png"

const rockButton = document.querySelector('button#rock');
const paperButton = document.querySelector('button#paper');
const scissorsButton = document.querySelector('button#scissors');
const goButton = document.querySelector('button#go');

const playerSelectImage = document.querySelector("#player-select");
const computerSelectImage = document.querySelector("#computer-select");

const resultMessage = document.querySelector('.message')

const computerScore = document.querySelector('#computer-score');
const playerScore = document.querySelector('#player-score');

rockButton.addEventListener('click', function(){
    computerSelectImage.removeAttribute('src');
    changePlayerChoiceImage('rock');
    resultMessage.textContent = "Choose carefully, then click GO!";
    goButton.disabled = false;
})

paperButton.addEventListener('click', function(){
    computerSelectImage.removeAttribute('src');
    changePlayerChoiceImage('paper');
    resultMessage.textContent = "Choose carefully, then click GO!";
    goButton.disabled = false;
})

scissorsButton.addEventListener('click', function(){
    computerSelectImage.removeAttribute('src');
    changePlayerChoiceImage('scissors');
    resultMessage.textContent = "Choose carefully, then click GO!";
    goButton.disabled = false;
})

goButton.addEventListener('click', function(){
    goButton.disabled = true;
    
    const computerChoice = getComputerChoice();
    changeComputerChoiceImage(computerChoice);

    const playerChoice = playerSelectImage.dataset.selected;

    const result = playGame(playerChoice, computerChoice);
    const message = gameResultMessage(result, playerChoice, computerChoice);
    resultMessage.textContent = message;
    updateScore(result);
    }
)

function changePlayerChoiceImage(playerChoice) {
    switch(playerChoice) {
        case "rock":
            playerSelectImage.dataset.selected = 'rock';
            playerSelectImage.src = rockImgSrc;
            break;
        case "paper":
            playerSelectImage.dataset.selected = 'paper';
            playerSelectImage.src = paperImgSrc;
            break;
        case "scissors":
            playerSelectImage.dataset.selected = 'scissors';
            playerSelectImage.src = scissorsImgSrc;
            break;
    }
}

function changeComputerChoiceImage(computerChoice) {
    switch(computerChoice) {
        case "rock":
            computerSelectImage.dataset.selected = 'rock';
            computerSelectImage.src = rockImgSrc;
            break;
        case "paper":
            computerSelectImage.dataset.selected = 'paper';
            computerSelectImage.src = paperImgSrc;
            break;
        case "scissors":
            computerSelectImage.dataset.selected = 'scissors';
            computerSelectImage.src = scissorsImgSrc;
            break;
    }
}

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
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

function gameResultMessage(result, playerSelection, computerSelection) {
    if (result === 1){
        const beat = playerSelection === 'scissors' ? 'beat' : 'beats';
        playerSelection = playerSelection[0].toUpperCase() + playerSelection.substring(1,);
        return `You win! ${playerSelection} ${beat} ${computerSelection}!`
    } else if (result === 0){
        return "It's a tie!"
    } else {
        const beat = computerSelection === 'scissors' ? 'beat' : 'beats';
        computerSelection = computerSelection[0].toUpperCase() + computerSelection.substring(1,);
        return `Computer wins! ${computerSelection} ${beat} ${playerSelection}!`;
    }
}

function updateScore(result){
    if (result === 1){
        playerScore.textContent = Number.parseInt(playerScore.textContent) + 1;
    } else if (result === -1){
        computerScore.textContent = Number.parseInt(computerScore.textContent) + 1;
    }
}