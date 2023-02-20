// Synchronous or blocking
// -line by line execution

// Asynchronous or non-blocking
// - line by line execution not guaranteed
// - callbacks will fire

//W3 Method
// const fs = require("fs");
// let text = fs.readFile("dele.txt", "utf-8", function(err){
//     if(err) throw err
//     console.log("This is a message");
// });

const fs = require("fs");
fs.readFile("dele.txt", "utf-8", (err, data) => {
    console.log(data);
});
console.log("This is a message");