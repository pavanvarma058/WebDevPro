// check if a number is greater than another number:

let num1 = 5;
let num2 = 10;

if (num1 > num2) {
  console.log("num1 is greater than num2");
} else {
  console.log("Nope, num1 is not greater");
}

console.log("I am a regular code");

// check if a string is equal to another string:

let userName = "chai";
let anotherUserName = "chai";

if (userName == anotherUserName) {
  console.log("Pick another username");
} else {
  console.log("You can pick this username");
}

// check if a variable is number or not:

let score = 44;

if (typeof score === "number") {
  console.log("This is a number");
} else {
  console.log("No, that is not a number");
}

// check if a boolean value is true or false:

let isTrue = false;

if (isTrue) {
  console.log("It is true");
} else {
  console.log("It is false");
}

// check if an array is empty or not:

let items = [];

if (items.length === 0) {
  console.log("Array is empty");
} else {
  console.log("Array is not empty");
}
