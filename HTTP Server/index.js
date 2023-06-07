// Modules
const http = require("http");
const path = require("path");
const fs = require("fs");

// Server Object
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(
      path.join(__dirname, "public", "index.html"),
      (err, content) => {
        res.writeHead(200, {
          "Content-Type": "text/html",
        });
        res.end("<h1>Home</h1>");
      }
    );
  }
});

const PORT = process.PORT || 5000;

server.listen(PORT, () => console.log("Server running on port " + PORT));
