import "https://unpkg.com/navigo"  //Will create the global Navigo object used below

import { renderText, setActiveLink, loadTemplate, renderTemplate } from "./utils.js"
import { movieMethods } from "./js-pages/movies/movies.js"
import { showingsMethods} from "./js-pages/showings/showings.js"




window.addEventListener("load", async () => {
  const templateHome = await loadTemplate("./js-pages/home/home.html")
  const templateMovies = await loadTemplate("./js-pages/movies/movies.html")
  const templateLogin = await loadTemplate("./js-pages/login/login.html")
  const templateSeats = await loadTemplate("./js-pages/selectSeat/selectSeat.html")
  const templateShowings = await loadTemplate("./js-pages/showings/showings.html")

  const router = new Navigo("/", { hash: true });
  router
    .hooks({
      before(done, match) {
        setActiveLink("menu", match.url)
        done()
      }
    })

    .on("/", () => {
      renderTemplate(templateHome, "content")
    })


    .on("/movies", () => {
      renderTemplate(templateMovies, "content")
      movieMethods()
      router.updatePageLinks()

    })
    
    .on("/showShowings", (match) => {
      renderTemplate(templateShowings,"content")
      console.log(JSON.stringify(match))
      showingsMethods(match)
    })

    .on( "/login", (match) => {
      renderTemplate(templateLogin,"content")
    })

    });   

  window.onerror = (e) => alert(e)
