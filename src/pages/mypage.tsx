import React, { useState } from 'react';
import GNB from '../components/global/GNB';
import { useQuery } from '@tanstack/react-query';
import { getUserInfo } from '@src/api/fetcher';
import { LargeCard, LoadingSmallCard, SmallCard } from '@src/components/global/Cards';
import { useRouter } from 'next/router';
import RecipeType from '@src/types/RecipeType';
import ThemeType from '@src/types/ThemeType';
import CATEGORY from '@src/constants/category';

const MyPage = () => {
  const { isLoading, error, data } = useQuery(['UserInfo'], getUserInfo);

  const [category, setCategory] = useState(CATEGORY.RECIPE);

  const { push } = useRouter();

  const handleClick = (id: number) => {
    push(`theme/${id}`);
  };

  if (error) {
    alert(error);
  }

  return (
    <>
      <div className="h-full w-full px-6 pt-6">
        <div className="flex w-full items-center justify-end"></div>
        <div className="mt-6 flex items-center justify-between">
          <p className="text-2xl font-extrabold">{data?.nickname}님</p>
        </div>
        <div className="mt-6 flex items-center justify-center gap-6">
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

        <div className="mt-6 mb-3 w-full">
          <div className="flex h-7 w-28 items-center justify-center rounded-lg bg-[#FFEEE3]">
            {category === CATEGORY.RECIPE && (
              <p className="text-xs font-semibold text-[#FE8C46]">{data?.saved_recipes.length || 0}개의 개별 레시피</p>
            )}

            {category === CATEGORY.THEME && (
              <p className="text-xs font-semibold text-[#FE8C46]">{data?.saved_themes.length || 0}개의 테마 레시피</p>
            )}
          </div>
        </div>

        {category === CATEGORY.RECIPE && (
          <div className="grid h-full w-full grid-cols-2 justify-items-center gap-x-4 gap-y-4 overflow-y-scroll pb-72 scrollbar-hide">
            {isLoading
              ? Array(10)
                  .fill('')
                  .map((_, idx) => <LoadingSmallCard key={idx} />)
              : data.saved_recipes.map((recipe: RecipeType) => (
                  <SmallCard
                    key={recipe.id}
                    id={recipe.id}
                    title={recipe.title}
                    image={recipe.image}
                    isSaved={true}
                    onClick={() => {
                      push(`/recipe/${recipe.id}`);
                    }}
                  />
                ))}
          </div>
        )}

        {category === CATEGORY.THEME && (
          <div className="flex h-full w-full flex-col items-center gap-y-4 overflow-y-scroll pb-72 scrollbar-hide">
            {data.saved_themes.map((theme: ThemeType) => (
              <LargeCard
                key={theme.id}
                id={theme.id}
                title={theme.title}
                image={theme.landscape_image}
                duration={theme.duration}
                recipe_count={theme.recipe_count}
                isSaved={true}
                onClick={() => handleClick(theme.id)}
              />
            ))}
          </div>
        )}
      </div>
      <GNB />
    </>
  );
};

export const ActiveTab = 'font-extrabold text-lg';
export const InactiveTab = 'font-extrabold text-lg text-[#B3B3B3]';

export default MyPage;
