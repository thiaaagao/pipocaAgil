// apiService.js
import axios from 'axios';

const API_URL = 'https://pipoca-agil-backend-eb2b6ef17563.herokuapp.com'; //API COM DATA DE NASCIMENTO

export default {
    async CreateUserDo(userData) {
        try {
            const response = await axios.post(`${API_URL}/users`, userData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    // Defina outras funções para interagir com a API conforme necessário
};
