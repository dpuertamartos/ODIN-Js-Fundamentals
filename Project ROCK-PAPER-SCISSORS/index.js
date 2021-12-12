console.log("GAME STARTS!!")

const computerSelector = ["rock","paper","scissor"]

let score = 0
let roundCount = 0

const results = document.querySelector("#RESULTS")
const scoreDiv = document.querySelector("#SCORE")
const gameEndDiv = document.querySelector("#GAMEEND")
const buttons = document.querySelectorAll(".playButton")


const calculateWin = number => {
    if (number>2.5){return "win" }
    else if (number === 2.5){return "draw"}
    else {return "lose"}
}

const computerPlay = () => {
    const randomIndex = Math.floor(Math.random() * computerSelector.length)
    return computerSelector[randomIndex].toLowerCase()
}

const playRound = (playerSelection, computerSelection) => {
    switch (playerSelection) {
        case "rock":
            switch (computerSelection) {
                case "rock":
                    return("Draw ROCK vs ROCK")
                case "paper":
                    return("Lose ROCK vs PAPER")   
                case "scissor":
                    return("Win ROCK vs SCISSOR")    
            }
        case "paper":
            switch (computerSelection) {
                case "rock":
                    return("Win PAPER vs ROCK")
                case "paper":
                    return("Draw PAPER vs PAPER")   
                case "scissor":
                    return("Lose PAPER vs SCISSOR")   
            }
        case "scissor":
            switch (computerSelection) {
                case "rock":
                    return("Lose SCISSOR vs ROCK")
                case "paper":
                    return("Win SCISSOR vs PAPER")   
                case "scissor":
                    return("Draw SCISSOR vs SCISSOR")  
            }       
    }
}

const playRoundListener = (humanPlay) => {
    const round = playRound(humanPlay, computerPlay())
    results.textContent = round
    if (round[0].toLowerCase() === "w"){score++}
    else if (round[0].toLowerCase() === "d"){score=score+0.5}
    roundCount++
    scoreDiv.textContent = `score ${score}/${roundCount}`
    if(roundCount >4){
        gameEndDiv.textContent = `Game finished, score ${score}/${roundCount}, you ${calculateWin(score)} the 5-round game. Click button again to keep playing `
        score = 0
        roundCount = 0
    }
    else{gameEndDiv.textContent = ""}
}

// button event listener recives human play from id of the button 

buttons.forEach(button=>button.addEventListener("click", ()=>playRoundListener(button.id.toLowerCase())))








