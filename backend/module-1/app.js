const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  req.write("<head><title>Node js</title></head>");
  res.write("<body>");
  res.write("<h1>hello world</h1>");
  res.write("</body>");
  res.write("</html>");
  res.end();
});
const PORT = 5500;
server.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
