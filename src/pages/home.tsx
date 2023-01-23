import React, { useState } from 'react';
import GNB from '../components/global/GNB';
import { ActiveTab, InactiveTab } from './mypage';
import AllTheme from '@src/components/home/AllTheme';
import SpecificTheme from '@src/components/home/SpecificTheme';

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
