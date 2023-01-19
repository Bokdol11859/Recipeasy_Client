import { useEffect, useState } from 'react';

const useDebounce = (query: string) => {
  const [debouncedQuery, setDebouncedQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  return debouncedQuery;
};

export default useDebounce;
