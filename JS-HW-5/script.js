const LOGIN = "admin";
const PASSWORD = "11111";
const MAX_LOGIN_ATTEMPTS = 3;

// 1.1
function task1f() {
    
    const authorize = () => {
        let userPassword = "";
        let userLogin = "";
        let isAuthSuccess = false;
        for(let i = 1; i <= MAX_LOGIN_ATTEMPTS; i++) {
            userLogin = prompt("Please enter the user login");
            if (userLogin !== LOGIN) {
                alert(`User login is incorrect` + (i<MAX_LOGIN_ATTEMPTS ? `, please repeat (${MAX_LOGIN_ATTEMPTS - i} attempts left)` : `!`));
                continue;
            } else {
                userPassword = prompt("Please enter the user password");
                if (userPassword !== PASSWORD) {
                    alert(`User password is incorrect` + (i<MAX_LOGIN_ATTEMPTS ? `, please repeat (${MAX_LOGIN_ATTEMPTS - i} attempts left)` : `!`));
                    continue;
                } else {
                    alert(`Welcome, ${userLogin}!`)
                    isAuthSuccess = true;
                    break;
                }
            }
        }
    } 
    
    authorize();
}

// 1.2
function task1w() {
    
    const authorize = () => {
        let userPassword = "";
        let userLogin = "";
        let isAuthSuccess = false;
        let i = 0;
        do {
            i++;
            userLogin = prompt("Please enter the user login");
            if (userLogin !== LOGIN) {
                alert(`User login is incorrect` + (i<MAX_LOGIN_ATTEMPTS ? `, please repeat (${MAX_LOGIN_ATTEMPTS - i} attempts left)` : `!`));
                continue;
            } else {
                userPassword = prompt("Please enter the user password");
                if (userPassword !== PASSWORD) {
                    alert(`User password is incorrect` + (i<MAX_LOGIN_ATTEMPTS ? `, please repeat (${MAX_LOGIN_ATTEMPTS - i} attempts left)` : `!`));
                    continue;
                } else {
                    alert(`Welcome, ${userLogin}!`)
                    isAuthSuccess = true;
                }
            }
        } while (i <= MAX_LOGIN_ATTEMPTS && !isAuthSuccess);
    } 
    
    authorize();
}


// 2
function task2() {
    const getPrimeNums = (boundStart = 2, boundEnd) => {
        boundStart = (boundStart >= 2 ? boundStart : 2);
        rezStr = '';
        for(let i = boundStart; i <= boundEnd; i++) {
            let isPrime = true;
            for(let j = 2; j <= i; j++) {
                if(i % j === 0 && j < i) {
                    isPrime = false;
                }
            }
            if (isPrime) {
                rezStr += i + ' ';
            };
        }
        return rezStr;
    }
    
    let boundStart = +prompt('Please enter the Start of the boundary')
    let boundEnd = prompt('Please enter the End of the boundary')
    if (0 < boundStart + boundEnd) {
        console.log(`getPrimeNums(${boundStart},${boundEnd})`, getPrimeNums(boundStart,boundEnd))
    }
    
}


