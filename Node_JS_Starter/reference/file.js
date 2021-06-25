const http = require("http");
const fs = require("fs");
http
  .createServer(function (req, res) {
    //open the file in the server and return the content
    fs.readFile("index.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
