import { getUserInfo } from '@src/api/fetcher';
import RecipeType from '@src/types/RecipeType';
import ThemeType from '@src/types/ThemeType';
import { useQuery } from '@tanstack/react-query';

const useSavedData = () => {
  const userInfo = useQuery(['UserInfo'], getUserInfo);

  const isSavedTheme = (id: number) => {
    return userInfo.data?.saved_themes.filter((theme: ThemeType) => theme.id === id).length === 1;
  };

  const isSavedRecipe = (id: number) => {
    return userInfo.data?.saved_recipes.filter((recipe: RecipeType) => recipe.id === id).length === 1;
  };

  return { isSavedRecipe, isSavedTheme };
};

export default useSavedData;
