'use strict';

let userName = prompt('What is your name?').toLowerCase();
console.log(userName);

alert('Hello,' + userName);

let myAge =prompt('Am I 42? Type yes or no').toLowerCase();
console.log(myAge); 
if (myAge === 'yes') {
  alert(userName + 'You are incorrect. I just had a birthday and I am 43!');

} else if (myAge === 'no') {
  let myAge = alert('You are correct! I am 43!').toLowerCase();
}

let QuestionTwo =prompt('Do I like dogs? Type yes or no').toLowerCase();
console.log(QuestionTwo); 
if (QuestionTwo === 'yes') {
  alert(userName + 'You are correct!');

} else if (QuestionTwo === 'no') {
  let QuestionTwo = alert('You are not correct!');
}

let QuestionThree =prompt('Do I like pink? Type yes or no').toLowerCase();
console.log(QuestionThree); 
if (QuestionThree === 'yes') {
  alert(userName + 'You are correct!');

} else if (QuestionThree === 'no') {
  let QuestionThree = alert('You are not correct!');
}

let QuestionFour =prompt('Do I have kids? Type yes or no').toLowerCase();
console.log(QuestionFour); 
if (QuestionFour === 'yes') {
  alert(userName + 'You are correct!');

} else if (QuestionFour === 'no') {
  let QuestionFour = alert('You are not correct!');
}

let QuestionFive =prompt('Do I like computer science? Type yes or no').toLowerCase();
console.log(QuestionFive); 
if (QuestionFive === 'yes') {
  alert(userName + 'You are correct!');

} else if (QuestionFour === 'no') {
  let QuestionFive = prompt('You are not correct!');
}
