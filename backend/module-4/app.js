const http = require("http");
const fs = require("fs");
const test = require("./test");

PORT = 4001;

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Hello Server</h1>");
  test();
});

server.listen(PORT, (req, res) => {
  console.log(`server is running on http://localhost:${PORT}`);
});
