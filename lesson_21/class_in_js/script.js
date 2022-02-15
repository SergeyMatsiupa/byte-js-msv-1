// Сlasses in JS

// class

// class НазваниеКласса {
//   constructor(аргументы) {
//     // ... создаем объект-экземпляр класса
//   }

//   // методы класса
//   sayHi() {}
// }
//
// const экземлярКласса = new HaзваниеКласса(аргументы)

class Person {
  constructor(name) {
    console.log(`name`, name);
    this.name = name;
  }

  sayHi() {
    console.log(`Hi! My name is ${this.name}`);
  }
}

const person = new Person("Peter");
console.log(`person`, person);


// function Animal(name) {
//   this.name = name;
//   this.isHungry = true;
// }

// Animal.prototype.eat = function () {
//   this.isHungry = false;
// };



class Animal {
  constructor(name) {
    this.name = name;
    this.isHungry = true;
  }

  eat() {
    this.isHungry = false;
  }
}

const animal = new Animal("Barsik");
console.log(`animal`, animal);
animal.eat();
console.log(`animal`, animal)




// Class getters/setters

class Human {
  constructor(name, age) {
    this.name = name;
    this._age = age;
  }

  set age(age) {
    console.log(`set`, age)
    if (age < 1 || age > 100) {
      throw new Error("Invalid age. Age must be more than 0 and less than 100");
    }

    this._age = age;
  }

  get age() {
    return this._age;
  }
}

const person1 = new Human("John", 42);
console.log(`person1`, person1);

person1.age = 90;

console.log(`person1`, person1);

console.log(person1.age)




// Static methods

class Car {
  constructor(speed, name) {
    this.speed = speed;
    this.name = name;
  }

  static race(...cars) {
    return cars.sort((a, b) => b.speed - a.speed)[0]
  }
}

const oldCar = new Car(90, "Ford");
const basicCar = new Car(180, "Volkswagen");
const raceCar = new Car(300, "Ferrari");

const winner = Car.race(basicCar, oldCar, raceCar);

console.log(`winner`, winner)





class User {
    // constructor(options) {
    //   const { name, role, hasPermissions } = options;
    //   this.name = name;
    //   this.role = role;
    //   this.hasPermissions = hasPermissions;
    // }
    //   constructor(options) {
    //     const { name, role } = options;
    //     this.name = name;
    //     this.role = role;
    //     if (this.role === 'admin') {
    //       this.hasPermissions = true;
    //     } else {
    //       this.hasPermissions = false;
    //     }
    //   }
    constructor(options) {
      const { name, role, hasPermissions } = options;
      this.name = name;
      this.role = role;
      this.hasPermissions = hasPermissions;
    }
  
    static createAdmin(name) {
      return new this({
        name,
        role: "admin",
        hasPermissions: true,
      });
    }
  }
  
  // const admin = new User({
  //   name: 'Peter',
  //   role: 'admin',
  //   hasPemissions: true,
  // })
  
  // const admin = new User({
  //   name: "Peter",
  //   role: "admin",
  // });
  
const admin = User.createAdmin('Peter')
  
console.log(`admin`, admin);
  


// Наследование классов

class Animal1 {
    constructor(name) {
      this.name = name;
      this.isHungry = true;
    }
  
    eat() {
      this.isHungry = false;
    }
  }
  
  class Bird extends Animal1 {
    // constructor(...arguments) {
    // super(...arguments)
    // }
    constructor(color, name) {
      super(name);
      this.color = color;
    }
    fly() {
      if (bird.isHungry) {
        super.eat();
      }
      console.log("I am flying!");
    }
  }
  
const bird = new Bird('blue', 'Rio');
console.log(`bird`, bird)

bird.eat();
bird.fly()
console.log(`bird`, bird)




// function Car({ make, model }) {
//   this.make = make;
//   this.model = model;
//   this.distance = 0;
//   this.isStarted = false;
// }

// Car.prototype.start = function () {
//   this.isStarted = true;
// };

// Car.prototype.move = function () {
//   if (!this.isStarted) {
//     throw new Error(`Start ${this.make} ${this.model} before move`);
//   }

//   this.distance++;
// };

// function RacingCar(options) {
//   Car.call(this, options);
// }

// RacingCar.prototype = Object.create(Car.prototype);

// RacingCar.prototype.move = function () {
//   Car.prototype.move.call(this);

//   this.distance++;
// };

class Car1 {
    constructor({ make, model }) {
      this.make = make;
      this.model = model;
      this.distance = 0;
      this.isStarted = false;
    }
  
    start() {
      this.isStarted = true;
    }
  
    move() {
      if (!this.isStarted) {
        throw new Error(`Start ${this.make} ${this.model} before move`);
      }
  
      this.distance++;
    }
  }
  
  class RacingCar extends Car1 {
    move() {
      super.move();
      this.distance++;
    }
  }
  
  const car = new Car1({
    make: "Volkswagen",
    model: "Golf",
  });
console.log('car', car);
  
  const racingCar = new RacingCar({
    make: "Porsche",
    model: 911,
  });
console.log('racingCar', racingCar);

