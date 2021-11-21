// FUNCTIONS

// function имяФункции() {
// ... код который содержится в функции
// }

// имяФункции()

// обявление функции
function showMessage() {
    // тело функции, выполнится при вызове
    console.log("Привет из функции!");
  }
  
  // вызов функции
showMessage();
  


function getSum() {
    const num1 = Number(prompt("Первое число:"));
    const num2 = Number(prompt("Второе число:"));
  
    const sum = num1 + num2;
  
    alert("Сумма: " + sum);
  }
  
// getSum()



function sayHello() {
    const message = "Hello";
    console.log(`message`, message);
  }
  
  sayHello();

// будет ошибка, так как переменная message видна только внутри функции
// console.log(`message`, message);

// Но функция в свою очередь имеет доступ к
// внешним переменным
let userName = "Nikita";

function getUserName() {
  console.log(`userName`, userName);

  if (!userName) {
    userName = prompt("Как тебя зовут?");
  }
}

getUserName();

// console.log(`userName`, userName)



let login = "user1";

function getLogin() {
  let login = "admin2";

  login = prompt("Введите логин");
  console.log(`login локальная`, login);
}

// getLogin();

console.log(`login глобальная`, login);





// Аргументы (параметры) функции

const number1 = 10;
const number2 = 20;
const a = 100;
const b = 200;

function add(a, b) {
  console.log(`a`, a);
  console.log(`b`, b);

  const sum = a + b;
  console.log(`sum`, sum);
}

add(1, 3);
add(number1, number2);
add(b, a);



// Возвращение результата из функции
// return

function getNumber() {
    return 5;
  }
  
const number = getNumber();
console.log(`number`, number);



function getFullUserName(name, surname) {
    const result = name + " " + surname;
    return result;
}

const fullName = getFullUserName("John", "Brown");
console.log(`fullName`, fullName);




function max(a, b) {
    return a > b ? a : b;
  }
  
console.log(`max(13, 12)`, max(13, 12))
  



function getSum(a, b) {
    console.log("Старт функции");
    if (!a || !b || typeof a !== "number" || typeof b !== "number") {
      console.log("Данные неверны!");
      console.log("Return");
      return;
    }
    console.log("Возвращаем сумму");
    return a + b;
  }
  
console.log("Перед вызовом функции");
const sumResult = getSum(1, 2);
console.log(`sumResult`, sumResult);
console.log("После вызова функции");




// Аргументы по умолчанию 

function showText(text = 'No text') {
    console.log(text)
}

showText('Hello, World');
showText()



function getChatText(text, name = 'Гость') {
    return name + ": " + text;
  }
  
console.log(
`getChatText("Привет", 'Никита')`,
getChatText("Привет", "Никита")
);
console.log(
`getChatText("Хай")`,
getChatText("Хай")
);



function calculate(operation, a = 0, b = 0) {
    console.log(`a`, a);
    console.log(`b`, b);
    console.log(`operation`, operation);
  
    if (operation === "plus") {
      return a + b;
    } else if (operation === "minus") {
      return a - b;
    }
  }
  
calculate('plus');




// ARROW FUNCTIONS 
// Стрелочные функции

// function sum(a, b) {
//   return a + b;
// }

// const sum = (a, b) => {
//   return a + b;
// };


const sum = (a, b) => a + b;

const res1 = sum(4, 5)
console.log(`res1`, res1)
