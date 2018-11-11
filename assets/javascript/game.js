var NUM_OF_WINS = 0;
var NUM_OF_LOSSES = 0;
var NUM_OF_GUESSES = 9;
var arrayOfGuesses = [];

var guessesEnteredString = document.getElementById("guessesLeftString");
var winsNum = document.getElementById("winsNum");
var lossesNum = document.getElementById("lossesNum");
var guessesLeftNum = document.getElementById("guessesLeftNum");
var correctAnswer = generateRandom(); // creates random letter user needs to guess

document.onkeyup = function(e) {
  if (arrayOfGuesses.indexOf(e.key) != -1) {
    return;
  }
  //if user letter is correct
  if (e.key == correctAnswer) {
    NUM_OF_WINS++;
    winsNum.textContent = NUM_OF_WINS;
    correctAnswer = generateRandom();
    NUM_OF_GUESSES = 9;
    guessesLeftNum.textContent = NUM_OF_GUESSES;
    guessesEnteredString.textContent = "";
    arrayOfGuesses = [];
  } else {
    // if user letter is wrong...
    NUM_OF_GUESSES--;
    // if user letter is wrong and they run out of guesses, game resets!
    if (NUM_OF_GUESSES == 0) {
      NUM_OF_GUESSES = 9;
      NUM_OF_LOSSES++;
      lossesNum.textContent = NUM_OF_LOSSES;
      correctAnswer = generateRandom();
      guessesEnteredString.textContent = "";
      arrayOfGuesses = [];
    } else {
      // user letter is wrong, but they have more guesses left.
      guessesEnteredString.textContent += e.key + " ";
      arrayOfGuesses.push(e.key);
    }
    guessesLeftNum.textContent = NUM_OF_GUESSES;
  }
};
function generateRandom() {
  var randomNum = Math.floor(Math.random() * 25);
  var randomLetters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  var correctAnswer = randomLetters[randomNum];
  return correctAnswer;
}
