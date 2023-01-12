import axios from 'axios';
import { refreshTokens } from './fetcher';

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
    alert('로그인 만료');
    window.location.href = '/';
  }
  const access = localStorage.getItem('access');
  req.headers = {
    Authorization: `Bearer ${access}`,
  };

  return req;
});
