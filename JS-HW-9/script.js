// 1
const task1 = () => {

    const data = [
        {
          name: "John",
          age: 24,
          position: "senior",
          isActive: false,
        },
        {
          name: "Peter",
          age: 33,
          position: "middle",
          isActive: false,
        },
        {
          name: "Sam",
          age: 29,
          position: "junior",
          isActive: true,
        },
        {
          name: "Mary",
          age: 24,
          position: "middle",
          isActive: false,
        },
        {
          name: "Steve",
          age: 23,
          position: "middle",
          isActive: true,
        },
        {
          name: "Kate",
          age: 31,
          position: "middle",
          isActive: false,
        },
        {
          name: "Sally",
          age: 19,
          position: "junior",
          isActive: false,
        },
        {
          name: "Jack",
          age: 19,
          position: "middle",
          isActive: true,
        },
      ];

    const filterData = (data, condObject) => {
        let rezArr = [...data];
        for (let curCond in condObject) {
            // console.log(`curCond`, curCond);
            // console.log(`curCond`, condObject[curCond]);
            rezArr = rezArr.filter((dataElem) => dataElem[curCond] === condObject[curCond]);
        }
        return rezArr;
    }

    let filteredData = filterData(data, {age: 23});
    console.log('{age: 23}');
    console.log(`filteredData`, filteredData);

    filteredData = filterData(data, {age: 24});
    console.log('{age: 24}')
    console.log(`filteredData`, filteredData);

    filteredData = filterData(data, {age: 19, position: "junior" });
    console.log('{age: 19, position: "junior" }')
    console.log(`filteredData`, filteredData);

}


//2
function task2() {

    const ownForEach = (arr, cb) => {
        for (let elem in arr) {
            // console.log(`elem`, elem)
            cb(arr[elem], elem, arr);
        }
    }

    const ownMap = (arr, cb) => {
        // return arr.reduce((procsdArr, elem) => {
        //     return [...procsdArr, cb(elem)]
        // }, []);
        const rezArr = [];
        for (let elem of arr) {
            rezArr.push(cb(elem));
        }
        return rezArr;
    }

    const ownFilter = (arr, cb) => {
        // return arr.reduce((procsdArr, elem) => {
        //     return cb(elem) ? [...procsdArr, elem] : [...procsdArr];
        // }, []);
        const rezArr = [];
        for (let elem of arr) {
            if (cb(elem)) rezArr.push(elem);
        }
        return rezArr;
    }


    const isNegative = (number) => number < 0;
    const increment = (number) => number + 1;
    const logger = (element, index, array) => {
        console.log(`In array [${array}] on position ${index}: ${element}`);
        };

    ownForEach([1, 2, 3], logger);
    
    const ownMapRez = ownMap([1, 2, 3], increment);
    console.log(`ownMapRez`, ownMapRez)

    const ownFilterRez = ownFilter([-2, 4, -1], isNegative);
    console.log(`ownFilterRez`, ownFilterRez)
}