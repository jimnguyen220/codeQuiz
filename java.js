// Global Assignments
var timeEl = document.querySelector("#timer");
var startButton = document.querySelector("#quiz-start");
var nextButton = document.querySelector("#next-button")
var questionBox = document.querySelector("#question-box");
var resultsBox = document.querySelector("#results-box");

var secondsLeft = 75;

var quizQuestions = [
    {
    question: "What does the alert() function do in Javascript?",
    answers: {
        a: "creates a popup on the page",
        b: "alerts a noise to the user",
        c: "calls the cops",
        d: "changes the colors on the page",
    },
    correctAnswer: "a"
    },
    {
        question: "What does URL stand for",
        answers: {
            a: "Unicorns Rhinos and Lions",
            b: "Understanding Red Letters",
            c: "Uniform Resource Locator",
            d: "Urbanization of Reformed Librarians",
        },
        correctAnswer: "c"
    },
    {
        question: "What is the maximum number of values you can get from a confirm statement in Javascript",
        answers: {
            a: "One",
            b: "Two",
            c: "Three",
            d: "Four",
        },
        correctAnswer: "b"
    },
    {
        question: "What color is the sky?1",
        answers: {
            a: "blue",
            b: "green",
            c: "red",
            d: "yellow",
        },
        correctAnswer: "a"
    },
    {
        question: "What color is the sky?2",
        answers: {
            a: "blue",
            b: "green",
            c: "red",
            d: "yellow",
        },
        correctAnswer: "a"
    },
    {
        question: "What color is the sky?3",
        answers: {
            a: "blue",
            b: "green",
            c: "red",
            d: "yellow",
        },
        correctAnswer: "a"
    },
    {
        question: "What color is the sky?4",
        answers: {
            a: "blue",
            b: "green",
            c: "red",
            d: "yellow",
        },
        correctAnswer: "a"
    },
    {
        question: "What color is the sky?5",
        answers: {
            a: "blue",
            b: "green",
            c: "red",
            d: "yellow",
        },
        correctAnswer: "a"
    },
    {
        question: "What color is the sky?6",
        answers: {
            a: "yellow",
            b: "green",
            c: "red",
            d: "blue",
        },
        correctAnswer: "d"
    },
    {
        question: "What color is the sky?7",
        answers: {
            a: "red",
            b: "green",
            c: "blue",
            d: "yellow",
        },
        correctAnswer: "c"
    },
];


// function codes
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


function startGame() {
    if (startButton.getElementsByClassName.display === "none") {
        startButton.getElementsByClassName.display = "block";
    }
    else {
        startButton.style.display = "none";
    };
    setTime();
    quizBox();
};

function quizBox() {

    for (i = 0; i <quizQuestions.length; i++) {
        var currentQuestion = quizQuestions[i];
        console.log(currentQuestion);
    };

};


// this section for interaction with index.html
startButton.addEventListener("click", startGame);

quizBox();