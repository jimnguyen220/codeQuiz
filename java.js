// Global Assignments
var timeEl = document.querySelector("#timer");
var startButton = document.querySelector("#quiz-start");

var secondsLeft = 75;


function setTime () {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time remaining: " + secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            //insert function here to end of game
        }

    }, 1000);
};




// write code for quiz


function startGame() {
    startButton.disabled = true;
    setTime();
};

startButton.addEventListener("click", startGame);