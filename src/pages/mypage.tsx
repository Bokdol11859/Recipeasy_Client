import React from 'react';
import GNB from '../components/global/GNB';
import { useQuery } from '@tanstack/react-query';
import { getUserInfo } from '@src/api/fetcher';
import { useRouter } from 'next/router';

const MyPage = () => {
  const { isLoading, isError, data } = useQuery(['UserInfo'], getUserInfo);
  const { push } = useRouter();

  if (isLoading) return <div>Loading...</div>;

  if (isError) {
    push('/');
  }

  return (
    <>
      <div className="w-full h-full">{data.nickname}</div>
      <GNB />
    </>
  );
};

export default MyPage;
