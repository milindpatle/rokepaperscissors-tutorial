'use strict';

const result = document.getElementById('result');
let [computer_score, user_score] = [0, 0];

//When user clicks
//generate a random choice of the computer languages
//display choices
//It should compare the com choice with user choice
//it should show a message about
//it should update the score

let gameRules = {
  Rock: {
    Rock: 'draw',
    Scissors: 'win',
    Paper: 'lose',
  },
  Paper: {
    Paper: 'draw',
    Rock: 'win',
    Scissors: 'lose',
  },

  Scissors: {
    Scissors: 'draw',
    Paper: 'win',
    Rock: 'lose',
  },
};

function clicked(input) {
  let choices = ['Rock', 'Paper', 'Scissors'];
  let randomNumber = Math.trunc(Math.random() * 3);
  let computer_choice = choices[randomNumber];
  document.getElementById(
    'user_choice'
  ).innerHTML = `Computer choose <span>${computer_choice.toUpperCase()}</span>`;
  document.getElementById(
    'computer_choice'
  ).innerHTML = `You Choose <span>${input.toUpperCase()}</span>`;

  switch (gameRules[input][computer_choice]) {
    case 'win':
      result.innerText = 'You win';
      result.style.cssText = 'background-color: green';
      user_score++;
      break;
    case 'lose':
      result.innerText = 'You lose';
      result.style.cssText = 'background-color: red';
      computer_score++; //
      break;
    case 'draw':
      result.innerText = 'You draw';
      break;
  }

  document.getElementById('computer_score').innerHTML = computer_score;
  document.getElementById('user_score').innerHTML = user_score;
}
