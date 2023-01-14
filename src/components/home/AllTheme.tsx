import ThemeType from '@src/types/ThemeType';
import { LargeCard } from '../global/Cards';

const AllTheme = ({ data }: any) => {
  return (
    <>
      <div className="pt-14">
        <h1 className="text-2xl font-bold">오늘의 레시피지</h1>
        <h1 className="text-2xl font-bold">추천 테마는?</h1>
      </div>
      <div className="w-full h-full pb-64 pt-5 flex flex-wrap items-center justify-center gap-y-4 overflow-y-scroll scrollbar-hide">
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
