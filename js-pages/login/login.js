
import { LOCAL_SERVER_URL } from "../../settings";
import {handleErrors, makeOptions} from "../../fetchUtils";

export function setupLoginHandlers() {
    document.getElementById("btn-login").onclick = login
}

async function login(evt) {
    evt.preventDefault()
    const credentials = {}
    credentials.email = document.getElementById("email").value
    credentials.password = document.getElementById("password").value
    const options = makeOptions("POST", credentials)
    try {
        const response = await fetch(LOCAL_SERVER_URL + "customer/login", options)
            .then(res => handleErrors(res.json()))
    } catch (err) {
        document.getElementById("error").innerText = err.message + " - Try again"
    }
}


