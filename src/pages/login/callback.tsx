import { useRouter } from 'next/router';
import React, { useCallback, useEffect } from 'react';

const Callback = () => {
  const { query, isReady, push } = useRouter();

  const getData = useCallback(async () => {
    const res = await fetch(`https://recipeasy.link/auth/kakao?code=${query.code}`);
    const data = await res.json();
    console.log(data);
  }, [query]);

  useEffect(() => {
    if (isReady) {
      getData();
      // save token
      push('/nickname');
    }
  }, [isReady, getData, push]);

  return <div></div>;
};

export default Callback;
