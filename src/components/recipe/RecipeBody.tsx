import { IngredientType } from '@src/types/IngredientType';
import React from 'react';
import { SubstituteIcon } from '../icons/SystemIcons';

const RecipeBody = ({
  required_ingredients,
  additional_ingredients,
  equipment,
}: {
  required_ingredients: IngredientType[];
  additional_ingredients: IngredientType[];
  equipment: { name: string }[];
}) => {
  return (
    <div className="w-full bg-white px-6 py-5">
      <div className="flex items-center justify-between">
        <p className="text-lg font-bold">필수 재료</p>
      </div>
      <div className="my-4 flex flex-col gap-5">
        {required_ingredients?.map((ingredient: IngredientType, idx) => (
          <div key={idx} className="flex justify-between">
            <div className="flex items-center justify-center gap-3">
              <div className="rounded-md bg-[#FBF9F6] p-1">
                <img src={`/assets/icons/${ingredient.name}.svg`} width={16} height={16} />
              </div>
              <p className="font-semibold">{ingredient.name}</p>
              {ingredient.substitute && (
                <div className="flex items-center gap-1 rounded-md bg-[#FBF9F6] px-2 py-1">
                  <SubstituteIcon /> <p className=" text-sm font-medium">{ingredient.substitute}</p>
                </div>
              )}
            </div>
            <p className="font-medium">{ingredient.quantity}</p>
          </div>
        ))}
      </div>
      <hr />
      <div className="my-4">
        <p className="text-lg font-bold">추가 재료</p>
        <div className="my-4 flex flex-col gap-5">
          {additional_ingredients?.map((ingredient: IngredientType, idx) => (
            <div key={idx} className="flex justify-between">
              <div className="flex items-center justify-center gap-3">
                <p className="font-semibold">{ingredient.name}</p>
                {ingredient.substitute && (
                  <div className="flex items-center gap-1 rounded-md bg-[#FBF9F6] px-2 py-1">
                    <SubstituteIcon /> <p className=" text-sm font-medium">{ingredient.substitute}</p>
                  </div>
                )}
              </div>
              <p className="font-medium">{ingredient.quantity}</p>
            </div>
          ))}
        </div>
        <div className="my-4">
          <p className="text-lg font-bold">필요 도구</p>
          <div className="flex gap-4 pt-2">
            {equipment?.map((equip, idx) => (
              <div
                key={idx}
                className="flex items-center gap-1 rounded-md bg-[#FBF9F6] px-2 py-1 text-sm font-semibold">
                {equip.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeBody;
