import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  headers: {
    accept: '*/*',
    'Content-Type': 'application/json',
  },
});

export default Api;
