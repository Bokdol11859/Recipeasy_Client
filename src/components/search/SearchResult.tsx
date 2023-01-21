import RecipeType from '@src/types/RecipeType';
import ThemeType from '@src/types/ThemeType';
import React, { useEffect, useState } from 'react';
import { LargeCard, LoadingLargeCard, LoadingSmallCard, SmallCard } from '../global/Cards';
import { useQuery } from '@tanstack/react-query';
import { queryRecipeList, queryThemeList } from '@src/api/fetcher';

const CATEGORY = {
  RECIPE: 'recipe',
  THEME: 'theme',
};

const SearchResult = ({ query }: { query: string }) => {
  const [category, setCategory] = useState(CATEGORY.RECIPE);
  // const themeQuery = useQuery(['searched_themes', query], () => queryThemeList(query));
  const recipeQuery = useQuery(['searched_recipes', query], () => queryRecipeList(query));

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
        <div className="grid h-full grid-cols-2 justify-items-center gap-x-2 gap-y-4 overflow-y-scroll pb-72 scrollbar-hide">
          {recipeQuery.isLoading
            ? Array(10)
                .fill('')
                .map((_, idx) => <LoadingSmallCard key={idx} />)
            : recipeQuery.data.map((recipe: RecipeType) => (
                <SmallCard key={recipe.id} id={recipe.id} title={recipe.title} image={'/assets/SmallCardDummy.png'} />
              ))}
        </div>
      )}

      {/* {category === CATEGORY.THEME &&
        (themeQuery.isLoading ? (
          <div className="flex w-full flex-wrap items-center justify-center gap-y-4 overflow-y-scroll pb-64 scrollbar-hide">
            {Array(10)
              .fill('')
              .map((_, idx) => (
                <LoadingLargeCard key={idx} />
              ))}
          </div>
        ) : (
          <div className="flex w-full flex-wrap items-center justify-center gap-y-4 overflow-y-scroll pb-64 scrollbar-hide">
            {themeQuery.data.map((theme: ThemeType) => (
              <LargeCard
                key={theme.id}
                id={theme.id}
                title={theme.title}
                image={theme.landscape_image}
                duration={theme.duration}
                recipe_count={theme.recipe_count}
              />
            ))}
          </div>
        ))} */}
    </>
  );
};

export const ActiveTab = 'font-extrabold text-lg';
export const InactiveTab = 'font-extrabold text-lg text-[#B3B3B3]';

export default SearchResult;
