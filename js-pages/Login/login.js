import { showPage } from "../utils.js"
import {LOCAL_SERVER_URL} from "../settings.js"
import {makeOptions} from "../../fetchUtils";

const URL = LOCAL_SERVER_URL + "/auth/customers"

export function setupLoginHandlers() {
    document.getElementById("btn-login").onclick = login
}

function login() {
    const customer = {}
    customer.userName = document.getElementById("username").value
    customer.password = document.getElementById("password").value

    fetch(URL, makeOptions("POST", customer))
        .then(res => {
            if (!res.ok) {
                if (res.status == 401) {
                    return Promise.reject("Wrong user name or password")
                }
            }
            return res.json()
        })
        .then(response => {
            const token = response.token;
            setLoginState(token)
            showPage("page-about")
        })
        .catch(e => {
            document.getElementById("login-err").innerText = e;
        })

}

export function logout() {
    setLoginState(null)
    showPage("home")
}

export function setLoginState(token, loggedInAs) {
    if (token) {
        sessionStorage.setItem("token", token)
        if (loggedInAs) {
            sessionStorage.setItem("logged-in-as", loggedInAs)
        }
    } else {
        sessionStorage.clear("token")
        sessionStorage.clear("logged-in-as")
    }
    updateLoginDependentComponents()
}

export function updateLoginDependentComponents() {
    const loggedIn = sessionStorage.getItem("token")
    const loggedInAs = sessionStorage.getItem("logged-in-as")
    document.getElementById("logged-in-user").style.display = "none"
    document.getElementById("logged-in-admin").style.display = "none"
    document.getElementById("not-logged-in").style.display = "block"
    document.getElementById("user-role").innerText = ""
    if (loggedInAs === "ADMIN") {
        document.getElementById("logged-in-admin").style.display = loggedIn ? "block" : "none"
    }
    if (loggedInAs === "USER") {
        document.getElementById("logged-in-user").style.display = loggedIn ? "block" : "none"
    }
    if (loggedIn) {
        document.getElementById("not-logged-in").style.display = "none"
        document.getElementById("user-role").innerText = "Logged in as: " + loggedInAs
    }
    document.getElementById("page-login").style.display = loggedIn ? "none" : "block"
    document.getElementById("page-logout").style.display = loggedIn ? "block" : "none"
}