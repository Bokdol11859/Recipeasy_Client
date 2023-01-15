import { AxiosPrivate } from '@src/api/axios';
import Button from '@src/components/global/Button';
import { DeleteIcon } from '@src/components/icons/SystemIcons';
import { useRouter } from 'next/router';
import React, { ChangeEvent, useState } from 'react';

const Nickname = () => {
  const [name, setName] = useState('');

  const { push } = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleClick = async () => {
    try {
      await AxiosPrivate.post('/user/nickname', {
        nickname: name,
      });

      localStorage.setItem('nickname', name);
      push('/home');
    } catch {
      alert('Error');
    }
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-6">
      <div className="flex w-full grow flex-col items-center justify-center gap-4 pb-[50%]">
        <h1 className="w-full text-2xl font-bold text-black">닉네임을 정해주세요</h1>
        <div className="relative w-full">
          <input
            className="h-10 w-full rounded-lg border-none bg-[#f3f2f2] px-4 text-sm font-medium text-[#b3b3b3] focus:text-black"
            placeholder="닉네임을 입력해주세요!"
            onChange={handleChange}
            value={name}
          />
          {name.length !== 0 && (
            <div className="absolute right-4 top-[33%]">
              <DeleteIcon
                onClick={() => {
                  setName('');
                }}
              />
            </div>
          )}
        </div>
      </div>
      <div className="flex h-36 w-full items-center justify-center">
        <Button active={name.length !== 0} onClick={handleClick}>
          시작하기
        </Button>
      </div>
    </div>
  );
};

export default Nickname;
