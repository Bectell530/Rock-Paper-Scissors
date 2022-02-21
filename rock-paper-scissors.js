let playerScore = 0;
let computerScore = 0;

//Updates the Outcome History.
const history = document.querySelector('.resultsContainer');
const buttons = document.querySelector('body');


//Play a Round.
function playRound(event) {
    let player = event.target.id;
    let computer = computerPlay();
    let outcome = determineWinner(player, computer);
    updateHistory(player, computer);

    if (outcome == 0) return;
    if (outcome == -2 ||outcome == 1) computerScore++;
    if (outcome == -1 || outcome == 2) playerScore++;     
}

//Computer Randomly Selects "Rock", "Paper", or "Scissors".
function computerPlay() {
    let computerSelection = ["Rock", "Paper", "Scissors"];
    return computerSelection[(Math.floor(Math.random() * 3))];
}

//Determine Who Wins Between the Player and Computer.
function determineWinner(player, computer) {
    let options = ["Rock", "Paper", "Scissors"];
    return options.indexOf(computer) - options.indexOf(player);
}

//Starts a New Game. Sets Both Players Scores to Zero.
function startNewGame(){
    playerScore = 0;
    computerScore = 0;
    updateScore();
    clearHistory();
}

//Updates Players Scores After Each Round.
function updateScore(){
    const pScore = document.querySelector('.playerScore');
    const cScore = document.querySelector('.computerScore');
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
}

//Check For 5 Wins. Start New Game If True.
function checkForWinner(){
    if(playerScore == 5){
        console.log('Player Wins!')
        startNewGame();
    }
    else if(computerScore == 5){
        console.log('Computer Wins!')
        startNewGame();
    }
    else return;
}

function updateHistory(player, computer){
    let newElement = document.createElement('p');
    newElement.textContent = `${player} vs ${computer}`;
    history.insertAdjacentElement('afterbegin', newElement);
}

function clearHistory(){
    while(history.firstChild){
        history.removeChild(history.firstChild);
    }
}

function test(e){
    if (e.target.id == 'newGame') startNewGame();
    if (e.target.id == 'Rock' || e.target.id == 'Paper' || e.target.id == 'Scissors'){
        playRound(e); 
        updateScore();
        checkForWinner();
    } 
}


buttons.addEventListener('click', test);
