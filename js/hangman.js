/*----- constants -----*/

const movies = [
    "thematrix", "castaway", "ironman", "spiderman", "badboys", "pulpfiction", "aceventura", "happygilmore", "karatekid"
]

/*----- app's state (variables) -----*/

let answer = '';
let maxGuesses = 10;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

/*----- cached element references -----*/

let getHint = document.getElementById("hint");
let showClue = document.getElementById("clue");

function randomWord() {
    answer = movies[Math.floor(Math.random() * movies.length)]; 
}

function generateButtons() {
    let lettersHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
      `
        <button
          class="btn btn-lg btn-primary m-2"
          id='` + letter + `'
          onClick="handleGuess('` + letter + `')"
        >
          ` + letter + `
        </button>
      `).join('');
  
    document.getElementById('keyboard').innerHTML = lettersHTML;
  }

/*----- event listeners -----*/

/*----- functions -----*/

function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute('disabled', true);

  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfGameWon();
  } else if (answer.indexOf(chosenLetter) === -1) {
    mistakes++;
    updateMistakes();
    checkIfGameLost();
    updateHangmanPicture();
  }
}

function updateHangmanPicture() {
  document.getElementById('hangman').src = './hmimages/hangman' + mistakes + '.jpg';
}

function checkIfGameWon() {
  if (wordStatus === answer) {
    document.getElementById('keyboard').innerHTML = 'YOU WIN!';
  }
}

function checkIfGameLost() {
  if (mistakes === maxGuesses) {
    document.getElementById('wordPlace').innerHTML = 'The answer was: ' + answer;
    document.getElementById('keyboard').innerHTML = 'YOU LOSE!';
  }
}

function guessedWord() {
  wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

  document.getElementById('wordPlace').innerHTML = wordStatus;
}

function updateMistakes() {
  document.getElementById('mistakes').innerHTML = mistakes;
}
//hint needs to be changed to function declaration
hint.onclick = function() {
    let hints = ["red or blue pill", "Tom Hanks", "Tony Stark", "Peter Parker", "whatchu gonna do", "Tarantino", "Alrighty Then!", "Just Tap it in", "Daniel Larusso"];
    let movieIndex = movies.indexOf(answer);
    showClue.innerHTML = hints[movieIndex];
};

function reset() {
  mistakes = 0;
  guessed = [];
  document.getElementById('hangman').src = './hmimages/hangman0.jpg';

  randomWord();
  guessedWord();
  updateMistakes();
  generateButtons();
}

document.getElementById('maxWrong').innerHTML = maxGuesses;

randomWord();
generateButtons();
guessedWord();