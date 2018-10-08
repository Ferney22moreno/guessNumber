'use strict';
/*console.log('hey');
alert("I’m JavaScript!");*/

// [1,2,3,4,5].forEach(alert);

// let name = 'Ferney',
//     age = 27,
//     message = 'hey';

// console.log('my name is ' + name, age, message);

// let admin;
// let name;
//
// name = "John";
// admin = name;
//
// alert(admin);
//
// let ourPlanetName = 'Earth';
// let currentUserName = 'Ferney';


// var secret;
// do{
//   secret = prompt("What is the secret password?");
// } while ( secret !== "sesame" );
// document.write("You know the secret password. Welcome.");

const guessNumber = number => {
  let num = Math.floor(Math.random() * number) + 1;
  return num;
}

let numberGuess = guessNumber(10);
let numberTimes = 0;
let checkValue = false;
let timesToTry = 5;
document.write('<h3>I´m thinking in a number between 1 and 10, can you guess it?</h3>');

let html = '';
let discStyle = "color:white; background:black; width:20px; height:20px; margin:15px; padding:10px; text-align:center; border-radius: 20px; cursor: pointer;";

for(let i = 0; i <= 10; i++){
  html += `<div> ${i} </div>`;
}

document.write(html);

let elements = document.querySelectorAll('div');
console.log(numberGuess);
for( let s = 0; s < elements.length; s++ ){

    let eachElement = elements[s];
    eachElement.setAttribute('style', discStyle);
    eachElement.addEventListener('click', function(){
      let contentNumber = this.textContent;
      do{
        numberTimes++;
        timesToTry--;
        if(parseInt(contentNumber) === numberGuess){
            document.write(`<h2>you guessed the number, it was ${numberGuess}</h2>`);
            document.write(`<h3>you needed ${numberTimes} times to guess the number</h3>`);
        }else{
          alert(`try again! you have ${timesToTry} opportunities left`);
        }
        checkValue = true;
      } while(!checkValue);

      if(numberTimes >= 5 && parseInt(contentNumber) !== numberGuess){
        document.write(`<h2>sorry, you lost the game, you didn't guess the number, it was ${numberGuess}</h2>`);
      }
    });
}








// function getRandomNumber( upper ) {
//   var num = Math.floor(Math.random() * upper) + 1;
//   return num;
// }
//
// var randomNumber = getRandomNumber(15);
// var guess;
// var guessCount = 0;
// var correctGuess = false;
//
// do {
//   guess = prompt('I am thinking of a number between 1 and 15. What is it?');
//   guessCount += 1;
//   if (parseInt(guess) === randomNumber) {
//     correctGuess = true;
//   }
// } while ( ! correctGuess )
//
// document.write('<h1>You guessed the number!</h1>');
// document.write('It took you ' + guessCount + ' tries to guess the number ' + randomNumber);
