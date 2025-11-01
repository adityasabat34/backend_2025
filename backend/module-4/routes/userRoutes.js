const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("Handling / for get request", req.url, req.method);
  res.send(`Handling / for get request
    <a href="/register"><button>Register</button></a>`);
  next();
});

module.exports = router;
