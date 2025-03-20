import axios from "axios";

const Api = axios.create({
    baseURL: 'https://api.aivault.world/api/auth/', // Ensure this is your API's base URL
    headers: {
        'Content-Type': 'application/json', // Fixed 'Content-type' to 'Content-Type'
    },
});

// Interceptors for requests
Api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken'); // Retrieve token from localStorage
        if (token) {
            config.headers.Authorization = `Bearer ${token}`; // Add token to Authorization header
        }
        return config;      
    },
    (error) => {
        return Promise.reject(error); // Handle request errors
    }
);

// Interceptors for responses
Api.interceptors.response.use(
    (response) => response, // Pass through successful responses
    (error) => {
        // Check if the response status is 401 (Unauthorized)
        if (error.response && error.response.status === 401) {
            window.location.href = '/login'; // Redirect to login page
        }
        return Promise.reject(error); // Handle other response errors
    }
);

export default Api;
