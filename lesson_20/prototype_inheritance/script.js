// Prototypes

// - boolean
// - number
// - string
// - null
// - undefined
// - object
// - symbol
// - BigInt

const testFn = () => {};
console.log(`typeof testFn`, typeof testFn);



// instanceof

function A() {}
const a = new A();

console.log(`a instanceof A`, a instanceof A);
console.log(`testFn instanceof Object`, testFn instanceof Object)



const str = new String("test");
const num = new Number(42);

console.log(`str`, str);
console.log(`num`, num);


// __proto__

console.log(`str.__proto__`, str.__proto__);



const user = {
    isOnline: true,
};

const admin = {
hasPermissions: true,
};

admin.__proto__ = user;

console.log(`admin.isOnline`, admin.isOnline);



// Значение this при использовании прототипа

const animal = {
    eat() {
        this.isHungry = false;
    },
};
  
const rabbit = {
    isHungry: true,
    __proto__: animal,
};
  
console.log(`rabbit`, rabbit);
rabbit.eat();
console.log(`rabbit`, rabbit);


console.log(`rabbit.hasOwnProperty('eat')`, rabbit.hasOwnProperty("eat"));


for (let key in rabbit) {
  const isOwn = rabbit.hasOwnProperty(key);
  if (isOwn) {
    console.log(`propery is own`, key);
  } else {
    console.log(`propery is inherited`, key);
  }
}


Object.keys(rabbit).forEach((key) => {
  console.log(`key`, key);
});




// Function.prototype

function A() {}
console.log(`A.prototype`, A.prototype);


A.prototype.number = 1;
const a1 = new A();
console.log(`a1`, a1);
console.log(`a1.number`, a1.number);

A.prototype.sayHello = function () {
  console.log("Hi! I am function from [[Prototype]].");
};
a1.sayHello();


const b = new A();
console.log(`b.number`, b.number);
b.__proto__.number = 2;
console.log(`b.number`, b.number);
b.constructor.prototype.number = 3;
console.log(`b.number`, b.number)



function User(name) {
    this.name = name;
}

User.prototype.sayHello = function () {
    console.log(`Hello! My name is ${this.name}`);
};

const person1 = new User("Pablo");
const person2 = new User("Sam");

person1.sayHello();
person2.sayHello();




// Встроенные прототипы

Date.prototype.setHours = function () {
  return "AAAA";
};

const date = new Date();

const test = date.setHours(10);
console.log(`test`, test)
console.log(`date`, date);



// [4, 5, 6]
// [5, 4, 6]

Array.prototype.shuffle = function () {
    for (let i = 0; i < this.length; i++) {
        const newIndex = Math.floor(Math.random() * (i + 1));
        const temp = this[i];
        this[i] = this[newIndex];
        this[newIndex] = temp;
    }
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.shuffle();
console.log(`arr`, arr)
