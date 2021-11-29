// 1
function task1() {
    const getTrueNumb = (arr) => {
        let trueNumb = 0;
        for (let item of arr) {
            if(item) trueNumb++; 
        }
        return trueNumb;
    }

    // const arrr = [true, false, false, true, false];
    // const arrr = [false, false, false, false];
    const arrr = [];
    console.log(`Number of TRUE values in [${arrr}] is ${getTrueNumb(arrr)}`);
}


//2
function task2() {

    const getOccurrencesCount = (inpArr) => {
        const outObj = {};
        for (let item of inpArr) {
            if(item in outObj) {
                outObj[item]++;
            } else {
                outObj[item] = 1;
            }
        }
        
        return outObj;
    }

    // const inpArr = ["a", "v", "a", "b", "b"];
    const inpArr = [
        "apples",
        "oranges",
        "pears",
        "pears",
        "apples",
        "oranges",
        "oranges",
        "pears",
      ];
    const rez = getOccurrencesCount(inpArr);
    console.log(`rez`, rez)
}



//3
function task3() {

    const findExcess = (arr) => {
        let isEven = ((arr[0] % 2 === 0) + (arr[1] % 2 === 0) + (arr[2] % 2 === 0)) >= 2;
        
        for (let item of arr) {
            if(isEven) {
                if (item % 2 !== 0) return item;
            } else {
                if (item % 2 === 0) return item;
            }
        }
    }

    // const arr = [0, 1, 2];
    // const arr = [1, 2, 3];
    // const arr = [2, 6, 8, 10, 3];
    // const arr = [0, 0, 3, 0, 0];
    const arr = [1, 1, 0, 1, 1];
    console.log(`Excess is ${findExcess(arr)}`);

}
