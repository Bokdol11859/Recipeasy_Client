import { AxiosPrivate } from '@src/api/axios';
import Button from '@src/components/Button';
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

      push('/home');
    } catch {
      alert('Error');
    }
  };

  return (
    <div className="h-full w-full flex items-center justify-center px-6 flex-col">
      <div className="w-full flex items-center justify-center flex-col pb-[50%] grow gap-4">
        <h1 className="w-full text-black text-2xl font-bold">닉네임을 정해주세요</h1>
        <div className="relative w-full">
          <input
            className="w-full h-10 px-4 border-none bg-[#f3f2f2] rounded-lg font-medium text-sm text-[#b3b3b3] focus:text-black"
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
      <div className="w-full h-36 flex items-center justify-center">
        <Button active={name.length !== 0} onClick={handleClick}>
          시작하기
        </Button>
      </div>
    </div>
  );
};

export default Nickname;
