import axios from 'axios';

const api = axios.create({
    baseURL: "https://pipoca-agil-backend-eb2b6ef17563.herokuapp.com/",
});

export default api;

