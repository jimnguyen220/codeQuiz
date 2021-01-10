// Global Assignments
var timeEl = document.querySelector("#timer");
var startButton = document.querySelector("#quiz-start");
var nextButton = document.querySelector("#next-button")
var questionBox = document.querySelector("#question-box")

var secondsLeft = 75;

var quizQuestions = {
    question: "What color is the sky?",
    answers: {
        a: "blue",
        b: "green",
        c: "red",
        d: "yellow",
    },
    correctAnswer: "a"
};

console.log(quizQuestions)

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
    quizBox();
};

function quizBox() {

};

// this section for interaction with index.html
startButton.addEventListener("click", startGame);

