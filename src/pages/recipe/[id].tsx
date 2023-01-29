import { getRecipeDetail, getUserInfo, toggleRecipe } from '@src/api/fetcher';
import { BackArrowIcon, SaveIcon } from '@src/components/icons/SystemIcons';
import RecipeType from '@src/types/RecipeType';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import React from 'react';

const RecipeVideo = () => {
  const { query, back, isReady, push } = useRouter();
  const userInfo = useQuery(['UserInfo'], getUserInfo);

  const recipeQuery = useQuery(['recipe', query.id], () => getRecipeDetail(Number(query.id)));

  const isSavedRecipe = (id: number) => {
    return userInfo.data?.saved_recipes.filter((recipe: RecipeType) => recipe.id === id).length === 1;
  };

  const queryClient = useQueryClient();

  const recipeMutation = useMutation({
    mutationFn: (id: number) => toggleRecipe(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['UserInfo'] });
      await queryClient.invalidateQueries({ queryKey: ['recipe', query.id] });
    },
  });

  const handleClick = (id: number) => {
    push(`/recipe/detail/${id}`);
  };

  return (
    <div className="relative flex h-full w-full flex-col justify-between bg-black">
      <div className="z-10 flex h-36 w-full flex-col px-6 text-white">
        <div className="flex h-12 w-full items-center pt-2">
          <BackArrowIcon onClick={back} isWhite />
        </div>
        <h1 className="my-3 text-2xl font-bold">{recipeQuery.data?.data.title}</h1>
        <div
          onClick={(e) => {
            e.stopPropagation();
            push(`/theme/${recipeQuery.data?.theme_id}`);
          }}
          className="text-md z-10 flex h-fit w-fit items-center justify-center rounded-lg bg-white py-2 px-3 font-bold text-black">
          {recipeQuery.data?.theme}
        </div>
      </div>
      {isReady ? (
        <iframe
          src={`https://geo.dailymotion.com/player/xbi7j.html?video=${recipeQuery.data?.data.video_id}&loop=true`}
          className="absolute bottom-6 z-0 h-full w-full"
          allow="autoplay"
        />
      ) : (
        <div className="absolute bottom-6 z-0 h-full w-full" />
      )}

      <div className="z-10 flex h-24 w-full items-center justify-center gap-5 bg-black pb-4">
        <div
          onClick={() => handleClick(Number(query.id))}
          className="flex h-12 w-36 items-center justify-center rounded-[30px] bg-[#FE8C46] text-base font-medium text-white">
          자세히 보기
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
          <SaveIcon
            onClick={() => recipeMutation.mutate(Number(query.id))}
            isActive={isSavedRecipe(Number(query.id))}
          />
        </div>
      </div>
    </div>
  );
};

export default RecipeVideo;
