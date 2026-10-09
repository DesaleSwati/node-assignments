console.log("sum module is loaded");

var x = "This is awesome";

function calculateSum(a, b) {
    const sum = a + b;

    console.log(sum);
}

// console.log(module.exports); //empty object;

/* older way of exporting modules */
// module.exports.x = x; 
// module.exports.calculateSum = calculateSum;

module.exports = { calculateSum, x }; //exporting the function