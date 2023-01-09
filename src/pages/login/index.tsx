import styled from '@emotion/styled';
import { KakaoLogin } from '@src/components/icons/SocialIcons';
import COLOR from '@src/constants/theme';
import Image from 'next/image';
import React from 'react';

const Login = () => {
  return (
    <Container>
      <Logo>
        <Image src="/assets/LoginLogo.png" alt="Login Logo" width={220} height={90} />
      </Logo>
      <Footer>
        <KakaoLogin onClick={() => {}} />
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
