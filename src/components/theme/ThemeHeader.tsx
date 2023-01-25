import React from 'react';
import { CalendarIcon, RiceIcon } from '../icons/SystemIcons';

type Props = {};

const ThemeHeader = ({
  title,
  themeType,
  recipeCount,
  duration,
}: {
  title: string;
  themeType: string;
  recipeCount: number;
  duration: number;
}) => {
  return (
    <div className="mt-20 w-full">
      <p className="text-xs font-medium text-[#B3B3B3]">{themeType}</p>
      <h1 className="text-2xl font-bold text-[#242424]">{title}</h1>
      <p className="mt-2 mb-10 w-[75%] text-sm font-medium text-[#7B7B7B]">
        매일 매일 간장계란밥? 질린다 질려! 계란으로 만든 5개의 레시피로 재료 걱정 없이 요리해보자!
      </p>
      <div className="flex gap-3">
        <div className="flex items-center justify-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F3F2F2]">
            <CalendarIcon />
          </div>
          <p className=" text-sm font-bold text-[#1E1E1E]">{duration}일 식단</p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F3F2F2]">
            <RiceIcon />
          </div>
          <p className=" text-sm font-bold text-[#1E1E1E]">{recipeCount}개 레시피</p>
        </div>
      </div>
    </div>
  );
};

export default ThemeHeader;
