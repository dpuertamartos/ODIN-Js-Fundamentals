console.log("GAME STARTS!!")

const computerSelector = ["rock","paper","scissor"]

const calculateWin = number => {
    if (number>2.5){return "win" }
    else if (number === 2.5){return "draw"}
    else {return "lose"}
}

const computerPlay = () => {
    const randomIndex = Math.floor(Math.random() * computerSelector.length)
    console.log("computer plays", computerSelector[randomIndex])
    return computerSelector[randomIndex].toLowerCase()
}

const playRound = (playerSelection, computerSelection) => {
    console.log("player plays", playerSelection)
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

const playGame = () => {
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
}


playGame()

