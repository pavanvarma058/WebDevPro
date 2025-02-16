// function* -> generator
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

let gen = numberGenerator();
let genTwo = numberGenerator();
// next() -> iterator
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value); // it prints undefined, because we only provide 3 yield values only and the function doesn't know about the next

console.log(genTwo.next().value);
console.log(genTwo.next().value);
