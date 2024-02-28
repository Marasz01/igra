// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Get reference to HTML elements
const guessField = document.getElementById('guessField');
const submitButton = document.querySelector('button');
const message = document.getElementById('message');

// Initialize guess count
let guessCount = 0;

// Function to check the guess
function checkGuess() {
  let userGuess = Number(guessField.value);
  if (guessCount === 0) {
    message.textContent = '';
  }
  
  if (userGuess === randomNumber) {
    message.textContent = `Congratulations! You guessed the correct number in ${guessCount + 1} attempts!`;
    message.style.color = 'green';
    endGame();
  } else if (userGuess < randomNumber) {
    message.textContent = 'Too low! Try again.';
    message.style.color = 'orange';
  } else {
    message.textContent = 'Too high! Try again.';
    message.style.color = 'orange';
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
}

// Function to end the game
function endGame() {
  guessField.disabled = true;
  submitButton.disabled = true;
}
