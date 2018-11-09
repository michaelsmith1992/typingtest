const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
var scoreTime1 = document.querySelector("#scoreT1").innerHTML;
var scoreTime2 = document.querySelector("#scoreT2").innerHTML;
var scoreTime3 = document.querySelector("#scoreT3").innerHTML;
var scoreTime4 = document.querySelector("#scoreT4").innerHTML;
var scoreTime5 = document.querySelector("#scoreT5").innerHTML;
var scoreError1 = document.querySelector("#scoreE1").innerHTML;
var scoreError2 = document.querySelector("#scoreE2").innerHTML;
var scoreError3 = document.querySelector("#scoreE3").innerHTML;
var scoreError4 = document.querySelector("#scoreE4").innerHTML;
var scoreError5 = document.querySelector("#scoreE5").innerHTML;

var timer = [0,0,0,0];
var interval;
var timerRunning = false;
var errorCount = 0;
var lastScoreTime;
var lastScoreError;

// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}

// Run a standard minute/second/hundredths timer:
function runTimer () {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

// Match the text entered with the provided text on the page:
function spellCheck() {
    let textEnterd = testArea.value;
    let originTextMatch = originText.substring(0, textEnterd.length)
    
    if (textEnterd == originText) {
        lastScoreTime = document.querySelector("div.timer").innerHTML;
        lastScoreError = errorCount;
        console.log(lastScoreError + "   " + lastScoreTime + " " + scoreError1 + scoreTime1)
        scoreBoard();
        clearInterval(interval);
        testWrapper.style.borderColor = "#429890";
    }
    else{
        if(textEnterd == originTextMatch) {
            testWrapper.style.borderColor = "#65ccf3";
        } else {
            errorCount++;
            document.querySelector(".errors").innerHTML = errorCount;
            testWrapper.style.borderColor = "#E95D0F";

        }
    }
}

// Start the timer:
function start() {
    let textEnterdLength = testArea.value.length;
    if (textEnterdLength === 0 && !timerRunning) {
        timerRunning = true;
        interval = setInterval(runTimer, 10);
    }
    console.log(textEnterdLength);
}

// Reset everything:
function reset() {
    clearInterval(interval);
    interval = null;
    timer = [0,0,0,0];
    timerRunning = false;
    testArea.value = ""
    theTimer.innerHTML = "00:00:00"
    testWrapper.style.borderColor = "grey";
    document.querySelector(".errors").innerHTML = "0";
    errorCount = "0";
    console.log("reset button has been pressed")
}

// Score Board
function scoreBoard() {
    
    scoreTime1 = document.querySelector("#scoreT1").innerHTML;
    scoreTime2 = document.querySelector("#scoreT2").innerHTML;
    scoreTime3 = document.querySelector("#scoreT3").innerHTML;
    scoreTime4 = document.querySelector("#scoreT4").innerHTML;
    scoreTime5 = document.querySelector("#scoreT5").innerHTML;
    scoreError1 = document.querySelector("#scoreE1").innerHTML;
    scoreError2 = document.querySelector("#scoreE2").innerHTML;
    scoreError3 = document.querySelector("#scoreE3").innerHTML;
    scoreError4 = document.querySelector("#scoreE4").innerHTML;
    scoreError5 = document.querySelector("#scoreE5").innerHTML;
    let scoreErrorTemp5 = scoreError5;
    let scoreTimeTemp5 = scoreTime5;
    let scoreErrorTemp4 = scoreError4;
    let scoreTimeTemp4 = scoreTime4;
    let scoreErrorTemp3 = scoreError3;
    let scoreTimeTemp3 = scoreTime3;
    let scoreErrorTemp2 = scoreError2;
    let scoreTimeTemp2 = scoreTime2;
    let scoreErrorTemp1 = scoreError1;
    let scoreTimeTemp1 = scoreTime1;
    console.log(scoreTimeTemp1);

    if(lastScoreTime < scoreTime1 || scoreTimeTemp1 === "00:00:00") {
        console.log(scoreTimeTemp1);
        document.querySelector("#scoreT1").innerHTML = lastScoreTime;
        document.querySelector("#scoreT2").innerHTML = scoreTimeTemp1;
        document.querySelector("#scoreT3").innerHTML = scoreTimeTemp2;
        document.querySelector("#scoreT4").innerHTML = scoreTimeTemp3;
        document.querySelector("#scoreT5").innerHTML = scoreTimeTemp4;
        document.querySelector("#scoreE1").innerHTML = lastScoreError;
        document.querySelector("#scoreE2").innerHTML = scoreErrorTemp1;
        document.querySelector("#scoreE3").innerHTML = scoreErrorTemp2;
        document.querySelector("#scoreE4").innerHTML = scoreErrorTemp3;
        document.querySelector("#scoreE5").innerHTML = scoreErrorTemp4;
    }
    else if(lastScoreTime < scoreTime2 || scoreTimeTemp2 === "00:00:00") { 
        document.querySelector("#scoreT2").innerHTML = lastScoreTime;
        document.querySelector("#scoreT3").innerHTML = scoreTimeTemp2;
        document.querySelector("#scoreT4").innerHTML = scoreTimeTemp3;
        document.querySelector("#scoreT5").innerHTML = scoreTimeTemp4;
        document.querySelector("#scoreE2").innerHTML = lastScoreError;
        document.querySelector("#scoreE3").innerHTML = scoreErrorTemp2;
        document.querySelector("#scoreE4").innerHTML = scoreErrorTemp3;
        document.querySelector("#scoreE5").innerHTML = scoreErrorTemp4;  
    }
    else if(lastScoreTime < scoreTime3 || scoreTimeTemp3 === "00:00:00") {    
        document.querySelector("#scoreT3").innerHTML = lastScoreTime;
        document.querySelector("#scoreT4").innerHTML = scoreTimeTemp3;
        document.querySelector("#scoreT5").innerHTML = scoreTimeTemp4;       
        document.querySelector("#scoreE3").innerHTML = lastScoreError;
        document.querySelector("#scoreE4").innerHTML = scoreErrorTemp3;
        document.querySelector("#scoreE5").innerHTML = scoreErrorTemp4;
    }
    else if(lastScoreTime < scoreTime4 || scoreTimeTemp4 === "00:00:00") {
        document.querySelector("#scoreT4").innerHTML = lastScoreTime;
        document.querySelector("#scoreT5").innerHTML = scoreTimeTemp4;       
        document.querySelector("#scoreE4").innerHTML = lastScoreError;
        document.querySelector("#scoreE5").innerHTML = scoreErrorTemp4;
    }
    else if(lastScoreTime < scoreTime5 || scoreTimeTemp5 === "00:00:00") {
        document.querySelector("#scoreT5").innerHTML = lastScoreTime;
        document.querySelector("#scoreE5").innerHTML = lastScoreError;
    }

}







// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", start, false); 
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);