// const { URLSearchParams } = require("url");

const sumOfNumRequest = (req, res) => {
  body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });

  req.on("end", () => {
    const bodyString = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyString);
    const bodyObj = Object.fromEntries(params);
    const result = Number(bodyObj.num1) + Number(bodyObj.num2);
    console.log(result);

    res.setHeader("Content-Type", "text/html");
    res.write(`
        <html>
  <head>
    <title>Document</title>
  </head>
  <body>
      <h1>Here is your result ${result}</h1>
     
  </body>
</html>
        `);
    return res.end();
  });
};

module.exports = sumOfNumRequest;
