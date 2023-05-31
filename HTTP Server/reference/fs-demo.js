const { ifError } = require("assert");
const fs = require("fs");
const path = require("path");

// Create folder
// fs.mkdir(path.join(__dirname, '/test'),{}, (err) => {
//     if(err) throw err;
//     console.log("Folder created...");
// });

// Create and Write to file
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "Hello Mariga,",
  (err) => {
    if (err) throw err;
    console.log("Created file...");
  }
);

// Append File
fs.appendFile(
  path.join(__dirname, "/test", "hello.txt"),
  " Do you love Node.js?",
  (err) => {
    if (err) throw err;
    console.log("File appended to...");
  }
);

// Read File
fs.readFile(
  path.join(__dirname, "/test", "hello.txt"),
  "utf-8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);

// Rename File
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "helloWorld.txt"),
  (err) => {
    if (err) throw err;
    console.log("File rename...");
  }
);
