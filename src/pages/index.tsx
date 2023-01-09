import styled from '@emotion/styled';
import { KakaoLogin } from '@src/components/icons/SocialIcons';
import COLOR from '@src/constants/theme';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

const Login = () => {
  const { push } = useRouter();

  return (
    <Container>
      <Logo>
        <Image src="/assets/LoginLogo.png" alt="Login Logo" width={220} height={90} />
      </Logo>
      <Footer>
        <KakaoLogin
          onClick={() => {
            push(
              `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`,
            );
          }}
        />
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* background-color: ${COLOR.BACKGROUND}; */
`;

const Logo = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Footer = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Login;
