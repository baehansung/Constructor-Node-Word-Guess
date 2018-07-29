var Letter = require("./Letter");

var Word = function(currentWord) {
    //the current word choosen from the array of words
    this.currentWord = currentWord;
    //the current word's letters will be broken down and placed into array below
    this.letters = [];
    //amount of underscores for each letter of the CURRENT word will be stored into array below
    this.blank = [];

    this.generateBlanks = function() {
        for(var i = 0; i < this.currentWord.length; i++) {
            this.blank[i] = "_";
        }
    }

    this.splitIntoArray = function() {
        this.letters = this.currentWord.split("");


    }

    // this.generateWord = function() {

    //     //split the word that the user will guess into individual letters
    //     this.letters = this.currentWord.split("");


    // }

}