import Image from 'next/image';
import React from 'react';

type RecipeSequenceProps = {
  order: number;
  short_desc: string;
  long_desc: string;
  image: string;
};

const RecipeSteps = ({ recipe_sequence }: { recipe_sequence: RecipeSequenceProps[] }) => {
  return (
    <div className="flex w-full flex-col gap-4 bg-white px-6 py-6">
      <p className=" text-lg font-bold">레시피 따라하기</p>
      {recipe_sequence?.map((recipe: RecipeSequenceProps) => (
        <div key={recipe.order} className="flex flex-col gap-4">
          <div className="flex items-center gap-4 rounded-xl bg-[#FBF9F6] p-4">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FE8C46] text-xs font-bold text-white">
              {recipe.order}
            </div>
            <p className="text-base font-medium">{recipe.short_desc}</p>
          </div>
          <div className="flex flex-col gap-4">
            <Image
              src={recipe.image}
              alt={String(recipe.order)}
              width={400}
              height={250}
              className=" rounded-xl object-cover"
            />
            <p className=" text-base font-medium">{recipe.long_desc}</p>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default RecipeSteps;
