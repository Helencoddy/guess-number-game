'use strict';
//calling the secret number
let secretNumber = Math.trunc(Math.random() * 30 ) + 1;
let score = 30;
let highscore = 0;

//linking the secret number to show on instead of the question number
// document.querySelector('.number').textContent = secretNumber;

//adding the eventlistener 
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);

    if(!guess) {
        document.querySelector('.message').textContent = 'Input a number';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉🎇🎉 Correct number';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('body').style.backgroundColor = '#008000';

        if (score > highscore){
            highscore = score;
        }
        document.querySelector('.highscore').textContent = highscore;

    } else if(guess > secretNumber) {
        if(score > 0) {
            document.querySelector('.message').textContent = 'Number is too high';
            score--;
            document.querySelector('.score').textContent = score;    
        } else {
            document.querySelector('.message').textContent = 'You lose';
            document.querySelector('.score').textContent = 0;
        }


    } else if (guess < secretNumber) {
        if (score > 0) {
            document.querySelector('.message').textContent = 'Number is too low';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lose';
            document.querySelector('.score').textContent = 0;
        }
    }
})


document.querySelector('.again').addEventListener('click', function(){
    score = 30;
    highscore = 0;
    let secretNumber = Math.trunc(Math.random() * 30 ) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#0d0303';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
})