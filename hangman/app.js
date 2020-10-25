const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')


const gameOne = new Hangman('Welcome home Alexandra Joye Warren', 10)
console.log(gameOne.getPuzzle())
console.log(gameOne.guesses);


window.addEventListener('keypress', function (e) {
    const guess = e.key
    gameOne.makeGuess(guess)
    puzzleEl.textContent = gameOne.getPuzzle()
    guessesEl.textContent = gameOne.guesses
    console.log(gameOne.status);

})

puzzleEl.textContent = gameOne.getPuzzle()
guessesEl.textContent = gameOne.guesses
