const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=54a941ed644bdc17078cdb84d84995f2&query=";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const movieURL = "https://api.themoviedb.org/3/movie/"
const APIkey = "?api_key=54a941ed644bdc17078cdb84d84995f2"


export function showingsMethods(match){
    let movieId = match.params.id
    console.log(movieURL + movieId + APIkey)
    getMovie(movieURL + movieId + APIkey);
    
}

async function getMovie(url) {
    const resp = await fetch(url);
    const respData = await resp.json();

    console.log(respData);
    showMovie(respData.results);
}

function showMovie(movie) {
    document.getElementById("main").innerHTML = "";

        const movie = [poster_path, title, overview, release_date, vote_average]

        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");

        movieEl.innerHTML = `
        <div id="${title}">
            <h2>${title}</h2>
            <img
                src="${IMGPATH + poster_path}"
                alt="${title}"
            />
            <div class="movie-info">
            <h5>Overview:</h5>
            ${overview}
            <p id="release_date"> ${release_date} </p>
            <br>
            <p id="vote_average"> ${vote_average} </p>

            </div>
        <div>
        `;

        main.appendChild(movieEl);

}