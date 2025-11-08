// const { error } = require("console");
const fs = require("fs");

console.log("start file reading");
// sync file creation
fs.readFile("./test.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
console.log("file reading in progress...");

console.log("end file reading");
