var yourScore = localStorage.getItem("score");
var highScoresEl = document.querySelector("#highscores");
var scoreTable = document.querySelector("#score-table");
var enterButton = document.querySelector("#button-addon2");
var clearButton = document.querySelector("#clear");
var initialsEl = document.querySelector("#three-letters");
var initialsValue = localStorage.getItem("initials")



function setInitials() {
    localStorage.setItem("initials", initialsEl);
}






enterButton.addEventListener("click", setInitials);
// clearButton.addEventListener("click", )