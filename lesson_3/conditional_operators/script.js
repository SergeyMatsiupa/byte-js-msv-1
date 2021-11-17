// Условными операторами в JavaScript явлюются:
// - if
// - switch
// - тернарный оператор "?"

// IF

// если (выполняется условие) {
//  ...выполняется этот код..
//  (тело условия)
// }

// if (true) {
//   console.log("Это условие всегда выполнится");
// }

// if (5 > 2) {
//   console.log("5 больше чем 2");
// }

// Разберем еще несколько примеров:

if (0) {
    // не выполнится, так как 0 преобразуется к false
  }
  
  if (1) {
    // выполнится, так как 1 преобразуется к true
  }
  
  // if работает не только со значениями, а и с перемененными, в которых хранится заранее
  // вычесленное значение
  // const isActive = confirm("Вы все еще тут?");
  
  // if (isActive) {
  //   alert("Спасибо!");
  // }
  

// const a = 11;
// const b = 10;
// const condition = a > b;
// if (condition) {
//   alert("a больше, чем b");
// }

// Принцип работы оператора if заключается в следуещем:
// - выполняется выражение в круглых скобках
// - если тип результата выражения не Boolean,
//   то просходит преобразование к логическому типу
// - и далее происходит ветвление, если в круглых
//   скобках true, то выполняется тело условия
// - если false, то этот код (тело условия)
//   просто пропускается

// Иными словами:

// if (condition == true) {
// ...выполнить код
// }

// Блоки else и else if:

// если (выполняется условие) {
// ...выполняется этот код..
// ...выходим из условного оператора
// } еще если (выполняется это условие) {
// ...выполняется этот код..
// ...выходим из условного оператора
// } иначе {
//  ...если не выполнился ни один блок из предыдущих,
//  выполнится этот код
// }

const currentYear = 2021;

// const userAnswer = Number(prompt("Какой сейчас год?"));
// if (userAnswer === currentYear) {
//   alert("Вы правы!");
// } else {
//   alert("А вот и нет :(");
// }

// const userAnswer = Number(prompt("Какой сейчас год?"));
// if (userAnswer === currentYear) {
//   alert("Вы правы!");
// } else if (userAnswer > currentYear) {
//   alert("Вы из будущего?");
// } else  {
//   alert("Вы из прошлого?");
// }



// const MIN_AGE = 12;
// const visitorAge = Number(prompt("Сколько вам лет?"));
// const isWithParents = confirm("Вы с родителями?");

// if (visitorAge >= MIN_AGE || isWithParents) {
//   console.log("Доступ разрешен!");
// } else {
//   console.log("Возраст слишком мал для посещения.");
// }





// const number = 10;

// const number = 35;

// if (number === 10) {
//   console.log("Число равно 10");
// } else if (number > 10 && number <= 20) {
//   console.log("Число больше 10");
// } else if (number > 20 && number < 30) {
//   console.log("Число больше 20 и меньше 30");
// } else {
//   console.log("Число больше 30");
// }




// ОПЕРАТОР SWITCH

// switch (значение) {
//  case 1:
//    ... код, который выполнится, если значение === 1
//    break; останавливает работу оператора switch case
//  case 2:
//    ... код, который выполнится, если значение === 2
//    break;
//  case 3:
//    ... код, который выполнится, если значение === 3
//    break;
//  default:
//    ... аналог блока else, код который выполнится 
//    если не совпало ни одно условие
// }

// const studentMark = Number(prompt("Введите оценку: "));

// switch (studentMark) {
//   case 5:
//     alert("Прекрасно!");
//     break;
//   case 4:
//     alert("Хорошо.");
//     break;
//   case 3:
//   case 2:
//   case 1: 
//     alert("Не очень хорошо :(");
//     break;
//   default:
//     alert("Не знаю такой оценки");
// }




// if (studentMark === 5) {
//   alert("Прекрасно!");
// } else if (studentMark === 4) {
//   alert("Хорошо.");
// } else if (studentMark === 3 || studentMark === 2 || studentMark === 1) {
//   alert("Не очень хорошо :(");
// } else {
//   alert('Не знаю такой оценки')
// }


// ТЕРНАРНЫЙ ОПЕРАТОР (? :)

// условие ? вернется если true : вернется если false;

const number = Number(prompt("Пожалуйста, введите число:"));
const result = number > 10 ? "Число больше 10" : "Число меньше 10";

console.log(`result`, result);



let result2;
if (number > 10) {
  result2 = "Число больше 10";
} else {
  result2 = "Число меньше 10";
}

console.log(`result2`, result2);