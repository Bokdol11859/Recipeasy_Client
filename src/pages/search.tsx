import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import GNB from '../components/global/GNB';
import { BackArrowIcon, SearchIcon } from '@src/components/icons/SystemIcons';
import SearchSuggestion from '@src/components/search/SearchSuggestion';
import SearchResult from '@src/components/search/SearchResult';
import { useRecoilState } from 'recoil';
import queryState from '@src/atoms/searchAtom';

const Search = () => {
  // FIXME: Set input, query to global state using redux/recoil
  const [input, setInput] = useState('');
  const [query, setQuery] = useRecoilState(queryState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery(input);
  };

  useEffect(() => {
    if (query.length > 0) {
      setInput(query);
    }
  }, []);

  return (
    <>
      <div className="h-full w-full px-5 pt-6">
        <div className="mb-4 flex h-9 w-full items-center justify-center">
          {query.length > 0 && (
            <div className="mr-3">
              <BackArrowIcon
                onClick={() => {
                  setQuery('');
                  setInput('');
                }}
              />
            </div>
          )}
          <form className="h-full flex-grow" onSubmit={handleSubmit}>
            <input
              className={
                'relative h-full w-full rounded-lg bg-[#F3F2F2] text-sm font-medium text-black ' +
                `${query.length === 0 ? 'px-10' : 'px-4'}`
              }
              placeholder="재료 검색어를 입력해주세요"
              value={input}
              onChange={handleChange}
            />
            {query.length === 0 && (
              <div className="absolute top-8 left-8">
                <SearchIcon />
              </div>
            )}
          </form>
        </div>
        {query.length === 0 ? (
          <SearchSuggestion
            onClick={(param) => {
              setInput(param);
              setQuery(param);
            }}
          />
        ) : (
          <SearchResult query={query} />
        )}
      </div>
      <GNB />
    </>
  );
};

export default Search;
