const http = require("http");
const fs = require("fs");
// const os = require("os");

// console.log(os.cpus().length);

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  if (req.url == "/men") {
    res.write("<h1>men</h1>");
    res.end();
  }
  res.write(`
    <html lang='en'>
      <head>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Document</title>
      </head>
      <body>
      <head>
        <nav>
          <ul>
            <li><a href='/men'>men</a></li>
            <li><a href='/women'>women</a></li>
            <li><a href='/kids'>kids</a></li>
          </ul>
        </nav>
        </head>
      </body>
    </html>
  `);

  res.end();
});
const PORT = 5500;
server.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
