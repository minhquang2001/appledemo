import axios from 'axios';

const httpRequest = axios.create({
    // baseURL: process.env.REACT_APP_BASE_URL,
    baseURL: 'https://api-uit.herokuapp.com/api/iphone',
});

export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};

export default httpRequest;
