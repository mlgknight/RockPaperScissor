let playerChoice = document.getElementById("player-choice");
let CpuChoice = document.getElementById("CPU-choice");
let rockItem = document.getElementById("rock-item");
let scissorItem = document.getElementById("scissor-item");
let paperItem = document.getElementById("paper-item");
let winLose = document.getElementById("win-lose");
let userChoiceValue;
let computerElement;

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
        winLose.innerHTML = `<h1 class="green">${win}</h1>`;
    } else {
        winLose.innerHTML = `<h1 class="red">${lose}</h1>`;
    }
}

userChoice(function (choice) {
    console.log(choice);
});