console.log("GAME STARTS!!")

const computerSelector = ["rock","paper","scissor"]

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

let score = 0
let roundCount = 0
const rockButton = document.querySelector("#ROCK")
const paperButton = document.querySelector("#PAPER")
const scissorsButton = document.querySelector("#SCISSORS")
const results = document.querySelector("#RESULTS")
const scoreDiv = document.querySelector("#SCORE")
const gameEndDiv = document.querySelector("#GAMEEND")

rockButton.addEventListener("click", () => {
    const round = playRound("rock", computerPlay())
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

})

paperButton.addEventListener("click", () => {
    const round = playRound("paper", computerPlay())
    results.textContent = round
    if (round[0].toLowerCase() === "w"){score++}
    else if (round[0].toLowerCase() === "d"){score=score+0.5}
    roundCount++
    scoreDiv.textContent = `score ${score}/${roundCount}`
    if(roundCount >4){
        gameEndDiv.textContent = `Game finished, score ${score}/${roundCount}, you ${calculateWin(score)} the 5-round game. Click button again to keep playing`
        score = 0
        roundCount = 0
    }
    else{gameEndDiv.textContent = ""}

})

scissorsButton.addEventListener("click", () => {
    const round = playRound("scissor", computerPlay())
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
})



/* const playGame = () => {
    let count = 0
    let drawCount = 0
    for (let i = 0; i < 5; i++){
        console.log("round", i+1, "starts")
        round = playRound(window.prompt("Introduce your selection").toLowerCase(), computerPlay())
        console.log(round)
        if (round[0].toLowerCase() === "w"){count++}
        else if (round[0].toLowerCase() === "d"){drawCount++}
    }
    const score = count + drawCount * 0.5
    console.log(`Your score is ${score}/5. You ${calculateWin(score)}`)
} */




