import React, { useState } from 'react';
import GNB from '../components/global/GNB';
import { useQuery } from '@tanstack/react-query';
import { getUserInfo } from '@src/api/fetcher';
import { SettingIcon } from '@src/components/icons/SystemIcons';
import { LargeCard, SmallCard } from '@src/components/global/Cards';
import { useRouter } from 'next/router';
import RecipeType from '@src/types/RecipeType';
import ThemeType from '@src/types/ThemeType';

const CATEGORY = {
  SINGLE: 'single',
  THEME: 'theme',
};

const SINGLEDATA: RecipeType[] = Array(10)
  .fill('')
  .map((_, idx) => ({
    id: idx,
    title: '굴소스 계란볶음밥',
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

const MyPage = () => {
  const { isLoading, error, data } = useQuery(['UserInfo'], getUserInfo);

  const [category, setCategory] = useState(CATEGORY.SINGLE);

  const { push } = useRouter();

  if (isLoading) return <div>Loading...</div>;

  if (error) {
    alert(error);
  }

  return (
    <>
      <div className="w-full h-full px-6 pt-6">
        <div className="w-full flex justify-end items-center">
          <SettingIcon
            onClick={() => {
              push('/settings');
            }}
          />
        </div>
        <div className="flex items-center justify-between mt-6">
          <p className="text-2xl font-extrabold">{data.nickname}님</p>
        </div>
        <div className="flex items-center justify-center gap-6 mt-6">
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

        <div className="w-full mt-6 mb-3">
          <div className="w-28 h-7 bg-[#FFEEE3] rounded-lg flex items-center justify-center">
            {category === CATEGORY.SINGLE && (
              <p className="text-[#FE8C46] text-xs font-semibold">{SINGLEDATA.length}개의 개별 레시피</p>
            )}

            {category === CATEGORY.THEME && (
              <p className="text-[#FE8C46] text-xs font-semibold">{THEMEDATA.length}개의 테마 레시피</p>
            )}
          </div>
        </div>

        {category === CATEGORY.SINGLE && (
          <div className="w-full h-full pb-64 flex flex-wrap items-center justify-between gap-x-1 gap-y-4 overflow-y-scroll scrollbar-hide">
            {SINGLEDATA.map((data) => (
              <SmallCard key={data.id} id={data.id} title={data.title} isSaved={data.isSaved} image={data.image} />
            ))}
          </div>
        )}

        {category === CATEGORY.THEME && (
          <div className="w-full h-full pb-64 flex flex-wrap items-center justify-center gap-y-4 overflow-y-scroll scrollbar-hide">
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
      </div>
      <GNB />
    </>
  );
};

export const ActiveTab = 'font-extrabold text-lg';
export const InactiveTab = 'font-extrabold text-lg text-[#B3B3B3]';

export default MyPage;
