import { getRecipeDetail, getUserInfo, toggleRecipe } from '@src/api/fetcher';
import Header from '@src/components/global/Header';
import RecipeBody from '@src/components/recipe/RecipeBody';
import RecipeHeader from '@src/components/recipe/RecipeHeader';
import RecipeSteps from '@src/components/recipe/RecipeSteps';
import useSavedData from '@src/hooks/useSavedData';
import RecipeType from '@src/types/RecipeType';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import React from 'react';

const RecipeDetail = () => {
  const { query } = useRouter();
  const queryClient = useQueryClient();
  const recipeQuery = useQuery(['recipe', query.id], () => getRecipeDetail(Number(query.id)));
  const recipeMutation = useMutation(toggleRecipe, {
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['UserInfo'] });
      await queryClient.invalidateQueries({ queryKey: ['recipe', query.id] });
    },
  });
  const { isSavedRecipe } = useSavedData();

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
      <RecipeBody
        required_ingredients={recipeQuery.data?.data.required_ingredients}
        additional_ingredients={recipeQuery.data?.data.additional_ingredients}
        equipment={recipeQuery.data?.data.equipment}
      />
      <div className="h-4 w-full bg-[#FBF9F6]" />
      <RecipeSteps recipe_sequence={recipeQuery.data?.data.recipe_sequence} />
    </div>
  );
};

export default RecipeDetail;
