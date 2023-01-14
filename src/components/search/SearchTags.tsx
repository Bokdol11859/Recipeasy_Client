import React, { Dispatch, SetStateAction } from 'react';

const SearchTags = ({
  onClick,
  text,
  isIcon = false,
}: {
  onClick: Dispatch<SetStateAction<string>>;
  text: string;
  isIcon?: boolean;
}) => {
  return (
    <div
      className="flex h-10 items-center justify-center rounded-lg bg-[#FBF9F6] p-3"
      onClick={() => {
        onClick(text);
      }}>
      <p className="mr-1 text-base font-medium">{text}</p>
      {isIcon && <img src={`/assets/icons/${text}.svg`} width={20} height={20} />}
    </div>
  );
};

export default SearchTags;
