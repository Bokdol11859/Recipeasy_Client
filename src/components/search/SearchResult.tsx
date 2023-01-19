import RecipeType from '@src/types/RecipeType';
import ThemeType from '@src/types/ThemeType';
import React, { useEffect, useState } from 'react';
import { LargeCard, SmallCard } from '../global/Cards';
import { useQuery } from '@tanstack/react-query';
import { queryRecipeList, queryThemeList } from '@src/api/fetcher';

const CATEGORY = {
  SINGLE: 'single',
  THEME: 'theme',
};

const TITLE = ['굴소스 계란볶음밥', '마약 김치찌개'];

const SINGLEDATA: RecipeType[] = Array(10)
  .fill('')
  .map((_, idx) => ({
    id: idx,
    title: TITLE[Math.round(Math.random())],
    isSaved: Boolean(Math.round(Math.random())),
    image: '/assets/SmallCardDummy.png',
  }));

const THEMEDATA: ThemeType[] = Array(20)
  .fill('')
  .map((_, idx) => ({
    id: idx,
    title: '테마 이름',
    isSaved: Boolean(Math.round(Math.random())),
    image: '/assets/LargeCardDummy.png',
    dayCount: Math.round(Math.random() * 3),
    recipeNum: Math.round(Math.random() * 5),
  }));

const SearchResult = ({ query }: { query: string }) => {
  const [category, setCategory] = useState(CATEGORY.SINGLE);

  return (
    <>
      <div className="my-6 flex items-center justify-center gap-6 ">
        <p
          className={category === CATEGORY.SINGLE ? ActiveTab : InactiveTab}
          onClick={() => setCategory(CATEGORY.SINGLE)}>
          개별레시피
        </p>
        <p
          className={category === CATEGORY.THEME ? ActiveTab : InactiveTab}
          onClick={() => setCategory(CATEGORY.THEME)}>
          테마레시피
        </p>
      </div>

      {category === CATEGORY.SINGLE && (
        <div className="flex h-full w-full flex-wrap items-center justify-between gap-x-1 gap-y-4 overflow-y-scroll pb-64 scrollbar-hide">
          {SINGLEDATA.filter((data) => data.title.includes(query)).map((data) => (
            <SmallCard key={data.id} id={data.id} title={data.title} isSaved={data.isSaved} image={data.image} />
          ))}
        </div>
      )}

      {category === CATEGORY.THEME && (
        <div className="flex h-full w-full flex-wrap items-center justify-center gap-y-4 overflow-y-scroll pb-64 scrollbar-hide">
          {THEMEDATA.map((data) => (
            <LargeCard
              key={data.id}
              id={data.id}
              title={data.title}
              isSaved={data.isSaved}
              image={data.image}
              dayCount={data.dayCount}
              recipeNum={data.recipeNum}
            />
          ))}
        </div>
      )}
    </>
  );
};

export const ActiveTab = 'font-extrabold text-lg';
export const InactiveTab = 'font-extrabold text-lg text-[#B3B3B3]';

export default SearchResult;
