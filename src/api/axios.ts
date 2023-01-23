import refreshTokens from '@src/utils/refreshTokens';
import axios from 'axios';

export const AxiosPublic = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const AxiosPrivate = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
  },
});

AxiosPrivate.interceptors.request.use(async (req) => {
  const res = await refreshTokens();
  if (!res) {
    // window.location.href = '/';
  }
  const access = localStorage.getItem('access');
  req.headers = {
    Authorization: `Bearer ${access}`,
  };

  return req;
});
