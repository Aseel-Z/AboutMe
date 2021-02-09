'use strict';
let firstname = prompt('Dear visitor, What is your name? :)')
alert('Hello ' + firstname + '! ' + 'Welcome to the guessing game! ' + 'Ready for the fun?')
let score = 0

let hobby = prompt('Do I like reading?(yes/no)')
hobby = hobby.toLowerCase()
// console.log( 'My Hobby is reading? ',hobby)
if (hobby == 'yes') {
    score = score + 1;
    alert('Reading is actually one of my hobbies!');
} else if (hobby == 'no') {
    alert('You didnt get it right :P')
}
let programminglanguage = prompt('C++ is the first programming I was exposed to at uni?(yes/no)')
programminglanguage = programminglanguage.toLowerCase()
// console.log('C++ is the first programming I was exposed to at uni?',programminglanguage)
if (programminglanguage == 'yes') {
    score = score + 1;
    alert('C++ is actually the first programming I was exposed to at uni!');
} else if (programminglanguage == 'no') {
    alert('You didnt get it right :P')
}

let language = prompt('Do I speak English?(yes/no)')
language = language.toLowerCase()
// console.log('Do I speak English?',language)
if (language == 'yes') {
    score = score + 1;
    alert('English is my favorite second language.');
} else {
    alert('You didnt get it right :P');
}

let cooking = prompt('Am I a good cook?(yes/no)');
cooking = cooking.toLowerCase();
// console.log('Am I a good cook?',cooking)

if (cooking == 'yes') {
    score = score + 1;
    alert('I am bad cook, unfortunately. Working on my cooking skills though ;)');
} else if (cooking == 'no') {
    alert('You didnt get it right :P')
}

let coffee = prompt('Am I a Coffee person?(yes/no)');
coffee = coffee.toLowerCase();
// console.log('Am I a Coffee person?',coffee)

if (coffee == 'yes') {
    score = score + 1;
    alert('I am a 100% Coffee. You can buy me with some good Esspresso ;)');
} else if (coffee == 'no') {
    alert('You didnt get it right :P');
}


for (let i = 0; i < 4; i++) {
    let numberofsiblings = prompt('Guess! How many siblings do I have?(Hint: pick a number from 0 to 10)');
    if (numberofsiblings == 6) {
        score = score + 1;
        alert('Good hunch!!'); 
        break;
    } 
      else if (numberofsiblings >=0 && numberofsiblings <= 3) {
        alert('OOPS! too low');
    } else if (numberofsiblings >= 4 && numberofsiblings <= 8 ) {
        alert('close enough');
    } else if (numberofsiblings >= 9 && numberofsiblings <= 10 ) {
        alert('OOPS! too high');
    }
}
alert('want the correct guess? I have 6 siblings!')

let movie = ['drama','biography','history']
let attempt = 0
let genreguess = prompt('What is my favorite movie genres?')
while (attempt<5) {
  
   for (let i = 0; i < movie.length; i++) {
       if (genreguess == movie[i]) {
        score++;
        break; 
       } else {
        attempt++;
        let genreguess = prompt('What is my favorite movie genres?')
       }
    }
}

alert('My favorite movie genres are'+ movie)
alert('Goodbye ' + firstname + ' :) Your Final Score is: ' + score + ' out of 7')  
alert ('Thank you for your visit!')