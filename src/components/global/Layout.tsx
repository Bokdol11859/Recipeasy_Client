import React from 'react';
import COLOR from '../../constants/theme';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`h-full w-full m-auto max-w-md bg-[#FFFFFF] flex items-center justify-center relative`}>
      {children}
    </div>
  );
};

export default Layout;
