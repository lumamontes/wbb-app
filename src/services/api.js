import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.sportradar.us/ncaawb/trial/v8/en/'
})

export default api;
