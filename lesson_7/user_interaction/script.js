// USER INTERACTION

// Показ сообщений - ALERT
// alert("Hello");
// alert(42);

const winMessage = "Congratulations! You won!";

// alert(winMessage, 'abc');



// Получение информации - PROMPT
// const userName = prompt("What is your name?");
// console.log(`userName`, userName);

// alert("Hello " + userName + " !");


// Eсли пользователь кликнет "Cancel" или "Отмена", 
// или нажмет на клавишу ESC на клавиатуре,
// то результатом работы prompt() станет значение null.




// const userAnswer = prompt("How are you?");
// console.log(`userAnswer`, userAnswer);




// prompt() вседа возвращает тип данных String

// let userMoneyAmount = 500;

// const amountToAdd = Number(prompt("How much to add?"));
// userMoneyAmount = userMoneyAmount + amountToAdd;

// alert("Now in your wallet: " + userMoneyAmount);




// Подтверждение - СONFIRM 
// Возвращает логическое значение
// (значение типа данных Boolean)

// const isAdmin = confirm("Are you admin?");
// console.log(`isAdmin`, isAdmin);

// if (isAdmin) {
//   alert("Welcome!");
// }




const userNickname = prompt("Your nickname?");
const userAge = prompt("How old are you?");

const isConfirmed = confirm(
  `Are you really ${userNickname}, ${userAge} years old?`
);

if (isConfirmed) {
  alert("Your data saved!");
}
