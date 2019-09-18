let express = require("express");
let path = require("path");
let app = express();

app.use("/", express.static(path.join(__dirname, "../client")));

// app.set("view engine", "html");

app.get("/", function(req, res) {
  res.sendFile(_dirname, "index.html");
});

app.listen(3000, "127.0.0.1");
