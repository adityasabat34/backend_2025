console.log("hello");

const fs = require("fs");
fs.writeFile("./hello.txt", "hello Nodejs", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("success");
  }
});
