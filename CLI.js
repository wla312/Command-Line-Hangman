// require the game, word, & letter files
var game = require("./game.js");
var word = require("./word.js");
var letter = require("./letter.js")

// require inquirer npm package
var inquirer = require("inquirer");

// variable to hold the choice that the player makes in requestInfo function
var choice;

// variable to hold the letter the player chooses in the guess function
exports.letter;

// variable to hold the word the player guesses in the guess function
exports.wordGuess;

// variable to hold the number of lives you have used
exports.lives = 0;

// creating a variable called chosenWord that is set to equal the game.js function chooseWord's return value.
exports.chosenWord = game.chooseWord();

exports.requestInfo = function(){
	if(exports.lives >= 10) {
		console.log("You lose. Better luck next time.");
		// call playAgain function to let user decide to play again or exit
		exports.playAgain();
	}
	else{
		var questions = [
	{
		type: "list",
		name: "whatDo",
		message: "What would you like to guess?\n You have used " + exports.lives + " out of 10.",
		choices: [
		"letter",
		"word"
		]
	}
	];

	inquirer.prompt(questions).then(function(answers) {
	// if the user wants to guess a letter...
		if (answers.whatDo == "letter"){
			var letterQ = [
			{
				type: "input",
				name: "letter",
				message: "You have already chosen: " + word.letterArr + "\n Current Guess: "
			}
			];

			inquirer.prompt(letterQ).then(function(answers) {
				exports.letter = answers.letter;
				word.checker();
			})
		}

		// if the user wants to guess a word...
		else if (answers.whatDo == "word") {
			var wordQ = [
			{
				type: "input",
				name: "word",
				message: "which word do you think it is?"
			}
			];
			inquirer.prompt(wordQ).then(function(answers) {
				exports.wordGuess = answers.word;
				word.wordCheck();
			})
		}
		else{
			console.log("Wrong answer. Please try again.");
			exports.requestInfo();
		}
	})
	}
};

// function to reset the game and allow the user to choose to play again or exit.
exports.playAgain = function() {
	var questions = [
	{
		type: "list",
		name: "playAgain",
		message: "do you want to play again?",
		choices: [
		"yes",
		"no"
		]
	}
	];

	inquirer.prompt(questions).then(function(answer) {
		if (answer.playAgain == "yes"){
			// reset lives
			exports.lives = 0;
			// choose another word
			exports.chosenWord = game.chooseWord();
			// empty arrays
			letter.guessArr = [];
			letter.wordArr = [];
			word.letterArr = [];

			letter.initDisplay();
			letter.displayWord();
			exports.requestInfo();
		}
		else{
			console.log("Thanks for playing!");
		}
	})
}

// start the game
letter.initDisplay();
letter.displayWord();
exports.requestInfo();