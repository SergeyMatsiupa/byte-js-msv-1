// OBJECTS PRACTICE

const num1 = 10;
let num2 = num1;

num2 = 22;
console.log(`num1`, num1);
console.log(`num2`, num2);


const a = {
    x: "y",
  };
  
  const b = a;
  const c = b;
  
  c.x = "z";
  
  console.log(`b`, b);
  console.log(`a`, a);


  const cube = {
    color: "black",
    dimensions: {
      height: 100,
      width: 200,
    },
  };
  
  const user = {
    name: "John",
  };
  
  const userClone = {};
  userClone.name = user.name;
  
  userClone.name = "Peter";
  
console.log(`user`, user);
console.log(`userClone`, userClone)
  


const car = {
    name: "BMW",
    year: 2020,
    price: 30000,
  };
  
  const makeClone = (obj) => {
    const clone = {};
  
    for (let key in obj) {
      // console.log(`key`, key);
      // console.log(`obj[key]`, obj[key])
      clone[key] = obj[key];
    }
  
    return clone;
  };
  
  const carClone = makeClone(car);
  
  carClone.year = 2021;
console.log(`car`, car);
console.log(`carClone`, carClone);


const cubeClone = makeClone(cube);
cubeClone.color = "white";
cubeClone.dimensions.height = 1000;
console.log(`cube`, cube);
console.log(`cubeClone`, cubeClone);



const loopFactarial = (n) => {
    let result = 1;
  
    for (let i = 0; i < n; i++) {
      // result = result * (n - i);
      result *= n - i;
    }
  
    return result;
  };
  
const factorial = loopFactarial(4);
console.log(`factorial`, factorial);
  
const recursiveFactorial = (n) => {
    if (n === 1) {
      return n;
    }
  
    return n * recursiveFactorial(n - 1);
  };
  
console.log(`recursiveFactorial(4)`, recursiveFactorial(4));



const makeDeepClone = (obj) => {
    const clone = {};
  
    // console.log(`obj`, obj);
  
    for (let key in obj) {
      if (typeof obj[key] !== "object") {
        clone[key] = obj[key];
      } else {
        // console.log(`obj[key]`, obj[key]);
  
        clone[key] = makeDeepClone(obj[key]);
      }
    }
  
    return clone;
  };
  
  const cubeDeepClone = makeDeepClone(cube);
  
  cubeDeepClone.dimensions.height = 1001;
  console.log(`cube`, cube);
  console.log(`cubeDeepClone`, cubeDeepClone);


  const deepObject = {
    a: {
      b: {
        c: {
          d: {
            e: 1,
          },
        },
      },
    },
    f: 2,
  };
  
  const deepClone = makeDeepClone(deepObject);
  deepClone.a.b.c.d.e = 2;
  
  console.log(`deepObject`, deepObject);
  console.log(`deepClone`, deepClone);
  