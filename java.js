// Global Assignments
var timeEl = document.querySelector("#timer");
var startButtonEl = document.querySelector("#quiz-start");
var questionBoxEl = document.querySelector("#question-box");
var resultsBoxEl = document.querySelector("#results-box");
var questionContent = document.createElement("section")
var answerButtonEl1 = document.createElement("button")
var answerButtonEl2 = document.createElement("button")
var answerButtonEl3 = document.createElement("button")
var answerButtonEl4 = document.createElement("button")


answerButtonEl1.setAttribute("class", "btn btn-primary questitonBtn");
answerButtonEl1.setAttribute("data-set", 1);
answerButtonEl2.setAttribute("class", "btn btn-primary questitonBtn");
answerButtonEl2.setAttribute("data-set", 2);
answerButtonEl3.setAttribute("class", "btn btn-primary questitonBtn");
answerButtonEl3.setAttribute("data-set", 3);
answerButtonEl4.setAttribute("class", "btn btn-primary questitonBtn");
answerButtonEl4.setAttribute("data-set", 4);

var secondsLeft = 75;
var index = 0;




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
        answer4: "United Regional Lutherans",
        correctAnswer: 2,
    },
];

console.log(quizQuestions);
// function codes
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time remaining: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            //insert function here to end of game
        }

    }, 1000);
};


function startGame() {
    if (startButtonEl.getElementsByClassName.display === "none") {
        startButtonEl.getElementsByClassName.display = "block";
    }
    else {
        startButtonEl.style.display = "none";
    };
    function clearText() {
        questionBoxEl.textContent = " ";
    };
    clearText();
    setTime();
    quizBox(0);
};

function quizBox() {


    var currentQuestion = quizQuestions[index];

    questionContent.textContent = currentQuestion.question;
    answerButtonEl1.textContent = currentQuestion.answer1
    answerButtonEl2.textContent = currentQuestion.answer2
    answerButtonEl3.textContent = currentQuestion.answer3
    answerButtonEl4.textContent = currentQuestion.answer4

    questionBoxEl.appendChild(questionContent);

    questionBoxEl.appendChild(answerButtonEl1);
    questionBoxEl.appendChild(answerButtonEl2);
    questionBoxEl.appendChild(answerButtonEl3);
    questionBoxEl.appendChild(answerButtonEl4);

    var buttonEl = document.getElementsByClassName("questitonBtn");

    for (var i = 0; i < buttonEl.length; i++) {

        buttonEl[i].addEventListener('click', function () {
            var userChoice = this.getAttribute('data-set');
         
            userChoice = parseInt(userChoice);
            index++;
            if (index === quizQuestions.length+1){
               alert("out of questions");
            } else {
                if (userChoice === currentQuestion.correctAnswer) {
                    alert('correct');
                    quizBox();
                }  else {
                    alert('incorrect');
                    secondsLeft = secondsLeft - 10;
                    quizBox();
                }
            }
            
            
        });
    }



};




// this section for interaction with index.html
startButtonEl.addEventListener("click", startGame);

