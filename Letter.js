var Letter = function(guessedLetter) {

    //A string value to store the underlying character for the letter
    this.guessedLetter = guessedLetter.toUpperCase();
    //A boolean value that stores whether that letter has been guessed yet
    this.correctGuess = false;

    this.showLetter = function() {
        if(this.correctGuess) {
            console.log(this.guessedLetter);
        } else {
            console.log("You've Guessed that letter already");
        }
    }

};


module.exports = Letter.js;