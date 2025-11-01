const express = require("express");
const router = express.Router();

router.get("/register", (req, res, next) => {
  console.log("Handling /register for get request", req.url, req.method);
  res.send(`<h1>Register Page</h1>
    <form action="/register" method="POST">
      <input type="text" name="House name" placeholder="Enter House name" required />
      <button type="submit">Register</button>
    </form>`);
  next();
});
