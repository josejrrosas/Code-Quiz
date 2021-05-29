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
var getchoicesEl = document.getElementById("choices");

function startQuiz() {
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
  for(var i = 0; i < currentQuestions.choices.length; i++){
    var choice = currentQuestion.choices[i];
    var newBtn = document.createElement("button");
    newBtn.textContent = choice;
    choicesEl.appendChild(newBtn);
    newBtn.onClick = choiceClick;
  }

}

function choiceClick(event){
  if(qIndex >=  questions.length){
    //endquiz()
    //showScores();
  }
  else{
      var currentQuestions = question[qIndex];
      var choiceClick = event.target.textContent;
      if(choiceClick===currentQuestions.answer.toLowerCase()){
        console.log("Right!");
      }
      else{
        console.log("wrong!");
        time -= 5;
      }
      qIndex++;
      showQuestion();
    }
};


startBtn.onclick = startQuiz;