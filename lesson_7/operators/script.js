// OPERATORS

// - Арифметические операторы + - / * ...
// - Логические операторы && || !
// - Операторы присваивания = ...
// - Операторы сравнения == > < ...
// - Бинарные операторы

// Операторы с свою очередь делятся на 3 типа:
// - Унарные (с 1 операндом) (единичный)
// - Бинарные (с 2 операндами) (двоичный)
// - Тернарный (с 3 операндами) (тройной)

// operator   operand
// +"1"
// +          "1"
// -100
// -          100

// operand    operator   operand
// 3 + 4
// 3          +          4
// y / x
// y          /          x

// operand    operator   operand   operator   operand
// x ? a : b
// x          ?          a         :          b

// Возвращение значений

let res = 1 + 2; // бинарный плюс вернет нам число 3
console.log(`res`, res);



const number1 = 100;
res = -number1; // унарный минус вернет отрицательное
// значение переменной num1
console.log(`res`, res);


// Арифметические (математические) операторы:

const num1 = 10;
const num2 = 3;
let operationResult;
// сложение
operationResult = num1 + num2;
console.log("10 + 3 =", operationResult);

// умножение
operationResult = num1 * num2;
console.log("10 * 3 =", operationResult);

// вычетание
operationResult = num1 - num2;
console.log("10 - 3 =", operationResult);

// деление
operationResult = num1 / num2;
console.log("10 / 3 =", operationResult);




// специальные арифметические операторы
const string = "100";
const number = 10;
const isOnline = false;

// унарный плюс
console.log(`+string`, +string); // 100
console.log(`+isOnline`, +isOnline); // 1
// true -> 1, false -> 0

// унарный минус
console.log(`-number = `, -number); // отрицательное значение операнда

// остаток от деления (деление по модулю)
console.log(`10 % 3 = `, 10 % 3); // 1


// возведение в степень
console.log(`2 ** 3 = `, 2 ** 3);

// ИНКРЕМЕНТ И ДЕКРЕМЕНТ

// постфиксный инкремент
// num++

// префиксный инкремент
// ++num

// постфиксный декремент
// num--

// префиксный декремент
// --num

let x = 1;

console.log(`x++`, x++);
// вернет 1, так как постфиксная форма возвращает исходное значение
console.log(`Значение x после постфиксной инкрементации: `, x);
// 2
console.log(`++x`, ++x); // вернет сразу увеличенное значение: 3
console.log(`Значение x после префиксной инкрементации:`, x); // осталось прежним: 3




// ПРИОРИТЕТ ОПЕРАТОРОВ И ЕГО ПЕРЕОПРЕДЕЛЕНИЕ
let result;

result = 2 + 3 - 1;
console.log(`2 + 3 - 1 = `, result);
result = 7 + 1 * 2;
console.log(`7 + 1 * 2 = `, result);
result = (10 + 20) / 2;
console.log(`(10 + 20) / 2 = `, result);




// ОПЕРАТОРЫ ПРИСВАИВАНИЯ

// let a = 1;

// a = a + 1;

let a = 1;
let b = 2;
// a = a + b
a += b;
console.log(`a`, a); // 3

// a = a - b
a = 1;
a -= b;
// console.log(`a`, a); // -1

// a = a / b
a = 1;
a /= b;
// console.log(`a`, a); // 0.5

// a = a + b
a = 1;
a *= b;
// console.log(`a`, a); // 2

// a = a % b
a = 1;
a %= b;
// console.log(`a`, a); // 1

let laughter = "Ha";

laughter += laughter;
laughter += laughter;
laughter += laughter;

console.log(`laughter`, laughter);




// ЛОГИЧЕСКИЕ ОПЕРАТОРЫ

// || ИЛИ
// && И
// ! НЕ

// ОПЕРАТОР || (ИЛИ)

console.log("true || true", true || true); // true
console.log("false || true", false || true); // true
console.log("true || false", true || false); // true
console.log("false || false", false || false); // false
console.log(`false || false || true`, false || false || true); // true

console.log(`1 || 0`, 1 || 0); // 1
console.log(`"" || "hello"`, "" || "hello"); // hello
console.log(`null || undefined || NaN`, null || undefined || NaN); // NaN
// MSV  - вернул последний false


const currentPassword = "";
const newPassword = "";

const password = currentPassword || newPassword || "1q2w3e";

console.log(`password`, password);




// ОПЕРАТОР && (И)

console.log("true && true", true && true); // true
console.log("false && true", false && true); // false
console.log("true && false", true && false); // false
console.log("false && false", false && false); // false
console.log(`false && false && true`, false && false && true); // false

console.log(`1 && false`, 1 && false); // 1
console.log(`0 && "hello"`, 0 && "hello"); // hello
console.log(`null && undefined && NaN`, null && undefined && NaN);



const isInNetwork = false;
const hasPermissions = true;

const canSendMessage = isInNetwork && hasPermissions;
console.log(`canSendMessage`, canSendMessage);
// true если пользователь онлайн и у него есть права




// ОПЕРАТОР ! (НЕ)

console.log(`!true`, !true); // false
console.log(`!false`, !false) // fasle
console.log(`!0`, !0);
console.log(`!"test"`, !"test")

// const userName = prompt("Как вас зовут ?");

// if (!userName) {
//   alert("Вы не ввели имя!");
// }




// ПРИОРИТЕТ И КОМБИНИРОВАНИЕ ЛОГИЧЕСКИХ ОПЕРАТОРОВ

// Операторы перечислены от большего приоритета к меньшему
// 1. НЕ !
// 2. И &&
// 3. ИЛИ ||

console.log(`true && true || false && true`, true && true || false && true)
console.log(`true && true || false && true`, (true && true) || (false && true));

// 1. true || false
// 2. true
console.log(`1 && false || 'test' && '10'`, 1 && false || 'test' && '10')
console.log(`1 && false || 'test' && '10'`, (1 && false) || ("test" && "10"));

// 1. false || 10
// 2. 10
console.log(`("cat" || "dog") && (10 || 0)`, ("cat" || "dog") && (10 || 0));
// 1. cat && 10
// 2. 10




// ОПЕРАТОРЫ СРАВНЕНИЯ
// == равно
// != не равно
// === строго равно
// !== строго не равно
// > больше
// < меньше
// >= больше равно
// <= меньше равно

// == равентсво без учета типа
console.log(`"a" == "a"`, "a" == "a"); // true
console.log(`10 == '10'`, 10 == "10"); // true
console.log(`0 == false`, 0 == false); // true
console.log(`'' == false`, "" == false); // true
console.log(`null == undefined`, null == undefined); // true
console.log(`'' == 0`, "" == 0); // true


// != не равно

console.log(`10 != 11`, 10 != 11); // true
console.log(`42 != "42"`, 42 != "42"); // false




// === строгое равенство у учетом типа

console.log(`"test" === "test"`, "test" === "test"); // true
console.log(`10 === "10"`, 10 === "10"); // false
console.log(`0 === false`, 0 === false) // false
console.log(`null === undefined`, null === undefined)

// > больше
// >= больше равно
console.log(`10 > 11`, 10 > 11); // false
console.log(`69 > 42`, 42 < 69); // true
console.log(`10 >= 10`, 10 >= 10); // true

// < меньше
// <= меньше равно
console.log(`10 < 100`, 10 < 100); // true
console.log(`50 < 49`, 50 < 49); // false





// ТЕРНАРНЫЙ ОПЕРАТОР ? :

const user = "";
const userGreeting = user ? "Hello " + user : "Hello Guest";

// alert(userGreeting);



