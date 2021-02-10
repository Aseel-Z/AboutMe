'use strict';

let firstName = prompt('Dear visitor, What is your name? :)')
alert('Hello ' + firstName + '! ' + 'Welcome to the guessing game! ' + 'Ready for the fun?');

let score = 0

let hobby = prompt('Do I like reading?(yes/no)')
hobby = hobby.toLowerCase()
function qOne (hobby){
    
    if (hobby == 'yes') {
        score = score + 1;
        alert('Reading is actually one of my hobbies!');
    } else if (hobby == 'no') {
        alert('You didnt get it right :P')
    }
}
// console.log( 'My Hobby is reading? ',hobby)
qOne();

let programmingLanguage = prompt('C++ is the first programming I was exposed to at uni?(yes/no)')
    programmingLanguage = programmingLanguage.toLowerCase()
function qTwo (programmingLanguage){
        if (programmingLanguage == 'yes') {
        score = score + 1;
        alert('C++ is actually the first programming I was exposed to at uni!');
    } else if (programmingLanguage == 'no') {
        alert('You didn\'t get it right :P')
    }
}
// console.log('C++ is the first programming I was exposed to at uni?',programmingLanguage)
qTwo(programmingLanguage);

let language = prompt('Do I speak English?(yes/no)')
    language = language.toLowerCase()
function qThree (language){
        if (language == 'yes') {
        score = score + 1;
        alert('English is my favorite second language.');
    } else {
        alert('You didn\'t get it right :P');
    }
}
// console.log('Do I speak English?',language)
qThree(language);

let cooking = prompt('Am I a good cook?(yes/no)');
    cooking = cooking.toLowerCase();
function qFour (cooking){
        if (cooking == 'yes') {
        score = score + 1;
        alert('I am bad cook, unfortunately. Working on my cooking skills though ;)');
    } else if (cooking == 'no') {
        alert('You didn\'t get it right :P')
    }    
}
// console.log('Am I a good cook?',cooking)
qFour(cooking);

let coffee = prompt('Am I a Coffee person?(yes/no)');
    coffee = coffee.toLowerCase();
function qFive(coffee){
        if (coffee == 'yes') {
        score = score + 1;
        alert('I am a 100% Coffee. You can buy me with some good Esspresso ;)');
    } else if (coffee == 'no') {
        alert('You didn\'t get it right :P');
    }
}
// console.log('Am I a Coffee person?',coffee)
qFive(coffee);

let siblingsNo = prompt('Guess! How many siblings do I have?(Hint: pick a number from 0 to 10)');
for (let i = 0; i < 3; i++) {
        if (siblingsNo == 6) {
            score = score + 1;
            alert('Good hunch!!'); 
            break;
        } 
          else if (siblingsNo >=0 && siblingsNo <= 3) {
            alert('OOPS! too low');
            siblingsNo = prompt('Guess! How many siblings do I have?(Hint: pick a number from 0 to 10)');
        } else if (siblingsNo >= 4 && siblingsNo <= 8 ) {
            alert('close enough');
            siblingsNo = prompt('Guess! How many siblings do I have?(Hint: pick a number from 0 to 10)');
        } else if (siblingsNo >= 9 && siblingsNo <= 10 ) {
            alert('OOPS! too high');
            siblingsNo = prompt('Guess! How many siblings do I have?(Hint: pick a number from 0 to 10)');
        }
    }
alert('want the correct guess? I have 6 siblings!');


let genreGuess = prompt('What is my favorite movie genres?')
let movie = ['drama','biography','history']
// let attempt = 0

// function qSeven(genreGuess){ 
    // while (attempt<5) {
        for (let i = 0; i < movie.length; i++) {
           if (genreGuess === movie[i]) {
            score++;
            break; 
           } else {
            // attempt++;
            genreGuess= prompt('What is my favorite movie genres?')
           }
        }
    // }
    alert('My favorite movie genres are '+ movie)
// }
// qSeven(genreGuess);

alert('Goodbye ' + firstName + ' :) Your Final Score is: ' + score + ' out of 7')  
alert ('Thank you for your visit!')