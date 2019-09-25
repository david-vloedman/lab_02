// Guessing game
'using strict'

var userName = prompt('What is your name?');
alert('Welcome ' + userName);

var score = 0;

var targetNumber = Math.floor((Math.random() * 10) + 1);
var guess = parseInt(prompt("Guess a number between 1 and 10!"));
var wasCorrect = false;
console.log(targetNumber);
console.log(guess);


for (var i = 1; i < 4; i++){
    if(guess === targetNumber){
        alert("You're correct!");
        wasCorrect = true;
        score++
        break;
    }

    if(guess < targetNumber) alert('Too low!');
    if(guess > targetNumber) alert('Too High!');
    guess = parseInt(prompt('Try again!'));
};

if(!wasCorrect) alert('All out of attempts!');

alert('Answer questions with yes or no!');

if(prompt('Did David go to school?') === 'yes'){
    alert('Correct');
    score++
} else {
    alert('Incorrect');
};

if(prompt('Did David work as a cable guy?') === 'yes'){
    alert('Correct');
    score++
} else {
    alert('Incorrect');
};

if(prompt('Did David go to Sheldon Highschool?') === 'yes'){
    alert('Correct');
    score++
} else {
    alert("Incorrect");
};

if(prompt('Does David like Tennis?') !== 'no'){
    alert('Correct');
    score++;
} else {
    alert('Incorrect');
};


var answerKey = [
    8,
    9,
    10,
    11,
    12
];


alert('What numbers are greater than 7, but less than 13? Give two answers.');





for(var i = 1; i < 6; i++){
    var answer1 = parseInt(prompt('First answer?'));
    var answer2 = parseInt(prompt(''))
}

alert('Your score is ' + score + 'out of 7');







