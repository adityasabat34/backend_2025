const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("first middleware", req.url, req.method);
  next();
});

app.use("/", (req, res, next) => {
  console.log("second middleware", req.url, req.method);
  next();
});

app.use("/third", (req, res, next) => {
  // res.send("third middleware");
  console.log("third middleware", req.url, req.method);
  next();
});

// app.use("/", (req, res, next) => {
//   console.log("Handling / for get request", req.url, req.method);
//   res.send("Handling / for get request");
//   // next();
// });

app.get("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for get request", req.url, req.method);
  res.send(`<h1>Please give your details here</h1>
    <form method="POST" action="/contact-us">
      <input type="text" name="name" placeholder="Enter your name" />
      <input type="email" name="email" placeholder="Enter your email" />
      <button type="submit">Submit</button>
    </form>
  `);
  next();
});

app.post("/contact-us", (req, res, next) => {
  console.log(
    "Handling /contact-us for post request",
    req.url,
    req.method,
    req.body
  );
  next();
  // res.send("Handling /contact-us for post request");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/contact-us", (req, res, next) => {
  console.log(
    "Handling /contact-us for post request",
    req.url,
    req.method,
    req.body
  );
  res.send("Handling /contact-us for post request");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});
