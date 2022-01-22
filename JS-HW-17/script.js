let secondsLeft = 0;
let timeoutId = null;
let intervalId = null;

const startButElem = document.getElementById('btn-start-id');
const stopButElem = document.getElementById('btn-stop-id');
const timeCaptElem = document.getElementById('timer-value-id');

stopButElem.disabled = true;


const updateForm = () => {
        // console.log(`secondsLeft`, secondsLeft);
    const numHours = 
    Math.trunc(secondsLeft / (60*60));
    const numMinutes = 
    Math.trunc((secondsLeft - numHours*60*60) / 60);
    const numSeconds = secondsLeft - numHours*60*60 - numMinutes*60;
    rezStr = `${("0" + numHours).slice(-2)} : ${("0" + numMinutes).slice(-2)} : ${("0" + numSeconds).slice(-2)}`;
    timeCaptElem.innerText = rezStr;
}

const intervalActs = () => {
    updateForm();
    secondsLeft -= 1;
}

const startTimerHandl = () => {
    const startTimer = (seconds) => {
        return new Promise((resolve) => {
            timeoutId = setTimeout(() => {
                resolve();
            }, (seconds)*1000);
        });
    }

    if (!secondsLeft) {
        // first execution of timer
        secondsLeft = +prompt('Please enter delay time in seconds','30');
    }
    // actions when timer finished
    startTimer(secondsLeft).then(() => {
        clearInterval(intervalId);
        startButElem.disabled = false;
        updateForm();
        alert("Timer end!");
      });
    // executing interval activities
    intervalActs();
    intervalId = setInterval(() => {
        intervalActs();
    }, 1000);
    stopButElem.disabled = false;
    startButElem.disabled = true;
}


const pauseTimerHandl = () => {
    clearInterval(intervalId);
    clearTimeout(timeoutId);
    startButElem.disabled = false;
    stopButElem.disabled = true;
}


startButElem.addEventListener('click', startTimerHandl);
stopButElem.addEventListener('click', pauseTimerHandl);