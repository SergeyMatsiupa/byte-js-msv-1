// THIS KEYWORD

console.log(`this`, this)

function test() {
    return this;
  }
  
const thisFromFunction = test();
console.log(`thisFromFunction`, thisFromFunction);



const dog = {
    name: "Bobik",
    sayHello: function () {
      console.log(`${this.name} says Woof!`);
      console.log(this.name);
    },
  };
  
console.log(`dog.name`, dog.name)
dog.sayHello()



const admin = {
    name: "admin1",
  };
  
  const user = {
    name: "user1",
  };
  
  const sayMyName = () => {
    console.log(`this`, this);
    console.log(this.name);
  }
  
admin.sayName = sayMyName;
user.sayName = sayMyName;
  
sayMyName();
admin.sayName();
user.sayName()



const family = {
    members: {
      dad: {
        name: "Jack",
        age: 45,
      },
      mom: {
        name: "Ann",
        age: 43,
      },
      son: {
        name: "Kyle",
        age: 14,
      },
      getOldestFamilyMemberName: function () {
        let oldestMember;
        let maxAge = 0;
        // console.log(`this`, this)
        const family = this;
      
        for (let member in family) {
          const currentMember = family[member];
          const currentMemberAge = currentMember.age;
      
          if (currentMemberAge > maxAge) {
            oldestMember = currentMember;
            maxAge = currentMemberAge;
          }
        }
      
        return oldestMember.name;
      }
    },
   
   
  };

const oldestMemberName = family.members.getOldestFamilyMemberName();
console.log(`oldestMemberName`, oldestMemberName)




// NEW keyword


const obj = {};


function Person(name, surname) {
  // this = {}

  this.name = name;
  this.surname = surname;
  this.intro = function() {
    console.log(this)
    console.log(`Hello, my name is ${this.name} ${this.surname}`)
  }

  // return this;
}

const person1 = new Person('Jack', 'Black')
const person2 = new Person('John', 'Snow')

person1.intro();
person2.intro()
