import RecipeType from '@src/types/RecipeType';
import ThemeType from '@src/types/ThemeType';
import React from 'react';
import { LargeCard, LoadingLargeCard, LoadingSmallCard, SmallCard } from '../global/Cards';
import { useQuery } from '@tanstack/react-query';
import { getUserInfo, queryRecipeList, queryThemeList } from '@src/api/fetcher';
import { IngredientIcon, TimeIcon } from '../icons/SystemIcons';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import categoryState from '@src/atoms/categoryAtom';
import CATEGORY from '@src/constants/category';

const SearchResult = ({ query }: { query: string }) => {
  const [category, setCategory] = useRecoilState(categoryState);

  const userInfo = useQuery(['UserInfo'], getUserInfo);
  const themeQuery = useQuery(['searched_themes', query], () => queryThemeList(query), {
    enabled: category === CATEGORY.THEME,
  });
  const recipeQuery = useQuery(['searched_recipes', query], () => queryRecipeList(query), {
    enabled: category === CATEGORY.RECIPE,
  });

  const isSavedTheme = (id: number) => {
    return userInfo.data?.saved_themes.filter((theme: ThemeType) => theme.id === id).length === 1;
  };

  const isSavedRecipe = (id: number) => {
    return userInfo.data?.saved_recipes.filter((recipe: RecipeType) => recipe.id === id).length === 1;
  };

  const { push } = useRouter();

  const handleClick = (id: number) => {
    push(`theme/${id}`);
  };

  return (
    <>
      <div className="my-6 flex items-center justify-center gap-6 ">
        <p
          className={category === CATEGORY.RECIPE ? ActiveTab : InactiveTab}
          onClick={() => setCategory(CATEGORY.RECIPE)}>
          개별레시피
        </p>
        <p
          className={category === CATEGORY.THEME ? ActiveTab : InactiveTab}
          onClick={() => setCategory(CATEGORY.THEME)}>
          테마레시피
        </p>
      </div>

      {/* FIXME: fix grid issue with h-full property */}
      {category === CATEGORY.RECIPE && (
        <div className="grid h-full grid-cols-2 justify-items-center gap-x-2 gap-y-4 overflow-y-scroll pb-52 scrollbar-hide">
          {recipeQuery.isLoading
            ? Array(10)
                .fill('')
                .map((_, idx) => (
                  <div key={idx} className="flex flex-col gap-1">
                    <LoadingSmallCard />
                    <div className="flex items-center gap-1">
                      <TimeIcon />
                      <div className="mt-1 ml-1 h-4 w-[75%] animate-pulse bg-gray-300" />
                    </div>
                    <div className="flex items-center gap-1">
                      <IngredientIcon />
                      <div className="mt-1 ml-1 h-4 w-[75%] animate-pulse bg-gray-300" />
                    </div>
                  </div>
                ))
            : recipeQuery.data.map((recipe: RecipeType) => (
                <div key={recipe.id} className="flex flex-col gap-1">
                  <SmallCard
                    id={recipe.id}
                    title={recipe.title}
                    image={recipe.image}
                    isSaved={isSavedRecipe(recipe.id)}
                    onClick={() => {
                      push(`/recipe/${recipe.id}`);
                    }}
                  />
                  <div className="flex items-center gap-1">
                    <TimeIcon />
                    <p className="text-xs font-bold">{recipe.time_taken}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <IngredientIcon />
                    <p className="w-[80%] text-xs font-bold">
                      {recipe.required_ingredients.map((ingredient) => ingredient.name).join(', ')}
                    </p>
                  </div>
                </div>
              ))}
        </div>
      )}

      {category === CATEGORY.THEME &&
        (themeQuery.isLoading ? (
          <div className="flex w-full flex-wrap items-center justify-center gap-y-4 overflow-y-scroll pb-64 scrollbar-hide">
            {Array(10)
              .fill('')
              .map((_, idx) => (
                <LoadingLargeCard key={idx} />
              ))}
          </div>
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-start gap-y-4 overflow-y-scroll pb-52 scrollbar-hide">
            {themeQuery.data.map((theme: ThemeType) => (
              <LargeCard
                key={theme.id}
                id={theme.id}
                title={theme.title}
                image={theme.landscape_image}
                duration={theme.duration}
                recipe_count={theme.recipe_count}
                isSaved={isSavedTheme(theme.id)}
                onClick={() => handleClick(theme.id)}
              />
            ))}
          </div>
        ))}
    </>
  );
};

export const ActiveTab = 'font-extrabold text-lg';
export const InactiveTab = 'font-extrabold text-lg text-[#B3B3B3]';

export default SearchResult;
