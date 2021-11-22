// LOOPS

for (let i = 0; i < 5; i++) {
  console.log("Я сделал шаг вперед!");
}


// FOR

// for (старт (счетчик); условие; шаг счетчика;) {
// ...код, который необходимо многократно выполнить
// }

// Алгоритм:
// 0. Выполнить старт (инициализация счетчика)
// 1. проверка условия
// 2. итерация (оборот цикла)
// 3. выполнить шаг счетчика
// 4. проверить условие
// повторять до тех пор, пока выполняется условие

console.log("Цикл начал работу");

for (let i = 0; i < 5; i++) {
  console.log(`Счетчик (i): `, i);
  console.log(`Условие ${i} < 5:`, i < 5);
}

console.log("Цикл закончил работу");


for (let i = 2; i <= 2048; i = i * 2) {
  // outputs 0, then 1, then 2
  console.log(`i`, i);
}


for (let i = 2, j = 1; j < 20; i = i * 2, j++) {
  console.log(`2 в степени ${j} = ${i}`);
}


for(let i = 0; i < 20; i++) {
  const power = 2 ** i;
  // console.log(`2 в степени ${i} = ${power}`);
  const res = "2 в степени " + i + ' = ' + power
  console.log(res)
}



// ОСТАНОВКА ЦИКЛА И ПРОПУСК ИТЕРАЦИЙ
// break


// const findFirstNumber = (start, finish, divider) => {
//   let targetNumber;
//   for (let i = start; i <= finish; i++) {
//     console.log(`i`, i)
//     if (i % divider === 0) {
//       targetNumber = i;
//       break;
//     }
//   }

//   return targetNumber;
// };

const findFirstNumber = (start, finish, divider) => {
    for (let i = start; i <= finish; i++) {
      console.log(`i`, i)
      if (i % divider === 0) {
        return i
      }
    }
  };
  
  
const result = findFirstNumber(10, 50, 9)
console.log(`result`, result)




// CONTINUE

const showEvenNumbers = (start, finish) => {
  for (let i = start; i <= finish; i++) {
    if (i % 2 !== 0) {
      continue;
    }
    console.log(i);
  }
};

// const showEvenNumbers = (start, finish) => {
//     for (let i = start; i <= finish; i++) {
//       if (i % 2 === 0) {
//         console.log(i);
//       }
//     }
//   };
  
showEvenNumbers(2, 20)



// ВЛОЖЕННЫЕ ЦИКЛЫ

for (let i = 1; i <= 9; i++) {
  let row = "";
  for (let j = 1; j <= 9; j++) {
    console.log(`i, j`, i, j);
    row = row + (i * j) + " ";
  }
  console.log(row);
}




// WHILE


// while (выполняется условие) {
//   выражения
// }

let i = 3;
while (i) {
  console.log("i", i);
  i--;
}




// DO WHILE


// let name;
// do {
//   name = prompt("Введите имя: ");
//   if(name === null) {
//     break;
//   }
//   console.log(`name`, name);
// } while (!name);



// ЦИКЛЫ - ЭТО БЫСТРО

console.time('Loop');

for (let i = 0; i < 1000000000; i++) {
  const a = 2 * i;
}

console.timeEnd('Loop');
