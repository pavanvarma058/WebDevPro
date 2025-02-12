let car = {
  make: "toyota",
  model: "camry",
  year: 2020,
  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};

// console.log(car.start());

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let john = new Person("john", 20);
console.log(john.name);

function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  return `${this.type} makes sound`;
};

Array.prototype.pavan = function () {
  return `Custom method ${this}`;
};

let myArr = [1, 2, 3];
console.log(myArr.pavan());

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

// inheritance
class Car extends Vehicle {
  drive() {
    return `${this.make} : This is an inheritance example`;
  }
}

let myCar = new Car("Tata", "Nano");
// console.log(myCar.start());
// console.log(myCar.drive());

let vehicle1 = new Vehicle("Toyota", "Corolla");
// console.log(vehicle1.make);

// Encapsulation
// I want to restrict the direct access to the object data

class BankAccount {
  #balance = 0; // this cannot be accessed outside the class

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new BankAccount();
// console.log(account.getBalance());

// Abstraction
// It hides the complex implementational things

class CoffeeMachine {
  start() {
    return `Starting the Machine...`;
  }

  brewCoffee() {
    return `Brewing Coffee`;
  }

  pressStartButton() {
    let msg1 = this.start();
    let msg2 = this.brewCoffee();
    return `${msg1} + ${msg2}`;
  }
}

let myMachine = new CoffeeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
// console.log(myMachine.pressStartButton());

// Polymorphism
// the ability of something to have or to be displayed in more than one form

class Bird {
  fly() {
    return `flying...`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguins can't fly`;
  }
}

let bird = new Bird();
let penguin = new Penguin();
// console.log(bird.fly());
// console.log(penguin.fly());

// static method
// static's are a special methods which are call by only 'Class'
class Calculator {
  static add(a, b) {
    return a + b;
  }
}

// let miniCal = new Calculator();
// console.log(miniCal.add());

console.log(Calculator.add(2, 3));

// Getters and Setters

class Employee {
  #salary;
  constructor(name, salary) {
    if (salary < 0) {
      throw new Error("Salary Cannot be Negative.!");
    }
    this.name = name;
    this.#salary = salary;
  }

  get salary() {
    return `You're not allowed to see salary`;
  }

  set salary(value) {
    if (value < 0) {
      console.error("Invalid Salary");
    } else {
      this.salary = value;
    }
  }
}

let emp = new Employee("Alice", 50000);
console.log(emp._salary);
