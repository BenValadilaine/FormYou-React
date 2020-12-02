import jwt_decode from "jwt-decode";

// API CONFIG
const API_BASE_URL = "https://form-you-api.herokuapp.com/api"

const API_ENDPOINTS = {
    "signup":"/signup",
    "signin":"/login",
    "signout":"/logout",
    "formations":"/formations",
    "roles":"/roles",
    "categories":"/categories"
}


export { API_BASE_URL, API_ENDPOINTS }