/*----- constants -----*/
let animals = [
    "dog", "cat", "elephant", "lion", "tiger", "spider", "whale", "snake", "bear", "alligator", "cow", "chicken", "duck"
]
let movies = [
    "the matrix", "cast away", "iron man", "spider man", "eternals", "bad boys", "pulp fiction", "ace ventura", "happy gilmore", "karate kid"
]
let foods = [
    "pizza", "spagetti", "ramen", "french fries", "steak", "pho", "salad", "cheese", "tacos", "sushi", "cookies", "sandwich"
]

/*----- app's state (variables) -----*/

let answer = "";
let maxGuesses = 10;
let mistakes = 0;
let guessed = [];

/*----- cached element references -----*/

/*----- event listeners -----*/


/*----- functions -----*/
function generateLetters() {
    let lettersHTML = "abcdefghijklmnopqrstuvwxyz".split('').map(letter =>
        `
            <button
                class="btn btn-lg btn-primary m-2"
                id="` + letter + `"
                onClick="handleGuess('` + letter + `')"
            >
                ` + letter + `
            </button>
        `).join('').toUpperCase();

    document.getElementById('keyboard').innerHTML = lettersHTML;
}
document.getElementById('maxGuesses').innerHTML = maxGuesses;

generateLetters();