require("./xyz.js"); //one module can be imported into another module 

//load json file and use file data in the code
// const data = require("./data.json");
// console.log(JSON.stringify(data));

// import { x, calculateSum } from "./sum.js"; 

// const { calculateSum, x } = require("./calculate/sum.js"); //importing sum module

// const { calculateMultiply } = require("./calculate/multiply.js"); 

const { calculateSum, calculateMultiply } = require("./calculate"); //importing index module which is importing sum and multiply modules

var name = "Swati Desale";

var a = 5;

var b = 23;

// z = "common module"; //strict mode will not allow this

//var x = 100;
//console.log(name);
//console.log(a + b);

//console.log(global); //the top-level object containing built-in functions

//console.log(this); // empty object in NodeJS

// Inside Node.js
//console.log(globalThis === global); // true

calculateSum(a, b); //calling the function from sum module
calculateMultiply(a, b);

// console.log(x);
// console.log(z);
