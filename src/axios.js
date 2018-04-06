import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8888/graduation-design-api/',
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
    },
    withCredentials: true,
    timeout: 3000,
});


instance.interceptors.response.use(({ data }) => { 
    return data;
}, error => Promise.reject(error));

export default instance;