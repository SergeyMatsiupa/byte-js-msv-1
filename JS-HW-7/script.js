// 1
function task1() {
    
    const makeSchedule = () => {
        const curSchedule = {};
        do {
            const curTime = prompt('Please enter the time of a task in format HH:mm');
            if (!curTime || !curTime.trim()) break;
            const curTask = prompt('Please enter the task text');
            if (!curTask || !curTask.trim()) break;
            curSchedule[curTime] = curTask;
        } while (true)
        return curSchedule;
    }
    
    const mySchedule = makeSchedule(); 
    console.log(`mySchedule`, mySchedule)
}


//2
function task2() {

    const getSalariesSum = (objSalaries) => {
        let salariesSum = 0;
        for (let employee in objSalaries) {
            salariesSum += Number(objSalaries[employee]) * 100;
        }
        return salariesSum / 100;
    }

    const salaries = {
        John: "4300.00",
        Ann: "5700.40",
        Pete: "4900.95",
      };

    console.log(`Sum of salaries is ${getSalariesSum(salaries)}`)
}
