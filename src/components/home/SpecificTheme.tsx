import { useState } from 'react';
import { LongLargeCard } from '../global/Cards';
import ThemeType from '@src/types/ThemeType';

const SpecificTheme = ({ data }: any) => {
  const ActiveTheme =
    'flex items-center justify-center bg-[#FE8C46] rounded-lg w-28 h-10 text-white font-semibold text-sm';
  const InactiveTheme =
    'flex items-center justify-center bg-[#F3F2F2] rounded-lg w-28 h-10 text-[#B3B3B3] font-semibold text-sm';

  const [theme, setTheme] = useState(0);

  return (
    <>
      {theme === 0 && (
        <div className="pt-14">
          <h1 className="text-2xl font-bold">방구석 셰프를 위한</h1>
          <h1 className="text-2xl font-bold">초간단 레시피!</h1>
        </div>
      )}

      {theme === 1 && (
        <div className="pt-14">
          <h1 className="text-2xl font-bold">재료 걱정은 그만!</h1>
          <h1 className="text-2xl font-bold">한 재료로 만든 N가지 레시피</h1>
        </div>
      )}

      <div className="flex items-center justify-start gap-3 py-4">
        <div
          onClick={() => {
            setTheme(0);
          }}
          className={theme === 0 ? ActiveTheme : InactiveTheme}>
          {data[0].title}
        </div>
        <div
          onClick={() => {
            setTheme(1);
          }}
          className={theme === 1 ? ActiveTheme : InactiveTheme}>
          {data[1].title}
        </div>
      </div>

      <div className="flex h-full w-full flex-wrap items-center justify-center gap-y-4 overflow-y-scroll pb-64 pt-5 scrollbar-hide">
        {theme === 0 &&
          data[0].themes.map((theme: ThemeType) => (
            <LongLargeCard
              key={theme.id}
              id={theme.id}
              title={theme.title}
              image={theme.image}
              dayCount={theme.dayCount}
              recipeNum={theme.recipeNum}
              isSaved={theme.isSaved}
            />
          ))}
        {theme === 1 &&
          data[1].themes.map((theme: ThemeType) => (
            <LongLargeCard
              key={theme.id}
              id={theme.id}
              title={theme.title}
              image={theme.image}
              dayCount={theme.dayCount}
              recipeNum={theme.recipeNum}
              isSaved={theme.isSaved}
            />
          ))}
      </div>
    </>
  );
};

export default SpecificTheme;
