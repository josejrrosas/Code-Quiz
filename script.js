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

var startbutton = document.querySelector("#start");

startbutton.addEventListener("click", function() {
    timeStart();
    questions();
  });


function timeStart(){
  var counter = 5;
  setInterval(function() {
    counter--;
    if (counter >= 0) {
      p = document.getElementById("timer");
      p.innerHTML = counter;
    }
    if (counter === 0) {
        p.innerHTML = "sorry out of time";
        clearInterval(counter);
    }
  }, 1000);
}

var quizbox=
  [
    {
      question: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: 3
    },
    
    {
      question: "The condition in an if/else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
      answer: 2
    },
    
    {
      question: "Arrays in javascript can be used to store ______.",
      choices: ["numbers and strings", "other arrays", "booleans", "All of the above"],
      answer: 4
    },
    
    {
      question: "String values must be enclosed within _____ when being assigned to variables",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: 3
    },
    
    {
      question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
      choices: ["Javascript", "Terminal/bash", "for loops", "console log"],
      answer: 4
    },
    
  ];
