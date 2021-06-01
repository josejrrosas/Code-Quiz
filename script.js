// AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores 
// SO THAT I can gauge my progress compared to my peers
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

var time = questions.length * 10;
var timer;
var qIndex = 0;

var startBtn = document.getElementById("start-btn");
var timeEl = document.getElementById("time");
var questionEl = document.getElementById("question");
var choicesEl = document.getElementById("choices");
var resultEl = document.getElementById("result");
var initialsEl = document.getElementById("initials");
var initEl = document.getElementById("enterInit");

document.querySelector(".card").hidden = true;

function startQuiz() {
  document.querySelector("#start-btn").hidden = true;
  timer = setInterval(function () {
    time--;
    timeEl.textContent = time;
    if (time === 0) {
      endQuiz();
    }
  },
    1000);
  showQuestion();
};


function endQuiz() {
  clearInterval(timer);
}


function showQuestion() {
  var currentQuestion = questions[qIndex];
  questionEl.textContent = currentQuestion.title;
  choicesEl.innerHTML = "";
  var buttons = [];
  for (var i = 0; i < currentQuestion.choices.length; i++) {
    var choice = currentQuestion.choices[i];
    var newBtn = document.createElement("button");
    newBtn.textContent = choice;
    choicesEl.appendChild(newBtn);
    newBtn.onclick = choiceClick;
  }

}


function choiceClick(event) {
  if (qIndex >= questions.length || time == 0) {
    endQuiz();
    showScores();
    document.querySelector(".card").hidden = false;
  }
  else {
    var currentQuestions = questions[qIndex];
    var choiceClick = event.target.textContent;
    if (choiceClick === currentQuestions.answer) {
      resultEl.textContent = "Right!";
    }
    else {
      resultEl.textContent = "Wrong!";
      time -= 5;
    }
    qIndex++;
    showQuestion();
  }
};


//score is time left over so get time when get is over
//show title "all done!" 
// as a paragraph  "your final score is ____"
//enter initials with submit button sending initials and score to highscore 

function showScores() {
  var score = time;
  // var inpEl = document.createElement("input");
  // var submitBtnEl = document.createElement("button");

  // initialsEl.appendChild(inpEl);
  // initialsEl.appendChild(submitBtnEl);

  // submitBtnEl.setAttribute("type" , "submit");
  // inpEl.setAttribute("type" , "text");
  // inpEl.setAttribute("style" , "margin:5px");

  questionEl.textContent = "All done!";
  choicesEl.textContent = "Youre final score is " + score + ".";
  resultEl.textContent = "";
  // initEl.textContent = "Please enter your initials: ";
  // submitBtnEl.textContent = "Submit";

  localStore();

}

function localStore() {
  var initInput = document.querySelector("#initials-text");
  var initForm = document.querySelector("#initials-form");
  var highscoreList = document.querySelector("#highscore-list");

  var highscores = [];

  // The following function renders items in a highscore list as <li> elements
  function renderHighscores() {
    // Clear highscoreList element and update highscoreCountSpan
    highscoreList.innerHTML = "";

    // Render a new li for each highscore
    for (var i = 0; i < highscores.length; i++) {
      var highscore = highscores[i];

      var li = document.createElement("li");
      li.textContent = highscore;
      li.setAttribute("data-index", i);

      var button = document.createElement("button");
      button.textContent = "remove";

      li.appendChild(button);
      highscoreList.appendChild(li);
    }
  }

  // This function is being called below and will run when the page loads.
  function init() {
    // Get stored highscores from localStorage
    var storedHighscores = JSON.parse(localStorage.getItem("highscores"));

    // If highscores were retrieved from localStorage, update the highscores array to it
    if (storedHighscores !== null) {
      highscores = storedHighscores;
    }

    // This is a helper function that will render highscores to the DOM
    renderHighscores();
  }

  function storeHighscores() {
    // Stringify and set key in localStorage to highscores array
    localStorage.setItem("highscores", JSON.stringify(highscores));
  }

  // Add submit event to form
  initForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var initText = initInput.value.trim();

    // Return from function early if submitted highscoreText is blank
    if (initText === "") {
      return;
    }

    // Add new highscoreText to highscores array, clear the input
    highscores.push(initText);
    initInput.value = "";

    // Store updated highscores in localStorage, re-render the list
    storeHighscores();
    renderHighscores();
  });

  // Add click event to highscoreList element
  highscoreList.addEventListener("click", function (event) {
    var element = event.target;

    // Checks if element is a button
    if (element.matches("button") === true) {
      // Get its data-index value and remove the highscore element from the list
      var index = element.parentElement.getAttribute("data-index");
      highscores.splice(index, 1);

      // Store updated highscores in localStorage, re-render the list
      storeHighscores();
      renderHighscores();
    }
  });

  // Calls init to retrieve data and render it to the page on load
  init()
}

startBtn.onclick = startQuiz;