/*
1. Write a 'while' loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable
   called 'sum'. 
*/
let num = 1;

let sum = 0;
// 1+2+3+4+5
while (num <= 5) {
  sum += num;
  num++;
}
console.log(sum);
