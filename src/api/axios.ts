import axios from 'axios';

export const Axios = axios.create({
  baseURL: process.env.NEXT_APP_API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
  },
});
