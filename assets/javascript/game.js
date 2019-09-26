var letters = ["a", "b", "c", "d", "e", "f", "g", "h","i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var remaining = 9;
var guessed = [];


var directionsText = document.getElementById("directions-text");
var thinkingText = document.getElementById("thinking-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-remain-text");
var guessedText = document.getElementById("guessed-text");

document.onkeyup = function(event) {
   var userGuess = event.key.toLowerCase();
   var computerGuess = letters[Math.floor(Math.random() * letters.length)];
  


   if (userGuess === computerGuess) {
       wins++;
       remaining = 9;
   }
   else if (userGuess !== computerGuess) {
       remaining--;
       guessed.push(userGuess);
       guessedText.textContent = guessed.join(", ");
   }

   if (remaining === 0) {
       losses++;
       remaining = 9;
   }
   directionsText.textContent = " "
   winsText.textContent = "wins: " + wins;
   lossesText.textContent = "losses: " + losses;
   guessesText.textContent = "Remaining Guesses: " + remaining;
};
   


