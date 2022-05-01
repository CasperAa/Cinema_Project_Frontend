import{renderTemplate, setActive, showPage} from "./utils.js"
import{getAllPeople} from "./js-pages/seePeoplePage.js"
import{addPersonElement} from "./js-pages/addPerson.js"
import{searchPeople} from "./js-pages/peoplePage.js"

function renderMenuItems(evt) {
    const element = evt.target
    setActive(element)
    const id = element.id;
    renderTemplate(id)  //This setups the HTML for the page
    switch (id) {
      //Here you can execute JavaScript for the selected page
      case "page-1": {
        break
      }
      case "page-2": {
        getAllPeople()
        addPersonElement()
        searchPeople()

        break
      }
      case "page-3": {
        break
      }
    }
  }

document.getElementById("menu").onclick = renderMenuItems;
showPage("page-home") //Set the default page to render