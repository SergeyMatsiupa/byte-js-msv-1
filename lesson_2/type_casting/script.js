// TYPES CONVERSION

// Преобразование к строке:
// String()

// заведем переменную - счетчик очков
let pointsCount = 100;
// выведем ее в консоль и проверим тип
console.log(`pointsCount`, pointsCount);
console.log(`typeof pointsCount`, typeof pointsCount);

// теперь преобразуем ее к строке
pointsCount = String(pointsCount);
console.log(`pointsCount`, pointsCount);
console.log(`typeof pointsCount`, typeof pointsCount);


// 10.00
let moneyAmount = 10;

moneyAmount = 10.00 + .00;
console.log(`moneyAmount`, moneyAmount);

const zeros = ".00";
const result = String(moneyAmount) + zeros;

console.log(`result`, result);


const amount = 22;
const amountWithZeros = amount + ".00";
console.log(`amountWithZeros`, amountWithZeros);


// Преобразование Boolean к строке.
const isSuccess = true;
const stringIsSuccess = String(isSuccess);

console.log(`isSuccess`, isSuccess);
console.log(`stringIsSuccess`, stringIsSuccess);

console.log(`typeof isSuccess`, typeof isSuccess);
console.log(`typeof stringIsSuccess`, typeof stringIsSuccess);

// Преобразование к числу:
// Number() или оператор "+"

let value = "42";
console.log(`value`, value);
console.log(`typeof value`, typeof value);

// value = +value;
value = Number(value)
console.log(`value`, value);
console.log(`typeof value`, typeof value);



const a = '10';
const b = '12';

// const sum = +a + +b;
const sum = Number(a) + Number(b);
console.log(`sum`, sum)



// Неявное преобразование
const divisionResult = "10" / "2";
console.log(`divisionResult`, divisionResult);
console.log(`typeof divisionResult`, typeof divisionResult);



// NaN - ошибка числового преобразования
console.log(`Number('one')`, Number("one"));
console.log(`Number('a12')`, Number("a12"));

const multiplyingResult = "10" * "2а";
console.log(`multiplyingResult`, multiplyingResult);

console.log(`typeof multiplyingResult`, typeof multiplyingResult);


// Преобразование к булевому типу: 
// Boolean()

// Существуеют всего 6 falsy (ложных) значений, это:

// - ''
// - 0
// - null
// - undefined
// - NaN
// - false

// Все остальные значения являются truthy (правдивыми).



console.log(`Boolean('')`, Boolean("")); // false
console.log(`Boolean(0)`, Boolean(0)); // false
console.log(`Boolean('0')`, Boolean("0")); // true, так как строка не пустая.
console.log(`Boolean('Test')`, Boolean("Test")); // true



// Количество денег
const cashAmount = 10;

// И далее проверяем, можем ли мы пойти в магазин
if (Boolean(cashAmount)) {
  console.log("Можно что-то купить");
} else {
  console.log('Доедаем что осталось :(')
}
