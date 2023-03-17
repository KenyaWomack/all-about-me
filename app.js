'use strict';
let score = 0;

// change
let userName = prompt('What is your name?').toLowerCase();
function lab4(){
  console.log(userName);

  alert('Hello,' + userName);

  let myAge = prompt('Am I 42? Type yes or no').toLowerCase();
  console.log(myAge);
  if (myAge === 'yes') {
    alert(userName + 'You are incorrect. I just had a birthday and I am 43!');

  } else if (myAge === 'no') {
    alert('You are correct! I am 43!').toLowerCase();
    score++;
  }

  let QuestionTwo = prompt('Do I like dogs? Type yes or no').toLowerCase();
  console.log(QuestionTwo);
  if (QuestionTwo === 'yes') {
    alert(userName + 'You are correct!');
    score++;

  } else if (QuestionTwo === 'no') {
    alert('You are not correct!');
  }

  let QuestionThree = prompt('Do I like pink? Type yes or no').toLowerCase();
  console.log(QuestionThree);
  if (QuestionThree === 'yes') {
    alert(userName + 'You are correct!');
    score++

  } else if (QuestionThree === 'no') {
    alert('You are not correct!');
  }

  let QuestionFour = prompt('Do I have kids? Type yes or no').toLowerCase();
  console.log(QuestionFour);
  if (QuestionFour === 'yes') {
    alert(userName + 'You are correct!');
    score++;

  } else if (QuestionFour === 'no') {
    alert('You are not correct!');
  }

  let QuestionFive = prompt('Do I like computer science? Type yes or no').toLowerCase();
  console.log(QuestionFive);
  if (QuestionFive === 'yes') {
    alert(userName + 'You are correct!');
    score++;

  } else if (QuestionFour === 'no') {
    prompt('You are not correct!');
  }



  let attempts = 4;

  let myKids = 7;

  while (attempts > 0) {
    let QuestionSix = prompt('How many kids do I have?').toLowerCase();
    console.log(QuestionSix);
    if (parseInt(QuestionSix) === myKids) {
      alert('Great job! That is correct!');
      score++;
      break;
    }

    if (QuestionSix > myKids) {
      alert('Oops, too high, please try again');
    }

    else if (QuestionSix < myKids) {
      alert('Oops, too low, please try again');
    }
    attempts--;
  }

  if (attempts === 0) {
    alert('Good try. The answer is 7!');
  }

  let attempts2 = 6;

  let cars = [
    'buick',
    'bmw',
    'volkswagon',
    'aston martin',
    'cadillac',
    'ford'
  ];
  let correctGuess = false;
  while (attempts2 > 0) {
    let QuestionSeven = prompt('What is my favorite car?').toLowerCase();
    console.log(QuestionSeven);
    for (let i = 0; i < cars.length; i++) {
      if (QuestionSeven === cars[i]) {
        alert('Grest job! You figured it out!');
        score++;
        correctGuess = true;
        break;
      }
    }
    attempts2--;
    if (correctGuess === true) {
      break;
    }
  }
  if (attempts2 === 0) {
    ('You gave it your best shot! The correct answer is Aston Martin');
  }

}
lab4();


alert('Thank you for playing this game with me ' + userName);
alert('Your final score is '+ score);
