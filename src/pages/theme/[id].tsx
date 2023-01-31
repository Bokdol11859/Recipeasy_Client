import { getThemeDetail, getUserInfo, toggleTheme } from '@src/api/fetcher';
import Header from '@src/components/global/Header';
import RecipeList from '@src/components/theme/RecipeList';
import ThemeHeader from '@src/components/theme/ThemeHeader';
import useMutateData from '@src/hooks/useMutateData';
import useSavedData from '@src/hooks/useSavedData';
import ThemeType from '@src/types/ThemeType';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import React from 'react';

const ThemeDetail = () => {
  const { query } = useRouter();

  const { isSavedTheme } = useSavedData();
  const { themeMutation } = useMutateData(Number(query.id));

  const themeQuery = useQuery(['theme', query.id], () => getThemeDetail(Number(query.id)));

  return (
    <div className="h-full w-full overflow-y-scroll scrollbar-hide">
      <div className="px-6">
        <Header
          onClick={() => {
            themeMutation.mutate(themeQuery.data?.theme.id);
          }}
          isActive={isSavedTheme(themeQuery.data?.theme.id)}
          saveCount={themeQuery.data?.theme.save_count}
        />
        <ThemeHeader
          title={themeQuery.data?.theme.title}
          themeType={themeQuery.data?.theme_type_name}
          recipeCount={themeQuery.data?.theme.recipe_count}
          duration={themeQuery.data?.theme.duration}
        />
        <RecipeList recipes={themeQuery.data?.theme.recipes} />
      </div>
      <img src={themeQuery.data?.theme.tips} />
    </div>
  );
};

export default ThemeDetail;
