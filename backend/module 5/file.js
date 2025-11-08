const fs = require("fs");

// async file creation
fs.writeFileSync("./test.txt", "This is a test file", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File created successfully");
  }
});

// sync file creation
fs.readFile("./test.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

fs.appendFileSync("./test.txt", `Hhello world\n`);
