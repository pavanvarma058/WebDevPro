let userName = {
  firstName: "Pavan",
  isLoggedIn: true,
};

userName.firstName = "Yeswanth";
userName.lastName = "Varma";
console.log(userName.firstName);
console.log(userName.lastName);

console.log(typeof userName);

let today = new Date();
console.log(today.getDate());

// Array
// let heros = ["a", "b", "c", true];

let anotherUser = ["Pavan", true];
// console.log(anotherUser[0]);

let isValue = true;
console.log(isValue + 1);

let isNum = "2abc";
console.log(Number(isNum)); // NaN - not a number
console.log(isNum + 1);
