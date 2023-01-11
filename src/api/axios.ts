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
  const refresh = localStorage.getItem('refresh');
  try {
    const response = await AxiosPublic.post('/token/refresh/', {
      refresh: refresh,
    });

    localStorage.setItem('refresh', response.data.refresh);
    localStorage.setItem('access', response.data.access);

    req.headers = {
      Authorization: `Bearer ${response.data.access}`,
    };
  } catch {
    //Refresh Token Expired
    window.location.href = '/';
  }
  return req;
});
