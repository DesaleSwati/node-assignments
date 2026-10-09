const fs = require('fs');
const https = require('http');

console.log('Hello World');

var a = 1078698;
var b = 20986;

fs.readFileSync("./file.txt", "utf-8"); //10ms
console.log("This will execute after the file is read.");

https.get("http://dummyjson.com/products/1", (res) => {
    console.log("Fetched data successfully.");
});

setTimeout(() => {
    console.log("setTimeout called after 5 seconds.");
}, 5000);


