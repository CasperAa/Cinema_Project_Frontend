import {LOCAL_SERVER_URL} from "../../settings.js"
import {fetchData} from "./fetchProtectedData.js";
import {makeOptions, handleErrors} from "../../fetchUtils.js";

const URL = LOCAL_SERVER_URL + "customers/login"

export function setupLoginHandlers() {
    document.getElementById("btn-login").onclick = login
}

async function login() {
    const customer = {}
    customer.userName = document.getElementById("username").value
    customer.password = document.getElementById("password").value

    fetch(URL, makeOptions("POST", customer))
        .then(res => {
            if (!res.ok) {
                if (res.status === 401) {
                    return Promise.reject("Wrong user name or password")
                }
            }
            return res.json()
        })
        .then(response => {
            const token = response.token;
            setLoginState(token)
        })
        .catch(e => {
            document.getElementById("login-err").innerText = e;
        })

}

export function logout() {
    setLoginState(null)
}

function setLoginState(token, loggedInAs) {
    if (token) {
        sessionStorage.setItem("token", token)
        if (loggedInAs) {
            sessionStorage.setItem("logged-in-as", loggedInAs)
        }
    } else {
        sessionStorage.clear("token")
        sessionStorage.clear("logged-in-as")
    }
}

