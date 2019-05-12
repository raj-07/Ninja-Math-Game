var a;
var b;
var randomOperation;
//0 = addition, 1 = substraction , 2 = multiplication, 3 = division
var randomGrid;
var setTimer = 30;

var btnStart = document.querySelector("#startBtn");
var displayEquation = document.getElementById("displayEquation");
var squares = document.querySelectorAll(".squares");
var displayMessage = document.getElementById("displayMessage");
var score = document.getElementById("score");
var counter = 0;
var questionCounter = 0;
var qCounter = document.getElementById("qCounter");
var btnRestart = document.querySelector("#resetBtn");
var timer = document.getElementById("timer");

window.onload = function() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.pointerEvents = 'none';
    }
};


btnRestart.addEventListener("click", function() {
    window.location.reload(false);
})

btnStart.addEventListener("click", function() {
    
    startCountdown(setTimer);

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.pointerEvents = 'auto';
    }

    this.disabled = true;
    this.style.color = "rgb(191, 185, 196)";
    randNum();
    generateRandomOperation();
});

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = randomColour();
    squares[i].style.padding = "20px";
    squares[i].style.fontSize = "2rem";
    squares[i].style.color = "#fff";

    squares[i].addEventListener("click", function() {
        if (this.innerText === (a + b).toString()) {

            displayMessage.textContent = "Correct!";
            counter++;
            score.textContent = counter;
            console.log("Correct!" + randomGrid);
            randNum();
            generateRandomOperation();
        } else if (this.innerText === (a - b).toString()) {

            displayMessage.textContent = "Correct!";
            counter++;
            score.textContent = counter;
            console.log("Correct!" + randomGrid);
            randNum();
            generateRandomOperation();
        } else if (this.innerText === (a * b).toString()) {

            displayMessage.textContent = "Correct!";
            counter++;
            score.textContent = counter;
            console.log("Correct!" + randomGrid);
            randNum();
            generateRandomOperation();
        } else if (this.innerText == (Number.parseFloat(a / b).toFixed(1)).toString()) {

            displayMessage.textContent = "Correct!";
            counter++;
            score.textContent = counter;
            console.log("Correct!" + randomGrid);
            randNum();
            generateRandomOperation();
        } else {
            displayMessage.textContent = "Wrong!";
            console.log("Wrong!");
            counter--;
            score.textContent = counter;
            randNum();
            generateRandomOperation();
        }

        displayMessage.textContent === "Correct!" ? displayMessage.style.color = "green" : displayMessage.style.color = "red";

    })

}

function generateRandomOperation() {
    a = Math.floor(Math.random() * 11 + 2);
    b = Math.floor(Math.random() * 11 + 1);
    randomOperation = Math.floor(Math.random() * 4);
    questionCounter++;
    qCounter.textContent = questionCounter;
    console.log(questionCounter);
    if (randomOperation === 0) {
        displayEquation.textContent = a + " + " + b;
        squares[randomGrid].textContent = a + b;
    } else if (randomOperation === 1) {
        displayEquation.textContent = a + " - " + b;
        squares[randomGrid].textContent = a - b;
    } else if (randomOperation === 2) {
        displayEquation.textContent = a + " x " + b;
        squares[randomGrid].textContent = a * b;
    } else {
        displayEquation.textContent = a + " / " + b;
        squares[randomGrid].textContent = Number.parseFloat(a / b).toFixed(1);

    }

}

function randNum() {
    randomGrid = Math.floor(Math.random() * 6);

    squares[0].textContent = (randomGrid * 6) + 1;
    squares[1].textContent = (randomGrid * 5) + 2;
    squares[2].textContent = (randomGrid * 4) + 3;
    squares[3].textContent = (randomGrid * 3) + 1;
    squares[4].textContent = (randomGrid * 2) + 1;
    squares[5].textContent = (randomGrid * 0.5) + 1;
}

function randomColour() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";

}

function startCountdown(seconds){
  var tcounter = seconds;

  var interval = setInterval(() => {
    timer.textContent = tcounter;
    console.log(tcounter);
    tcounter--;
    

    if(tcounter < 0 ){
      
     for (var i = 0; i < squares.length; i++) {
        squares[i].style.pointerEvents = 'none';
    }
      
      clearInterval(interval);
      displayMessage.textContent = "Game Over";
      displayMessage.style.color = "Black";
        
        if(score.textContent <= 10){
            displayEquation.textContent = "You need practice.."
        } else if(score.textContent <= 21){
            displayEquation.textContent = "Not quite there yet.."
        }else if(score.textContent <= 27){
            displayEquation.textContent = "Nearly there!Dont give up"
        } else if(score.textContent >= 28){
            displayEquation.textContent = "You are a born Ninja!"
        }
        
        for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = 'grey';
    }
    };
  }, 1000);
};
