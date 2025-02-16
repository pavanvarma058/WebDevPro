const person = {
  name: "Pavan",
  greet() {
    console.log(`Hi, my name is ${this.name}`);
  },
};

person.greet();

// now here it will show undefined in the name
const userName = person.greet;
userName();

const boundGreet = person.greet.bind({ name: "John" });
boundGreet();

// bind, call and apply
