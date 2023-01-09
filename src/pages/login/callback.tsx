import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Callback = () => {
  const { query, isReady, push } = useRouter();

  const getData = async () => {
    const res = await fetch(`https://recipeasy.link/auth/kakao?code=${query.code}`);
    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    if (isReady) {
      getData();
      // save token
      push('/nickname');
    }
  }, [isReady]);

  return <div></div>;
};

export default Callback;
