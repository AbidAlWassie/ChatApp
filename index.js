const express = require("express");

// App setup
let app = express();
let server = app.listen(4000, () => {
  console.log("listening to 4000");
});

// Set static directory
app.use(express.static("public"));

// socket
let io = socket(server);

io.on("connection", (socket) => {
  console.log("made socket connection")
});