const axios = require('axios');


class MovieData {
    constructor(item){
        this.title = item.title,
        this.image = (`https://image.tmdb.org/t/p/w500${item.poster_path}`);
        
    }
}

let movieSaved = {};

function MovieFunction (req,res){
    let cityName = req.query.searchQuery;
    const Key = process.env.MOVIE_KEY;
    
    
    
    if (movieSaved[cityName] !== undefined) {
        res.send(movieSaved[cityName]);
        console.log("get data from memory ");
      } else {
        let url = `https://api.themoviedb.org/3/search/movie?api_key=${Key}&query=${cityName}`;
        console.log("get data from API");

     axios.get(url)
     .then((response) => {
        // console.log(response);
         let result = response.data.results.map((item) => {
          return new MovieData(item);
        });
        movieSaved[cityName] = result;
        res.send(result);
      })

      .catch((error) => {
        res.status(500).send("no movie found Please select another");
      });
  }
}

module.exports = MovieFunction;