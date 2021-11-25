// STRING

let string;

// string = 'test';
// string = "test";
// string = `test`;

const age = 25;
const birthYear = 1996;
let templateString;

templateString = `Привет! Мне ${age} лет!`
console.log(`templateString`, templateString)

templateString = `Привет, мне ${2021 - 1996} лет`;
console.log(`templateString`, templateString)



const getUserPhrase = () => {
    return prompt("Что вы сказали?");
  };
  
// templateString = `Пользователь сказал "${getUserPhrase()}"`;
// console.log(`templateString`, templateString);



const getChatMessage = (message, name = "Гость") => {
    // return name + ': ' + message;
    return `${name}: ${message}`;
  };
  
const message = getChatMessage("Привет!", "Cаша");
console.log(`message`, message);




let multilineString;

// multilineString = 'Привет !
// Как дела?'

multilineString = `
Привет!
Как дела?
`;


console.log(`multilineString`, multilineString);






// ЭКРАНИРОВАНИЕ СИМВОЛОВ И СПЕЦСИМВОЛЫ


let shieldedString;

// shieldedString = "Я сказал: "Привет"";

shieldedString = 'Я сказал: \'Привет\'';
console.log(`shieldedString`, shieldedString);

const lineBreak = "\nHello\nWorld!";
console.log(`lineBreak`, lineBreak)

// U+1F914 🤔

console.log(`"Я думаю... \\u{1F914}"`, "Я думаю... \u{1F914}");

// u00A9 ©
console.log(`Цитата.\\u00A9" `, "Цитата.\u00A9");





// СИМВОЛЫ В СТРОКЕ И ДЛИНА СТРОКИ


const test = "12345";
const length = test.length;
console.log(`length`, length);

const greeting = "Hello World!";

console.log(`greeting`, greeting);
console.log(`greeting.length`, greeting.length);


const name = "Peter";
const firstSymbol = name[0];
console.log(`firstSymbol`, firstSymbol);

const lastSymlol = name[name.length - 1];
console.log(`lastSymlol`, lastSymlol);

console.log(`name[10]`, name[10]);





// CТРОКИ НЕИЗМЕНЯЕМЫ !

let word = "hello";
word[0] = "H";

console.log(`word`, word);




// МЕТОДЫ СТРОК 
// ИЗМЕНЕНИЕ РЕГИСТРА

// toLowerCase()
// toUpperCase()

const example = "СимВОлЫ РаЗнОгО реГИстра";
console.log(`example`, example);

const lowerExample = example.toLowerCase();
console.log(`lowerExample`, lowerExample);

const upperExample = example.toUpperCase();
console.log(`upperExample`, upperExample);

console.log(`example`, example);



// ПОЛУЧЕНИЕ ПОДСТРОКИ

// slice()
const fullName = "John Brown";
const extractedName = fullName.slice(0, 4);
const extractedSurname = fullName.slice(5);

console.log(`name`, extractedName);
console.log(`surname`, extractedSurname)


const testString = "0123456789";

console.log(`testString.slice(0, 3)`, testString.slice(0, 3));
console.log(`testString.slice(2, 6)`, testString.slice(2, 6));
console.log(`testString.slice(3)`, testString.slice(3));
console.log(`testString.slice(12, 15)`, testString.slice(12, 15)); 




// indexOf()

console.log(`"test".indexOf('t')`, "test".indexOf('t'))
console.log(`"test".indexOf('s')`, "test".indexOf('s'))

const exampleString1 = "satisfaction";
const exampleString2 = "fact";

const resolvedIndex1 = exampleString1.indexOf("fac");
const resolvedIndex2 = exampleString2.indexOf("fac");

console.log(`resolvedIndex1`, resolvedIndex1);
console.log(`resolvedIndex2`, resolvedIndex2);
console.log(`exampleString1.indexOf('z')`, exampleString1.indexOf('z'))




const showUserNameAndSurname = (fullName) => {
    if(!fullName) {
      alert ('Вы ничего не ввели!');
  
      return;
    }
  
    const spaceIndex = fullName.indexOf(" ");
    console.log(`spaceIndex`, spaceIndex);
    if (spaceIndex === -1) {
      alert("Вы не ввели пробел");
  
      return;
    }
  
    // Jack Black
  
    const name = fullName.slice(0, spaceIndex);
    const surname = fullName.slice(spaceIndex + 1);
    alert(`Имя: ${name}`);
    alert(`Фамилия: ${surname}`);
  };
  
// const userFullName = prompt("Введите имя и фамилию через пробел:");
// showUserNameAndSurname(userFullName);
  




console.log(`'b' > 'a'`, "b" > "a");
console.log(`'abc' < 'abd'`, "abc" < "abd");
console.log(`'a' > 'Z'`, "a" > "Z");
console.log(`'test' < 'tester'`, "test" < "tester");



const getCharCodes = (string) => {
    for(let i = 0; i < string.length; i++){
      const char = string[i]
      console.log(char, char.charCodeAt())
    }
  }
  
getCharCodes('hello');
getCharCodes('Hello');




const getStringFromCharCodes = () => {
    let str = '';
    for (let i = 0; i <= 220; i++) {
      str += String.fromCodePoint(i);
    }
  
    return str;
  }
  
const resultString = getStringFromCharCodes();
console.log(`resultString`, resultString);




// localeCompare()

// str.localeCompare(str2)

// -1 str < str2
//  1 str > str2
//  0 str === str2

console.log(`'hello'.localeCompare('hello')`, 'hello'.localeCompare('hello'))
console.log(`'ку'.localeCompare('Ку')`, 'ку'.localeCompare('Ку'));
console.log(`'Здравствуйте'.localeCompare('здравствуй')`, 'Здравствуйте'.localeCompare('здравствуй'));