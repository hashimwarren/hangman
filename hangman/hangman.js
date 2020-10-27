class Hangman {
    constructor(word, guesses) {
        this.word = word.toLowerCase().split('')
        this.guesses = guesses
        this.guessedLetters = []
        this.status = 'playing'
    }
    get puzzle() {
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
                beep(999, 220, 300)

            }



        }

        this.changeStatus()
        this.statusMessage





    }
    changeStatus() {
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')

        if (this.guesses <= 0) {
            this.status = 'failed'
            beep(100, 520, 200)

        } else if (finished) {
            this.status = 'finished'
            beep(999, 210, 800)
            beep(999, 500, 800)


        } else {
            this.status = 'playing'
            beep(999, 210, 200)

        }
    }
    get statusMessage() {

        if (this.status === 'playing') {
            return `Guesses left: ${this.guesses}`

        } else if (this.status === 'failed') {
            return `Nice try! The word was ${this.word.join('')}`

        } else {
            return `Great work! You guessed the word`

        }
    }


}


