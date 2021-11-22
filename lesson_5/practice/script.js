// 1. Написать функцию для авторизации пользователя
//    с базовой валидацией данных.
//    - логин и пароль должны совпадать со слудующими:
//      ADMIN
//      1q2w3e
//    - Если пользователь не ввел логин, показать ему
//      сообщение "введите логин" и начать авторизацию
//      заново, если не ввел пароль - показать сообщение
//      "введите пароль" и начать авторизацию заново
// 2. Реализовать функцию, которая будет рисовать в
//    консоли пирамидку заданной пользователем высоты.
//     *
//    ***
//   *****
//  *******
// *********

const LOGIN = "admin";
const PASSWORD = "11111";

const authorize = () => {
  let userPassword;
  let userLogin;
  let isAuthSuccess = false;

  do {
    userLogin = prompt("Логин:");
    if (!userLogin) {
      alert("Введите логин");
      continue;
    }

    userPassword = prompt("Пароль:");
    if (!userPassword) {
      alert("Введите пароль");
      continue;
    }

    if (userPassword === PASSWORD && userLogin === LOGIN) {
      isAuthSuccess = true;
    } else {
      alert("Данные неверны!");
    }
  } while (!isAuthSuccess);

  alert("Welcome");
};

// authorize();

const drawPyramid = (height) => {
  for (let i = 0; i < height; i++) {
    let spacesBefore = "";
    let stars = "";

    for (let j = 0; j < 2 * i + 1; j++) {
      stars += "*";
    }

    for (let k = 0; k < height - i - 1; k++) {
      spacesBefore += " ";
    }

    console.log(spacesBefore + stars);
  }
};

const desiredHeight = Number(prompt("Какая высота пирамиды ?"));
drawPyramid(desiredHeight)