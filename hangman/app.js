const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')


const gameOne = new Hangman('Madison and Moses', 5)
console.log(gameOne.puzzle)
console.log(gameOne.guesses);


window.addEventListener('keypress', function (e) {
    const guess = e.key
    gameOne.makeGuess(guess)
    puzzleEl.textContent = gameOne.puzzle
    guessesEl.textContent = gameOne.statusMessage
    console.log(gameOne.status);


})

puzzleEl.textContent = gameOne.puzzle
guessesEl.textContent = gameOne.statusMessage


a = new AudioContext()
function beep(vol, freq, duration) {
    v = a.createOscillator()
    u = a.createGain()
    v.connect(u)
    v.frequency.value = freq
    v.type = "square"
    u.connect(a.destination)
    u.gain.value = vol * 0.01
    v.start(a.currentTime)
    v.stop(a.currentTime + duration * 0.001)
}
