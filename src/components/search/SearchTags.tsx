import categoryState from '@src/atoms/categoryAtom';
import CATEGORY from '@src/constants/category';
import React from 'react';
import { useSetRecoilState } from 'recoil';

const SearchTags = ({
  onClick,
  text,
  isIcon = false,
}: {
  onClick: (param: string) => void;
  text: string;
  isIcon?: boolean;
}) => {
  const setCategory = useSetRecoilState(categoryState);

  return (
    <div
      className="flex h-10 items-center justify-center rounded-lg bg-[#FBF9F6] p-3"
      onClick={() => {
        onClick(text);
        if (isIcon) {
          setCategory(CATEGORY.RECIPE);
        } else {
          setCategory(CATEGORY.THEME);
        }
      }}>
      <p className="mr-1 text-base font-medium">{text}</p>
      {isIcon && <img src={`/assets/icons/${text}.svg`} width={20} height={20} />}
    </div>
  );
};

export default SearchTags;
