// Guessing game
// NO FUNCTIONS! ARE YOU NOT ENTERTAINED?
'using strict'

var userName = prompt('What is your name?');
alert('Welcome ' + userName);

var score = 0;

var targetNumber = Math.floor((Math.random() * 10) + 1);
var guess = parseInt(prompt("Guess a number between 1 and 10!"));
var wasCorrect = false;
// console.log(targetNumber);
// console.log(guess);


for (var i = 0; i < 4; i++){
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

// console.log(score);

alert('Answer questions with yes or no!');

if(prompt('Did David go to school?') === 'yes'){
    alert('Correct');
    score++
} else {
    alert('Incorrect');
};

// console.log(score);

if(prompt('Did David work as a cable guy?') === 'yes'){
    alert('Correct');
    score++
} else {
    alert('Incorrect');
};

// console.log(score);

if(prompt('Did David go to Sheldon Highschool?') === 'yes'){
    alert('Correct');
    score++
} else {
    alert("Incorrect");
};

if(prompt('Does David like Tennis?') === 'no'){
    alert('Correct');
    score++;
} else {
    alert('Incorrect');
};

// console.log(score);

// establish a set of correct answers
var answerKey = [
    8,
    9,
    10,
    11,
    12
];


alert('Name two numbers that are greater than 7, but less than 13?');


var attempts = 0;

// Loop while attempts is less than 6
while(attempts < 6){
    // ask user for their two answers
    var answer1 = parseInt(prompt('First number?'));
    var answer2 = parseInt(prompt('Second number?'));
    // set correct answers to 0 until their response is compared to correct answer
    var correctAnswers = 0;
    // Loop through all 5 indexes on the array, comparing the answers to a different index each iteration
    for(var a = 0; a < 5; a++){
        // compare first response user gives to the answerKey[a], where a is the current iteration of the for loop. add one point.
        if(answer1 === answerKey[a]){
            correctAnswers++;
            score++
        }
        // same as above, but with second user reponse
        if(answer2 === answerKey[a])
        {
            correctAnswers++;
            score++;
        }
    };
    // congratulate user if they gave two correct answers
    if(correctAnswers === 2){
        alert('Congratulations! Those are correct');
        // if they were correct,the while loop counting attemps is closed and process jumps the next two lines and resumes outside the loop at NEW POINT
        break;
    }
    alert('Try again!');
    attempts++;
};
//****NEW POINT*****
alert('Your score is ' + score + 'out of 7');







