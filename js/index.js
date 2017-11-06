//alert('Hello World!');
//console.log('Hello World!');

var helloWorld = 'Hello World!';



const userName = prompt('Enter your name');


prn(helloWorld + '<br>' + userName);

let age = Number(prompt('Your age'));
prn('You are ' + checkAge(age));
age = age + 1;
prn('Next year you will be: ' + checkAge(age));


function prn(val){
    document.write('<br>' + val);
}
function checkAge(age){
 if ((age >= 18)&&(age <= 60))  {
     return 'Adult';
 } else if (age < 18){
     return 'Child';
 }
 return 'Old';
}




//Data types:
const num = 42; // Number, Infinity, NaN
const str = '<p>Some text</p>'; //String
const bool = true; // Boolean - true, falce

const undef = undefined; //underfined
const n = null; //null
const obj = {}; //Object
const sym = Symbol(); //Symbol