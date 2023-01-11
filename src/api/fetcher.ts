import { AxiosPrivate } from '@src/api/axios';

export const getUserInfo = async () => {
  const res = await AxiosPrivate.get('/user');
  console.log(res.data);
  return res.data.data[0];
};

export const getThemeList = async () => {
  const res = await AxiosPrivate.get('/theme');
  return res.data;
};
