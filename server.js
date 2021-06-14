const express = require("express");
const server = express();
// conts cors = require('cors');
// const weatherHandler = require("./assest/weather.json");

const PORT = 3010;

server.listen(PORT, () => {
  console.log(`listen on port ${PORT}`)
});
