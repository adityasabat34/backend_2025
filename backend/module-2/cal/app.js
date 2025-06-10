const http = require("http");
const reqHandler = require("./calculator");

const server = http.createServer(reqHandler);

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});
