require ('dotenv').config();
const express = require("express");
const cors = require("cors");
const weatherHandler=require("./assest/weather.json")
const weatherOne = require('./Modules/Weather');
const weatherTwo = require('./Modules/Weather')
const MovieFunction = require('./Modules/Movies')

const server = express();
server.use(cors());

const PORT = process.env.PORT;


server.get("/", (req, res) => {
  res.send("test test 1 2 1 2");
});

server.get("/weatherAll", (req, res) => {
  res.send(weatherHandler);
});

server.get("/weather", weatherOne);
server.get('/weather2', weatherTwo);
server.get('/movies', MovieFunction);


server.get('*', (req,res) => {
  res.status(200).send('Sorry , not valid');
  
})
  

server.listen(PORT, () => {
  console.log(`listen on port ${PORT}`);
});
