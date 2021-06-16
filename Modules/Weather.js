const axios = require('axios');
const { response } = require('express');
const weatherHandler = require("../assest/weather.json");

class Data {
    constructor(item){
        this.valid_date = item.valid_date,
        this.description = item.weather.description;
    }
}


function weatherOne (req, res) {
   
    let result = '';
    let searchQuery = req.query.searchQuery;
    
    result = weatherHandler
    .find((day) => {
      if (searchQuery == day.city_name){
        return day
      }
    })
    
    .data.map((day) => {
      return new Data(day)
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

        let result = response.data.data.map((item) => {
         return new Data(item);
        });

        res.send(result);
    })
 
     
    
}

module.exports = weatherOne ;
module.exports = weatherTwo ;