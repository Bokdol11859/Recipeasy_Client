import React from 'react';
import { BackArrowIcon, SaveIcon } from '../icons/SystemIcons';
import { useRouter } from 'next/router';

const Header = ({ saveCount, isActive, onClick }: { saveCount: number; isActive: boolean; onClick: () => void }) => {
  const { back } = useRouter();

  return (
    <div className="absolute top-0 left-0 z-10 flex h-20 w-full items-center justify-between bg-white px-6 pt-2">
      <BackArrowIcon onClick={back} />
      <div className="flex w-6 flex-col items-center justify-center">
        <SaveIcon onClick={onClick} isActive={isActive} />
        <p className="text-xs font-bold">{saveCount}</p>
      </div>
    </div>
  );
};

export default Header;
