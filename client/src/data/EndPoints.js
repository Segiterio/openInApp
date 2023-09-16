
const BASE_URL = import.meta.env.VITE_BASE_URL;

 export const endpoints = {
    LOGIN:BASE_URL+"/login",
    SIGNUP:BASE_URL+"/signup",
    SENDOTP:BASE_URL+"/sendotp"
}