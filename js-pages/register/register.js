import { showPage } from "../utils.js"
import {LOCAL_SERVER_URL} from "../settings.js"
import {makeOptions} from "../../fetchUtils";
import {CLOUD_SERVER_URL} from "../../settings";

const URL = LOCAL_SERVER_URL + "/api/customers"

export function registerCustomer() {
    const customer = {}
    customer.email = document.getElementById("input-email").value
    customer.username = document.getElementById("input-username").value
    customer.birthday = document.getElementById("input-birthday").value
    customer.password = document.getElementById("input-password").value


    fetch(URL, makeOptions("POST", customer, true))
        .then(res => {
            if (!res.ok) {
                return Promise.reject("Error: " + res.status)
            }
            return res.json()
        })
        .then(newCustomer => {
            document.getElementById("customer-info-all").innerText = JSON.stringify(newCustomer)
        })
        .catch(e => console.error(e))
}