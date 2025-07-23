const http = require("http");
const express = require("express");

const app = express();

const server = http.createServer(app);

app.use((req, res, next) => {
  console.log("first middleware", req.url, req.method);
  next();
});

app.use((req, res, next) => {
  console.log("second middleware", req.url, req.method);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});
