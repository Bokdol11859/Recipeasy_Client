import React, { useState } from 'react';
import GNB from '../components/global/GNB';
import { ActiveTab, InactiveTab } from './mypage';
import AllTheme from '@src/components/home/AllTheme';
import SpecificTheme from '@src/components/home/SpecificTheme';
import { useQuery } from '@tanstack/react-query';
import { getThemeList } from '@src/api/fetcher';

const SPECIFICDATA = [
  {
    id: 1,
    title: '자취생 초간단',
    themes: Array(20)
      .fill('')
      .map((_, idx) => ({
        id: idx,
        title: '테마 이름',
        isSaved: Boolean(Math.round(Math.random())),
        image: '/assets/LongLargeCardDummy.png',
        dayCount: Math.round(Math.random() * 3),
        recipeNum: Math.round(Math.random() * 5),
      })),
  },
  {
    id: 2,
    title: '한가지 재료',
    themes: Array(20)
      .fill('')
      .map((_, idx) => ({
        id: idx,
        title: '테마 이름',
        isSaved: Boolean(Math.round(Math.random())),
        image: '/assets/LongLargeCardDummy.png',
        dayCount: Math.round(Math.random() * 3),
        recipeNum: Math.round(Math.random() * 5),
      })),
  },
];

const CATEGORY = {
  ALL: 'all',
  THEME: 'theme',
};

const Home = () => {
  const [category, setCategory] = useState(CATEGORY.ALL);

  return (
    <>
      <div className="h-full w-full px-6">
        <div className="flex h-10 w-full items-center justify-start gap-5 pt-10">
          <p
            onClick={() => {
              setCategory(CATEGORY.ALL);
            }}
            className={category === CATEGORY.ALL ? ActiveTab : InactiveTab}>
            전체보기
            {category === CATEGORY.ALL && <div className="h-[2px] w-full bg-black" />}
          </p>

          <p
            onClick={() => {
              setCategory(CATEGORY.THEME);
            }}
            className={category === CATEGORY.THEME ? ActiveTab : InactiveTab}>
            테마별 보기
            {category === CATEGORY.THEME && <div className="h-[2px] w-full bg-black" />}
          </p>
        </div>
        {category === CATEGORY.ALL && <AllTheme />}
        {category === CATEGORY.THEME && <SpecificTheme />}
      </div>
      <GNB />
    </>
  );
};

export default Home;
