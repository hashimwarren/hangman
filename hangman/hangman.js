class Hangman {
    constructor(word, guesses) {
        this.word = word.toLowerCase().split('')
        this.guesses = guesses
        this.guessedLetters = []
        this.status = 'playing'
    }
    getPuzzle() {
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
    makeGuess(guess) {

        if (this.status === 'playing') {
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

        this.changeStatus()
        this.printStatus()





    }
    changeStatus() {
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter))

        if (this.guesses <= 0) {
            this.status = 'failed'

        } else if (finished) {
            this.status = 'finished'

        } else {
            this.status = 'playing'
        }
    }
    printStatus() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.guesses}`

        } else if (this.status === 'failed') {
            return `Nice try! The word was ${this.word.join('')}`

        } else {
            return `Great work! You guessed the word`

        }
    }


}


