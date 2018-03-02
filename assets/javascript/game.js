// (function () {
//         "use strict";
//         var availableLetters, words, guessInput, guess, guessButton, lettersGuessed, lettersMatched, output, man, letters, lives, currentWord, numLettersMatched, messages;

//         function setup() {
//             /* start config options */
//             availableLetters = "abcdefghijklmnopqrstuvwxyz";
//             lives = 5;
//             words = ["cat", "dog", "cow", "reindeer"];
//             messages = {
//                 win: 'You win!',
//                 lose: 'Game over!',
//                 guessed: ' already guessed, please try again...',
//                 validLetter: 'Please enter a letter from A-Z'
//             };