// Global VARIABLES 
//-----------------------------------------------------------------------
// Arrays and Variables for holding data
var wordOptions = ["mustafa", "ali", "farah", "abdisalam", "muna", "abas", "ahmed"];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = []; // j _ _ _ _ _ _ _
var wrongLetters = [];

// Game counters
var winCounter = 0;
var lossCounter = 0;
var guessesLeft = 9;

// FUNCTIONS (Reusable blocks of code that I will call upon when needed)
//-----------------------------------------------------------------------

function startGame() {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersinWord = selectedWord.split("");
    numbBlanks = lettersinWord.length;

    // Reset
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];

    // Populate blanks and successes with right number of blanks.
    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }

    // Change HTML to reflect round conditions
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join("  ");
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCounter;
    document.getElementById("lossCounter").innerHTML = lossCounter;

    // Testing/ Debugging
    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);
}

function checkLetters(letter) {
    // check if letter exists in code at all
    var isLettterInWord = false;
    for (var i = 0; i < numBlanks; i++) {
        if (selectedWord[i] == letter) {
            isLettterInWord = true;
        }
    }

    // Check where in word letter exists then populate blanksAndSuccesses aray
    if (isLettterInWord) {
        for (var i = 0; i < numBlanks; i++) {
            if (selectedWord[i] == letter) {
                blanksAndSuccesses[i] = letter;

            }
        }
    }

    //Letters wasn't found
    else {
        wrongLetters.push(letter);
        guessesLeft--
    }

    // Testing/ Debugging
    console.log(blanksAndSuccesses);

}

function roundComplete() {
    console.log("win Count: " + winCount + " | Loss Count: " + lossCount + " | Guess Left" + guessesLeft);

    //Updating the HTML to reflect the most recent count stats
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join("  ");
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join("  ");

    // check if user won
    if (lettersinWord.toString() == blanksAndSuccesses.toString()) {
        winCounter++;
        alert("You Win!")

        // Update the win counter in the HTML
        document.getElementById("winCounter"), innerHTML = winCount;

        startGame();
    }

    // Check if user lost
    else if (guessesLeft == 0) {
        lossCount++;
        alert("You lost!")

        // update the HTML
        document.getElementById("lossCounter").innerHTML = lossCount;

        startGame();
    }

}

// MAIN PROCESS
//-----------------------------------------------------------------------

// Initiates the code the first time
startGame();

// Registers keyclicks

document.onekeyup = function (event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();

    // Testing/ Debugging
    console.log("letterGuessed");

}