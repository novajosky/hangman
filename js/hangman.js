/*----- constants -----*/

const movies = [
  "the matrix", "cast away", "iron man", "spider man", "bad boys", "pulp fiction", "ace ventura", "happy gilmore", "karate kid", "star wars", "up", "casino", "jaws",
]

/*----- app's state (variables) -----*/

let answer = '';
let maxGuesses = 10;
let mistakes = 0;
let guessed = [];
let wordStatus = null;
let answerWithoutSpaces = ""
for (let i = 0; i < answer.length; i++) {
  if (answer[i] === " ") {
    answerWithoutSpaces += " ";
  }
}

/*----- cached element references -----*/

let getHint = document.getElementById("hint");
let showClue = document.getElementById("clue");

function randomWord() {
  answer = movies[Math.floor(Math.random() * movies.length)];
}

function generateButtons() {
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const keyboard = document.getElementById('keyboard');
  keyboard.innerHTML = '';

  letters.forEach(letter => {
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-lg', 'btn-primary', 'm-2');
    button.setAttribute('id', letter);
    button.innerText = letter;
    button.addEventListener('click', () => handleGuess(letter));
    keyboard.appendChild(button);
  });
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

  // Add the 'guessed' class to the button element
  document.getElementById(chosenLetter).classList.add('guessed');
}


function updateHangmanPicture() {
document.getElementById('hangman').src = './hmimages/hangman' + mistakes + '.jpg';
}

function checkIfGameWon(){
  let temp = answer.split("").filter((char) => char !== " ");
  let guessedletters = guessed.join("");
  if(temp.every((char) => guessedletters.includes(char))){
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
  wordStatus = "";
  for(let i = 0; i < answer.length; i++){
    if(answer[i] === " "){
      wordStatus += "-";
    }else{
      wordStatus += (guessed.indexOf(answer[i]) >= 0 ? answer[i] : " _ ");
    }
  }
  document.getElementById('wordPlace').innerHTML = wordStatus;
}

function updateMistakes() {
document.getElementById('mistakes').innerHTML = mistakes;
}

hint.onclick = function() {
  let hints = ["hmm, upgrades", "WILSON!!", "Tony Stark", "Peter Parker", "whatchu gonna do", "Tarantino", "Alrighty Then!", "Just Tap it in", "wax on, wax off", "I am your father!", "Dug the dog", "mob movie", "we're gonna need a bigger boat"];
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
showClue.innerHTML = '';
}

document.getElementById('maxWrong').innerHTML = maxGuesses;

randomWord();
generateButtons();
guessedWord();