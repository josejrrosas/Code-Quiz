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
  });
