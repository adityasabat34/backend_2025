const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  console.log("Handling / for get request", req.url, req.method);
  res.send(`Handling / for get request
    <a href="/register"><button>Register</button></a>`);
  next();
});

app.get("/register", (req, res, next) => {
  console.log("Handling /register for get request", req.url, req.method);
  res.send(`<h1>Register Page</h1>
    <form action="/register" method="POST">
      <input type="text" name="House name" placeholder="Enter House name" required />
      <button type="submit">Register</button>
    </form>`);
  next();
});

app.post("/register", (req, res, next) => {
  console.log(
    "Handling /register for post request",
    req.url,
    req.method,
    req.body
  );
  res.send(`<h1>Registration Successful</h1>
    <p>Welcome, ${req.body["House name"]}!</p>`);
  next();
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});
