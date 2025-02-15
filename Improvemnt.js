// First of all, gather all returns into one place to be add to the list.
//  Count the number of times the button is pressed, then when it reaches 5, stop the game.
// Declare a winner after the end of the game then show a reset button to reload the page and start over again.


// Results Function
function results(playerCh, ComputerCh, player_score, computer_score,round= null, round_winner){
    return `Player's choice: ${playerCh} | Player's Score: ${player_score}  |
    Computer's choice: ${ComputerCh} | Computer's Score: ${computer_score}  |  Round: ${round} | Round's Winner: ${round_winner}`
}

// Computer turn
function GetRandomInt(){
    return Math.floor(Math.random() * 3)
}
function GetComputerChoice(){
    let computerChoice;
    let random_num = GetRandomInt()
    if (random_num == 0){
        computerChoice = 'Rock'  
    }
    else if (random_num == 1){
        computerChoice = 'Scissor'   
    }
    else{
        computerChoice = 'Paper'}
    return computerChoice
}     

// score counter
let player_score = 0;
let computer_score = 0;
function GetScore(player = false, bot = false) {
    if (player){ player_score++}
    else if(bot){ computer_score++}
    return player_score && computer_score
}

// Winner Decider
function gameWinner(player_score, computer_score){ // Error Here
    let winner = ''
    if (player_score === computer_score){
    winner = "It's a Tie!"
    }
    else if (player_score >= computer_score){
    winner = 'The player wins The Game'
    }
    else{
    winner = 'The Computer wins The Game'
    }
    return winner
}

// RoundCounter
let count = 0
function RoundCounter(count){
    return count
}

// // The Game Function
function gamePlay(playerChoice, computerChoice){
    playerChoice = playerChoice.toLowerCase()
    computerChoice = computerChoice.toLowerCase()
    if (playerChoice === computerChoice){
        GetScore()
        return "It's a tie!"
        }
    else if (playerChoice === 'paper' && computerChoice === 'rock' ||
        playerChoice === 'rock' && computerChoice === 'scissor' ||
        playerChoice === 'scissor' && computerChoice === 'paper'){
            GetScore(true)
            return 'The player wins the round'
    }
    else{
            GetScore(false, true)
            return 'The computer wins the round'
        }
}



const Buttons = document.querySelectorAll("button")
const scoreBoard = document.getElementById('scoreBoard')
const reset = document.createElement('button')
const Results = document.getElementById('results')

reset.append('End Game')
Results.append(reset)

reset.addEventListener('click', ()=>{
    scoreBoard.innerHTML = ''
    count = 0
    computer_score = 0
    player_score = 0
})

Buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        let computerChoice = GetComputerChoice()
        count++
    if (count <= 5){
        RoundCounter(count)
        let gamePlayResults = gamePlay(button.id, computerChoice)
        let roundResult = document.createElement('li')
        roundResult.append(results(button.id, computerChoice,
        player_score, computer_score, count, gamePlayResults))
        scoreBoard.append(roundResult)

        if (count === 5){
            let winner = document.createElement('h1')
            winner.innerText = gameWinner(player_score, computer_score)
            scoreBoard.append(winner)
        }
        }
})
})
