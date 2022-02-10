// OOP
// Object oriented programming

function Human(options) {
    console.log(`this in Human`, this);
    const { name, age } = options;
    this.name = name;
    this.age = age;
}

Human.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name}. I am ${this.age} years old`);
};

// instance
const human = new Human({ name: "Peter", age: 42 });
console.log(`human`, human);
human.sayHello()


// Extending class

function Citizen(options) {
    const { hometown, ...humanOptions } = options;
    Human.call(this, humanOptions);
    this.hometown = hometown;
    this.location = hometown;
  }
  
  // Citizen.prototype.__proto__ = Human.prototype;
  Citizen.prototype = Object.create(Human.prototype);
  
  Citizen.prototype.travel = function (city) {
    this.location = city;
  };
  
  Citizen.prototype.sayHello = function () {
    console.log(`Hello! Now my location is ${this.location}`);
  };
  
  const citizen = new Citizen({
    hometown: "London",
    age: 27,
    name: "Paul",
  });
  
console.log(`citizen`, citizen);
citizen.sayHello();
citizen.travel('Paris');
console.log(`citizen`, citizen)
citizen.sayHello();
  



// Cуперкласс (родительский класс)

function Car({ make, model }) {
    this.make = make;
    this.model = model;
    this.distance = 0;
    this.isStarted = false;
  }
  
  Car.prototype.start = function () {
    this.isStarted = true;
  };
  Car.prototype.move = function () {
    if (!this.isStarted) {
      // v1
      throw new Error(`Start ${this.make} ${this.model} before move`);
      // v2
      // this.start()
    }
  
    this.distance++;
  };
  
  const car = new Car({
    make: "Volkswagen",
    model: "Golf",
  });
  
  car.start();
  car.move();
  car.move();
  car.move();
  
console.log(`car`, car);


function RacingCar(options) {
    Car.call(this, options);
  }
  
  // Наследуем прототип
  RacingCar.prototype = Object.create(Car.prototype);
  
  RacingCar.prototype.move = function () {
    Car.prototype.move.call(this);
  
    this.distance++
  };
  
  const racingCar = new RacingCar({
    make: "Porsche",
    model: 911,
  });

racingCar.start();
racingCar.move(); // 1 2
racingCar.move(); // 2 4
  
console.log(`racingCar`, racingCar);
  
