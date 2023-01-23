import { useEffect, useState } from 'react';
import { LoadingLongLargeCard, LongLargeCard } from '../global/Cards';
import ThemeType from '@src/types/ThemeType';
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import { getThemeList, getUserInfo } from '@src/api/fetcher';

const SpecificTheme = () => {
  const { data, isLoading, error } = useQuery(['themes'], getThemeList);
  const userInfo = useQuery(['UserInfo'], getUserInfo);

  const isSavedTheme = (id: number) => {
    return userInfo.data.saved_themes.filter((theme: ThemeType) => theme.id === id).length === 1;
  };

  const [theme, setTheme] = useState(0);
  const [themeData, setThemeData] = useState([]);

  useEffect(() => {
    setThemeData(data['Theme Types'][theme].themes);
  }, [data, theme]);

  if (error) {
    return <div>Error occurred</div>;
  }

  return (
    <>
      {theme === 0 && (
        <div className="pt-14">
          <h1 className="text-2xl font-bold">재료 걱정은 그만!</h1>
          <h1 className="text-2xl font-bold">한 재료로 만든 N가지 레시피</h1>
        </div>
      )}

      {theme === 1 && (
        <div className="pt-14">
          <h1 className="text-2xl font-bold">방구석 셰프를 위한</h1>
          <h1 className="text-2xl font-bold">초간단 레시피!</h1>
        </div>
      )}

      <div className="flex items-center justify-start gap-3 py-4">
        <div
          onClick={() => {
            setTheme(0);
          }}
          className={theme === 0 ? ActiveTheme : InactiveTheme}>
          {data['Theme Types'][0].title}
        </div>
        <div
          onClick={() => {
            setTheme(1);
          }}
          className={theme === 1 ? ActiveTheme : InactiveTheme}>
          {data['Theme Types'][1].title}
        </div>
      </div>
      {isLoading ? (
        <div className="flex h-full w-full flex-col justify-start gap-y-4 overflow-y-scroll pb-80 pt-5 scrollbar-hide">
          {Array(10)
            .fill('')
            .map((_, idx) => (
              <LoadingLongLargeCard key={idx} />
            ))}
        </div>
      ) : (
        <div className="flex h-full w-full flex-col justify-start gap-y-4 overflow-y-scroll pb-80 pt-5 scrollbar-hide">
          {themeData.map((theme: ThemeType) => (
            <LongLargeCard
              key={theme.id}
              id={theme.id}
              title={theme.title}
              image={theme.portrait_image}
              duration={theme.duration}
              recipe_count={theme.recipe_count}
              isSaved={isSavedTheme(theme.id)}
            />
          ))}
        </div>
      )}
    </>
  );
};

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['themes'], getThemeList);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const ActiveTheme =
  'flex items-center justify-center bg-[#FE8C46] rounded-lg w-fit px-4 py-2 text-white font-semibold text-sm';
const InactiveTheme =
  'flex items-center justify-center bg-[#F3F2F2] rounded-lg w-fit px-4 py-2 text-[#B3B3B3] font-semibold text-sm';

export default SpecificTheme;
