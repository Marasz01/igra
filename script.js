
const randomNumber = Math.floor(Math.random() * 100) + 1;


const guessField = document.getElementById('guessField');
const submitButton = document.querySelector('button');
const message = document.getElementById('message');


let guessCount = 0;


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

function endGame() {
  guessField.disabled = true;
  submitButton.disabled = true;
}
