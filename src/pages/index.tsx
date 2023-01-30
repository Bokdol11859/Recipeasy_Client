import { KakaoLogin } from '@src/components/icons/SocialIcons';
import COLOR from '@src/constants/theme';
import refreshTokens from '@src/utils/refreshTokens';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect } from 'react';

const Login = () => {
  const { push } = useRouter();

  const autoLogin = useCallback(async () => {
    const res = await refreshTokens();
    if (res) {
      push('/home');
    }
  }, [push]);

  useEffect(() => {
    autoLogin();
  }, [autoLogin]);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="flex w-full flex-grow items-center justify-center">
        <Image src="/assets/LoginLogo.png" alt="Login Logo" width={240} height={90} />
      </div>
      <div className="flex h-52 items-center justify-center">
        <KakaoLogin
          onClick={() => {
            push(
              `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`,
            );
          }}
        />
      </div>
    </div>
  );
};

export default Login;
