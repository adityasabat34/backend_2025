const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World! this is home page.");
});

app.get("/about", (req, res) => {
  res.send(
    "This is the about page." +
      "Hey " +
      req.query.name +
      ", welcome to the about page!" +
      " Your age is " +
      req.query.age
  );
});

app.post("/data", (req, res) => {
  res.send("Data received via POST request.");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${"localhost"}:${PORT}`);
});
