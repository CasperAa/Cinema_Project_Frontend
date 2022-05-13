import "https://unpkg.com/navigo"  //Will create the global Navigo object used below

import {
  renderText,
  setActiveLink,
  loadTemplate,
  renderTemplate
} from "./utils.js"


import {showMovies, searchMovies} from "./js-pages/movies/movies.js"


window.addEventListener("load", async () => {
  const templateHome = await loadTemplate("./js-pages/home/home.html")
  const templateMovies = await loadTemplate("./js-pages/movies/movies.html")
 


  const router = new Navigo("/", { hash: true });
  router
    .hooks({
      before(done, match) {
        setActiveLink("menu", match.url)
        done()
      }
    })
    .on("/", () => renderText(templateHome, "content"))


    .on("/movies", () => {
      renderTemplate(templateMovies, "content")
      showMovies()
      searchMovies()
    },)


    .on( "/dates", (match) => { 
      renderTemplate(templateDates,"content")
    })


    .on( "/login", (match) => {
      renderTemplate(templateLogin,"content")
      addHandler(router)
    })
    
      .on( "/show-match", (match) => renderText(`<pre>${JSON.stringify(match, null, 2)}</pre>`, "content"))
      .notFound(() => renderText("No page for this route found", "content"))
      .resolve()
    },)
      


window.onerror = (e) => alert(e)