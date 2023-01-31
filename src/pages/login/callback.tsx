import { AxiosPublic } from '@src/api/axios';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect } from 'react';

interface GetUserResponse {
  access: string;
  refresh: string;
  realname: string;
  nickname?: string | undefined;
  has_nickname?: boolean;
}

const Callback = () => {
  const { query, isReady, push } = useRouter();
  const getData = useCallback(async () => {
    const res = await AxiosPublic.get<GetUserResponse>(`auth/kakao?code=${query.code}`, {
      params: { redirect_uri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI },
    });

    localStorage.setItem('access', res.data.access);
    localStorage.setItem('refresh', res.data.refresh);

    if (res.data.has_nickname) {
      localStorage.setItem('nickname', res.data.nickname || '');
      push('/home');
    } else {
      push('/nickname');
    }
  }, [query, push]);

  useEffect(() => {
    if (isReady) {
      getData();
    }
  }, [isReady, getData, push]);

  return <div></div>;
};

export default Callback;
