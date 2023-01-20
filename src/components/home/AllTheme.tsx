import ThemeType from '@src/types/ThemeType';
import { LargeCard, LoadingLargeCard } from '../global/Cards';
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import { getThemeList } from '@src/api/fetcher';

const AllTheme = () => {
  const { data, isLoading, error } = useQuery(['themes'], getThemeList);

  if (error) {
    return <div>Error has occurred</div>;
  }

  return (
    <>
      <div className="pt-14 pb-6">
        <h1 className="text-2xl font-bold">오늘의 레시피지</h1>
        <h1 className="text-2xl font-bold">추천 테마는?</h1>
      </div>
      {isLoading ? (
        <div className="flex w-full flex-col items-center justify-start gap-y-4 overflow-y-scroll pb-72 scrollbar-hide">
          {Array(10)
            .fill('')
            .map((_, idx) => (
              <LoadingLargeCard key={idx} />
            ))}
        </div>
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-start gap-y-4 overflow-y-scroll pb-72 scrollbar-hide">
          {data.Themes.map((theme: ThemeType) => (
            <LargeCard
              key={theme.id}
              id={theme.id}
              title={theme.title}
              image={theme.landscape_image}
              duration={theme.duration}
              recipe_count={theme.recipe_count}
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

export default AllTheme;
