import axios from 'axios';

const AuthService = {
    login: (credentials) => {
        return axios.post('/api/auth/login', credentials); // Update with actual backend endpoint
    },
    register: (userData) => {
        return axios.post('/api/auth/register', userData); // Update with actual backend endpoint
    },
    // Add more authentication methods as needed
};

export default AuthService;
