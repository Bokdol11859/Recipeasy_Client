import { AxiosPublic } from '@src/api/axios';

const refreshTokens = async () => {
  try {
    const refresh = localStorage.getItem('refresh');
    const response = await AxiosPublic.post('/token/refresh/', {
      refresh: refresh,
    });

    localStorage.setItem('refresh', response.data.refresh);
    localStorage.setItem('access', response.data.access);
    return true;
  } catch {
    // localStorage.clear();
    return false;
  }
};

export default refreshTokens;
