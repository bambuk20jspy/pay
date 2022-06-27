import axios from 'axios';

export const apiClient = axios.create({
    baseURL: 'https://app-pay-mern.herokuapp.com/api',
});