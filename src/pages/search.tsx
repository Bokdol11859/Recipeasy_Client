import React, { ChangeEvent, useState } from 'react';
import GNB from '../components/global/GNB';
import { BackArrowIcon, SearchIcon } from '@src/components/icons/SystemIcons';
import SearchTags from '@src/components/search/SearchSuggestion';
import SearchSuggestion from '@src/components/search/SearchSuggestion';
import SearchResult from '@src/components/search/SearchResult';
import useDebounce from '@src/hooks/useDebounce';

const Search = () => {
  const [query, setQuery] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const debouncedQuery = useDebounce(query);

  return (
    <>
      <div className="h-full w-full px-5 pt-6">
        <div className="mb-4 flex h-9 w-full items-center justify-center">
          {query.length > 0 && (
            <div className="mr-3">
              <BackArrowIcon
                onClick={() => {
                  setQuery('');
                }}
              />
            </div>
          )}
          <input
            className={
              'relative h-full flex-grow rounded-lg bg-[#F3F2F2] text-sm font-medium text-black ' +
              (query.length === 0 ? 'px-10' : 'px-4')
            }
            placeholder="재료 검색어를 입력해주세요"
            value={query}
            onChange={handleChange}
          />
          {query.length === 0 && (
            <div className="absolute top-8 left-8">
              <SearchIcon />
            </div>
          )}
        </div>
        {query.length === 0 ? <SearchSuggestion onClick={setQuery} /> : <SearchResult query={debouncedQuery} />}
      </div>
      <GNB />
    </>
  );
};

export default Search;
