const MOVIE_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=54a941ed644bdc17078cdb84d84995f2&page=1";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=54a941ed644bdc17078cdb84d84995f2&query=";




// initially get fav movies

export function movieMethods(){
    getMovies(MOVIE_API);
}


async function getMovies(url) {
    const resp = await fetch(url);
    const respData = await resp.json();

    console.log(respData);
    showMovies(respData.results);
}

function showMovies(movies) {
    document.getElementById("main").innerHTML = "";

    movies.forEach((movie) => {
        const { poster_path, title, overview } = movie;

        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");

        movieEl.innerHTML = `
        <div id="${title}">
            <img
                src="${IMGPATH + poster_path}"
                alt="${title}"
            />
            <div class="movie-info">
                <h4>${title}</h4>   
            </div>
            <div class="overview">
                <h5>Overview:</h5>
                ${overview}
                <br>
                <button id="button_+${title}" role="button"> 
                    View Showings 
                </button>
            </div>
        <div>
        `;

        main.appendChild(movieEl);
    });
}
