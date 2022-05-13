const MOVIE_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=54a941ed644bdc17078cdb84d84995f2&page=1";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=54a941ed644bdc17078cdb84d84995f2&query=";



const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

// initially get fav movies
getMovies(MOVIE_API);

async function getMovies(url) {
    const resp = await fetch(url);
    const respData = await resp.json();

    console.log(respData);

    showMovies(respData.results);
}

export function showMovies(url){
    fetch(url).then(res => res.json())
    .then(function(data){
    data.results.forEach(element => {
      // Creating elemnts for our data inside the main tag. 
        const el = document.createElement('div');
        const image = document.createElement('img');
        const text = document.createElement('h2');

        text.innerHTML = `${element.title}`;
        image.src = IMGPATH + element.poster_path;
        el.appendChild(image);
        el.appendChild(text);
        main.appendChild(el);
    }); 
});
}


export function searchMovies(){
    // Prevent the Form from submitting if the search bar is empty.
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        main.innerHTML = '';
        
        const searchTerm = search.value;
    /* Adding the value wriiten in the search bar to the search Api,
        in order to get the movies we search for. */
        if (searchTerm) {
            showMovies(SEARCHAPI + searchTerm);
            search.value = "";
        }
    });
}