import { AxiosPrivate, AxiosPublic } from '@src/api/axios';

export const getUserInfo = async () => {
  const res = await AxiosPrivate.get('/user');
  console.log(res.data);
  return res.data.data[0];
};

export const getThemeList = async () => {
  const res = await AxiosPrivate.get('/theme');
  return res.data;
};

export const queryRecipeList = async (query: string) => {
  const res = await AxiosPrivate.get(`/recipes/search/?q=${query}`);
  return res.data;
};

export const queryThemeList = async (query: string) => {
  const res = await AxiosPrivate.get(`/theme/search/?q=${query}`);
  return res.data;
};

export const toggleRecipe = async (id: number) => {
  const res = await AxiosPrivate.post(`/mypages/recipes/${id}/`);
  return res.data;
};

export const toggleTheme = async (id: number) => {
  const res = await AxiosPrivate.post(`/theme/${id}`);
  return res.data;
};
