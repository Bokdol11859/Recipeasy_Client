import { getRecipeDetail, getUserInfo, toggleRecipe } from '@src/api/fetcher';
import Header from '@src/components/global/Header';
import RecipeHeader from '@src/components/recipe/RecipeHeader';
import RecipeType from '@src/types/RecipeType';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import React from 'react';

const RecipeDetail = () => {
  const { query } = useRouter();
  const queryClient = useQueryClient();

  const userInfo = useQuery(['UserInfo'], getUserInfo);
  const recipeQuery = useQuery(['recipe', query.id], () => getRecipeDetail(Number(query.id)));

  const recipeMutation = useMutation(toggleRecipe, {
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['UserInfo'] });
      await queryClient.invalidateQueries({ queryKey: ['recipe', query.id] });
    },
  });

  const isSavedRecipe = (id: number) => {
    return userInfo.data?.saved_recipes.filter((recipe: RecipeType) => recipe.id === id).length === 1;
  };

  return (
    <div className="h-full w-full overflow-y-scroll bg-[#FBF9F6] scrollbar-hide">
      <Header
        onClick={() => {
          recipeMutation.mutate(recipeQuery.data?.data.id);
        }}
        isActive={isSavedRecipe(recipeQuery.data?.data.id)}
        saveCount={recipeQuery.data?.data.save_count}
        color="#FBF9F6"
      />
      <RecipeHeader
        title={recipeQuery.data?.data.title}
        description={recipeQuery.data?.data.description}
        difficulty={recipeQuery.data?.data.difficulty}
        duration={recipeQuery.data?.data.time_taken}
      />
    </div>
  );
};

export default RecipeDetail;
