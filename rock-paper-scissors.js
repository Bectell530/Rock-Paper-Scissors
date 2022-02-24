let playerScore = 0;
let computerScore = 0;

//Groups:
const buttons = document.querySelector('.optionsContainer');
const playerHand = document.querySelector('.playerHand');
const computerHand = document.querySelector('.computerHand');
const outcome = document.querySelector('.outcomeContainer');

//Events:
buttons.addEventListener('click', buttonClicked);

//Plays a Single Round of Rock, Paper, Scissors.
function playRound(event){
    let player = event.target.id;
    let computer = computerPlay();
    displayHand(player, computer);
    let outcome = determineWinner(player, computer);
    
    if (outcome == 0){
        displayOutcome('You Tied!');
    }
    if (outcome == -2 ||outcome == 1){
        computerScore++;
        displayOutcome('Computer Won!');
    }
    if (outcome == -1 || outcome == 2){
        playerScore++; 
        displayOutcome('You Won!');    
    }
    updateScore();
    checkForWinner();
}

//Computer Randomly Selects "Rock", "Paper", or "Scissors".
function computerPlay(){
    let computerSelection = ["Rock", "Paper", "Scissors"];
    return computerSelection[(Math.floor(Math.random() * 3))];
}

//Determine Who Wins Between the Player and Computer.
//Return {0}=Tie, {-2,1}=Computer Win, {-1,2}=Player Win.
function determineWinner(player, computer){
    let options = ["Rock", "Paper", "Scissors"];
    return options.indexOf(computer) - options.indexOf(player);
}

//Updates Players Scores After Each Round.
function updateScore(){
    const pScore = document.querySelector('.playerScore');
    const cScore = document.querySelector('.computerScore');
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
}

//Starts a New Game. Sets Both Players Scores to Zero.
function startNewGame(){
    playerScore = 0;
    computerScore = 0;
    clearHand();
    updateScore();
    displayOutcome('Select a Hand to Play!')
}

//Check For 5 Wins. Start New Game If True.
function checkForWinner(){
    if(playerScore == 5){
        displayOutcome('Congrats! You Beat The Computer!');
        setTimeout(startNewGame, 3000);
    }
    else if(computerScore == 5){
        displayOutcome('The Computer Wins This Time!');
        setTimeout(startNewGame, 3000);
    } 
    else return;
}

//Gives Initial Instructions and Displays the Outcome of a Round.
function displayOutcome(text){
    if(outcome.firstChild) outcome.removeChild(outcome.firstChild);
    
    let para = document.createElement('p');
    let node = document.createTextNode(text);
    para.appendChild(node);
    outcome.appendChild(para);
}

//Displays the Hand for Each Player.
function displayHand(player, computer){
    clearHand();
    let playerImage = document.createElement('IMG');
    let computerImage = document.createElement('IMG');
    playerImage.src = 'img/' + player.toLowerCase() + '-white.png';
    computerImage.src = 'img/' + computer.toLowerCase() + '-white.png';
    playerHand.appendChild(playerImage);
    computerHand.appendChild(computerImage);
}

//Clears the Hand for Each Player.
function clearHand(){
    if(playerHand.firstChild && computerHand.firstChild){
        playerHand.removeChild(playerHand.firstChild);
        computerHand.removeChild(computerHand.firstChild);
    }
    else return;
}

//
function buttonClicked(e){
    if (e.target.id == 'Rock' || e.target.id == 'Paper' || e.target.id == 'Scissors'){
        if(playerScore >= 5 || computerScore >= 5) return;
        else playRound(e);    
    } 
    else return;
}