var main = require("./CLI.js");
var letter = require("./letter.js");
exports.letterArr = [];

// function to check if a letter is in the chosen word
exports.checker = function() {
	var wordToCheck = main.chosenWord;
	exports.letterArr.push(main.letter);
	var detected = 0;
	for (var i = 0; i<wordToCheck.length; i++) {
		if (wordToCheck.charAt(i) == main.letter){
			letter.editArray(i, main.letter);
			detected++;
		}
	}
	letter.displayWord();
	if(detected == 0) {
		main.lives++;
	}
	main.requestInfo();
};

// function to check if the word guessed is correct
exports.wordCheck = function() {
	var guess = main.wordGuess;
	var word = main.chosenWord;
	var isNotEqual;
	// compare each character in the word with the guess
	for (var j = 0; j<word.length; j++){
		if(guess[j] != word[j]){
			isNotEqual = false;
		}
		else{
			isNotEqual = true;
		}
	}
	if (isNotEqual == true) {
		console.log("You guessed it!");
		main.playAgain();
	}
	else{
		console.log("Sorry, incorrect.");
		main.lives++;
		main.requestInfo();
	}
}