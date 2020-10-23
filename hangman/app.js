const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')


const gameOne = new Hangman('Cat', 2)
console.log(gameOne.getPuzzle())
console.log(gameOne.guesses);

window.addEventListener('keypress', function (e) {
    const guess = e.key
    gameOne.makeGuess(guess)
    puzzleEl.textContent = gameOne.getPuzzle()
    guessesEl.textContent = gameOne.guesses

})

puzzleEl.textContent = gameOne.getPuzzle()
guessesEl.textContent = gameOne.guesses
