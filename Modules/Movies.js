const axios = require('axios');


class movieData {
    constructor(item){
        this.title = item.title,
        this.image = (`https://image.tmdb.org/t/p/w500${item.poster_path}`);
        this.savedData ={};
    }
}



function MovieFunction (req,res){
    
    const Key = process.env.MOVIE_KEY;
    
    let cityName = req.query.searchQuery;
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${Key}&query=${cityName}`;
    console.log(url,'urlmovies');
    let result = '';

    axios.get(url)
    .then((response) => {
        console.log(response);
        if(cityName != this.savedData.cityName){
       result = response.data.results.map((item) => {
        return new movieData.savedData.push(item);
       })
    }else{ return this.savedData}

       res.send(result);
    })

}

module.exports = MovieFunction;