// DATA TYPES

console.log(typeof 123);
console.log(typeof "test");


let example;
console.log("declare", typeof example);


example = 10;
console.log("init with number", typeof example);

example = "abc";
console.log("init with string", typeof example);

// PRIMITIVE:
// number
// string
// boolean
// null
// undefined

// BigInt
// Symbol

// REFERENCE (COMPLEX):
// Object
// function*


// NUMBER
const number = 12;
console.log("typeof number", typeof number);

const decimalNumber = 0.01;
const PI = 3.14;


const num1 = 1;
const num2 = 2;

const result = num1 + num2;
console.log(`result`, result);


// STRING
// " "
// ' '
// ` `


const greeting = "Hello";
const space = " ";
const name = "Anna";

const fullGreeting = greeting + space + name;
console.log(`fullGreeting`, fullGreeting);


const str1 = "2";
const str2 = "2";

const res = str1 + str2;
console.log(`res`, res);


// BOOLEAN
// true
// false



const isUserOnline = false;
const hasPermission = true;

const comparisonResult = 5 > 2;
console.log(`comparisonResult`, comparisonResult);



const isLinkVisited = true;

if (isLinkVisited) {
  console.log("Ссылка посещалась");
} else {
  console.log("Ссылка НЕ посещалась");
}




// UNDEFINED
// undefined 

let user;
console.log(`typeof user`, typeof user);

let userName = undefined;
console.log(`typeof userName`, typeof userName);



// NULL 

let userSurname = null;
// ...
userSurname = 'Brown';

console.log(`typeof userSurname`, typeof userSurname);



const element = document.querySelector('.test');

console.log(`element`, element)

