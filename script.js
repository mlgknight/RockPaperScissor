const playerChoice = document.getElementById("player-choice");
const CpuChoice = document.getElementById("CPU-choice");
const rockItem = document.getElementById("rock-item");
const scissorItem = document.getElementById("scissor-item");
const paperItem = document.getElementById("paper-item");
const winLose = document.getElementById("win-lose");
const playerScore = document.getElementById("score-player");
const cpuScore = document.getElementById("score-cpu");
const restartGame = document.getElementById("new-game")
let scorePlayer = 0;
let scoreCpu = 0;
let userChoiceValue;
let computerElement;
let gameActive = true;

function userChoice(callback) {
    const value1 = "✊"; // Rock
    const value2 = "✌️"; // Scissors
    const value3 = "🫱"; // Paper

    rockItem.addEventListener("click", function () {
        userChoiceValue = value1;
        callback(userChoiceValue);
        ComputerChoice();
        playerChoice.innerText = value1;
        determineResult(); // Determine the result after choices are made
    });

    scissorItem.addEventListener("click", function () {
        userChoiceValue = value2;
        callback(userChoiceValue);
        ComputerChoice();
        playerChoice.innerText = value2;
        determineResult(); // Determine the result after choices are made
    });

    paperItem.addEventListener("click", function () {
        userChoiceValue = value3;
        callback(userChoiceValue);
        ComputerChoice();
        playerChoice.innerText = value3;
        determineResult(); // Determine the result after choices are made
    });
}

function ComputerChoice() {
    const randomChoice = ["✊", "✌️", "🫱"];
    computerElement = randomChoice[Math.floor(Math.random() * randomChoice.length)];
    CpuChoice.innerText = computerElement;
}

function determineResult() {
    const tie = "It was a Tie";
    const win = "You won!";
    const lose = "You lost!";

    if (computerElement === userChoiceValue) {
        winLose.innerText = tie;
    } else if (
        (computerElement === "✊" && userChoiceValue === "✌️") ||
        (computerElement === "✌️" && userChoiceValue === "🫱") ||
        (computerElement === "🫱" && userChoiceValue === "✊")
    ) {
        winLose.innerHTML = `<h1 class="red">${lose}</h1>`;
        scoreCpu++
        cpuScore.innerText = scoreCpu
        
    } else {
        winLose.innerHTML = `<h1 class="green">${win}</h1>`;
        scorePlayer++
        playerScore.innerText = scorePlayer
    }
}

userChoice(function (choice) {
    console.log(choice);
});


function gameEnd(){
    restartGame.addEventListener("click", function ()  {
        gameActive = false;
        scorePlayer = 0;
        scoreCpu = 0;
        playerChoice.innerText = ''
        CpuChoice.innerText = ''
        winLose.innerText = "Choose One!"
        playerScore.innerText = scorePlayer
        cpuScore.innerText = scoreCpu
        console.log("button test")


    })

            
}

gameEnd()