// Функции-конструкторы, new

// - функции конструкторы прянято именовать
//   c большой буквы;
// - функция становится функцией-конст., если она
//   вызвана с использованием ключевого слова new;
// - функция конструктор не может быть стрелочной,
//   так как она не имеет собственного this;

const date = new Date()
console.log(`date`, date)

// function Person() {}

// const person = new Person();
// console.log(`person`, person);

const exampleList = document.querySelectorAll("div");
const exampleCollection = document.getElementsByClassName("test");

console.log(`exampleList`, exampleList);
console.log(`exampleCollection`, exampleCollection);



function Person(name, age) {
  // this = {}
  this.name = name;
  this.age = age;
  this.isActive = true;
  // return this
}

const person = new Person('Nikita', 25);

console.log(`person`, person)



// const userAdmin = {
//   name: "Peter",
//   role: "admin",
// };

// const userClient = {
//   name: "Jack",
//   role: "client",
// };

// const userGuest = {
//   name: "Sam",
//   role: null,
// };

function User(name, role = null) {
  this.name = name;
  this.role = role;
}

const userAdmin = new User("Peter", "admin");
const userClient = new User("Jack", "client");
const userGuest = new User("Sam");

console.log(`userAdmin`, userAdmin);
console.log(`userClient`, userClient);
console.log(`userGuest`, userGuest);



function Animal(name) {
    this.name = name;
    this.sayHi = () => {
      console.log(`Hello! I am ${this.name}`);
    };
  }
  
const rabbit = new Animal('Rabbit');
const cow = new Animal('Cow');

rabbit.sayHi();
cow.sayHi()

const test = new Animal("Test");
console.log(`test`, test);



function DumbCalc(num1, num2) {
  this.a = num1;
  this.b = num2;

  this.add = function () {
    return this.a + this.b;
  };
}

const calc = new DumbCalc(1, 2);
const result = calc.add();
console.log(`result`, result);



// Advanced this

// - bind  - возвращает новую функцию с опеределенным
//           контекстом (принимает this)
// - call  - вызывает функцию с опреденным контекстом
//           на месте (принимает this + множество аргументов)
// - apply - вызывает функцию с опреденным контекстом
//           на месте (принимает this + массив аргументов)

const user = {
    age: 25,
    login: "user1",
  };
  
function greeting() {
console.log(`this`, this);
console.log(`Hello, ${this.login}. You are ${this.age} years old`);
}

greeting();

user.greet = greeting;

user.greet()



const userGreeting = greeting.bind(user);

console.log(`user`, user);
userGreeting();




function countBirthYear(currentYear) {
    console.log(`Your bitrh year is approximately ${currentYear - this.age}`);
  }
  
countBirthYear.call(user, 2021);
countBirthYear.apply(user, [2021])






// С помощью функции конструктора создать класс
// Калькулятор для получения суммы.
// 1. Конструктор должен принимать в себя 3 аргумента:
//    - два инпута, в которые мы будем вводить числа
//    - елемент, в который должен быть отренеден результат
// 2. При вводе числа в любой из инпутов автоматически должна
//    пересчитываться сумма
// 3. Должен быть реализован метод, который может вернуть
//    текущую сумму  в формате "Текущая сумма равна: N"

function Calculator(options) {
    const { inputA, inputB, resultElement } = options;
    this.inputA = inputA;
    this.inputB = inputB;
    this.resultElement = resultElement;
    this.sum = 0;
    this.handleInput = handleInput.bind(this)
  
    this.calculate = function () {
      this.sum = Number(this.inputA.value) + Number(this.inputB.value);
    };
  
    this.renderSum = function () {
      this.resultElement.innerText = this.sum;
    };
  
    this.getSum = function () {
      return `Текущая сумма равна: ${this.sum}`;
    };
  
    this.inputA.addEventListener("input", this.handleInput);
    this.inputB.addEventListener("input", this.handleInput);
  
    function handleInput() {
      console.log(`this`, this);
  
      this.calculate();
      this.renderSum();
    }
  }
  
  const inputA = document.getElementById("num1");
  const inputB = document.getElementById("num2");
  const resultElement = document.getElementById("result");
  const getResultBtn = document.getElementById("get-result");
  
  const calculator = new Calculator({
    inputA,
    inputB,
    resultElement,
  });
  