import React from 'react';

const ActiveStyle = `w-full h-12 bg-[#FE8C46] rounded-2xl flex items-center justify-center text-white`;
const InactiveStyle = `w-full h-12 bg-[#DFDFDF] rounded-2xl flex items-center justify-center text-[#7B7B7B]`;

const Button = ({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) => {
  return (
    <div className={active ? ActiveStyle : InactiveStyle} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
