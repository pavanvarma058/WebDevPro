console.log("Hi how are you?");

function sayHello() {
  console.log("Hello, I'm fine..!");
}
// Asynchronous Example
// here the code does not run line by line because we have given an async function so the code will take some time
// to run and comeback after other code is executed and until then it will wait in queue.
setTimeout(sayHello, 4000);

for (let i = 0; i < 10; i++) {
  console.log(i);
}
