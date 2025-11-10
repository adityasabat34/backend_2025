// const { error } = require("console");
const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);

  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>Home Page</h1>");
      break;

    case "/about":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>About Page</h1>");
      break;
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
