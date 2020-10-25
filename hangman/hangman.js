const Hangman = function (word, guesses) {
    this.word = word.toLowerCase().split('')
    this.guesses = guesses
    this.guessedLetters = []
    this.status = 'playing'


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

    this.changeStatus()


}

Hangman.prototype.changeStatus = function () {

    const finished = this.word.every((letter) => this.guessedLetters.includes(letter))

    if (this.guesses <= 0) {
        this.status = 'failed 👎🏽'

    } else if (finished) {
        this.status = 'finished 🎈'

    } else {
        this.status = 'playing...'
    }

    // if (!this.getPuzzle().includes("*")) {
    //     this.status = 'finished 🎈'

    // } else if (this.guesses <= 0 && this.getPuzzle().includes("*")) {
    //     this.status = 'failed 👎🏽'
    // }








}

