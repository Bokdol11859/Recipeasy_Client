import { AxiosPrivate, AxiosPublic } from '@src/api/axios';

export const refreshTokens = async () => {
  try {
    const refresh = localStorage.getItem('refresh');
    const response = await AxiosPublic.post('/token/refresh/', {
      refresh: refresh,
    });

    localStorage.setItem('refresh', response.data.refresh);
    localStorage.setItem('access', response.data.access);
    return true;
  } catch {
    localStorage.clear();
    return false;
  }
};

export const getUserInfo = async () => {
  const res = await AxiosPrivate.get('/user');
  console.log(res.data);
  return res.data.data[0];
};

export const getThemeList = async () => {
  const res = await AxiosPrivate.get('/theme');
  return res.data;
};
