import axios from 'axios';

const bestSeatAPI = axios.create({
 baseURL: 'http://localhost:4000',
});

export default bestSeatAPI;
