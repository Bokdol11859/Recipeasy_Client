import { getUserInfo, refreshTokens } from '@src/api/fetcher';
import { KakaoLogin } from '@src/components/icons/SocialIcons';
import COLOR from '@src/constants/theme';
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
    <div className="w-full h-full flex items-center justify-center flex-col">
      <div className="flex items-center justify-center w-full flex-grow">
        <Image src="/assets/LoginLogo.png" alt="Login Logo" width={220} height={90} />
      </div>
      <div className="flex items-center justify-center h-52">
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
