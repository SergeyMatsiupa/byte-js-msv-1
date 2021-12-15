// Working with styles

// - className
// - classList
// - объект style
// - getComputedStyle()

// className
// - возвращает полный класс строку
// - служебное свойство, лучше использовать classList

const example1 = document.getElementById("exampleOne");
// console.dir(example1);
console.log(`example1.className`, example1.className);


example1.className = 'blue'

example1.className += " dashed";




// classList

const example2 = document.getElementById("exampleTwo");
console.log(`example2.classList`, example2.classList);


//   - add
//   - remove
//   - replace
//   - contains (не includes!)
//   - toggle

// добавить класс
example2.classList.add("dashed");
console.log(`add .dashed`, example2.classList);


// // удалить класс
example2.classList.remove("dashed");
console.log(`remove .dashed`, example2.classList);


// // заменить класс
example2.classList.replace("red", "blue");
console.log(`replace .red to .blue`, example2.classList);


// // "переключить" класс
example2.classList.toggle("large");
console.log(`toggle .large`, example2.classList);


const toggleClass = (element, className) => {
  if (element.classList.contains(className)) {
    element.classList.remove(className)
  } else {
    element.classList.add(className)
  }
}

toggleClass(example2, 'large');
console.log(`example2.classList`, example2.classList);
toggleClass(example2, 'large');
console.log(`example2.classList`, example2.classList);





const renderChessBoard = (cellsCount) => {
    const table = document.createElement("table");
    table.classList.add("chessboard");
  
    for (let i = 0; i < cellsCount; i++) {
      const row = document.createElement("tr");
      for (let j = 0; j < cellsCount; j++) {
        const cell = document.createElement("td");
        cell.classList.add("chessboard-cell");
  
        let isDark;
  
        if (i % 2 === 0) {
          isDark = j % 2 === 0;
        } else {
          isDark = j % 2 !== 0;
        }
  
        if (isDark) {
          cell.classList.add("chessboard-cell--dark");
        }
  
        row.append(cell);
      }
      table.append(row);
    }
  
    document.body.append(table);
  
    return table;
    // tr
    // td
  };
  
  const toggleChessBoard = (chessBoard) => {
    console.log("func");
    const allCells = chessBoard.querySelectorAll("td");
    allCells.forEach((cell) => {
      cell.classList.toggle("chessboard-cell--dark");
    });
  };
  
const board = renderChessBoard(9);


const btn = document.getElementById("toggle");
btn.addEventListener("click", () => toggleChessBoard(board));


// style
// - название всех css-свойств, которые содержат в себе дефис,
//   пишутся в camelCase
// - содержит в себе только инлайновые стили

const styleExample = document.getElementById("exampleFour");
console.log(`styleExample.style`, styleExample.style);




// const desiredWidth = Number(prompt("Width?"));
// const desiredHeight = Number(prompt("Height?"));
const desiredWidth = 100;
const desiredHeight = 200;

const getRandomRGB = () => {
    const numbers = [];
  
    for (let i = 0; i < 3; i++) {
      const randomNumberInRange = Math.round(Math.random() * 255);
      numbers.push(randomNumberInRange);
    }
  
    const RGBString = `rgb(${numbers.join(",")})`;
  
    return RGBString;
  };
  
  const drawRectangle = (width, height) => {
    const rect = document.createElement("div");
    const randomRGB = getRandomRGB();
  
    //  const randomColor = `rgb(${
    //   Math.round(Math.random() * 255)
    // },${
    //   Math.round(Math.random() * 255)
    // },${
    //   Math.round(Math.random() * 255)
    // })`;
  
    rect.style.height = `${height}px`;
    rect.style.width = `${width}px`;
    rect.style.backgroundColor = randomRGB;
  
    document.body.append(rect);
  };
  
drawRectangle(desiredWidth, desiredHeight);




// Вычисленные стили
// window.getComputedStyle(elem)

const renderRectangleColors = () => {
    const rectangles = [...document.getElementById("exampleFive").children];
  
    rectangles.forEach((rectangle) => {
      const styles = window.getComputedStyle(rectangle);
      const color = styles.backgroundColor;
      rectangle.innerText = color;
    })
  };
  
  renderRectangleColors();
  