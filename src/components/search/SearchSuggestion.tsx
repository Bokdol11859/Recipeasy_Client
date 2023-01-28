import React, { Dispatch, SetStateAction } from 'react';
import SearchTags from './SearchTags';

const SearchSuggestion = ({ onClick }: { onClick: Dispatch<SetStateAction<string>> }) => {
  const INGREDIENTS = ['계란', '감자'];

  const THEMES = ['3일', '5일', '자취생'];

  return (
    <div className="flex-grow">
      <div>
        <h1 className="text-sm font-bold text-black">재료 추천 검색어</h1>
        <div className="my-4 flex flex-wrap gap-3">
          {INGREDIENTS.map((ingredient) => (
            <SearchTags key={ingredient} onClick={onClick} text={ingredient} isIcon />
          ))}
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-sm font-bold text-black">테마 추천 검색어</h1>
        <div className="my-4 flex flex-wrap gap-3">
          {THEMES.map((theme) => (
            <SearchTags key={theme} onClick={onClick} text={theme} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchSuggestion;
