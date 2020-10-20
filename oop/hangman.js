const Hangman = function (word, guesses) {
    this.word = word
    this.guesses = guesses

}

const gameOne = new Hangman('cat', 3)
const gameTwo = new Hangman('bird', 4)

console.log(gameOne, gameTwo);