import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.weatherapi.com/v1/',
});

export default client;
