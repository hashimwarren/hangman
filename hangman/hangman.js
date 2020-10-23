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

    return puzzle

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