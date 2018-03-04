// Global VARIABLES 
//-----------------------------------------------------------------------
// Arrays and Variables for holding data
var wordOptions = ["mustafa", "ali", "farah", "abdisalam", "muna", "abas", "ahmed"];
var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blankAndSuccesses = []; // j _ _ _ _ _ _ _
var wrongletters = [];

// Game counters
var winCounter = 0;
var lossCounter = 0;
var guessesLeft = 0;

// FUNCTIONS (Reusable blocks of code that I will call upon when needed)
//-----------------------------------------------------------------------

function startGame () {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersInWord = selectedWord.split("");
    lettersInWord = lettersInWord.length;

    // Reset
    guessesLeft = 9;
    wrongletters = [];
    blankAndSuccesses = [];

    // Populate blanks and successes with right number of blanks.
    for (var i=0; i<numBlanks; i++) {
        blankAndSuccesses[i].push("_");
    }

    // Change HTML to reflect round conditions
    document.getElementById("wordToGuess").innerHTML = blankAndSuccesses.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCounter;
    document.getElementById("lossCounter").innerHTML = lossCounter;

    // Testing/ Debugging
    console.log(selectedWord);
    console.log(lettersInWord);
    console.log(numBlanks);
    console.log(blankAndSuccesses);
}



// MAIN PROCESS
//-----------------------------------------------------------------------

startGame();