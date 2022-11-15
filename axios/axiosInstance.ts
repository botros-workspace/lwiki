import axios from 'axios';
import { BASE_URL } from '../shared/constants/endpoints';

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    timeout: 5000,
    headers: {
        'Content-Type': 'multipart/form-data',
        accept: 'application/json',
    },
});
