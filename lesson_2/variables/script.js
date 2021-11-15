// Hello world!

// Объявление переменной
let firstVariable;

// инициализвация переменной (присваиваем переменной значение)
firstVariable = "Hello World!";
console.log(firstVariable);

// Объявление сразу с инициализацией
let userName = "Nikita";
console.log(userName);

// Можно объявить сразу несколько переменных за раз, через запятую
let width, height, length;

// Либо нескольлко переменных за раз сразу с инициализацией
let maxSpeed = 200,
  minSpeed = 40;

// Но такая запись в примерах выше плохо влияет на читабельность кода, по этому
// если нужно объявить сразу несколько переменных, используйте обычную запись
// и объявляйте их одну за одной
let button = "button";
let form;
let input;

// Имя переменной уникально и не может повторяться в рамках одной программы
let myHobby = "fishing";
// let myHobby = "music";

console.log(myHobby);

// Значение переменной, объявленой с помошью let можно переопределить
let childAge = 12;
// ...
childAge = 13;
console.log(childAge);

// В одну переменную можно записать значение другой переменной
let rectangleWidth = 200;
let rectangleHeight = rectangleWidth;

// Именование переменных: 
let user;
let userSurname;
let dinosaurAge; 
let info1; // лучше не использовать числа в названиях переменных

// названия переменных case-sensetive, то есть чуствительны к регистру
let operationResult;
let operationresult;

// название переменной допускает испольщование специмволов $ и _
let $user;
let _log;

// Недопустисмые названия переменных:
// let 1user;
// let pet name;
// let dog-breed;

// Нежелательные названия переменных, ошибкой не является, но и использовать 
// крайне не рекомендуется: 
let приветствие = 'Привет!';
console.log(приветствие);
let vozrast;
let moyNikneim;

// Использование зарезервированных слов приведет к ошибке:
// (список зарезервированных слов есть в материалах к уроку)
// let let;
// let const;
// let for;

// const empty;

// Константы, которые содеждат статические значения
const PI = 3.14;
const RED_COLOR = '#ff0000';

// Объявление переменной с помощью var:
oldBoy = 'John';
console.log(oldBoy)

var oldBoy = 'Jack';
oldBoy = 'Peter';

console.log(oldBoy);


// console.log(clientAge);

// Немного про область видимости переменных: 
let clientAge = 42;


if (true) {
    let a = 10;
}

if (true) {
var b = 12;
}

// console.log(a);
console.log(b);


function example() {
var c = 1;
}

// console.log(c);



// shoppingCart
// planetName
// userName 

// sC
// cart
// values
// data 

let age = 50;

age = 'Samuel';

age = 174;
