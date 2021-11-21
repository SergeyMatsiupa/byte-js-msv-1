// 1.1
function task1u() {
    let number1 = +prompt('Please enter 1st number')
    let number2 = +prompt('Please enter 2nd number')
    if (-Infinity < number1 + number2) {
        alert(`${number1} + ${number2}  is  ${sumU(number1, number2)}`)
    }
    else {
        alert("ERROR - one of entered values isn't a number")
    }

    function sumU(num1, num2) {
        return num1 + num2;
    }
}

// 1.2
function task1a() {

    const sumU = (num1, num2) => num1 + num2;

    let number1 = +prompt('Please enter 1st number')
    let number2 = +prompt('Please enter 2nd number')
    if (-Infinity < number1 + number2) {
        alert(`Arrow function:  ${number1} + ${number2}  is  ${sumU(number1, number2)}`)
    }
    else {
        alert("ERROR - one of entered values isn't a number")
    }
}


// 2
function task2() {
    userGreetings();
    
    function userGreetings() {
        let userName = prompt('Please enter the name of the user');
        let userAge = +prompt('Please enter age of the user');
        if (!(-Infinity < userAge)) {
            return;
        }
        if (userAge > 30) {
            alert(`Hello, ${userName}`)
        } else {
            alert(`Hi, ${userName}`)
        }
    }
}



// 3
function task3() {

    const ext = (numberI, extentI = 2) => extentI ? numberI**extentI : numberI**2;

    let number = +prompt('Please enter the number')
    let extent = prompt('Please enter the extent')
     
    if (-Infinity < number) {
        alert(`${number} in extent ${+extent ? extent : 2}  is  ${+extent ? ext(number, extent) : ext(number)}`)
    }
    else {
        alert("ERROR - entered value isn't a number")
    }
}