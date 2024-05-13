import axios from "axios";

export const axiosClient = axios.create({
    baseURL: 'https://www.themealdb.com/',
    timeout: 1000
})