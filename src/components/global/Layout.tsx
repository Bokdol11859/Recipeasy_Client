import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`relative m-auto flex h-full w-full max-w-md items-center justify-center bg-[#FFFFFF]`}>
      {children}
    </div>
  );
};

export default Layout;
