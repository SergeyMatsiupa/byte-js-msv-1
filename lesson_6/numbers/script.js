// NUMBERS

// Целые числа:
const num1 = 10;
// десячитчные числа
const num2 = 5.14;
const num3 = 50.500001;
console.log(`num3`, num3)


// ОГРАНИЧЕНИЯ

const max = Number.MAX_SAFE_INTEGER; // 2**53
const min = Number.MIN_SAFE_INTEGER; // -2**53

console.log(`max`, max, max.toExponential());
console.log(`min`, min);



console.log(`max`, max);
console.log(`min`, min);

console.log(`9999999999999999`, 999999999999999999999999999999);

console.log(`max + 10`, max + 10);




// BigInt для работы с большими числами

const bigNum = 92398520934784023970492380482370492830n;
const extraBigNum = BigInt(
  "9382034028374820803934234293842734792834692831231234"
);

console.log(`bigNum`, bigNum)
console.log(`extraBigNum`, extraBigNum)



const num = 10;
const bigIntFromNumber = BigInt(num);

// значения типа BigInt уже не равны строго таким же числам, потому что значения имеют разный тип.
console.log(`num === bigIntFromNumber`, num === bigIntFromNumber);
console.log(`typeof num`, typeof num);
console.log(`typeof bigIntFromNumber`, typeof bigIntFromNumber);

console.log(`bigNum`, bigNum);
console.log(`extraBigNum`, extraBigNum);





// Двоичная(бинарная), десятичная и шестнадцатиричная
// системы счисленя

// Binary 0 1
// Decimal 0 1 2 3 4 5 6 7 8 9
// Hexadecimal 0 1 2 3 4 5 6 7 8 9 a b c d e f

//   0       0
//   1       1
//  10       2
//  11       3
// 101       5
// 110       6
// 111       7

// const binaryNumber = 0b111; // 7
// console.log(`binaryNumber`, binaryNumber);

//   0000   0
//   0001   1
//   0010   2
//   0011   3
//   0100   4
//   0101   5
//   0110   6
//   0111   7
//   1000   8
//   1001   9
//   1010   a  10
//   1011   b  11
//   1100   c  12
//   1101   d  13
//   1110   e  14
//   1111   f  15
//  10000  10  16
// 100000  20  32

// const hexadecimalNumber = 0xFF; // 255
// console.log(`hexadecimalNumber`, hexadecimalNumber);

// #FFFFFF
// rgb(255, 255, 255)

// #ff0000
// rgb(255, 0, 0)





// Методы числа

// toString
const number = 255;

console.log(`number.toString()`, number.toString());
console.log(`number.toString(2)`, number.toString(2));
console.log(`number.toString(8)`, number.toString(8));
console.log(`number.toString(16)`, number.toString(16));


// Если вызываем метод непосредственно у значения
console.log(`10..toString(2)`, 10..toString(2));
console.log(`10..toString(2)`, (10).toString(2));




// isFinite() isNaN()

console.log(`isNaN(NaN)`, isNaN(NaN)); // true
console.log(`isNaN("asd")`, isNaN("asd")); // true
console.log(`isNaN("0")`, isNaN("0")); // false
console.log(`isNaN(0)`, isNaN(0)); // false
console.log(`isNaN(Infinity)`, isNaN(Infinity)); // false

console.log(`isFinite(111)`, isFinite(111)); // true
console.log(`isFinite(NaN)`, isFinite(NaN)); // false
console.log(`isFinite(Infinity)`, isFinite(Infinity)); // false
console.log(`isFinite('22')`, isFinite("22")); // true
// console.log(`isFinite(1n)`, isFinite(1n)) // error




const readNumber = () => {
    const userNumber = prompt("Введите число");
    if (isNaN(userNumber) || !isFinite(userNumber) || userNumber == null) {
      console.log("Вы ввели не число");
    } // MSV!
  };
  
// readNumber();
  



const isNumberValid = (value) => !isNaN(value) && isFinite(value) && value !== null;  // MSV!


const getNumber = () => {
    let userValue;
  
    do {
      userValue = prompt("Введите корректное число: ");
    } while (!isNumberValid(userValue));
  
    return Number(userValue);
  };
  
// const userNumber = getNumber();
// console.log(`userNumber`, userNumber)
  




// parseInt parseFloat

console.log(`Number('100$')`, Number("100$")); // NaN
console.log(`parseInt("100$")`, parseInt("100$")); // 100
console.log(`parseInt("250px")`, parseInt("250px")); // 250



// // для десятичных значений следует использовать parseFloat

console.log(`parseInt("100.44UAH")`, parseInt("100.44UAH")); // 100
console.log(`parseFloat("100.44UAH")`, parseFloat("100.44UAH")); // 100.44

console.log(`parseInt("10a10")`, parseInt("10a10")); // 10
console.log(`parseInt("$100")`, parseInt("$100")); // NaN

// У этих методов следующий алгоритм работы:
// 1. Поочередно проходит по всем символам строки
// 2. Если текущий символ корректно преобразуется к числу
//    то переходит к следующему
// 3. Так до тех про пока не встретит значение,
//    которое не может преобразоваться к числу
// 4. Возращает итоговое значение числового типа
// 5. Если первый символ не может преобразоваться к числу,
//    то возвращает NaN



// Math

// Math.round()
// Math.ceil()
// Math.floor()
// Math.trunc()

// по правилам математики
console.log(`Math.round(1.1)`, Math.round(1.1));
console.log(`Math.round(1.7)`, Math.round(1.7));


// к большему (с англ. "потолок")
console.log(`Math.ceil(2.1)`, Math.ceil(2.1));
console.log(`Math.ceil(2.9)`, Math.ceil(2.9));

// к меньшему (с англ. "пол")
console.log(`Math.floor(2.1)`, Math.floor(2.1));
console.log(`Math.floor(2.9)`, Math.floor(2.9));

// обрезает десятичную часть (с англ. "усекать")
console.log(`Math.trunc(2.1)`, Math.trunc(2.1));
console.log(`Math.trunc(2.9)`, Math.trunc(2.9));


//        Math.floor	Math.ceil	Math.round	Math.trunc
//  3.1	  3	          4	        3	          3
//  3.6	  3	          4	        4	          3
// -1.1	 -2	         -1	       -1	         -1
// -1.6	 -2	         -1	       -2	         -1



// Math.random()
const random = Math.random();

console.log(`random`, random);

const getRandomInteger = (max) => {
  return Math.round(Math.random() * max);
};

const integerRandom = getRandomInteger(1000);
console.log(`integerRandom`, integerRandom);





// Потеря точности выселений

const res = 0.1 + 0.2;

console.log(`res === 0.3`, res === 0.3);
console.log(`res`, res);


const example = 100.5;

console.log(`example.toFixed(3)`, example.toFixed(3));
console.log(`example.toFixed(0)`, example.toFixed(0));
console.log(`example.toFixed(10)`, example.toFixed(10));



const addFloatingNumbers = (a, b, decimals) => Number((a + b).toFixed(decimals))  // MSV

const result1 = addFloatingNumbers(0.1, 0.2, 2);
console.log(`result1`, result1);

console.log(`result1 === 0.3`, result1 === 0.3);


console.log( (0.1 * 10 + 0.2 * 10) / 10 );
console.log( (0.28 * 100 + 0.14 * 100) / 100);
