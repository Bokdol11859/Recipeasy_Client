import ThemeType from '@src/types/ThemeType';
import { LargeCard, LoadingLargeCard } from '../global/Cards';
import { useEffect, useState } from 'react';

const AllTheme = ({ data }: any) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loading = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(loading);
    };
  }, []);

  return (
    <>
      <div className="pt-14 pb-6">
        <h1 className="text-2xl font-bold">오늘의 레시피지</h1>
        <h1 className="text-2xl font-bold">추천 테마는?</h1>
      </div>
      <div className="flex h-full w-full flex-wrap items-center justify-center gap-y-4 overflow-y-scroll pb-64 scrollbar-hide">
        {isLoading &&
          Array(10)
            .fill('')
            .map((_, idx) => <LoadingLargeCard key={idx} />)}
        {data.map((theme: ThemeType) => (
          <LargeCard
            key={theme.id}
            id={theme.id}
            title={theme.title}
            isSaved={theme.isSaved}
            image={theme.image}
            dayCount={theme.dayCount}
            recipeNum={theme.recipeNum}
          />
        ))}
      </div>
    </>
  );
};

export default AllTheme;
