var main = require("./CLI.js");

exports.guessArr = [];
var guessDisplay = "";
exports.wordArr = [];

// separate the hangman word to display like this:  ['a', 'e'] && [ _, _, _ ] respectively
exports.initDisplay = function() {
	var wordChoice = main.chosenWord;
	for (var i = 0; i<wordChoice.length; i++) {
		exports.wordArr.push(wordChoice.charAt(i));
		exports.guessArr.push('_');
	};
}

// displays the blanks
exports.displayWord = function(){
	guessDisplay = "";
	for (var i = 0; i<exports.guessArr.length; i++) {
		guessDisplay += exports.guessArr[i] + " ";
	}
	console.log(guessDisplay);
};

// function to update the guessArray when a correct letter is guessed...
exports.editArray = function(position, letter) {
	exports.guessArr[position] = letter;
}