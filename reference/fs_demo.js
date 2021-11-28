const fs = require('fs');
const path = require('path');

// Create folder
//fs.mkdir(path.join(__dirname, '/test'), err => {
//    if (err) throw err;
//    console.log("Folder Created...");
//});
/* Create and write to file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello, World\n', 
err => {
    if (err) throw err;
    console.log("File written to...");

    // Appending file
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello, Node.js', 
err => {
    if (err) throw err;
    console.log("File appended to...");
});
});


// Reading file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
*/

// Renaming a file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), 
path.join(__dirname, '/test', 'helloworld.txt'), 
err => {
    if (err) throw err;
    console.log('File renamed...');
});

