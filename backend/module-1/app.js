const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Users</title></head>");
    res.write("<body>");
    res.write("<h1>Enter Your Details</h1>");
    res.write("<form action='/create-user' method='POST'>");
    res.write("<input type='text' name='username' placeholder='username'/>");
    res.write("<label for='male'>male</label>");
    res.write("<input type='radio' name='gender' id='male' vlaue='male'/>");
    res.write("<label for='female'>Female</label>");
    res.write("<input type='radio' name='gender' id='female' value='female'/>");
    res.write("<input type='submit' value='submit'/>");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url.toLowerCase() == "/create-user" && req.method == "POST") {
    fs.writeFileSync("./users.txt", "hello");
    res.statusCode = 302;
    res.setHeader("Location", "/hhs");
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
