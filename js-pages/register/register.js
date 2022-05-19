import {makeOptions} from "../../fetchUtils";
import {LOCAL_SERVER_URL} from "../../settings";

const URL = LOCAL_SERVER_URL + "customer/register"

export function setupRegisterHandlers() {
    document.getElementById("btn-register").onclick = registerCustomer
}

function registerCustomer() {
    const customer = {}
    customer.email = document.getElementById("input-email").value
    customer.username = document.getElementById("input-username").value
    customer.birthday = document.getElementById("input-birthday").value
    customer.password = document.getElementById("input-password").value


    fetch(URL, makeOptions("POST", customer))
        .then(res => res.json())
        .then(newCustomer => {
            document.getElementById("btn-register").innerText = JSON.stringify(newCustomer)
        })
        .catch(error => console.error(error))
}