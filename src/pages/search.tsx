import React, { ChangeEvent, useState } from 'react';
import GNB from '../components/global/GNB';
import { BackArrowIcon, SearchIcon } from '@src/components/icons/SystemIcons';
import SearchTags from '@src/components/search/SearchSuggestion';
import SearchSuggestion from '@src/components/search/SearchSuggestion';
import SearchResult from '@src/components/search/SearchResult';

const Search = () => {
  const [query, setQuery] = useState('');

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <div className="w-full h-full px-5 pt-6">
        <div className="w-full mb-4 h-9 flex items-center justify-center">
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
              'relative flex-grow bg-[#F3F2F2] rounded-lg h-full text-black text-sm font-medium ' +
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
        {query.length === 0 ? <SearchSuggestion onClick={setQuery} /> : <SearchResult />}
      </div>
      <GNB />
    </>
  );
};

export default Search;
