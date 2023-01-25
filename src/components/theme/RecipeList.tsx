import RecipeType from '@src/types/RecipeType';
import React from 'react';
import { SmallCard } from '../global/Cards';
import { useQuery } from '@tanstack/react-query';
import { getUserInfo } from '@src/api/fetcher';
import { IngredientIcon, TimeIcon } from '../icons/SystemIcons';

const RecipeList = ({ recipes }: { recipes: RecipeType[] }) => {
  const userInfo = useQuery(['UserInfo'], getUserInfo);

  const isSavedRecipe = (id: number) => {
    return userInfo.data?.saved_recipes.filter((recipe: RecipeType) => recipe.id === id).length === 1;
  };

  return (
    <div className="mt-2 mb-14 flex w-full snap-x snap-mandatory gap-3 overflow-x-scroll scrollbar-hide">
      {recipes?.map((recipe: RecipeType) => (
        <div key={recipe.id} className="flex snap-center flex-col gap-1">
          <SmallCard id={recipe.id} title={recipe.title} image={recipe.image} isSaved={isSavedRecipe(recipe.id)} />
          <div className="flex items-center gap-1">
            <TimeIcon />
            <p className="text-xs font-bold">{recipe.time_taken}</p>
          </div>
          <div className="flex items-center gap-1">
            <IngredientIcon />
            <p className="w-[85%] text-xs font-bold">
              {recipe.required_ingredients.map((ingredient) => ingredient.name).join(', ')}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;