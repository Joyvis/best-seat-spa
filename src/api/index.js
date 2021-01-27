import axios from 'axios';

const bestSeatAPI = axios.create({
 baseURL: 'http://34.72.220.167:4000',
});

export default bestSeatAPI;
