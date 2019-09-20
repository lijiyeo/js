const http = require("http");
const fs = require("fs");
const path = require("path");
var server = http.createServer(function(req, res) {
    var htmlPath = path.join(__dirname, "/view/index.html");
    var htmlContent = fs.readFileSync(htmlPath);
    htmlContent = htmlContent.toString("utf8");
}).listen(8081);
console.log("server is listening 8081");