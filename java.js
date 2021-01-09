// write code for timer
var timeEl = document.querySelector("#timer");

var secondsLeft = 76;

function setTime () {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time remaining: " + secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            //insert function here to end of game
        }

    }, 1000);
}

//move this within function to start quiz
setTime();


// write code for quiz

