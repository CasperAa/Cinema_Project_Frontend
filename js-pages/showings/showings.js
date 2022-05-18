const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const movieURL = "https://api.themoviedb.org/3/movie/"
const APIkey = "?api_key=54a941ed644bdc17078cdb84d84995f2"


export function showingsMethods(match){
    let movieId = match.params.id
    console.log(movieURL + movieId + APIkey)
    getMovie(movieURL + movieId + APIkey);
    
}

async function getMovie(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    showMovie(data);
    console.log(data.title);
    console.log(data.release_date);
    console.log(data.vote_average);

}

function showMovie(movie) {
    document.getElementById("showings").innerHTML = "";
    const { poster_path, title, overview, release_date, vote_average, backdrop_path, runtime} = movie;

        const movieEl = document.createElement("div");
        movieEl.classList.add("selectedMovie");

        movieEl.innerHTML = `
        <div id="content-movie" style="background: src("${IMGPATH+backdrop_path}")>
            <h2>${title}</h2>
            <img
                src="${IMGPATH + poster_path}"
                alt="${title}"
            />
            <div class="movie-info">
            <h5>Summery:</h5>
            <p id="overview-text">${overview}</p
            <p id="release_date">Release Date - ${release_date} </p>
            <p id="vote_average">Public Rating - ${vote_average}/10 </p>        
            <p id="vote_average">Movie Length - ${runtime} minutes </p>
            
        <div>
        `;

        showings.appendChild(movieEl);
    }
