const $mdl_http = require("node:http");
const $srv = $mdl_http.createServer();
$srv.addListener("request", function ($_req, $_res) {
  $_res.end("Hello");
});
$srv.listen(8000, "localhost:8000");
