// EVENTS THEORY

// - Mouse Event
// - Keyboard Event
// - Window Event
// - Form Event

const eventHandler = () => {
    console.log("Hello world");
  };
  
  const btnOne = document.getElementById("htmlAttr");
  // console.dir(btnOne);
  
  const eventHandlerTwo = () => {
    console.log("Hello from dom property!");
  };
  
  const btnTwo = document.getElementById("domProp");
  btnTwo.onclick = eventHandlerTwo;
  // console.dir(btnTwo);
  
  const btnThree = document.getElementById("eventListener");
  // синтаксис следующий:
  // елемент.addEventListener(
  //   'какое событие обрабатываем',
  //   обрабочикСобытия (callback-функция),
  //   [{...объект настроек(необязательный)}]
  // )
  
  const eventHandlerThree = () => {
    console.log("Hello from event listner!");
  };
  
  // btnThree.addEventListener('click', eventHandlerThree);
  btnThree.addEventListener("click", () => {
    console.log("Hello from function");
  });

  


// Объект Event

const clickHandler = (event) => {
    console.log(`event`, event);
  };
  
  // - handleClick
  // - handleButtonClick
  // - clickHandler
  // - buttonClickHander
  
  const eventBtn = document.getElementById("eventExample");
  eventBtn.addEventListener("click", clickHandler);
  
  // This in event handlers
  
  const wrapper = document.getElementById("wrapper");
  
  // wrapper.addEventListener("click", (evt) => {
  //   console.log(`evt.target`, evt.target);
  //   console.log(`this`, this);
  // });
  
  wrapper.addEventListener("click", function (evt) {
    console.log(`evt.target`, evt.target);
    console.log(`this`, this);
  });

  

// Removing event listeners

// - onclick = null
// - через removeEventListener

btnTwo.onclick = null;
// console.dir(btnTwo);

const exampleForRemove = document.getElementById("test");

// НЕ РАБОТАЕТ !
// exampleForRemove.addEventListener("click", (event) => {
//   console.log("Event fired!");
//   console.log(event);
// });

// exampleForRemove.removeEventListener('click', (event) => {
//   console.log("Event fired!");
//   console.log(event);
// })

const handlerToRemove = (event) => {
  console.log("Event fired!");
  console.log(event);
};

exampleForRemove.addEventListener("click", handlerToRemove);
exampleForRemove.removeEventListener("click", handlerToRemove);




// Множественное добавление событий

const squares = document.querySelectorAll(".square");

const handleSquareClick = (event) => {
  console.log(`event`, event);
  const currentSquare = event.target;

  currentSquare.remove();
};

// squares.forEach((square) => {
//   square.addEventListener('click', handleSquareClick)
// });





// Всплытие и делегирование событий

const squaresParent = document.getElementById("squares");
const handleParentClick = (event) => {
  const clickedElement = event.target;
  console.log(`clickedElement`, clickedElement);

  if (clickedElement.classList.contains("square")) {
    clickedElement.remove();
  }
};

squaresParent.addEventListener("click", handleParentClick);
