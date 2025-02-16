function Person(name) {
  this.name = name;
}

// Proto typal Inheritance;
Person.prototype.greet = function () {
  return `Hi, my name is ${this.name}`;
};

let pavan = new Person("Pavan");
console.log(pavan.greet());
