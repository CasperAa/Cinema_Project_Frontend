import "https://unpkg.com/navigo"  //Will create the global Navigo object used below

import {setActiveLink, loadTemplate, renderTemplate } from "./utils.js"
import {movieMethods } from "./js-pages/movies/movies.js"
import {setupLoginHandlers, logout} from "./js-pages/login/login.js";
import {setupRegisterHandlers} from "./js-pages/register/register.js";




window.addEventListener("load", async () => {
  const templateHome = await loadTemplate("./js-pages/movies/movies.html")
  const templateMovies = await loadTemplate("./js-pages/movies/movies.html")
  const templateLogin = await loadTemplate("./js-pages/login/login.html")
  const templateRegister = await loadTemplate("./js-pages/register/register.html")

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
      
    })

    .on( "/login", () => {
      renderTemplate(templateLogin,"content")
      setupLoginHandlers()
      logout()
    })

    .on( "/register", () => {
      renderTemplate(templateRegister,"content")
      setupRegisterHandlers()
    })

    });   

  window.onerror = (e) => alert(e)
