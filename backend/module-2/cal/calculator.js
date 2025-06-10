const sumOfNumRequest = require("../sum");

const reqHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
        <html>
  <head>
    <title>Document</title>
  </head>
  <body>
      <h1>Practice set</h1>
      <head>
        Welcome to Calculator
      </head>
      <br />
      <a href="/calculator">go to calculator</a>
  </body>
</html>
        `);
    return res.end();
  } else if (req.url.toLowerCase() === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
        <html lang="en">
    <title>Document</title>
  </head>
  <body>
    <h1>Cal</h1>
    <form action="/calculator-result" method="POST">
    <input type="text" name="num1" placeholder="Enter first number" />
    <input type="text" name="num2" placeholder="Enter second number" />
    <input type="submit"  value="Add"/>
    </form>
  </body>
</html>
        `);
    return res.end();
  } else if (
    req.url.toLowerCase() === "/calculator-result" &&
    req.method === "POST"
  ) {
    return sumOfNumRequest(req, res);
  }

  res.setHeader("Content-Type", "text/html");
  res.write(`
    <html>
      <head><title>Practise Set</title></head>
      <body>
        <h1>404 Page Does not Exist</h1>
        <a href="/">Go To Home</a>
      </body>  
    <html>  
  `);
  return res.end();
};

module.exports = reqHandler;
