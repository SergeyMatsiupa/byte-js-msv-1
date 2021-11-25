// 1.1
function task1() {
    
    const isPasswdValid = (strPasswd) => {
        if (strPasswd === null  ||  strPasswd.trim().length == 0) {
            return false;
        }
        let hasUpperCase = false;
        let hasLowerCase = false;
        for(let i = 0; i < strPasswd.length; i++) {
            if (strPasswd[i].codePointAt() >= 65 && strPasswd[i].codePointAt() <= 90) {
                // upper case letter
                hasUpperCase = true;
            };
            if (strPasswd[i].codePointAt() >= 97 && strPasswd[i].codePointAt() <= 122) {
                // lower case letter
                hasLowerCase = true;
            }; 
        }
        return hasUpperCase && hasLowerCase;
    }

    const isNameSurnameValid = (strName) => {
        return (strName !== null) && (strName.trim().length > 0);
    }


    let isNameRegSuccess = false;
    let userName;
    do {
        userName = prompt('Please enter the valid User Name\n(at least 1 non-empty symbol long)');
        isNameRegSuccess = isNameSurnameValid(userName);
    } while (userName !== null && !isNameRegSuccess);

    let isSurNameRegSuccess = false;
    let userSurName;
    do {
        userSurName = prompt('Please enter the valid User Surname\n(at least 1 non-empty symbol long)');
        isSurNameRegSuccess = isNameSurnameValid(userSurName);
    } while (userSurName !== null && !isSurNameRegSuccess);

    let isPasswdRegSuccess = false;
    let userPasswd;
    do {
        userPasswd = prompt('Please enter the valid User Password\n(at least 6 non-empty symbol long, should contain both Upper/Lower cases)');
        isPasswdRegSuccess = isPasswdValid(userPasswd);
    } while (userPasswd !== null && !isPasswdRegSuccess);

    console.log(`Your registration data is:
Name = '${isNameRegSuccess ? userName[0].toUpperCase() + userName.slice(1).toLocaleLowerCase()  :  ""}'
Surname = '${isSurNameRegSuccess ? userSurName[0].toUpperCase() + userSurName.slice(1).toLocaleLowerCase()  :  ""}'
Password = '${isPasswdRegSuccess ? userPasswd  :  ""}'
`)
}



//2
function task2() {

    const getRandInInterv = (border1, border2) => {
        return (border2 - border1) * Math.random() + border1;
    }

    let border1 = 10;
    let border2 = 20;
    console.log(`A random number between ${border1} and ${border2} is ${getRandInInterv(border1, border2)}`);
}
