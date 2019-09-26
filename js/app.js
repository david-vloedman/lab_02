'using strict';

var userName = prompt('What is your name?');
alert('Welcome ' + userName);

var score = 0;

var targetNumber = Math.floor((Math.random() * 10) + 1);
var guess = parseInt(prompt('Guess a number between 1 and 10!'));
var wasCorrect = false;



for (var i = 0; i < 4; i++){
    if(guess === targetNumber){
        alert('You are correct!');
        wasCorrect = true;
        score++;
    break;
    }

    if(guess < targetNumber) alert('Too low!');
    if(guess > targetNumber) alert('Too High!');
    guess = parseInt(prompt('Try again!'));
}



if(!wasCorrect) alert('All out of attempts! The correct answer was ' + targetNumber + '.');



alert('Answer questions with yes or no!');

if(prompt('Did David go to school?').toLowerCase() === 'yes'){
    alert('Correct');
    score++;
} else {
    alert('Incorrect');
}



if(prompt('Did David work as a cable guy?').toLowerCase() === 'yes'){
    alert('Correct');
    score++;
} else {
    alert('Incorrect');
}



if(prompt('Did David go to Sheldon Highschool?').toLowerCase() === 'yes'){
    alert('Correct');
    score++;
} else {
    alert('Incorrect');
}

if(prompt('Does David like Tennis?').toLowerCase() === 'no'){
    alert('Correct');
    score++;
} else {
    alert('Incorrect');
}


var answerKey = [
    8,
    9,
    10,
    11,
    12
];


alert('Name two numbers that are greater than 7, but less than 13?');


var attempts = 0;

while(attempts < 6){
    var answer1 = parseInt(prompt('First number?'));
    var answer2 = parseInt(prompt('Second number?'));
    var correctAnswers = 0;
    for(var a = 0; a < 5; a++){
        if(answer1 === answerKey[a]){
            correctAnswers++;
            score++;
        }        
        if(answer2 === answerKey[a])
        {
            correctAnswers++;
            score++;
        }
    }    
    if(correctAnswers === 2){
        alert('Congratulations! Those are correct');
        break;
    }
    alert('Try again!');
    attempts++;
}

alert('Your score is ' + score + ' out of 7');







