/*
1. Write a function named 'makeTea' that takes one parameter, 'typeOfTea', and returns a string like 'Making Green Tea' when called 
    with 'green tea'. Store the result in a variable named 'teaOrder'.
*/
function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
}

let teaOrder = makeTea("green tea");
// console.log(teaOrder);

/*
2. Create a fucntion named 'orderTea' that takes one parameter, 'teaType'. Inside this funciton, create another function 
    named 'confirmOrder' that returns a message like 'Order confirmed like chai'. 
    call 'confirmOrder' from within 'orderTea' and return the result.
*/

function orderTea(teaType) {
  function confirmOrder() {
    return `Order confirmed for ${teaType}`;
  }
  return confirmOrder();
}

let orderConfirmation = orderTea("chai");
// console.log(orderConfirmation);

/*
3. Write an arrow funciton named 'calculateTotal' that takes two parameters: 'price' and 'quantity'. 
    The function should return the total cost by multiplying the 'price' and 'quantity'.
    Store the result in a variable named 'totalCost'.
*/

const calculateTotal = (price, quantity) => {
  return price * quantity;
};
// const calculateTotal = (price, quantity) => price * quantity; implict return

let totalCost = calculateTotal(100, 20);
// console.log(totalCost);

/*
4. Write a function named 'processTeaOrder' that takes another function, 'makeTea' as a parameter.
    and calls it with the argument 'earl grey'
    Return the result of calling 'makeTea'.
*/

function makeTea(typeOfTea) {
  return `Maketea: ${typeOfTea}`;
}
function processTeaOrder(teaFunction) {
  return teaFunction("earl grey");
}

let order = processTeaOrder(makeTea);
// console.log(order);

/*
5. Write a function named 'createTeaMaker' that returns another function. The returned function should
    take one parameter, 'teaType', and return a message like 'Making green tea'.
    Store the returned function in a variable named 'teaMaker' and call it with 'green tea'.
*/

function createTeaMaker() {
  return function (teaType) {
    return `Making ${teaType}`;
  };
}

let teaMaker = createTeaMaker();
console.log(teaMaker("green tea"));
