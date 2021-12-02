//  ARRAY METHODS

// slice()
// Получть подмассив по индексам
// [1, 2, 3] -> [1, 2], [1], [2]

const numbersArr = [0, 1, 2, 3, 4, 5];

// (старт - включительно, до - не включая)
const part1 = numbersArr.slice(0, 2);
const part2 = numbersArr.slice(3, 6);
const part3 = numbersArr.slice(1);

console.log(`part1`, part1);
console.log(`part2`, part2);
console.log(`part3`, part3);
console.log(`numbersArr`, numbersArr);




// splice()
// - удалить элементы
// - добавить элементы
// - заменить элементы

// arr.splice(start, deleteCount?, ...itemsToAdd ?)
// returns -> массив удаленных елементов

const animalsList = ["tiger", "lion", "zebra", "elephant", "rabbit", "wolf"];

console.log(`animalsList`, animalsList);
console.log(`animalsList.length`, animalsList.length);

// удаление
const removedAnimals = animalsList.splice(0, 2);

console.log(`removedAnimals`, removedAnimals);
console.log(`animalsList`, animalsList);
console.log(`animalsList.length`, animalsList.length);

const removedFromEnd = animalsList.splice(animalsList.length - 1);
console.log(`removedFromEnd`, removedFromEnd);
console.log(`animalsList`, animalsList);

// удаление со вставкой (замена)
const removed = animalsList.splice(2, 1, "bear", "snake");
console.log(`removed`, removed);
console.log(`animalsList`, animalsList);

// добавление без удаления
const removedEmpty = animalsList.splice(1, 0, "fox");

console.log(`removedEmpty`, removedEmpty);
console.log(`animalsList`, animalsList);




// concat()
// - объеденяет массивы
// - возвращает НОВЫЙ массив

const letters = ["a", "b", "c"];

const result = letters.concat(["d", "e"], ["f"]);
console.log(`letters`, letters);
console.log(`result`, result);


const a = [1, 2, 3];
const aClone = a.concat([]);  // MSV!

aClone.push(4);
console.log(`a`, a);
console.log(`aClone`, aClone)




// join(), split()
// - join  - соединяет массив в строку
// - split - разбивает строку на массив

const text = "Hello my name is Nikita";
const symbols = text.split("");
const words = text.split(" ");

console.log(`symbols`, symbols);
console.log(`words`, words);


let resultText;

resultText = symbols.join("");
console.log(`resultText`, resultText);

resultText = words.join(" ");
console.log(`resultText`, resultText);



const maskCreditCard = (cardNumber) => {
    const MASK = "****";
    const groups = [];
  
    for (let i = 0, j = 1; i < cardNumber.length; i += 4, j++) {
      if (j === 2 || j === 3) {
        groups.push(MASK);
        continue;
      }
  
      const group = cardNumber.slice(i, i + 4);
      groups.push(group);
    }
  
    console.log(`groups`, groups);
    const result = groups.join(" ");
    return result;
  };
  
const masked = maskCreditCard("4111111111111111");
console.log(`masked`, masked);



// includes() и indexOf()

// includes - проверяет наличие элемента в массиве
// indexOf  - возвращает индекст искомого элемента в массиве

const numbers = [1, 2, 3];

console.log(`numbers`, numbers)
console.log(`numbers.includes(1)`, numbers.includes(1));
console.log(`numbers.includes(5)`, numbers.includes(5));


const names = ["peter", "chuck", "john"];

console.log(`names`, names)
console.log(`names.indexOf('peter')`, names.indexOf("peter"));
console.log(`names.indexOf('sam')`, names.indexOf("sam"));




const replaceValue = (arr, target, replacer) => {
    if (!arr.includes(target)) {
      return arr;
    }
  
    const res = arr.concat([]);
    const index = res.indexOf(target);
  
    // console.log(`index`, index)
  
    res.splice(index, 1, replacer);
  
    return res;
  };
  
const test = [1, 2, 3];
const resultOfReplacing = replaceValue(test, 2, 5);
console.log(`test`, test)
console.log(`resultOfReplacing`, resultOfReplacing)





// Callback functions

const callback = (text) => {
    console.log(text);
  };
  
callback();

const testFunction = (cb, x) => {
    console.log(`cb`, cb);
    cb(x);
  };
  
testFunction(callback, 'Hello from CallBack')
  


const makeOperation = (num1, num2, callback) => {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      console.log("Invalid numbers");
  
      return 0;
    }
  
    return callback(num1, num2);
  };
  
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  
  const res1 = makeOperation(1, 2, add);
  const res2 = makeOperation(4, 2, subtract);
  const res3 = makeOperation(5, 5, function (a, b) {
    return a * b;
  });
  const res4 = makeOperation(10, 2, (a, b) => a / b);
  
console.log(`res1`, res1);
console.log(`res2`, res2);
console.log(`res3`, res3);
console.log(`res4`, res4);




// forEach - перебирает массив, вызывая
//           колбек для каждого елемента,
//           ничего не возвращает
// map     - заменяет каждый текущий елемент
//           массива результатом работы
//           (возвращаемым значением) колбека.
//           Возвращает новый [], не мутируя старый
// filter  - возвращает новый [] из тех элементов,
//           для которых коллбек вернул true или
//           truthy значение
// find    - ищет элемент в массиве, возвращает
//           первый элемент для которого результат
//           колбека будет true
// some    - возвращает true, если хотя бы для
//           одного элемента результат выполнения
//           колбека был true, в противном случае
//           возвращает false
// every   - возвращает true, если хотя бы для
//           всех элементов результат выполнения
//           колбека был true, в противном случае
//           возвращает false
// sort    - соритирует исходный массив и возращает
//           новый отсортированный. Принимает опциональный
//           аргумент - колбек, который в свою очередь
//           принимает 2 аргемента: текущий и следующий
//           элементы массива. Без аргумента сортирует
//           по методу строк, то есть сравнивая их Юникоды
// reduce  - метод, который позволяет сжать массив до
//           одного значения.

// forEach();
// - вызывает коллбек для каждого елемента
// - ничего не возращает

const defaultCallback = (item, index, array) => {
    console.log(`item`, item);
    console.log(`index`, index);
    console.log(`array`, array);
  };
  
const logger = (item, index, arr) => {
    console.log(`In array [${arr}] on position ${index}: ${item}`);
  };
  
const numbersList = [1, 2, 3, 4, 5];

numbersList.forEach(logger)




// map();
// - возвращает новый массив
// - заменяет каждый елемент массива резульатом
//   выполнения колбека

const digits = [10, 20, 30];
const multiplied = digits.map((digit) => digit * 10);
console.log(`digits`, digits)
console.log(`multiplied`, multiplied);

const people = [
  {
    name: "peter",
    surname: "brown",
  },
  {
    name: "sam",
    surname: "Peterson",
  },
  {
    name: "Ann",
    surname: "black",
  },
  {
    name: "Antony",
    surname: "Hopkins",
  },
];

const formattedNames = people.map((person) => {
  const name = person.name[0].toUpperCase() + person.name.slice(1);
  const surname = person.surname[0].toUpperCase() + person.surname.slice(1);

  return `${name} ${surname}`;
});

console.log(`formattedNames`, formattedNames);




// filter()
// - фильтрует массив
// - оставляет в массиве только те значения,
//   для которых результат выполнения колбека - true

const digitsList = [-1, 2, 4, -2, 0, 1, 11, -6];
const positiveNumbers = digitsList.filter((digit) => digit > 0);
console.log(`positiveNumbers`, positiveNumbers);


const randomValues = ["", true, false, [1, 2], 0, 10, "test", null];
// const truthyValues = randomValues.filter((item) => item);
// const truthyValues = randomValues.filter((item) => Boolean(item));
const truthyValues = randomValues.filter(Boolean);

console.log(`truthyValues`, truthyValues);




// find()
// - ищет елемент в массиве
// - возвращает первый найденый елемент, для которого
//   фуккция колблек вернула true

const users = [
    { id: 7, username: "admin" },
    { id: 12, username: "carl777" },
    { id: 51, username: "XXX" },
    { id: 32, username: "jack" },
  ];
  
const desiredUserId = 51;
  
const user = users.find((user) => user.id === desiredUserId);
console.log(`user`, user);

const userName = users.find((user) => user.id === desiredUserId).username;
console.log(`userName`, userName);




// some() and every()

// - возращают true если для хотя бы одного (every -  для всех)
//   колбек вернул true

const hasTruthyValues = randomValues.some(Boolean);
const isAllValuesTruthy = randomValues.every(Boolean);

console.log(`randomValues`, randomValues);
console.log(`hasTruthyValues`, hasTruthyValues);
console.log(`isAllValuesTruthy`, isAllValuesTruthy);



const studentMarks = [
    {
      subject: "Math",
      mark: 5,
    },
    {
      subject: "Literature",
      mark: 5,
    },
    {
      subject: "Arts",
      mark: 5,
    },
    {
      subject: "Computer Science",
      mark: 4,
    },
  ];
  
  const isExcellentStudent = (marks) => {
    return marks.every((item) => item.mark === 5);
  };
  
  const hasBadMarks = (marks) => {
    return marks.some((item) => item.mark <= 2);
  };
  
console.log(`isExcellentStudent(marks)`, isExcellentStudent(studentMarks));
console.log(`hasBadMarks(marks)`, hasBadMarks(studentMarks));




// sort()

// Принимает в себя опциональный колбек, который принимает в себя два
// аргумента, текущий и следующий элементы массива.

// compareFunction(a, b) > 0   -> a, b
// compareFunction(a, b) === 0 -> a, b
// compareFunction(a, b) < 0   -> b, a

const fruits = ["бананы", "арбузы", "Вишня"];
// fruits.sort();
fruits.sort((a, b) => a.localeCompare(b));

console.log(`fruits`, fruits);


const scores = [21, 1, 2, 10];

// scores.sort();

// scores.sort((a, b) => {
//   console.log(`a`, a);
//   console.log(`b`, b);

//   // return a > b ? 1 : -1;
//   return a - b
// });

scores.sort((a, b) => a - b);

console.log(`scores`, scores);



// reduce()
// Накапливает отпереденное значение на каждой итерации, и в результате его возвращает. Принимает
// в себя коллбек, который принмиает в себя два аргумента:
// - аккамулятор
// - текущий елемент массива
// И необязательный агрумент, стартовое значение аккамуляторв. Если этот аругмент не передан, то
// стартовым значением станет первый елемент массива.

const salaries = [100, 200, 300, 400, 500, 600];

const salariesTotal = salaries.reduce((acc, value) => {
  console.log(`acc`, acc);
  console.log(`value`, value);
  acc += value;

  return acc;
}, 0);

console.log(`salariesTotal`, salariesTotal)



const exchangeRate = 27;

// {
//   uahTotal: 0
//   usdTotal: 0
// }

const salariesData = salaries.reduce(
  (acc, value) => {
    console.log(`acc`, acc);
    console.log(`value`, value);
    acc.uahTotal += value * exchangeRate
    acc.usdTotal += value

    return acc;
  },
  {
    uahTotal: 0,
    usdTotal: 0,
  }
);

console.log(`salariesData`, salariesData);




// Chaining методов массива


const products = [
    {
      name: 'Potato',
      price: 3,
      quantity: 10,
      isOnSale: true,
    },
    {
      name: 'Milk',
      price: 7,
      quantity: 12,
      isOnSale: true,
    },
    {
      name: 'Bread',
      price: 5,
      quantity: 1,
      isOnSale: false,
    },
    {
      name: 'Meat',
      price: 11,
      quantity: 4,
      isOnSale: true,
    },
    
  ] 
  
  // - подготовить цену к показу пользователю 3 -> 3.00
  // - отфильтровать только те товары, которые на распродаже
  // - отсортировать по количесву
  
  const productsResult = products
    .filter((product) => product.isOnSale)
    .map(product => {
      product.price = product.price + '.00'
  
      return product
    }) 
    .sort((a, b) => a.quantity - b.quantity);
  
  console.log(`productsResult`, productsResult);
  
  [1, 2, 3]
    .map(n => n + 1)
    .forEach(n => console.log(`n`, n))
  // [2, 3, 4]