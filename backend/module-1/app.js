const http = require("http");
const userReqHandler = require("./user");

const server = http.createServer(userReqHandler);

const PORT = 5500;

server.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});
