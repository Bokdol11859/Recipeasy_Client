import React from 'react';
import { HomeIcon, SaveIcon, SearchIcon } from '../icons/GNBIcons';
import { useRouter } from 'next/router';
import PATH from '../../constants/path';
import COLOR from '../../constants/theme';

const GNB = () => {
  const { pathname, push } = useRouter();
  return (
    <div className={`absolute bottom-0 left-0 flex h-20 w-full items-center justify-center rounded-t-3xl bg-[#FBF9F6]`}>
      <div
        className="flex h-full w-full items-center justify-center pb-6"
        onClick={() => {
          push(PATH.HOME);
        }}>
        <HomeIcon selected={pathname === PATH.HOME} />
      </div>
      <div
        className="flex h-full w-full items-center justify-center pb-6"
        onClick={() => {
          push(PATH.SEARCH);
        }}>
        <SearchIcon selected={pathname === PATH.SEARCH} />
      </div>
      <div
        className="flex h-full w-full items-center justify-center pb-6"
        onClick={() => {
          push(PATH.MYPAGE);
        }}>
        <SaveIcon selected={pathname === PATH.MYPAGE} />
      </div>
    </div>
  );
};

export default GNB;
