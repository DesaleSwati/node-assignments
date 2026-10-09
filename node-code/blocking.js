const crypto = require('crypto');

console.log('Hello World');

var a = 1078698;
var b = 20986;

crypto.pbkdf2('password', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
    console.log("key is generated.");
});

function multiplyFn(x, y){
    const result = a * b;
    return result;
}

var c = multiplyFn(a, b);
 console.log("Multiplication result is : ", c);
 