const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>HomePage</title></head>");
    res.write("<body>");
    res.write("<h1>HomePage</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Users</title></head>");
    res.write("<body>");
    res.write("<h1>Users</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Node js</title></head>");
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
