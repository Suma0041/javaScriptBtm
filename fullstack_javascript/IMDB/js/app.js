var search = document.getElementById("search");
search.addEventListener('keyup', e => {
//    console.log(e.target.value);

var searchText = e.target.value;
getMovies(searchText);
});

/*
function getMovies(searchText){
//    console.log(searchText);

const imdbApi = `http://www.omdbapi.com/?s=${searchText}&apikey=a9e29bfb`;
window
.fetch(imdbApi)
.then(movies => {
    movies
    .json() 
    .then(data => {
        console.log(data.Search);
    })
    .catch(err => console.log(err));
})
.catch(err => console.log(err));
}
*/


function getMovies(searchText){

    
    const imdbApi = `http://www.omdbapi.com/?s=${searchText}&apikey=a9e29bfb`;
    window
    .fetch(imdbApi)
    .then(movies => {
        movies
        .json()
        .then(data => {
            //console.log(data.Search);

            const MovieData = data.Search;
            var output = [];

            for(let movie of MovieData){
                output +=`
                
                <div class="container">
                <section id="movies">
                <h1>${movie.Title}</h1>
                <span class="badge badge-success">${movie.Year}</span>
                <span class="badge badge-primary">${movie.Rated}</span>
                <span class="badge badge-info">${movie.Released}</span>
                <span class="badge badge-info">${movie.Runtime}</span>
                <span class="badge badge-info">${movie.Genre}</span>

                <p>
                <img src="${movie.Poster}" class="img-poster"/>
                <p>${movie.Director}</p>
                <p>${movie.Languaage}</p>
                <p>${movie.Plot}</p>
                <p><button class="btn btn-dark btn=block">
                go To movie</button></p>
                </p>
                </section>
                </div>

                `;
                document.getElementById("template").innerHTML=output;
            }

        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
    }