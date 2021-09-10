// Create variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const background = document.querySelector(".container")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
const rules = document.getElementById("rules")
const body = document.body
const scoreword1 = document.querySelector(".scoreone")
const scoreword2 = document.querySelector(".scoretwo")

function showResetButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
    rules.style.display = "none"
    body.classList.add("bodyfun")
    background.classList.add("fun")
}

/* Hook up a click event listener to the Roll Dice Button. */
 rollBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1

    if (player1Turn) {
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2!"
    } else {
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1!"
    }
    
    if (player1Score >= 20) {
        message.textContent = "Player 1 Wins 🥳"
        player1Scoreboard.classList.add("big")
        player1Dice.classList.add("big-dice", "active")   
        player2Dice.classList.remove("active")             
        scoreword1.classList.add("big")
        console.log(player1Dice)    
        showResetButton()
    }  else if (player2Score >= 20) {
        message.textContent = "Player 2 Wins 🎉"  
        player2Scoreboard.classList.add("big")    
        player2Dice.classList.add("big-dice", "active")            
        player1Dice.classList.remove("active")             
        scoreword2.classList.add("big")
        console.log(player2Dice)    
        showResetButton()
    }
    player1Turn = !player1Turn
})
 
resetBtn.addEventListener("click", function(){
    reset()
})

function reset() {
    player1Score = 0
    player2Score = 0
    player1Turn = true
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Scoreboard.classList.remove("big")        
    player2Scoreboard.classList.remove("big")            
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    message.textContent = "Player 1 - Roll Dice to Start!"
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    rules.style.display = "block"    
    player2Dice.classList.remove("big-dice", "active")
    player1Dice.classList.remove("big-dice")    
    player1Dice.classList.add("active")
    background.classList.remove("fun")
    scoreword1.classList.remove("big")
    scoreword2.classList.remove("big")
    body.classList.remove("bodyfun")           
}
