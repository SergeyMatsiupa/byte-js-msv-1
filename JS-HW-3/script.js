// 1
function task1() {
    let number1 = +prompt('Please enter 1st number')
    let number2 = +prompt('Please enter 2nd number')
    // console.log(`typeof number1`, typeof number1)
    // console.log(`typeof number2`, typeof number2)
    if (number1 > number2) {
        alert(`${number1} is greater than ${number2}`)
    } else if (number2 > number1) {
        alert(`${number2} is greater than ${number1}`)
    } else {
        alert(`${number1} is equal to the ${number2}`)
    }
}


// 2
function task2() {
    let operand1 = +prompt('Please enter 1st operand')
    let operand2 = +prompt('Please enter 2nd operand')
    if (-Infinity < operand1 + operand2) {
        let aOperator = prompt('Please enter the operation symbol from the list of available (+ - / *)','+')
        let result;
        switch (aOperator) {
            case '+':
                result = `Result:  ${operand1} + ${operand2} = ${operand1 + operand2}`;
                break;
            case '-':
                result = `Result:  ${operand1} - ${operand2} = ${operand1 - operand2}`;
                break;
            case '/':
                result = `Result:  ${operand1} / ${operand2} = ${operand1 / operand2}`;
                break;
            case '*':
                result = `Result:  ${operand1} * ${operand2} = ${operand1 * operand2}`;
                break;
            default:
                result = `There is no available operations for the symbol '${aOperator}'`;
                break;
        }
        alert(result)
    } else {
        alert(`There is error in entered operands (${operand1} and/or ${operand2})`)
    }
}



// 3
function task3() {
    let visitorAge = +prompt('Please enter your age')
    let checkResult;
    if (visitorAge > 18 && visitorAge < 60) {
        checkResult = 'Access granted'
    } else if (((visitorAge >= 12 &&visitorAge <= 18) || (visitorAge >= 60 && visitorAge <= 80)) && confirm('Do you have permission from adults?')) {
        checkResult = 'Access granted'
    } else {
        checkResult = 'Sorry, access denied'
    }
    alert(checkResult);
}