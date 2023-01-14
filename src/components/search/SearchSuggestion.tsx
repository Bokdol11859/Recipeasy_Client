import React, { Dispatch, SetStateAction } from 'react';
import SearchTags from './SearchTags';

const SearchSuggestion = ({ onClick }: { onClick: Dispatch<SetStateAction<string>> }) => {
  const INGREDIENTS = ['계란', '감자'];

  const THEMES = ['자취생 식단', '같은 재료'];

  return (
    <div className="flex-grow">
      <div>
        <h1 className="text-sm text-black font-bold">재료 추천 검색어</h1>
        <div className="flex flex-wrap gap-3 my-4">
          {INGREDIENTS.map((ingredient) => (
            <SearchTags key={ingredient} onClick={onClick} text={ingredient} isIcon />
          ))}
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-sm text-black font-bold">테마 추천 검색어</h1>
        <div className="flex flex-wrap gap-3 my-4">
          {THEMES.map((theme) => (
            <SearchTags key={theme} onClick={onClick} text={theme} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchSuggestion;
