import {LOCAL_SERVER_URL} from "../settings.js"
const URL = LOCAL_SERVER_URL+"/people"


let allPeople = []

export function getAllPeople(){
  if(allPeople.length > 0){
    makeRows(allPeople)
    return
  } 
  fetch(URL)
  .then(res=>res.json())
  .then(people=>{
    
    makeRows(people)
    allPeople = people
  })
  .catch(e=>console.error(e))
}

function makeRows(rows){
  const trows = rows.map(people=> `
  <tr class="rows-with-people">
  <td> ${people.firstName} </td>
  <td> ${people.lastName} </td>
  <td> ${people.email} </td>
  <td> ${people.phone} </td>
  <td> ${people.street} </td>
  <td> ${people.zipcode} </td>
  <td> ${people.city} </td>
  </tr>
  `).join("\n")
  document.getElementById("people-rows").innerHTML = trows
}

