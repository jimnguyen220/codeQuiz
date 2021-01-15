var yourScore = localStorage.getItem("score");
var highScoresEl = document.querySelector("#highscores");
var scoreTable = document.querySelector("#score-table");
var enterButton = document.querySelector("#button-addon2");
var clearButton = document.querySelector("#clear");
var initialsEl = document.querySelector("#three-letters");
var lastScore = document.querySelector("#last-score");
var initialsValue = localStorage.getItem("initials")


function showScore() {
    lastScore.append(yourScore);
}

function setInitials() {
    localStorage.setItem("initials", initialsEl);
}


showScore();



enterButton.addEventListener("click", setInitials);
// clearButton.addEventListener("click", )