import { AxiosPrivate } from '@src/api/axios';

export const getUserInfo = async () => {
  const res = await AxiosPrivate.get('/user');
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

export const getRecipeDetail = async (id: number) => {
  const res = await AxiosPrivate.get(`/recipes/${id}/`);
  return res.data;
};

export const getThemeDetail = async (id: number) => {
  const res = await AxiosPrivate.get(`/theme/${id}`);
  return res.data;
};
