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
      className="h-10 bg-[#FBF9F6] rounded-lg p-3 flex items-center justify-center"
      onClick={() => {
        onClick(text);
      }}>
      <p className="text-base font-medium mr-1">{text}</p>
      {isIcon && <img src={`/assets/icons/${text}.svg`} width={20} height={20} />}
    </div>
  );
};

export default SearchTags;
