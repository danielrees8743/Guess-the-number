'use strict';

// Genterates a random number and declares staring score
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;

// Function to write message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const scoreEl = document.querySelector('.score');

// document.querySelector('.check').addEventListener('mousedown');

// Takes the value from the guess and stores the guess
document.querySelector('.check').addEventListener('click', () => {
  let guess = document.querySelector('.guess').valueAsNumber;

  //When there is no input
  if (!guess) {
    displayMessage('No number input');
  }

  // When player win
  else if (guess === secretNumber) {
    displayMessage('Congrats');
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').textContent = secretNumber;
    }
  }

  // When guess is too high
  else if (guess > secretNumber) {
    if (score > 0) {
      displayMessage('Number is lower 📉');
      scoreEl.textContent = --score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('body').style.backgroundColor = '#F23D4C';
      document.querySelector('.score').textContent = 0;
    }
  }
  // When guess is too low
  else if (guess < secretNumber) {
    if (score > 0) {
      displayMessage('Number is higher 📈');
      scoreEl.textContent = --score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else {
    scoreEl.textContent = 0;
    displayMessage('Game Over');
  }
});

document.querySelector('.again').addEventListener('click', _ => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
});
