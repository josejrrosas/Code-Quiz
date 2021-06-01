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

function startQuiz() {
  document.querySelector("#start-btn").hidden = true;
  timer = setInterval( function() {
    time--;
    timeEl.textContent = time;
    if(time === 0){
      endQuiz();
    }
  }, 
      1000);
      showQuestion();
};


function endQuiz(){
  clearInterval(timer);
}


function showQuestion(){
  var currentQuestion = questions[qIndex];
  questionEl.textContent = currentQuestion.title;
  choicesEl.innerHTML = "";
  var buttons = [];
  for(var i = 0; i < currentQuestion.choices.length; i++){
    var choice = currentQuestion.choices[i];
    var newBtn = document.createElement("button");
    newBtn.textContent = choice;
    choicesEl.appendChild(newBtn);
    newBtn.onclick = choiceClick;
  }

}


function choiceClick(event){
  if(qIndex >=  questions.length || time == 0 ){
    endQuiz();
    showScores();
  }
  else{
      var currentQuestions = questions[qIndex];
      var choiceClick = event.target.textContent;
      if(choiceClick===currentQuestions.answer){
        resultEl.textContent = "Right!";
      }
      else{
        resultEl.textContent = "Wrong!";
        time -= 5;
      }
      qIndex++;
      showQuestion();
    }
};

function showScores(){
  //score is time left over so get time when get is over
  //show title "all done!" 
  // as a paragraph  "your final score is ____"
  //enter initials with submit button sending initials and score to highscore 
  var score = time;
  var inpEl = document.createElement("input");
  var submitBtnEl = document.createElement("button");

  initialsEl.appendChild(inpEl);
  initialsEl.appendChild(submitBtnEl);

  inpEl.setAttribute("type" , "text");
  inpEl.setAttribute("style" , "margin:5px");
  
  questionEl.textContent = "All done!";
  choicesEl.textContent = "Youre final score is " + score + ".";
  resultEl.textContent = "";
  initEl.textContent = "Please enter your initials: ";
  submitBtnEl.textContent = "Submit";
  
}

startBtn.onclick = startQuiz;