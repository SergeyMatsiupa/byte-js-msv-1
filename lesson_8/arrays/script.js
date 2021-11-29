// ARRAYS


// объявление массива

const exmapleArr = new Array();
const exampleArr2 = [];


// хранение значений в массиве
const numbers = [10, 20, 30, 40];
const names = ["John", "Peter", "Hannah"];
const multidimensional = [
  [1, 2, 3],
  [10, 20, 30],
  [100, 200, 300],
];

const userAge = 25;
const random = [
  1,
  true,
  "string",
  userAge,
  {
    a: "x",
    b: "y",
  },
  () => "I am function in array!",
  [2, 3, 4],
];

console.log(`numbers`, numbers)
console.log(`random`, random)

console.log(`random`, random)
console.log(`random.length`, random.length);


console.log(`random[0]`, random[0]);
console.log(`random[4]`, random[4]);
console.log(`random[4].a`, random[4].a);
console.log(`random[5]()`, random[5]());
console.log(
  `random[random.length - 1][2]`,
  random[random.length - 1][2]
);
console.log(`random[10]`, random[10]);



// изменение значений массива

const friends = ["Sam", "Jack", "John"];
friends[3] = 'Gabriel';
friends[2] = 'Ann'

console.log(`friends`, friends);




// Массив как очередь и стек

// Очередь
const bytes = [2, 4, 8, 16];
bytes.push(32);

console.log(`bytes after push`, bytes);


bytes.shift();
console.log(`bytes after shift`, bytes);




// Стек
const animals = ["lion", "zebra", "tiger"];
animals.push("elephant");
console.log(`animals after push`, animals);

animals.pop();
console.log(`animals after pop`, animals);




const digits = [1, 2, 3];

digits.unshift(0);
console.log(`digits`, digits);

digits.unshift(-2, -1);
console.log(`digits`, digits);

digits.push(4, 5);
console.log(`digits`, digits);



// Перебор массива
const nums = [1, 10, 100, 1000];

for (let i = 0; i < nums.length; i++) {
  console.log(`nums[i]`, nums[i]);
}

for (let number of nums) {
  console.log(`number`, number)
}

for (let index in nums) {
  console.log(`index`, index)
  console.log(`number`, nums[index])
}



const getArrSum = (arr) => {
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  };
  
const sum = getArrSum([13, 1345, 2324, 76]);
console.log(`sum`, sum)
  
  


function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) {
      // console.log(`item`, item);
      partialSum += item;
      // console.log(`partialSum`, partialSum);
      maxSum = Math.max(maxSum, partialSum);
      if (partialSum < 0) {
        partialSum = 0;
      }
    }
  
    return maxSum;
  }
  
  console.log(getMaxSubSum([-1, 2, 3, -9, 3])); // 5
  console.log( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
  console.log( getMaxSubSum([-2, -1, 1, 2]) ); // 3