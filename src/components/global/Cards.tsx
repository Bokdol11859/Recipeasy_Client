import RecipeType from '@src/types/RecipeType';
import { SaveIcon } from '../icons/SystemIcons';
import ThemeType from '@src/types/ThemeType';

export const SmallCard = ({ id, title, image, isSaved }: RecipeType) => (
  <div className="relative flex flex-col">
    <img className="h-[260px] w-[42vw] max-w-[185px] rounded-xl" src={image} alt={title} />
    <div className="absolute bottom-8 right-2">
      <SaveIcon onClick={() => {}} isActive={isSaved} />
    </div>

    <h1 className="mt-1 w-full text-left text-sm font-bold text-black">{title}</h1>
  </div>
);

export const LoadingSmallCard = () => (
  <div className="relative flex flex-col">
    <div className="h-[260px] w-[42vw] max-w-[185px] animate-pulse rounded-xl bg-gray-300" />
    <div className="mt-1 h-4 w-full animate-pulse rounded-full bg-gray-300"></div>
  </div>
);

export const LargeCard = ({ id, title, image, isSaved, dayCount, recipeNum }: ThemeType) => (
  <div className="relative h-60 w-full max-w-[400px]">
    <img className="h-full w-full rounded-3xl brightness-50" src={image} alt={title} />
    <div className="absolute bottom-6 left-0 flex w-full flex-col px-6">
      <h1 className="text-xl font-bold text-white">{title}</h1>
      <div className="flex items-center justify-between">
        <p className="  text-xs font-medium text-white">
          {dayCount}일 식단 ∙ {recipeNum}개의 레시피
        </p>
        <SaveIcon onClick={() => {}} isActive={isSaved} />
      </div>
    </div>
  </div>
);

export const LoadingLargeCard = () => (
  <div className="relative h-60 w-full max-w-[400px]">
    <div className="h-full w-full animate-pulse rounded-3xl bg-gray-300" />
    <div className="absolute bottom-6 left-0 flex w-full flex-col px-6">
      <h1 className="h-6 w-[50%] animate-pulse rounded-full bg-gray-400 text-xl font-bold text-white" />
      <div className="mt-2 flex items-center justify-between">
        <p className="h-4 w-[40%] animate-pulse rounded-full bg-gray-400 text-xs font-medium text-white" />
      </div>
    </div>
  </div>
);

export const LongLargeCard = ({ id, title, image, isSaved, dayCount, recipeNum }: ThemeType) => (
  <div className="relative h-[424px] w-full max-w-[400px]">
    <img className="h-full w-full rounded-3xl brightness-50" src={image} alt={title} />
    <div className="absolute bottom-6 left-0 flex w-full flex-col px-6">
      <h1 className="text-xl font-bold text-white">{title}</h1>
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium text-white">
          {dayCount}일 식단 ∙ {recipeNum}개의 레시피
        </p>
        <SaveIcon onClick={() => {}} isActive={isSaved} />
      </div>
    </div>
  </div>
);

export const LoadingLongLargeCard = () => (
  <div className="relative h-[424px] w-full max-w-[400px] ">
    <img className="h-full w-full animate-pulse rounded-3xl bg-gray-300 " />
    <div className="absolute bottom-6 left-0 flex w-full flex-col px-6">
      <div className="h-6 w-[50%] animate-pulse rounded-full bg-gray-400 text-xl font-bold text-white" />
      <div className="mt-2 flex items-center justify-between">
        <p className="h-4 w-[40%] animate-pulse rounded-full bg-gray-400 text-xs font-medium text-white" />
      </div>
    </div>
  </div>
);
