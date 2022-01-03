# hangman
User Display
1. Display the game title
2. Display instructions for the game
3. Display the the css grid to show the letters to choose from
4. Show the blank board where the hangman appears
5. Display buttons at the bottom for change category, hint, play again, 2 player mode

Instructions:
1. Player has to guess the secret word in less than 10 tries. If they do they win! Otherwise the man on the board will be completed and will be hung and the player loses.
2. For each wrong guess a bodypart of the avatar will be added to the lynch (10 bodyparts in total).

Pseudocode:

Variables needed to be defined:
1. words: Words will be picked at random through the category button.
2. secretWord: This will be the string to identify the secret word that needs to be guessed.
3. letters: Letters needs to be shown for the player to pick from, they also need to be crossed out when picked to avoid picking the same letter twice.
4. mistakesLeft: The number of errors remaining before the player runs out of guesses and loses.

Game Logic:
1. First we need the secretWord. This word will be automatically generated at first using a Math.random function and can be changed when the player hits the change category button. 
2. Next, letters have to picked from the available letters on the board. When picked the letter will be crossed out and the letter will lead to the secret word or a body part of the Avatar will be rendered to the board.
3. This will be iterated until either the player wins or the maximum amount of guesses has been reached.
4. The game will have 3 different functions to determine the state of the game.
    YOU WIN
    GAME OVER
    Still Ongoing
5. When the game ends. The player will see either "YOU SAVED THE AVATAR!" or "GAME OVER!"