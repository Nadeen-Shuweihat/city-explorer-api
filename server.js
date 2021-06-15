
require ('dotenv').config();

const express = require("express");
const weatherHandler = require("./assest/weather.json");
const cors = require("cors");
const server = express();

const PORT = process.env.PORT;

server.use(cors());

server.get("/", (req, res) => {
  res.send("test test 1 2 1 2");
});

server.get("/weatherAll", (req, res) => {
  res.send(weatherHandler);
});

server.get("/weather", (req, res) => {
  // let lat = req.query.lat;
  // let lon = req.query.lon;
  let searchQuery = req.query.searchQuery;
  console.log(weatherHandler.city_name);


  
  class Forcast {
    constructor(day){
      (this.description = day.weather.description),
      (this.valid_date = day.valid_date) 
    }
  }
  
  let result = weatherHandler
  .find((item) => {
    if (searchQuery == item.city_name){
      return item
    }
  })
  
  .data.map((item) => {
    return new Forcast(item)
  })
  res.send(result);
 
});

server.get('*', (req,res) => {
  res.status(200).send('Sorry , not valid');
  

  

server.listen(PORT, () => {
  console.log(`listen on port ${PORT}`);
});
