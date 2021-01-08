const express = require("express");

// App setup
let app = express();
let server = app.listen(4000, function () {
  console.log("listening to 4000");
});

// Static files
app.use(express.static("public"));