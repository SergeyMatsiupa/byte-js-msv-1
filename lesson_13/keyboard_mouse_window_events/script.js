// MOUSE Events

// - click
// - doubleclick
// - mousedown
// - mouseup
// - mousemove
// - mouseenter
// - mouseleave

const clicksElement = document.getElementById("clicks");
const movesElement = document.getElementById("moves");

clicksElement.addEventListener("click", (event) => {
  // console.log(event);

  console.log("CLICK");
});


clicksElement.addEventListener("mousedown", (event) => {
  console.log("MOUSEDOWN");
});
clicksElement.addEventListener("mouseup", (event) => {
  console.log("MOUSEUP");
});



clicksElement.addEventListener("dblclick", (event) => {
  console.log("DOUBLE CLICK");
});

movesElement.addEventListener("mouseenter", () => {
  console.log("MOUSEENTER");
});

movesElement.addEventListener("mouseleave", () => {
  console.log("MOUSELEAVE");
});



movesElement.addEventListener("mousemove", (evt) => {
  const x = evt.clientX;
  const y = evt.clientY;
  console.log("MOUSEMOVE", x, y);
});



const handleClicksCounter = (e) => {
    const element = e.target;
    // console.log(`element`, element);
  
    const clickCounterElement = element.querySelector("#clicksCounter");
    const currentClicks = Number(clickCounterElement.innerText);
  
    clickCounterElement.innerText = currentClicks + 1;
  };
  
  clicksElement.addEventListener("click", handleClicksCounter);





// Добавить на страницу элемент по клику
// При клике на элемент - добавить на страницу текст,
// который будет содеражать информацию о событии
// (координаты клика).
// При повторном клике - удалить елемент со страницы

const createInfoElement = (event) => {
    const coords = {
      x: event.clientX,
      y: event.clientY,
    };
  
    const infoElement = document.createElement("p");
    infoElement.innerText = `X: ${coords.x} Y: ${coords.y}`;
    infoElement.id = "infoElement";
  
    return infoElement;
  };
  
  const handleAddInfoElement = (event) => {
    const createdElement = createInfoElement(event);
    const maybeElement = document.getElementById(createdElement.id);
  
    if (maybeElement) {
      maybeElement.remove();
    } else {
      document.body.append(createdElement);
    }
  };
  
  clicksElement.addEventListener("click", handleAddInfoElement);


  const updateCoordsinInfoElement = (event, element) => {
    const coords = {
      x: event.clientX,
      y: event.clientY,
    };
  
    element.innerText = `X: ${coords.x} Y: ${coords.y}`;
  };
  
  let infoElement = null;
  
  movesElement.addEventListener("mouseenter", (event) => {
    infoElement = createInfoElement(event);
    movesElement.append(infoElement);
  });
  
  movesElement.addEventListener("mousemove", (event) => {
    updateCoordsinInfoElement(event, infoElement);
  });
  
  movesElement.addEventListener("mouseleave", (event) => {
    infoElement.remove();
  });




// Keyboard Events

// - keydown
// - keypress
// - keyup

window.addEventListener("keypress", (event) => {
  console.log(`keypress`, event);
});

window.addEventListener("keyup", (event) => {
  console.log(`keyup`, event);
});

window.addEventListener("keydown", (event) => {
  console.log(`keydown`, event);
});




// Среди особых свойств событий клавиатуры следует отметить:
// - code - симольный код нажатой клавиши
// - key - фактически нажатая клавиша (зависит от текущей раскладки)
// - keycode - числовой код нажатой клавиши
// - charCode - код символа (есть только у keypress)
// - ctrlKey - нажат ли ctrl при событии
// - shiftKey
// - altKey

// Задача:
// Подсвечивать текущую нажатую клавишу.

// Алгоритм:
// 1. По keydown подсвечивать нужную клавишу
//    Находим ее свойству события key
// 2. По keyup находим подсвеченную клавишу и убираем подсветку

const keysList = [...document.querySelectorAll(".keyboard-item")];

const getCurrentPressedKey = (event) => {
  const curentKey = event.key;

  return keysList.find((key) => {
    return key.innerText.toLowerCase() == curentKey.toLowerCase();
  });
};

const handleKeyDown = (event) => {
  const currentKeyElement = getCurrentPressedKey(event);

  if (!currentKeyElement) {
    return;
  }

  currentKeyElement.classList.add("keyboard-item--pressed");
};

const handleKeyUp = (event) => {
  const currentKeyElement = getCurrentPressedKey(event);

  if (!currentKeyElement) {
    return;
  }

  currentKeyElement.classList.remove("keyboard-item--pressed");
};

window.addEventListener("keyup", handleKeyUp);
window.addEventListener("keydown", handleKeyDown);




// События window
// - DOMContentLoaded - загуржен и прочитан html
//   - если нужен только html
// - load - предыдущее + стили, картинки
//   - нужна полностью загруженная страница (стили, изображения)
// - resize - вызывается при измении ширины вьюпорта
// - scroll - вызывается при скролле


window.addEventListener("load", (event) => {
  console.log(`load`, event);
});

window.addEventListener("DOMContentLoaded", (event) => {
  console.log(`DOMContentLoaded`, event);
});

window.addEventListener('resize', (event) => {
  // console.log(`resize`, event)

  // const windowWidth = event.target.innerWidth;
  const windowWidth = window.innerWidth;

  if(windowWidth <= 576) {
    console.log('MOBILE!')
  } else {
    console.log('DESKTOP!')
  }

})




window.addEventListener('scroll', (event) => {
    // console.log(`event`, event);
  
  // высота вьюпорта + высота сколла === высота страницы
  console.log(`scroll`, window.scrollY)
  const isScrolledToBottom = 
    window.innerHeight + window.scrollY >= document.body.offsetHeight
  console.log(`isScrolledToBottom`, isScrolledToBottom)
  if(isScrolledToBottom) {
    console.log('you are scrolled to bottom')
  }
  })
  