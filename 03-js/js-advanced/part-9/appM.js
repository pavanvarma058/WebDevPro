// Module import file

// default import
import mul from "./mathOperationsM.js";

console.log(mul(2, 2));

// named import
import { add, sub } from "./mathOperationsM.js";

console.log(add(2, 3));
console.log(sub(5, 2));
