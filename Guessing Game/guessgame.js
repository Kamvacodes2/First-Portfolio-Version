// game rule set


const minimumNumber = 1;

const maximumNumber = 20

const answer = Math.floor(Math.random()* (maximumNumber - minimumNumber + 1));

let attempts = 0
let guess;
let playing = true

while (playing === true) {
    guess = prompt(`Try to guess a number between ${minimumNumber} - ${maximumNumber} `)
    guess = parseInt(guess)

    if (isNaN(guess)) {
        alert('YOU DID NOT ENTER A NUMBER!');
    } else if (guess < 0 || guess > maximumNumber) {
        alert('YOU HAVE TO ENTER A NUMBER BETWEEN 1 - 20');
    } else {
        attempts ++;
        if (guess < answer) {
            alert("The guess is too low! Try Again!")
        } else if (guess > answer) {
            alert('The guess is too high! Try again!!')
        } else {
            alert(`Great guess!!! the answer was ${answer}. It took you ${attempts} attempts`)
            playing = false;
        };
    };
};