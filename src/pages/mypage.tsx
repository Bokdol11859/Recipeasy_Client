import React from 'react';
import GNB from '../components/global/GNB';
import { useQuery } from '@tanstack/react-query';
import { getUserInfo } from '@src/api/fetcher';

const MyPage = () => {
  const { isLoading, error, data } = useQuery(['UserInfo'], getUserInfo);

  if (isLoading) return <div>Loading...</div>;

  if (error) return error;

  return (
    <>
      <div className="w-full h-full">{data.nickname}</div>
      <GNB />
    </>
  );
};

export default MyPage;
