'use strict';
let firstname = prompt('Dear visitor, What is your name? :)')
alert('Hello '+ firstname + '! ' + 'Welcome to the guessing game! '+ 'Ready for the fun?')

let hobby = prompt('Do I like reading?(yes/no)')
hobby = hobby.toLowerCase()
// console.log( 'My Hobby is reading? ',hobby)
if (hobby=='yes') {
 alert('Reading is actually one of my hobbies!')  
} else if (hobby=='no') {
    alert('You didnt get it right :P')
} 


let programminglanguage = prompt('C++ is the first programming I was exposed to at uni?(yes/no)')
programminglanguage = programminglanguage.toLowerCase()
// console.log('C++ is the first programming I was exposed to at uni?',programminglanguage)
if (programminglanguage=='yes') {
    alert('C++ is actually the first programming I was exposed to at uni!')
} else if (programminglanguage=='no') {
    alert('You didnt get it right :P')   
} 


let language = prompt('Do I speak English?(yes/no)')
language = language.toLowerCase()
// console.log('Do I speak English?',language)
if (language == 'yes') {
    alert('English is my favorite second language.')
} else {
    alert('You didnt get it right :P')   
}

let cooking = prompt('Am I a good cook?(yes/no)')
cooking = cooking.toLowerCase()
// console.log('Am I a good cook?',cooking)

if (cooking=='yes') {
    alert('I am bad cook, unfortunately. Working on my cooking skills though ;)')
} else if (cooking=='no') {
    alert('You didnt get it right :P')    
}

let coffee = prompt('Am I a Coffee person?(yes/no)')
coffee = coffee.toLowerCase()
// console.log('Am I a Coffee person?',coffee)

if (coffee=='yes') {
    alert('I am a 100% Coffee. You can buy with some good Esspresso ;)')
} else if (coffee=='no') {
    alert('You didnt get it right :P') 
}     
alert('Goodbye '+ firstname + '! Thank you for your visit!')  