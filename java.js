// Global Assignments
var timeEl = document.querySelector("#timer");
var startButton = document.querySelector("#quiz-start");
var nextButton = document.querySelector("#next-button")
var questionBox = document.querySelector("#question-box")

var secondsLeft = 75;

var questionOne = {
    question: "What color is the sky?",
    answers: {
        answersOne: "blue",
        answersTwo: "green",
        answersThree: "red",
        answersFour: "yellow",
    },
    correctAnswer: "blue"
};


console.log(questionOne.answers.answersOne);

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

function quizBox() {

};

// this section for interaction with index.html
startButton.addEventListener("click", startGame);

questionBox.textContent = questionOne.question