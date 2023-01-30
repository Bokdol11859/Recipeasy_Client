import React from 'react';
import { StarIcon, TimeIcon } from '../icons/SystemIcons';

const RecipeHeader = ({
  title,
  description,
  difficulty,
  duration,
}: {
  title: string;
  description: string;
  difficulty: number;
  duration: number;
}) => {
  return (
    <div className="mt-20 mb-4 w-full px-6">
      <h1 className="mb-2 text-xl font-extrabold text-[#242424]">{title}</h1>
      <p className="mb-4 text-sm font-medium text-[#7B7B7B]">{description}</p>
      <div className="flex w-full gap-5">
        <div className="flex h-fit w-full flex-col rounded-xl bg-white p-4">
          <p className="mb-2 text-xs font-medium text-[#242424]">난이도</p>
          <DifficultyIndicator difficulty={difficulty} />
        </div>
        <div className="flex h-fit w-full flex-col rounded-xl bg-white p-4">
          <p className=" mb-2 text-xs font-medium text-[#242424]">소요시간</p>
          <div className="color-[#242424] flex items-center gap-[6px] text-sm font-medium">
            <TimeIcon /> {duration}
          </div>
        </div>
      </div>
    </div>
  );
};

const DifficultyIndicator = ({ difficulty = 0 }: { difficulty: number }) => (
  <div className="flex gap-[6px]">
    {Array(difficulty)
      .fill('')
      .map((_, idx) => (
        <StarIcon key={idx} isActive />
      ))}
    {Array(5 - difficulty)
      .fill('')
      .map((_, idx) => (
        <StarIcon key={idx} />
      ))}
  </div>
);

export default RecipeHeader;
