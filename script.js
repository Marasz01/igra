
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
    message.textContent = `Čestitamo! Pogodili ste broj u ${guessCount + 1} pokušaja!`;
    message.style.color = 'green';
    endGame();
  } else if (userGuess < randomNumber) {
    message.textContent = 'Pre nisko! Pokušajte ponovno';
    message.style.color = 'red';
  } else {
    message.textContent = 'Pre visoko! Pokušajte ponovno';
    message.style.color = 'red';
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
}

function endGame() {
  guessField.disabled = true;
  submitButton.disabled = true;
}
