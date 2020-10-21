

const Hangman = function (word, guesses) {
    this.word = word.toLowerCase().split('')
    this.guesses = guesses
    this.guessedLetters = ['a', 'h']

}


Hangman.prototype.getPuzzle = function () {

    let puzzle = ''

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter

        } else {
            puzzle += '*'

        }

    })



    return puzzle



}


const gameOne = new Hangman('Cat', 2)
const gameTwo = new Hangman('Hashim Warren', 4)




//console.table([gameOne, gameTwo]);
console.log(gameOne.getPuzzle())
console.log(gameTwo.getPuzzle())