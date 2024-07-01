const { createServer } = require("node:http");

const port = 3000;
const hostname = "127.0.0.1";

const server = createServer((req, res) => {
  res.status = 200;
  res.setHeader("content-Type", "text/plain");
  res.end("Hello world");
});

server.listen(port, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}/`);
});
