// OBJECTS

// const obj = {};

// const example = {
//   ключ: значение,
//   ключ: значение,
// }

const userName = "Sam";
const userAge = 42;

const user = {
  name: "Sam", // <- пара ключ-значение  (свойство объекта)
  age: 42, // <- запятая после каждого свойста (после каждой пары)
};

console.log(`user`, user);



const keyNamesExample = {
    test: "valid",
    test_test: "valid",
    testTest: "valid",
    "test-test": "valid",
    "1test": "valid",
    "test test": "valid, but not recommended",
    // 1test: 'invalid',
    // user-name: 'invalid',
    // user name: 'invalid',
  };

  


// Доступ к свойствам объекта
// Через точку (obj.key)
// Через квадратные скобки (obj[key])

const clientData = {
    login: "tester",
    email: "test@gmail.com",
    age: 27,
    isOnline: true,
    "user-name": "Jack",
  };
  
console.log(`clientData.login`, clientData.login);
console.log(`clientData.email`, clientData.email);
  
// const clientAge = clientData.age;
// console.log(`clientAge`, clientAge)
  
console.log(`clientData['email']`, clientData["email"]);
 
const ageKeyName = "age";
const clientAge = clientData[ageKeyName];
console.log(`clientAge`, clientAge);
  
console.log(`clientData.isOnline`, clientData.isOnline);
const testKey = "isOnline";
console.log(`clientData[testKey]`, clientData[testKey]);
  
// console.log(`clientData.user-name`, clientData.user-name)
console.log(`clientData["user-name"]`, clientData["user-name"]);


// const key = prompt(
//   `Что вы хотите узнать о клиенте ?
// [login, email, age, isOnline]
//   `
// );
// alert(clientData[key]);




// Запись свойств в объект


const car = {
    brand: "bmw",
    model: "m5",
  };
  
console.log(`car`, car);

car.brand = "mercedes";
console.log(`car`, car);

car.model = "s600";
console.log(`car`, car);

car.price = "50000";
console.log(`car`, car);



// const key = prompt("Какое свойство вы хотите задать?");
// const value = prompt("Укажите значение свойства:");
  
// car[key] = value;
console.log(`car`, car)
  
const newKey = "test";
  
  const object = {
    [newKey]: "new value",
    // [prompt('Ключ')]: prompt('Значение: ')
  };
  
console.log(`object`, object)
  



// Значение переменной как значение свойства объекта

const width = 200;
const height = 400;

// const rectangle = {
//   width: width,
//   height: height,
// };

const rectangle = {
  width,
  height,
};
console.log(`rectangle`, rectangle);


const createUser = (email, password, isAdmin) => {
    return {
      email,
      password,
      isAdmin,
    };
  };
  
  const admin = createUser("admin@gmail.com", "1q2w3e", true);
  const client = createUser("client@gmail.com", "123456", false);
console.log(`client`, client);
console.log(`admin`, admin);




// ОПЕРАТОР "IN"

const hasIsAdminProperty = "isAdmin" in admin;
console.log(`hasIsAdminProperty`, hasIsAdminProperty);


// const test = admin.isAdmin

const getObjectPropertyValue = (object, key) => {
    if (!(key in object)) {
      return "Такого свойства нет!";
    }
  
    return object[key];
  };


// const resolvedKey = prompt("Какое свойство вы хотите получить?");
// const resultValue = getObjectPropertyValue(admin, resolvedKey);

// console.log(`resultValue`, resultValue)



// ВЛОЖЕННЫЕ ОБЪЕКТЫ

const family = {
    dad: {
      name: "Jack",
      age: 42,
    },
    mom: {
      name: "Ann",
      age: 43,
    },
    son: {
      name: "Kyle",
      age: 14,
    },
  };

const dadAge = family.dad.age;
const momName = family["mom"]["name"];

console.log(`dadAge`, dadAge)
console.log(`momName`, momName)
  


// ПЕРЕБОР ОБЪЕКТОВ
// ЦИКЛ FOR...IN
const obj = {
    a: 1,
    b: 2,
    c: 3,
  };
  
for (let key in obj) {
    console.log(`key`, key);
    console.log(`obj[${key}]`, obj[key]);
}
  
  

const salaries = {
    accontant: 1200,
    manager: 1500,
    developer: 2200,
  };
  
  const getSalariesTotal = (salaries) => {
    let total = 0;
    for (let employee in salaries) {
      // console.log(`employee`, employee);
      // console.log(`salaries[empleyee]`, salaries[employee])
      total += salaries[employee];
    }
  
    return total;
  };
  
  
const totalResult = getSalariesTotal(salaries);
console.log(`totalResult`, totalResult)
  
  

const getOldestFamilyMemberName = (family) => {
    let oldestMember;
    let maxAge = 0;
  
    for (let member in family) {
      const currentMember = family[member];
      const currentMemberAge = currentMember.age;
  
      if (currentMemberAge > maxAge) {
        oldestMember = currentMember;
        maxAge = currentMemberAge;
      }
    }
  
    return oldestMember.name;
  };
  
  
const oldestMemberName = getOldestFamilyMemberName(family);
console.log(`oldestMemberName`, oldestMemberName);





// МЕТОДЫ ОБЪЕКТА

const dog = {
    name: "Rex",
    voice: function () {
      console.log("woof!");
    },
  };
  
  const cat = {
    name: "Kitty",
    voice: function () {
      console.log("meow!");
    },
  };
  
cat.voice();
dog.voice();