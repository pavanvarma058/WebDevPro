// clousure example
// there are some special functions where they did not forget about the memory they were provided with.
function outer() {
  let counter = 4;
  return function () {
    counter++;
    return counter;
  };
}

let increment = outer();
console.log(increment());
console.log(increment());
console.log(increment());
