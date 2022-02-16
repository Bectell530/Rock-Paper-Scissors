
//Players Chooses: "Rock", "Paper", or "Scissors".
function playerPlay(){
    let options = ["ROCK", "PAPER", "SCISSORS"];
    let playerSelection = prompt("ROCK, PAPER, or SCISSORS?");

    // While playerSelection isn't in options[] or is null or undefinded, keep prompting the player for another choice.
    while (!options.includes(playerSelection.toUpperCase()) || playerSelection == null || playerSelection == undefined){
        console.log('Invalid Selection!');
        console.log('');
        playerSelection = prompt("Invalid! Select: ROCK, PAPER, or SCISSORS?").toUpperCase();
    }  
    return playerSelection.toUpperCase();
}


//Computer Randomly Selects "Rock", "Paper", or "Scissors".
function computerPlay() {
    let computerSelection = ["ROCK", "PAPER", "SCISSORS"];
    return computerSelection[(Math.floor(Math.random() * 3))];
}


//Determine Who Wins Between the Player and Computer.
//[ROCK = 0, PAPER = 1, SCISSORS = 2]
function playRound(playerSelection, computerSelection) {
    let options = ["ROCK", "PAPER", "SCISSORS"];
    return options.indexOf(computerSelection) - options.indexOf(playerSelection);
}


//Play 5 Rounds. Determine the Winner.
function game() {
    const ROUNDS = 5;
    let playerScore = 0;
    let computerScore = 0;

    while ((playerScore < ROUNDS) && (computerScore < ROUNDS)){
        let player = playerPlay();
        console.log('Player Selects: ' + player);
        let computer = computerPlay();
        console.log('Computer Selects: ' + computer);
        let outcome = playRound(player, computer);

        if (outcome == 0){
            console.log('You Both Tied!');
        }

        if (outcome == -2 ||outcome == 1){
            computerScore += 1;
            console.log('You Lose!');
        }

        if (outcome == -1 || outcome == 2){
            playerScore += 1;
            console.log('You Win!');
        } 
        console.log('Player: ' + playerScore + ' Computer: ' + computerScore);
        console.log('');
    }

    if (playerScore == ROUNDS) {
        console.log('Congratulations! You Win');
        return;
    }

    if (computerScore == ROUNDS) {
        console.log('Sorry! The Computer Wins');
        return;
    }
}

