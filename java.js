// Global Assignments
var timeEl = document.querySelector("#timer");
var startButtonEl = document.querySelector("#quiz-start");
var questionBoxEl = document.querySelector("#question-box")
var questionContent = document.querySelector("section");
var answerButton1 = document.querySelector("#button1");
var answerButton2 = document.querySelector("#button2");
var answerButton3 = document.querySelector("#button3");
var answerButton4 = document.querySelector("#button4");
var buttonEl = document.getElementsByClassName("questionBtn");


var secondsLeft = 45;
var currentQuestion = 0;





var quizQuestions = [
    {
        question: "What does the alert() function do in Javascript?",
        answer1: "creates a popup on the page",
        answer2: "alerts a noise to the user",
        answer3: "calls the cops",
        answer4: "changes the colors on the page",
        correctAnswer: 1,
    },
    {
        question: "What does URL stand for?",
        answer1: "Unicorns, Rhinos and Lions",
        answer2: "Uniform Resource Locator",
        answer3: "Urbanization of Reformed Librarians",
        answer4: "Umbrellas, Raindrops and Leprechauns",
        correctAnswer: 2,
    },
    {
        question: "What does an <h1> element do?",
        answer1: "Refreshes the page",
        answer2: "Highlights the item",
        answer3: "Indicates the main heading on a page",
        answer4: "Creates a link to another page",
        correctAnswer: 3,
    },
    {
        question: "What does CSS do for a webpage?",
        answer1: "CSS adds style and further customizes your page",
        answer2: "Resets the values on your page",
        answer3: "Creates a list",
        answer4: "Placeholder for information",
        correctAnswer: 1,
    },
    {
        question: "What does a <p> element do?",
        answer1: "adds color to a page",
        answer2: "The <p> element does nothing",
        answer3: "Indicates which page you are on",
        answer4: "Creates a new paragraph",
        correctAnswer: 4,
    },
];

console.log(quizQuestions);

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time remaining: " + secondsLeft;

        // if (secondsLeft === 0 || currentQuestion === quizQuestions.length) {
        //     endGame();
        // }

    }, 1000);
};


function startGame() {
    if (startButtonEl.getElementsByClassName.display === "none") {
        startButtonEl.getElementsByClassName.display = "block";
    }
    else {
        startButtonEl.style.display = "none";
    };
    setTime();
    quizGame();

};

function endGame() {
    alert("game is over");
}


function quizGame () {
    // console.log("This is the question I am on " + currentQuestion);
    var quizArray = quizQuestions[currentQuestion];
    questionContent.textContent = quizArray.question;
    answerButton1.textContent = quizArray.answer1;
    answerButton2.textContent = quizArray.answer2;
    answerButton3.textContent = quizArray.answer3;
    answerButton4.textContent = quizArray.answer4;

    pullData();
};


function pullData() {
    

    for (var i = 0; i < buttonEl.length; i++) {
        buttonEl[i].addEventListener('click', checkAnswer);
    };
        // console.log("this is currentQuestion before checkAnswer function " + currentQuestion);

    function checkAnswer() {
        var userChoice = this.getAttribute('data-set');
        userChoice = parseInt(userChoice);
        // console.log("this is userChoice " + userChoice);
        // console.log("this is  the correct answer " + quizQuestions[currentQuestion].correctAnswer);

        // console.log("this is currentQuestion before if/else " + currentQuestion);

        if (userChoice === quizQuestions[currentQuestion].correctAnswer){
            currentQuestion++;
        }
        else {
            secondsLeft = secondsLeft - 10;
            currentQuestion++;
        }
        console.log("this is currentQuestion after if/else " + currentQuestion);
        quizGame();
        


    };



};




startButtonEl.addEventListener("click", startGame);
