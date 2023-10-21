import axios from 'axios';

const api = axios.create({
    baseURL: "https://popcorners-backend-f27ed30f40da.herokuapp.com",
});

export default api;

