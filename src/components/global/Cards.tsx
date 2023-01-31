import { SaveIcon } from '../icons/SystemIcons';
import Image from 'next/image';
import useRecipeData from '@src/hooks/useRecipeData';
import useThemeData from '@src/hooks/useThemeData';

export const SmallCard = ({
  id,
  title,
  image,
  isSaved,
  onClick,
}: {
  id: number;
  title: string;
  image: string;
  isSaved: boolean;
  onClick: () => void;
}) => {
  const { recipeMutation } = useRecipeData(id);

  return (
    <div onClick={onClick} className="relative flex h-fit flex-col">
      <Image
        priority
        width={400}
        height={500}
        className="h-auto w-[42vw] max-w-[200px] rounded-xl bg-cover brightness-100"
        src={image}
        alt={title}
      />
      <div className="absolute bottom-8 right-2">
        <SaveIcon onClick={() => recipeMutation.mutate(id)} isActive={isSaved} />
      </div>

      <h1 className="mt-1 w-full text-left text-sm font-bold text-black">{title}</h1>
    </div>
  );
};

export const LoadingSmallCard = () => (
  <div className="relative flex flex-col">
    <div className="h-[300px] w-[42vw] max-w-[200px] animate-pulse rounded-xl bg-gray-300" />
    <div className="mt-1 ml-1 h-4 w-[75%] animate-pulse bg-gray-300" />
  </div>
);

export const LargeCard = ({
  id,
  title,
  image,
  duration,
  recipe_count,
  isSaved,
  onClick,
}: {
  id: number;
  title: string;
  image: string;
  duration: number;
  recipe_count: number;
  isSaved: boolean;
  onClick: () => void;
}) => {
  const { themeMutation } = useThemeData(id);

  return (
    <div className="relative h-60 w-full max-w-[400px]" onClick={onClick}>
      <Image
        priority
        width={400}
        height={300}
        className="h-full w-full rounded-3xl brightness-50"
        src={image}
        alt={title}
      />
      <div className="absolute bottom-6 left-0 flex w-full flex-col px-6">
        <h1 className="text-xl font-bold text-white">{title}</h1>
        <div className="flex items-center justify-between">
          <p className="text-xs font-medium text-white">
            {duration}일 식단 ∙ {recipe_count}개의 레시피
          </p>
          <SaveIcon onClick={() => themeMutation.mutate(id)} isActive={isSaved} />
        </div>
      </div>
    </div>
  );
};

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

export const LongLargeCard = ({
  id,
  title,
  image,
  duration,
  recipe_count,
  isSaved,
  onClick,
}: {
  id: number;
  title: string;
  image: string;
  duration: number;
  recipe_count: number;
  isSaved: boolean;
  onClick: () => void;
}) => {
  const { themeMutation } = useThemeData(id);

  return (
    <div className="relative h-[424px] w-full max-w-[400px]" onClick={onClick}>
      <Image
        priority
        width={400}
        height={800}
        className="h-full w-full rounded-3xl brightness-50"
        src={image}
        alt={title}
      />
      <div className="absolute bottom-6 left-0 flex w-full flex-col px-6">
        <h1 className="text-xl font-bold text-white">{title}</h1>
        <div className="flex items-center justify-between">
          <p className="text-xs font-medium text-white">
            {duration}일 식단 ∙ {recipe_count}개의 레시피
          </p>
          <SaveIcon onClick={() => themeMutation.mutate(id)} isActive={isSaved} />
        </div>
      </div>
    </div>
  );
};

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
