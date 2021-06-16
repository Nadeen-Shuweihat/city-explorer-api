const axios = require('axios');


class movieData {
    constructor(item){
        this.title = item.title,
        this.image = (`https://image.tmdb.org/t/p/w500${item.poster_path}`);
    }
}



function MovieFunction (req,res){
    
    const Key = process.env.MOVIE_KEY;
    
    let cityName = req.query.searchQuery;
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${Key}&region=${cityName}`;

    axios.get(url)
    .then((response) => {
        console.log(response);
       let result = response.data.results.map((item) => {
        return new movieData(item);
       })

       res.send(result);
    })
}

module.exports = MovieFunction;