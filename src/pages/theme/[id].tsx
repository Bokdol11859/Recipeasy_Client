import { getThemeDetail, getUserInfo, toggleTheme } from '@src/api/fetcher';
import Header from '@src/components/global/Header';
import RecipeList from '@src/components/theme/RecipeList';
import ThemeHeader from '@src/components/theme/ThemeHeader';
import ThemeType from '@src/types/ThemeType';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

const ThemeDetail = () => {
  const { query } = useRouter();
  const userInfo = useQuery(['UserInfo'], getUserInfo);
  const recipeQuery = useQuery(['theme', query.id], () => getThemeDetail(Number(query.id)));

  const isSavedTheme = (id: number) => {
    return userInfo.data?.saved_themes.filter((theme: ThemeType) => theme.id === id).length === 1;
  };

  const queryClient = useQueryClient();

  const themeMutation = useMutation({
    mutationFn: (id: number) => toggleTheme(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['UserInfo'] });
      await queryClient.invalidateQueries({ queryKey: ['theme', query.id] });
    },
  });

  console.log(recipeQuery.data);
  return (
    <div className="h-full w-full overflow-y-scroll scrollbar-hide">
      <div className="px-6">
        <Header
          onClick={() => {
            themeMutation.mutate(recipeQuery.data?.theme.id);
          }}
          isActive={isSavedTheme(recipeQuery.data?.theme.id)}
          saveCount={recipeQuery.data?.theme.save_count}
        />
        <ThemeHeader
          title={recipeQuery.data?.theme.title}
          themeType={recipeQuery.data?.theme_type_name}
          recipeCount={recipeQuery.data?.theme.recipe_count}
          duration={recipeQuery.data?.theme.duration}
        />
        <RecipeList recipes={recipeQuery.data?.theme.recipes} />
      </div>
      <img src={recipeQuery.data?.theme.tips} />
    </div>
  );
};

export default ThemeDetail;
