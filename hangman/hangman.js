

const Hangman = function (word, guesses) {
    this.word = word.toLowerCase().split('')
    this.guesses = guesses
    this.guessedLetters = []

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

    return puzzle + " " + this.guesses

}

Hangman.prototype.makeGuess = function (guess) {
    guess.toLowerCase()
    const uniqueGuess = !this.guessedLetters.includes(guess)
    const badGuess = !this.word.includes(guess)
    if (uniqueGuess) {
        this.guessedLetters.push(guess)
    }

    if (badGuess && uniqueGuess) {
        this.guesses--

    }


}

const gameOne = new Hangman('Cat', 2)
console.log(gameOne.getPuzzle())
console.log(gameOne.guesses);

window.addEventListener('keypress', function (e) {
    const guess = e.key
    gameOne.makeGuess(guess)
    console.log(gameOne.getPuzzle())
    console.log(gameOne.guesses);

})