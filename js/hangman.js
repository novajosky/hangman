var movies = [
    "the matrix",
    "cast away",

]




let answer = "";
let maxGuesses = 10;
let mistakes = 0;
let guessed = [];


function generateLetters() {
    let lettersHTML = "abcdefghijklmnopqrstuvwxyz".split('').map(letter =>
        `
            <button
                class="btn btn-lg btn-primary m-2"
                id="` + letter + `
                onClick="handleGuess('` + letter + `')"
            >
                ` + letter + `
            </button>
        `).join('').toUpperCase();

    document.getElementById('keyboard').innerHTML = lettersHTML;
}

generateLetters();