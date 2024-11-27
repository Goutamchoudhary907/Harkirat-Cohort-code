// const fs=require("fs");

// fs.readFile("a.txt", "utf-8" , function(err,data){
//     console.log(data);
    
// })
const fs = require('fs');

fs.readFile('Week 1/a.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log(data);
    }
});