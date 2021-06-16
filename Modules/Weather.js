const axios = require('axios');
const { response } = require('express');
const weatherHandler = require("../assest/weather.json");


class Forcast {
  constructor(day){
    (this.description = day.weather.description),
    (this.valid_date = day.valid_date) 
  }
}


function weatherOne (req, res) {
    // let lat = req.query.lat;
    // let lon = req.query.lon;
    let result = '';
    let searchQuery = req.query.searchQuery;
    console.log(weatherHandler[0].city_name);
  
  
    
    result = weatherHandler
    .find((day) => {
      if (searchQuery == day.city_name){
        return day
      }
    })
    
    .data.map((day) => {
      return new Forcast(day)
    })
    res.send(result);
   
  
}

function weatherTwo (req,res){
    const Key = process.env.WEATHER_KEY;
    let searchQuery = req.query.searchQuery;
    let url = ` http://api.weatherbit.io/v2.0/forecast/daily?city=${searchQuery}&key=${Key}`;

    axios.get(url)
    .then((response) =>{
        console.log(response.data);
    })
}

module.exports = weatherOne ;