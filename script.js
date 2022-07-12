'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;


document.querySelector('.guess').value;

    
document.querySelector('.guess').value = 23;

console.log(
    document.querySelector('.guess').value);

    */

let secretNumber = Math.trunc(Math.random() * 20) + 1;

// state variable
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess);

  //   when no user input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  }
  //   when player wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '👍 CORRECT NUMBER!!!';

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    // logic for highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //   when number is high
  else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '📈 Number Too High';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🎆 GAME OVER!!';
      document.querySelector('.score').textContent = 0;
    }

    //    when number is low
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '📉 Number Too Low';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🎆 GAME OVER!!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// resetting the game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
