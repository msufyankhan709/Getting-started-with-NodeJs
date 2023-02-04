const http = require("http");

const server = http.createServer((req, res) => {
//   res.write("Welcome to our home page");
//   res.end();
  if (req.url === "/") {
    res.end("Welcome to our home page.");
  }
  if (req.url === "/about") {
    res.end("Welcome to our about page");
  }
  res.end(`
    <h1>Oops</h1>
    <p>This is not the page, you are finding</p>
    <a href='/'>Home page</a>
    `);
});

server.listen(5000);
